/* ============================================================
 * enhance.js — Interactive Enhancement Layer for System Guide
 * Dynamically loaded by scripts.js — auto-applies to all pages
 * ============================================================
 *
 * TABLE OF CONTENTS
 * ──────────────────────────────────────────────────────────────
 * LINE  30: §1 SG.register — Extensible custom element registration
 * LINE  60: §2 READING PROGRESS BAR — auto from scroll position
 * LINE  90: §3 BACK-TO-TOP BUTTON — appears on scroll down
 * LINE 120: §4 SIDEBAR TOC — auto-generates from .section-title
 * LINE 190: §5 URL HASH SYNC — update hash on scroll, support deep links
 * LINE 230: §6 SECTION FADE-IN — IntersectionObserver (moved from scripts.js)
 * LINE 260: §7 SKIP-TO-CONTENT — accessibility
 * LINE 280: §8 ANIMATED HERO COUNTERS — count-up on scroll
 * LINE 330: §9 QUIZ ENHANCEMENTS — hover states, keyboard nav, ARIA
 * LINE 380: §10 FLOW STEPPER KEYBOARD — arrow key navigation
 * LINE 410: §11 SMOOTH SCROLL — for dot-nav and anchor links
 * LINE 440: §12 PROGRESS TRACKING — localStorage section completion
 * LINE 480: §13 NEW CUSTOM ELEMENTS — sg-section-summary, sg-reading-time, etc.
 * ============================================================ */

