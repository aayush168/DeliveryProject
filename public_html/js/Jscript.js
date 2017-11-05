    $(".add-to-cart").click(function(event){
    event.preventDefault();
    alert("asd");
    var name=$(this).attr("data-name");
    console.log(name);
     var price= Number($(this).attr("data-price"));
     addItemToCart(name,price,1);
     displayCart();
    });

function displayCart(){
    var cartArray = listCart();
    var output ="";
    for (var i in cartArray){
        output+= "<li>"+cartArray[i].name+" "+cartArray[i].count+"</li>";
    }
    $("#show-cart").html(output);
}




var cart =[];
var Item = function(name,price,count){
    this.name = name;
    this.price = price;
    this.count = count;
}
function addItemToCart(name, price, count){
    for (var i in cart){
        if(cart[i].name === name){
            cart[i].count += count;
            return;
        }
    }
    var item= new Item(name, price, count);
    cart.push(item);
    saveCart();
}

function removeItemFromCart(name){
     for (var i in cart){
        if(cart[i].name === name){
           cart[i].count -- ;
           if(cart[i].count === 0){
               cart.splice(i,1);
           }
           break;
        }
    }
    saveCart();
}

function removeItemFromCartAll(name){
    for (var i in cart){
        if (cart[i].name){
            cart.splice(i,1);
             break;
        }
    }
    saveCart();
}
function clearCart(){
    clear = [];
    saveCart();
}

function countCart(){
    var totalCount =0;
    for (var i in cart){
        totalCount += cart[i].count;
    }
    return totalCount;
}

function totalCart(){
    var totalCost = 0;
    for (var i in cart){
        totalCost +=cart[i].price;
    }
    return totalCost;
}

function listCart(){
    var cartCopy = [];
    for (var i in cart){
        var item = cart[i];
        var itemCopy = [];
        for (var p in item){
            itemCopy[p] = item[p];
        }
        cartCopy.push(itemCopy);
    }
    return cartCopy;
}

function saveCart(){
    localStorage.setItem("shoppingCart",JSON.stringify(cart));
}

function loadCart(){
    cart = JSON.parse( localStorage.getItem("shoppingCart"));
}