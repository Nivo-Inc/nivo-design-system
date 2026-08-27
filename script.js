(() => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  const toggleLabel = toggle?.querySelector('.visually-hidden');

  const setNavigation = (isOpen) => {
    if (!toggle || !nav) return;
    toggle.setAttribute('aria-expanded', String(isOpen));
    nav.dataset.open = String(isOpen);
    if (toggleLabel) toggleLabel.textContent = isOpen ? 'Close navigation' : 'Open navigation';
  };

  toggle?.addEventListener('click', () => {
    setNavigation(toggle.getAttribute('aria-expanded') !== 'true');
  });

  nav?.addEventListener('click', (event) => {
    if (event.target.closest('a')) setNavigation(false);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setNavigation(false);
  });

  const toast = document.querySelector('.copy-toast');
  let toastTimer;

  const copyText = async (value) => {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(value);
      return;
    }

    const helper = document.createElement('textarea');
    helper.value = value;
    helper.setAttribute('readonly', '');
    helper.style.position = 'fixed';
    helper.style.opacity = '0';
    document.body.append(helper);
    helper.select();
    document.execCommand('copy');
    helper.remove();
  };

  document.querySelectorAll('[data-copy]').forEach((button) => {
    button.addEventListener('click', async () => {
      const value = button.dataset.copy;
      try {
        await copyText(value);
        if (!toast) return;
        toast.textContent = `${value} copied`;
        toast.dataset.visible = 'true';
        window.clearTimeout(toastTimer);
        toastTimer = window.setTimeout(() => {
          toast.dataset.visible = 'false';
        }, 1800);
      } catch {
        if (toast) {
          toast.textContent = `Copy unavailable — use ${value}`;
          toast.dataset.visible = 'true';
        }
      }
    });
  });

  const sections = [...document.querySelectorAll('main section[id]')];
  const sectionLinks = [...document.querySelectorAll('.site-nav a[href^="#"]')];

  if ('IntersectionObserver' in window && sectionLinks.length) {
    const linkById = new Map(sectionLinks.map((link) => [link.hash.slice(1), link]));
    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting && linkById.has(entry.target.id))
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      sectionLinks.forEach((link) => link.removeAttribute('aria-current'));
      linkById.get(visible.target.id)?.setAttribute('aria-current', 'true');
    }, { rootMargin: '-20% 0px -65%', threshold: [0.05, 0.3] });
    sections.forEach((section) => observer.observe(section));
  }
})();
