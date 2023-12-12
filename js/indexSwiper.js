// ------------------------slide-------------------------------
let counter = 0;
let slide = document.querySelector('.index-slide');

// 帶入目前要顯示第幾張圖
let showCurrent = function(){
    let photoItems = document.querySelectorAll('.index-slide > img');
    let itemToShow = Math.abs(counter % photoItems.length);

    photoItems.forEach(function(i, index){
        i.classList.remove('show');
    });

    photoItems[itemToShow].classList.add('show');
};

function showNext(e){
  counter++;
  showCurrent();

  // 取消a默認動作
  e.preventDefault();
}

function showPrev(e){
  counter--;
  showCurrent();

  // 取消a默認動作
  e.preventDefault();
}

//  按鈕
const nextBtn = document.querySelector('div.index-slide > a.nextBtn');
const prevBtn = document.querySelector('div.index-slide > a.prevBtn');

nextBtn.addEventListener('click', showNext);
prevBtn.addEventListener('click', showPrev);


// 解決座標定位父層高度塌陷
// 為了設置按鈕位置
const slidePhoto2 = document.querySelector('div.index-slide > .index-slide-photo2');
slide.style.height = slidePhoto2.offsetHeight + 'px';

// 高度隨著螢幕寬度調整
// RWD
window.addEventListener('resize', function() {
  slide.style.height = slidePhoto2.offsetHeight + 'px';
});