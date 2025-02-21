// Task 1 - Creating a product class
class Product {
  constructor(name, id, price, stock) {
    this.name = name;
    this.id = id;
    this.price = price;
    this.stock = stock;
  }
  getDetails() {
    return `Product name: ${this.name}, ID: ${this.id}, Price: ${this.price}, Stock: ${this.stock}`;
  }
  updateStock(quanitity) {
    this.stock += quanitity;
  }
}
const prod1 = new Product("Laptop", 101, 1200, 10);
console.log(prod1.getDetails()); 
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 10"

prod1.updateStock(3);
console.log(prod1.getDetails()); 
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 7"

// Task 2 - Creating an Order Class
class Order {
    constructor(orderID, product, quantity) {
        this.orderID = orderID;
        this.product = product;
        this.quantity = quantity;
        this.totalPrice = this.product.price * this.quantity;

        // Reduce stock
        this.product.updateStock(this.quantity);
    }

    getOrderDetails() {
        return `Order ID: ${this.orderID}, Product: ${this.product.name}, Quantity: ${this.quantity}, Total Price: ${this.totalPrice}`;
    }
}

// Test cases
const order1 = new Order(501, prod1, 2);
console.log(order1.getOrderDetails()); 
// Expected output: "Order ID: 501, Product: Laptop, Quantity: 2, Total Price: $2400"

console.log(prod1.getDetails()); 
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 5" (Stock reduced)

// Task 3 - Creating an inventory class
class Inventory {
    constructor() {
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product);
    }

    listProducts() {
        return this.products.map(product => product.getDetails());
    }
}

// Test cases
const inventory = new Inventory();
inventory.addProduct(prod1);
inventory.listProducts();
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 5"
