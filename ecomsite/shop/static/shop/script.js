    if(localStorage.getItem('cart')==null){
        var cart = {};
        
    }
    else{
        cart = JSON.parse(localStorage.getItem('cart'))
    }

    $(document).on('click','.atc',function(){
        console.log('the button was clicked');

        var item_id = this.id.toString();
        console.log(item_id);

        if(cart[item_id] != undefined){
            quantity = cart[item_id][0] + 1;
            cart[item_id][0] = quantity;
            cart[item_id][2] = cart[item_id][2] + parseFloat(document.getElementById('price'+item_id).innerHTML);
        }
        else{
            quantity = 1;
            price = parseFloat(document.getElementById('price'+item_id).innerHTML);
            nam = document.getElementById('nm' + item_id).innerHTML;
            cart[item_id] = [quantity,nam,price];
        }
        console.log(cart);
        localStorage.setItem('cart',JSON.stringify(cart))

        document.getElementById('cart_function').innerHTML = "cart(" + Object.keys(cart).length + ")"; 
        
        
       
    });
    //https://getbootstrap.com/docs/5.0/components/popovers/#example-enable-popovers-everywhere 👇👇👇👇
    /*var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    document.getElementById('cart_function').setAttribute('data-bs-content',cartString)
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
      return new bootstrap.Popover(popoverTriggerEl)
    });*/

    //display cart function
    displayCart(cart);
    function displayCart(cart) {    //cart is perameter actually

        var cartString = "";
        cartString +=  "<h5>This is your cart</h5>";

        var cartIndex = 1;
        for (var x in cart){
            cartString += cartIndex;
            cartString += document.getElementById("nm" + x).innerHTML +" | " + "Qty:" + cart[x][0] + "</br>" ;
            cartIndex +=1;

        }
        
        //checkout
       //cartString += "<a href='#'><button class='btn btn-warning' id='checkout'>check</button></a>";
         cartString += "<br><a class='btn btn-warning' id='checkout' href='/checkout'>checkout</a>";     

        var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
        document.getElementById("cart_function").setAttribute("data-bs-content",cartString);
        var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
            return new bootstrap.Popover(popoverTriggerEl)
          });

        
    }