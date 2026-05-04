// The URL of your Cloud Database
const cloudAPI = "https://api.npoint.io/b668944783634b3152fa";

// Cloud Computing Feature: Fetching data asynchronously from a cloud API
async function fetchCloudMenu() {
    const menuContainer = document.getElementById("menu-container");
    menuContainer.innerHTML = "<h3 style='color: white;'>Connecting to Cloud Database...</h3>";

    try {
        // Calling the Cloud API
        const response = await fetch(cloudAPI);
        const menuItems = await response.json();
        
        // Clear the loading text
        menuContainer.innerHTML = ""; 

        // Draw the menu using the cloud data
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

    } catch (error) {
        menuContainer.innerHTML = "<h3 style='color: red;'>Failed to connect to cloud server.</h3>";
        console.error("Cloud Error:", error);
    }
}

// Run the cloud fetch function when the page loads
document.addEventListener("DOMContentLoaded", fetchCloudMenu);
