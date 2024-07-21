 // pages/api/products.js
const products = [
    { id: 1,  price: 10000 },
    { id: 2,  price: 20000 },
    { id: 3,  price: 30000 },
    { id: 4,  price: 40000 },
    { id: 5,  price: 50000 },
    { id: 6,  price: 60000 },
    { id: 6,  price: 70000 },
    { id: 6,  price: 80000 },
    { id: 7,  price: 90000 },
    { id: 8,  price: 100000 },
  ];
  
  export default function handler(req, res) {
    if (req.method === 'POST') {
      const { minPrice, maxPrice } = req.body;
  
      if (minPrice == null || maxPrice == null) {
        return res.status(400).json({ error: 'Invalid input' });
      }
  
      const filteredProducts = products.filter(product => 
        product.price >= minPrice && product.price <= maxPrice
      );
  
      return res.status(200).json(filteredProducts);
    } else {
      return res.status(405).json({ error: 'Method not allowed' });
    }
  }
  