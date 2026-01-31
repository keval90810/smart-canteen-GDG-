
/* ================= MENU ================= */
let menu = JSON.parse(localStorage.getItem("menu")) || [];

function addMenuItem() {
    const name = itemName.value;
    const price = Number(itemPrice.value);
    const maxQty = Number(itemMaxQty.value);
    const image = itemImage.value;

    if (!name || !price || !maxQty || !image) {
        addMsg.innerText = "Fill all fields!";
        return;
    }

    menu.push({
        name,
        price,
        image,
        maxQty,
        availableQty: maxQty
    });

    localStorage.setItem("menu", JSON.stringify(menu));
    addMsg.innerText = "Item Added Successfully!";

    itemName.value = "";
    itemPrice.value = "";
    itemMaxQty.value = "";
    itemImage.value = "";

    showMenu();
}

function restock(index) {
    menu[index].availableQty = menu[index].maxQty;
    localStorage.setItem("menu", JSON.stringify(menu));
    showMenu();
}
function deleteItem(index) {
    const confirmDelete = confirm("Are you sure you want to delete this item?");
    if (!confirmDelete) return;

    menu.splice(index, 1); // remove item
    localStorage.setItem("menu", JSON.stringify(menu));
    showMenu();
}


function showMenu() {
    menuList.innerHTML = "";

    if (menu.length === 0) {
        menuList.innerHTML = "No menu items available.";
        return;
    }

    menu.forEach((item, i) => {
        menuList.innerHTML += `
            <div class="item">
                <b>${item.name}</b><br>
                Price: ₹${item.price}<br>
                Stock: ${item.availableQty} / ${item.maxQty}
                <br><br>
                <button onclick="restock(${i})">Restock</button>
                <button onclick="deleteItem(${i})" style="background:#dc3545;margin-left:5px;">
                    Delete
                </button>
            </div>
        `;
    });
}


/* ================= ORDERS ================= */
function getOrders() {
    return JSON.parse(localStorage.getItem("orders")) || [];
}

function displayOrders() {
    const orders = getOrders();
    ordersList.innerHTML = "";

    if (orders.length === 0) {
        ordersList.innerHTML = "No orders yet.";
        return;
    }

    orders.forEach(order => {
        ordersList.innerHTML += `
            <div class="order-box">
                <b>Order ID:</b> ${order.id}<br>
                <b>User:</b> ${order.userId}<br>
                <b>Email:</b> ${order.email}<br>
                <b>Items:</b> ${order.items.map(i => i.name).join(", ")}<br>
                <b>Total:</b> ₹${order.total}<br>
                <b>Payment:</b> ${order.payment}<br>
                <b>Status:</b> ${order.status}
            </div>
        `;
    });
}

function updateStatus() {
    const id = orderId.value.trim();
    const newStatus = status.value;

    let orders = getOrders();
    const index = orders.findIndex(o => o.id === id);

    if (index === -1) {
        statusMsg.innerText = "❌ Order not found!";
        return;
    }

    const order = orders[index];
    order.status = newStatus;

    if (newStatus === "Ready") {
        // 📧 Simulated email
        alert(
            `📧 Email Sent!\n\n` +
            `To: ${order.email}\n\n` +
            `Hello ${order.userId},\n` +
            `Your order (${order.id}) is READY for pickup 🍽️\n` +
            `Total: ₹${order.total}`
        );

        // ❌ Remove from admin orders
        orders.splice(index, 1);
    }

    localStorage.setItem("orders", JSON.stringify(orders));

    statusMsg.innerText = "✅ Status updated successfully!";
    orderId.value = "";

    displayOrders();
}



/* ================= INIT ================= */
showMenu();
displayOrders();
