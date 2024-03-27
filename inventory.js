// Initialize an empty inventory object
let inventory = {};

// Function to add a product to the inventory
function addProduct(id, name, quantity) {
    // Check if the product already exists
    if (inventory.hasOwnProperty(id)) {
        // If it exists, update the quantity
        inventory[id].quantity += quantity;
    } else {
        // If it doesn't exist, add it to the inventory
        inventory[id] = { name: name, quantity: quantity };
    }
}

// Function to display the current inventory
function displayInventory() {
    console.log("Current Inventory:");
    console.log("ID \t| Name \t| Quantity");
    console.log("--------------------------");
    for (let id in inventory) {
        console.log(id + "\t| " + inventory[id].name + "\t| " + inventory[id].quantity);
    }
}

// Function to find a product by ID
function findProduct(id) {
    if (inventory.hasOwnProperty(id)) {
        console.log("Product ID: " + id);
        console.log("Name: " + inventory[id].name);
        console.log("Quantity: " + inventory[id].quantity);
    } else {
        console.log("Product with ID " + id + " not found.");
    }
}

// Test cases
addProduct("001", "Keyboard", 10);
addProduct("002", "Mouse", 15); 
addProduct("001", "Keyboard", 5); // Adding more quantity for existing product
displayInventory();
findProduct("001");
findProduct("003"); // Product not found

// Exporting functions for testing purposes
module.exports = {
    addProduct,
    displayInventory,
    findProduct
};
