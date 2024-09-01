// Question 1 Task 1: Implement a conditional statement to check if a user is logged in before allowing them to add items to the cart.
function isLoggedIn() {
    // Simulated login check (replace with real authentication logic)
    return true; // Assume the user is logged in
}

// Task 2: Use a loop to display the list of available products to the user and add functionality for users to add products to their cart.
const products = [
    { name: "Laptop", price: 1000},
    { name: "Phone", price: 500},
    { name: "Headphones", price: 100}
];

const cart = [];

function displayProduct() {
    console.log("Available Products:");
    products.forEach((product, index) => {
        console.log(`${index + 1}. ${product.name} - $${product.price}`);
    });
}

function addToCart(ProductIndex) {
    if (!isLoggedIn()) {
        console.log("Please log in to add items to your cart.");
        return;
    }

    const product = products[productIndex];
    cart.push(product);
    console.log(`${product.name} has been added to your cart.`);

}

// Task 3: Calculate the total cost of the items in the cart and display it to the user.
function calculateTotal() {
    let total = 0;
    cart.forEach(product => {
        total += product.price;
    });
    console.log(`Total cost: $${total}`);

}

// Simualting user interaction
displayProducts();
addToCart(0); // Add laptop to cart
addToCart(1); // Add phone to cart
calculateTotal(); // Diplay total cost
