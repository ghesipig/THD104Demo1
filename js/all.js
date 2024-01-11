// // -------------------------設定漢堡選單----------------------------------------
// const hamburgerTag = document.querySelector('.showmenu');

// hamburgerTag.addEventListener('click', function(event) {
//     event.preventDefault();

//     // let menu = document.querySelector('ul.menu');

//     menu.classList.toggle('menu-toggle');

// });

// ------------------------設定往下滑換成小header--------------------------------

// const headerSwitch = document.querySelector('header');
// const menu = document.querySelector('ul.menu');
// const hamburgerTag = document.querySelector('.showmenu');

// // 初始狀態
// let isMenuOpen = false;


// window.addEventListener('scroll', function () {
//     if (window.scrollY > 99) {
//         headerSwitch.classList.add('switch');
//     } else {
//         headerSwitch.classList.remove('switch');
//     }
// });


// 漢堡選單開關
// hamburgerTag.addEventListener('click', function (event) {
//     event.preventDefault();

//     isMenuOpen = !isMenuOpen;

//     if (isMenuOpen) {
//         menu.style.top = headerSwitch.offsetHeight + 'px';
//     } else {
//         menu.style.top = '-650px';
//     }

// });


// ----------------------------解決menu位置問題------------------------------

const headerSwitch = document.querySelector('header');
const menuRwd = document.querySelector('ul.menu-rwd');
const hamburgerTag = document.querySelector('.showmenu');

let isMenuOpen = false;

// 上下滾動更換header樣式
window.addEventListener('scroll', function () {

    if (window.scrollY > 99) {
        headerSwitch.classList.add('switch');

        // 更換menuRWD位置
        menuRwd.style.top = headerSwitch.offsetHeight + 'px';
    } else {
        headerSwitch.classList.remove('switch');
        menuRwd.style.top = headerSwitch.offsetHeight + 'px';
    }

});

hamburgerTag.addEventListener('click', function (e) {
    e.preventDefault();

    // 每次點擊更換狀態
    isMenuOpen = !isMenuOpen;

    if (isMenuOpen) {
        menuRwd.style.top = headerSwitch.offsetHeight + 'px';
        menuRwd.classList.add('menu-open');

    } else {
        menuRwd.classList.remove('menu-open');
    }
});


// -------------------------------搜尋---------------------------------------------

const btnSearch = document.querySelector('.menu-icon-search');
const btnSearchRwd = document.querySelector('.menu-icon-rwd-search');
const searchToggle = document.querySelector('.search-light-box');

btnSearch.addEventListener('click', function(e){
    e.preventDefault();
    
    searchToggle.classList.toggle('search-light-box-toggle');
});

btnSearchRwd.addEventListener('click', function(e){
    e.preventDefault();

    searchToggle.classList.toggle('search-light-box-toggle');
});

document.addEventListener('click', function(e){

    if(e.target.classList.contains('search-light-box')){
        searchToggle.classList.toggle('search-light-box-toggle');
    }
})



// -------------------------購物車----------------------------------

const btn_cart = document.querySelector('a.menu-icon-cart');
const btn_cart_rwd = document.querySelector('a.menu-icon-cart-rwd');
const side_cart = document.querySelector('div.cart');

// 購物車開關按鈕
btn_cart.addEventListener('click', function(e) {
    e.preventDefault();

    side_cart.classList.toggle('toggle')

})

// RWD後的購物車開關按鈕
btn_cart_rwd.addEventListener('click', function(e) {
    e.preventDefault();

    side_cart.classList.toggle('toggle')
})

document.addEventListener('click', function(e){
    if(e.target.classList.contains('cart')){
        side_cart.classList.remove('toggle')
    }

    if(e.target.classList.contains('cart-menu-close-btn')){
        side_cart.classList.remove('toggle')
    }
})
    

// 從localStorage提取購物車商品資料
function get_goods() {
    let goodsLocalStorge = JSON.parse(localStorage.getItem('goodsLocalStorge'))

    if(goodsLocalStorge){
        // console.log(goodsLocalStorge);

        let list_html = '';

        goodsLocalStorge.forEach(function(item, index) {
            // console.log(item);

            list_html = list_html + `
                <div class="product-row">
                    <img  class="cart-image" src="${item.localStorgeImgSrc}">
                    <div class="product-row-inner">
                        <h1 class="text-h3">${item.localStorgeItem}</h1>
                        <span class ="cart-price text-p1">NT$${item.localStorgePrice}</span>
                        <input class="product-quantity " type="number" value="1">
                        <i id="close-btn" class="fas fa-times cart-item-remove-btn"></i>
                    </div>    
                </div>
            `;
        })

        let productRows = document.querySelector('.product-rows');
        productRows.innerHTML = list_html;
        
        updateCartPrice()
    }
    
}

// 執行函式
get_goods();


// 商品加入購物車

const add_to_cart = document.querySelectorAll('.add-to-cart-js')

add_to_cart.forEach(function(item, index) {
    item.addEventListener('click', function(e) {
        e.preventDefault();

        // console.log('加入購物車click事件');
        addToCartClicked(e);
    })
})

