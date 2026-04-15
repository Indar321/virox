const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Catalog Data
const productsDB = [
    { id: 1, name: "Origin Heavyweight Tee", price: 45, category: "essentials", img1: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=800", img2: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=800", desc: "Our signature piece. Cut from 280gsm heavyweight cotton for a perfect structural drape." },
    { id: 2, name: "Digital Trade Collab", price: 55, category: "graphics", img1: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800", img2: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?q=80&w=800", desc: "A limited run in collaboration with Digital Trade Agency. Features high-density puff print." }
];

// Product Route
app.get('/api/products', (req, res) => {
    res.json(productsDB); 
});

// Checkout Route
app.post('/api/checkout', (req, res) => {
    res.status(200).json({ message: 'TRANSACTION COMPLETE. ASSETS SECURED.' });
});

// Export for Vercel
module.exports = app;
