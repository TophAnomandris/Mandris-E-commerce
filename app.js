//navbar
const close = document.getElementById('close')
const bar = document.getElementById('bar')
const nav = document.getElementById('navbar')

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active')
    })
}
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active')
    })
}

//product page and arrangements
const product = [
    {id: 1,
    title: "Cartoon Astronaut T-Shirts",
    category: "Shirts",
    price: 6000,
    img: "img/products/f1.jpg",
    desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis iusto nam esse ab accusantium fuga itaque eveniet exercitationem doloremque, aliquam totam aut illo illum iste non, pariatur cum deserunt magnam!`
    },
    {id: 2,
    title: "Cartoon Astronaut T-Shirts",
    category: "Shirts",
    price: 6500,
    img: "img/products/f2.jpg",
    desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis iusto nam esse ab accusantium fuga itaque eveniet exercitationem doloremque, aliquam totam aut illo illum iste non, pariatur cum deserunt magnam!`
    },
    {id: 3,
    title: "Cartoon Astronaut T-Shirts",
    category: "Shirts",
    price: 6500,
    img: "img/products/f3.jpg",
    desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis iusto nam esse ab accusantium fuga itaque eveniet exercitationem doloremque, aliquam totam aut illo illum iste non, pariatur cum deserunt magnam!`
    },
    {id: 4,
    title: "Cartoon Astronaut T-Shirts",
    category: "Shirts",
    price: 6500,
    img: "img/products/f4.jpg",
    desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis iusto nam esse ab accusantium fuga itaque eveniet exercitationem doloremque, aliquam totam aut illo illum iste non, pariatur cum deserunt magnam!`
    },
    {id: 5,
    title: "Cartoon Astronaut T-Shirts",
    category: "Shirts",
    price: 6000,
    img: "img/products/f5.jpg",
    desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis iusto nam esse ab accusantium fuga itaque eveniet exercitationem doloremque, aliquam totam aut illo illum iste non, pariatur cum deserunt magnam!`
    },
    {id: 6,
    title: "Long Lumberjack classic",
    category: "Shirts",
    price: 8000,
    img: "img/products/f6.jpg",
    desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis iusto nam esse ab accusantium fuga itaque eveniet exercitationem doloremque, aliquam totam aut illo illum iste non, pariatur cum deserunt magnam!`
    },
    {id: 7,
    title: "Cartoon Astronaut Pants",
    category: "Pants",
    price: 7000,
    img: "img/products/f7.jpg",
    desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis iusto nam esse ab accusantium fuga itaque eveniet exercitationem doloremque, aliquam totam aut illo illum iste non, pariatur cum deserunt magnam!`
    },
    {id: 8,
    title: "V Gracila classic top",
    category: "Shirts",
    price: 6000,
    img: "img/products/f8.jpg",
    desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis iusto nam esse ab accusantium fuga itaque eveniet exercitationem doloremque, aliquam totam aut illo illum iste non, pariatur cum deserunt magnam!`
    },
    {id: 9,
    title: "Long sleeve casual shirt",
    category: "Shirts",
    price: 7000,
    img: "img/products/n1.jpg",
    desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis iusto nam esse ab accusantium fuga itaque eveniet exercitationem doloremque, aliquam totam aut illo illum iste non, pariatur cum deserunt magnam!`
    },
    {id: 10,
    title: "Classic Long Sleeve Shirts",
    category: "Shirts",
    price: 7500,
    img: "img/products/n2.jpg",
    desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis iusto nam esse ab accusantium fuga itaque eveniet exercitationem doloremque, aliquam totam aut illo illum iste non, pariatur cum deserunt magnam!`
    },
    {id: 11,
    title: "Long Sleeve Casual Shirt",
    category: "Shirts",
    price: 7000,
    img: "img/products/n3.jpg",
    desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis iusto nam esse ab accusantium fuga itaque eveniet exercitationem doloremque, aliquam totam aut illo illum iste non, pariatur cum deserunt magnam!`
    },
    {id: 12,
    title: "Short Sleeve Patterned Shirts",
    category: "Shirts",
    price: 6500,
    img: "img/products/n4.jpg",
    desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis iusto nam esse ab accusantium fuga itaque eveniet exercitationem doloremque, aliquam totam aut illo illum iste non, pariatur cum deserunt magnam!`
    },
    {id: 13,
    title: "Classic Long Sleeve Shirts",
    category: "Shirts",
    price: 7500,
    img: "img/products/n5.jpg",
    desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis iusto nam esse ab accusantium fuga itaque eveniet exercitationem doloremque, aliquam totam aut illo illum iste non, pariatur cum deserunt magnam!`
    },
    {id: 14,
    title: "Casual Striped Shorts",
    category: "Pants",
    price: 6500,
    img: "img/products/n6.jpg",
    desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis iusto nam esse ab accusantium fuga itaque eveniet exercitationem doloremque, aliquam totam aut illo illum iste non, pariatur cum deserunt magnam!`
    },
    {id: 15,
    title: "Casual Carton Long Sleeve",
    category: "Shirts",
    price: 7000,
    img: "img/products/n7.jpg",
    desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis iusto nam esse ab accusantium fuga itaque eveniet exercitationem doloremque, aliquam totam aut illo illum iste non, pariatur cum deserunt magnam!`
    },
    {id: 16,
    title: "Short Sleeve Casual Shirt",
    category: "Shirts",
    price: 6000,
    img: "img/products/n8.jpg",
    desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis iusto nam esse ab accusantium fuga itaque eveniet exercitationem doloremque, aliquam totam aut illo illum iste non, pariatur cum deserunt magnam!`
    }
]

