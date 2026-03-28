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
   *  2. Code block click-to-scroll
   *      Click inside = scroll code. Click outside = scroll page.
   * -------------------------------------------------------- */
  var activeBlock = null;
  document.addEventListener('click', function(e) {
    var body = e.target.closest('.macos-body');
    if (body) {
      if (activeBlock && activeBlock !== body) activeBlock.classList.remove('scroll-active');
      body.classList.add('scroll-active');
      activeBlock = body;
    } else {
      if (activeBlock) { activeBlock.classList.remove('scroll-active'); activeBlock = null; }
    }
  });
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && activeBlock) { activeBlock.classList.remove('scroll-active'); activeBlock = null; }
  });

  /* Wheel: active code block traps vertical scroll. Horizontal always passes through for two-finger swipe. */
  document.addEventListener('wheel', function(e) {
    var body = e.target.closest('.macos-body');
    if (!body) return;

    // Horizontal swipe — always let the browser scroll the code block natively
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;

    if (body !== activeBlock) {
      e.preventDefault();
      window.scrollBy(0, e.deltaY);
      return;
    }

    // Active — trap vertical scroll inside code block
    e.preventDefault();
    body.scrollTop += e.deltaY;
  }, { passive: false });

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
   *  10b. Auto-create tooltip-content from data-tooltip attribute
   * -------------------------------------------------------- */
  function initDataTooltips() {
    document.querySelectorAll('.tooltip-trigger[data-tooltip]').forEach(function(trigger) {
      if (trigger.querySelector('.tooltip-content')) return;
      var text = trigger.getAttribute('data-tooltip');
      if (!text) return;
      var el = document.createElement('span');
      el.className = 'tooltip-content';
      el.textContent = text;
      trigger.appendChild(el);
    });
  }

  /* ----------------------------------------------------------
   *  11. Tooltip Smart Positioning (event delegation)
   *      Uses position:fixed to escape overflow:auto containers.
   * -------------------------------------------------------- */
  function positionTooltip(trigger, content) {
    // 1. Capture trigger rect BEFORE moving anything
    //    Use getClientRects() to handle inline text wrapping across lines
    var rects = trigger.getClientRects();
    var rect = (rects && rects.length > 0) ? rects[0] : trigger.getBoundingClientRect();

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

    // Flip below if overflowing top — use last rect for bottom position
    var below = false;
    if (top < 8) {
      var lastRect = (rects && rects.length > 1) ? rects[rects.length - 1] : rect;
      top = lastRect.bottom + 10;
      below = true;
    }
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
    if (!e.target || typeof e.target.closest !== 'function') return;
    var trigger = e.target.closest('.tooltip-trigger');
    if (!trigger) return;
    var content = getTooltipContent(trigger);
    if (!content) return;
    trigger._tooltipContent = content;  // store ref before it moves to body
    positionTooltip(trigger, content);
    content.classList.add('visible');
  }, true);

  document.addEventListener('mouseleave', function (e) {
    if (!e.target || typeof e.target.closest !== 'function') return;
    var trigger = e.target.closest('.tooltip-trigger');
    if (!trigger) return;
    var content = getTooltipContent(trigger);
    if (!content) return;
    resetTooltip(content);
  }, true);

  // Touch: click to toggle
  document.addEventListener('click', function (e) {
    if (!e.target || typeof e.target.closest !== 'function') return;
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
  window.openPopup = openPopup;

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
  var scrollTicking = false;
  window.addEventListener('scroll', function() {
    if (!scrollTicking) {
      scrollTicking = true;
      requestAnimationFrame(function() { onScroll(); scrollTicking = false; });
    }
  }, { passive: true });

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

  // Track observers and listeners so we can clean up on next reinit
  var currentDotObserver = null;
  var currentRevealObserver = null;
  var currentSidebarScrollHandler = null;

  /* ----------------------------------------------------------
   *  Terminal Colorizer — auto-highlight shell tokens
   *  inside .macos-body pre code blocks.
   * -------------------------------------------------------- */
  function colorizeTerminals() {
    document.querySelectorAll('.macos-window.terminal .macos-body pre code').forEach(function(block) {
      if (block.dataset.colorized) return;
      block.dataset.colorized = 'true';
      var raw = block.textContent;
      var lines = raw.split('\n');
      var html = lines.map(function(line) {
        var trimmed = line.trim();
        if (!trimmed) return '<div class="term-line">&nbsp;</div>';
        var dollarIdx = line.indexOf('$ ');
        if (dollarIdx > -1) {
          var path = line.substring(0, dollarIdx).replace(/^\s+/, '');
          var afterPrompt = line.substring(dollarIdx + 2);
          var tokens = afterPrompt.match(/(?:[^\s"']+|"[^"]*"|'[^']*')+/g) || [];
          var cmd = tokens[0] || '';
          var args = tokens.slice(1).map(function(a) {
            if (/^-/.test(a)) return '<span class="t-flag">' + a + '</span>';
            if (/^https?:\/\//.test(a)) return '<span class="t-url">' + a + '</span>';
            if (/^["']/.test(a)) return '<span class="t-string">' + a + '</span>';
            if (/^\$/.test(a)) return '<span class="t-param">' + a + '</span>';
            if (/^\d+(\.\d+)?$/.test(a)) return '<span class="t-number">' + a + '</span>';
            return '<span class="t-param">' + a + '</span>';
          }).join(' ');
          return '<div class="term-line">'
            + (path ? '<span class="t-path">' + path + '</span> ' : '')
            + '<span class="t-prompt">$</span> '
            + '<span class="t-cmd">' + cmd + '</span>'
            + (args ? ' ' + args : '')
            + '</div>';
        }
        if (trimmed.startsWith('#')) return '<div class="term-line"><span class="t-comment">' + line + '</span></div>';
        return '<div class="term-line term-output">' + line + '</div>';
      }).join('');
      block.innerHTML = html;
    });
  }

  /* ----------------------------------------------------------
   *  Custom Syntax Highlighter — token-based, no third-party
   *  Processes text character by character to avoid regex bugs.
   * -------------------------------------------------------- */
  var SY_KEYWORDS = /^(abstract|as|async|await|base|bool|break|byte|case|catch|char|class|const|continue|decimal|default|delegate|do|double|else|enum|event|extern|false|finally|fixed|float|for|foreach|goto|if|implicit|in|int|interface|internal|is|lock|long|namespace|new|null|object|operator|out|override|params|private|protected|public|readonly|ref|return|sbyte|sealed|short|sizeof|static|string|struct|switch|this|throw|true|try|typeof|uint|ulong|unchecked|unsafe|ushort|using|var|virtual|void|volatile|while|yield|let|function|export|import|from|extends|implements|def|elif|except|raise|with|lambda|pass|self|True|False|None|func|go|chan|defer|select|range|type|fallthrough|SELECT|FROM|WHERE|JOIN|LEFT|RIGHT|INNER|OUTER|ON|INSERT|UPDATE|DELETE|CREATE|DROP|ALTER|TABLE|INDEX|INTO|VALUES|SET|ORDER|BY|GROUP|HAVING|LIMIT|OFFSET|AND|OR|NOT|IN|EXISTS|BETWEEN|LIKE|IS|NULL|AS|DISTINCT|COUNT|SUM|AVG|MAX|MIN|UNION|ALL)$/;

  function tokenizeLine(line) {
    var out = '';
    var i = 0;
    var len = line.length;

    function esc(s) { return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

    while (i < len) {
      var ch = line[i];

      // 1. Single-line comment: //
      if (ch === '/' && line[i+1] === '/') {
        out += '<span class="sy-cmt">' + esc(line.slice(i)) + '</span>';
        return out;
      }

      // 2. String: " or ' or ` (handles escape chars)
      if (ch === '"' || ch === "'" || ch === '`') {
        var q = ch;
        // C# interpolated: $" or $@"
        var prefix = '';
        if (i > 0 && line[i-1] === '$') {
          prefix = '';  // $ already emitted
        }
        var j = i + 1;
        while (j < len && line[j] !== q) {
          if (line[j] === '\\') j++; // skip escaped char
          j++;
        }
        j++; // include closing quote
        out += '<span class="sy-str">' + esc(line.slice(i, j)) + '</span>';
        i = j;
        continue;
      }

      // 3. Number
      if ((ch >= '0' && ch <= '9') && (i === 0 || !/[\w]/.test(line[i-1]))) {
        var j = i;
        while (j < len && /[\d.xXa-fA-FbBoO_]/.test(line[j])) j++;
        if (j < len && /[fFdDmMlL]/.test(line[j])) j++;
        out += '<span class="sy-num">' + esc(line.slice(i, j)) + '</span>';
        i = j;
        continue;
      }

      // 4. Word (identifier / keyword / type)
      if (/[a-zA-Z_$@]/.test(ch)) {
        // Attribute: [Word] or @word
        if (ch === '[') {
          var j = line.indexOf(']', i);
          if (j !== -1) {
            out += '<span class="sy-attr">' + esc(line.slice(i, j+1)) + '</span>';
            i = j + 1;
            continue;
          }
        }
        if (ch === '@') {
          var j = i + 1;
          while (j < len && /[\w]/.test(line[j])) j++;
          out += '<span class="sy-attr">' + esc(line.slice(i, j)) + '</span>';
          i = j;
          continue;
        }

        var j = i;
        while (j < len && /[\w$]/.test(line[j])) j++;
        var word = line.slice(i, j);

        // Check if followed by ( — it's a function call
        var rest = line.slice(j);
        var isCall = /^\s*\(/.test(rest) && !SY_KEYWORDS.test(word);

        if (SY_KEYWORDS.test(word)) {
          out += '<span class="sy-kw">' + esc(word) + '</span>';
        } else if (isCall) {
          out += '<span class="sy-fn">' + esc(word) + '</span>';
        } else if (/^[A-Z]/.test(word) && word.length > 1) {
          out += '<span class="sy-type">' + esc(word) + '</span>';
        } else {
          out += esc(word);
        }
        i = j;
        continue;
      }

      // 5. Attribute: [Something]
      if (ch === '[') {
        var j = line.indexOf(']', i);
        if (j !== -1 && j - i < 60 && /^\[\w/.test(line.slice(i))) {
          out += '<span class="sy-attr">' + esc(line.slice(i, j+1)) + '</span>';
          i = j + 1;
          continue;
        }
      }

      // Default: emit character
      out += esc(ch);
      i++;
    }
    return out;
  }

  function colorizeCode() {
    document.querySelectorAll('.macos-window:not(.terminal) .macos-body pre code, .multi-file-panel pre code, .code-evo-code pre code, .refactor-code pre code').forEach(function(block) {
      if (block.dataset.highlighted) return;
      block.dataset.highlighted = 'true';

      var text = block.textContent;
      var lines = text.split('\n');
      if (lines.length > 0 && lines[lines.length-1].trim() === '') lines.pop();

      var html = lines.map(function(line, i) {
        return '<span class="code-line"><span class="line-num">' + (i + 1) + '</span>' + tokenizeLine(line) + '</span>';
      }).join('\n');

      block.innerHTML = html;
    });
  }

  /* ----------------------------------------------------------
   *  Syntax-highlight code walkthrough blocks using tokenizeLine
   * -------------------------------------------------------- */
  function colorizeWalkthrough() {
    document.querySelectorAll('.code-walkthrough .cw-line code').forEach(function(code) {
      if (code.dataset.cwHighlighted) return;
      code.dataset.cwHighlighted = '1';
      var text = code.textContent;
      code.innerHTML = tokenizeLine(text);
    });
  }

  /* ----------------------------------------------------------
   *  Estimation Calc Builder
   *  Reads .calc-input, .calc-op, .calc-eq, .calc-result children
   *  and builds the dashboard metric cards + result strip.
   * -------------------------------------------------------- */
  function initEstimationCalcs() {
    document.querySelectorAll('.estimation-calc').forEach(function(calc) {
      if (calc.dataset.calcBuilt) return;
      calc.dataset.calcBuilt = '1';

      var title = calc.dataset.title || 'Estimation';
      var tag = calc.dataset.tag || '';
      var children = Array.from(calc.children);

      // Walk children in order, building a sequence of metric cards + operators
      var metricItems = []; // {type:'card'|'op'|'eq', ...data}
      var results = [];

      children.forEach(function(child) {
        if (child.classList.contains('calc-input')) {
          metricItems.push({ type: 'card', label: child.dataset.label, value: child.dataset.value, note: child.dataset.note || '' });
        } else if (child.classList.contains('calc-op')) {
          metricItems.push({ type: 'op', text: child.innerHTML.trim() });
        } else if (child.classList.contains('calc-eq')) {
          // Auto-insert = before eq if last item isn't an op
          var last = metricItems[metricItems.length - 1];
          if (!last || last.type !== 'op') {
            metricItems.push({ type: 'op', text: '=' });
          }
          metricItems.push({ type: 'card', label: child.dataset.label, value: child.dataset.value, note: child.dataset.note || '', isEq: true });
        } else if (child.classList.contains('calc-result')) {
          results.push({ label: child.dataset.label, value: child.dataset.value, formula: child.dataset.formula || '' });
        }
      });

      // Clear and rebuild
      calc.innerHTML = '';

      // Header
      var header = document.createElement('div');
      header.className = 'calc-header';
      header.innerHTML = '<span><i class="fa-solid fa-calculator"></i> ' + title + '</span>' +
        (tag ? '<span class="calc-tag">' + tag + '</span>' : '');
      calc.appendChild(header);

      // Split metric items into rows at each eq card
      // Each row: [inputs + ops] → eq result
      var rows = [[]];
      metricItems.forEach(function(item) {
        rows[rows.length - 1].push(item);
        if (item.isEq) rows.push([]); // start new row after eq
      });
      // Remove trailing empty row
      if (rows[rows.length - 1].length === 0) rows.pop();

      rows.forEach(function(rowItems) {
        var metricsRow = document.createElement('div');
        metricsRow.className = 'calc-metrics';

        rowItems.forEach(function(item) {
          if (item.type === 'op') {
            var opEl = document.createElement('div');
            opEl.className = 'calc-metric-op';
            opEl.innerHTML = item.text;
            metricsRow.appendChild(opEl);
          } else {
            var metric = document.createElement('div');
            metric.className = 'calc-metric' + (item.isEq ? ' calc-metric--eq' : '');
            metric.innerHTML =
              '<span class="calc-metric-value">' + item.value + '</span>' +
              '<span class="calc-metric-label">' + item.label + '</span>' +
              (item.note ? '<span class="calc-metric-note">' + item.note + '</span>' : '');
            metricsRow.appendChild(metric);
          }
        });
        calc.appendChild(metricsRow);
      });

      // Result strip
      if (results.length) {
        var strip = document.createElement('div');
        strip.className = 'calc-result-strip';
        results.forEach(function(r, i) {
          if (i > 0) {
            var div = document.createElement('div');
            div.className = 'calc-result-divider';
            strip.appendChild(div);
          }
          var item = document.createElement('div');
          item.className = 'calc-result-item';
          item.innerHTML =
            '<span class="calc-result-label">' + r.label + '</span>' +
            '<span class="calc-result-value">' + r.value + '</span>' +
            (r.formula ? '<span class="calc-result-formula">' + r.formula + '</span>' : '');
          strip.appendChild(item);
        });
        calc.appendChild(strip);
      }
    });
  }

  /* Count-up animation for estimation calc values */
  function initCalcCountUp() {
    var observed = new Set();
    function animateValue(el, finalText) {
      // Find the first numeric span in the original text (digits, commas, dots)
      var numMatch = finalText.match(/[\d,]+\.?\d*/);
      if (!numMatch) return;
      var numStr = numMatch[0];
      var numStart = numMatch.index;
      var prefix = finalText.slice(0, numStart);
      var suffix = finalText.slice(numStart + numStr.length);
      var target = parseFloat(numStr.replace(/,/g, ''));
      if (isNaN(target) || target === 0) return;
      var hasCommas = numStr.indexOf(',') !== -1;
      var decimals = (numStr.indexOf('.') !== -1) ? numStr.split('.')[1].length : 0;
      var duration = 800;
      var start = performance.now();

      function fmt(n) {
        var s;
        if (decimals > 0) { s = n.toFixed(decimals); }
        else { s = Math.round(n).toString(); }
        if (hasCommas) s = s.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        return s;
      }

      function step(now) {
        var t = Math.min((now - start) / duration, 1);
        var ease = 1 - Math.pow(1 - t, 3);
        el.textContent = prefix + fmt(target * ease) + suffix;
        if (t < 1) requestAnimationFrame(step);
        else el.textContent = finalText;
      }
      el.textContent = prefix + '0' + suffix;
      requestAnimationFrame(step);
    }

    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (!entry.isIntersecting) return;
        var calc = entry.target;
        if (observed.has(calc)) return;
        observed.add(calc);
        // Animate metric values — store final text BEFORE zeroing
        calc.querySelectorAll('.calc-metric-value, .calc-result-value').forEach(function(el) {
          var finalText = el.dataset.finalText || el.textContent.trim();
          el.dataset.finalText = finalText;
          animateValue(el, finalText);
        });
      });
    }, { threshold: 0.15 });

    document.querySelectorAll('.estimation-calc').forEach(function(el) {
      observer.observe(el);
    });
  }

  /* ----------------------------------------------------------
   *  Auto-build code window from <pre data-file="Name.cs">
   *  Just write: <pre data-file="UserService.cs">code here</pre>
   *  JS builds the full macOS window with titlebar, dots, etc.
   * -------------------------------------------------------- */
  function buildCodeWindows() {
    document.querySelectorAll('pre[data-file]').forEach(function(pre) {
      if (pre.dataset.built) return;
      pre.dataset.built = 'true';

      var filename = pre.getAttribute('data-file');
      var isTerminal = pre.hasAttribute('data-terminal');
      var code = pre.textContent;

      var win = document.createElement('div');
      win.className = 'macos-window' + (isTerminal ? ' terminal' : '');

      // Titlebar
      win.innerHTML =
        '<div class="macos-titlebar">' +
          '<div class="dot dot-red"></div>' +
          '<div class="dot dot-yellow"></div>' +
          '<div class="dot dot-green"></div>' +
          '<span class="macos-filename">' + filename + '</span>' +
        '</div>' +
        '<div class="macos-body"><pre><code>' + code.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;') + '</code></pre></div>';

      pre.parentNode.replaceChild(win, pre);
    });
  }

  /* ----------------------------------------------------------
   *  Latency Ruler Builder
   *  Reads data-entries JSON, renders logarithmic bar chart
   *  with multipliers between levels and human-readable times.
   * -------------------------------------------------------- */
  function initLatencyRulers() {
    document.querySelectorAll('.latency-ruler[data-entries]').forEach(function(ruler) {
      if (ruler.dataset.rulerBuilt) return;
      ruler.dataset.rulerBuilt = '1';

      var entries = JSON.parse(ruler.dataset.entries);
      var maxNs = entries[entries.length - 1].ns;
      var maxLog = Math.log10(maxNs);

      // Color gradient: green → yellow → orange → red
      var colors = ['#10b981','#10b981','#34d399','#a3e635','#fbbf24','#f59e0b','#f97316','#ef4444'];

      function formatNs(ns) {
        if (ns < 1000) return ns + ' ns';
        if (ns < 1000000) return (ns / 1000) + ' \u00B5s';
        if (ns < 1000000000) return (ns / 1000000) + ' ms';
        return (ns / 1000000000).toFixed(1) + ' s';
      }

      ruler.innerHTML = ''; // clear

      entries.forEach(function(entry, i) {
        var pct = (Math.log10(entry.ns) / maxLog) * 100;
        var color = colors[Math.min(i, colors.length - 1)];

        var row = document.createElement('div');
        row.className = 'ruler-item';

        // Label
        var lbl = document.createElement('span');
        lbl.className = 'ruler-label';
        lbl.textContent = entry.label;

        // Bar container
        var barWrap = document.createElement('div');
        barWrap.className = 'ruler-bar';
        var barInner = document.createElement('div');
        barInner.className = 'ruler-bar-inner';
        barInner.style.width = Math.max(3, pct) + '%';
        barInner.style.background = color;
        barWrap.appendChild(barInner);

        // Value
        var val = document.createElement('span');
        val.className = 'ruler-value';
        val.textContent = formatNs(entry.ns);

        row.appendChild(lbl);
        row.appendChild(barWrap);
        row.appendChild(val);
        ruler.appendChild(row);

        // Multiplier between this and previous
        if (i > 0) {
          var mult = entry.ns / entries[i - 1].ns;
          if (mult >= 2) {
            var multEl = document.createElement('div');
            multEl.className = 'ruler-multiplier';
            multEl.textContent = '\u00D7' + (mult >= 1000 ? (mult/1000).toFixed(0) + 'K' : mult >= 100 ? mult.toFixed(0) : mult.toFixed(0));
            // Insert before current row
            ruler.insertBefore(multEl, row);
          }
        }
      });
    });
  }

  /* ----------------------------------------------------------
   *  Sequence Diagram Builder
   *  Reads data-participants and .seq-msg elements, renders
   *  participant boxes, dashed lifelines, and arrow rows.
   * -------------------------------------------------------- */
  function initSequenceDiagrams() {
    document.querySelectorAll('.sequence-diagram[data-participants]').forEach(function(diagram) {
      if (diagram.dataset.seqBuilt) return;
      diagram.dataset.seqBuilt = '1';

      var names = diagram.dataset.participants.split(',').map(function(s) { return s.trim(); });
      var msgs = diagram.querySelectorAll('.seq-msg');
      var count = names.length;
      var ROW_H = 44; // px per message row

      // Build header
      var header = document.createElement('div');
      header.className = 'seq-header';
      names.forEach(function(name) {
        var p = document.createElement('div');
        p.className = 'seq-participant';
        p.textContent = name;
        header.appendChild(p);
      });
      diagram.insertBefore(header, diagram.firstChild);

      // Build body with lifelines
      var body = document.createElement('div');
      body.className = 'seq-body';
      body.style.height = (msgs.length * ROW_H + 16) + 'px';
      body.style.marginTop = '0';

      names.forEach(function() {
        var ll = document.createElement('div');
        ll.className = 'seq-lifeline';
        ll.style.height = '100%';
        body.appendChild(ll);
      });

      // Calculate lifeline positions (center of each participant column)
      diagram.appendChild(body);

      // After layout, get positions
      requestAnimationFrame(function() {
        var bodyRect = body.getBoundingClientRect();
        var lifelines = body.querySelectorAll('.seq-lifeline');
        var headerParts = header.querySelectorAll('.seq-participant');
        var centers = [];

        headerParts.forEach(function(p) {
          var r = p.getBoundingClientRect();
          centers.push(r.left + r.width / 2 - bodyRect.left);
        });

        // Position lifelines
        lifelines.forEach(function(ll, i) {
          ll.style.position = 'absolute';
          ll.style.left = centers[i] + 'px';
        });

        // Render message arrows
        msgs.forEach(function(msg, i) {
          var from = parseInt(msg.dataset.from);
          var to = parseInt(msg.dataset.to);
          var label = msg.dataset.label;
          var time = msg.dataset.time;
          var isResp = msg.classList.contains('resp');

          var row = document.createElement('div');
          row.className = 'seq-row';
          row.style.top = (i * ROW_H + 8) + 'px';

          var line = document.createElement('div');
          line.className = 'seq-arrow-line ' + (isResp ? 'resp' : 'req');

          var leftCenter = Math.min(centers[from], centers[to]);
          var rightCenter = Math.max(centers[from], centers[to]);
          line.style.left = leftCenter + 'px';
          line.style.width = (rightCenter - leftCenter) + 'px';

          if (from < to) {
            line.classList.add('arrow-right');
          } else {
            line.classList.add('arrow-left');
          }

          // Label
          var lbl = document.createElement('span');
          lbl.className = 'seq-msg-label';
          lbl.textContent = label;
          lbl.style.left = ((rightCenter - leftCenter) / 2 - 20) + 'px';
          line.appendChild(lbl);

          // Time
          if (time) {
            var tm = document.createElement('span');
            tm.className = 'seq-msg-time';
            tm.textContent = time;
            tm.style.left = ((rightCenter - leftCenter) / 2 - 10) + 'px';
            line.appendChild(tm);
          }

          row.appendChild(line);
          body.appendChild(row);
        });
      });
    });
  }

  /* ----------------------------------------------------------
   *  Interactive Tradeoff Slider
   *  Reads snap points from data-snaps JSON, renders dots + handle,
   *  snaps on click/drag, updates info panel.
   * -------------------------------------------------------- */
  function initTradeoffSliders() {
    document.querySelectorAll('.tradeoff-slider[data-snaps]').forEach(function(slider) {
      if (slider.dataset.initSlider) return;
      slider.dataset.initSlider = '1';

      var snaps = JSON.parse(slider.dataset.snaps);
      var track = slider.querySelector('.tradeoff-track');
      var handle = slider.querySelector('.tradeoff-handle');
      var dotsContainer = slider.querySelector('.tradeoff-snap-dots');
      var infoName = slider.querySelector('.tradeoff-info-name');
      var infoDesc = slider.querySelector('.tradeoff-info-desc');
      if (!track || !handle || !snaps.length) return;

      // Render snap dots
      snaps.forEach(function(snap, i) {
        var dot = document.createElement('div');
        dot.className = 'tradeoff-snap-dot';
        dot.style.left = snap.pos + '%';
        dot.dataset.index = i;
        dotsContainer.appendChild(dot);
      });
      var dots = dotsContainer.querySelectorAll('.tradeoff-snap-dot');

      function snapTo(index) {
        var snap = snaps[index];
        handle.style.left = snap.pos + '%';
        infoName.textContent = snap.name;
        infoDesc.textContent = snap.desc;
        dots.forEach(function(d, j) { d.classList.toggle('active', j === index); });
        // Color the info border to match position on gradient
        var hue = 220 - (snap.pos / 100) * 200; // blue→red
        slider.querySelector('.tradeoff-info').style.borderColor = 'hsla(' + hue + ', 70%, 55%, 0.25)';
      }

      // Click on track to snap
      track.addEventListener('click', function(e) {
        var rect = track.getBoundingClientRect();
        var pct = ((e.clientX - rect.left) / rect.width) * 100;
        var closest = 0, minDist = Infinity;
        snaps.forEach(function(s, i) {
          var d = Math.abs(s.pos - pct);
          if (d < minDist) { minDist = d; closest = i; }
        });
        snapTo(closest);
      });

      // Drag handle
      var dragging = false;
      handle.addEventListener('mousedown', function(e) { dragging = true; handle.classList.add('dragging'); e.preventDefault(); });
      handle.addEventListener('touchstart', function(e) { dragging = true; handle.classList.add('dragging'); }, { passive: true });

      function onMove(clientX) {
        if (!dragging) return;
        var rect = track.getBoundingClientRect();
        var pct = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
        handle.style.left = pct + '%';
      }
      function onEnd() {
        if (!dragging) return;
        dragging = false;
        handle.classList.remove('dragging');
        var current = parseFloat(handle.style.left);
        var closest = 0, minDist = Infinity;
        snaps.forEach(function(s, i) {
          var d = Math.abs(s.pos - current);
          if (d < minDist) { minDist = d; closest = i; }
        });
        snapTo(closest);
      }
      document.addEventListener('mousemove', function(e) { onMove(e.clientX); });
      document.addEventListener('touchmove', function(e) { if (dragging) onMove(e.touches[0].clientX); }, { passive: true });
      document.addEventListener('mouseup', onEnd);
      document.addEventListener('touchend', onEnd);

      // Initialize at first snap
      snapTo(0);
    });
  }

  /* ----------------------------------------------------------
   *  Semantic icon colors — auto-color FA icons by class name.
   *  Runs on every reinit so dynamically added icons get colored.
   * -------------------------------------------------------- */
  var iconColorMap = {
    'fa-bug':                  '#f87171',   /* red */
    'fa-skull-crossbones':     '#fbbf24',   /* amber */
    'fa-triangle-exclamation': '#fbbf24',   /* amber */
    'fa-exclamation-triangle': '#fbbf24',   /* amber (legacy) */
    'fa-circle-exclamation':   '#fb923c',   /* orange */
    'fa-lightbulb':            '#facc15',   /* yellow */
    'fa-code':                 '#60a5fa',   /* blue */
    'fa-gear':                 '#a78bfa',   /* purple */
    'fa-cog':                  '#a78bfa',   /* purple (legacy) */
    'fa-check-circle':         '#34d399',   /* green */
    'fa-circle-check':         '#34d399',   /* green */
    'fa-check':                '#34d399',   /* green */
    'fa-layer-group':          '#f472b6',   /* pink */
    'fa-clock':                '#fb923c',   /* orange */
    'fa-shield-halved':        '#38bdf8',   /* sky */
    'fa-diagram-project':      '#c084fc',   /* violet */
    'fa-rocket':               '#fb7185',   /* rose */
    'fa-flask':                '#a78bfa',   /* purple */
    'fa-fire':                 '#f97316',   /* orange */
    'fa-bolt':                 '#fbbf24',   /* amber */
    'fa-star':                 '#fbbf24',   /* amber */
    'fa-puzzle-piece':         '#34d399',   /* green */
    'fa-eye':                  '#60a5fa',   /* blue */
    'fa-pen':                  '#fb923c',   /* orange */
    'fa-trash':                '#f87171',   /* red */
    'fa-lock':                 '#f87171',   /* red */
    'fa-unlock':               '#34d399',   /* green */
    'fa-database':             '#60a5fa',   /* blue */
    'fa-server':               '#a78bfa',   /* purple */
    'fa-network-wired':        '#38bdf8',   /* sky */
    'fa-magnifying-glass':     '#94a3b8',   /* slate */
    'fa-wrench':               '#94a3b8',   /* slate */
    'fa-hammer':               '#94a3b8',   /* slate */
    'fa-redo':                 '#60a5fa',   /* blue */
    'fa-spinner':              '#60a5fa',   /* blue */
  };

  function colorizeIcons() {
    var selectors = '.card-title i.fa-solid, .card-title i.fas, ' +
                    '.collapsible-header i.fa-solid, .collapsible-header i.fas, ' +
                    '.tab-btn i.fa-solid, .tab-btn i.fas, ' +
                    '.exercise-card-title i.fa-solid, .exercise-card-title i.fas';
    document.querySelectorAll(selectors).forEach(function(icon) {
      if (icon.dataset.colored) return;
      var cls = icon.classList;
      for (var key in iconColorMap) {
        if (cls.contains(key)) {
          icon.style.color = iconColorMap[key];
          icon.dataset.colored = '1';
          return;
        }
      }
    });

    /* Auto-badge keywords + numbers in card titles and collapsible headers
       e.g. "Bug 1 — Title" → "<span class='title-badge bug'>Bug 1</span> — Title"
            "Pitfall #2: Title" → "<span class='title-badge pitfall'>Pitfall 2</span> Title" */
    var badgeTypes = {
      'Bug':      'bug',
      'Pitfall':  'pitfall',
      'Step':     'step',
      'Stage':    'stage',
      'Level':    'level',
      'Era':      'era',
      'Phase':    'phase',
      'Part':     'part',
      'Case':     'case',
      'Fix':      'fix',
    };
    document.querySelectorAll('.card-title, .collapsible-header span').forEach(function(el) {
      if (el.dataset.badged) return;
      el.dataset.badged = '1';
      /* Find the semantic icon (skip chevrons which are structural) */
      var icon = el.querySelector('i.fa-solid:not(.fa-chevron-right):not(.fa-chevron-down), i.fas:not(.fa-chevron-right):not(.fa-chevron-down)');
      var walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null, false);
      var node;
      while ((node = walker.nextNode())) {
        var txt = node.textContent;
        for (var keyword in badgeTypes) {
          var re = new RegExp('^(\\s*)(' + keyword + ')\\s*#?(\\d+)\\s*[:\\s—]*(.*)$');
          var m = txt.match(re);
          if (m) {
            var before = document.createTextNode(m[1]);
            var badge = document.createElement('span');
            badge.className = 'title-badge title-badge--' + badgeTypes[keyword];
            /* Move icon inside the badge if it exists */
            if (icon) {
              badge.appendChild(icon);
              badge.appendChild(document.createTextNode(' ' + m[2] + ' ' + m[3]));
            } else {
              badge.textContent = m[2] + ' ' + m[3];
            }
            var after = document.createTextNode(m[4]);
            var parent = node.parentNode;
            parent.insertBefore(before, node);
            parent.insertBefore(badge, node);
            parent.insertBefore(after, node);
            parent.removeChild(node);
            break;
          }
        }
      }
    });
  }

  /* ----------------------------------------------------------
   *  JSON Syntax Highlighter for API Viewer bodies
   *  Colorizes keys, strings, numbers, booleans, nulls
   * -------------------------------------------------------- */
  /* -- JSON line tokenizer (used by the line-number pass for .api-body blocks) -- */
  function tokenizeJSON(rawLine) {
    var line = rawLine
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

    // Tokenize by finding all quoted strings and structure in one pass
    var result = '';
    var i = 0;
    while (i < line.length) {
      // Check for // comment
      if (line[i] === '/' && line[i+1] === '/') {
        result += '<span class="json-comment">' + line.substring(i) + '</span>';
        break;
      }
      // Check for quoted string
      if (line[i] === '"') {
        var end = line.indexOf('"', i + 1);
        if (end === -1) { result += line.substring(i); break; }
        var str = line.substring(i, end + 1);
        // Look ahead: is this a key (followed by optional spaces then colon)?
        var after = line.substring(end + 1);
        var colonMatch = after.match(/^(\s*:)/);
        if (colonMatch) {
          result += '<span class="json-key">' + str + '</span>' + colonMatch[1];
          i = end + 1 + colonMatch[1].length;
        } else {
          result += '<span class="json-string">' + str + '</span>';
          i = end + 1;
        }
        continue;
      }
      // Check for number (after : , [ or start)
      if (/[-\d]/.test(line[i]) && (i === 0 || /[:,\[\s]/.test(line[i-1]))) {
        var numMatch = line.substring(i).match(/^(-?\d+\.?\d*)/);
        if (numMatch) {
          result += '<span class="json-number">' + numMatch[1] + '</span>';
          i += numMatch[1].length;
          continue;
        }
      }
      // Check for boolean/null
      var wordMatch = line.substring(i).match(/^(true|false|null)\b/);
      if (wordMatch) {
        var cls = wordMatch[1] === 'null' ? 'json-null' : 'json-bool';
        result += '<span class="' + cls + '">' + wordMatch[1] + '</span>';
        i += wordMatch[1].length;
        continue;
      }
      result += line[i];
      i++;
    }
    return result;
  }

  /* ----------------------------------------------------------
   *  Collapsible API Bodies
   *  Adds a toggle button to .api-body sections. Long JSON
   *  bodies start collapsed with a "Show response" button.
   * -------------------------------------------------------- */
  function initApiCollapsible() {
    document.querySelectorAll('.api-body').forEach(function(body) {
      if (body.dataset.collapsibleInit) return;
      body.dataset.collapsibleInit = '1';

      var pre = body.querySelector('pre');
      if (!pre) return;

      // Only collapse if content is tall enough (> 4 lines)
      var lineCount = (pre.textContent.match(/\n/g) || []).length;
      if (lineCount < 5) return;

      // Determine request vs response: if this .api-body appears before .api-response, it's a request
      var viewer = body.closest('.api-viewer');
      var responseEl = viewer ? viewer.querySelector('.api-response') : null;
      var isRequest = false;
      if (responseEl && body.compareDocumentPosition(responseEl) & Node.DOCUMENT_POSITION_FOLLOWING) {
        isRequest = true;
      }
      var label = isRequest ? 'Request Body' : 'Response Body';
      var icon = isRequest ? 'fa-arrow-up' : 'fa-arrow-down';

      // Wrap content
      body.classList.add('api-body--collapsible', 'api-body--collapsed');

      var toggle = document.createElement('button');
      toggle.className = 'api-body-toggle';
      toggle.innerHTML = '<i class="fa-solid ' + icon + '"></i> <span>' + label + '</span> <span class="api-body-lines">' + lineCount + ' lines</span> <i class="fa-solid fa-chevron-down api-body-chevron"></i>';
      body.insertBefore(toggle, pre);

      toggle.addEventListener('click', function() {
        var collapsed = body.classList.toggle('api-body--collapsed');
        var chevron = toggle.querySelector('.api-body-chevron');
        if (chevron) {
          chevron.style.transform = collapsed ? '' : 'rotate(180deg)';
        }
      });
    });
  }

  /* ----------------------------------------------------------
   *  DATA-DRIVEN BUILDERS — All 32 components
   *  Each reads minimal HTML + data-* attrs, builds full DOM
   * -------------------------------------------------------- */

  /* 13. Math Stepper — builds from minimal step divs */
  function initMathSteppers() {
    document.querySelectorAll('.math-stepper').forEach(function(el) {
      if (el.dataset.built) return; el.dataset.built = '1';
      var steps = el.querySelectorAll('.math-step');
      steps.forEach(function(step, i) {
        var numEl = step.querySelector('.math-step-number');
        if (numEl && !numEl.dataset.num) numEl.dataset.num = i + 1;
      });
    });
  }

  /* 15. Architecture Diff — data-driven before/after */
  function initArchDiffs() {
    document.querySelectorAll('.arch-diff[data-before]').forEach(function(el) {
      if (el.dataset.built) return; el.dataset.built = '1';
      el.innerHTML =
        '<div class="arch-diff-before"><div class="arch-diff-label arch-diff-label--before">Before</div>' +
        '<p>' + el.dataset.before + '</p></div>' +
        '<div class="arch-diff-divider"><span>&rarr;</span></div>' +
        '<div class="arch-diff-after"><div class="arch-diff-label arch-diff-label--after">After</div>' +
        '<p>' + el.dataset.after + '</p></div>';
    });
  }

  /* 16. Evolution Stepper — data-driven from data-steps JSON */
  function initEvoSteppers() {
    document.querySelectorAll('.evolution-stepper[data-steps]').forEach(function(el) {
      if (el.dataset.built) return; el.dataset.built = '1';
      var steps = JSON.parse(el.dataset.steps);
      var html = '';
      steps.forEach(function(s, i) {
        var active = s.active ? ' evo-step--active' : '';
        html += '<div class="evo-step' + active + '">' +
          '<div class="evo-step-badge">' + s.badge + '</div>' +
          '<div class="evo-step-title">' + s.title + '</div>' +
          '<div class="evo-step-desc">' + s.desc + '</div></div>';
        if (s.breaks) {
          html += '<div class="evo-step-break"><span>' + s.breaks + '</span></div>';
        }
      });
      el.innerHTML = html;
    });
  }

  /* 18. Storage Visualizer — data-driven from data-rows JSON */
  function initStorageViz() {
    document.querySelectorAll('.storage-viz[data-rows]').forEach(function(el) {
      if (el.dataset.built) return; el.dataset.built = '1';
      var rows = JSON.parse(el.dataset.rows);
      var legendItems = {};
      var html = '';
      rows.forEach(function(row) {
        html += '<div class="storage-row-label">' + row.label + '</div><div class="storage-row">';
        row.blocks.forEach(function(b) {
          html += '<div class="storage-block storage-block--' + b.type + '" style="flex:' + b.flex + '">' + b.name + '</div>';
          legendItems[b.type] = b.name;
        });
        html += '</div>';
      });
      html += '<div class="storage-legend">';
      Object.keys(legendItems).forEach(function(type) {
        html += '<span class="storage-legend-item storage-legend-item--' + type + '">' + legendItems[type] + '</span>';
      });
      html += '</div>';
      el.innerHTML = html;
    });
  }

  /* 20. Flow Stepper — already has HTML steps, JS adds navigation */
  function initFlowSteppers() {
    document.querySelectorAll('.flow-stepper').forEach(function(el) {
      if (el.dataset.flowInit) return; el.dataset.flowInit = '1';
      var steps = el.querySelectorAll('.flow-step');
      var controls = el.querySelector('.flow-stepper-controls');
      if (!controls || steps.length === 0) return;

      var current = parseInt(el.dataset.current || '0');
      var prevBtn = controls.querySelector('.flow-prev');
      var nextBtn = controls.querySelector('.flow-next');
      var progress = controls.querySelector('.flow-progress');

      // Build timeline
      var timeline = document.createElement('div');
      timeline.className = 'flow-timeline';
      for (var t = 0; t < steps.length; t++) {
        if (t > 0) {
          var line = document.createElement('div');
          line.className = 'flow-timeline-line';
          timeline.appendChild(line);
        }
        var node = document.createElement('div');
        node.className = 'flow-timeline-node';
        node.textContent = t + 1;
        timeline.appendChild(node);
      }
      el.insertBefore(timeline, steps[0]);

      function goToStep(n) {
        current = Math.max(0, Math.min(n, steps.length - 1));
        steps.forEach(function(s, i) { s.classList.toggle('active', i === current); });
        var nodes = timeline.querySelectorAll('.flow-timeline-node');
        var lines = timeline.querySelectorAll('.flow-timeline-line');
        nodes.forEach(function(nd, i) {
          nd.classList.toggle('active', i <= current);
          nd.classList.toggle('current', i === current);
        });
        lines.forEach(function(ln, i) { ln.classList.toggle('active', i < current); });
        prevBtn.disabled = current === 0;
        nextBtn.disabled = current === steps.length - 1;
        progress.textContent = 'Step ' + (current + 1) + ' of ' + steps.length;
      }
      prevBtn.addEventListener('click', function() { goToStep(current - 1); });
      nextBtn.addEventListener('click', function() { goToStep(current + 1); });
      goToStep(current);
    });
  }

  /* 21. Packet Viewer — data-driven from data-fields JSON */
  function initPacketViewers() {
    document.querySelectorAll('.packet-viewer[data-fields]').forEach(function(el) {
      if (el.dataset.built) return; el.dataset.built = '1';
      var title = el.dataset.title || 'TCP Segment';
      var fields = JSON.parse(el.dataset.fields);
      var html = '<div class="packet-header">' + title + '</div><div class="packet-fields">';
      fields.forEach(function(f) {
        var cls = 'packet-field' + (f.width ? ' pkt-' + f.width : '') + (f.highlight ? ' packet-field--highlight' : '');
        html += '<div class="' + cls + '"><span class="packet-field-name">' + f.name + '</span>' +
          '<span class="packet-field-value">' + f.value + '</span>' +
          (f.note ? '<span class="packet-field-note">' + f.note + '</span>' : '') + '</div>';
      });
      html += '</div>';
      el.innerHTML = html;
    });
  }

  /* 22. Schema Viewer — data-driven from data-tables JSON */
  function initSchemaViewers() {
    document.querySelectorAll('.schema-viewer[data-tables]').forEach(function(el) {
      if (el.dataset.built) return; el.dataset.built = '1';
      var tables = JSON.parse(el.dataset.tables);
      var html = '';
      tables.forEach(function(tbl) {
        html += '<div class="schema-table"><div class="schema-table-header"><i class="fas fa-table"></i> ' + tbl.name + '</div><div class="schema-columns">';
        tbl.columns.forEach(function(col) {
          var cls = 'schema-col' + (col.pk ? ' schema-col--pk' : '') + (col.fk ? ' schema-col--fk' : '');
          var icon = col.pk ? '&#128273;' : (col.fk ? '&#128279;' : '');
          var constraint = col.pk ? 'PK' : (col.fk ? 'FK &rarr; ' + col.fk : (col.constraint || ''));
          html += '<div class="' + cls + '"><span class="schema-col-icon">' + icon + '</span>' +
            '<span class="schema-col-name">' + col.name + '</span>' +
            '<span class="schema-col-type">' + col.type + '</span>' +
            '<span class="schema-col-constraint">' + constraint + '</span></div>';
        });
        html += '</div></div>';
      });
      el.innerHTML = html;
    });
  }

  /* 24. Log Viewer — data-driven from data-entries JSON */
  function initLogViewers() {
    document.querySelectorAll('.log-viewer[data-entries]').forEach(function(el) {
      if (el.dataset.built) return; el.dataset.built = '1';
      var entries = JSON.parse(el.dataset.entries);
      var html = '';
      entries.forEach(function(e) {
        var level = (e.level || 'info').toLowerCase();
        html += '<div class="log-entry log-entry--' + level + '">' +
          '<span class="log-timestamp">' + e.time + '</span>' +
          '<span class="log-level">' + level.toUpperCase() + '</span>' +
          '<span class="log-message">' + e.msg + '</span></div>';
      });
      el.innerHTML = html;
    });
  }

  /* 25. Error Block — data-driven from data-* attrs */
  function initErrorBlocks() {
    document.querySelectorAll('.error-block[data-code]').forEach(function(el) {
      if (el.dataset.built) return; el.dataset.built = '1';
      var type = el.dataset.type || 'postgres';
      el.classList.add('error-block--' + type);
      el.innerHTML =
        '<div class="error-block-header">' + (el.dataset.header || type + ' Error') + '</div>' +
        '<div class="error-block-code">' + el.dataset.code + '</div>' +
        '<div class="error-block-message">' + el.dataset.message + '</div>' +
        (el.dataset.detail ? '<div class="error-block-detail">' + el.dataset.detail + '</div>' : '');
    });
  }

  /* 26. Query Plan — data-driven from data-plan JSON */
  function initQueryPlans() {
    document.querySelectorAll('.query-plan[data-plan]').forEach(function(el) {
      if (el.dataset.built) return; el.dataset.built = '1';
      var plan = JSON.parse(el.dataset.plan);
      function buildNode(node) {
        var cls = node.children ? 'plan-node plan-node--root' : 'plan-node--child';
        var html = '<div class="' + cls + '">' +
          '<span class="plan-node-type plan-node-type--' + node.type + '">' + node.label + '</span>' +
          '<div class="plan-node-stats">' + node.stats + '</div>' +
          (node.note ? '<div class="plan-node-note">&#9888; ' + node.note + '</div>' : '');
        if (node.children) {
          node.children.forEach(function(child) { html += buildNode(child); });
        }
        html += '</div>';
        return html;
      }
      el.innerHTML = buildNode(plan);
    });
  }

  /* 27. Dashboard — data-driven from data-metrics JSON */
  function initDashboards() {
    document.querySelectorAll('.dashboard[data-metrics]').forEach(function(el) {
      if (el.dataset.built) return; el.dataset.built = '1';
      var metrics = JSON.parse(el.dataset.metrics);
      var html = '';
      metrics.forEach(function(m) {
        var cls = 'dashboard-metric' + (m.status ? ' dashboard-metric--' + m.status : '');
        html += '<div class="' + cls + '">' +
          '<div class="dashboard-metric-label">' + m.label + '</div>' +
          '<div class="dashboard-metric-value">' + m.value + '</div>' +
          (m.trend ? '<div class="dashboard-metric-trend dashboard-metric-trend--' + m.dir + '">' + m.trend + '</div>' : '') +
          '</div>';
      });
      el.innerHTML = html;
    });
  }

  /* 28. Interview Chat — data-driven from child elements with data-* attrs */
  function initInterviewChats() {
    document.querySelectorAll('.interview-chat[data-chat]').forEach(function(el) {
      if (el.dataset.built) return; el.dataset.built = '1';
      var chat;
      try { chat = JSON.parse(el.dataset.chat); } catch(e) { console.warn('Interview chat JSON error:', e.message); return; }
      var html = '<div class="chat-header"><div class="chat-header-left">' +
        '<span class="chat-header-dot"></span>' +
        '<span class="chat-header-title">' + (chat.title || 'System Design Round') + '</span></div>' +
        '<div class="chat-header-meta">' +
        (chat.topic ? '<span class="chat-header-topic"><i class="fa-solid fa-link"></i> ' + chat.topic + '</span>' : '') +
        (chat.duration ? '<span class="chat-header-duration"><i class="fa-regular fa-clock"></i> ' + chat.duration + '</span>' : '') +
        '</div></div>';
      chat.messages.forEach(function(m) {
        if (m.phase) {
          html += '<div class="chat-phase"><span>' + m.phase + '</span></div>';
        } else if (m.typing) {
          html += '<div class="chat-typing"><div class="chat-avatar">' + m.avatar + '</div><span class="chat-typing-text">typing...</span></div>';
        } else {
          var role = m.role || 'candidate';
          html += '<div class="chat-message chat-message--' + role + '">' +
            '<div class="chat-avatar">' + m.avatar + '</div><div class="chat-content">' +
            '<div class="chat-meta"><span class="chat-name">' + m.name + '</span><span class="chat-time">' + m.time + '</span></div>' +
            '<div class="chat-bubble">' + m.text + '</div></div></div>';
          if (m.score) {
            var scoreCls = m.scoreBad ? ' chat-score--bad' : '';
            var icon = m.scoreBad ? 'fa-xmark' : 'fa-check';
            html += '<div class="chat-score' + scoreCls + '"><i class="fa-solid ' + icon + '"></i> ' + m.score + '</div>';
          }
        }
      });
      el.innerHTML = html;
    });
  }

  /* 29. Knowledge Check — data-driven from data-* attrs */
  function initKnowledgeChecks() {
    document.querySelectorAll('.knowledge-check[data-question]').forEach(function(el) {
      if (el.dataset.built) return; el.dataset.built = '1';
      var options;
      try { options = JSON.parse(el.dataset.options); } catch(e) { console.warn('Quiz JSON error:', e.message, el.dataset.question.substring(0,50)); return; }
      var name = 'kc-' + Math.random().toString(36).slice(2, 8);
      var letters = ['A', 'B', 'C', 'D', 'E', 'F'];
      var html = '<div class="kc-header"><div class="kc-header-left"><i class="fa-solid fa-circle-question"></i> Knowledge Check</div><span class="kc-header-count">' + options.length + ' options</span></div>';
      html += '<div class="kc-body"><div class="kc-question">' + el.dataset.question + '</div><div class="kc-options">';
      options.forEach(function(opt, i) {
        var correct = opt.correct ? ' data-correct="true"' : '';
        html += '<label class="kc-option"' + correct + '><input type="radio" name="' + name + '" value="' + i + '"><span class="kc-badge"><span class="kc-badge-letter">' + (letters[i] || '') + '</span></span> ' + opt.text + '</label>';
      });
      html += '</div></div><div class="kc-explanation"><div class="kc-explanation-inner"><i class="fa-solid fa-lightbulb"></i><div>' + (el.dataset.explanation || '') + '</div></div></div>';
      el.innerHTML = html;
    });
  }

  /* 30. Code Walkthrough — CSS ::after handles tooltips via data-cw-tip attr.
   *     This builder just marks annotated lines for styling if needed. */
  function initCodeWalkthroughs() {
    document.querySelectorAll('.code-walkthrough').forEach(function(el) {
      if (el.dataset.built) return; el.dataset.built = '1';
      // CSS already renders tooltip via ::after { content: attr(data-cw-tip) }
      // Just ensure position:relative on annotated lines
      el.querySelectorAll('.cw-line[data-cw-tip]').forEach(function(line) {
        line.style.position = 'relative';
      });
    });
  }

  /* 31. Scorecard — data-driven from data-scorecard JSON */
  function initScorecards() {
    document.querySelectorAll('.scorecard[data-scorecard]').forEach(function(el) {
      if (el.dataset.built) return; el.dataset.built = '1';
      var sc = JSON.parse(el.dataset.scorecard);
      var circumference = 2 * Math.PI * 34;
      var html = '<div class="scorecard-header">' +
        '<span class="scorecard-title"><i class="fa-solid fa-chart-pie"></i> ' + (sc.title || 'Interview Performance') + '</span>' +
        '<span class="scorecard-verdict scorecard-verdict--' + sc.verdictClass + '">' + sc.verdict + '</span></div>' +
        '<div class="scorecard-gauges">';
      sc.criteria.forEach(function(c) {
        var dashLen = (c.score / 100) * circumference;
        var color = c.score >= 70 ? '#34d399' : (c.score >= 40 ? '#fbbf24' : '#f87171');
        html += '<div class="scorecard-gauge" data-score="' + c.score + '">' +
          '<svg viewBox="0 0 80 80"><circle cx="40" cy="40" r="34" fill="none" stroke="rgba(255,255,255,0.04)" stroke-width="5"/>' +
          '<circle class="sg-ring" cx="40" cy="40" r="34" fill="none" stroke="' + color + '" stroke-width="5" stroke-dasharray="' + dashLen.toFixed(0) + ' ' + circumference.toFixed(0) + '" stroke-dashoffset="0" stroke-linecap="round" transform="rotate(-90 40 40)"/></svg>' +
          '<span class="sg-value">' + c.score + '</span>' +
          '<span class="sg-label">' + c.label + '</span></div>';
      });
      html += '</div><div class="scorecard-details">';
      sc.criteria.forEach(function(c) {
        var color = c.score >= 70 ? '#34d399' : (c.score >= 40 ? '#fbbf24' : '#f87171');
        var rating = c.score >= 70 ? 'strong' : (c.score >= 40 ? 'mixed' : 'weak');
        var ratingText = c.score >= 70 ? 'Strong' : (c.score >= 40 ? 'Mixed' : 'Weak');
        html += '<div class="scorecard-row"><span class="scorecard-dot" style="background:' + color + '"></span>' +
          '<span class="scorecard-criteria">' + c.label + '</span>' +
          '<span class="scorecard-note">' + c.note + '</span>' +
          '<span class="scorecard-rating scorecard-rating--' + rating + '">' + ratingText + '</span></div>';
      });
      html += '</div>';
      el.innerHTML = html;
    });
  }

  /* 39. Dependency Graph — Render-then-connect approach
   *  Step 1: Render nodes in flex layers (browser handles layout)
   *  Step 2: After paint, measure real positions, draw SVG edges
   *  Step 3: Add drag + hover interactivity */
  function initDepGraphs() {
    document.querySelectorAll('.dep-graph[data-graph]').forEach(function(el) {
      if (el.dataset.built) return; el.dataset.built = '1';
      var g = JSON.parse(el.dataset.graph);
      if (!g || !g.layers) return;       // skip if data is incomplete
      var title = g.title || 'Service Dependencies';
      var edges = g.edges || [];

      // Step 1: Build flex layout (no absolute positioning)
      // Count total nodes
      var nodeCount = g.layers.reduce(function(sum, l) { return sum + l.length; }, 0);
      var html = '<div class="dep-graph-header"><span><i class="fa-solid fa-diagram-project"></i> ' + title + '</span><span class="dep-graph-count">' + nodeCount + ' nodes</span></div>';
      html += '<div class="dep-graph-body"><button class="dep-graph-reset"><i class="fa-solid fa-rotate-left"></i> Reset</button><svg class="dep-graph-canvas"></svg>';
      var layerLabels = g.layerLabels || [];
      g.layers.forEach(function(layer, li) {
        var tag = layerLabels[li] ? '<span class="dep-layer-tag">' + layerLabels[li] + '</span>' : '';
        html += '<div class="dep-layer">' + tag;
        layer.forEach(function(node, ni) {
          var cls = 'dep-node' + (node.status ? ' dep-node--' + node.status : '');
          var icon = node.icon ? '<i class="fa-solid ' + node.icon + '"></i> ' : '';
          var tip = node.tip ? '<span class="dep-node-tip">' + node.tip + '</span>' : '';
          html += '<div class="' + cls + '" data-nid="' + li + '-' + ni + '">' + icon + node.name + tip + '</div>';
        });
        html += '</div>';
      });
      html += '</div>';
      el.innerHTML = html;

      // Auto-generate edges if not provided
      if (edges.length === 0) {
        g.layers.forEach(function(layer, li) {
          if (li >= g.layers.length - 1) return;
          layer.forEach(function(_, ni) {
            g.layers[li + 1].forEach(function(_, nj) {
              edges.push([li, ni, li + 1, nj]);
            });
          });
        });
      }

      // Step 2: After layout, measure and draw SVG
      requestAnimationFrame(function() { setTimeout(function() {
        var body = el.querySelector('.dep-graph-body');
        var svg = el.querySelector('.dep-graph-canvas');
        var bodyR = body.getBoundingClientRect();
        svg.style.width = bodyR.width + 'px';
        svg.style.height = bodyR.height + 'px';
        svg.setAttribute('width', bodyR.width);
        svg.setAttribute('height', bodyR.height);

        function drawEdges() {
          svg.innerHTML = '';
          edges.forEach(function(e) {
            var fromEl = body.querySelector('[data-nid="' + e[0] + '-' + e[1] + '"]');
            var toEl = body.querySelector('[data-nid="' + e[2] + '-' + e[3] + '"]');
            if (!fromEl || !toEl) return;
            var fR = fromEl.getBoundingClientRect();
            var tR = toEl.getBoundingClientRect();
            var x1 = fR.left + fR.width / 2 - bodyR.left;
            var y1 = fR.bottom - bodyR.top;
            var x2 = tR.left + tR.width / 2 - bodyR.left;
            var y2 = tR.top - bodyR.top;
            var cy1 = y1 + (y2 - y1) * 0.35;
            var cy2 = y1 + (y2 - y1) * 0.65;
            var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path.setAttribute('d', 'M' + x1 + ' ' + y1 + ' C' + x1 + ' ' + cy1 + ',' + x2 + ' ' + cy2 + ',' + x2 + ' ' + y2);
            path.dataset.from = e[0] + '-' + e[1];
            path.dataset.to = e[2] + '-' + e[3];
            svg.appendChild(path);
          });
        }
        drawEdges();

        // Step 3: Hover — highlight connected edges
        var allPaths = function() { return svg.querySelectorAll('path'); };
        body.querySelectorAll('.dep-node').forEach(function(node) {
          var nid = node.dataset.nid;
          node.addEventListener('mouseenter', function() {
            allPaths().forEach(function(p) {
              if (p.dataset.from === nid || p.dataset.to === nid) p.classList.add('dg-highlight');
              else p.classList.add('dg-dim');
            });
          });
          node.addEventListener('mouseleave', function() {
            allPaths().forEach(function(p) { p.classList.remove('dg-highlight', 'dg-dim'); });
          });
        });

        // Step 3b: Drag support
        var dragNode = null, dragStartX = 0, dragStartY = 0, origLeft = 0, origTop = 0;
        body.addEventListener('mousedown', function(ev) {
          var node = ev.target.closest('.dep-node');
          if (!node) return;
          ev.preventDefault();
          dragNode = node;
          dragNode.style.position = 'relative';
          dragNode.classList.add('dg-dragging');
          dragStartX = ev.clientX;
          dragStartY = ev.clientY;
          origLeft = parseInt(dragNode.style.left || '0');
          origTop = parseInt(dragNode.style.top || '0');
          dragNode.style.zIndex = '5';
          dragNode.style.cursor = 'grabbing';
        });
        document.addEventListener('mousemove', function(ev) {
          if (!dragNode) return;
          var dx = ev.clientX - dragStartX;
          var dy = ev.clientY - dragStartY;
          dragNode.style.left = (origLeft + dx) + 'px';
          dragNode.style.top = (origTop + dy) + 'px';
          // Redraw edges
          svg.innerHTML = '';
          bodyR = body.getBoundingClientRect();
          edges.forEach(function(e) {
            var fromEl = body.querySelector('[data-nid="' + e[0] + '-' + e[1] + '"]');
            var toEl = body.querySelector('[data-nid="' + e[2] + '-' + e[3] + '"]');
            if (!fromEl || !toEl) return;
            var fR = fromEl.getBoundingClientRect();
            var tR = toEl.getBoundingClientRect();
            var x1 = fR.left + fR.width / 2 - bodyR.left;
            var y1 = fR.bottom - bodyR.top;
            var x2 = tR.left + tR.width / 2 - bodyR.left;
            var y2 = tR.top - bodyR.top;
            var cy1 = y1 + (y2 - y1) * 0.35;
            var cy2 = y1 + (y2 - y1) * 0.65;
            var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path.setAttribute('d', 'M' + x1 + ' ' + y1 + ' C' + x1 + ' ' + cy1 + ',' + x2 + ' ' + cy2 + ',' + x2 + ' ' + y2);
            path.dataset.from = e[0] + '-' + e[1];
            path.dataset.to = e[2] + '-' + e[3];
            svg.appendChild(path);
          });
        });
        document.addEventListener('mouseup', function() {
          if (dragNode) { dragNode.style.zIndex = ''; dragNode.style.cursor = ''; dragNode.classList.remove('dg-dragging'); }
          dragNode = null;
        });

        // Reset button
        var resetBtn = body.querySelector('.dep-graph-reset');
        if (resetBtn) {
          resetBtn.addEventListener('click', function() {
            body.querySelectorAll('.dep-node').forEach(function(n) {
              n.style.left = ''; n.style.top = ''; n.style.position = '';
            });
            setTimeout(function() {
              bodyR = body.getBoundingClientRect();
              svg.style.width = bodyR.width + 'px';
              svg.style.height = bodyR.height + 'px';
              svg.setAttribute('width', bodyR.width);
              svg.setAttribute('height', bodyR.height);
              drawEdges();
            }, 20);
          });
        }
      }, 50); }); // setTimeout ensures paint is complete
    });

    // Backward compat
    document.querySelectorAll('.dep-graph:not([data-graph])').forEach(function(el) {
      if (el.dataset.built) return; el.dataset.built = '1';
      var nodes = Array.from(el.querySelectorAll('.dep-node'));
      if (nodes.length === 0) return;
      var layers = [], layer = [];
      nodes.forEach(function(node, i) {
        layer.push({
          name: node.textContent.replace(/🔒/g, '').trim(),
          status: node.classList.contains('dep-node--done') ? 'done' :
                  node.classList.contains('dep-node--current') ? 'current' :
                  node.classList.contains('dep-node--locked') ? 'locked' : ''
        });
        if (layer.length === 3 || i === nodes.length - 1) { layers.push(layer); layer = []; }
      });
      el.dataset.graph = JSON.stringify({ title: el.dataset.title || 'Service Dependencies', layers: layers });
      el.dataset.built = '';
      initDepGraphs();
    });
  }

  /* 73. B+ Tree Navigator — SVG connectors + animated search */
  function initBtreeNavs() {
    document.querySelectorAll('.btree-nav').forEach(function(el) {
      if (el.dataset.built) return; el.dataset.built = '1';

      // Wrap content in body if needed
      if (!el.querySelector('.btree-body')) {
        var children = Array.from(el.children);
        var bodyDiv = document.createElement('div');
        bodyDiv.className = 'btree-body';
        children.forEach(function(c) { bodyDiv.appendChild(c); });
        el.appendChild(bodyDiv);
      }
      var body = el.querySelector('.btree-body');

      // Add SVG layer
      var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.classList.add('btree-svg');
      body.insertBefore(svg, body.firstChild);

      // Add header
      if (!el.querySelector('.btree-header')) {
        var header = document.createElement('div');
        header.className = 'btree-header';
        header.innerHTML = '<span><i class="fa-solid fa-sitemap"></i> B+ Tree Lookup</span>' +
          '<span class="btree-search-info">click any key to search</span>' +
          '<button class="btree-reset"><i class="fa-solid fa-rotate-left"></i> Reset</button>';
        el.insertBefore(header, el.firstChild);
      }

      // Add narration bar
      var narration = document.createElement('div');
      narration.className = 'btree-narration';
      narration.textContent = 'Click any key in the tree to visualize the B+ tree search path.';
      el.insertBefore(narration, body);

      // Add level labels
      var levels = body.querySelectorAll('.btree-level');
      var levelNames = ['Root', 'Internal', 'Leaf'];
      levels.forEach(function(lvl, i) {
        if (!lvl.querySelector('.btree-level-tag')) {
          var tag = document.createElement('span');
          tag.className = 'btree-level-tag';
          tag.textContent = i < levelNames.length ? levelNames[i] : 'L' + i;
          lvl.appendChild(tag);
        }
      });

      // Tag nodes with level/index for connector mapping
      levels.forEach(function(lvl, li) {
        var nodes = lvl.querySelectorAll('.btree-node');
        nodes.forEach(function(node, ni) {
          node.dataset.lvl = li;
          node.dataset.idx = ni;
        });
      });

      // Draw SVG connectors after layout
      var allLines = [];
      requestAnimationFrame(function() { setTimeout(function() {
        var bodyR = body.getBoundingClientRect();
        svg.setAttribute('width', bodyR.width);
        svg.setAttribute('height', bodyR.height);
        svg.style.width = bodyR.width + 'px';
        svg.style.height = bodyR.height + 'px';

        // Connect each parent node to its children
        // B+ tree rule: node with N keys has N+1 children
        for (var li = 0; li < levels.length - 1; li++) {
          var parentNodes = levels[li].querySelectorAll('.btree-node');
          var childNodes = levels[li + 1].querySelectorAll('.btree-node');
          var childIdx = 0;
          parentNodes.forEach(function(pNode) {
            var keyCount = pNode.querySelectorAll('.btree-key').length;
            var childCount = keyCount + 1; // B+ tree: N keys → N+1 children
            var pR = pNode.getBoundingClientRect();
            var px = pR.left + pR.width / 2 - bodyR.left;
            var py = pR.bottom - bodyR.top;

            for (var c = 0; c < childCount && childIdx < childNodes.length; c++, childIdx++) {
              var cNode = childNodes[childIdx];
              var cR = cNode.getBoundingClientRect();
              var cx = cR.left + cR.width / 2 - bodyR.left;
              var cy = cR.top - bodyR.top;

              var line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
              line.setAttribute('x1', px);
              line.setAttribute('y1', py);
              line.setAttribute('x2', cx);
              line.setAttribute('y2', cy);
              line.dataset.parent = pNode.dataset.lvl + '-' + pNode.dataset.idx;
              line.dataset.child = cNode.dataset.lvl + '-' + cNode.dataset.idx;
              svg.appendChild(line);
              allLines.push(line);
            }
          });
        }

        // Animated search on key click
        function animateSearch(targetVal) {
          // Clear previous
          body.querySelectorAll('.bt-visited,.bt-match,.bt-dim').forEach(function(e) {
            e.classList.remove('bt-visited', 'bt-match', 'bt-dim');
          });
          allLines.forEach(function(l) { l.classList.remove('bt-active', 'bt-active-leaf'); });

          // Dim all nodes
          body.querySelectorAll('.btree-node').forEach(function(n) { n.classList.add('bt-dim'); });

          // Walk the tree level by level with animation delay
          var searchPath = []; // [{node, keyIdx, childIdx}]
          var childOffset = 0;

          for (var li = 0; li < levels.length; li++) {
            var nodes = levels[li].querySelectorAll('.btree-node');
            // Find which node at this level we should visit
            var visitNode, visitKeyIdx = -1, nextChildIdx = 0;

            if (li === 0) {
              visitNode = nodes[0]; // root
            } else {
              // Use childIdx from previous step
              var prevStep = searchPath[searchPath.length - 1];
              var cumIdx = 0;
              // Count children of all parent nodes before the visited one
              var parentLevel = levels[li - 1].querySelectorAll('.btree-node');
              for (var pi = 0; pi < parentLevel.length; pi++) {
                if (parentLevel[pi] === prevStep.node) {
                  visitNode = nodes[cumIdx + prevStep.childIdx];
                  break;
                }
                cumIdx += parentLevel[pi].querySelectorAll('.btree-key').length + 1;
              }
            }

            if (!visitNode) break;

            var keys = visitNode.querySelectorAll('.btree-key');
            var vals = Array.from(keys).map(function(k) { return parseInt(k.textContent); });
            var isLeaf = visitNode.classList.contains('leaf');

            if (isLeaf) {
              // Find exact match
              var foundIdx = vals.indexOf(targetVal);
              searchPath.push({ node: visitNode, keyIdx: foundIdx, childIdx: -1, isLeaf: true });
            } else {
              // Find which child pointer to follow
              var ci = 0;
              for (var ki = 0; ki < vals.length; ki++) {
                if (targetVal < vals[ki]) { ci = ki; visitKeyIdx = ki; break; }
                if (ki === vals.length - 1) { ci = ki + 1; visitKeyIdx = ki; }
              }
              searchPath.push({ node: visitNode, keyIdx: visitKeyIdx, childIdx: ci, isLeaf: false });
            }
          }

          // Animate step by step
          var info = el.querySelector('.btree-search-info');
          if (info) info.textContent = 'searching: ' + targetVal;

          searchPath.forEach(function(step, si) {
            setTimeout(function() {
              step.node.classList.remove('bt-dim');
              step.node.classList.add('bt-visited');

              if (step.isLeaf && step.keyIdx >= 0) {
                var keys = step.node.querySelectorAll('.btree-key');
                keys[step.keyIdx].classList.add('bt-match');
                narration.textContent = '✓ Found ' + targetVal + ' in leaf node!';
                narration.style.color = '#34d399';
              } else if (step.isLeaf) {
                narration.textContent = '✗ Key ' + targetVal + ' not found in leaf.';
                narration.style.color = '#f87171';
              } else {
                var keys = step.node.querySelectorAll('.btree-key');
                if (step.keyIdx >= 0) keys[step.keyIdx].classList.add('bt-match');
                var keyVal = step.keyIdx >= 0 ? parseInt(keys[step.keyIdx].textContent) : '?';
                var dir = targetVal < keyVal ? 'go LEFT' : 'go RIGHT';
                var depth = si === 0 ? 'Root' : 'Level ' + si;
                narration.textContent = depth + ': compare ' + targetVal + ' vs ' + keyVal + ' → ' + dir;
                narration.style.color = '';
              }

              // Highlight the connector line to this node
              if (si > 0) {
                var prevId = searchPath[si - 1].node.dataset.lvl + '-' + searchPath[si - 1].node.dataset.idx;
                var currId = step.node.dataset.lvl + '-' + step.node.dataset.idx;
                allLines.forEach(function(l) {
                  if (l.dataset.parent === prevId && l.dataset.child === currId) {
                    l.classList.add(step.isLeaf ? 'bt-active-leaf' : 'bt-active');
                  }
                });
              }
            }, si * 600); // 600ms per step
          });
        }

        // Click handler on any key
        body.querySelectorAll('.btree-key').forEach(function(key) {
          key.addEventListener('click', function() {
            var val = parseInt(key.textContent);
            if (!isNaN(val)) animateSearch(val);
          });
        });

        // Reset button
        var resetBtn = el.querySelector('.btree-reset');
        if (resetBtn) {
          resetBtn.addEventListener('click', function() {
            body.querySelectorAll('.bt-visited,.bt-match,.bt-dim').forEach(function(e) {
              e.classList.remove('bt-visited', 'bt-match', 'bt-dim');
            });
            allLines.forEach(function(l) { l.classList.remove('bt-active', 'bt-active-leaf'); });
            narration.textContent = 'Click any key in the tree to visualize the B+ tree search path.';
            narration.style.color = '';
            var info = el.querySelector('.btree-search-info');
            if (info) info.textContent = 'click any key to search';
          });
        }
      }, 60); });
    });
  }

  /* 72. Glossary Panel — auto-build header, search, alpha sidebar */
  function initGlossaryPanels() {
    document.querySelectorAll('.glossary-panel').forEach(function(el) {
      if (el.dataset.built) return; el.dataset.built = '1';
      var list = el.querySelector('.glossary-panel-list');
      if (!list) return;
      var items = list.querySelectorAll('.glossary-item');
      var letters = list.querySelectorAll('.glossary-letter');

      // Count terms
      var count = items.length;

      // Build header
      var header = document.createElement('div');
      header.className = 'glossary-panel-header';
      header.innerHTML = '<span><i class="fa-solid fa-book"></i> Key Terms</span><span class="glossary-panel-count">' + count + ' terms</span>';
      el.insertBefore(header, el.firstChild);

      // Hide old title
      var oldTitle = el.querySelector('.glossary-panel-title');
      if (oldTitle) oldTitle.style.display = 'none';

      // Build search
      var search = document.createElement('div');
      search.className = 'glossary-search';
      search.innerHTML = '<i class="fa-solid fa-magnifying-glass"></i><input type="text" placeholder="Filter terms...">';
      el.insertBefore(search, list);
      var input = search.querySelector('input');

      // Build body wrapper with alpha sidebar
      var body = document.createElement('div');
      body.className = 'glossary-body';

      // Alpha sidebar
      var uniqueLetters = [];
      letters.forEach(function(l) { uniqueLetters.push(l.textContent.trim()); });
      if (uniqueLetters.length > 3) {
        var alpha = document.createElement('div');
        alpha.className = 'glossary-alpha';
        uniqueLetters.forEach(function(letter) {
          var btn = document.createElement('button');
          btn.className = 'glossary-alpha-btn';
          btn.textContent = letter;
          btn.addEventListener('click', function() {
            letters.forEach(function(lEl) {
              if (lEl.textContent.trim() === letter) {
                lEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            });
          });
          alpha.appendChild(btn);
        });
        body.appendChild(alpha);
      }

      // Move list into body wrapper
      el.insertBefore(body, list);
      body.appendChild(list);

      // Search filter
      input.addEventListener('input', function() {
        var q = this.value.toLowerCase();
        items.forEach(function(item) {
          var term = item.querySelector('.glossary-term');
          var def = item.querySelector('.glossary-def');
          var text = (term ? term.textContent : '') + ' ' + (def ? def.textContent : '');
          item.classList.toggle('gl-hidden', q && text.toLowerCase().indexOf(q) === -1);
        });
        // Hide letter headers if all items under them are hidden
        letters.forEach(function(lEl) {
          var next = lEl.nextElementSibling;
          var anyVisible = false;
          while (next && !next.classList.contains('glossary-letter')) {
            if (next.classList.contains('glossary-item') && !next.classList.contains('gl-hidden')) anyVisible = true;
            next = next.nextElementSibling;
          }
          lEl.style.display = anyVisible || !q ? '' : 'none';
        });
      });

      // Auto-link: scan page text and wrap matching glossary terms with tooltips
      var termMap = {};
      items.forEach(function(item) {
        var termEl = item.querySelector('.glossary-term');
        var defEl = item.querySelector('.glossary-def');
        if (termEl && defEl) {
          termMap[termEl.textContent.trim()] = defEl.textContent.trim();
        }
      });

      // Sort terms by length (longest first) to avoid partial matches
      var termKeys = Object.keys(termMap).sort(function(a, b) { return b.length - a.length; });
      if (termKeys.length === 0) return;

      // Build regex matching all terms (case-insensitive, word boundary)
      var escapedTerms = termKeys.map(function(t) {
        return t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      });
      var regex = new RegExp('\\b(' + escapedTerms.join('|') + ')\\b', 'gi');

      // Walk text nodes in the page content (skip glossary panel itself, code, pre, script, etc.)
      var skipTags = { SCRIPT: 1, STYLE: 1, PRE: 1, CODE: 1, BUTTON: 1, INPUT: 1, TEXTAREA: 1, SVG: 1 };
      var skipClasses = ['glossary-panel', 'glossary-term', 'glossary-def', 'tooltip-trigger', 'tooltip-rich', 'macos-window', 'code-walkthrough', 'knowledge-check', 'kc-option', 'kc-question', 'cheat-card'];

      function shouldSkip(node) {
        var tn = (node.tagName || '').toUpperCase();
        if (skipTags[tn]) return true;
        // Also skip any SVG namespace element
        if (node.namespaceURI && node.namespaceURI.indexOf('svg') > -1) return true;
        if (node.classList) {
          for (var i = 0; i < skipClasses.length; i++) {
            if (node.classList.contains(skipClasses[i])) return true;
          }
        }
        // Skip if already a glossary-linked term
        if (node.dataset && node.dataset.glLinked) return true;
        return false;
      }

      function walkTextNodes(root) {
        var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
          acceptNode: function(node) {
            var parent = node.parentElement;
            // Skip nodes inside excluded containers
            while (parent && parent !== root) {
              if (shouldSkip(parent)) return NodeFilter.FILTER_REJECT;
              parent = parent.parentElement;
            }
            return node.textContent.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
          }
        });

        var textNodes = [];
        while (walker.nextNode()) textNodes.push(walker.currentNode);
        return textNodes;
      }

      // Find content container (main, .test-container, or body)
      var contentRoot = document.querySelector('main') || document.querySelector('.test-container') || document.body;
      var textNodes = walkTextNodes(contentRoot);

      textNodes.forEach(function(textNode) {
        var text = textNode.textContent;
        if (!regex.test(text)) return;
        regex.lastIndex = 0; // reset after test()

        var frag = document.createDocumentFragment();
        var lastIdx = 0;
        var match;
        regex.lastIndex = 0;
        while ((match = regex.exec(text)) !== null) {
          // Add text before match
          if (match.index > lastIdx) {
            frag.appendChild(document.createTextNode(text.slice(lastIdx, match.index)));
          }
          // Create tooltip span for the matched term
          var matchedTerm = match[1];
          // Find the exact key (case-insensitive lookup)
          var defText = '';
          for (var k = 0; k < termKeys.length; k++) {
            if (termKeys[k].toLowerCase() === matchedTerm.toLowerCase()) {
              defText = termMap[termKeys[k]];
              break;
            }
          }
          var span = document.createElement('span');
          span.className = 'tooltip-trigger gl-auto-link';
          span.setAttribute('data-tooltip', defText);
          span.dataset.glLinked = '1';
          span.textContent = matchedTerm;
          frag.appendChild(span);
          lastIdx = regex.lastIndex;
        }
        // Add remaining text
        if (lastIdx < text.length) {
          frag.appendChild(document.createTextNode(text.slice(lastIdx)));
        }
        textNode.parentNode.replaceChild(frag, textNode);
      });
    });
  }

  /* 41. Multi-File — auto-build titlebar, file icons, tab switching */
  var fileIcons = {
    cs: 'fa-solid fa-hashtag', js: 'fa-brands fa-js', ts: 'fa-brands fa-js',
    py: 'fa-brands fa-python', java: 'fa-brands fa-java', go: 'fa-solid fa-code',
    rs: 'fa-solid fa-gear', rb: 'fa-solid fa-gem', php: 'fa-brands fa-php',
    html: 'fa-brands fa-html5', css: 'fa-brands fa-css3-alt', json: 'fa-solid fa-code',
    sql: 'fa-solid fa-database', yaml: 'fa-solid fa-file-code', yml: 'fa-solid fa-file-code',
    md: 'fa-solid fa-file-lines', txt: 'fa-solid fa-file-lines', xml: 'fa-solid fa-code',
    sh: 'fa-solid fa-terminal', bash: 'fa-solid fa-terminal', dockerfile: 'fa-brands fa-docker'
  };
  function getFileIcon(filename) {
    var ext = (filename.split('.').pop() || '').toLowerCase();
    return fileIcons[ext] || 'fa-solid fa-file-code';
  }
  function initMultiFiles() {
    document.querySelectorAll('.multi-file').forEach(function(el) {
      if (el.dataset.built) return; el.dataset.built = '1';

      // Add titlebar if missing
      if (!el.querySelector('.multi-file-titlebar')) {
        var titlebar = document.createElement('div');
        titlebar.className = 'multi-file-titlebar';
        titlebar.innerHTML = '<div class="dot dot-red"></div><div class="dot dot-yellow"></div><div class="dot dot-green"></div>';
        el.insertBefore(titlebar, el.firstChild);
      }

      // Add file icons to tabs
      el.querySelectorAll('.multi-file-tab').forEach(function(tab) {
        if (tab.querySelector('i')) return; // already has icon
        var filename = tab.textContent.trim();
        var iconCls = getFileIcon(filename);
        tab.innerHTML = '<i class="' + iconCls + '"></i> ' + filename;
      });

      // Tab switching
      var tabs = el.querySelectorAll('.multi-file-tab');
      var panels = el.querySelectorAll('.multi-file-panel');
      tabs.forEach(function(tab) {
        tab.addEventListener('click', function() {
          var target = this.dataset.file;
          tabs.forEach(function(t) { t.classList.toggle('active', t === tab); });
          panels.forEach(function(p) { p.classList.toggle('active', p.dataset.file === target); });
        });
      });

      // Copy button in titlebar
      if (!el.querySelector('.mf-copy-btn')) {
        var titlebar = el.querySelector('.multi-file-titlebar');
        if (titlebar) {
          var copyBtn = document.createElement('button');
          copyBtn.className = 'mf-copy-btn';
          copyBtn.innerHTML = '<i class="fa-regular fa-copy"></i>';
          copyBtn.setAttribute('aria-label', 'Copy code');
          copyBtn.addEventListener('click', function() {
            var activePanel = el.querySelector('.multi-file-panel.active');
            if (!activePanel) return;
            var code = activePanel.querySelector('code');
            if (!code) return;
            navigator.clipboard.writeText(code.textContent).then(function() {
              copyBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
              copyBtn.classList.add('copied');
              setTimeout(function() {
                copyBtn.innerHTML = '<i class="fa-regular fa-copy"></i>';
                copyBtn.classList.remove('copied');
              }, 1500);
            });
          });
          titlebar.appendChild(copyBtn);
        }
      }
    });
  }

  /* 34. Debug Template — data-driven from data-steps JSON */
  var debugIcons = {
    observe: 'fa-eye', hypothesize: 'fa-lightbulb',
    verify: 'fa-magnifying-glass', fix: 'fa-wrench'
  };
  function initDebugTemplates() {
    document.querySelectorAll('.debug-template[data-steps]').forEach(function(el) {
      if (el.dataset.built) return; el.dataset.built = '1';
      var title = el.dataset.title || 'Debug Walkthrough';
      var steps = JSON.parse(el.dataset.steps);
      var html = '<div class="debug-header"><i class="fa-solid fa-bug"></i> ' + title + '</div><div class="debug-steps">';
      steps.forEach(function(s) {
        var type = s.type || 'observe';
        var icon = debugIcons[type] || 'fa-circle';
        html += '<div class="debug-step debug-step--' + type + '">' +
          '<div class="debug-step-badge"><i class="fa-solid ' + icon + '"></i></div>' +
          '<div class="debug-step-content">' +
          '<div class="debug-step-label">' + s.label + '</div>' +
          '<div class="debug-step-example">' + s.example + '</div>' +
          '</div></div>';
      });
      html += '</div>';
      el.innerHTML = html;
    });
    // Also upgrade existing hardcoded debug templates
    document.querySelectorAll('.debug-template:not([data-steps])').forEach(function(el) {
      if (el.dataset.built) return; el.dataset.built = '1';
      var steps = el.querySelectorAll('.debug-step');
      var stepTypes = ['observe', 'hypothesize', 'verify', 'fix'];
      var stepsData = [];
      steps.forEach(function(step, i) {
        var labelEl = step.querySelector('.debug-step-label');
        var exampleEl = step.querySelector('.debug-step-example');
        if (labelEl && exampleEl) {
          stepsData.push({
            type: stepTypes[i] || 'observe',
            label: labelEl.textContent,
            example: exampleEl.innerHTML
          });
        }
      });
      if (stepsData.length === 0) return;
      var title = el.dataset.title || 'Debug Walkthrough';
      var html = '<div class="debug-header"><i class="fa-solid fa-bug"></i> ' + title + '</div><div class="debug-steps">';
      stepsData.forEach(function(s) {
        var icon = debugIcons[s.type] || 'fa-circle';
        html += '<div class="debug-step debug-step--' + s.type + '">' +
          '<div class="debug-step-badge"><i class="fa-solid ' + icon + '"></i></div>' +
          '<div class="debug-step-content">' +
          '<div class="debug-step-label">' + s.label + '</div>' +
          '<div class="debug-step-example">' + s.example + '</div>' +
          '</div></div>';
      });
      html += '</div>';
      el.innerHTML = html;
    });
  }

  function reinit() {
    /* -- Prevent hljs from touching terminal blocks (not code windows) -- */
    document.querySelectorAll('.macos-window.terminal .macos-body pre code').forEach(function(el) {
      el.classList.add('nohighlight');
    });

    /* -- Highlight.js (if loaded — backward compat) -- */
    if (typeof hljs !== 'undefined') {
      hljs.highlightAll();
    }

    /* -- Auto-build code windows from <pre data-file="..."> -- */
    buildCodeWindows();

    /* -- Terminal colorizer -- */
    colorizeTerminals();

    /* -- Custom syntax highlighter for code windows + walkthroughs -- */
    colorizeCode();
    colorizeWalkthrough();

    /* -- Semantic icon colors (auto-apply by FA class name) -- */
    colorizeIcons();

    /* -- Auto-create tooltips from data-tooltip -- */
    initDataTooltips();

    /* -- Convert rich tooltips to use existing positioning system -- */
    initRichTooltips();

    /* -- Interactive tradeoff sliders -- */
    initTradeoffSliders();

    /* -- Latency rulers -- */
    initLatencyRulers();

    /* -- Sequence diagrams -- */
    initSequenceDiagrams();

    /* -- Estimation calculators -- */
    initEstimationCalcs();
    initCalcCountUp();

    /* -- Data-driven component builders -- */
    initMathSteppers();
    /* Each init wrapped in try-catch so one broken component never blocks others */
    var inits = [initArchDiffs, initEvoSteppers, initStorageViz, initFlowSteppers,
      initPacketViewers, initSchemaViewers, initLogViewers, initErrorBlocks,
      initQueryPlans, initDashboards, initInterviewChats, initKnowledgeChecks,
      initCodeWalkthroughs, initScorecards, initDebugTemplates, initDepGraphs,
      initMultiFiles, initGlossaryPanels, initBtreeNavs, initDataTooltips, colorizeCode];
    inits.forEach(function(fn) { try { fn(); } catch(e) { console.warn('Init error in ' + fn.name + ':', e.message); } });

    /* -- Load enhance.js (navigation, progress, accessibility, etc.) -- */
    (function loadEnhance() {
      var currentScript = document.querySelector('script[src*="scripts.js"]');
      if (!currentScript) return;
      var base = currentScript.src.replace(/scripts\.js.*$/, '');
      var s = document.createElement('script');
      s.src = base + 'enhance.js?v=3';
      document.head.appendChild(s);
    })();

    /* -- Line numbers + JSON highlighting for API bodies -- */
    document.querySelectorAll('pre code').forEach(function(block) {
      if (block.closest('.macos-window.terminal')) return;
      if (block.querySelector('.code-line')) return;

      var isApiBody = !!block.closest('.api-body');
      var lines = (isApiBody ? block.textContent : block.innerHTML).split('\n');
      if (lines.length > 0 && lines[lines.length - 1].trim() === '') lines.pop();

      block.innerHTML = lines.map(function(line, i) {
        var content = isApiBody ? tokenizeJSON(line) : line;
        return '<span class="code-line"><span class="line-num">' + (i + 1) + '</span>' + content + '</span>';
      }).join('\n');
    });

    /* -- Collapsible API bodies -- */
    initApiCollapsible();

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

    /* -- Wheel intercept: handled via document-level listener (see below reinit) -- */

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

    /* -- Sidebar (case study pages) -- */
    if (currentSidebarScrollHandler) {
      window.removeEventListener('scroll', currentSidebarScrollHandler);
      currentSidebarScrollHandler = null;
    }
    (function() {
      var sidebar = document.getElementById('sidebar');
      var toggle = document.getElementById('sidebar-toggle');
      var closeBtn = document.getElementById('sidebar-close');
      var backdrop = document.getElementById('sidebar-backdrop');
      if (!sidebar) return;

      function openSidebar() { sidebar.classList.add('open'); if (backdrop) backdrop.classList.add('visible'); }
      function closeSidebar() { sidebar.classList.remove('open'); if (backdrop) backdrop.classList.remove('visible'); }
      if (toggle) toggle.onclick = openSidebar;
      if (closeBtn) closeBtn.onclick = closeSidebar;
      if (backdrop) backdrop.onclick = closeSidebar;

      // Active link tracking on scroll
      var links = sidebar.querySelectorAll('a[href^="#"]');
      var sidebarSections = [];
      links.forEach(function(a) {
        var id = a.getAttribute('href').slice(1);
        var el = document.getElementById(id);
        if (el) sidebarSections.push({ el: el, a: a });
      });
      function updateSidebarActive() {
        var scrollY = window.scrollY + 120;
        var current = sidebarSections[0];
        for (var i = 0; i < sidebarSections.length; i++) {
          if (sidebarSections[i].el.offsetTop <= scrollY) current = sidebarSections[i];
        }
        links.forEach(function(a) { a.classList.remove('active'); });
        if (current) current.a.classList.add('active');
      }
      currentSidebarScrollHandler = updateSidebarActive;
      window.addEventListener('scroll', updateSidebarActive);
      updateSidebarActive();

      // Sidebar link click: scroll to target + close on mobile
      links.forEach(function(a) {
        a.addEventListener('click', function(e) {
          e.preventDefault();
          var targetId = this.getAttribute('href').slice(1);
          var target = document.getElementById(targetId);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            // Update URL hash without triggering another scroll
            history.replaceState(null, '', '#' + targetId);
          }
          if (window.innerWidth <= 1100) closeSidebar();
        });
      });
    })();

    /* -- Flow Steppers: build timeline + initialize state -- */
    document.querySelectorAll('.flow-stepper, .data-flow').forEach(function(stepper) {
      if (stepper.dataset.flowInit) return;
      stepper.dataset.flowInit = '1';

      var steps = stepper.querySelectorAll('.flow-step');
      if (!steps.length) return;

      var current = parseInt(stepper.getAttribute('data-current') || '0', 10);

      // Build horizontal timeline if not already built
      if (!stepper.querySelector('.flow-timeline')) {
        var timeline = document.createElement('div');
        timeline.className = 'flow-timeline';
        steps.forEach(function(step, i) {
          if (i > 0) {
            var line = document.createElement('div');
            line.className = 'flow-timeline-line' + (i <= current ? ' completed' : '');
            timeline.appendChild(line);
          }
          var node = document.createElement('div');
          node.className = 'flow-timeline-node';
          node.textContent = i + 1;
          node.dataset.step = i;
          if (i < current) node.classList.add('completed');
          if (i === current) node.classList.add('active');
          // Click to jump to step
          node.addEventListener('click', function() {
            goToStep(stepper, parseInt(this.dataset.step));
          });
          timeline.appendChild(node);
        });
        stepper.insertBefore(timeline, stepper.firstChild);
      }

      function goToStep(s, idx) {
        var allSteps = s.querySelectorAll('.flow-step');
        var nodes = s.querySelectorAll('.flow-timeline-node');
        var lines = s.querySelectorAll('.flow-timeline-line');
        var prev = s.querySelector('.flow-prev');
        var next = s.querySelector('.flow-next');
        var prog = s.querySelector('.flow-progress');

        s.setAttribute('data-current', idx);
        allSteps.forEach(function(st, j) { st.classList.toggle('active', j === idx); });
        nodes.forEach(function(n, j) {
          n.classList.remove('active', 'completed');
          if (j < idx) n.classList.add('completed');
          if (j === idx) n.classList.add('active');
        });
        lines.forEach(function(l, j) { l.classList.toggle('completed', j < idx); });
        if (prog) prog.textContent = 'Step ' + (idx + 1) + ' of ' + allSteps.length;
        if (prev) prev.disabled = (idx === 0);
        if (next) next.disabled = (idx === allSteps.length - 1);
      }

      // Wire up prev/next buttons
      var prevBtn = stepper.querySelector('.flow-prev');
      var nextBtn = stepper.querySelector('.flow-next');
      if (prevBtn) prevBtn.addEventListener('click', function() {
        var cur = parseInt(stepper.getAttribute('data-current'));
        if (cur > 0) goToStep(stepper, cur - 1);
      });
      if (nextBtn) nextBtn.addEventListener('click', function() {
        var cur = parseInt(stepper.getAttribute('data-current'));
        var max = stepper.querySelectorAll('.flow-step').length - 1;
        if (cur < max) goToStep(stepper, cur + 1);
      });

      goToStep(stepper, current);
    });

    /* -- Multi-File Viewers: ensure first tab is active -- */
    document.querySelectorAll('.multi-file').forEach(function(viewer) {
      // Skip if already has an active tab
      if (viewer.querySelector('.multi-file-tab.active')) return;
      var firstTab = viewer.querySelector('.multi-file-tab');
      if (firstTab) {
        firstTab.classList.add('active');
        var fileId = firstTab.getAttribute('data-file');
        if (fileId) {
          var panel = viewer.querySelector('.multi-file-panel[data-file="' + fileId + '"]')
                    || document.getElementById(fileId);
          if (panel) panel.classList.add('active');
        }
      }
    });

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
    // Reset popup state in case user navigates while a popup is open
    document.querySelectorAll('.popup-overlay.active').forEach(function(o) {
      o.classList.remove('active');
    });
    document.body.style.overflow = '';

    // Title
    document.title = doc.title;

    // Body attributes
    var newBody = doc.querySelector('body');
    if (newBody) {
      document.body.setAttribute('data-accent', newBody.getAttribute('data-accent') || '');
      document.body.className = newBody.className;
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

    // Popup overlays (live outside <main>, between main and footer)
    document.querySelectorAll('.popup-overlay').forEach(function(el) { el.remove(); });
    var newPopups = doc.querySelectorAll('.popup-overlay');
    var insertRef = document.querySelector('footer') || null;
    newPopups.forEach(function(popup) {
      document.body.insertBefore(document.adoptNode(popup), insertRef);
    });

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
    var newFooter = doc.querySelector('footer');
    var oldFooter = document.querySelector('footer');
    if (newFooter && oldFooter) {
      oldFooter.innerHTML = newFooter.innerHTML;
    }

    // Remove page-specific floating widgets (e.g. Study Next on hub)
    document.querySelectorAll('.study-float').forEach(function(el) { el.remove(); });

    // Execute inline <script> blocks from new page body (for page-specific widgets)
    var newBodyScripts = doc.querySelectorAll('body > script:not([src])');
    newBodyScripts.forEach(function(s) {
      var script = document.createElement('script');
      script.textContent = s.textContent;
      document.body.appendChild(script);
    });

    // Inject inline <style> blocks from new page <head> (page-specific CSS)
    var newHeadStyles = doc.querySelectorAll('head > style');
    newHeadStyles.forEach(function(s) {
      var id = 'spa-page-style';
      var old = document.getElementById(id);
      if (old) old.remove();
      var style = document.createElement('style');
      style.id = id;
      style.textContent = s.textContent;
      document.head.appendChild(style);
    });

    // Load missing <head> assets (scripts + stylesheets) from new page
    var headAssets = loadMissingHeadAssets(doc);

    // History
    if (pushState) {
      history.pushState({ path: href }, '', href);
    }

    // Scroll to top, fade in, re-init (after assets load)
    window.scrollTo(0, 0);
    headAssets.then(function() {
      var m = document.querySelector('main');
      var h = document.querySelector('.hero');
      // Ensure new content starts hidden + offset, force reflow, then animate in
      if (m) { m.style.opacity = '0'; m.style.transform = 'translateY(16px)'; }
      if (h) { h.style.opacity = '0'; h.style.transform = 'translateY(16px)'; }
      // Force browser to register the hidden state before transitioning
      void document.body.offsetHeight;
      requestAnimationFrame(function() {
        if (m) { m.style.opacity = '1'; m.style.transform = ''; }
        if (h) { h.style.opacity = '1'; h.style.transform = ''; }
      });
      // Reset enhance.js guard so it re-initializes for new page content
      window.__sgEnhanceLoaded = false;
      // Remove stale enhance.js elements (TOC, back-to-top, bookmark panel, progress bar)
      document.querySelectorAll('.sg-toc, .sg-back-to-top, .sg-bookmarks-toggle, .sg-bookmarks-panel, .sg-progress-bar, .sg-skip-link').forEach(function(el) { el.remove(); });
      reinit();
    });
  }

  function navigateTo(href, pushState) {
    if (pushState === undefined) pushState = true;

    // Show loading bar
    var loader = document.createElement('div');
    loader.className = 'spa-loader';
    document.body.appendChild(loader);
    requestAnimationFrame(function() {
      requestAnimationFrame(function() { loader.style.width = '70%'; });
    });

    // Fade out + slide down current content
    var main = document.querySelector('main');
    var hero = document.querySelector('.hero');
    if (main) { main.style.opacity = '0'; main.style.transform = 'translateY(12px)'; }
    if (hero) { hero.style.opacity = '0'; hero.style.transform = 'translateY(12px)'; }

    // Start fetch immediately (runs in parallel with fade-out)
    var fetchPromise = fetch(href)
      .then(function(res) {
        if (!res.ok) throw new Error(res.status);
        return res.text();
      });

    // Wait for BOTH fade-out (250ms) AND fetch to complete
    var fadePromise = new Promise(function(resolve) { setTimeout(resolve, 280); });

    Promise.all([fetchPromise, fadePromise])
      .then(function(results) {
        // Complete the loader bar
        loader.style.width = '100%';
        setTimeout(function() {
          loader.style.opacity = '0';
          setTimeout(function() { if (loader.parentNode) loader.remove(); }, 200);
        }, 150);
        var html = results[0];
        var doc = new DOMParser().parseFromString(html, 'text/html');
        swapPage(doc, href, pushState);
      })
      .catch(function() {
        if (loader.parentNode) loader.remove();
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

  /* Re-init after custom elements transform (containers use single rAF, need extra frame margin) */
  requestAnimationFrame(function() { requestAnimationFrame(function() { requestAnimationFrame(function() {
    reinit();
  }); }); });

  /* -- Wheel intercept removed: macos-body uses overflow:auto natively -- */

  /* ==========================================================
   *  SECTION E — INTERACTIVE COMPONENTS
   *  Event delegation for new CSS components (flow stepper,
   *  knowledge check, annotated diagram, multi-file viewer,
   *  what-if card, formula float, rich tooltips, data-flow).
   * ========================================================== */

  /* ----------------------------------------------------------
   *  E1. Flow Stepper — handled by reinit (timeline + prev/next)
   *      Duplicate delegated handler removed to prevent double-fire.
   * -------------------------------------------------------- */

  /* ----------------------------------------------------------
   *  E2. Knowledge Check — single-select quiz with explanation
   *      Clicking an option reveals explanation, marks correct/
   *      incorrect, and disables further selections.
   * -------------------------------------------------------- */
  document.addEventListener('click', function(e) {
    if (!e.target || typeof e.target.closest !== 'function') return;
    var option = e.target.closest('.kc-option');
    if (!option) return;
    var check = option.closest('.knowledge-check');
    if (!check) return;

    // Already answered — ignore further clicks
    if (check.classList.contains('kc-answered')) return;

    // Mark as answered to prevent re-selection
    check.classList.add('kc-answered');

    // Determine if correct (option has data-correct="true")
    var isCorrect = option.getAttribute('data-correct') === 'true';
    option.classList.add(isCorrect ? 'kc-option--correct' : 'kc-option--incorrect');

    // If user picked wrong, also highlight the correct one
    if (!isCorrect) {
      check.querySelectorAll('.kc-option[data-correct="true"]').forEach(function(opt) {
        opt.classList.add('kc-option--correct');
      });
    }

    // Disable all radio inputs within this check
    check.querySelectorAll('input[type="radio"]').forEach(function(radio) {
      radio.disabled = true;
    });

    // Reveal explanation
    var explanation = check.querySelector('.kc-explanation');
    if (explanation) {
      explanation.classList.add('kc-visible');
    }
  });

  /* ----------------------------------------------------------
   *  E3. Annotated Diagram — click markers to show panels
   *      Only one panel open at a time. Active marker gets
   *      .active class for highlight styling.
   * -------------------------------------------------------- */
  document.addEventListener('click', function(e) {
    var marker = e.target.closest('.annotation-marker');
    if (!marker) return;
    var diagram = marker.closest('.annotated-diagram');
    if (!diagram) return;

    var targetId = marker.getAttribute('data-annotation');
    var wasActive = marker.classList.contains('active');

    // Close all markers and panels in this diagram
    diagram.querySelectorAll('.annotation-marker').forEach(function(m) {
      m.classList.remove('active');
    });
    diagram.querySelectorAll('.annotation-panel').forEach(function(p) {
      p.classList.remove('active');
    });

    // If clicking the already-active marker, just close (toggle off)
    if (wasActive) return;

    // Open the clicked marker's panel
    marker.classList.add('active');
    if (targetId) {
      var panel = diagram.querySelector('.annotation-panel[data-annotation="' + targetId + '"]')
                || document.getElementById(targetId);
      if (panel) panel.classList.add('active');
    }
  });

  /* ----------------------------------------------------------
   *  E4. Multi-File Viewer — tab-like file switcher
   *      Uses data-file attribute to match tabs to panels.
   * -------------------------------------------------------- */
  document.addEventListener('click', function(e) {
    var tab = e.target.closest('.multi-file-tab');
    if (!tab) return;
    var viewer = tab.closest('.multi-file');
    if (!viewer) return;

    var fileId = tab.getAttribute('data-file');
    if (!fileId) return;

    // Deactivate all tabs and panels
    viewer.querySelectorAll('.multi-file-tab').forEach(function(t) {
      t.classList.remove('active');
    });
    viewer.querySelectorAll('.multi-file-panel').forEach(function(p) {
      p.classList.remove('active');
    });

    // Activate clicked tab and matching panel
    tab.classList.add('active');
    var panel = viewer.querySelector('.multi-file-panel[data-file="' + fileId + '"]')
              || document.getElementById(fileId);
    if (panel) panel.classList.add('active');
  });

  /* ----------------------------------------------------------
   *  E5. What-If Card — toggle open/closed with chevron rotation
   * -------------------------------------------------------- */
  document.addEventListener('click', function(e) {
    var trigger = e.target.closest('.whatif-trigger');
    if (!trigger) return;
    var card = trigger.closest('.whatif-card');
    if (!card) return;

    card.classList.toggle('open');
  });

  /* ----------------------------------------------------------
   *  E6. Formula Float — toggle floating panel visibility
   *      Collapsed by default; button shows/hides.
   * -------------------------------------------------------- */
  document.addEventListener('click', function(e) {
    var toggle = e.target.closest('.formula-float-toggle');
    if (!toggle) return;
    var panel = toggle.closest('.formula-float');
    if (!panel) return;

    panel.classList.toggle('open');
  });

  /* ----------------------------------------------------------
   *  E7. Rich Tooltips — convert to tooltip-trigger system
   *      on init so they use the existing smart positioning.
   * -------------------------------------------------------- */
  function initRichTooltips() {
    document.querySelectorAll('.tooltip-rich').forEach(function(el) {
      if (el.dataset.richInit) return;
      el.dataset.richInit = 'true';
      // Add tooltip-trigger class so existing positioning JS handles it
      el.classList.add('tooltip-trigger');
      // Convert .tooltip-rich-content to .tooltip-content
      var rich = el.querySelector('.tooltip-rich-content');
      if (rich) {
        rich.classList.add('tooltip-content');
      }
    });
  }

  /* ----------------------------------------------------------
   *  E8. Data Flow Stepper controls
   *      Wires up .flow-prev / .flow-next buttons inside any
   *      data-flow stepper variant. Updates .flow-progress and
   *      dot indicators. (Shares logic with E1 — E1 handler
   *      covers .flow-stepper containers; this handles any
   *      standalone data-flow wrapper that doesn't use
   *      .flow-stepper class.)
   * -------------------------------------------------------- */
  /* -- Data-flow stepper: handled by reinit (same as flow-stepper) -- */

}); /* end DOMContentLoaded */

/* ==========================================================
 *  CUSTOM ELEMENTS — <sg-*> tags
 *  Thin translation layer: reads attrs/children, builds
 *  the existing div-based HTML, inserts it, existing CSS
 *  and JS init functions handle the rest.
 * ========================================================== */
(function() {
  function esc(s) { return s ? s.replace(/</g,'&lt;').replace(/>/g,'&gt;') : ''; }

  /* 1. <sg-card title="..." icon="..." open> content </sg-card> — IN-PLACE DOM manipulation */
  customElements.define('sg-card', class extends HTMLElement {
    connectedCallback() {
      var el = this;
      requestAnimationFrame(function() {
        var t = el.getAttribute('title') || '';
        var icon = el.getAttribute('icon') || '';
        var open = el.hasAttribute('open') ? ' open' : '';
        var iconHtml = icon ? '<i class="' + icon + '"></i> ' : '';
        var wrapper = document.createElement('div');
        wrapper.className = 'card' + open + ' visible';
        var h3 = document.createElement('h3');
        h3.className = 'card-title';
        h3.innerHTML = iconHtml + t;
        var body = document.createElement('div');
        body.className = 'card-body';
        while (el.firstChild) body.appendChild(el.firstChild);
        wrapper.appendChild(h3);
        wrapper.appendChild(body);
        el.replaceWith(wrapper);
      });
    }
  });

  /* 2. <sg-collapse title="..." icon="..."> content </sg-collapse> — IN-PLACE DOM manipulation */
  customElements.define('sg-collapse', class extends HTMLElement {
    connectedCallback() {
      var el = this;
      requestAnimationFrame(function() {
        var t = el.getAttribute('title') || '';
        var icon = el.getAttribute('icon') || '';
        var iconHtml = icon ? ' <i class="' + icon + '"></i>' : '';
        var wrapper = document.createElement('div');
        wrapper.className = 'collapsible';
        var header = document.createElement('div');
        header.className = 'collapsible-header';
        header.setAttribute('role', 'button');
        header.setAttribute('tabindex', '0');
        header.setAttribute('aria-expanded', 'false');
        header.innerHTML = '<span><i class="fas fa-chevron-right"></i>' + iconHtml + ' ' + t + '</span>';
        var content = document.createElement('div');
        content.className = 'collapsible-content';
        var bodyDiv = document.createElement('div');
        bodyDiv.className = 'collapsible-body';
        while (el.firstChild) bodyDiv.appendChild(el.firstChild);
        content.appendChild(bodyDiv);
        wrapper.appendChild(header);
        wrapper.appendChild(content);
        el.replaceWith(wrapper);
      });
    }
  });

  /* 3. <sg-tabs> <sg-tab title="..." icon="..."> content </sg-tab> ... </sg-tabs> — IN-PLACE DOM manipulation */
  customElements.define('sg-tab', class extends HTMLElement {
    connectedCallback() {} // handled by sg-tabs
  });
  customElements.define('sg-tabs', class extends HTMLElement {
    connectedCallback() {
      var el = this;
      requestAnimationFrame(function() {
        var tabs = Array.from(el.querySelectorAll(':scope > sg-tab'));
        var wrapper = document.createElement('div');
        wrapper.className = 'tab-container';
        var headerDiv = document.createElement('div');
        headerDiv.className = 'tab-header';
        headerDiv.setAttribute('role', 'tablist');
        wrapper.appendChild(headerDiv);
        tabs.forEach(function(tab, i) {
          var id = 'sgt-' + Math.random().toString(36).slice(2, 8);
          var title = tab.getAttribute('title') || 'Tab ' + (i + 1);
          var iconAttr = tab.getAttribute('icon');
          var iconHtml = iconAttr ? '<i class="' + iconAttr + '"></i> ' : '';
          var active = i === 0;
          var btn = document.createElement('button');
          btn.className = 'tab-btn' + (active ? ' active' : '');
          btn.setAttribute('data-tab', id);
          btn.setAttribute('role', 'tab');
          btn.setAttribute('aria-selected', String(active));
          btn.innerHTML = iconHtml + title;
          headerDiv.appendChild(btn);
          var panel = document.createElement('div');
          panel.className = 'tab-panel' + (active ? ' active' : '');
          panel.id = id;
          panel.setAttribute('role', 'tabpanel');
          while (tab.firstChild) panel.appendChild(tab.firstChild);
          wrapper.appendChild(panel);
        });
        el.replaceWith(wrapper);
      });
    }
  });

  /* 4. <sg-callout type="danger|success|info|warning|purple" title="..."> text </sg-callout> */
  customElements.define('sg-callout', class extends HTMLElement {
    connectedCallback() {
      var type = this.getAttribute('type') || 'info';
      var title = this.getAttribute('title') || '';
      var body = this.innerHTML;
      var typeMap = {
        danger: { cls: 'callout-danger', icon: '' },
        success: { cls: 'callout-success', icon: '' },
        info: { cls: 'callout-info', icon: '' },
        warning: { cls: 'callout-warning', icon: '' },
        purple: { cls: 'callout-purple', icon: '' },
        trap: { cls: 'callout-danger', icon: '<i class="fas fa-skull-crossbones"></i> ', defaultTitle: 'Common Trap' },
        insight: { cls: 'callout-insight', icon: '', defaultTitle: 'Key Insight' },
        tip: { cls: 'callout-success', icon: '<i class="fas fa-lightbulb"></i> ', defaultTitle: 'Interview Tip' },
        takeaway: { cls: 'callout-info', icon: '<i class="fas fa-bookmark"></i> ', defaultTitle: 'Key Takeaway' },
        rule: { cls: 'callout-warning', icon: '<i class="fas fa-gavel"></i> ', defaultTitle: 'Rule' },
        concept: { cls: 'callout-purple', icon: '<i class="fas fa-atom"></i> ', defaultTitle: 'Concept' }
      };
      var cfg = typeMap[type] || typeMap.info;
      var displayTitle = title || cfg.defaultTitle || '';
      var titleHtml = displayTitle ? '<strong>' + (cfg.icon || '') + displayTitle + ':</strong> ' : '';
      this.outerHTML = '<div class="' + cfg.cls + '">' + titleHtml + body + '</div>';
    }
  });

  /* 5. <sg-think hint="..."> question </sg-think> */
  customElements.define('sg-think', class extends HTMLElement {
    connectedCallback() {
      var hint = this.getAttribute('hint') || '';
      var body = this.innerHTML;
      var hintHtml = hint ? '<div class="think-hint">Hint: ' + hint + '</div>' : '';
      this.outerHTML = '<div class="think-first-box"><div class="think-label">Think First</div><p>' + body + '</p>' + hintHtml + '</div>';
    }
  });

  /* 6. <sg-math label="..." result="..."> lines </sg-math> */
  customElements.define('sg-math', class extends HTMLElement {
    connectedCallback() {
      var label = this.getAttribute('label') || 'Calculation';
      var result = this.getAttribute('result') || '';
      var body = this.innerHTML;
      var resultHtml = result ? '<div class="math-result">' + result + '</div>' : '';
      this.outerHTML = '<div class="math-block"><div class="math-label">' + label + '</div>' + body + resultHtml + '</div>';
    }
  });

  /* 7. <sg-code file="..." terminal> code </sg-code> */
  customElements.define('sg-code', class extends HTMLElement {
    connectedCallback() {
      var file = this.getAttribute('file') || '';
      var isTerminal = this.hasAttribute('terminal');
      var code = this.textContent;
      this.outerHTML = '<pre data-file="' + esc(file) + '"' + (isTerminal ? ' data-terminal' : '') + '>' + esc(code) + '</pre>';
    }
  });

  /* 8. <sg-exercise title="..." difficulty="easy|medium|hard"> content <sg-hint>...</sg-hint> </sg-exercise> */
  customElements.define('sg-hint', class extends HTMLElement { connectedCallback() {} });
  customElements.define('sg-exercise', class extends HTMLElement {
    connectedCallback() {
      var el = this;
      requestAnimationFrame(function() {
        var title = el.getAttribute('title') || '';
        var diff = el.getAttribute('difficulty') || 'medium';
        var hint = el.querySelector('sg-hint');
        var hintContent = null;
        if (hint) {
          hintContent = document.createDocumentFragment();
          while (hint.firstChild) hintContent.appendChild(hint.firstChild);
          hint.remove();
        }
        var wrapper = document.createElement('div');
        wrapper.className = 'exercise-card visible';
        var titleDiv = document.createElement('div');
        titleDiv.className = 'exercise-card-title';
        titleDiv.innerHTML = '<span class="difficulty-tag difficulty-' + diff + '">' + diff.charAt(0).toUpperCase() + diff.slice(1) + '</span> ' + title;
        wrapper.appendChild(titleDiv);
        while (el.firstChild) wrapper.appendChild(el.firstChild);
        if (hintContent) {
          var collapsible = document.createElement('div');
          collapsible.className = 'collapsible';
          collapsible.innerHTML = '<div class="collapsible-header" role="button" tabindex="0" aria-expanded="false"><span><i class="fas fa-chevron-right"></i> Hint</span></div>';
          var cc = document.createElement('div');
          cc.className = 'collapsible-content';
          var cb = document.createElement('div');
          cb.className = 'collapsible-body';
          cb.appendChild(hintContent);
          cc.appendChild(cb);
          collapsible.appendChild(cc);
          wrapper.appendChild(collapsible);
        }
        el.replaceWith(wrapper);
      });
    }
  });

  /* 9. <sg-cheat color="blue|green|amber" title="..."> text </sg-cheat> */
  customElements.define('sg-cheat', class extends HTMLElement {
    connectedCallback() {
      var color = this.getAttribute('color') || 'blue';
      var title = this.getAttribute('title') || '';
      var body = this.innerHTML.trim();
      // Convert <br> separated lines into a proper list
      var lines = body.split(/<br\s*\/?>/i).map(function(l) { return l.trim(); }).filter(Boolean);
      var listHtml = '<ul class="cheat-list">' + lines.map(function(l) { return '<li>' + l + '</li>'; }).join('') + '</ul>';
      this.outerHTML = '<div class="cheat-card cheat-' + color + ' visible"><strong>' + title + '</strong>' + listHtml + '</div>';
    }
  });

  /* 13. <sg-math-steps> <sg-step op="..." result="..." why="..."></sg-step> </sg-math-steps> */
  customElements.define('sg-step', class extends HTMLElement { connectedCallback() {} });
  customElements.define('sg-math-steps', class extends HTMLElement {
    connectedCallback() {
      var steps = this.querySelectorAll('sg-step');
      var html = '<div class="math-stepper">';
      steps.forEach(function(s, i) {
        html += '<div class="math-step"><div class="math-step-number" data-num="' + (i + 1) + '"></div><div class="math-step-content">' +
          '<div class="math-step-operation">' + (s.getAttribute('op') || '') + '</div>' +
          '<div class="math-step-result">' + (s.getAttribute('result') || '') + '</div>' +
          (s.getAttribute('why') ? '<div class="math-step-why">' + s.getAttribute('why') + '</div>' : '') +
          '</div></div>';
      });
      html += '</div>';
      this.outerHTML = html;
    }
  });

  /* 14. <sg-tradeoff left="..." right="..." snaps='[...]'> </sg-tradeoff> */
  customElements.define('sg-tradeoff', class extends HTMLElement {
    connectedCallback() {
      var left = this.getAttribute('left') || '';
      var right = this.getAttribute('right') || '';
      var snaps = this.getAttribute('snaps') || '[]';
      this.outerHTML = '<div class="tradeoff-slider" data-snaps=\'' + snaps + '\'>' +
        '<div class="tradeoff-left">' + left + '</div>' +
        '<div class="tradeoff-track"><div class="tradeoff-handle"></div><div class="tradeoff-snap-dots"></div></div>' +
        '<div class="tradeoff-right">' + right + '</div>' +
        '<div class="tradeoff-info"><div class="tradeoff-info-name"></div><div class="tradeoff-info-desc"></div></div></div>';
    }
  });

  /* 15. <sg-arch-diff before="..." after="..."> </sg-arch-diff> */
  customElements.define('sg-arch-diff', class extends HTMLElement {
    connectedCallback() {
      var before = this.getAttribute('before') || '';
      var after = this.getAttribute('after') || '';
      this.outerHTML = '<div class="arch-diff" data-before="' + esc(before) + '" data-after="' + esc(after) + '"></div>';
    }
  });

  /* 16. <sg-evolution steps='[...]'> </sg-evolution> */
  customElements.define('sg-evolution', class extends HTMLElement {
    connectedCallback() {
      this.outerHTML = '<div class="evolution-stepper" data-steps=\'' + (this.getAttribute('steps') || '[]') + '\'></div>';
    }
  });

  /* 17. <sg-sequence participants="..." > <sg-msg from="" to="" label="" time=""></sg-msg> </sg-sequence> */
  customElements.define('sg-msg', class extends HTMLElement { connectedCallback() {} });
  customElements.define('sg-sequence', class extends HTMLElement {
    connectedCallback() {
      var p = this.getAttribute('participants') || '';
      var msgs = this.querySelectorAll('sg-msg');
      var html = '<div class="sequence-diagram" data-participants="' + p + '"><div class="seq-flow">';
      msgs.forEach(function(m) {
        var cls = m.hasAttribute('resp') ? ' resp' : '';
        html += '<div class="seq-msg' + cls + '" data-from="' + m.getAttribute('from') + '" data-to="' + m.getAttribute('to') + '" data-label="' + esc(m.getAttribute('label') || '') + '" data-time="' + (m.getAttribute('time') || '') + '"></div>';
      });
      html += '</div></div>';
      this.outerHTML = html;
    }
  });

  /* 18. <sg-storage rows='[...]'> </sg-storage> */
  customElements.define('sg-storage', class extends HTMLElement {
    connectedCallback() {
      this.outerHTML = '<div class="storage-viz" data-rows=\'' + (this.getAttribute('rows') || '[]') + '\'></div>';
    }
  });

  /* 19. <sg-latency entries='[...]'> </sg-latency> */
  customElements.define('sg-latency', class extends HTMLElement {
    connectedCallback() {
      this.outerHTML = '<div class="latency-ruler" data-entries=\'' + (this.getAttribute('entries') || '[]') + '\'></div>';
    }
  });

  /* 20. <sg-flow> <sg-flow-step title="..."> content </sg-flow-step> </sg-flow> */
  customElements.define('sg-flow-step', class extends HTMLElement { connectedCallback() {} });
  customElements.define('sg-flow', class extends HTMLElement {
    connectedCallback() {
      var steps = this.querySelectorAll('sg-flow-step');
      var html = '<div class="flow-stepper" data-current="0">';
      steps.forEach(function(s, i) {
        var active = i === 0 ? ' active' : '';
        html += '<div class="flow-step' + active + '"><div class="flow-step-header"><div class="flow-step-num">' + (i + 1) + '</div><div class="flow-step-title">' + (s.getAttribute('title') || '') + '</div></div><div class="flow-step-body">' + s.innerHTML + '</div></div>';
      });
      html += '<div class="flow-stepper-controls"><button class="flow-prev" disabled>&larr; Previous</button><span class="flow-progress">Step 1 of ' + steps.length + '</span><button class="flow-next">Next &rarr;</button></div></div>';
      this.outerHTML = html;
    }
  });

  /* 21. <sg-packet title="..." fields='[...]'> </sg-packet> */
  customElements.define('sg-packet', class extends HTMLElement {
    connectedCallback() {
      this.outerHTML = '<div class="packet-viewer" data-title="' + esc(this.getAttribute('title') || 'TCP Segment') + '" data-fields=\'' + (this.getAttribute('fields') || '[]') + '\'></div>';
    }
  });

  /* 22. <sg-schema tables='[...]'> </sg-schema> */
  customElements.define('sg-schema', class extends HTMLElement {
    connectedCallback() {
      this.outerHTML = '<div class="schema-viewer" data-tables=\'' + (this.getAttribute('tables') || '[]') + '\'></div>';
    }
  });

  /* 24. <sg-logs entries='[...]'> </sg-logs> */
  customElements.define('sg-logs', class extends HTMLElement {
    connectedCallback() {
      this.outerHTML = '<div class="log-viewer" data-entries=\'' + (this.getAttribute('entries') || '[]') + '\'></div>';
    }
  });

  /* 25. <sg-error type="..." code="..." message="..." detail="..."> </sg-error> */
  customElements.define('sg-error', class extends HTMLElement {
    connectedCallback() {
      this.outerHTML = '<div class="error-block" data-type="' + (this.getAttribute('type') || 'postgres') + '" data-header="' + esc(this.getAttribute('header') || '') + '" data-code="' + esc(this.getAttribute('code') || '') + '" data-message="' + esc(this.getAttribute('message') || '') + '" data-detail="' + esc(this.getAttribute('detail') || '') + '"></div>';
    }
  });

  /* 26. <sg-query-plan plan='{...}'> </sg-query-plan> */
  customElements.define('sg-query-plan', class extends HTMLElement {
    connectedCallback() {
      this.outerHTML = '<div class="query-plan" data-plan=\'' + (this.getAttribute('plan') || '{}') + '\'></div>';
    }
  });

  /* 27. <sg-dashboard metrics='[...]'> </sg-dashboard> */
  customElements.define('sg-dashboard', class extends HTMLElement {
    connectedCallback() {
      this.outerHTML = '<div class="dashboard" data-metrics=\'' + (this.getAttribute('metrics') || '[]') + '\'></div>';
    }
  });

  /* 28. <sg-chat chat='{...}'> </sg-chat> */
  customElements.define('sg-chat', class extends HTMLElement {
    connectedCallback() {
      this.outerHTML = '<div class="interview-chat" data-chat=\'' + (this.getAttribute('chat') || '{}') + '\'></div>';
    }
  });

  /* 29. <sg-quiz question="..." options='[...]' explanation="..."> </sg-quiz> */
  customElements.define('sg-quiz', class extends HTMLElement {
    connectedCallback() {
      this.outerHTML = '<div class="knowledge-check" data-question="' + esc(this.getAttribute('question') || '') + '" data-options=\'' + (this.getAttribute('options') || '[]') + '\' data-explanation="' + esc(this.getAttribute('explanation') || '') + '"></div>';
    }
  });

  /* 31. <sg-scorecard data='{...}'> </sg-scorecard> */
  customElements.define('sg-scorecard', class extends HTMLElement {
    connectedCallback() {
      this.outerHTML = '<div class="scorecard" data-scorecard=\'' + (this.getAttribute('data') || '{}') + '\'></div>';
    }
  });

  /* 32. <sg-estimate title="..." tag="..."> <sg-input>, <sg-op>, <sg-eq>, <sg-result> children </sg-estimate> */
  customElements.define('sg-input', class extends HTMLElement { connectedCallback() {} });
  customElements.define('sg-op', class extends HTMLElement { connectedCallback() {} });
  customElements.define('sg-eq', class extends HTMLElement { connectedCallback() {} });
  customElements.define('sg-result', class extends HTMLElement { connectedCallback() {} });
  customElements.define('sg-estimate', class extends HTMLElement {
    connectedCallback() {
      var title = this.getAttribute('title') || 'Estimation';
      var tag = this.getAttribute('tag') || '';
      var html = '<div class="estimation-calc" data-title="' + esc(title) + '"' + (tag ? ' data-tag="' + esc(tag) + '"' : '') + '>';
      Array.from(this.children).forEach(function(child) {
        var tn = child.tagName.toLowerCase();
        if (tn === 'sg-input') html += '<div class="calc-input" data-label="' + esc(child.getAttribute('label') || '') + '" data-value="' + esc(child.getAttribute('value') || '') + '" data-note="' + esc(child.getAttribute('note') || '') + '"></div>';
        else if (tn === 'sg-op') html += '<div class="calc-op">' + child.textContent + '</div>';
        else if (tn === 'sg-eq') html += '<div class="calc-eq" data-label="' + esc(child.getAttribute('label') || '') + '" data-value="' + esc(child.getAttribute('value') || '') + '" data-note="' + esc(child.getAttribute('note') || '') + '"></div>';
        else if (tn === 'sg-result') html += '<div class="calc-result" data-label="' + esc(child.getAttribute('label') || '') + '" data-value="' + esc(child.getAttribute('value') || '') + '" data-formula="' + esc(child.getAttribute('formula') || '') + '"></div>';
      });
      html += '</div>';
      this.outerHTML = html;
    }
  });

  /* 33. <sg-proof title="..."> <sg-given>...</sg-given> <sg-then>...</sg-then> <sg-conclusion>...</sg-conclusion> </sg-proof> */
  customElements.define('sg-given', class extends HTMLElement { connectedCallback() {} });
  customElements.define('sg-then', class extends HTMLElement { connectedCallback() {} });
  customElements.define('sg-conclusion', class extends HTMLElement { connectedCallback() {} });
  customElements.define('sg-proof', class extends HTMLElement {
    connectedCallback() {
      var title = this.getAttribute('title') || '';
      var html = '<div class="proof-block"><div class="proof-title">' + title + '</div>';
      this.querySelectorAll('sg-given').forEach(function(g) { html += '<div class="proof-step"><span class="proof-given">Given:</span> ' + g.innerHTML + '</div>'; });
      this.querySelectorAll('sg-then').forEach(function(t) { html += '<div class="proof-step"><span class="proof-therefore">&there4;</span> ' + t.innerHTML + '</div>'; });
      var conc = this.querySelector('sg-conclusion');
      if (conc) html += '<div class="proof-conclusion">' + conc.innerHTML + '</div>';
      html += '</div>';
      this.outerHTML = html;
    }
  });

  /* 34. <sg-debug title="..." steps='[...]'> </sg-debug> */
  customElements.define('sg-debug', class extends HTMLElement {
    connectedCallback() {
      this.outerHTML = '<div class="debug-template" data-title="' + esc(this.getAttribute('title') || 'Debug Walkthrough') + '" data-steps=\'' + (this.getAttribute('steps') || '[]') + '\'></div>';
    }
  });

  /* 35. <sg-myth myth="..." truth="..."> </sg-myth> */
  customElements.define('sg-myth', class extends HTMLElement {
    connectedCallback() {
      var myth = this.getAttribute('myth') || '';
      var truth = this.getAttribute('truth') || '';
      this.outerHTML = '<div class="myth-buster"><div class="myth-buster-myth"><i class="fas fa-times-circle"></i> <strong>Myth:</strong> ' + myth + '</div><div class="myth-buster-truth"><i class="fas fa-check-circle"></i> <strong>Truth:</strong> ' + truth + '</div></div>';
    }
  });

  /* 36. <sg-whatif trigger="..."> <sg-consequence>...</sg-consequence> <sg-recovery>...</sg-recovery> </sg-whatif> */
  customElements.define('sg-consequence', class extends HTMLElement { connectedCallback() {} });
  customElements.define('sg-recovery', class extends HTMLElement { connectedCallback() {} });
  customElements.define('sg-whatif', class extends HTMLElement {
    connectedCallback() {
      var trigger = this.getAttribute('trigger') || '';
      var cons = this.querySelector('sg-consequence');
      var rec = this.querySelector('sg-recovery');
      this.outerHTML = '<div class="whatif-card"><div class="whatif-trigger"><i class="fas fa-bolt"></i> ' + trigger + '</div>' +
        (cons ? '<div class="whatif-consequence">' + cons.innerHTML + '</div>' : '') +
        (rec ? '<div class="whatif-recovery">' + rec.innerHTML + '</div>' : '') + '</div>';
    }
  });

  /* 37. <sg-company name="..." logo="..." stats="..." stack="..." lesson="..."> </sg-company> */
  customElements.define('sg-company', class extends HTMLElement {
    connectedCallback() {
      var name = this.getAttribute('name') || '';
      var logo = this.getAttribute('logo') || '';
      var stats = (this.getAttribute('stats') || '').split('|').map(function(s) { return '<span>' + s.trim() + '</span>'; }).join('');
      this.outerHTML = '<div class="company-card"><div class="company-card-logo">' + logo + '</div><div class="company-card-info">' +
        '<h4 class="company-card-name">' + name + '</h4>' +
        '<div class="company-card-stats">' + stats + '</div>' +
        '<div class="company-card-stack">' + (this.getAttribute('stack') || '') + '</div>' +
        '<div class="company-card-lesson">' + (this.getAttribute('lesson') || '') + '</div></div></div>';
    }
  });

  /* 38. <sg-trap title="..."> content </sg-trap> */
  customElements.define('sg-trap', class extends HTMLElement {
    connectedCallback() {
      var title = this.getAttribute('title') || 'Common Trap';
      var body = this.innerHTML;
      this.outerHTML = '<div class="callout-trap"><div class="callout-trap-header"><i class="fas fa-skull-crossbones"></i> ' + title + '</div>' + body + '</div>';
    }
  });

  /* 39. <sg-dep-graph graph='{...}'> </sg-dep-graph> */
  customElements.define('sg-dep-graph', class extends HTMLElement {
    connectedCallback() {
      this.outerHTML = '<div class="dep-graph" data-graph=\'' + (this.getAttribute('graph') || '{}') + '\'></div>';
    }
  });

  /* 40. <sg-diff file="..."> content with +/- lines </sg-diff> */
  customElements.define('sg-diff', class extends HTMLElement {
    connectedCallback() {
      var file = this.getAttribute('file') || '';
      var lines = this.textContent.split('\n');
      var html = '<div class="git-diff"><div class="diff-header">' + esc(file) + '</div>';
      lines.forEach(function(line) {
        if (!line.trim()) return;
        var cls = line.startsWith('+') ? 'diff-line--add' : line.startsWith('-') ? 'diff-line--remove' : 'diff-line--context';
        html += '<div class="diff-line ' + cls + '">' + esc(line) + '</div>';
      });
      html += '</div>';
      this.outerHTML = html;
    }
  });

  /* 41. <sg-multi> <sg-file name="..."> code </sg-file> </sg-multi> */
  customElements.define('sg-file', class extends HTMLElement { connectedCallback() {} });
  customElements.define('sg-multi', class extends HTMLElement {
    connectedCallback() {
      var files = this.querySelectorAll('sg-file');
      var html = '<div class="multi-file">';
      html += '<div class="multi-file-tabs">';
      files.forEach(function(f, i) {
        var name = f.getAttribute('name') || 'file' + i;
        var id = 'mf-' + Math.random().toString(36).slice(2, 8);
        f.dataset.mfId = id;
        html += '<button class="multi-file-tab' + (i === 0 ? ' active' : '') + '" data-file="' + id + '">' + esc(name) + '</button>';
      });
      html += '</div>';
      files.forEach(function(f, i) {
        html += '<div class="multi-file-panel' + (i === 0 ? ' active' : '') + '" data-file="' + f.dataset.mfId + '"><pre><code>' + esc(f.textContent) + '</code></pre></div>';
      });
      html += '</div>';
      this.outerHTML = html;
    }
  });

  /* 42. <sg-config title="..." file="..." params='[{name,old,new,why}]'> </sg-config> */
  customElements.define('sg-config', class extends HTMLElement {
    connectedCallback() {
      var title = this.getAttribute('title') || 'Config Diff';
      var file = this.getAttribute('file') || '';
      var params = JSON.parse(this.getAttribute('params') || '[]');
      var html = '<div class="config-diff">';
      html += '<div class="config-diff-header"><span><i class="fa-solid fa-sliders"></i> ' + title + '</span>' +
        (file ? '<span class="cd-file">' + file + '</span>' : '') + '</div>';
      params.forEach(function(p) {
        var same = p.old === p.new;
        html += '<div class="config-diff-row' + (same ? ' config-diff-row--same' : '') + '">' +
          '<div class="cd-param">' + p.name + '</div>' +
          '<div class="cd-old">' + p.old + '</div>' +
          '<div class="cd-arrow">→</div>' +
          '<div class="cd-new">' + p.new + (p.why ? '<span class="cd-why">' + p.why + '</span>' : '') + '</div>' +
          '</div>';
      });
      html += '</div>';
      this.outerHTML = html;
    }
  });

  /* 43. <sg-pipeline title="..." status="running" stages='[{name,status,time}]'> </sg-pipeline> */
  customElements.define('sg-pipeline', class extends HTMLElement {
    connectedCallback() {
      var title = this.getAttribute('title') || 'Deployment Pipeline';
      var overallStatus = this.getAttribute('status') || 'running';
      var stages = JSON.parse(this.getAttribute('stages') || '[]');
      var statusLabels = { running: 'In Progress', pass: 'Passed', fail: 'Failed' };
      var html = '<div class="pipeline">';
      html += '<div class="pipeline-header"><span><i class="fa-solid fa-code-branch"></i> ' + title + '</span>' +
        '<span class="pl-status pl-status--' + overallStatus + '">' + (statusLabels[overallStatus] || overallStatus) + '</span></div>';
      html += '<div class="pipeline-body">';
      stages.forEach(function(s, i) {
        if (i > 0) html += '<div class="pipeline-connector"></div>';
        var status = s.status || 'pending';
        var icon = status === 'pass' ? '<i class="fas fa-check"></i>' :
                   status === 'running' ? '<i class="fas fa-spinner fa-spin"></i>' :
                   status === 'fail' ? '<i class="fas fa-times"></i>' : '<i class="fas fa-clock" style="opacity:0.4"></i>';
        html += '<div class="pipeline-stage pipeline-stage--' + status + '">' +
          '<span>' + icon + ' ' + s.name + '</span>' +
          (s.time ? '<span class="pipeline-stage-time">' + s.time + '</span>' : '') +
          '</div>';
      });
      html += '</div></div>';
      this.outerHTML = html;
    }
  });

  /* 44. <sg-cache entries='[...]'> </sg-cache> */
  customElements.define('sg-cache', class extends HTMLElement {
    connectedCallback() {
      var entries = JSON.parse(this.getAttribute('entries') || '[]');
      var html = '<div class="cache-sim">';
      entries.forEach(function(e) {
        var cls = e.hit ? 'cache-sim-entry--hit' : 'cache-sim-entry--miss';
        html += '<div class="cache-sim-entry ' + cls + '"><span class="cache-key">' + esc(e.key) + '</span><span class="cache-result">' + (e.hit ? 'HIT' : 'MISS') + '</span><span class="cache-time">' + (e.time || '—') + '</span></div>';
      });
      html += '</div>';
      this.outerHTML = html;
    }
  });

  /* 45. <sg-rate-limit tokens="4" max="6" accepted="3" rejected="1"> </sg-rate-limit> */
  customElements.define('sg-rate-limit', class extends HTMLElement {
    connectedCallback() {
      var tokens = parseInt(this.getAttribute('tokens') || '4');
      var max = parseInt(this.getAttribute('max') || '6');
      var accepted = parseInt(this.getAttribute('accepted') || '3');
      var rejected = parseInt(this.getAttribute('rejected') || '1');
      var html = '<div class="rate-viz"><div class="rate-viz-bucket">';
      for (var i = 0; i < max; i++) {
        html += i < tokens ? '<div class="rate-viz-token rvt-full"></div>' : '<div class="rate-viz-token--empty rvt-full"></div>';
      }
      html += '</div><div class="rate-viz-label">Token bucket: ' + tokens + '/' + max + ' tokens remaining</div><div class="rate-viz-requests">';
      for (var a = 0; a < accepted; a++) html += '<div class="rate-viz-dot rate-viz-dot--accepted"></div>';
      for (var r = 0; r < rejected; r++) html += '<div class="rate-viz-dot rate-viz-dot--rejected"></div>';
      html += '</div><div class="rate-viz-label">Requests: ' + accepted + ' accepted, ' + rejected + ' rejected</div></div>';
      this.outerHTML = html;
    }
  });

  /* 46. <sg-circuit active="closed"> </sg-circuit> */
  customElements.define('sg-circuit', class extends HTMLElement {
    connectedCallback() {
      var active = this.getAttribute('active') || 'closed';
      var states = [
        { id: 'closed', label: 'Closed', arrow: '→ 5 failures →' },
        { id: 'open', label: 'Open', arrow: '→ timeout →' },
        { id: 'half', label: 'Half-Open', arrow: '' }
      ];
      var html = '<div class="circuit-state">';
      states.forEach(function(s, i) {
        var cls = 'circuit-node circuit-node--' + s.id + (s.id === active ? ' circuit-node--active' : '');
        html += '<div class="' + cls + '">' + s.label + '</div>';
        if (s.arrow) html += '<div class="circuit-arrow">' + s.arrow + '</div>';
      });
      html += '</div>';
      this.outerHTML = html;
    }
  });

  /* 47. <sg-mq producer="..." consumer="..." messages="4"> </sg-mq> */
  customElements.define('sg-mq', class extends HTMLElement {
    connectedCallback() {
      var producer = this.getAttribute('producer') || 'Producer';
      var consumer = this.getAttribute('consumer') || 'Consumer';
      var count = parseInt(this.getAttribute('messages') || '4');
      var html = '<div class="mq-viz"><div class="mq-viz-producer">' + producer + '</div><div class="mq-viz-arrow">&rarr;</div><div class="mq-viz-queue">';
      for (var i = 1; i <= count; i++) html += '<div class="mq-viz-msg">' + i + '</div>';
      html += '</div><div class="mq-viz-arrow">&rarr;</div><div class="mq-viz-consumer">' + consumer + '</div></div>';
      this.outerHTML = html;
    }
  });

  /* 48. <sg-shard-map shards='[...]'> </sg-shard-map> */
  customElements.define('sg-shard-map', class extends HTMLElement {
    connectedCallback() {
      var shards = JSON.parse(this.getAttribute('shards') || '[]');
      var html = '<div class="shard-map">';
      shards.forEach(function(s) {
        var cls = 'shard' + (s.hot ? ' shard--hot' : '');
        html += '<div class="' + cls + '"><span class="shard-id">' + s.name + '</span><span class="shard-size">' + s.rule + '</span><span class="shard-load">' + s.load + '</span></div>';
      });
      html += '</div>';
      this.outerHTML = html;
    }
  });

  /* 109. <sg-compare left-title="..." right-title="..." left-items="a|b|c" right-items="x|y|z"> */
  customElements.define('sg-compare', class extends HTMLElement {
    connectedCallback() {
      var lt = this.getAttribute('left-title') || 'A';
      var rt = this.getAttribute('right-title') || 'B';
      var li = (this.getAttribute('left-items') || '').split('|').filter(Boolean);
      var ri = (this.getAttribute('right-items') || '').split('|').filter(Boolean);
      var html = '<div class="comparison-grid">';
      html += '<div class="comparison-panel"><div class="comparison-header" style="padding:0.7rem 1.2rem;font-weight:700;font-size:0.85rem;border-bottom:1px solid var(--border-color)">' + lt + '</div><ul style="padding:0.8rem 1.2rem 0.8rem 2rem;margin:0;font-size:0.82rem;color:var(--text-secondary);line-height:1.7">';
      li.forEach(function(item) { html += '<li>' + item + '</li>'; });
      html += '</ul></div><div class="vs-badge">vs</div>';
      html += '<div class="comparison-panel"><div class="comparison-header" style="padding:0.7rem 1.2rem;font-weight:700;font-size:0.85rem;border-bottom:1px solid var(--border-color)">' + rt + '</div><ul style="padding:0.8rem 1.2rem 0.8rem 2rem;margin:0;font-size:0.82rem;color:var(--text-secondary);line-height:1.7">';
      ri.forEach(function(item) { html += '<li>' + item + '</li>'; });
      html += '</ul></div></div>';
      this.outerHTML = html;
    }
  });

  /* 110. <sg-when-use yes="a|b|c" no="x|y"> */
  customElements.define('sg-when-use', class extends HTMLElement {
    connectedCallback() {
      var yes = (this.getAttribute('yes') || '').split('|').filter(Boolean);
      var no = (this.getAttribute('no') || '').split('|').filter(Boolean);
      var html = '<div class="when-use-grid">';
      html += '<div class="when-section-label when-section-label--yes"><i class="fa-solid fa-check" style="margin-right:0.3rem"></i> Use when</div>';
      yes.forEach(function(item) {
        html += '<div class="when-item"><span class="when-icon-yes"><i class="fa-solid fa-check"></i></span> ' + item + '</div>';
      });
      html += '<div class="when-section-label when-section-label--no"><i class="fa-solid fa-xmark" style="margin-right:0.3rem"></i> Avoid when</div>';
      no.forEach(function(item) {
        html += '<div class="when-item"><span class="when-icon-no"><i class="fa-solid fa-xmark"></i></span> ' + item + '</div>';
      });
      html += '</div>';
      this.outerHTML = html;
    }
  });

  /* 111. <sg-related items='[{icon,title,desc,href}]'> */
  customElements.define('sg-related', class extends HTMLElement {
    connectedCallback() {
      var items = JSON.parse(this.getAttribute('items') || '[]');
      var html = '<div class="related-grid">';
      items.forEach(function(item) {
        html += '<a class="related-card" href="' + (item.href || '#') + '">' +
          '<div class="related-card-icon"><i class="' + item.icon + '"></i></div>' +
          '<div class="related-card-text"><h4>' + item.title + '</h4><p>' + item.desc + '</p></div></a>';
      });
      html += '</div>';
      this.outerHTML = html;
    }
  });

  /* 94. <sg-code-evo title="..." steps='[{label,why,code}]'> </sg-code-evo> */
  customElements.define('sg-code-evo', class extends HTMLElement {
    connectedCallback() {
      var title = this.getAttribute('title') || 'Code Evolution';
      var steps = JSON.parse(this.getAttribute('steps') || '[]');
      function esc(s) { return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

      var colors = ['#ef4444','#f59e0b','#eab308','#10b981','#3b82f6','#8b5cf6','#06b6d4','#ec4899'];
      var id = 'evo-' + Math.random().toString(36).slice(2, 8);
      var lineCounts = steps.map(function(s) { return s.code.trim().split('\n').length; });
      var firstLines = lineCounts[0];

      var html = '<div class="code-evo" id="' + id + '">';
      // Header
      html += '<div class="code-evo-header"><span><i class="fa-solid fa-timeline"></i> ' + title + '</span><span class="code-evo-versions">' + steps.length + ' versions</span></div>';

      // Segmented progress bar
      html += '<div class="code-evo-timeline">';
      steps.forEach(function(s, i) {
        var color = colors[i % colors.length];
        var cls = i === 0 ? 'evo-seg evo-current' : 'evo-seg evo-future';
        html += '<div class="' + cls + '" style="background:' + color + '" data-evo-idx="' + i + '" data-label="V' + (i + 1) + ' — ' + s.label + '"></div>';
      });
      html += '</div>';

      // Slides
      html += '<div class="code-evo-slides">';
      steps.forEach(function(s, i) {
        var lines = lineCounts[i];
        var color = colors[i % colors.length];
        var delta = '';
        if (i > 0) {
          var diff = lines - lineCounts[i - 1];
          if (diff < 0) delta = '<span class="code-evo-delta code-evo-delta--less">' + diff + ' lines</span>';
          else if (diff > 0) delta = '<span class="code-evo-delta code-evo-delta--more">+' + diff + ' lines</span>';
          else delta = '<span class="code-evo-delta code-evo-delta--same">same</span>';
        }

        html += '<div class="code-evo-step' + (i === 0 ? ' evo-active' : '') + '" data-evo-idx="' + i + '">';
        html += '<div class="code-evo-info"><div class="code-evo-info-left">' +
          '<span class="code-evo-label-num" style="background:' + color + '">' + (i + 1) + '</span>' +
          '<span class="code-evo-label-text" style="color:' + color + '">V' + (i + 1) + ' — ' + s.label + '</span>' +
          (s.why ? '<span class="code-evo-why">— ' + s.why + '</span>' : '') +
          '</div><div class="code-evo-info-right"><span class="code-evo-lines">' + lines + ' lines</span>' + delta + '</div></div>';
        html += '<div class="code-evo-code-wrap"><div class="code-evo-dots"><span class="ed-red"></span><span class="ed-yel"></span><span class="ed-grn"></span></div>' +
          '<div class="code-evo-code"><pre><code>' + esc(s.code.trim()) + '</code></pre></div></div>';
        html += '</div>';
      });
      html += '</div>';

      // Nav — player style with icons
      html += '<div class="code-evo-nav">' +
        '<button class="evo-nav-btn evo-prev" disabled><i class="fa-solid fa-chevron-left"></i></button>' +
        '<span class="evo-nav-progress">1 / ' + steps.length + '</span>' +
        '<button class="evo-nav-btn evo-next"><i class="fa-solid fa-chevron-right"></i></button></div>';
      html += '</div>';

      this.outerHTML = html;

      // Wire up
      requestAnimationFrame(function() {
        var el = document.getElementById(id);
        if (!el) return;
        var segs = el.querySelectorAll('.evo-seg');
        var slides = el.querySelectorAll('.code-evo-step');
        var prevBtn = el.querySelector('.evo-prev');
        var nextBtn = el.querySelector('.evo-next');
        var progress = el.querySelector('.evo-nav-progress');
        var current = 0;

        var slidesContainer = el.querySelector('.code-evo-slides');
        var transitioning = false;

        // Measure all slide heights (briefly make each visible)
        var slideHeights = [];
        slides.forEach(function(s) {
          s.classList.add('evo-active');
          slideHeights.push(s.offsetHeight);
          s.classList.remove('evo-active');
        });
        slides[0].classList.add('evo-active');
        slidesContainer.style.height = slideHeights[0] + 'px';

        function goTo(idx) {
          idx = Math.max(0, Math.min(idx, steps.length - 1));
          if (idx === current || transitioning) return;
          transitioning = true;
          var prev = current;
          current = idx;

          // Update progress bar + buttons
          segs.forEach(function(s, i) {
            s.classList.remove('evo-past', 'evo-current', 'evo-future');
            s.classList.add(i < current ? 'evo-past' : i === current ? 'evo-current' : 'evo-future');
          });
          prevBtn.disabled = current === 0;
          nextBtn.disabled = current === steps.length - 1;
          progress.textContent = (current + 1) + ' / ' + steps.length;

          // Crossfade: old slides out, new slide in
          slides[prev].classList.add('evo-leaving');
          slides[prev].classList.remove('evo-active');
          slides[current].classList.add('evo-active');

          // Animate height
          slidesContainer.style.height = slideHeights[current] + 'px';

          // Clean up after transition
          setTimeout(function() {
            slides[prev].classList.remove('evo-leaving');
            transitioning = false;
          }, 400);
        }

        segs.forEach(function(s) {
          s.addEventListener('click', function() { goTo(parseInt(s.dataset.evoIdx)); });
        });
        prevBtn.addEventListener('click', function() { goTo(current - 1); });
        nextBtn.addEventListener('click', function() { goTo(current + 1); });
      });
    }
  });

  /* 87. <sg-refactor title="..." pattern="..."> <sg-before>code</sg-before> <sg-after>code</sg-after> </sg-refactor> */
  customElements.define('sg-before', class extends HTMLElement { connectedCallback() {} });
  customElements.define('sg-after', class extends HTMLElement { connectedCallback() {} });
  customElements.define('sg-refactor', class extends HTMLElement {
    connectedCallback() {
      var title = this.getAttribute('title') || 'Refactoring';
      var pattern = this.getAttribute('pattern') || '';
      var beforeEl = this.querySelector('sg-before');
      var afterEl = this.querySelector('sg-after');
      var beforeCode = beforeEl ? beforeEl.textContent : '';
      var afterCode = afterEl ? afterEl.textContent : '';
      var beforeLines = beforeCode.trim().split('\n').length;
      var afterLines = afterCode.trim().split('\n').length;
      var removed = beforeLines;
      var added = afterLines;

      function esc(s) { return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

      var html = '<div class="refactor-diff">';
      html += '<div class="refactor-header"><span><i class="fa-solid fa-code-compare"></i> ' + title + '</span>' +
        (pattern ? '<span class="refactor-step-badge">' + pattern + '</span>' : '') + '</div>';
      html += '<div class="refactor-body">';
      html += '<div class="refactor-before"><div class="refactor-label"><i class="fa-solid fa-minus"></i> Before</div>' +
        '<div class="refactor-code"><pre><code>' + esc(beforeCode.trim()) + '</code></pre></div></div>';
      html += '<div class="refactor-after"><div class="refactor-label"><i class="fa-solid fa-plus"></i> After</div>' +
        '<div class="refactor-code"><pre><code>' + esc(afterCode.trim()) + '</code></pre></div></div>';
      html += '</div>';
      html += '<div class="refactor-stats"><span class="refactor-stat--red">−' + removed + ' lines</span><span class="refactor-stat--green">+' + added + ' lines</span><span>' + Math.round((1 - added/removed) * 100) + '% reduction</span></div>';
      html += '</div>';
      this.outerHTML = html;
    }
  });

  /* 73. <sg-btree search="65" tree='{ levels: [[{keys:[50]}], [{keys:[10,30]},{keys:[70,90]}], ...] }'> */
  customElements.define('sg-btree', class extends HTMLElement {
    connectedCallback() {
      var tree = JSON.parse(this.getAttribute('tree') || '{"levels":[]}');
      var search = this.getAttribute('search') || '';
      var searchVal = parseInt(search);
      var html = '<div class="btree-nav"><div class="btree-body">';
      tree.levels.forEach(function(level) {
        var isLeaf = level.leaf;
        html += '<div class="btree-level">';
        level.nodes.forEach(function(node) {
          var nodeActive = false;
          var cls = 'btree-node' + (isLeaf ? ' leaf' : '');
          var keysHtml = '';
          node.keys.forEach(function(k) {
            var isHighlight = false;
            if (!isNaN(searchVal)) {
              if (isLeaf && k === searchVal) isHighlight = true;
              else if (!isLeaf && searchVal <= k) { isHighlight = true; }
            }
            if (isHighlight) nodeActive = true;
            keysHtml += '<span class="btree-key' + (isHighlight ? ' highlight' : '') + '">' + k + '</span>';
          });
          if (nodeActive) cls += ' active';
          html += '<div class="' + cls + '">' + keysHtml + '</div>';
        });
        html += '</div>';
      });
      if (tree.levels.length > 0 && tree.levels[tree.levels.length - 1].leaf) {
        html += '<div class="btree-leaf-link"><span class="btree-leaf-link-arrow">&larr;</span> linked leaves <span class="btree-leaf-link-arrow">&rarr;</span></div>';
      }
      html += '</div></div>';
      this.outerHTML = html;
    }
  });

  /* 72. <sg-glossary terms='[{term,def}]'> </sg-glossary> */
  customElements.define('sg-glossary', class extends HTMLElement {
    connectedCallback() {
      var terms = JSON.parse(this.getAttribute('terms') || '[]');
      // Sort and group by first letter
      terms.sort(function(a, b) { return a.term.localeCompare(b.term); });
      var html = '<div class="glossary-panel"><ul class="glossary-panel-list">';
      var lastLetter = '';
      terms.forEach(function(t) {
        var letter = t.term.charAt(0).toUpperCase();
        if (letter !== lastLetter) {
          html += '<div class="glossary-letter">' + letter + '</div>';
          lastLetter = letter;
        }
        html += '<li class="glossary-item"><span class="glossary-term">' + t.term + '</span><span class="glossary-def">' + t.def + '</span></li>';
      });
      html += '</ul></div>';
      this.outerHTML = html;
    }
  });

  /* 49. <sg-cost-calc rows='[...]' total="...""> </sg-cost-calc> */
  customElements.define('sg-cost-calc', class extends HTMLElement {
    connectedCallback() {
      var rows = JSON.parse(this.getAttribute('rows') || '[]');
      var total = this.getAttribute('total') || '';
      var html = '<div class="cost-calc"><table><thead><tr><th>Resource</th><th>Spec</th><th>Monthly Cost</th></tr></thead><tbody>';
      rows.forEach(function(r) {
        html += '<tr><td>' + r.resource + '</td><td>' + r.spec + '</td><td class="cost-calc-subtotal">' + r.cost + '</td></tr>';
      });
      if (total) html += '<tr class="cost-calc-total"><td colspan="2">Monthly Total</td><td>' + total + '</td></tr>';
      html += '</tbody></table></div>';
      this.outerHTML = html;
    }
  });
})();

/* ==========================================================
 *  CONTENT PROTECTION
 *  Deters casual copying — not foolproof against devs,
 *  but blocks 95% of right-click / Ctrl+C / view-source theft.
 * ========================================================== */
(function() {
  /* 1. Disable right-click context menu */
  document.addEventListener('contextmenu', function(e) { e.preventDefault(); });

  /* 2. Block keyboard shortcuts: Ctrl+U (view source), Ctrl+S (save),
        Ctrl+Shift+I (devtools), Ctrl+Shift+J (console), F12 */
  document.addEventListener('keydown', function(e) {
    if (e.key === 'F12') { e.preventDefault(); return; }
    if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i' || e.key === 'J' || e.key === 'j' || e.key === 'C' || e.key === 'c')) { e.preventDefault(); return; }
    if (e.ctrlKey && (e.key === 'u' || e.key === 'U' || e.key === 's' || e.key === 'S')) { e.preventDefault(); return; }
  });

  /* 3. Disable drag (prevents dragging images / selections) */
  document.addEventListener('dragstart', function(e) { e.preventDefault(); });

  /* 4. Invisible watermark — inject zero-width chars into text nodes
        so copied text carries a fingerprint proving it came from System Guide */
  var wm = '\u200B\u200C\u200D\uFEFF'; /* zero-width space, non-joiner, joiner, BOM */
  document.addEventListener('DOMContentLoaded', function() {
    var mark = document.createElement('span');
    mark.style.cssText = 'position:absolute;width:0;height:0;overflow:hidden;pointer-events:none;';
    mark.textContent = wm + 'SystemGuide' + wm + new Date().getFullYear() + wm;
    mark.setAttribute('aria-hidden', 'true');
    document.body.appendChild(mark);
  });
})();
