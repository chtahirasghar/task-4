// Define the Product class
class Product {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
}
const product1 = new Product('Laptop', 1000, 5);
const product2 = new Product('Phone', 500, 10);
const product3 = new Product('Mobile', 20000, 6);

class Inventory {
    constructor() {
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product);
        console.log(this.products);
    }


    calculateTotalValue() {
        return this.products.reduce((total, product) => {
            return total + (product.price * product.quantity);
        }, 0);
    }


    logInventoryAfterDelay() {
        setTimeout(() => {
            const totalValue = this.calculateTotalValue();
            console.log(`Total Inventory Value: $${totalValue.toFixed(2)}`);
        }, 3000);
    }
}


const inventory = new Inventory();


// Add products to the inventory
inventory.addProduct(product1);
inventory.addProduct(product2);

// Log the total value of the inventory after a 3-second delay
inventory.logInventoryAfterDelay();