const sectionCenter = document.querySelector('#f-products');
const newArrivals = document.querySelector('#new-arrivals')
const shopItems = document.querySelector('#shopitems')
const singleProduct = document.querySelector('.pro')
const singleProImg = document.querySelector('.single-pro-image')

//Featured products
window.addEventListener('DOMContentLoaded', function(){displayProductItems(product.slice(0, 8))})

function displayProductItems(productItems){
    displayProduct = productItems.map(function(item){
        //console.log(item)
        //return`<h1>${item.title}</h1>`
        return `<div class="pro">
                <img src=${item.img} alt="">
                <div class="des">
                    <span>adidas</span>
                    <h5>${item.title}</h5>
                    <div class="star">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <h4>#${item.price}</h4>
                </div>
                <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
            </div>
        `
    })
    displayProduct = displayProduct.join("")
    sectionCenter.innerHTML = displayProduct
}


//New Arrivals
window.addEventListener('DOMContentLoaded', function(){displayNewArrivals(product.slice(8, 16))})

function displayNewArrivals(productItems){
    displayProduct = productItems.map(function(item){
        //console.log(item)
        //return`<h1>${item.title}</h1>`
        return `<div class="pro">
                <img src=${item.img} alt="">
                <div class="des">
                    <span>adidas</span>
                    <h5>${item.title}</h5>
                    <div class="star">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <h4>#${item.price}</h4>
                </div>
                <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
            </div>
        `
    })
    displayProduct = displayProduct.join("")
    newArrivals.innerHTML = displayProduct
}

//Shop page
window.addEventListener('DOMContentLoaded', function(){displayShopItems(product)})

function displayShopItems(productItems){
    displayProduct = productItems.map(function(item){
        //console.log(item)
        //return`<h1>${item.title}</h1>`
        return `<div class="pro" onclick="window.location.href='sproduct.html'" >
                <img src=${item.img} alt="">
                <div class="des">
                    <span>adidas</span>
                    <h5>${item.title}</h5>
                    <div class="star">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <h4>#${item.price}</h4>
                </div>
                <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
            </div>
        `
    })
    displayProduct = displayProduct.join("")
    shopItems.innerHTML = displayProduct
}



singleProduct.addEventListener(('click'), function(){loadSingleProduct(product)})

function loadSingleProduct(productItems){
    displayProduct = productItems.map(function(item){
        return `<img src="${item.img}" width="100%" id="mainimg" alt="">`
    })
    displayProduct = displayProduct.join("")
    singleProImg.innerHTML = displayProduct
}