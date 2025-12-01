const thumbs = document.querySelectorAll('.thumb');
const viewer = document.getElementById('viewer');
const bigImg = viewer.querySelector('.viewer-img');

// открыть по клику на любую миниатюру
thumbs.forEach(img => {
  img.addEventListener('click', () => {
    bigImg.src = img.src;          // показываем ту, по которой кликнули
    viewer.style.display = 'flex';
  });
});

// закрытие по клику по фону
viewer.addEventListener('click', (e) => {
  if (e.target === viewer) {       // кликнули именно по фону, а не по фото
    viewer.style.display = 'none';
  }
});
