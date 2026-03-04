/* ============================================================
 *  System Design Wiki — Shared Scripts
 *  Vanilla JS | No frameworks | Event-delegation
 * ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ----------------------------------------------------------
   *  1. Card Accordion (with smooth open animation — #9)
   * -------------------------------------------------------- */
  document.addEventListener('click', (e) => {
    const title = e.target.closest('.card-title');
    if (!title) return;
    const card = title.closest('.card');
    if (!card) return;

    const body = card.querySelector('.card-body');
    if (!body) { card.classList.toggle('open'); return; }

    if (card.classList.contains('open')) {
      // Closing: set explicit height first, then collapse to 0
      body.style.maxHeight = body.scrollHeight + 'px';
      requestAnimationFrame(() => {
        body.style.maxHeight = '0';
        body.style.paddingBottom = '0';
      });
      card.classList.remove('open');
    } else {
      // Opening: expand to scrollHeight, then set to none
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
   *  2. Expand / Collapse All
   * -------------------------------------------------------- */
  const expandAllBtn = document.getElementById('expandAllBtn');
  if (expandAllBtn) {
    expandAllBtn.addEventListener('click', () => {
      const cards = document.querySelectorAll('.card');
      const isActive = expandAllBtn.classList.toggle('active');
      const icon = expandAllBtn.querySelector('i');
      if (icon) icon.className = isActive ? 'fa-solid fa-angles-up' : 'fa-solid fa-angles-down';
      cards.forEach((c) => {
        const body = c.querySelector('.card-body');
        if (isActive) {
          c.classList.add('open');
          if (body) { body.style.maxHeight = 'none'; body.style.paddingBottom = '1.25rem'; }
        } else {
          if (body) { body.style.maxHeight = '0'; body.style.paddingBottom = '0'; }
          c.classList.remove('open');
        }
      });
    });
  }

  /* ----------------------------------------------------------
   *  2b. Click-to-activate code block scrolling
   *  Code blocks stay overflow:hidden by default so page scrolls
   *  freely. Click a code block to enable its internal scroll.
   * -------------------------------------------------------- */
  (function () {
    let activeBlock = null;

    // Block wheel events on inactive code blocks so page scrolls through
    document.addEventListener('wheel', (e) => {
      const body = e.target.closest('.macos-body');
      if (body && body !== activeBlock) {
        e.preventDefault();
        // Forward scroll to the page
        window.scrollBy(0, e.deltaY);
      }
    }, { passive: false });

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
  })();

  /* ----------------------------------------------------------
   *  3. Dot Navigation (right-edge)
   *  Auto-generates dots from .section[id] elements.
   * -------------------------------------------------------- */
  const dotNav = document.getElementById('dotNav');
  const allSections = document.querySelectorAll('.section[id]');

  if (dotNav && allSections.length > 0) {
    // Build dot items from sections
    allSections.forEach((sec) => {
      const titleEl = sec.querySelector('.section-title');
      if (!titleEl) return;
      const item = document.createElement('div');
      item.className = 'dot-nav-item';
      item.setAttribute('data-target', sec.id);
      item.innerHTML =
        '<span class="dot-nav-label">' + titleEl.textContent.trim() + '</span>' +
        '<span class="dot-nav-dot"></span>';
      dotNav.appendChild(item);
    });

    // Click to scroll
    dotNav.addEventListener('click', (e) => {
      const item = e.target.closest('.dot-nav-item');
      if (!item) return;
      const target = document.getElementById(item.getAttribute('data-target'));
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    // IntersectionObserver for active dot
    const dotItems = dotNav.querySelectorAll('.dot-nav-item');
    const dotObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          dotItems.forEach((d) => {
            d.classList.toggle('active', d.getAttribute('data-target') === id);
          });
        }
      });
    }, { rootMargin: '-20% 0px -70% 0px' });

    allSections.forEach((sec) => dotObserver.observe(sec));
  }

  /* ----------------------------------------------------------
   *  4. Fullscreen Toggle (with icon state change — #12)
   * -------------------------------------------------------- */
  const fullscreenBtn = document.getElementById('fullscreenBtn');
  if (fullscreenBtn) {
    fullscreenBtn.addEventListener('click', () => {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(() => {});
      } else {
        document.exitFullscreen().catch(() => {});
      }
    });
    document.addEventListener('fullscreenchange', () => {
      fullscreenBtn.classList.toggle('active', !!document.fullscreenElement);
      const icon = fullscreenBtn.querySelector('i');
      if (icon) {
        icon.className = document.fullscreenElement
          ? 'fa-solid fa-compress'
          : 'fa-solid fa-expand';
      }
    });
  }

  /* ----------------------------------------------------------
   *  4b. Theme Switcher
   * -------------------------------------------------------- */
  const themeBtn = document.getElementById('themeBtn');
  const themeDropdown = document.getElementById('themeDropdown');
  if (themeBtn && themeDropdown) {
    const saved = localStorage.getItem('wiki-theme') || 'navy';
    // Mark active option on load
    const activeOpt = themeDropdown.querySelector('[data-theme="' + saved + '"]');
    if (activeOpt) {
      themeDropdown.querySelectorAll('.theme-option').forEach(function (o) { o.classList.remove('active'); });
      activeOpt.classList.add('active');
    }
    themeBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      themeDropdown.classList.toggle('open');
    });
    themeDropdown.addEventListener('click', function (e) {
      var opt = e.target.closest('.theme-option');
      if (!opt) return;
      var theme = opt.dataset.theme;
      if (theme === 'navy') document.documentElement.removeAttribute('data-theme');
      else document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('wiki-theme', theme);
      themeDropdown.querySelectorAll('.theme-option').forEach(function (o) { o.classList.toggle('active', o.dataset.theme === theme); });
      themeDropdown.classList.remove('open');
    });
    document.addEventListener('click', function () { themeDropdown.classList.remove('open'); });
  }

  /* ----------------------------------------------------------
   *  5. Progress Bar + Back to Top
   * -------------------------------------------------------- */
  const backToTop = document.getElementById('backToTop');

  function onScroll() {
    const docH = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docH > 0 ? Math.round((window.scrollY / docH) * 100) : 0;
    document.documentElement.style.setProperty('--scroll-pct', pct + '%');
    if (backToTop) backToTop.classList.toggle('visible', window.scrollY > 400);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (backToTop) backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  /* ----------------------------------------------------------
   *  6. Q&A Accordion (JS-driven smooth heights)
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
   *  7. Collapsible Sections (JS-driven smooth heights)
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
   *  8. Tab Switcher (supports NESTED independent groups)
   *  Uses data-tab on buttons, matches by ID on panels.
   * -------------------------------------------------------- */
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.tab-btn');
    if (!btn) return;

    const container = btn.closest('.tab-container');
    if (!container) return;

    const targetTab = btn.getAttribute('data-tab');
    if (!targetTab) return;

    // Only affect buttons/panels that are DIRECT children of this
    // container's tab-header / tab-panel sets (not nested ones)
    const header = btn.closest('.tab-header');
    if (header) {
      header.querySelectorAll('.tab-btn').forEach((b) => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
    }
    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');

    // Find all direct tab-panels in this container (skip nested)
    container.querySelectorAll(':scope > .tab-panel, :scope > div > .tab-panel').forEach((p) => {
      p.classList.remove('active');
    });

    // Match panel by ID
    const panel = document.getElementById(targetTab);
    if (panel) panel.classList.add('active');
  });

  /* ----------------------------------------------------------
   *  9. Diagram Toggle (sibling-based)
   *  .diagram-toggle is a SIBLING of .mermaid-container
   * -------------------------------------------------------- */
  document.addEventListener('click', (e) => {
    const toggle = e.target.closest('.diagram-toggle');
    if (!toggle) return;

    toggle.classList.toggle('open');

    // The mermaid-container is the next sibling
    const container = toggle.nextElementSibling;
    if (container && container.classList.contains('mermaid-container')) {
      container.classList.toggle('collapsed');
    }
  });

  /* ----------------------------------------------------------
   *  10. Diagram Zoom
   * -------------------------------------------------------- */
  const ZOOM_STEP = 0.15;
  const ZOOM_MIN = 0.25;
  const ZOOM_MAX = 3;

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.diagram-zoom-btn');
    if (!btn) return;

    const container = btn.closest('.mermaid-container');
    if (!container) return;

    const svg = container.querySelector('svg');
    if (!svg) return;

    const action = btn.getAttribute('data-zoom');
    let current = parseFloat(svg.style.transform?.replace(/scale\(([^)]+)\)/, '$1')) || 1;

    if (action === 'in')       current = Math.min(current + ZOOM_STEP, ZOOM_MAX);
    else if (action === 'out') current = Math.max(current - ZOOM_STEP, ZOOM_MIN);
    else if (action === 'reset') current = 1;

    svg.style.transform = 'scale(' + current + ')';
    svg.style.transformOrigin = 'top left';
  });

  /* ----------------------------------------------------------
   *  11. Sr Toggle (legacy)
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
   *  12. Highlight.js Init + Line Numbers (#13)
   * -------------------------------------------------------- */
  if (typeof hljs !== 'undefined') {
    hljs.highlightAll();
  }

  // Add line numbers to code blocks
  document.querySelectorAll('.macos-body pre code').forEach((block) => {
    const lines = block.innerHTML.split('\n');
    // Remove trailing empty line if present
    if (lines.length > 0 && lines[lines.length - 1].trim() === '') lines.pop();
    block.innerHTML = lines.map((line, i) =>
      '<span class="code-line"><span class="line-num">' + (i + 1) + '</span>' + line + '</span>'
    ).join('\n');
  });

  /* ----------------------------------------------------------
   *  13. Tooltip Touch Support
   *  On touch devices, tap toggles tooltip visibility.
   * -------------------------------------------------------- */
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('.tooltip-trigger');

    if (!trigger) {
      // Tapped outside — close all
      document.querySelectorAll('.tooltip-content.visible').forEach((tc) => tc.classList.remove('visible'));
      return;
    }

    // On touch devices, toggle
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      e.preventDefault();
      const content = trigger.querySelector('.tooltip-content');
      if (!content) return;

      document.querySelectorAll('.tooltip-content.visible').forEach((tc) => {
        if (tc !== content) tc.classList.remove('visible');
      });
      content.classList.toggle('visible');
    }
  });

  /* ----------------------------------------------------------
   *  14. Popup / Overlay (with close animation — #16)
   *  - Open via .solution-btn[data-popup]
   *  - Close via .popup-close, overlay click, or ESC key
   *  - Locks body scroll when open
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
    // Open
    const openBtn = e.target.closest('.solution-btn[data-popup]');
    if (openBtn) {
      openPopup(openBtn.getAttribute('data-popup'));
      return;
    }

    // Close via button
    const closeBtn = e.target.closest('.popup-close');
    if (closeBtn) {
      closeAllPopups();
      return;
    }

    // Close via overlay background
    if (e.target.classList.contains('popup-overlay')) {
      closeAllPopups();
    }
  });

  // ESC key closes popups and search
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllPopups();
      closeSearch();
    }
  });

  /* ----------------------------------------------------------
   *  15. Mermaid is initialized in the <head> of each page
   *      (before body parses), NOT here. This avoids the
   *      flash of unstyled diagrams.
   * -------------------------------------------------------- */

  /* ----------------------------------------------------------
   *  16. Keyboard Support for Custom Toggles
   *  Enter and Space activate non-button interactive elements
   *  that have tabindex="0" and role="button".
   * -------------------------------------------------------- */
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter' && e.key !== ' ') return;

    const target = e.target;
    if (!target.hasAttribute('role') || target.getAttribute('role') !== 'button') return;

    // Prevent Space from scrolling the page
    if (e.key === ' ') e.preventDefault();

    // Simulate a click
    target.click();
  });

  /* ----------------------------------------------------------
   *  17. ARIA: Update aria-expanded on toggles after click
   * -------------------------------------------------------- */
  const updateAriaExpanded = () => {
    // Cards
    document.querySelectorAll('.card').forEach((card) => {
      const title = card.querySelector('.card-title');
      if (title) title.setAttribute('aria-expanded', card.classList.contains('open'));
    });
    // Q&A items
    document.querySelectorAll('.qa-item').forEach((item) => {
      const header = item.querySelector('.qa-header');
      if (header) header.setAttribute('aria-expanded', item.classList.contains('active'));
    });
    // Collapsibles
    document.querySelectorAll('.collapsible').forEach((col) => {
      const header = col.querySelector('.collapsible-header');
      if (header) header.setAttribute('aria-expanded', col.classList.contains('active'));
    });
    // Diagram toggles
    document.querySelectorAll('.diagram-toggle').forEach((dt) => {
      dt.setAttribute('aria-expanded', dt.classList.contains('open'));
    });
  };

  // Run after any click (covers all toggle interactions)
  document.addEventListener('click', () => requestAnimationFrame(updateAriaExpanded));
  // Set initial state
  updateAriaExpanded();

  /* ----------------------------------------------------------
   *  18. Copy-to-Clipboard on Code Windows (#1)
   * -------------------------------------------------------- */
  document.querySelectorAll('.macos-window').forEach((win) => {
    const bar = win.querySelector('.macos-titlebar');
    const code = win.querySelector('code');
    if (!bar || !code) return;

    const btn = document.createElement('button');
    btn.className = 'copy-btn';
    btn.innerHTML = '<i class="fa-regular fa-copy" aria-hidden="true"></i>';
    btn.setAttribute('aria-label', 'Copy code');
    btn.addEventListener('click', () => {
      navigator.clipboard.writeText(code.textContent).then(() => {
        btn.innerHTML = '<i class="fa-solid fa-check" aria-hidden="true"></i>';
        btn.classList.add('copied');
        setTimeout(() => {
          btn.innerHTML = '<i class="fa-regular fa-copy" aria-hidden="true"></i>';
          btn.classList.remove('copied');
        }, 1500);
      }).catch(() => { /* clipboard API unavailable */ });
    });
    bar.appendChild(btn);
  });

  /* ----------------------------------------------------------
   *  19. Scroll-Reveal Animations (#7)
   *  Cards/callouts fade in as they enter the viewport.
   *  Respects prefers-reduced-motion.
   * -------------------------------------------------------- */
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const revealTargets = document.querySelectorAll(
    '.card, .callout, .qa-item, .exercise-card, .problem-card, .concept-card, .cheat-card, .related-card, .tldr-card, .prereq-card'
  );

  if (prefersReducedMotion) {
    // Skip animation — show everything immediately
    revealTargets.forEach((el) => el.classList.add('visible'));
  } else {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    revealTargets.forEach((el) => revealObserver.observe(el));
  }

  /* ----------------------------------------------------------
   *  20. (Active nav highlighting now handled by dot-nav in section 3)
   * -------------------------------------------------------- */

  /* ----------------------------------------------------------
   *  21. Cmd+K / Ctrl+K Search Palette (#14)
   * -------------------------------------------------------- */
  // Build search overlay
  const searchOverlay = document.createElement('div');
  searchOverlay.className = 'search-overlay';
  searchOverlay.innerHTML = `
    <div class="search-box">
      <div class="search-input-wrap">
        <i class="fa-solid fa-magnifying-glass" aria-hidden="true"></i>
        <input type="text" class="search-input" placeholder="Jump to section..." autocomplete="off">
        <span class="search-kbd">ESC</span>
      </div>
      <div class="search-results" role="listbox" aria-label="Search results"></div>
      <div class="search-footer">
        <span><kbd>&uarr;&darr;</kbd> Navigate</span>
        <span><kbd>&crarr;</kbd> Open</span>
        <span><kbd>esc</kbd> Close</span>
      </div>
    </div>
  `;
  document.body.appendChild(searchOverlay);

  const searchInput = searchOverlay.querySelector('.search-input');
  const searchResults = searchOverlay.querySelector('.search-results');

  // Gather all sections for search
  const searchItems = [];
  document.querySelectorAll('.section[id]').forEach((sec) => {
    const header = sec.querySelector('.section-title');
    const icon = sec.querySelector('.section-icon i');
    if (header) {
      searchItems.push({
        label: header.textContent.trim(),
        id: sec.id,
        iconClass: icon ? icon.className : 'fa-solid fa-bookmark',
      });
    }
  });

  function openSearch() {
    searchOverlay.classList.add('active');
    searchInput.value = '';
    renderSearchResults('');
    setTimeout(() => searchInput.focus(), 50);
  }

  function closeSearch() {
    searchOverlay.classList.remove('active');
  }

  function renderSearchResults(query) {
    const q = query.toLowerCase();
    const filtered = q
      ? searchItems.filter((item) => item.label.toLowerCase().includes(q))
      : searchItems;

    searchResults.innerHTML = filtered.map((item, i) =>
      '<div class="search-result-item' + (i === 0 ? ' active' : '') + '" role="option" data-id="' + item.id + '">' +
        '<i class="' + item.iconClass + '" aria-hidden="true"></i>' +
        '<span>' + item.label + '</span>' +
      '</div>'
    ).join('');
  }

  searchInput.addEventListener('input', () => renderSearchResults(searchInput.value));

  // Keyboard navigation in search
  searchOverlay.addEventListener('keydown', (e) => {
    const items = searchResults.querySelectorAll('.search-result-item');
    const current = searchResults.querySelector('.search-result-item.active');
    let idx = Array.from(items).indexOf(current);

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (idx < items.length - 1) idx++;
      items.forEach((it, i) => it.classList.toggle('active', i === idx));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (idx > 0) idx--;
      items.forEach((it, i) => it.classList.toggle('active', i === idx));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const active = searchResults.querySelector('.search-result-item.active');
      if (active) {
        const target = document.getElementById(active.getAttribute('data-id'));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        closeSearch();
      }
    }
  });

  // Click on search result
  searchResults.addEventListener('click', (e) => {
    const item = e.target.closest('.search-result-item');
    if (!item) return;
    const target = document.getElementById(item.getAttribute('data-id'));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    closeSearch();
  });

  // Close on overlay background click
  searchOverlay.addEventListener('click', (e) => {
    if (e.target === searchOverlay) closeSearch();
  });

  // Cmd+K / Ctrl+K shortcut
  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      if (searchOverlay.classList.contains('active')) {
        closeSearch();
      } else {
        openSearch();
      }
    }
  });

  // Add search button to toolbar if toolbar exists
  const toolbarRight = document.querySelector('.toolbar-right');
  if (toolbarRight) {
    const searchBtn = document.createElement('button');
    searchBtn.className = 'fab-btn';
    searchBtn.setAttribute('aria-label', 'Search sections (Ctrl+K)');
    searchBtn.innerHTML = '<i class="fa-solid fa-magnifying-glass" aria-hidden="true"></i>';
    searchBtn.addEventListener('click', openSearch);
    // Insert before first button
    toolbarRight.insertBefore(searchBtn, toolbarRight.firstChild);
  }

  /* ----------------------------------------------------------
   *  22. (Old sidebar removed — dot-nav replaces it)
   * -------------------------------------------------------- */

}); /* end DOMContentLoaded */