(function() {
  'use strict';

  /* ────────────────────────────────────────────────────────────
     §1 SG.register — Extensible custom element helper
     ──────────────────────────────────────────────────────────── */
  window.SG = window.SG || {};

  SG.register = function(tagName, transformFn) {
    if (customElements.get(tagName)) return;
    customElements.define(tagName, class extends HTMLElement {
      connectedCallback() {
        var el = this;
        requestAnimationFrame(function() {
          var html = transformFn(el);
          if (html) el.outerHTML = html;
        });
      }
    });
  };


  /* ────────────────────────────────────────────────────────────
     §2 READING PROGRESS BAR
     ──────────────────────────────────────────────────────────── */
  function initProgressBar() {
    var bar = document.createElement('div');
    bar.className = 'sg-progress-bar';
    bar.style.width = '0%';
    document.body.appendChild(bar);

    var ticking = false;
    window.addEventListener('scroll', function() {
      if (!ticking) {
        requestAnimationFrame(function() {
          var scrollTop = window.scrollY || document.documentElement.scrollTop;
          var docHeight = document.documentElement.scrollHeight - window.innerHeight;
          var pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
          bar.style.width = Math.min(pct, 100) + '%';
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }


  /* ────────────────────────────────────────────────────────────
     §3 BACK-TO-TOP BUTTON
     ──────────────────────────────────────────────────────────── */
  function initBackToTop() {
    var btn = document.createElement('button');
    btn.className = 'sg-back-to-top';
    btn.innerHTML = '<i class="fa-solid fa-chevron-up"></i>';
    btn.setAttribute('aria-label', 'Back to top');
    btn.setAttribute('title', 'Back to top');
    document.body.appendChild(btn);

    btn.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    var visible = false;
    window.addEventListener('scroll', function() {
      var show = window.scrollY > 600;
      if (show !== visible) {
        visible = show;
        btn.classList.toggle('visible', show);
      }
    }, { passive: true });
  }


  /* ────────────────────────────────────────────────────────────
     §4 SIDEBAR TOC — auto-generated from .section-title elements
     ──────────────────────────────────────────────────────────── */
  function initSidebarTOC() {
    var sections = document.querySelectorAll('.section[id]');
    if (sections.length < 3) return; // too few sections for TOC

    var toc = document.createElement('nav');
    toc.className = 'sg-toc';
    toc.setAttribute('aria-label', 'Table of contents');

    var items = [];
    var num = 0;
    sections.forEach(function(sec) {
      var titleEl = sec.querySelector('.section-title');
      if (!titleEl) return;
      num++;
      // Shorten title: take first phrase before " — " or first 30 chars
      var fullTitle = titleEl.textContent.trim();
      var shortTitle = fullTitle.split(/\s*[—–]\s*/)[0].substring(0, 30);

      var item = document.createElement('a');
      item.className = 'sg-toc-item';
      item.href = '#' + sec.id;
      item.innerHTML = '<span class="sg-toc-num">' + num + '</span>' +
        '<span class="sg-toc-label">' + shortTitle + '</span>';
      item.setAttribute('title', fullTitle);
      item.addEventListener('click', function(e) {
        e.preventDefault();
        sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
        history.replaceState(null, '', '#' + sec.id);
      });
      toc.appendChild(item);
      items.push({ el: item, section: sec });
    });

    document.body.appendChild(toc);

    // Show TOC only on wide screens
    function checkWidth() {
      toc.classList.toggle('visible', window.innerWidth > 1100);
    }
    checkWidth();
    window.addEventListener('resize', checkWidth);

    // Highlight current section
    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          var match = items.find(function(it) { return it.section === entry.target; });
          if (match) match.el.classList.toggle('active', entry.isIntersecting);
        });
      }, { rootMargin: '-20% 0px -70% 0px' });
      sections.forEach(function(s) { observer.observe(s); });
    }
  }


  /* ────────────────────────────────────────────────────────────
     §5 URL HASH SYNC — update URL hash on scroll
     ──────────────────────────────────────────────────────────── */
  function initHashSync() {
    var sections = document.querySelectorAll('.section[id]');
    if (!sections.length) return;

    // On load, scroll to hash if present
    if (location.hash) {
      var target = document.querySelector(location.hash);
      if (target) {
        setTimeout(function() {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 500);
      }
    }

    // Update hash on scroll
    if ('IntersectionObserver' in window) {
      var currentId = '';
      var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting && entry.target.id !== currentId) {
            currentId = entry.target.id;
            history.replaceState(null, '', '#' + currentId);
          }
        });
      }, { rootMargin: '-30% 0px -60% 0px' });
      sections.forEach(function(s) { observer.observe(s); });
    }
  }


  /* ────────────────────────────────────────────────────────────
     §6 SECTION FADE-IN (moved from scripts.js inline)
     ──────────────────────────────────────────────────────────── */
  function initSectionFadeIn() {
    var secs = document.querySelectorAll('.section');
    if (!secs.length) return;
    if (!('IntersectionObserver' in window)) {
      secs.forEach(function(s) { s.classList.add('visible'); });
      return;
    }
    var obs = new IntersectionObserver(function(entries) {
      entries.forEach(function(e) {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
      });
    }, { threshold: 0.08 });
    secs.forEach(function(s) { obs.observe(s); });
  }


  /* ────────────────────────────────────────────────────────────
     §7 SKIP-TO-CONTENT
     ──────────────────────────────────────────────────────────── */
  function initSkipLink() {
    var main = document.querySelector('main');
    if (!main) return;
    if (!main.id) main.id = 'main-content';
    var link = document.createElement('a');
    link.className = 'sg-skip-link';
    link.href = '#' + main.id;
    link.textContent = 'Skip to content';
    document.body.insertBefore(link, document.body.firstChild);
  }


  /* ────────────────────────────────────────────────────────────
     §8 ANIMATED HERO COUNTERS
     ──────────────────────────────────────────────────────────── */
  function initHeroCounters() {
    var badges = document.querySelectorAll('.hero-badge, .page-meta span');
    if (!badges.length) return;

    badges.forEach(function(badge) {
      var text = badge.textContent;
      var match = text.match(/(\d+)\+?\s/);
      if (!match) return;

      var target = parseInt(match[1], 10);
      var suffix = text.replace(match[0], '');
      var counted = false;

      if ('IntersectionObserver' in window) {
        var obs = new IntersectionObserver(function(entries) {
          if (entries[0].isIntersecting && !counted) {
            counted = true;
            animateCount(badge, target, suffix, match[0].includes('+'));
            obs.unobserve(badge);
          }
        }, { threshold: 0.5 });
        obs.observe(badge);
      }
    });
  }

  function animateCount(el, target, suffix, hasPlus) {
    var start = 0;
    var duration = 1200;
    var startTime = null;
    function step(time) {
      if (!startTime) startTime = time;
      var progress = Math.min((time - startTime) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      var current = Math.round(eased * target);
      el.textContent = current + (hasPlus ? '+ ' : ' ') + suffix;
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }


  /* ────────────────────────────────────────────────────────────
     §9 QUIZ ENHANCEMENTS — ARIA roles + keyboard
     ──────────────────────────────────────────────────────────── */
  function initQuizEnhancements() {
    document.querySelectorAll('.knowledge-check').forEach(function(quiz) {
      var options = quiz.querySelectorAll('.kc-option');
      if (!options.length) return;

      // Add ARIA
      var group = quiz.querySelector('.kc-options');
      if (group) group.setAttribute('role', 'radiogroup');
      options.forEach(function(opt, i) {
        opt.setAttribute('role', 'radio');
        opt.setAttribute('aria-checked', 'false');
        opt.setAttribute('tabindex', i === 0 ? '0' : '-1');
      });

      // Keyboard navigation
      quiz.addEventListener('keydown', function(e) {
        var focused = document.activeElement;
        if (!focused || !focused.classList.contains('kc-option')) return;
        var idx = Array.prototype.indexOf.call(options, focused);

        if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
          e.preventDefault();
          var next = (idx + 1) % options.length;
          options[next].focus();
          options[next].setAttribute('tabindex', '0');
          focused.setAttribute('tabindex', '-1');
        } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
          e.preventDefault();
          var prev = (idx - 1 + options.length) % options.length;
          options[prev].focus();
          options[prev].setAttribute('tabindex', '0');
          focused.setAttribute('tabindex', '-1');
        } else if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          focused.click();
        }
      });
    });
  }


  /* ────────────────────────────────────────────────────────────
     §10 FLOW STEPPER KEYBOARD
     ──────────────────────────────────────────────────────────── */
  function initFlowKeyboard() {
    document.querySelectorAll('.flow-stepper').forEach(function(flow) {
      flow.setAttribute('tabindex', '0');
      flow.addEventListener('keydown', function(e) {
        var prev = flow.querySelector('.flow-prev');
        var next = flow.querySelector('.flow-next');
        if (e.key === 'ArrowLeft' && prev && !prev.disabled) { prev.click(); }
        if (e.key === 'ArrowRight' && next && !next.disabled) { next.click(); }
      });
    });
  }


  /* ────────────────────────────────────────────────────────────
     §11 SMOOTH SCROLL for all anchor links
     ──────────────────────────────────────────────────────────── */
  function initSmoothScroll() {
    document.addEventListener('click', function(e) {
      var link = e.target.closest('a[href^="#"]');
      if (!link) return;
      var target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        history.replaceState(null, '', link.getAttribute('href'));
      }
    });
  }


  /* ────────────────────────────────────────────────────────────
     §12 PROGRESS TRACKING — localStorage per-page
     ──────────────────────────────────────────────────────────── */
  function initProgressTracking() {
    var key = 'sg-progress-' + location.pathname;
    var data = {};
    try { data = JSON.parse(localStorage.getItem(key)) || {}; } catch(e) {}

    var sections = document.querySelectorAll('.section[id]');
    if (!sections.length || !('IntersectionObserver' in window)) return;

    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
          data[entry.target.id] = true;
          try { localStorage.setItem(key, JSON.stringify(data)); } catch(e) {}
        }
      });
    }, { threshold: 0.5 });

    sections.forEach(function(s) { observer.observe(s); });
  }


  /* ────────────────────────────────────────────────────────────
     §13 NEW CUSTOM ELEMENTS
     ──────────────────────────────────────────────────────────── */

  // <sg-section-summary> — styled summary box at end of section
  SG.register('sg-section-summary', function(el) {
    var text = el.innerHTML;
    return '<div class="sg-section-summary"><div class="sg-section-summary-header">' +
      '<i class="fa-solid fa-clipboard-check"></i> Key Takeaway</div>' +
      '<div class="sg-section-summary-body">' + text + '</div></div>';
  });

  // <sg-reading-time> — auto-calculates reading time from visible prose
  SG.register('sg-reading-time', function(el) {
    var main = document.querySelector('main');
    if (!main) return '';
    // Count only paragraph and heading text, skip SVGs/code/glossary
    var text = '';
    main.querySelectorAll('p, h2, h3, h4, li, td, blockquote').forEach(function(node) {
      if (!node.closest('svg, .glossary-panel, pre, code, .sg-glossary')) text += node.textContent + ' ';
    });
    var words = text.trim().split(/\s+/).length;
    var minutes = Math.ceil(words / 230);
    return '<span class="sg-reading-time-badge"><i class="fa-regular fa-clock"></i> ~' + minutes + ' min read</span>';
  });

  // <sg-difficulty level="beginner|intermediate|advanced"> — colored badge
  SG.register('sg-difficulty', function(el) {
    var level = el.getAttribute('level') || 'beginner';
    var colors = { beginner: '#10b981', intermediate: '#f59e0b', advanced: '#ef4444' };
    var color = colors[level] || '#10b981';
    return '<span class="sg-difficulty-badge" style="color:' + color + ';border-color:' + color + '">' +
      '<i class="fa-solid fa-signal"></i> ' + level.charAt(0).toUpperCase() + level.slice(1) + '</span>';
  });

  // <sg-share> — social share buttons
  SG.register('sg-share', function(el) {
    var url = encodeURIComponent(location.href);
    var title = encodeURIComponent(document.title);
    return '<div class="sg-share-bar">' +
      '<span class="sg-share-label">Share:</span>' +
      '<a href="https://twitter.com/intent/tweet?url=' + url + '&text=' + title + '" target="_blank" rel="noopener" class="sg-share-btn" title="Share on X/Twitter"><i class="fa-brands fa-x-twitter"></i></a>' +
      '<a href="https://www.linkedin.com/sharing/share-offsite/?url=' + url + '" target="_blank" rel="noopener" class="sg-share-btn" title="Share on LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>' +
      '<button class="sg-share-btn sg-copy-link" title="Copy link"><i class="fa-solid fa-link"></i></button>' +
      '</div>';
  });

  // <sg-key-terms terms="QPS, fan-out, sharding"> — terms preview
  SG.register('sg-key-terms', function(el) {
    var terms = (el.getAttribute('terms') || '').split(',').map(function(t) { return t.trim(); }).filter(Boolean);
    if (!terms.length) return '';
    var tags = terms.map(function(t) { return '<span class="sg-key-terms-tag">' + t + '</span>'; }).join('');
    return '<div class="sg-key-terms-box">' +
      '<span class="sg-key-terms-label"><i class="fa-solid fa-tags"></i> Key Terms</span>' +
      '<div class="sg-key-terms-list">' + tags + '</div></div>';
  });

  // <sg-prereq sections="estimation,baby-steps"> — prerequisite links
  SG.register('sg-prereq', function(el) {
    var sections = (el.getAttribute('sections') || '').split(',').map(function(s) { return s.trim(); }).filter(Boolean);
    if (!sections.length) return '';
    var links = sections.map(function(s) {
      var name = s.replace(/-/g, ' ').replace(/\b\w/g, function(c) { return c.toUpperCase(); });
      return '<a href="#' + s + '">' + name + '</a>';
    }).join(', ');
    return '<div class="sg-prereq-box"><i class="fa-solid fa-circle-info" style="color:#f59e0b;margin-right:0.4rem;"></i> <strong>Prerequisite:</strong> ' + links + '</div>';
  });

  // <sg-what-youll-learn> — teaser box
  SG.register('sg-what-youll-learn', function(el) {
    var content = el.innerHTML;
    return '<div class="sg-learn-box"><div class="sg-learn-header"><i class="fa-solid fa-graduation-cap"></i> What You\'ll Learn</div>' +
      '<div class="sg-learn-body">' + content + '</div></div>';
  });

  // <sg-practice-timer minutes="45"> — countdown timer
  SG.register('sg-practice-timer', function(el) {
    var mins = parseInt(el.getAttribute('minutes') || '45', 10);
    var id = 'sg-timer-' + Math.random().toString(36).substr(2, 6);
    return '<div class="sg-timer" id="' + id + '" data-minutes="' + mins + '">' +
      '<div class="sg-timer-display">' + mins + ':00</div>' +
      '<button class="sg-timer-btn sg-timer-start">Start</button>' +
      '<button class="sg-timer-btn sg-timer-reset">Reset</button>' +
      '</div>';
  });

  // <sg-feedback> — confused + report error buttons
  SG.register('sg-feedback', function(el) {
    return '<div class="sg-feedback-bar">' +
      '<button class="sg-feedback-btn sg-feedback-confused"><i class="fa-regular fa-face-frown"></i> I\'m confused</button>' +
      '<button class="sg-feedback-btn sg-feedback-error"><i class="fa-solid fa-flag"></i> Report an error</button>' +
      '</div>';
  });

  // Timer logic — init after all elements transformed
  function initTimers() {
    document.querySelectorAll('.sg-timer').forEach(function(timer) {
      if (timer.dataset.init) return;
      timer.dataset.init = '1';
      var mins = parseInt(timer.dataset.minutes || '45', 10);
      var totalSec = mins * 60;
      var remaining = totalSec;
      var interval = null;
      var display = timer.querySelector('.sg-timer-display');
      var startBtn = timer.querySelector('.sg-timer-start');
      var resetBtn = timer.querySelector('.sg-timer-reset');

      function update() {
        var m = Math.floor(remaining / 60);
        var s = remaining % 60;
        display.textContent = m + ':' + (s < 10 ? '0' : '') + s;
        if (remaining <= 0) { clearInterval(interval); interval = null; startBtn.textContent = 'Start'; startBtn.classList.remove('running'); }
      }

      startBtn.addEventListener('click', function() {
        if (interval) { clearInterval(interval); interval = null; startBtn.textContent = 'Resume'; startBtn.classList.remove('running'); }
        else { interval = setInterval(function() { remaining--; update(); }, 1000); startBtn.textContent = 'Pause'; startBtn.classList.add('running'); }
      });

      resetBtn.addEventListener('click', function() {
        clearInterval(interval); interval = null; remaining = totalSec; update();
        startBtn.textContent = 'Start'; startBtn.classList.remove('running');
      });
    });
  }

  // Feedback button logic
  function initFeedback() {
    document.addEventListener('click', function(e) {
      var btn = e.target.closest('.sg-feedback-confused, .sg-feedback-error');
      if (!btn) return;
      var section = btn.closest('.section');
      var sectionName = section ? (section.querySelector('.section-title') || {}).textContent || section.id : 'unknown';
      var type = btn.classList.contains('sg-feedback-confused') ? 'confused' : 'error';
      // Store in localStorage
      var key = 'sg-feedback';
      var data = {};
      try { data = JSON.parse(localStorage.getItem(key)) || {}; } catch(ex) {}
      if (!data[location.pathname]) data[location.pathname] = [];
      data[location.pathname].push({ section: sectionName, type: type, time: new Date().toISOString() });
      try { localStorage.setItem(key, JSON.stringify(data)); } catch(ex) {}
      btn.innerHTML = '<i class="fa-solid fa-check"></i> Noted — thanks!';
      btn.disabled = true;
      btn.style.color = '#10b981';
      btn.style.borderColor = '#10b981';
    });
  }

  // Copy link button logic
  function initCopyLink() {
    document.addEventListener('click', function(e) {
      var btn = e.target.closest('.sg-copy-link');
      if (!btn) return;
      navigator.clipboard.writeText(location.href).then(function() {
        btn.innerHTML = '<i class="fa-solid fa-check"></i>';
        setTimeout(function() { btn.innerHTML = '<i class="fa-solid fa-link"></i>'; }, 1500);
      }).catch(function() {});
    });
  }


  /* ────────────────────────────────────────────────────────────
     INIT — Run all enhancements
     ──────────────────────────────────────────────────────────── */
  function initAll() {
    if (window.__sgEnhanceLoaded) return;
    window.__sgEnhanceLoaded = true;
    initProgressBar();
    initBackToTop();
    initSidebarTOC();
    initHashSync();
    initSectionFadeIn();
    initSkipLink();
    initHeroCounters();
    initQuizEnhancements();
    initFlowKeyboard();
    initSmoothScroll();
    initProgressTracking();
    // Batch 7 features — run after custom elements transform
    setTimeout(function() {
      initTimers(); initFeedback(); initCopyLink();
      // Auto-apply .quote-block to long italic-only paragraphs in cards
      document.querySelectorAll('.card-body p, .collapsible-content p').forEach(function(p) {
        var em = p.querySelector('em');
        if (em && em === p.firstElementChild && em === p.lastElementChild && em.textContent.length > 40) {
          em.classList.add('quote-block');
        }
      });
    }, 600);
  }

  // Run when DOM is ready (enhance.js may load after DOMContentLoaded)
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
  } else {
    // DOM already ready — but wait for custom elements to transform
    setTimeout(initAll, 500);
  }

})();
