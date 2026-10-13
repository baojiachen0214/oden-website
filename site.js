(() => {
  const params = new URLSearchParams(location.search);
  const language = params.get('lang') === 'zh' ? 'zh' : 'en';
  document.body.dataset.lang = language;
  document.documentElement.lang = language === 'zh' ? 'zh-Hans' : 'en';
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
})();
