// RWD後的敘述展開收合
const moreTextBtn = document.querySelectorAll('a.introduce-text-btn-js');
const moreTextDes = document.querySelectorAll('li.introduce-text');

moreTextBtn.forEach(function(item, index) {
    item.addEventListener('click',function(e) {
        e.preventDefault();
        moreTextDes[index].classList.toggle('toggle');
    })
})