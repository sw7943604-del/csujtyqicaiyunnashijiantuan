/**
 * 客户端交互：移动抽屉、展线进度、当前章节高亮、揭幕动效。
 * 全部兼容 Astro 视图转场（astro:page-load），并支持 prefers-reduced-motion 降级。
 */

const reduceMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** 移动端抽屉：焦点管理 + Esc 关闭 + 简单焦点陷阱 */
function initDrawer() {
  const btn = document.querySelector('.site-header__menu');
  const drawer = document.getElementById('drawer');
  if (!btn || !drawer) return;
  const closeBtn = drawer.querySelector('[data-drawer-close]');
  let lastFocus = null;

  const open = () => {
    lastFocus = document.activeElement;
    drawer.hidden = false;
    btn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    (closeBtn || drawer.querySelector('a'))?.focus();
  };

  const close = () => {
    drawer.hidden = true;
    btn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    if (lastFocus && typeof lastFocus.focus === 'function') lastFocus.focus();
  };

  btn.addEventListener('click', open);
  closeBtn?.addEventListener('click', close);
  drawer.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      close();
      return;
    }
    if (event.key !== 'Tab') return;
    const focusables = drawer.querySelectorAll('a[href], button:not([disabled])');
    if (!focusables.length) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      last.focus();
      event.preventDefault();
    } else if (!event.shiftKey && document.activeElement === last) {
      first.focus();
      event.preventDefault();
    }
  });
}

/** 展线填充：桌面脊柱 scaleY + 移动进度条 scaleX（用户滚动驱动，非自动画） */
function initScrollFill() {
  const fill = document.querySelector('.spine__fill');
  const bar = document.querySelector('.progress-bar__fill');
  if (!fill && !bar) return;
  const update = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const p = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
    if (fill) fill.style.transform = `scaleY(${p})`;
    if (bar) bar.style.transform = `scaleX(${p})`;
  };
  update();
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
}

/** 当前章节高亮（脊柱 spy） */
function initSpineSpy() {
  const links = Array.from(document.querySelectorAll('[data-spine-link]'));
  if (!links.length || !('IntersectionObserver' in window)) return;
  const sections = links
    .map((l) => document.getElementById(l.dataset.spineLink))
    .filter(Boolean);
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((l) =>
          l.classList.toggle('is-current', l.dataset.spineLink === entry.target.id)
        );
      });
    },
    { rootMargin: '-40% 0px -55% 0px' }
  );
  sections.forEach((s) => io.observe(s));
}

/** 章节揭幕：进入视口时浮现；reduced-motion 下直接可见 */
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  if (reduceMotion() || !('IntersectionObserver' in window)) {
    els.forEach((el) => el.classList.add('is-visible'));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  els.forEach((el) => io.observe(el));
}

function init() {
  initDrawer();
  initScrollFill();
  initSpineSpy();
  initReveal();
}

document.addEventListener('astro:page-load', init);
