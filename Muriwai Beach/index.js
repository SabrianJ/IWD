const bannerWrapper = document.querySelector('.bannerWrapper');
const bannerTop = document.querySelector('.bannerTop');
const bannerTopSub = document.querySelector('.bannerTopSub');
const guaranteeLine = document.querySelector('.guaranteeLine');
const findOutMore = document.querySelector('.findOutMore');
const replayButton = document.querySelector('.replayButton');
const banner = document.querySelector('.banner');

document.querySelector('.replayButton').addEventListener('click', () => {
  bannerWrapper.classList.remove('bannerWrapper');
  window.requestAnimationFrame(function() {
    bannerWrapper.classList.add('bannerWrapper');
  });


bannerTop.classList.remove('bannerTop');
window.requestAnimationFrame(function() {
  bannerTop.classList.add('bannerTop');
});


bannerTopSub.classList.remove('bannerTopSub');
window.requestAnimationFrame(function() {
bannerTopSub.classList.add('bannerTopSub');
});


guaranteeLine.classList.remove('guaranteeLine');
window.requestAnimationFrame(function() {
guaranteeLine.classList.add('guaranteeLine');
});


findOutMore.classList.remove('findOutMore');
window.requestAnimationFrame(function() {
findOutMore.classList.add('findOutMore');
});


replayButton.classList.remove('replayButton');
window.requestAnimationFrame(function() {
replayButton.classList.add('replayButton');
});

banner.classList.remove('bannerWrapper');
window.requestAnimationFrame(function() {
banner.classList.add('bannerWrapper');
});
});

function nextButtonClick(){

}
