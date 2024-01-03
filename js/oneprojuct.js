// -----------------------設定商品頁面圖片切換-------------------------------

// 小圖1
// const goodsPhoto1 = document.querySelector('li.goods-photo-item1 > a');

// goodsPhoto1.addEventListener('click', function(event) {
//     // 停止a標籤預設行為
//     event.preventDefault();

//     let goodsPhotoLarge = document.querySelector('li.goods-photo-large > a');

//     goodsPhotoLarge.outerHTML = `
//     <a href="#"><img src="img/products/projuct-scarpa-large1.png"></a>`;

//     // ----------------------light box 換圖-------------------
//     let lightBoxinner = document.querySelector('div.light-box > div.light-box-inner');

//     lightBoxinner.innerHTML=`
//     <img src="img/products/projuct-scarpa-large1.png">
//     `;
// });

// // 小圖2
// const goodsPhoto2 = document.querySelector('li.goods-photo-item2 > a');

// goodsPhoto2.addEventListener('click', function(event) {
//     // 停止a標籤預設行為
//     event.preventDefault();

//     let goodsPhotoLarge = document.querySelector('li.goods-photo-large > a');

//     goodsPhotoLarge.outerHTML = `
//     <a href="#"><img src="img/products/projuct-scarpa-large2.png"></a>`;


//     // ----------------------light box 換圖-------------------
//     let lightBoxinner = document.querySelector('div.light-box > div.light-box-inner');

//     lightBoxinner.innerHTML=`
//     <img src="img/products/projuct-scarpa-large2.png">
//     `;
// });

// // 小圖3
// const goodsPhoto3 = document.querySelector('li.goods-photo-item3 > a');

// goodsPhoto3.addEventListener('click', function(event) {
//     // 停止a標籤預設行為
//     event.preventDefault();

//     let goodsPhotoLarge = document.querySelector('li.goods-photo-large > a');

//     goodsPhotoLarge.outerHTML = `
//     <a href="#"><img src="img/products/projuct-scarpa-large3.png"></a>`;


//     // ----------------------light box 換圖-------------------
//     let lightBoxinner = document.querySelector('div.light-box > div.light-box-inner');

    // lightBoxinner.innerHTML=`
    // <img src="img/products/projuct-scarpa-large3.png">
    // `;
// });

// -----------------------商品頁面圖片切換------------------------
const goodsPhoto = document.querySelectorAll('ul.goods-photo > li.goods-photo-item > a');
// console.log(goodsPhoto);

goodsPhoto.forEach(function(item, index) {
    item.addEventListener('click', function(e) {
        e.preventDefault();

        let imgSrc = e.target.src
        // console.log(imgSrc.replace('small','large'));

        let goodsPhotoLarge = document.querySelector('li.goods-photo-large > a'); 

        goodsPhotoLarge.outerHTML=`
            <a href="#"><img src="${imgSrc.replace('small','large')}"></a>
        `;

        //----------------------light box 換圖-------------------
        let lightBoxinner = document.querySelector('div.light-box > div.light-box-inner');

        lightBoxinner.innerHTML=`
            <img src="${imgSrc.replace('small','large')}">
        `;

    })
} )

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

// --------------------------商品敘述展開收合-------------------

// $('p.btn-description').click(function(e) {
//     e.preventDefault();
//     $('ul.goods-description').slideToggle();
// })

const btnDes = document.querySelector('p.btn-description');


btnDes.addEventListener('click', function(e){
    e.preventDefault();

    let goodsDes = document.querySelector('ul.goods-description');

    goodsDes.classList.toggle('toggle');

})

// ----------------------------------RWD商品圖片輪播-------------------------

const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
  
    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });