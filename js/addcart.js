const products=[
    {
        id:0,
        image:'images/camera.jpg',
        title:'camera Digital',
        price:120,
    },
    {
        id:1,
        image:'images/camera2.jpg',
        title:'camera Nikin',
        price:150, 
    },
    {
        id:2,
        image:'images/headphone.jpg',
        title:'headphone iphone',
        price:90,
    },
    {
        id:3,
        image:'images/headphone2.jpg',
        title:'headphone smumsung',
        price:120,
    }
]

const categories=[...new Set(products.map((item)=>
    {return item}))]

    let i=0;

    document.getElementById('root').innerHTML = categories.map((item)=>{
        var {image,title , price } = item;
        return(
            `
            <div class="box">
            <div class="img-box">
            <img class="images" src=${image}></img>
            </div>
            <div class="bottom">
            <p>${title}</p>
            <h2>$ ${price}.00</h2>`+
            "<button onclick='addtocart("+(i++)+")'>Add To Cart</button>"+
            `</div>
            </div>
            `
        )
    }).join('')

    var cart = [];


    function addtocart(a){
        cart.push({...categories[a]})
        displayCart()
    }

    function delElement(a){
        cart.splice(a , 1);
        displayCart()
    }

    function displayCart(a){
        let j=0; let total=0;
        document.getElementById('count').innerHTML = cart.length;
        if(cart.length == 0){
            document.getElementById('cartItem').innerHTML = 'Your cart is empty'
            document.getElementById('total').innerHTML = "$ "+0+".00";
        }
        else{
            document.getElementById('cartItem').innerHTML = cart.map((items)=>{
                var {image , title ,price} = items;
                total = total+price;
                document.getElementById("total").innerHTML = "$ "+total+".00";
                return(
                    `
                    <div class="cart-item">
                    <div class="row-img">
                    <img class="rowimg" src=${image}></img>
                    </div>
                    <p  style="font-size:12px;">${title}</p>
                    <h2 class="price" style="font-size:15px;">$ ${price}.00</h2>`+
                    "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
                    
                )
            }).join('');
        }
    }

    function logout() {
        localStorage.removeItem('email');
        window.location.href = 'index.html';
    }

   
