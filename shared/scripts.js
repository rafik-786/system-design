/* ============================================================
 *  System Guide — Shared Scripts (SPA Edition)
 *  Vanilla JS | No frameworks | Event-delegation | Fetch router
 * ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================
   *  SECTION A — GLOBAL ONE-TIME SETUP
   *  Event delegation on `document` — survives DOM swaps.
   * ========================================================== */

  /* ----------------------------------------------------------
   *  1. Card Accordion (event delegation)
   * -------------------------------------------------------- */
  document.addEventListener('click', (e) => {
    const title = e.target.closest('.card-title');
    if (!title) return;
    const card = title.closest('.card');
    if (!card) return;

    const body = card.querySelector('.card-body');
    if (!body) { card.classList.toggle('open'); return; }

    if (card.classList.contains('open')) {
      body.style.maxHeight = body.scrollHeight + 'px';
      requestAnimationFrame(() => {
        body.style.maxHeight = '0';
        body.style.paddingBottom = '0';
      });
      card.classList.remove('open');
    } else {
      card.classList.add('open');
      body.style.maxHeight = body.scrollHeight + 'px';
      body.style.paddingBottom = '1.25rem';
      const onEnd = () => {
        body.style.maxHeight = 'none';
        body.removeEventListener('transitionend', onEnd);
      };
      body.addEventListener('transitionend', onEnd);
    }
  });

  /* ----------------------------------------------------------
   *  2. Code block click-to-scroll (event delegation)
   * -------------------------------------------------------- */
  var activeBlock = null;
  document.addEventListener('click', (e) => {
    const body = e.target.closest('.macos-body');
    if (body) {
      if (activeBlock && activeBlock !== body) activeBlock.classList.remove('scroll-active');
      body.classList.add('scroll-active');
      activeBlock = body;
    } else {
      if (activeBlock) { activeBlock.classList.remove('scroll-active'); activeBlock = null; }
    }
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && activeBlock) { activeBlock.classList.remove('scroll-active'); activeBlock = null; }
  });

  /* ----------------------------------------------------------
   *  3. Fullscreen Toggle
   * -------------------------------------------------------- */
  document.addEventListener('click', (e) => {
    var btn = e.target.closest('#fullscreenBtn');
    if (!btn) return;
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  });
  document.addEventListener('fullscreenchange', () => {
    var btn = document.getElementById('fullscreenBtn');
    if (!btn) return;
    btn.classList.toggle('active', !!document.fullscreenElement);
    var icon = btn.querySelector('i');
    if (icon) {
      icon.className = document.fullscreenElement ? 'fa-solid fa-compress' : 'fa-solid fa-expand';
    }
  });

  /* ----------------------------------------------------------
   *  4. Theme Switcher (event delegation)
   * -------------------------------------------------------- */
  document.addEventListener('click', (e) => {
    var themeBtn = e.target.closest('#themeBtn');
    if (themeBtn) {
      e.stopPropagation();
      var dd = document.getElementById('themeDropdown');
      if (dd) dd.classList.toggle('open');
      return;
    }
    var opt = e.target.closest('.theme-option');
    if (opt) {
      var theme = opt.dataset.theme;
      if (theme === 'navy') document.documentElement.removeAttribute('data-theme');
      else document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('wiki-theme', theme);
      var dd2 = document.getElementById('themeDropdown');
      if (dd2) {
        dd2.querySelectorAll('.theme-option').forEach(function(o) { o.classList.toggle('active', o.dataset.theme === theme); });
        dd2.classList.remove('open');
      }
      return;
    }
    // Close theme dropdown on outside click
    var dd3 = document.getElementById('themeDropdown');
    if (dd3) dd3.classList.remove('open');
  });

  /* ----------------------------------------------------------
   *  5. Q&A Accordion (event delegation)
   * -------------------------------------------------------- */
  document.addEventListener('click', (e) => {
    const header = e.target.closest('.qa-header');
    if (!header) return;
    const item = header.closest('.qa-item');
    if (!item) return;

    const body = item.querySelector('.qa-body');
    if (!body) { item.classList.toggle('active'); return; }

    if (item.classList.contains('active')) {
      body.style.maxHeight = body.scrollHeight + 'px';
      requestAnimationFrame(() => { body.style.maxHeight = '0'; });
      item.classList.remove('active');
    } else {
      item.classList.add('active');
      body.style.maxHeight = body.scrollHeight + 'px';
      const onEnd = () => { body.style.maxHeight = 'none'; body.removeEventListener('transitionend', onEnd); };
      body.addEventListener('transitionend', onEnd);
    }
  });

  /* ----------------------------------------------------------
   *  6. Collapsible Sections (event delegation)
   * -------------------------------------------------------- */
  document.addEventListener('click', (e) => {
    const header = e.target.closest('.collapsible-header');
    if (!header) return;
    const section = header.closest('.collapsible');
    if (!section) return;

    const content = section.querySelector('.collapsible-content');
    if (!content) { section.classList.toggle('active'); return; }

    if (section.classList.contains('active')) {
      content.style.maxHeight = content.scrollHeight + 'px';
      requestAnimationFrame(() => { content.style.maxHeight = '0'; });
      section.classList.remove('active');
    } else {
      section.classList.add('active');
      content.style.maxHeight = content.scrollHeight + 'px';
      const onEnd = () => { content.style.maxHeight = 'none'; content.removeEventListener('transitionend', onEnd); };
      content.addEventListener('transitionend', onEnd);
    }
  });

  /* ----------------------------------------------------------
   *  7. Tab Switcher (event delegation)
   * -------------------------------------------------------- */
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.tab-btn');
    if (!btn) return;
    const container = btn.closest('.tab-container');
    if (!container) return;
    const targetTab = btn.getAttribute('data-tab');
    if (!targetTab) return;

    const header = btn.closest('.tab-header');
    if (header) {
      header.querySelectorAll('.tab-btn').forEach((b) => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
    }
    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');

    container.querySelectorAll(':scope > .tab-panel, :scope > div > .tab-panel').forEach((p) => {
      p.classList.remove('active');
    });
    const panel = document.getElementById(targetTab);
    if (panel) panel.classList.add('active');
  });

  /* ----------------------------------------------------------
   *  8. Diagram Toggle (event delegation)
   * -------------------------------------------------------- */
  document.addEventListener('click', (e) => {
    const toggle = e.target.closest('.diagram-toggle');
    if (!toggle) return;
    toggle.classList.toggle('open');
    const container = toggle.nextElementSibling;
    if (container && container.classList.contains('mermaid-container')) {
      container.classList.toggle('collapsed');
    }
  });

  /* ----------------------------------------------------------
   *  9. Diagram Zoom (Ctrl+wheel, pinch, drag, dbl-click)
   *     All event delegation on document — survives DOM swaps.
   * -------------------------------------------------------- */
  (function () {
    var ZOOM_MIN = 0.5, ZOOM_MAX = 3;

    function getState(svg) {
      return {
        zoom: parseFloat(svg.dataset.zoom) || 1,
        panX: parseFloat(svg.dataset.panX) || 0,
        panY: parseFloat(svg.dataset.panY) || 0
      };
    }
    function applyTransform(svg, zoom, panX, panY) {
      svg.dataset.zoom = zoom;
      svg.dataset.panX = panX;
      svg.dataset.panY = panY;
      svg.style.transformOrigin = '0 0';
      svg.style.transform = 'translate(' + panX + 'px,' + panY + 'px) scale(' + zoom + ')';
    }
    function resetTransform(svg) {
      applyTransform(svg, 1, 0, 0);
    }

    document.addEventListener('wheel', function (e) {
      if (!e.ctrlKey) return;
      var wrapper = e.target.closest('.uml-diagram-wrapper');
      if (!wrapper) return;
      e.preventDefault();
      var svg = wrapper.querySelector('svg');
      if (!svg) return;
      var s = getState(svg);
      var delta = e.deltaY > 0 ? -0.04 : 0.04;
      var newZoom = Math.min(Math.max(s.zoom + delta, ZOOM_MIN), ZOOM_MAX);
      if (newZoom === 1) { resetTransform(svg); return; }
      applyTransform(svg, newZoom, s.panX, s.panY);
      wrapper.style.cursor = newZoom > 1 ? 'grab' : '';
    }, { passive: false });

    var dragState = null;
    document.addEventListener('mousedown', function (e) {
      var wrapper = e.target.closest('.uml-diagram-wrapper');
      if (!wrapper) return;
      var svg = wrapper.querySelector('svg');
      if (!svg) return;
      var s = getState(svg);
      if (s.zoom <= 1) return;
      e.preventDefault();
      wrapper.style.cursor = 'grabbing';
      dragState = { svg: svg, wrapper: wrapper, startX: e.clientX, startY: e.clientY, panX: s.panX, panY: s.panY };
    });
    document.addEventListener('mousemove', function (e) {
      if (!dragState) return;
      e.preventDefault();
      var dx = e.clientX - dragState.startX;
      var dy = e.clientY - dragState.startY;
      var s = getState(dragState.svg);
      applyTransform(dragState.svg, s.zoom, dragState.panX + dx, dragState.panY + dy);
    });
    document.addEventListener('mouseup', function () {
      if (dragState) { dragState.wrapper.style.cursor = getState(dragState.svg).zoom > 1 ? 'grab' : ''; dragState = null; }
    });

    var pinchState = null;
    var touchPanState = null;
    document.addEventListener('touchstart', function (e) {
      var wrapper = e.target.closest('.uml-diagram-wrapper');
      if (!wrapper) return;
      if (e.touches.length === 2) {
        touchPanState = null;
        var dx = e.touches[0].clientX - e.touches[1].clientX;
        var dy = e.touches[0].clientY - e.touches[1].clientY;
        wrapper.style.touchAction = 'none';
        pinchState = { wrapper: wrapper, startDist: Math.hypot(dx, dy) };
      } else if (e.touches.length === 1) {
        var svg = wrapper.querySelector('svg');
        if (!svg) return;
        var s = getState(svg);
        if (s.zoom > 1) {
          wrapper.style.touchAction = 'none';
          touchPanState = { svg: svg, wrapper: wrapper, startX: e.touches[0].clientX, startY: e.touches[0].clientY, panX: s.panX, panY: s.panY };
        }
      }
    }, { passive: true });

    // Touchmove — passive on document (never blocks page scroll).
    // When pinch/pan is active, CSS touch-action:none on the wrapper
    // prevents browser gestures; JS just updates the transform.
    document.addEventListener('touchmove', function (e) {
      if (pinchState && e.touches.length === 2) {
        var wrapper = pinchState.wrapper;
        var dx = e.touches[0].clientX - e.touches[1].clientX;
        var dy = e.touches[0].clientY - e.touches[1].clientY;
        var dist = Math.hypot(dx, dy);
        var svg = wrapper.querySelector('svg');
        if (!svg) return;
        var s = getState(svg);
        var rawScale = dist / pinchState.startDist;
        var scale = 1 + (rawScale - 1) * 0.4;
        var newZoom = Math.min(Math.max(s.zoom * scale, ZOOM_MIN), ZOOM_MAX);
        applyTransform(svg, newZoom, s.panX, s.panY);
        wrapper.style.touchAction = 'none';
        pinchState.startDist = dist;
      } else if (touchPanState && e.touches.length === 1) {
        var tdx = e.touches[0].clientX - touchPanState.startX;
        var tdy = e.touches[0].clientY - touchPanState.startY;
        var ts = getState(touchPanState.svg);
        applyTransform(touchPanState.svg, ts.zoom, touchPanState.panX + tdx, touchPanState.panY + tdy);
      }
    }, { passive: true });

    var justPinched = false;
    document.addEventListener('touchend', function () {
      if (pinchState) {
        justPinched = true;
        pinchState.wrapper.style.touchAction = '';
      }
      if (touchPanState && touchPanState.wrapper) {
        touchPanState.wrapper.style.touchAction = '';
      }
      pinchState = null;
      touchPanState = null;
    });

    var lastTap = 0;
    document.addEventListener('dblclick', function (e) {
      var wrapper = e.target.closest('.uml-diagram-wrapper');
      if (!wrapper) return;
      var svg = wrapper.querySelector('svg');
      if (svg) { resetTransform(svg); wrapper.style.cursor = ''; }
    });
    document.addEventListener('touchend', function (e) {
      if (justPinched) { justPinched = false; lastTap = 0; return; }
      var wrapper = e.target.closest('.uml-diagram-wrapper');
      if (!wrapper) return;
      if (e.touches.length > 0) return;
      var now = Date.now();
      if (now - lastTap < 300) {
        var svg = wrapper.querySelector('svg');
        if (svg) resetTransform(svg);
      }
      lastTap = now;
    });
  })();

  /* ----------------------------------------------------------
   *  10. Sr Toggle (event delegation)
   * -------------------------------------------------------- */
  document.addEventListener('click', (e) => {
    const toggle = e.target.closest('.sr-toggle');
    if (!toggle) return;
    let sibling = toggle.nextElementSibling;
    while (sibling) {
      if (sibling.classList.contains('sr-solution-wrap')) {
        sibling.classList.toggle('show');
        return;
      }
      sibling = sibling.nextElementSibling;
    }
  });

  /* ----------------------------------------------------------
   *  11. Tooltip Smart Positioning (event delegation)
   *      Uses position:fixed to escape overflow:auto containers.
   * -------------------------------------------------------- */
  function positionTooltip(trigger, content) {
    // 1. Capture trigger rect BEFORE moving anything
    var rect = trigger.getBoundingClientRect();

    // 2. Move tooltip to <body> so position:fixed escapes ALL transformed ancestors
    //    (CSS transforms create a new containing block, breaking fixed positioning)
    content._originalParent = content.parentNode;
    document.body.appendChild(content);

    // 3. Set up for offscreen measurement
    content.style.position = 'fixed';
    content.style.top = '-9999px';
    content.style.left = '-9999px';
    content.style.bottom = 'auto';
    content.style.right = '';
    content.style.transform = 'none';
    content.style.visibility = 'hidden';
    content.style.opacity = '0';
    content.style.display = 'block';
    content.classList.remove('below');

    // 4. Read dimensions
    var tipW = content.offsetWidth;
    var tipH = content.offsetHeight;

    // 5. Calculate position — centered above trigger
    var left = rect.left + rect.width / 2 - tipW / 2;
    var top = rect.top - tipH - 10;

    // Flip below if overflowing top
    var below = false;
    if (top < 8) { top = rect.bottom + 10; below = true; }
    // Shift horizontally if overflowing edges
    if (left < 8) left = 8;
    if (left + tipW > window.innerWidth - 8) left = window.innerWidth - 8 - tipW;

    // 6. Apply final position and show
    content.style.left = left + 'px';
    content.style.top = top + 'px';
    content.classList.toggle('below', below);
    content.style.visibility = '';
    content.style.opacity = '';
  }

  function resetTooltip(content) {
    // Move tooltip back to its original trigger parent
    if (content._originalParent && content.parentNode === document.body) {
      content._originalParent.appendChild(content);
      content._originalParent = null;
    }
    content.style.position = '';
    content.style.left = '';
    content.style.top = '';
    content.style.bottom = '';
    content.style.right = '';
    content.style.transform = '';
    content.style.display = '';
    content.classList.remove('below', 'visible');
  }

  // Helper: find tooltip-content for a trigger (may be in body or in trigger)
  function getTooltipContent(trigger) {
    return trigger._tooltipContent || trigger.querySelector('.tooltip-content');
  }

  // Desktop: mouseenter/mouseleave
  document.addEventListener('mouseenter', function (e) {
    var trigger = e.target.closest('.tooltip-trigger');
    if (!trigger) return;
    var content = getTooltipContent(trigger);
    if (!content) return;
    trigger._tooltipContent = content;  // store ref before it moves to body
    positionTooltip(trigger, content);
    content.classList.add('visible');
  }, true);

  document.addEventListener('mouseleave', function (e) {
    var trigger = e.target.closest('.tooltip-trigger');
    if (!trigger) return;
    var content = getTooltipContent(trigger);
    if (!content) return;
    resetTooltip(content);
  }, true);

  // Touch: click to toggle
  document.addEventListener('click', function (e) {
    var trigger = e.target.closest('.tooltip-trigger');
    if (!trigger) {
      document.querySelectorAll('.tooltip-content.visible').forEach(function (tc) { resetTooltip(tc); });
      return;
    }
    e.preventDefault();
    var content = getTooltipContent(trigger);
    if (!content) return;
    trigger._tooltipContent = content;
    var wasVisible = content.classList.contains('visible');
    // Close all others
    document.querySelectorAll('.tooltip-content.visible').forEach(function (tc) {
      if (tc !== content) resetTooltip(tc);
    });
    if (wasVisible) { resetTooltip(content); }
    else { positionTooltip(trigger, content); content.classList.add('visible'); }
  });

  /* ----------------------------------------------------------
   *  12. Popup / Overlay (event delegation)
   * -------------------------------------------------------- */
  function openPopup(id) {
    const overlay = document.getElementById(id);
    if (!overlay) return;
    const content = overlay.querySelector('.popup-content');
    if (content) content.classList.remove('closing');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeAllPopups() {
    document.querySelectorAll('.popup-overlay.active').forEach((o) => {
      const content = o.querySelector('.popup-content');
      if (content) {
        content.classList.add('closing');
        content.addEventListener('animationend', () => {
          o.classList.remove('active');
          content.classList.remove('closing');
          document.body.style.overflow = '';
        }, { once: true });
      } else {
        o.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  document.addEventListener('click', (e) => {
    const openBtn = e.target.closest('.solution-btn[data-popup]');
    if (openBtn) { openPopup(openBtn.getAttribute('data-popup')); return; }
    const closeBtn = e.target.closest('.popup-close');
    if (closeBtn) { closeAllPopups(); return; }
    if (e.target.classList.contains('popup-overlay')) closeAllPopups();
  });

  /* ----------------------------------------------------------
   *  13. Keyboard: Enter/Space on role="button", ESC
   * -------------------------------------------------------- */
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllPopups();
      closeSearch();
    }
    if (e.key !== 'Enter' && e.key !== ' ') return;
    const target = e.target;
    if (!target.hasAttribute('role') || target.getAttribute('role') !== 'button') return;
    if (e.key === ' ') e.preventDefault();
    target.click();
  });

  /* ----------------------------------------------------------
   *  14. ARIA: Update aria-expanded after any click
   * -------------------------------------------------------- */
  const updateAriaExpanded = () => {
    document.querySelectorAll('.card').forEach((card) => {
      const title = card.querySelector('.card-title');
      if (title) title.setAttribute('aria-expanded', card.classList.contains('open'));
    });
    document.querySelectorAll('.qa-item').forEach((item) => {
      const header = item.querySelector('.qa-header');
      if (header) header.setAttribute('aria-expanded', item.classList.contains('active'));
    });
    document.querySelectorAll('.collapsible').forEach((col) => {
      const header = col.querySelector('.collapsible-header');
      if (header) header.setAttribute('aria-expanded', col.classList.contains('active'));
    });
    document.querySelectorAll('.diagram-toggle').forEach((dt) => {
      dt.setAttribute('aria-expanded', dt.classList.contains('open'));
    });
  };
  document.addEventListener('click', () => requestAnimationFrame(updateAriaExpanded));

  /* ----------------------------------------------------------
   *  15. Progress Bar + Back to Top (global scroll listener)
   * -------------------------------------------------------- */
  function onScroll() {
    const docH = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docH > 0 ? Math.round((window.scrollY / docH) * 100) : 0;
    document.documentElement.style.setProperty('--scroll-pct', pct + '%');
    var backToTop = document.getElementById('backToTop');
    if (backToTop) backToTop.classList.toggle('visible', window.scrollY > 400);
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  document.addEventListener('click', (e) => {
    if (e.target.closest('#backToTop')) window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ----------------------------------------------------------
   *  16. Cmd+K / Ctrl+K Search — build overlay once, reuse
   * -------------------------------------------------------- */
  var searchOverlay = document.createElement('div');
  searchOverlay.className = 'search-overlay';
  searchOverlay.innerHTML =
    '<div class="search-box">' +
      '<div class="search-input-wrap">' +
        '<i class="fa-solid fa-magnifying-glass" aria-hidden="true"></i>' +
        '<input type="text" class="search-input" placeholder="Jump to section..." autocomplete="off">' +
        '<span class="search-kbd">ESC</span>' +
      '</div>' +
      '<div class="search-results" role="listbox" aria-label="Search results"></div>' +
      '<div class="search-footer">' +
        '<span><kbd>&uarr;&darr;</kbd> Navigate</span>' +
        '<span><kbd>&crarr;</kbd> Open</span>' +
        '<span><kbd>esc</kbd> Close</span>' +
      '</div>' +
    '</div>';
  document.body.appendChild(searchOverlay);

  var searchInput = searchOverlay.querySelector('.search-input');
  var searchResults = searchOverlay.querySelector('.search-results');
  var searchItems = [];

  function buildSearchIndex() {
    searchItems = [];
    document.querySelectorAll('.section[id]').forEach(function(sec) {
      var header = sec.querySelector('.section-title');
      var icon = sec.querySelector('.section-icon i');
      if (header) {
        searchItems.push({
          label: header.textContent.trim(),
          id: sec.id,
          iconClass: icon ? icon.className : 'fa-solid fa-bookmark',
        });
      }
    });
  }

  function openSearch() {
    searchOverlay.classList.add('active');
    searchInput.value = '';
    renderSearchResults('');
    setTimeout(function() { searchInput.focus(); }, 50);
  }

  function closeSearch() {
    searchOverlay.classList.remove('active');
  }

  function renderSearchResults(query) {
    var q = query.toLowerCase();
    var filtered = q
      ? searchItems.filter(function(item) { return item.label.toLowerCase().includes(q); })
      : searchItems;

    searchResults.innerHTML = filtered.map(function(item, i) {
      return '<div class="search-result-item' + (i === 0 ? ' active' : '') + '" role="option" data-id="' + item.id + '">' +
        '<i class="' + item.iconClass + '" aria-hidden="true"></i>' +
        '<span>' + item.label + '</span>' +
      '</div>';
    }).join('');
  }

  searchInput.addEventListener('input', function() { renderSearchResults(searchInput.value); });

  searchOverlay.addEventListener('keydown', function(e) {
    var items = searchResults.querySelectorAll('.search-result-item');
    var current = searchResults.querySelector('.search-result-item.active');
    var idx = Array.from(items).indexOf(current);

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (idx < items.length - 1) idx++;
      items.forEach(function(it, i) { it.classList.toggle('active', i === idx); });
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (idx > 0) idx--;
      items.forEach(function(it, i) { it.classList.toggle('active', i === idx); });
    } else if (e.key === 'Enter') {
      e.preventDefault();
      var active = searchResults.querySelector('.search-result-item.active');
      if (active) {
        var target = document.getElementById(active.getAttribute('data-id'));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        closeSearch();
      }
    }
  });

  searchResults.addEventListener('click', function(e) {
    var item = e.target.closest('.search-result-item');
    if (!item) return;
    var target = document.getElementById(item.getAttribute('data-id'));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    closeSearch();
  });

  searchOverlay.addEventListener('click', function(e) {
    if (e.target === searchOverlay) closeSearch();
  });

  document.addEventListener('keydown', function(e) {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      if (searchOverlay.classList.contains('active')) closeSearch();
      else openSearch();
    }
  });

  /* ==========================================================
   *  SECTION B — PER-PAGE SETUP (reinit)
   *  Called on initial load AND after each SPA navigation.
   * ========================================================== */

  // Track observers so we can disconnect on next reinit
  var currentDotObserver = null;
  var currentRevealObserver = null;

  function reinit() {
    /* -- Highlight.js -- */
    if (typeof hljs !== 'undefined') {
      hljs.highlightAll();
    }

    /* -- Line numbers -- */
    document.querySelectorAll('.macos-body pre code').forEach(function(block) {
      // Skip if already has line numbers
      if (block.querySelector('.code-line')) return;
      var lines = block.innerHTML.split('\n');
      if (lines.length > 0 && lines[lines.length - 1].trim() === '') lines.pop();
      block.innerHTML = lines.map(function(line, i) {
        return '<span class="code-line"><span class="line-num">' + (i + 1) + '</span>' + line + '</span>';
      }).join('\n');
    });

    /* -- Copy-to-clipboard buttons -- */
    document.querySelectorAll('.macos-window').forEach(function(win) {
      var bar = win.querySelector('.macos-titlebar');
      var code = win.querySelector('code');
      if (!bar || !code) return;
      // Skip if already has copy button
      if (bar.querySelector('.copy-btn')) return;

      var btn = document.createElement('button');
      btn.className = 'copy-btn';
      btn.innerHTML = '<i class="fa-regular fa-copy" aria-hidden="true"></i>';
      btn.setAttribute('aria-label', 'Copy code');
      btn.addEventListener('click', function() {
        navigator.clipboard.writeText(code.textContent).then(function() {
          btn.innerHTML = '<i class="fa-solid fa-check" aria-hidden="true"></i>';
          btn.classList.add('copied');
          setTimeout(function() {
            btn.innerHTML = '<i class="fa-regular fa-copy" aria-hidden="true"></i>';
            btn.classList.remove('copied');
          }, 1500);
        }).catch(function() {});
      });
      bar.appendChild(btn);
    });

    /* -- Wheel intercept: only on inactive code blocks (pass-through scroll) -- */
    function interceptWheel(e) {
      var body = e.target.closest('.macos-body');
      if (body && body !== activeBlock) {
        e.preventDefault();
        window.scrollBy(0, e.deltaY);
      }
    }
    document.querySelectorAll('.macos-body').forEach(function(el) {
      el.removeEventListener('wheel', interceptWheel);
      el.addEventListener('wheel', interceptWheel, { passive: false });
    });

    /* -- Dot navigation -- */
    if (currentDotObserver) { currentDotObserver.disconnect(); currentDotObserver = null; }
    var dotNav = document.getElementById('dotNav');
    var allSections = document.querySelectorAll('.section[id]');
    if (dotNav) {
      dotNav.innerHTML = '';
      if (allSections.length > 0) {
        allSections.forEach(function(sec) {
          var titleEl = sec.querySelector('.section-title');
          if (!titleEl) return;
          var item = document.createElement('div');
          item.className = 'dot-nav-item';
          item.setAttribute('data-target', sec.id);
          item.innerHTML =
            '<span class="dot-nav-label">' + titleEl.textContent.trim() + '</span>' +
            '<span class="dot-nav-dot"></span>';
          dotNav.appendChild(item);
        });

        dotNav.onclick = function(e) {
          var item = e.target.closest('.dot-nav-item');
          if (!item) return;
          var target = document.getElementById(item.getAttribute('data-target'));
          if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        };

        var dotItems = dotNav.querySelectorAll('.dot-nav-item');
        currentDotObserver = new IntersectionObserver(function(entries) {
          entries.forEach(function(entry) {
            if (entry.isIntersecting) {
              var id = entry.target.id;
              dotItems.forEach(function(d) {
                d.classList.toggle('active', d.getAttribute('data-target') === id);
              });
            }
          });
        }, { rootMargin: '-20% 0px -70% 0px' });

        allSections.forEach(function(sec) { currentDotObserver.observe(sec); });
      }
    }

    /* -- Search index -- */
    buildSearchIndex();

    /* -- Search button in toolbar -- */
    (function() {
      var toolbar = document.querySelector('.top-toolbar');
      var fsBtn = document.getElementById('fullscreenBtn');
      if (toolbar && fsBtn && !toolbar.querySelector('[aria-label="Search sections (Ctrl+K)"]')) {
        var searchBtn = document.createElement('button');
        searchBtn.className = 'fab-btn';
        searchBtn.setAttribute('aria-label', 'Search sections (Ctrl+K)');
        searchBtn.innerHTML = '<i class="fa-solid fa-magnifying-glass" aria-hidden="true"></i>';
        searchBtn.addEventListener('click', openSearch);
        toolbar.insertBefore(searchBtn, fsBtn);
      }
    })();

    /* -- Scroll-reveal animations -- */
    if (currentRevealObserver) { currentRevealObserver.disconnect(); currentRevealObserver = null; }
    var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var revealTargets = document.querySelectorAll(
      '.card, .callout, .qa-item, .exercise-card, .problem-card, .concept-card, .cheat-card, .related-card, .tldr-card, .prereq-card'
    );
    if (prefersReducedMotion) {
      revealTargets.forEach(function(el) { el.classList.add('visible'); });
    } else {
      currentRevealObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            currentRevealObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15 });
      revealTargets.forEach(function(el) { currentRevealObserver.observe(el); });
    }

    /* -- ARIA initial state -- */
    updateAriaExpanded();

    /* -- Expand/collapse button reset -- */
    var expandBtn = document.getElementById('expandAllBtn');
    if (expandBtn) {
      expandBtn.classList.remove('active');
      var icon = expandBtn.querySelector('i');
      if (icon) icon.className = 'fa-solid fa-angles-down';
    }

    /* -- Language switcher active state -- */
    var langDropdown = document.getElementById('langDropdown');
    if (langDropdown) {
      var currentFile = window.location.pathname.split('/').pop().replace('.html', '');
      langDropdown.querySelectorAll('.lang-option').forEach(function(o) {
        o.classList.toggle('active', o.dataset.lang === currentFile);
      });
    }

    /* -- Theme dropdown active state -- */
    var themeDropdown = document.getElementById('themeDropdown');
    if (themeDropdown) {
      var saved = localStorage.getItem('wiki-theme') || 'navy';
      themeDropdown.querySelectorAll('.theme-option').forEach(function(o) {
        o.classList.toggle('active', o.dataset.theme === saved);
      });
    }

    /* -- Progress bar -- */
    onScroll();
  }

  /* ==========================================================
   *  SECTION C — SPA ROUTER
   *  Intercept internal <a> clicks, fetch + swap DOM.
   *  Requires HTTP server (Live Server, npx serve, etc.)
   *  On file:// gracefully falls back to normal navigation.
   * ========================================================== */

  /**
   * Dynamically load <script> and <link rel="stylesheet"> tags from the
   * fetched page's <head> that aren't already present in the current page.
   * Returns a Promise that resolves when all new assets have loaded.
   */
  function loadMissingHeadAssets(doc) {
    var promises = [];

    // Collect current page's script srcs and stylesheet hrefs
    var currentScripts = {};
    document.querySelectorAll('head script[src]').forEach(function(s) {
      currentScripts[s.getAttribute('src')] = true;
    });
    var currentLinks = {};
    document.querySelectorAll('head link[rel="stylesheet"]').forEach(function(l) {
      currentLinks[l.getAttribute('href')] = true;
    });

    // Load missing stylesheets
    doc.querySelectorAll('head link[rel="stylesheet"]').forEach(function(link) {
      var href = link.getAttribute('href');
      if (href && !currentLinks[href]) {
        promises.push(new Promise(function(resolve) {
          var el = document.createElement('link');
          el.rel = 'stylesheet';
          el.href = href;
          el.onload = resolve;
          el.onerror = resolve;
          document.head.appendChild(el);
        }));
        currentLinks[href] = true;
      }
    });

    // Load missing scripts (in order)
    var scriptQueue = [];
    doc.querySelectorAll('head script[src]').forEach(function(script) {
      var src = script.getAttribute('src');
      if (src && !currentScripts[src]) {
        scriptQueue.push(src);
        currentScripts[src] = true;
      }
    });

    if (scriptQueue.length) {
      var chainPromise = Promise.resolve();
      scriptQueue.forEach(function(src) {
        chainPromise = chainPromise.then(function() {
          return new Promise(function(resolve) {
            var el = document.createElement('script');
            el.src = src;
            el.onload = resolve;
            el.onerror = resolve;
            document.head.appendChild(el);
          });
        });
      });
      promises.push(chainPromise);
    }

    return promises.length ? Promise.all(promises) : Promise.resolve();
  }

  function swapPage(doc, href, pushState) {
    // Title
    document.title = doc.title;

    // Body attributes
    var newBody = doc.querySelector('body');
    if (newBody) {
      document.body.setAttribute('data-accent', newBody.getAttribute('data-accent') || '');
    }

    // Toolbar
    var newToolbar = doc.querySelector('.top-toolbar');
    var oldToolbar = document.querySelector('.top-toolbar');
    if (newToolbar && oldToolbar) {
      oldToolbar.className = newToolbar.className;
      oldToolbar.innerHTML = newToolbar.innerHTML;
    }

    // Hero
    var newHero = doc.querySelector('.hero');
    var oldHero = document.querySelector('.hero');
    if (newHero && oldHero) {
      oldHero.outerHTML = newHero.outerHTML;
    } else if (newHero && !oldHero) {
      var tb = document.querySelector('.top-toolbar');
      if (tb) tb.insertAdjacentHTML('afterend', newHero.outerHTML);
    } else if (!newHero && oldHero) {
      oldHero.remove();
    }

    // Main content
    var newMain = doc.querySelector('main');
    var oldMain = document.querySelector('main');
    if (newMain && oldMain) {
      oldMain.innerHTML = newMain.innerHTML;
    }

    // Dot-nav
    var newDotNav = doc.getElementById('dotNav');
    var oldDotNav = document.getElementById('dotNav');
    if (newDotNav && oldDotNav) {
      oldDotNav.innerHTML = '';
    } else if (newDotNav && !oldDotNav) {
      var dn = document.createElement('nav');
      dn.id = 'dotNav';
      dn.className = newDotNav.className;
      document.body.appendChild(dn);
    } else if (!newDotNav && oldDotNav) {
      oldDotNav.remove();
    }

    // Footer
    var newFooter = doc.querySelector('.footer');
    var oldFooter = document.querySelector('.footer');
    if (newFooter && oldFooter) {
      oldFooter.innerHTML = newFooter.innerHTML;
    }

    // Load missing <head> assets (scripts + stylesheets) from new page
    var headAssets = loadMissingHeadAssets(doc);

    // History
    if (pushState) {
      history.pushState({ path: href }, '', href);
    }

    // Scroll to top, fade in, re-init (after assets load)
    window.scrollTo(0, 0);
    headAssets.then(function() {
      requestAnimationFrame(function() {
        var m = document.querySelector('main');
        var h = document.querySelector('.hero');
        if (m) m.style.opacity = '';
        if (h) h.style.opacity = '';
      });
      reinit();
    });
  }

  function navigateTo(href, pushState) {
    if (pushState === undefined) pushState = true;

    // Fade out
    var main = document.querySelector('main');
    var hero = document.querySelector('.hero');
    if (main) main.style.opacity = '0';
    if (hero) hero.style.opacity = '0';

    fetch(href)
      .then(function(res) {
        if (!res.ok) throw new Error(res.status);
        return res.text();
      })
      .then(function(html) {
        var doc = new DOMParser().parseFromString(html, 'text/html');
        swapPage(doc, href, pushState);
      })
      .catch(function() {
        // SPA not available (file:// or network error) — normal nav
        window.location.href = href;
      });
  }

  // Intercept internal link clicks
  document.addEventListener('click', function(e) {
    // Don't intercept if modifier keys (new tab)
    if (e.metaKey || e.ctrlKey || e.shiftKey) return;

    var link = e.target.closest('a[href]');
    if (!link) return;

    var href = link.getAttribute('href');
    if (!href) return;

    // Skip external links, anchors, javascript:, mailto:
    if (href.startsWith('http') || href.startsWith('#') || href.startsWith('javascript:') || href.startsWith('mailto:')) return;

    // Only intercept .html links
    if (!href.endsWith('.html')) return;

    // Resolve relative URL to absolute
    var a = document.createElement('a');
    a.href = href;
    var resolved = a.href;

    e.preventDefault();
    navigateTo(resolved);
  });

  // Language switcher — intercept and use SPA navigation
  document.addEventListener('click', function(e) {
    var opt = e.target.closest('.lang-option');
    if (!opt) return;
    e.stopPropagation();
    var lang = opt.dataset.lang;
    var currentFile = window.location.pathname.split('/').pop().replace('.html', '');
    if (lang === currentFile) {
      var dd = document.getElementById('langDropdown');
      if (dd) dd.classList.remove('open');
      return;
    }
    var newUrl = window.location.href.replace(currentFile + '.html', lang + '.html');
    localStorage.setItem('wiki-language', lang);
    var dd2 = document.getElementById('langDropdown');
    if (dd2) dd2.classList.remove('open');
    navigateTo(newUrl);
  });

  // Language button toggle
  document.addEventListener('click', function(e) {
    var langBtn = e.target.closest('#langBtn');
    if (langBtn) {
      e.stopPropagation();
      var dd = document.getElementById('langDropdown');
      if (dd) dd.classList.toggle('open');
      return;
    }
    // Close lang dropdown on outside click
    var dd2 = document.getElementById('langDropdown');
    if (dd2) dd2.classList.remove('open');
  });

  // Expand/collapse all — event delegation
  document.addEventListener('click', function(e) {
    var btn = e.target.closest('#expandAllBtn');
    if (!btn) return;
    var cards = document.querySelectorAll('.card');
    var isActive = btn.classList.toggle('active');
    var icon = btn.querySelector('i');
    if (icon) icon.className = isActive ? 'fa-solid fa-angles-up' : 'fa-solid fa-angles-down';
    cards.forEach(function(c) {
      var body = c.querySelector('.card-body');
      if (isActive) {
        c.classList.add('open');
        if (body) { body.style.maxHeight = 'none'; body.style.paddingBottom = '1.25rem'; }
      } else {
        if (body) { body.style.maxHeight = '0'; body.style.paddingBottom = '0'; }
        c.classList.remove('open');
      }
    });
  });

  // Browser back/forward
  window.addEventListener('popstate', function(e) {
    if (e.state && e.state.path) {
      navigateTo(e.state.path, false);
    } else {
      navigateTo(window.location.href, false);
    }
  });

  // Set initial history state
  try { history.replaceState({ path: window.location.href }, '', window.location.href); } catch(e) {}

  /* ==========================================================
   *  SECTION D — INITIAL PAGE SETUP
   * ========================================================== */
  reinit();

}); /* end DOMContentLoaded */
