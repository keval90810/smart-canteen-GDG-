// let cart = [];
//     let total = 0;

//     function addItem(name, price) {
//         cart.push({name, price});
//         total += price;
//         displayCart();
//     }

//     function removeItem(index) {
//         total -= cart[index].price;
//         cart.splice(index, 1);
//         displayCart();
//     }

//     function displayCart() {
//         const cartDiv = document.getElementById("cartItems");
//         cartDiv.innerHTML = "";
//         cart.forEach((item, index) => {
//             cartDiv.innerHTML += `
//                 <div class="cart-item">
//                     ${item.name} - ₹${item.price}
//                     <button onclick="removeItem(${index})">Remove</button>
//                 </div>
//             `;
//         });
//         document.getElementById("totalPrice").innerText = total;
//     }

//     function showCOD() {
//         document.getElementById("codSection").classList.remove("hidden");
//         document.getElementById("gpaySection").classList.add("hidden");
//     }

//     function showGPay() {
//         document.getElementById("gpaySection").classList.remove("hidden");
//         document.getElementById("codSection").classList.add("hidden");
//     }

//     function placeOrder() {
//         const paymentMethod = document.querySelector('input[name="payment"]:checked');
//         const confirmBox = document.getElementById("confirmation");

//         if (cart.length === 0) {
//             confirmBox.innerText = "Your cart is empty!";
//             confirmBox.style.color = "red";
//             return;
//         }

//         if (!paymentMethod) {
//             confirmBox.innerText = "Please select a payment method!";
//             confirmBox.style.color = "red";
//             return;
//         }

//         if (paymentMethod.value === "cod") {
//             const phone = document.getElementById("phone").value;
//             if (phone.length !== 10) {
//                 confirmBox.innerText = "Enter a valid 10-digit phone number!";
//                 confirmBox.style.color = "red";
//                 return;
//             }
//             confirmBox.innerText = `Order placed! Confirmation message sent to ${phone}. Pay ₹${total} on delivery.`;
//         }

//         if (paymentMethod.value === "gpay") {
//             const gpayId = document.getElementById("gpayId").value;
//             if (gpayId === "") {
//                 confirmBox.innerText = "Enter a valid Google Pay ID!";
//                 confirmBox.style.color = "red";
//                 return;
//             }
//             confirmBox.innerText = `Payment request sent to ${gpayId}. Please complete payment of ₹${total} via Google Pay.`;
//         }

