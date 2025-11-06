const users = [
  { id: 1, name: "Amit", country: "India", premium: true },
  { id: 2, name: "John", country: "USA", premium: false },
  { id: 3, name: "Riya", country: "India", premium: true },
  { id: 4, country: "Germany", premium: false }, // missing name intentionally
  { id: 5, name: "Neha", country: "India", premium: false },
];

const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 1000 },
  { id: 2, name: "E-book", category: "Digital", price: 15 },
  { id: 3, category: "Fashion", price: 200 }, // missing name
  { id: 4, name: "Headphones", category: "Electronics", price: 120 },
  { id: 5, name: "Course", category: "Digital", price: 50 },
];

const orders = [
  { orderId: 1, userId: 1, productId: 1, quantity: 2 },
  { orderId: 2, userId: 2, productId: 2, quantity: 1 },
  { orderId: 3, userId: 1, productId: 4, quantity: 3 },
  { orderId: 4, userId: 5, productId: 5, quantity: 4 },
  { orderId: 5, userId: 3, productId: 3, quantity: 2 },
  { orderId: 6, userId: 9, productId: 2, quantity: 1 }, // invalid user
];

const validOrders = orders.filter(order => {
  const userExists = users.some(u => u.id === order.userId);
  const productExists = products.some(p => p.id === order.productId);
  return userExists && productExists;
});

const totalRevenue = validOrders.reduce((acc, order) => {
  const product = products.find(p => p.id === order.productId);
  return acc + product.price * order.quantity;
}, 0);

const totalItemsSold = validOrders.reduce((acc, order) => acc + order.quantity, 0);

const revenueByCountry = validOrders.reduce((acc, order) => {
  const user = users.find(u => u.id === order.userId);
  const product = products.find(p => p.id === order.productId);
  if (user && product) {
    acc[user.country] = (acc[user.country] || 0) + product.price * order.quantity;
  }
  return acc;
}, {});

const spendingByUser = validOrders.reduce((acc, order) => {
  const product = products.find(p => p.id === order.productId);
  if (product) {
    acc[order.userId] = (acc[order.userId] || 0) + product.price * order.quantity;
  }
  return acc;
}, {});

const topSpendingUserId = Object.keys(spendingByUser).reduce((a, b) =>
  spendingByUser[a] > spendingByUser[b] ? a : b
);
const topSpendingUser = users.find(u => u.id === Number(topSpendingUserId));

const productSales = validOrders.reduce((acc, order) => {
  acc[order.productId] = (acc[order.productId] || 0) + order.quantity;
  return acc;
}, {});

const mostSoldProductId = Object.keys(productSales).reduce((a, b) =>
  productSales[a] > productSales[b] ? a : b
);
const mostSoldProduct = products.find(p => p.id === Number(mostSoldProductId));

const averageOrderValue = totalRevenue / validOrders.length;

const productsWithGST = products.map(product => ({
  name: product.name || "Unknown",
  category: product.category,
  priceWithGST: +(product.price * 1.1).toFixed(2),
}));

console.log(" Cleaned Orders:", validOrders);
console.log("Total Revenue:", totalRevenue);
console.log("Total Items Sold:", totalItemsSold);
console.log("Revenue by Country:", revenueByCountry);
console.log("Top Spending User:", topSpendingUser?.name, "=>", spendingByUser[topSpendingUserId]);
console.log("Most Sold Product:", mostSoldProduct?.name, "=>", productSales[mostSoldProductId], "units");
console.log("Average Order Value:", averageOrderValue.toFixed(2));
console.log("Products with GST:", productsWithGST);