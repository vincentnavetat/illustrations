let observer = new IntersectionObserver(function (entries, self) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.setAttribute('src', entry.target.getAttribute('data-lazy-src'));

      self.unobserve(entry.target);
    }
  });
}, config = {
  rootMargin: '20%',
});

document.querySelectorAll('[data-lazy-src]').forEach(image => {
  observer.observe(image);
});
