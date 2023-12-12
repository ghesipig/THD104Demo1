// -----------------------設定商品頁面圖片切換-------------------------------

// 小圖1
const goodsPhoto1 = document.querySelector('li.goods-photo-item1 > a');

goodsPhoto1.addEventListener('click', function(event) {
    // 停止a標籤預設行為
    event.preventDefault();

    let goodsPhotoLarge = document.querySelector('li.goods-photo-large > a');

    goodsPhotoLarge.outerHTML = `
    <a href="#"><img src="img/products/projuct-scarpa-large1.png"></a>`;

    // ----------------------light box 換圖-------------------
    let lightBoxinner = document.querySelector('div.light-box > div.light-box-inner');

    lightBoxinner.innerHTML=`
    <img src="img/products/projuct-scarpa-large1.png">
    `;
});

// 小圖2
const goodsPhoto2 = document.querySelector('li.goods-photo-item2 > a');

goodsPhoto2.addEventListener('click', function(event) {
    // 停止a標籤預設行為
    event.preventDefault();

    let goodsPhotoLarge = document.querySelector('li.goods-photo-large > a');

    goodsPhotoLarge.outerHTML = `
    <a href="#"><img src="img/products/projuct-scarpa-large2.png"></a>`;


    // ----------------------light box 換圖-------------------
    let lightBoxinner = document.querySelector('div.light-box > div.light-box-inner');

    lightBoxinner.innerHTML=`
    <img src="img/products/projuct-scarpa-large2.png">
    `;
});

// 小圖3
const goodsPhoto3 = document.querySelector('li.goods-photo-item3 > a');

goodsPhoto3.addEventListener('click', function(event) {
    // 停止a標籤預設行為
    event.preventDefault();

    let goodsPhotoLarge = document.querySelector('li.goods-photo-large > a');

    goodsPhotoLarge.outerHTML = `
    <a href="#"><img src="img/products/projuct-scarpa-large3.png"></a>`;


    // ----------------------light box 換圖-------------------
    let lightBoxinner = document.querySelector('div.light-box > div.light-box-inner');

    lightBoxinner.innerHTML=`
    <img src="img/products/projuct-scarpa-large3.png">
    `;
});


// 有空再修改看看(點小圖換大圖)
// -----------------------------------------------------------------------

// const goodsPhoto = document.querySelectorAll('ul.goods-photo > li');

// const goodsPhotoArray = Array.from(goodsPhoto);

// for(let i = 1; i < goodsPhotoArray.length ; i++) {
//     goodsPhotoArray[i].addEventListener('click', function(event) {
//         event.preventDefault();

//         console.log('666');

//         goodsPhotoArray[0].outerHTML =`
//         <li class="goods-photo-large"><a href="#"><img src="img/products/projuct-scarpa-large${i}.png"></a></li>
//         `;
//     });
// }
// -----------------------------有空再試------------------------------------------




// ------------------------------light box-----------------------------------

const goodsPhotoLarge = document.querySelector('.goods-photo-large');
const lightBox = document.querySelector('.light-box');

goodsPhotoLarge.addEventListener('click', function(e) {
    // 停止a標籤預設行為
    e.preventDefault();

    lightBox.classList.toggle('light-box-toggle');
});

lightBox.addEventListener('click', function(e) {
    e.preventDefault(e);

    lightBox.classList.toggle('light-box-toggle')
});

