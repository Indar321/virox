const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Catalog Data
const productsDB = [
    { id: 1, name: "Origin Heavyweight Tee", price: 45, category: "essentials", img1: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=800", img2: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=800", desc: "Our signature piece. Cut from 280gsm heavyweight cotton for a perfect structural drape." },
    { id: 2, name: "Digital Trade Collab", price: 55, category: "graphics", img1: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800", img2: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?q=80&w=800", desc: "A limited run in collaboration with Digital Trade Agency. Features high-density puff print." },
    { id: 3, name: "Acid Wash Boxy", price: 60, category: "graphics", img1: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=800", img2: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=800", desc: "Vintage wash treatment makes every piece unique. Cropped body with dropped shoulders." },
    { id: 4, name: "Studio Hoodie Black", price: 95, category: "essentials", img1: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800", img2: "https://images.unsplash.com/photo-1511511450040-677116ff389e?q=80&w=800", desc: "450gsm French Terry. Double-lined hood. Built for the studio." },
    { id: 5, name: "Virox Typo Tee", price: 45, category: "graphics", img1: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=800", img2: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800", desc: "Minimalist chest hit with expanded back typography layout." },
    { id: 6, name: "Nylon Cargo Pant", price: 120, category: "bottoms", img1: "https://images.unsplash.com/photo-1523398002811-999aa8e9e11a?q=80&w=800", img2: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800", desc: "Water-resistant matte nylon with articulated knee darts." },
    { id: 7, name: "Puffer Vest Matte", price: 140, category: "outerwear", img1: "https://images.unsplash.com/photo-1511511450040-677116ff389e?q=80&w=800", img2: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?q=80&w=800", desc: "Synthetic down fill with a matte black ripstop shell." },
    { id: 8, name: "Archive Beanie", price: 35, category: "accessories", img1: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800", img2: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800", desc: "Chunky knit essential with woven logo patch." },
    { id: 9, name: "Tech Short", price: 65, category: "bottoms", img1: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800", img2: "https://images.unsplash.com/photo-1523398002811-999aa8e9e11a?q=80&w=800", desc: "Lightweight short for active wear. Hidden zip pockets." },
    { id: 10, name: "Mock Neck Longsleeve", price: 55, category: "essentials", img1: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=800", img2: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=800", desc: "Elevated basic. Perfect for layering under hoodies or jackets." },
    { id: 11, name: "Oversized Denim Jacket", price: 160, category: "outerwear", img1: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=800", img2: "https://images.unsplash.com/photo-1511511450040-677116ff389e?q=80&w=800", desc: "Washed black denim, dropped shoulders, custom gunmetal hardware." },
    { id: 12, name: "Virox Tote Bag", price: 40, category: "accessories", img1: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=800", img2: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800", desc: "Heavy canvas construction. Fits daily essentials." }
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
