
    // Load menu from admin (localStorage)
    let menu = JSON.parse(localStorage.getItem("menu")) || [];

    // Cart (session based)
    let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

    const menuDiv = document.getElementById("menu");
    const countSpan = document.getElementById("count");
    const totalSpan = document.getElementById("total");

    function loadMenu() {
        menuDiv.innerHTML = "";

        if (menu.length === 0) {
            menuDiv.innerHTML = "<p>No items available</p>";
            return;
        }

        menu.forEach((item, index) => {
            if (item.availableQty > 0) {
                menuDiv.innerHTML += `
                    <div class="item">
                        <img src="${item.image}">
                        <h3>${item.name}</h3>
                        <p>₹${item.price}</p>
                        <p>Available: ${item.availableQty}</p>
                        <button onclick="addToCart(${index})">
                            Add to Cart
                        </button>
                    </div>
                `;
            }
        });
    }

    function addToCart(index) {
        if (menu[index].availableQty <= 0) {
            alert("Out of stock!");
            return;
        }

        cart.push({
            name: menu[index].name,
            price: menu[index].price
        });

        menu[index].availableQty--;

        sessionStorage.setItem("cart", JSON.stringify(cart));
        localStorage.setItem("menu", JSON.stringify(menu));

        updateCart();
        loadMenu();
    }

    function updateCart() {
        let total = 0;
        cart.forEach(item => total += item.price);

        countSpan.innerText = cart.length;
        totalSpan.innerText = total;
    }

    updateCart();
    loadMenu();
