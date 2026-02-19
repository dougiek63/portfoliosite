// ============================================
// Golf Style Finder - Application Logic
// ============================================

document.addEventListener('DOMContentLoaded', function () {

    // ── State ──────────────────────────────────
    const state = {
        currentStep: 1,
        priorities: ['price', 'quality', 'performance'],
        gender: null,
        heightFeet: null,
        heightInches: null,
        weight: null,
        fit: null,
        styles: [],
        transport: null,
        weather: [],
        flexibility: 3,
        features: [],
        categories: []
    };

    // ── Product Catalog ───────────────────────
    const PRODUCTS = [
        // ─── POLOS ───
        {
            id: 'polo-1', category: 'polos', brand: 'Nike', name: 'Dri-FIT Victory Polo',
            styles: ['athletic', 'modern'], fit: ['athletic', 'regular'], gender: ['mens', 'unisex'],
            features: ['moisture', 'stretch', 'uv'], weather: ['hot', 'mild'],
            priceScore: 3, qualityScore: 4, performanceScore: 5, rating: 4.6, reviews: 2840,
            gradient: 'linear-gradient(135deg, #1a1a2e, #16213e)',
            icon: 'fa-shirt',
            prices: [
                { retailer: 'Nike.com', price: 55, url: 'https://www.nike.com/w?q=nike+golf+polo+shirts' },
                { retailer: 'Dick\'s Sporting Goods', price: 50, url: 'https://www.dickssportinggoods.com/search?searchTerm=nike+golf+shirts' },
                { retailer: 'Golf Galaxy', price: 52, url: 'https://www.golfgalaxy.com/search?searchTerm=nike+golf+polos' },
                { retailer: 'Amazon', price: 48, url: 'https://www.amazon.com/s?k=nike+dri-fit+victory+golf+polo' }
            ]
        },
        {
            id: 'polo-2', category: 'polos', brand: 'Peter Millar', name: 'Crown Crafted Performance Polo',
            styles: ['classic', 'modern'], fit: ['regular', 'relaxed'], gender: ['mens', 'unisex'],
            features: ['moisture', 'uv', 'odor'], weather: ['hot', 'mild'],
            priceScore: 1, qualityScore: 5, performanceScore: 4, rating: 4.8, reviews: 1120,
            gradient: 'linear-gradient(135deg, #1a3a5c, #2d5016)',
            icon: 'fa-shirt',
            prices: [
                { retailer: 'Peter Millar', price: 130, url: 'https://www.petermillar.com/search?q=crown+crafted+polo' },
                { retailer: 'Nordstrom', price: 128, url: 'https://www.nordstrom.com/sr?keyword=peter+millar+golf+polo' },
                { retailer: 'Golf Galaxy', price: 130, url: 'https://www.golfgalaxy.com/search?searchTerm=peter+millar+polos' }
            ]
        },
        {
            id: 'polo-3', category: 'polos', brand: 'Under Armour', name: 'Playoff 3.0 Polo',
            styles: ['athletic', 'bold'], fit: ['athletic', 'regular'], gender: ['mens', 'unisex'],
            features: ['moisture', 'stretch', 'odor', 'uv'], weather: ['hot', 'mild'],
            priceScore: 4, qualityScore: 4, performanceScore: 5, rating: 4.5, reviews: 3200,
            gradient: 'linear-gradient(135deg, #0d1b2a, #1b263b)',
            icon: 'fa-shirt',
            prices: [
                { retailer: 'Under Armour', price: 70, url: 'https://www.underarmour.com/en-us/c/mens/golf/' },
                { retailer: 'Dick\'s Sporting Goods', price: 65, url: 'https://www.dickssportinggoods.com/search?searchTerm=under+armour+golf+shirts' },
                { retailer: 'Amazon', price: 55, url: 'https://www.amazon.com/s?k=under+armour+playoff+3.0+polo' },
                { retailer: 'Golf Galaxy', price: 65, url: 'https://www.golfgalaxy.com/search?searchTerm=under+armour+golf+polos' }
            ]
        },
        {
            id: 'polo-4', category: 'polos', brand: 'Puma', name: 'MATTR Traditions Polo',
            styles: ['modern', 'bold'], fit: ['athletic', 'regular'], gender: ['mens', 'womens', 'unisex'],
            features: ['moisture', 'stretch'], weather: ['hot', 'mild'],
            priceScore: 4, qualityScore: 3, performanceScore: 4, rating: 4.3, reviews: 980,
            gradient: 'linear-gradient(135deg, #2d2d2d, #0f4c75)',
            icon: 'fa-shirt',
            prices: [
                { retailer: 'Puma.com', price: 65, url: 'https://us.puma.com/us/en/collections/golf' },
                { retailer: 'Amazon', price: 45, url: 'https://www.amazon.com/s?k=puma+mattr+golf+polo' },
                { retailer: 'Golf Galaxy', price: 55, url: 'https://www.golfgalaxy.com/search?searchTerm=puma+golf+polos' }
            ]
        },
        {
            id: 'polo-5', category: 'polos', brand: 'Callaway', name: 'Swing Tech Ventilated Polo',
            styles: ['classic', 'athletic'], fit: ['regular', 'relaxed'], gender: ['mens', 'unisex'],
            features: ['moisture', 'stretch', 'uv', 'odor'], weather: ['hot'],
            priceScore: 4, qualityScore: 3, performanceScore: 4, rating: 4.4, reviews: 1560,
            gradient: 'linear-gradient(135deg, #1a1a2e, #0f3460)',
            icon: 'fa-shirt',
            prices: [
                { retailer: 'Callaway Golf', price: 60, url: 'https://www.callawaygolf.com/search?q=swing+tech+polo' },
                { retailer: 'Amazon', price: 42, url: 'https://www.amazon.com/s?k=callaway+swing+tech+polo' },
                { retailer: 'Dick\'s Sporting Goods', price: 50, url: 'https://www.dickssportinggoods.com/search?searchTerm=callaway+golf+shirts' }
            ]
        },
        {
            id: 'polo-6', category: 'polos', brand: 'adidas', name: 'Ultimate365 Tour Polo',
            styles: ['modern', 'athletic'], fit: ['athletic', 'regular'], gender: ['mens', 'womens', 'unisex'],
            features: ['moisture', 'stretch', 'uv'], weather: ['hot', 'mild'],
            priceScore: 3, qualityScore: 4, performanceScore: 5, rating: 4.5, reviews: 2100,
            gradient: 'linear-gradient(135deg, #0d1117, #1e3a5f)',
            icon: 'fa-shirt',
            prices: [
                { retailer: 'adidas.com', price: 75, url: 'https://www.adidas.com/us/men-golf-shirts' },
                { retailer: 'Amazon', price: 58, url: 'https://www.amazon.com/s?k=adidas+ultimate365+golf+polo' },
                { retailer: 'Dick\'s Sporting Goods', price: 65, url: 'https://www.dickssportinggoods.com/search?searchTerm=adidas+golf+shirts' },
                { retailer: 'Golf Galaxy', price: 68, url: 'https://www.golfgalaxy.com/search?searchTerm=adidas+golf+polos' }
            ]
        },
        {
            id: 'polo-7', category: 'polos', brand: 'TravisMathew', name: 'The Heater Polo',
            styles: ['modern', 'bold'], fit: ['athletic', 'regular'], gender: ['mens', 'unisex'],
            features: ['moisture', 'stretch'], weather: ['hot', 'mild'],
            priceScore: 2, qualityScore: 5, performanceScore: 3, rating: 4.7, reviews: 870,
            gradient: 'linear-gradient(135deg, #2b2b2b, #3d3d3d)',
            icon: 'fa-shirt',
            prices: [
                { retailer: 'TravisMathew', price: 95, url: 'https://www.travismathew.com/collections/polos' },
                { retailer: 'Nordstrom', price: 95, url: 'https://www.nordstrom.com/sr?keyword=travismathew+polo' },
                { retailer: 'Golf Galaxy', price: 90, url: 'https://www.golfgalaxy.com/search?searchTerm=travismathew+polos' }
            ]
        },
        {
            id: 'polo-8', category: 'polos', brand: 'Bonobos', name: 'M-Flex Golf Polo',
            styles: ['modern', 'classic'], fit: ['regular', 'athletic'], gender: ['mens', 'unisex'],
            features: ['moisture', 'stretch'], weather: ['mild', 'hot'],
            priceScore: 3, qualityScore: 4, performanceScore: 3, rating: 4.4, reviews: 620,
            gradient: 'linear-gradient(135deg, #1f2937, #374151)',
            icon: 'fa-shirt',
            prices: [
                { retailer: 'Bonobos', price: 79, url: 'https://bonobos.com/shop/golf' },
                { retailer: 'Nordstrom', price: 79, url: 'https://www.nordstrom.com/sr?keyword=bonobos+golf+polo' }
            ]
        },

        // ─── PANTS ───
        {
            id: 'pants-1', category: 'pants', brand: 'Nike', name: 'Dri-FIT UV Chino Golf Pants',
            styles: ['modern', 'athletic'], fit: ['athletic', 'regular'], gender: ['mens', 'unisex'],
            features: ['moisture', 'stretch', 'uv'], weather: ['mild', 'cold'],
            priceScore: 3, qualityScore: 4, performanceScore: 5, rating: 4.5, reviews: 1890,
            gradient: 'linear-gradient(135deg, #1a1a2e, #16213e)',
            icon: 'fa-user-tie',
            prices: [
                { retailer: 'Nike.com', price: 90, url: 'https://www.nike.com/w?q=nike+golf+pants' },
                { retailer: 'Dick\'s Sporting Goods', price: 85, url: 'https://www.dickssportinggoods.com/search?searchTerm=nike+golf+pants' },
                { retailer: 'Amazon', price: 78, url: 'https://www.amazon.com/s?k=nike+dri-fit+golf+pants' }
            ]
        },
        {
            id: 'pants-2', category: 'pants', brand: 'Peter Millar', name: 'Crown Sport 5-Pocket Pant',
            styles: ['classic'], fit: ['regular', 'relaxed'], gender: ['mens', 'unisex'],
            features: ['stretch', 'moisture'], weather: ['mild', 'cold'],
            priceScore: 1, qualityScore: 5, performanceScore: 3, rating: 4.7, reviews: 640,
            gradient: 'linear-gradient(135deg, #1a3a5c, #2d5016)',
            icon: 'fa-user-tie',
            prices: [
                { retailer: 'Peter Millar', price: 165, url: 'https://www.petermillar.com/search?q=crown+sport+pant' },
                { retailer: 'Nordstrom', price: 160, url: 'https://www.nordstrom.com/sr?keyword=peter+millar+golf+pants' }
            ]
        },
        {
            id: 'pants-3', category: 'pants', brand: 'adidas', name: 'Ultimate365 Tapered Pants',
            styles: ['modern', 'athletic'], fit: ['athletic', 'regular'], gender: ['mens', 'womens', 'unisex'],
            features: ['stretch', 'moisture', 'pockets'], weather: ['mild', 'cold'],
            priceScore: 3, qualityScore: 4, performanceScore: 4, rating: 4.4, reviews: 2350,
            gradient: 'linear-gradient(135deg, #0d1117, #1e3a5f)',
            icon: 'fa-user-tie',
            prices: [
                { retailer: 'adidas.com', price: 85, url: 'https://www.adidas.com/us/men-golf-pants' },
                { retailer: 'Amazon', price: 62, url: 'https://www.amazon.com/s?k=adidas+ultimate365+golf+pants' },
                { retailer: 'Dick\'s Sporting Goods', price: 75, url: 'https://www.dickssportinggoods.com/search?searchTerm=adidas+golf+pants' }
            ]
        },
        {
            id: 'pants-4', category: 'pants', brand: 'Bonobos', name: 'Highland Golf Pants',
            styles: ['classic', 'modern'], fit: ['regular', 'athletic'], gender: ['mens', 'unisex'],
            features: ['stretch', 'pockets'], weather: ['mild', 'cold'],
            priceScore: 2, qualityScore: 5, performanceScore: 3, rating: 4.6, reviews: 1240,
            gradient: 'linear-gradient(135deg, #1f2937, #374151)',
            icon: 'fa-user-tie',
            prices: [
                { retailer: 'Bonobos', price: 119, url: 'https://bonobos.com/shop/golf' },
                { retailer: 'Nordstrom', price: 119, url: 'https://www.nordstrom.com/sr?keyword=bonobos+highland+golf+pants' }
            ]
        },
        {
            id: 'pants-5', category: 'pants', brand: 'Under Armour', name: 'Drive Tapered Pants',
            styles: ['athletic'], fit: ['athletic', 'regular'], gender: ['mens', 'unisex'],
            features: ['stretch', 'moisture', 'pockets'], weather: ['mild', 'cold'],
            priceScore: 3, qualityScore: 4, performanceScore: 5, rating: 4.5, reviews: 1780,
            gradient: 'linear-gradient(135deg, #0d1b2a, #1b263b)',
            icon: 'fa-user-tie',
            prices: [
                { retailer: 'Under Armour', price: 85, url: 'https://www.underarmour.com/en-us/c/mens/golf/' },
                { retailer: 'Amazon', price: 68, url: 'https://www.amazon.com/s?k=under+armour+drive+golf+pants' },
                { retailer: 'Dick\'s Sporting Goods', price: 75, url: 'https://www.dickssportinggoods.com/search?searchTerm=under+armour+golf+pants' }
            ]
        },

        // ─── SHORTS ───
        {
            id: 'shorts-1', category: 'shorts', brand: 'Nike', name: 'Dri-FIT Tour 10" Golf Shorts',
            styles: ['athletic', 'modern'], fit: ['athletic', 'regular'], gender: ['mens', 'unisex'],
            features: ['moisture', 'stretch', 'pockets'], weather: ['hot', 'mild'],
            priceScore: 3, qualityScore: 4, performanceScore: 5, rating: 4.5, reviews: 2100,
            gradient: 'linear-gradient(135deg, #1a1a2e, #16213e)',
            icon: 'fa-scissors',
            prices: [
                { retailer: 'Nike.com', price: 70, url: 'https://www.nike.com/w?q=nike+golf+shorts' },
                { retailer: 'Dick\'s Sporting Goods', price: 65, url: 'https://www.dickssportinggoods.com/search?searchTerm=nike+golf+shorts' },
                { retailer: 'Amazon', price: 58, url: 'https://www.amazon.com/s?k=nike+dri-fit+golf+shorts' }
            ]
        },
        {
            id: 'shorts-2', category: 'shorts', brand: 'Callaway', name: 'Everplay 5-Pocket Shorts',
            styles: ['classic', 'athletic'], fit: ['regular', 'relaxed'], gender: ['mens', 'unisex'],
            features: ['moisture', 'stretch', 'pockets', 'uv'], weather: ['hot'],
            priceScore: 5, qualityScore: 3, performanceScore: 4, rating: 4.3, reviews: 1840,
            gradient: 'linear-gradient(135deg, #1a1a2e, #0f3460)',
            icon: 'fa-scissors',
            prices: [
                { retailer: 'Callaway Golf', price: 50, url: 'https://www.callawaygolf.com/search?q=everplay+shorts' },
                { retailer: 'Amazon', price: 35, url: 'https://www.amazon.com/s?k=callaway+everplay+golf+shorts' },
                { retailer: 'Dick\'s Sporting Goods', price: 40, url: 'https://www.dickssportinggoods.com/search?searchTerm=callaway+golf+shorts' }
            ]
        },
        {
            id: 'shorts-3', category: 'shorts', brand: 'TravisMathew', name: 'Beck Shorts',
            styles: ['modern', 'bold'], fit: ['athletic', 'regular'], gender: ['mens', 'unisex'],
            features: ['stretch', 'moisture'], weather: ['hot', 'mild'],
            priceScore: 2, qualityScore: 5, performanceScore: 3, rating: 4.7, reviews: 590,
            gradient: 'linear-gradient(135deg, #2b2b2b, #3d3d3d)',
            icon: 'fa-scissors',
            prices: [
                { retailer: 'TravisMathew', price: 90, url: 'https://www.travismathew.com/collections/shorts' },
                { retailer: 'Nordstrom', price: 90, url: 'https://www.nordstrom.com/sr?keyword=travismathew+golf+shorts' },
                { retailer: 'Golf Galaxy', price: 85, url: 'https://www.golfgalaxy.com/search?searchTerm=travismathew+shorts' }
            ]
        },
        {
            id: 'shorts-4', category: 'shorts', brand: 'Under Armour', name: 'Drive Taper Shorts',
            styles: ['athletic'], fit: ['athletic', 'regular'], gender: ['mens', 'unisex'],
            features: ['stretch', 'moisture', 'pockets'], weather: ['hot', 'mild'],
            priceScore: 4, qualityScore: 4, performanceScore: 5, rating: 4.5, reviews: 1650,
            gradient: 'linear-gradient(135deg, #0d1b2a, #1b263b)',
            icon: 'fa-scissors',
            prices: [
                { retailer: 'Under Armour', price: 65, url: 'https://www.underarmour.com/en-us/c/mens/golf/' },
                { retailer: 'Amazon', price: 48, url: 'https://www.amazon.com/s?k=under+armour+drive+golf+shorts' },
                { retailer: 'Dick\'s Sporting Goods', price: 55, url: 'https://www.dickssportinggoods.com/search?searchTerm=under+armour+golf+shorts' }
            ]
        },
        {
            id: 'shorts-5', category: 'shorts', brand: 'adidas', name: 'Ultimate365 8.5" Golf Shorts',
            styles: ['modern', 'athletic'], fit: ['athletic', 'regular'], gender: ['mens', 'womens', 'unisex'],
            features: ['stretch', 'moisture', 'pockets'], weather: ['hot', 'mild'],
            priceScore: 3, qualityScore: 4, performanceScore: 4, rating: 4.4, reviews: 1980,
            gradient: 'linear-gradient(135deg, #0d1117, #1e3a5f)',
            icon: 'fa-scissors',
            prices: [
                { retailer: 'adidas.com', price: 65, url: 'https://www.adidas.com/us/men-golf-shorts' },
                { retailer: 'Amazon', price: 45, url: 'https://www.amazon.com/s?k=adidas+ultimate365+golf+shorts' },
                { retailer: 'Dick\'s Sporting Goods', price: 55, url: 'https://www.dickssportinggoods.com/search?searchTerm=adidas+golf+shorts' }
            ]
        },

        // ─── OUTERWEAR ───
        {
            id: 'outer-1', category: 'outerwear', brand: 'Nike', name: 'Storm-FIT ADV Full-Zip Jacket',
            styles: ['athletic', 'modern'], fit: ['athletic', 'regular'], gender: ['mens', 'womens', 'unisex'],
            features: ['waterproof', 'stretch', 'moisture'], weather: ['rain', 'cold', 'mild'],
            priceScore: 2, qualityScore: 5, performanceScore: 5, rating: 4.7, reviews: 980,
            gradient: 'linear-gradient(135deg, #1a1a2e, #0f3460)',
            icon: 'fa-vest-patches',
            prices: [
                { retailer: 'Nike.com', price: 145, url: 'https://www.nike.com/w?q=nike+golf+jacket' },
                { retailer: 'Dick\'s Sporting Goods', price: 140, url: 'https://www.dickssportinggoods.com/search?searchTerm=nike+golf+jackets' },
                { retailer: 'Golf Galaxy', price: 142, url: 'https://www.golfgalaxy.com/search?searchTerm=nike+golf+outerwear' }
            ]
        },
        {
            id: 'outer-2', category: 'outerwear', brand: 'Peter Millar', name: 'Hyperlight Fuse Vest',
            styles: ['classic', 'modern'], fit: ['regular', 'relaxed'], gender: ['mens', 'unisex'],
            features: ['stretch'], weather: ['cold', 'mild'],
            priceScore: 1, qualityScore: 5, performanceScore: 3, rating: 4.8, reviews: 340,
            gradient: 'linear-gradient(135deg, #1a3a5c, #2d5016)',
            icon: 'fa-vest-patches',
            prices: [
                { retailer: 'Peter Millar', price: 198, url: 'https://www.petermillar.com/search?q=hyperlight+fuse+vest' },
                { retailer: 'Nordstrom', price: 198, url: 'https://www.nordstrom.com/sr?keyword=peter+millar+golf+vest' }
            ]
        },
        {
            id: 'outer-3', category: 'outerwear', brand: 'FootJoy', name: 'HydroLite Rain Jacket',
            styles: ['classic', 'athletic'], fit: ['regular', 'relaxed'], gender: ['mens', 'womens', 'unisex'],
            features: ['waterproof', 'stretch', 'moisture'], weather: ['rain', 'cold'],
            priceScore: 2, qualityScore: 5, performanceScore: 5, rating: 4.6, reviews: 1240,
            gradient: 'linear-gradient(135deg, #1b2838, #2a4858)',
            icon: 'fa-vest-patches',
            prices: [
                { retailer: 'FootJoy', price: 165, url: 'https://www.footjoy.com/search?q=hydrolite+rain+jacket' },
                { retailer: 'Golf Galaxy', price: 155, url: 'https://www.golfgalaxy.com/search?searchTerm=footjoy+rain+gear' },
                { retailer: 'Amazon', price: 140, url: 'https://www.amazon.com/s?k=footjoy+hydrolite+rain+jacket' }
            ]
        },
        {
            id: 'outer-4', category: 'outerwear', brand: 'Under Armour', name: 'Storm Midlayer Half-Zip',
            styles: ['athletic'], fit: ['athletic', 'regular'], gender: ['mens', 'unisex'],
            features: ['moisture', 'stretch', 'waterproof'], weather: ['cold', 'mild', 'rain'],
            priceScore: 3, qualityScore: 4, performanceScore: 5, rating: 4.5, reviews: 1560,
            gradient: 'linear-gradient(135deg, #0d1b2a, #1b263b)',
            icon: 'fa-vest-patches',
            prices: [
                { retailer: 'Under Armour', price: 85, url: 'https://www.underarmour.com/en-us/c/mens/golf/' },
                { retailer: 'Amazon', price: 72, url: 'https://www.amazon.com/s?k=under+armour+storm+golf+midlayer' },
                { retailer: 'Dick\'s Sporting Goods', price: 80, url: 'https://www.dickssportinggoods.com/search?searchTerm=under+armour+golf+outerwear' }
            ]
        },

        // ─── SHOES ───
        {
            id: 'shoes-1', category: 'shoes', brand: 'Nike', name: 'Air Zoom Infinity Tour NEXT%',
            styles: ['athletic', 'modern'], fit: ['athletic', 'regular'], gender: ['mens', 'womens', 'unisex'],
            features: ['waterproof', 'stretch'], weather: ['hot', 'mild', 'rain'],
            priceScore: 2, qualityScore: 5, performanceScore: 5, rating: 4.6, reviews: 1560,
            gradient: 'linear-gradient(135deg, #1a1a2e, #16213e)',
            icon: 'fa-shoe-prints',
            prices: [
                { retailer: 'Nike.com', price: 180, url: 'https://www.nike.com/w?q=nike+golf+shoes' },
                { retailer: 'Dick\'s Sporting Goods', price: 175, url: 'https://www.dickssportinggoods.com/search?searchTerm=nike+golf+shoes' },
                { retailer: 'Golf Galaxy', price: 180, url: 'https://www.golfgalaxy.com/search?searchTerm=nike+golf+shoes' }
            ]
        },
        {
            id: 'shoes-2', category: 'shoes', brand: 'FootJoy', name: 'Pro|SL Spikeless Golf Shoes',
            styles: ['classic', 'modern'], fit: ['regular', 'relaxed'], gender: ['mens', 'womens', 'unisex'],
            features: ['waterproof', 'stretch'], weather: ['mild', 'rain', 'hot'],
            priceScore: 2, qualityScore: 5, performanceScore: 5, rating: 4.7, reviews: 3400,
            gradient: 'linear-gradient(135deg, #1b2838, #2a4858)',
            icon: 'fa-shoe-prints',
            prices: [
                { retailer: 'FootJoy', price: 170, url: 'https://www.footjoy.com/golf-shoes/mens/' },
                { retailer: 'Golf Galaxy', price: 165, url: 'https://www.golfgalaxy.com/search?searchTerm=footjoy+pro+sl' },
                { retailer: 'Amazon', price: 152, url: 'https://www.amazon.com/s?k=footjoy+pro+sl+golf+shoes' },
                { retailer: 'Dick\'s Sporting Goods', price: 160, url: 'https://www.dickssportinggoods.com/search?searchTerm=footjoy+golf+shoes' }
            ]
        },
        {
            id: 'shoes-3', category: 'shoes', brand: 'adidas', name: 'Tour360 22 Spiked Golf Shoes',
            styles: ['athletic', 'classic'], fit: ['regular', 'athletic'], gender: ['mens', 'unisex'],
            features: ['waterproof', 'stretch'], weather: ['mild', 'rain', 'cold'],
            priceScore: 2, qualityScore: 5, performanceScore: 5, rating: 4.6, reviews: 1820,
            gradient: 'linear-gradient(135deg, #0d1117, #1e3a5f)',
            icon: 'fa-shoe-prints',
            prices: [
                { retailer: 'adidas.com', price: 200, url: 'https://www.adidas.com/us/men-golf-shoes' },
                { retailer: 'Amazon', price: 155, url: 'https://www.amazon.com/s?k=adidas+tour360+golf+shoes' },
                { retailer: 'Golf Galaxy', price: 180, url: 'https://www.golfgalaxy.com/search?searchTerm=adidas+golf+shoes' }
            ]
        },
        {
            id: 'shoes-4', category: 'shoes', brand: 'Puma', name: 'IGNITE Elevate Spikeless',
            styles: ['modern', 'bold'], fit: ['athletic', 'regular'], gender: ['mens', 'womens', 'unisex'],
            features: ['waterproof'], weather: ['mild', 'hot'],
            priceScore: 3, qualityScore: 4, performanceScore: 4, rating: 4.4, reviews: 1080,
            gradient: 'linear-gradient(135deg, #2d2d2d, #0f4c75)',
            icon: 'fa-shoe-prints',
            prices: [
                { retailer: 'Puma.com', price: 130, url: 'https://us.puma.com/us/en/collections/golf' },
                { retailer: 'Amazon', price: 95, url: 'https://www.amazon.com/s?k=puma+ignite+elevate+golf+shoes' },
                { retailer: 'Dick\'s Sporting Goods', price: 110, url: 'https://www.dickssportinggoods.com/search?searchTerm=puma+golf+shoes' }
            ]
        },
        {
            id: 'shoes-5', category: 'shoes', brand: 'Ecco', name: 'Biom C4 Gore-Tex Golf Shoes',
            styles: ['classic', 'modern'], fit: ['regular', 'relaxed'], gender: ['mens', 'womens', 'unisex'],
            features: ['waterproof', 'stretch'], weather: ['rain', 'cold', 'mild'],
            priceScore: 1, qualityScore: 5, performanceScore: 4, rating: 4.7, reviews: 920,
            gradient: 'linear-gradient(135deg, #2d3436, #636e72)',
            icon: 'fa-shoe-prints',
            prices: [
                { retailer: 'Ecco', price: 220, url: 'https://us.ecco.com/search?q=biom+c4+golf' },
                { retailer: 'Golf Galaxy', price: 215, url: 'https://www.golfgalaxy.com/search?searchTerm=ecco+golf+shoes' },
                { retailer: 'Amazon', price: 198, url: 'https://www.amazon.com/s?k=ecco+biom+c4+golf+shoes' }
            ]
        },

        // ─── HATS ───
        {
            id: 'hat-1', category: 'hats', brand: 'Nike', name: 'AeroBill Classic99 Golf Hat',
            styles: ['athletic', 'modern'], fit: ['athletic', 'regular', 'relaxed'], gender: ['mens', 'womens', 'unisex'],
            features: ['moisture', 'uv'], weather: ['hot', 'mild'],
            priceScore: 4, qualityScore: 4, performanceScore: 4, rating: 4.5, reviews: 3200,
            gradient: 'linear-gradient(135deg, #1a1a2e, #16213e)',
            icon: 'fa-hat-cowboy',
            prices: [
                { retailer: 'Nike.com', price: 30, url: 'https://www.nike.com/w?q=nike+golf+hat' },
                { retailer: 'Dick\'s Sporting Goods', price: 28, url: 'https://www.dickssportinggoods.com/search?searchTerm=nike+golf+hats' },
                { retailer: 'Amazon', price: 25, url: 'https://www.amazon.com/s?k=nike+aerobill+golf+hat' }
            ]
        },
        {
            id: 'hat-2', category: 'hats', brand: 'Titleist', name: 'Tour Performance Golf Hat',
            styles: ['classic', 'athletic'], fit: ['regular', 'relaxed'], gender: ['mens', 'womens', 'unisex'],
            features: ['moisture', 'uv'], weather: ['hot', 'mild'],
            priceScore: 4, qualityScore: 4, performanceScore: 3, rating: 4.6, reviews: 4100,
            gradient: 'linear-gradient(135deg, #1b2838, #2a4858)',
            icon: 'fa-hat-cowboy',
            prices: [
                { retailer: 'Titleist', price: 32, url: 'https://www.titleist.com/search?q=tour+performance+hat' },
                { retailer: 'Golf Galaxy', price: 30, url: 'https://www.golfgalaxy.com/search?searchTerm=titleist+golf+hats' },
                { retailer: 'Amazon', price: 26, url: 'https://www.amazon.com/s?k=titleist+tour+performance+golf+hat' }
            ]
        },
        {
            id: 'hat-3', category: 'hats', brand: 'Puma', name: 'P Snapback Golf Hat',
            styles: ['modern', 'bold'], fit: ['athletic', 'regular', 'relaxed'], gender: ['mens', 'womens', 'unisex'],
            features: ['moisture'], weather: ['hot', 'mild'],
            priceScore: 5, qualityScore: 3, performanceScore: 3, rating: 4.3, reviews: 1560,
            gradient: 'linear-gradient(135deg, #2d2d2d, #0f4c75)',
            icon: 'fa-hat-cowboy',
            prices: [
                { retailer: 'Puma.com', price: 28, url: 'https://us.puma.com/us/en/collections/golf' },
                { retailer: 'Amazon', price: 18, url: 'https://www.amazon.com/s?k=puma+p+snapback+golf+hat' },
                { retailer: 'Dick\'s Sporting Goods', price: 22, url: 'https://www.dickssportinggoods.com/search?searchTerm=puma+golf+hats' }
            ]
        },
        {
            id: 'hat-4', category: 'hats', brand: 'Callaway', name: 'Performance Pro Golf Hat',
            styles: ['classic', 'athletic'], fit: ['regular', 'relaxed'], gender: ['mens', 'womens', 'unisex'],
            features: ['moisture', 'uv'], weather: ['hot', 'mild'],
            priceScore: 5, qualityScore: 3, performanceScore: 3, rating: 4.4, reviews: 2300,
            gradient: 'linear-gradient(135deg, #1a1a2e, #0f3460)',
            icon: 'fa-hat-cowboy',
            prices: [
                { retailer: 'Callaway Golf', price: 26, url: 'https://www.callawaygolf.com/search?q=performance+pro+hat' },
                { retailer: 'Amazon', price: 18, url: 'https://www.amazon.com/s?k=callaway+performance+pro+golf+hat' },
                { retailer: 'Dick\'s Sporting Goods', price: 22, url: 'https://www.dickssportinggoods.com/search?searchTerm=callaway+golf+hats' }
            ]
        },

        // ─── BASE LAYERS ───
        {
            id: 'base-1', category: 'baselayers', brand: 'Under Armour', name: 'ColdGear Infrared Golf Base Layer',
            styles: ['athletic'], fit: ['athletic', 'regular'], gender: ['mens', 'womens', 'unisex'],
            features: ['moisture', 'stretch', 'odor'], weather: ['cold'],
            priceScore: 3, qualityScore: 4, performanceScore: 5, rating: 4.6, reviews: 1890,
            gradient: 'linear-gradient(135deg, #0d1b2a, #1b263b)',
            icon: 'fa-layer-group',
            prices: [
                { retailer: 'Under Armour', price: 60, url: 'https://www.underarmour.com/en-us/c/mens/golf/' },
                { retailer: 'Amazon', price: 48, url: 'https://www.amazon.com/s?k=under+armour+coldgear+golf+base+layer' },
                { retailer: 'Dick\'s Sporting Goods', price: 55, url: 'https://www.dickssportinggoods.com/search?searchTerm=under+armour+base+layers' }
            ]
        },
        {
            id: 'base-2', category: 'baselayers', brand: 'Nike', name: 'Dri-FIT UV Long Sleeve Top',
            styles: ['athletic', 'modern'], fit: ['athletic', 'regular'], gender: ['mens', 'womens', 'unisex'],
            features: ['moisture', 'uv', 'stretch'], weather: ['cold', 'mild'],
            priceScore: 3, qualityScore: 4, performanceScore: 5, rating: 4.5, reviews: 1240,
            gradient: 'linear-gradient(135deg, #1a1a2e, #16213e)',
            icon: 'fa-layer-group',
            prices: [
                { retailer: 'Nike.com', price: 55, url: 'https://www.nike.com/w?q=nike+golf+long+sleeve' },
                { retailer: 'Dick\'s Sporting Goods', price: 50, url: 'https://www.dickssportinggoods.com/search?searchTerm=nike+golf+base+layers' },
                { retailer: 'Amazon', price: 45, url: 'https://www.amazon.com/s?k=nike+dri-fit+uv+golf+long+sleeve' }
            ]
        },
        {
            id: 'base-3', category: 'baselayers', brand: 'FootJoy', name: 'ThermoSeries Base Layer',
            styles: ['classic', 'athletic'], fit: ['regular', 'relaxed'], gender: ['mens', 'unisex'],
            features: ['moisture', 'stretch', 'odor'], weather: ['cold'],
            priceScore: 2, qualityScore: 5, performanceScore: 4, rating: 4.6, reviews: 680,
            gradient: 'linear-gradient(135deg, #1b2838, #2a4858)',
            icon: 'fa-layer-group',
            prices: [
                { retailer: 'FootJoy', price: 85, url: 'https://www.footjoy.com/search?q=thermoseries+base+layer' },
                { retailer: 'Golf Galaxy', price: 80, url: 'https://www.golfgalaxy.com/search?searchTerm=footjoy+base+layers' },
                { retailer: 'Amazon', price: 72, url: 'https://www.amazon.com/s?k=footjoy+thermoseries+base+layer' }
            ]
        },

        // ─── ACCESSORIES ───
        {
            id: 'acc-1', category: 'accessories', brand: 'FootJoy', name: 'StaSof Golf Glove',
            styles: ['classic', 'athletic', 'modern', 'bold'], fit: ['athletic', 'regular', 'relaxed'], gender: ['mens', 'womens', 'unisex'],
            features: ['moisture'], weather: ['hot', 'mild', 'cold'],
            priceScore: 3, qualityScore: 5, performanceScore: 5, rating: 4.8, reviews: 8900,
            gradient: 'linear-gradient(135deg, #1b2838, #2a4858)',
            icon: 'fa-mitten',
            prices: [
                { retailer: 'FootJoy', price: 22, url: 'https://www.footjoy.com/golf-gloves/' },
                { retailer: 'Golf Galaxy', price: 20, url: 'https://www.golfgalaxy.com/search?searchTerm=footjoy+golf+gloves' },
                { retailer: 'Amazon', price: 17, url: 'https://www.amazon.com/s?k=footjoy+stasof+golf+glove' },
                { retailer: 'Dick\'s Sporting Goods', price: 20, url: 'https://www.dickssportinggoods.com/search?searchTerm=footjoy+golf+gloves' }
            ]
        },
        {
            id: 'acc-2', category: 'accessories', brand: 'Nike', name: 'Essentials Woven Golf Belt',
            styles: ['athletic', 'modern'], fit: ['athletic', 'regular', 'relaxed'], gender: ['mens', 'unisex'],
            features: ['stretch'], weather: ['hot', 'mild', 'cold'],
            priceScore: 4, qualityScore: 4, performanceScore: 3, rating: 4.5, reviews: 1450,
            gradient: 'linear-gradient(135deg, #1a1a2e, #16213e)',
            icon: 'fa-mitten',
            prices: [
                { retailer: 'Nike.com', price: 30, url: 'https://www.nike.com/w?q=nike+golf+belt' },
                { retailer: 'Amazon', price: 25, url: 'https://www.amazon.com/s?k=nike+essentials+golf+belt' },
                { retailer: 'Dick\'s Sporting Goods', price: 28, url: 'https://www.dickssportinggoods.com/search?searchTerm=nike+golf+belts' }
            ]
        },
        {
            id: 'acc-3', category: 'accessories', brand: 'Stance', name: 'Versa Tab Golf Socks (3-Pack)',
            styles: ['modern', 'bold', 'athletic'], fit: ['athletic', 'regular', 'relaxed'], gender: ['mens', 'womens', 'unisex'],
            features: ['moisture', 'odor'], weather: ['hot', 'mild'],
            priceScore: 3, qualityScore: 5, performanceScore: 4, rating: 4.6, reviews: 2100,
            gradient: 'linear-gradient(135deg, #2d2d2d, #4a4a4a)',
            icon: 'fa-mitten',
            prices: [
                { retailer: 'Stance', price: 40, url: 'https://www.stance.com/search?q=versa+tab+golf+socks' },
                { retailer: 'Amazon', price: 34, url: 'https://www.amazon.com/s?k=stance+golf+socks' },
                { retailer: 'Golf Galaxy', price: 38, url: 'https://www.golfgalaxy.com/search?searchTerm=stance+golf+socks' }
            ]
        },
        {
            id: 'acc-4', category: 'accessories', brand: 'Peter Millar', name: 'Crown Leather Golf Belt',
            styles: ['classic'], fit: ['athletic', 'regular', 'relaxed'], gender: ['mens', 'unisex'],
            features: [], weather: ['hot', 'mild', 'cold'],
            priceScore: 1, qualityScore: 5, performanceScore: 2, rating: 4.8, reviews: 380,
            gradient: 'linear-gradient(135deg, #1a3a5c, #2d5016)',
            icon: 'fa-mitten',
            prices: [
                { retailer: 'Peter Millar', price: 128, url: 'https://www.petermillar.com/search?q=crown+leather+belt' },
                { retailer: 'Nordstrom', price: 128, url: 'https://www.nordstrom.com/sr?keyword=peter+millar+golf+belt' }
            ]
        }
    ];

    // ── Feature Labels ───────────────────────
    const FEATURE_LABELS = {
        uv: 'UV Protection',
        moisture: 'Moisture Wicking',
        stretch: '4-Way Stretch',
        pockets: 'Extra Pockets',
        waterproof: 'Waterproof',
        odor: 'Odor Resistant'
    };

    // ── DOM References ────────────────────────
    const progressFill = document.getElementById('progressFill');
    const progressSteps = document.querySelectorAll('.progress-step');
    const wizardSteps = document.querySelectorAll('.wizard-step');
    const priorityRanker = document.getElementById('priorityRanker');

    // ── Navigation ────────────────────────────
    function goToStep(stepNum) {
        if (stepNum < 1 || stepNum > 6) return;

        // Validate current step before advancing
        if (stepNum > state.currentStep && !validateStep(state.currentStep)) return;

        // If going to results, generate them
        if (stepNum === 6) {
            generateResults();
        }

        state.currentStep = stepNum;

        // Update wizard steps
        wizardSteps.forEach(s => s.classList.remove('active'));
        const target = document.getElementById('step-' + stepNum);
        if (target) target.classList.add('active');

        // Update progress bar
        progressFill.style.width = ((stepNum / 6) * 100) + '%';

        // Update progress step indicators
        progressSteps.forEach(ps => {
            const sNum = parseInt(ps.dataset.step);
            ps.classList.remove('active', 'completed');
            if (sNum === stepNum) ps.classList.add('active');
            else if (sNum < stepNum) ps.classList.add('completed');
        });

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function validateStep(stepNum) {
        clearValidation();

        if (stepNum === 2) {
            if (!state.gender) return showValidation('step-2', 'Please select a gender to continue.');
            if (!state.fit) return showValidation('step-2', 'Please select a preferred fit.');
        }

        if (stepNum === 3) {
            if (state.styles.length === 0) return showValidation('step-3', 'Please select at least one style.');
        }

        if (stepNum === 4) {
            if (!state.transport) return showValidation('step-4', 'Please select how you get around the course.');
            if (state.weather.length === 0) return showValidation('step-4', 'Please select at least one weather type.');
        }

        if (stepNum === 5) {
            if (state.categories.length === 0) return showValidation('step-5', 'Please select at least one category.');
        }

        return true;
    }

    function showValidation(stepId, msg) {
        const step = document.getElementById(stepId);
        const actions = step.querySelector('.step-actions');
        const existing = step.querySelector('.validation-msg');
        if (existing) existing.remove();

        const div = document.createElement('div');
        div.className = 'validation-msg';
        div.textContent = msg;
        actions.parentNode.insertBefore(div, actions);
        return false;
    }

    function clearValidation() {
        document.querySelectorAll('.validation-msg').forEach(el => el.remove());
    }

    // ── Next / Back Buttons ───────────────────
    document.querySelectorAll('.next-btn').forEach(btn => {
        btn.addEventListener('click', () => goToStep(parseInt(btn.dataset.next)));
    });

    document.querySelectorAll('.prev-btn').forEach(btn => {
        btn.addEventListener('click', () => goToStep(parseInt(btn.dataset.prev)));
    });

    // Restart buttons
    const restartBtn = document.getElementById('restartBtn');
    const navRestart = document.getElementById('nav-restart');
    if (restartBtn) restartBtn.addEventListener('click', () => location.reload());
    if (navRestart) navRestart.addEventListener('click', e => { e.preventDefault(); location.reload(); });

    // How It Works (scroll to step 1)
    const navAbout = document.getElementById('nav-about');
    if (navAbout) navAbout.addEventListener('click', e => { e.preventDefault(); goToStep(1); });

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });
    }

    // ── Priority Drag-and-Drop ────────────────
    let dragItem = null;

    priorityRanker.querySelectorAll('.priority-item').forEach(item => {
        item.addEventListener('dragstart', e => {
            dragItem = item;
            setTimeout(() => item.classList.add('dragging'), 0);
        });

        item.addEventListener('dragend', () => {
            item.classList.remove('dragging');
            priorityRanker.querySelectorAll('.priority-item').forEach(i => i.classList.remove('drag-over'));
            updatePriorityRanks();
            dragItem = null;
        });

        item.addEventListener('dragover', e => {
            e.preventDefault();
            if (item !== dragItem) item.classList.add('drag-over');
        });

        item.addEventListener('dragleave', () => {
            item.classList.remove('drag-over');
        });

        item.addEventListener('drop', e => {
            e.preventDefault();
            item.classList.remove('drag-over');
            if (dragItem && dragItem !== item) {
                const allItems = [...priorityRanker.querySelectorAll('.priority-item')];
                const dragIdx = allItems.indexOf(dragItem);
                const dropIdx = allItems.indexOf(item);

                if (dragIdx < dropIdx) {
                    item.after(dragItem);
                } else {
                    item.before(dragItem);
                }
            }
        });

        // Touch support for mobile drag
        let touchStartY = 0;
        item.addEventListener('touchstart', e => {
            dragItem = item;
            touchStartY = e.touches[0].clientY;
            item.classList.add('dragging');
        }, { passive: true });

        item.addEventListener('touchmove', e => {
            e.preventDefault();
            const touch = e.touches[0];
            const allItems = [...priorityRanker.querySelectorAll('.priority-item')];
            allItems.forEach(i => i.classList.remove('drag-over'));

            const target = document.elementFromPoint(touch.clientX, touch.clientY);
            const targetItem = target ? target.closest('.priority-item') : null;
            if (targetItem && targetItem !== dragItem) {
                targetItem.classList.add('drag-over');
            }
        }, { passive: false });

        item.addEventListener('touchend', e => {
            item.classList.remove('dragging');
            const touch = e.changedTouches[0];
            const target = document.elementFromPoint(touch.clientX, touch.clientY);
            const targetItem = target ? target.closest('.priority-item') : null;

            if (targetItem && targetItem !== dragItem) {
                const allItems = [...priorityRanker.querySelectorAll('.priority-item')];
                const dragIdx = allItems.indexOf(dragItem);
                const dropIdx = allItems.indexOf(targetItem);
                if (dragIdx < dropIdx) targetItem.after(dragItem);
                else targetItem.before(dragItem);
            }

            priorityRanker.querySelectorAll('.priority-item').forEach(i => i.classList.remove('drag-over'));
            updatePriorityRanks();
            dragItem = null;
        });
    });

    function updatePriorityRanks() {
        const items = priorityRanker.querySelectorAll('.priority-item');
        state.priorities = [];
        items.forEach((item, i) => {
            item.querySelector('.priority-rank').textContent = '#' + (i + 1);
            state.priorities.push(item.dataset.priority);
        });
    }

    // ── Option Card Selection ─────────────────
    document.querySelectorAll('.option-cards').forEach(group => {
        const isMulti = group.classList.contains('multi-select');
        const field = group.dataset.field;

        group.querySelectorAll('.option-card').forEach(card => {
            card.addEventListener('click', () => {
                const val = card.dataset.value;

                if (isMulti) {
                    card.classList.toggle('selected');
                    if (card.classList.contains('selected')) {
                        if (!state[field]) state[field] = [];
                        state[field].push(val);
                    } else {
                        state[field] = state[field].filter(v => v !== val);
                    }
                } else {
                    group.querySelectorAll('.option-card').forEach(c => c.classList.remove('selected'));
                    card.classList.add('selected');
                    state[field] = val;
                }

                clearValidation();
            });
        });
    });

    // ── Style Card Selection (multi) ──────────
    document.querySelectorAll('.style-card').forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('selected');
            const val = card.dataset.value;
            if (card.classList.contains('selected')) {
                state.styles.push(val);
            } else {
                state.styles = state.styles.filter(v => v !== val);
            }
            clearValidation();
        });
    });

    // ── Category Card Selection (multi) ───────
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('selected');
            const val = card.dataset.value;
            if (card.classList.contains('selected')) {
                state.categories.push(val);
            } else {
                state.categories = state.categories.filter(v => v !== val);
            }
            clearValidation();
        });
    });

    // ── Flexibility Slider ────────────────────
    const flexSlider = document.getElementById('flexibility');
    if (flexSlider) {
        flexSlider.addEventListener('input', () => {
            state.flexibility = parseInt(flexSlider.value);
        });
    }

    // ── Height/Weight Inputs ──────────────────
    const hFeet = document.getElementById('heightFeet');
    const hInches = document.getElementById('heightInches');
    const wInput = document.getElementById('weight');

    if (hFeet) hFeet.addEventListener('change', () => { state.heightFeet = hFeet.value; });
    if (hInches) hInches.addEventListener('change', () => { state.heightInches = hInches.value; });
    if (wInput) wInput.addEventListener('input', () => { state.weight = wInput.value; });

    // ── Recommendation Engine ─────────────────
    function scoreProduct(product) {
        let score = 0;

        // Priority weighting: first priority gets 3x, second 2x, third 1x
        const weights = {};
        state.priorities.forEach((p, i) => {
            weights[p] = 3 - i; // 3, 2, 1
        });

        score += (product.priceScore * weights.price) || 0;
        score += (product.qualityScore * weights.quality) || 0;
        score += (product.performanceScore * weights.performance) || 0;

        // Style match bonus
        const styleOverlap = product.styles.filter(s => state.styles.includes(s)).length;
        score += styleOverlap * 4;

        // Fit match bonus
        if (state.fit && product.fit.includes(state.fit)) {
            score += 5;
        }

        // Gender match
        if (state.gender && product.gender.includes(state.gender)) {
            score += 3;
        }

        // Weather match
        const weatherOverlap = product.weather.filter(w => state.weather.includes(w)).length;
        score += weatherOverlap * 2;

        // Feature match
        const featureOverlap = product.features.filter(f => state.features.includes(f)).length;
        score += featureOverlap * 3;

        // Flexibility bonus (high flexibility need → favor stretch items)
        if (state.flexibility >= 4 && product.features.includes('stretch')) {
            score += 3;
        }

        // Walking bonus (walkers need moisture wicking + lightweight)
        if ((state.transport === 'walk' || state.transport === 'both') && product.features.includes('moisture')) {
            score += 2;
        }

        return score;
    }

    function generateResults() {
        // Filter products by selected categories
        let filtered = PRODUCTS.filter(p => state.categories.includes(p.category));

        // Score and sort
        filtered = filtered.map(p => ({
            ...p,
            matchScore: scoreProduct(p),
            bestPrice: Math.min(...p.prices.map(pr => pr.price)),
            maxPrice: Math.max(...p.prices.map(pr => pr.price))
        }));

        filtered.sort((a, b) => b.matchScore - a.matchScore);

        // Store for re-sorting
        window._currentResults = filtered;

        renderProfileSummary();
        renderResults(filtered);

        // Sort handler
        const sortSelect = document.getElementById('sortBy');
        sortSelect.onchange = () => {
            let sorted = [...window._currentResults];
            switch (sortSelect.value) {
                case 'price-low': sorted.sort((a, b) => a.bestPrice - b.bestPrice); break;
                case 'price-high': sorted.sort((a, b) => b.bestPrice - a.bestPrice); break;
                case 'rating': sorted.sort((a, b) => b.rating - a.rating); break;
                default: sorted.sort((a, b) => b.matchScore - a.matchScore);
            }
            renderResults(sorted);
        };
    }

    function renderProfileSummary() {
        const container = document.getElementById('profileSummary');
        const tags = [];

        tags.push(`<span class="profile-tag priority-1"><i class="fas fa-trophy"></i> #1 Priority: ${capitalize(state.priorities[0])}</span>`);

        if (state.gender) tags.push(`<span class="profile-tag"><i class="fas fa-user"></i> ${capitalize(state.gender)}</span>`);
        if (state.fit) tags.push(`<span class="profile-tag"><i class="fas fa-ruler"></i> ${capitalize(state.fit)} Fit</span>`);

        state.styles.forEach(s => {
            tags.push(`<span class="profile-tag"><i class="fas fa-palette"></i> ${capitalize(s)}</span>`);
        });

        state.weather.forEach(w => {
            const icons = { hot: 'fa-sun', mild: 'fa-cloud-sun', cold: 'fa-snowflake', rain: 'fa-cloud-rain' };
            tags.push(`<span class="profile-tag"><i class="fas ${icons[w] || 'fa-cloud'}"></i> ${capitalize(w)}</span>`);
        });

        if (state.transport) tags.push(`<span class="profile-tag"><i class="fas fa-person-walking"></i> ${capitalize(state.transport)}</span>`);

        container.innerHTML = tags.join('');

        // Summary text
        const summaryEl = document.getElementById('results-summary');
        summaryEl.textContent = `Based on your profile, we found the best ${capitalize(state.priorities[0])}-focused picks in ${capitalize(state.styles[0] || 'your')} style.`;
    }

    function renderResults(products) {
        const grid = document.getElementById('resultsGrid');
        const countEl = document.getElementById('resultsCount');

        countEl.textContent = products.length + ' product' + (products.length !== 1 ? 's' : '') + ' found';

        if (products.length === 0) {
            grid.innerHTML = '<p style="text-align:center;color:var(--text-muted);padding:40px;">No products match your criteria. Try broadening your selections.</p>';
            return;
        }

        const maxScore = Math.max(...products.map(p => p.matchScore));

        grid.innerHTML = products.map(product => {
            const matchPct = Math.round((product.matchScore / maxScore) * 100);
            const bestPrice = product.bestPrice;
            const hasDeal = product.maxPrice > bestPrice;
            const savings = hasDeal ? product.maxPrice - bestPrice : 0;

            // Stars
            const fullStars = Math.floor(product.rating);
            const halfStar = product.rating % 1 >= 0.3;
            let starsHtml = '';
            for (let i = 0; i < fullStars; i++) starsHtml += '<i class="fas fa-star"></i>';
            if (halfStar) starsHtml += '<i class="fas fa-star-half-alt"></i>';

            // Features with match highlighting
            const featureTags = product.features.map(f => {
                const isMatch = state.features.includes(f);
                return `<span class="feature-tag${isMatch ? ' match' : ''}">${FEATURE_LABELS[f] || f}</span>`;
            }).join('');

            // Retailer links sorted by price
            const sortedPrices = [...product.prices].sort((a, b) => a.price - b.price);
            const retailerHtml = sortedPrices.map((p, i) => {
                const isBest = i === 0 && hasDeal;
                return `<a href="${encodeURI(p.url)}" target="_blank" rel="noopener noreferrer" class="retailer-link${isBest ? ' best-deal' : ''}">
                    <span class="retailer-name">${escapeHtml(p.retailer)}</span>
                    <span><span class="retailer-price">$${p.price}</span> <i class="fas fa-external-link-alt"></i></span>
                </a>`;
            }).join('');

            return `<div class="product-card">
                <div class="product-image" style="background:${product.gradient}">
                    <span class="brand-initial">${escapeHtml(product.brand.substring(0, 2).toUpperCase())}</span>
                    <i class="fas ${product.icon}"></i>
                    ${matchPct >= 80 ? `<span class="match-badge">${matchPct}% Match</span>` : ''}
                    ${savings > 0 ? `<span class="deal-badge">Save $${savings}</span>` : ''}
                </div>
                <div class="product-body">
                    <div class="product-brand">${escapeHtml(product.brand)}</div>
                    <div class="product-name">${escapeHtml(product.name)}</div>
                    <div class="product-features">${featureTags}</div>
                    <div class="product-rating">
                        <span class="stars">${starsHtml}</span>
                        <span class="rating-count">${product.rating} (${product.reviews.toLocaleString()} reviews)</span>
                    </div>
                    <div class="price-section">
                        <div class="price-header">
                            <span class="best-price">$${bestPrice}</span>
                            ${hasDeal ? `<span class="original-price">$${product.maxPrice}</span>` : ''}
                        </div>
                        <div class="retailer-links">${retailerHtml}</div>
                    </div>
                </div>
            </div>`;
        }).join('');
    }

    // ── Utilities ─────────────────────────────
    function capitalize(str) {
        if (!str) return '';
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    function escapeHtml(str) {
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }

});
