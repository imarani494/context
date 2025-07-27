const checkout = {
  items: [],
  total: 0,

  addItem(item) {
    let price = parseFloat(item.price);

    if (isNaN(price) || price <= 0) {
      console.error(`❌ Invalid price for item:`, item);
      return;
    }

   
    item.price = price;

    this.items.push(item);
    this.total += price;

    console.log(`✅ Added item: ${item.name} - $${price.toFixed(2)}`);
  },

  getTotal() {
    return `Total: $${this.total.toFixed(2)}`;
  }
};


checkout.addItem({ name: "Coffee Maker", price: "99.95" }); 
checkout.addItem({ name: "Milk", price: 3.50 });            
checkout.addItem({ name: "Invalid Item", price: "abc" });   

console.log(checkout.getTotal()); 
