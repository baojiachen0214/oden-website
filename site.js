(() => {
  const language = new URLSearchParams(location.search).get('lang') === 'zh' ? 'zh' : 'en';
  const chinese = language === 'zh';
  document.body.dataset.lang = language;
  document.documentElement.lang = chinese ? 'zh-Hans' : 'en';
  const picker = document.querySelector('#language');
  if (picker) {
    picker.value = language;
    picker.addEventListener('change', () => {
      const url = new URL(location.href);
      url.searchParams.set('lang', picker.value);
      location.assign(url.href);
    });
  }
  document.querySelectorAll('a[data-local]').forEach(link => {
    const url = new URL(link.getAttribute('href'), location.href);
    url.searchParams.set('lang', language);
    link.href = url.href;
  });
  const progress = document.querySelector('.reading-progress');
  if (progress) {
    let scheduled = false;
    const update = () => {
      const distance = document.documentElement.scrollHeight - innerHeight;
      progress.style.transform = 'scaleX(' + (distance > 0 ? scrollY / distance : 0) + ')';
      scheduled = false;
    };
    addEventListener('scroll', () => {
      if (!scheduled) { scheduled = true; requestAnimationFrame(update); }
    }, { passive: true });
    addEventListener('resize', update);
    update();
  }
  if (!matchMedia('(prefers-reduced-motion: reduce)').matches && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('is-waiting');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: .08 });
    document.querySelectorAll('.reveal').forEach(item => {
      item.classList.add('has-motion', 'is-waiting');
      observer.observe(item);
    });
  }
  const pdfTitles = ['A little curiosity.<br>A bigger world.', 'Follow the thread.<br>Find your focus.', 'A new perspective.<br>A new possibility.'];
  let pdfPage = 0;
  document.querySelectorAll('[data-page]').forEach(button => {
    button.setAttribute('aria-label', chinese ? (button.dataset.page === '1' ? '下一页 PDF 示意' : '上一页 PDF 示意') : (button.dataset.page === '1' ? 'Next PDF illustration page' : 'Previous PDF illustration page'));
    button.addEventListener('click', () => {
      pdfPage = (pdfPage + Number(button.dataset.page) + 3) % 3;
      const number = String(pdfPage + 1).padStart(2, '0');
      document.querySelector('#pdf-counter').textContent = number + ' / 03';
      document.querySelector('#pdf-page-label').textContent = number;
      document.querySelector('#pdf-title').innerHTML = pdfTitles[pdfPage];
      document.querySelector('#pdf-graphic').dataset.page = String(pdfPage);
    });
  });
  const canvas = document.querySelector('#node-canvas');
  if (canvas) {
    const wires = new Map();
    document.querySelectorAll('[data-wire]').forEach(path => wires.set(path.dataset.wire, path));
    document.querySelectorAll('[data-node]').forEach(node => {
      let start = null;
      let translation = { x: 0, y: 0 };
      const wire = wires.get(node.dataset.node);
      const originalPath = wire.getAttribute('d');
      const drawWire = () => {
        const box = canvas.getBoundingClientRect();
        const rect = node.getBoundingClientRect();
        const x = (rect.left + rect.width / 2 - box.left) * 700 / box.width;
        const y = (rect.top + rect.height / 2 - box.top) * 620 / box.height;
        wire.setAttribute('d', 'M350 310 C350 ' + y + ' ' + x + ' 310 ' + x + ' ' + y);
      };
      node.addEventListener('pointerdown', event => {
        if (event.target.closest('button') || event.button !== 0) return;
        start = { x: event.clientX, y: event.clientY, tx: translation.x, ty: translation.y };
        node.setPointerCapture(event.pointerId);
        node.classList.add('is-dragging');
        if (event.pointerType !== 'touch') event.preventDefault();
      });
      node.addEventListener('pointermove', event => {
        if (!start) return;
        const limitX = canvas.clientWidth * .1;
        const limitY = canvas.clientHeight * .08;
        translation.x = Math.max(-limitX, Math.min(limitX, start.tx + event.clientX - start.x));
        translation.y = Math.max(-limitY, Math.min(limitY, start.ty + event.clientY - start.y));
        node.style.translate = translation.x + 'px ' + translation.y + 'px';
        drawWire();
      });
      const stop = () => { start = null; node.classList.remove('is-dragging'); };
      node.addEventListener('pointerup', stop);
      node.addEventListener('pointercancel', stop);
      addEventListener('resize', () => {
        translation = { x: 0, y: 0 };
        node.style.translate = '0 0';
        wire.setAttribute('d', originalPath);
      });
    });
  }
  const screen = document.querySelector('#app-screen');
  const screens = {
    resources: ['assets/resources.png', 'Actual Oden interface showing resource cards and map previews'],
    math: ['assets/math.png', 'Actual Oden interface showing LaTeX formulas in mind-map topics'],
    outline: ['assets/outline.png', 'Actual Oden interface showing native outline and canvas views']
  };
  const tabs = [...document.querySelectorAll('[data-screen]')];
  const activateTab = tab => {
    const [src, alt] = screens[tab.dataset.screen];
    screen.src = src; screen.alt = alt;
    tabs.forEach(item => {
      item.setAttribute('aria-selected', String(item === tab));
      item.tabIndex = item === tab ? 0 : -1;
    });
    document.querySelector('#app-screen-panel').setAttribute('aria-labelledby', tab.id);
  };
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => activateTab(tab));
    tab.addEventListener('keydown', event => {
      let next;
      if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
      if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = tabs.length - 1;
      if (next !== undefined) {
        event.preventDefault(); activateTab(tabs[next]); tabs[next].focus();
      }
    });
  });
  const themes = {
    spring: ['assets/theme-spring.png', '#dce1d4', 'Actual Oden Spring Canopy template'],
    harbor: ['assets/theme-harbor.png', '#455453', 'Actual Oden Harbor Flow template in dark mode'],
    violet: ['assets/theme-violet.png', '#e1d8e7', 'Actual Oden Woven Violet template']
  };
  document.querySelectorAll('[data-theme]').forEach(button => button.addEventListener('click', () => {
    const [src, background, alt] = themes[button.dataset.theme];
    const image = document.querySelector('#theme-screen');
    image.src = src; image.alt = alt;
    document.querySelector('.theme-image-wrap').style.background = background;
    document.querySelectorAll('[data-theme]').forEach(item => {
      item.classList.toggle('is-active', item === button);
      item.setAttribute('aria-pressed', String(item === button));
    });
  }));
  const sourceToggle = document.querySelector('.source-toggle');
  if (sourceToggle) sourceToggle.addEventListener('click', () => {
    const expanded = sourceToggle.getAttribute('aria-expanded') !== 'true';
    sourceToggle.setAttribute('aria-expanded', String(expanded));
    document.querySelector('#tex-source').hidden = !expanded;
  });
  const dialog = document.querySelector('.image-dialog');
  if (dialog) {
    dialog.setAttribute('aria-label', chinese ? 'Oden 完整界面截图' : 'Full-size Oden screenshot');
    dialog.querySelector('.dialog-close').setAttribute('aria-label', chinese ? '关闭截图' : 'Close screenshot');
    document.querySelectorAll('[data-zoom]').forEach(button => {
      button.setAttribute('aria-label', chinese ? '放大查看 Oden 真实截图' : 'Enlarge actual Oden screenshot');
      button.addEventListener('click', () => {
        const original = button.querySelector('img');
        const enlarged = dialog.querySelector('img');
        enlarged.src = original.src; enlarged.alt = original.alt;
        dialog.showModal();
        document.body.style.overflow = 'hidden';
      });
    });
    dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
    dialog.addEventListener('close', () => { document.body.style.overflow = ''; });
  }
})();
