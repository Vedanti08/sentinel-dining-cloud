// Local Data (Phase 1)
const menuItems = [
    { name: "Paneer Pizza", price: "₹220", img: "./images/paneer-pizza.jpg" },
    { name: "Veg Burger", price: "₹120", img: "./images/veg-burger.jpg" },
    { name: "Veg Pasta", price: "₹180", img: "./images/veg-pasta.jpg" },
    { name: "Chicken Pizza", price: "₹280", img: "./images/chicken-pizza.jpg" },
    { name: "Chicken Burger", price: "₹150", img: "./images/chicken-burger.webp" },
    { name: "Chicken Pasta", price: "₹220", img: "./images/chicken-pasta.jfif" }
];

function renderMenu() {
    const menuContainer = document.getElementById("menu-container");
    menuContainer.innerHTML = ""; 

    menuItems.forEach(item => {
        const itemCard = document.createElement("div");
        itemCard.className = "item";
        
        itemCard.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.price}</p>
        `;
        
        menuContainer.appendChild(itemCard);
    });
}

document.addEventListener("DOMContentLoaded", renderMenu);