//         confirmBox.style.color = "green";
//     }



    // let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // function saveCart() {
    //     localStorage.setItem("cart", JSON.stringify(cart));
    //     displayCart();
    // }

    // function addItem(name, price) {
    //     cart.push({name, price});
    //     saveCart();
    // }

    // function removeItem(index) {
    //     cart.splice(index, 1);
    //     saveCart();
    // }

    // function displayCart() {
    //     const cartDiv = document.getElementById("cartItems");
    //     cartDiv.innerHTML = "";

    //     let total = 0;

    //     cart.forEach((item, index) => {
    //         total += item.price;
    //         cartDiv.innerHTML += `
    //             <div class="cart-item">
    //                 ${item.name} - ₹${item.price}
    //                 <button onclick="removeItem(${index})">Remove</button>
    //             </div>
    //         `;
    //     });

    //     document.getElementById("totalPrice").innerText = total;
    // }

    // function showCOD() {
    //     document.getElementById("codSection").classList.remove("hidden");
    //     document.getElementById("gpaySection").classList.add("hidden");
    // }

    // function showGPay() {
    //     document.getElementById("gpaySection").classList.remove("hidden");
    //     document.getElementById("codSection").classList.add("hidden");
    // }

    // function placeOrder() {
    //     const paymentMethod = document.querySelector('input[name="payment"]:checked');
    //     const confirmBox = document.getElementById("confirmation");

    //     if (cart.length === 0) {
    //         confirmBox.innerText = "Your cart is empty!";
    //         confirmBox.style.color = "red";
    //         return;
    //     }

    //     if (!paymentMethod) {
    //         confirmBox.innerText = "Select a payment method!";
    //         confirmBox.style.color = "red";
    //         return;
    //     }

    //     let total = cart.reduce((sum, item) => sum + item.price, 0);

    //     if (paymentMethod.value === "cod") {
    //         const phone = document.getElementById("phone").value;
    //         confirmBox.innerText = `Order placed! SMS sent to ${phone}. Pay ₹${total} on delivery.`;
    //     }

    //     if (paymentMethod.value === "gpay") {
    //         const gpayId = document.getElementById("gpayId").value;
    //         confirmBox.innerText = `Payment request sent to ${gpayId} for ₹${total}.`;
    //     }

    //     confirmBox.style.color = "green";

    //     // Clear cart after order
    //     localStorage.removeItem("cart");
    //     cart = [];
    //     displayCart();
    // }

    // displayCart(); // Load cart on page open



    // let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

    // function saveCart() {
    //     sessionStorage.setItem("cart", JSON.stringify(cart));
    //     displayCart();
    // }

    // function addItem(name, price) {
    //     cart.push({name, price});
    //     saveCart();
    // }

    // function removeItem(index) {
    //     cart.splice(index, 1);
    //     saveCart();
    // }

    // function displayCart() {
    //     const cartDiv = document.getElementById("cartItems");
    //     cartDiv.innerHTML = "";

    //     let total = 0;

    //     cart.forEach((item, index) => {
    //         total += item.price;
    //         cartDiv.innerHTML += `
    //             <div class="cart-item">
    //                 ${item.name} - ₹${item.price}
    //                 <button onclick="removeItem(${index})">Remove</button>
    //             </div>
    //         `;
    //     });

    //     document.getElementById("totalPrice").innerText = total;
    // }

    // function showCOD() {
    //     document.getElementById("codSection").classList.remove("hidden");
    //     document.getElementById("gpaySection").classList.add("hidden");
    // }

    // function showGPay() {
    //     document.getElementById("gpaySection").classList.remove("hidden");
    //     document.getElementById("codSection").classList.add("hidden");
    // }

    // function placeOrder() {
    //     const paymentMethod = document.querySelector('input[name="payment"]:checked');
    //     const confirmBox = document.getElementById("confirmation");

    //     if (cart.length === 0) {
    //         confirmBox.innerText = "Your cart is empty!";
    //         confirmBox.style.color = "red";
    //         return;
    //     }

    //     let total = cart.reduce((sum, item) => sum + item.price, 0);

    //     if (paymentMethod.value === "cod") {
    //         const phone = document.getElementById("phone").value;
    //         confirmBox.innerText = `Order placed! SMS sent to ${phone}. Pay ₹${total} on delivery.`;
    //     }

    //     if (paymentMethod.value === "gpay") {
    //         const gpayId = document.getElementById("gpayId").value;
    //         confirmBox.innerText = `Payment request sent to ${gpayId} for ₹${total}.`;
    //     }

    //     confirmBox.style.color = "green";

    //     // Clear cart after order
    //     sessionStorage.removeItem("cart");
    //     cart = [];

        
    //     displayCart();
    // }

    // displayCart();

    // Generate user ID if not already created





    let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

    // ⭐ Generate User ID per session
    let userId = sessionStorage.getItem("userId");
    if (!userId) {
        userId = "USER-" + Math.floor(Math.random() * 100000);
        sessionStorage.setItem("userId", userId);
    }

    function saveCart() {
        sessionStorage.setItem("cart", JSON.stringify(cart));
        displayCart();
    }

    function addItem(name, price) {
        cart.push({name, price});
        saveCart();
    }

    function removeItem(index) {
        cart.splice(index, 1);
        saveCart();
    }

    function displayCart() {
        const cartDiv = document.getElementById("cartItems");
        cartDiv.innerHTML = "";

        let total = 0;

        cart.forEach((item, index) => {
            total += item.price;
            cartDiv.innerHTML += `
                <div class="cart-item">
                    ${item.name} - ₹${item.price}
                    <button onclick="removeItem(${index})">Remove</button>
                </div>
            `;
        });

        document.getElementById("totalPrice").innerText = total;
    }

    function showCOD() {
        document.getElementById("codSection").classList.remove("hidden");
        document.getElementById("gpaySection").classList.add("hidden");
    }

    function showGPay() {
        document.getElementById("gpaySection").classList.remove("hidden");
        document.getElementById("codSection").classList.add("hidden");
    }

    function placeOrder() {
        const paymentMethod = document.querySelector('input[name="payment"]:checked');
        const confirmBox = document.getElementById("confirmation");

        if (cart.length === 0) {
            confirmBox.innerText = "Your cart is empty!";
            confirmBox.style.color = "red";
            return;
        }

        if (!paymentMethod) {
            confirmBox.innerText = "Please select payment method!";
            confirmBox.style.color = "red";
            return;
        }

        let total = cart.reduce((sum, item) => sum + item.price, 0);

        // ⭐ Generate unique Order ID
        let orderId = "ORD-" + Date.now();

        if (paymentMethod.value === "cod") {
            const phone = document.getElementById("phone").value;
            confirmBox.innerText = `Order ${orderId} placed! SMS sent to ${phone}. Pay ₹${total} on delivery.`;
        }

        if (paymentMethod.value === "gpay") {
            const gpayId = document.getElementById("gpayId").value;
            confirmBox.innerText = `Order ${orderId} placed! Payment request sent to ${gpayId} for ₹${total}.`;
        }

        confirmBox.style.color = "green";

        // ⭐ Save order for Admin Panel
        let orders = JSON.parse(localStorage.getItem("orders")) || [];

        orders.push({
            id: orderId,
            userId: userId,
            items: cart,
            total: total,
            payment: paymentMethod.value.toUpperCase(),
            status: "Preparing"
        });

        localStorage.setItem("orders", JSON.stringify(orders));

        // Clear cart after order
        sessionStorage.removeItem("cart");
        cart = [];
        displayCart();
    }

    displayCart();


