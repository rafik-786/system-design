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
    document.querySelectorAll('.macos-window:not(.terminal) .macos-body pre code').forEach(function(block) {
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
   *  Semantic icon colors — auto-color FA icons by class name.
   *  Runs on every reinit so dynamically added icons get colored.
   * -------------------------------------------------------- */
  var iconColorMap = {
    'fa-bug':                  '#f87171',   /* red */
    'fa-skull-crossbones':     '#fbbf24',   /* amber */
    'fa-triangle-exclamation': '#fbbf24',   /* amber */
    'fa-exclamation-triangle': '#fbbf24',   /* amber (legacy) */
    'fa-circle-exclamation':   '#fbbf24',   /* amber */
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

    /* -- Custom syntax highlighter for code windows -- */
    colorizeCode();

    /* -- Semantic icon colors (auto-apply by FA class name) -- */
    colorizeIcons();

    /* -- Auto-create tooltips from data-tooltip -- */
    initDataTooltips();

    /* -- Convert rich tooltips to use existing positioning system -- */
    initRichTooltips();

    /* -- Line numbers (skip terminal blocks only) -- */
    document.querySelectorAll('pre code').forEach(function(block) {
      // Skip terminal blocks (not code windows) and already-processed blocks
      if (block.closest('.macos-window.terminal')) return;
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

    /* -- Flow Steppers: initialize state -- */
    document.querySelectorAll('.flow-stepper, .data-flow').forEach(function(stepper) {
      var steps = stepper.querySelectorAll('.flow-step');
      if (!steps.length) return;

      // Default to first step if no data-current set
      var current = parseInt(stepper.getAttribute('data-current') || '0', 10);
      stepper.setAttribute('data-current', current);

      // Ensure only the current step is active
      steps.forEach(function(step, i) {
        step.classList.toggle('active', i === current);
      });

      // Set progress text
      var progress = stepper.querySelector('.flow-progress');
      if (progress) {
        progress.textContent = 'Step ' + (current + 1) + ' of ' + steps.length;
      }

      // Set dot indicators
      stepper.querySelectorAll('.flow-dot').forEach(function(dot, i) {
        dot.classList.toggle('active', i === current);
      });

      // Set button disabled states
      var prevBtn = stepper.querySelector('.flow-prev');
      var nextBtn = stepper.querySelector('.flow-next');
      if (prevBtn) prevBtn.disabled = (current === 0);
      if (nextBtn) nextBtn.disabled = (current === steps.length - 1);
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

  /* -- Wheel intercept removed: macos-body uses overflow:auto natively -- */

  /* ==========================================================
   *  SECTION E — INTERACTIVE COMPONENTS
   *  Event delegation for new CSS components (flow stepper,
   *  knowledge check, annotated diagram, multi-file viewer,
   *  what-if card, formula float, rich tooltips, data-flow).
   * ========================================================== */

  /* ----------------------------------------------------------
   *  E1. Flow Stepper — Previous/Next step navigation
   *      Tracks current step via data-current attribute.
   * -------------------------------------------------------- */
  document.addEventListener('click', function(e) {
    var btn = e.target.closest('.flow-prev, .flow-next');
    if (!btn) return;
    var stepper = btn.closest('.flow-stepper');
    if (!stepper) return;

    var steps = stepper.querySelectorAll('.flow-step');
    if (!steps.length) return;

    var current = parseInt(stepper.getAttribute('data-current') || '0', 10);
    var isNext = btn.classList.contains('flow-next');
    var next = isNext ? current + 1 : current - 1;

    // Clamp to valid range
    if (next < 0 || next >= steps.length) return;

    // Hide current step, show next
    steps[current].classList.remove('active');
    steps[next].classList.add('active');
    stepper.setAttribute('data-current', next);

    // Update progress text
    var progress = stepper.querySelector('.flow-progress');
    if (progress) {
      progress.textContent = 'Step ' + (next + 1) + ' of ' + steps.length;
    }

    // Update dot indicators if present
    var dots = stepper.querySelectorAll('.flow-dot');
    dots.forEach(function(dot, i) {
      dot.classList.toggle('active', i === next);
    });

    // Disable/enable buttons at boundaries
    var prevBtn = stepper.querySelector('.flow-prev');
    var nextBtn = stepper.querySelector('.flow-next');
    if (prevBtn) prevBtn.disabled = (next === 0);
    if (nextBtn) nextBtn.disabled = (next === steps.length - 1);
  });

  /* ----------------------------------------------------------
   *  E2. Knowledge Check — single-select quiz with explanation
   *      Clicking an option reveals explanation, marks correct/
   *      incorrect, and disables further selections.
   * -------------------------------------------------------- */
  document.addEventListener('click', function(e) {
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
  document.addEventListener('click', function(e) {
    var btn = e.target.closest('.data-flow .flow-prev, .data-flow .flow-next');
    if (!btn) return;
    var flow = btn.closest('.data-flow');
    if (!flow) return;

    // Delegate to same logic as flow-stepper if already handled
    if (flow.classList.contains('flow-stepper')) return;

    var steps = flow.querySelectorAll('.flow-step');
    if (!steps.length) return;

    var current = parseInt(flow.getAttribute('data-current') || '0', 10);
    var isNext = btn.classList.contains('flow-next');
    var next = isNext ? current + 1 : current - 1;

    if (next < 0 || next >= steps.length) return;

    steps[current].classList.remove('active');
    steps[next].classList.add('active');
    flow.setAttribute('data-current', next);

    var progress = flow.querySelector('.flow-progress');
    if (progress) {
      progress.textContent = 'Step ' + (next + 1) + ' of ' + steps.length;
    }

    var dots = flow.querySelectorAll('.flow-dot');
    dots.forEach(function(dot, i) {
      dot.classList.toggle('active', i === next);
    });

    var prevBtn = flow.querySelector('.flow-prev');
    var nextBtn = flow.querySelector('.flow-next');
    if (prevBtn) prevBtn.disabled = (next === 0);
    if (nextBtn) nextBtn.disabled = (next === steps.length - 1);
  });

}); /* end DOMContentLoaded */

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