function addToCartClicked (e) {

    let product_item = e.target.parentElement.querySelector('.product-item-js').innerHTML

    // console.log(product_item);

    let price = parseInt(e.target.parentElement.querySelector('.product-price-js').innerHTML.replace('NT$', ''))

    let imageSrc = e.target.parentElement.querySelector('.product-img-js').src

    // console.log(imageSrc);

    addItemToCart(price, imageSrc, product_item);

    // console.log('這裡是clicked函式');

    updateCartPrice()
}


function addItemToCart(price, imageSrc, product_item) {
    let productRow = document.createElement('div');
    productRow.classList.add('product-row');

    let productRows = document.querySelector('.product-rows');

    // let cartImage = document.querySelectorAll('.cart-image');

    let cartItemName = document.querySelectorAll('div.product-row-inner > h1')

    // 多次點擊相同商品

    // 圖片路徑比較，先留著
    // for (let i = 0; i < cartImage.length; i++){
    //     if (cartImage[i].src == imageSrc){

    //     let dbClickQuantityInput = document.querySelectorAll('.product-quantity')

    //     dbClickQuantityInput[i].value = parseInt(dbClickQuantityInput[i].value) + 1

    //     updateCartPrice();

    //     // 用foreach的話無法跳出函式
    //     return;

    //     }
    // }

    for (let i = 0; i < cartItemName.length; i++){
        if (cartItemName[i].innerHTML == product_item){

        let dbClickQuantityInput = document.querySelectorAll('.product-quantity')

        dbClickQuantityInput[i].value = parseInt(dbClickQuantityInput[i].value) + 1

        updateCartPrice();

        // 用foreach的話無法跳出函式
        return;

        }
    }

    productRow.innerHTML =`   
        <img  class="cart-image" src="${imageSrc}">
        <div class="product-row-inner">
            <h1 class="text-h3">${product_item}</h1>
            <span class ="cart-price text-p1">NT$${price}</span>
            <input class="product-quantity " type="number" value="1">
            <i id="close-btn" class="fas fa-times cart-item-remove-btn"></i>
        </div>    
    `;

    productRows.append(productRow);


    // ------------------點擊的商品資料加入localStorge----------------------------

    let goods = {
        'localStorgeItem' : product_item,
        'localStorgeImgSrc' : imageSrc,
        'localStorgePrice' : price
    };

    let goodsLocalStorge = JSON.parse(localStorage.getItem('goodsLocalStorge'))  //陣列

    // console.log(goods.localStorgeItem);

    if (goodsLocalStorge) {
        let itemExists = false;
    
        for (let i = 0; i < goodsLocalStorge.length; i++) {
            if (goodsLocalStorge[i].localStorgeItem == goods.localStorgeItem) {
                itemExists = true
                break;
            }
        }
    
        if (itemExists == false) {
            goodsLocalStorge.unshift(goods)
        }
    
    } else {
        goodsLocalStorge = [goods];
    }
    
    localStorage.setItem('goodsLocalStorge', JSON.stringify(goodsLocalStorge)) 
    
    // console.log(goodsLocalStorge);

    // 更改數量
    productRow.querySelectorAll('.product-quantity')[0].addEventListener('change', changeQuantity)

    // 更新金額
    updateCartPrice()
    
    // console.log('這裡是addtItemToCart函式');
}

// 從購物車刪除商品
document.addEventListener('click', function(e) {
    if(e.target.classList.contains('cart-item-remove-btn')){
        removeItem(e);
    }
})

function removeItem (e) {
    e.target.parentElement.parentElement.remove()

    // e.target.parentElement.parentElement.outerHTML = '';

    // 從localStorage刪除資料
    // console.log(e.target.parentElement.querySelector('h1').innerHTML);
    let goodsItemName = e.target.parentElement.querySelector('h1').innerHTML

    let goodsLocalStorge = JSON.parse(localStorage.getItem('goodsLocalStorge'))

    let update_goodsLocalStorge = goodsLocalStorge.filter(function(item, index) {
        return goodsItemName != item.localStorgeItem;
    })

    localStorage.setItem('goodsLocalStorge', JSON.stringify(update_goodsLocalStorge))

    updateCartPrice()
}

// 購物車數量
const quantityInput = document.querySelectorAll('.product-quantity');
// console.log(quantityInput);

quantityInput.forEach(function(item, index) {
    item.addEventListener('change', changeQuantity)
})

function changeQuantity(e) {   
    if(isNaN(e.target.value) || e.target.value <= 0) {
        e.target.value = 1;
        alert('單位數量不能小於1')
    }

    // 變更金額
    updateCartPrice()
}

// 更新金額

function updateCartPrice() {
    let productRow = document.querySelectorAll('.product-row')
    
    let total = 0;
    
    productRow.forEach(function(item, index) {
        
        let price = parseInt(item.querySelectorAll('.cart-price')[0].innerHTML.replace('NT$', ''))
        
        let quantity = item.querySelectorAll('.product-quantity')[0].value
        
        total = total + (price * quantity)
    })
        
    document.querySelectorAll('.total-price')[0].innerHTML = 'NT$' + total

    // console.log('這裡是update函式');

    // 購物車小紅圈數量
    let redCircleQuantity = document.querySelectorAll('.menu-icon-cartnumber')[0]
    redCircleQuantity.innerHTML = productRow.length
}

// localStorage.clear();

//test sourcetree