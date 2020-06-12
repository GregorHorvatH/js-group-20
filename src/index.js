'use strict';

const refs = {
  progress: document.querySelector('.progress'),
  sections: document.querySelector('.sections'),
  sectionList: document.querySelectorAll('.section'),
};

refs.progress.value = refs.sections.clientHeight;
refs.progress.max = refs.sections.scrollHeight;

// ============
// progressbar
// ============
refs.sections.addEventListener('scroll', handleScroll);

function handleScroll(e) {
  refs.progress.value = e.target.scrollTop + refs.sections.clientHeight;
}

// ============
// intersection observer API
// ============
const options = {
  threshold: 0.2, // 0-1
};

const sectionObserver = new IntersectionObserver(onEntry, options);
refs.sectionList.forEach(section => sectionObserver.observe(section));

function onEntry(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const { id } = entry.target.dataset;
      const prev = document.querySelector('li.active');
      const menuItem = document.querySelector(`li[data-id="${id}"]`);

      const img = entry.target.querySelector('img');
      const { url } = img.dataset;
      img.src = url;

      if (prev) {
        prev.classList.remove('active');
      }

      menuItem.classList.add('active');
    }
  });
}
