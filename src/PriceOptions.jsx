import PriceOption from "./PriceOption";

export default function PriceOptions() {
    const priceOptions = [
        {
          id: 1,
          name: "Wireless Bluetooth Headphones",
          category: "Electronics",
          price: 49.99,
          currency: "USD",
          inStock: true,
          rating: 4.5,
          features: ["Noise-canceling", "10-hour battery life", "Bluetooth 5.0"]
        },
        {
          id: 2,
          name: "Organic Cotton T-Shirt",
          category: "Clothing",
          price: 19.99,
          currency: "USD",
          inStock: true,
          rating: 4.3,
          features: ["100% organic cotton", "Eco-friendly dye", "Pre-shrunk"]
        },
        {
          id: 3,
          name: "Stainless Steel Water Bottle",
          category: "Home & Kitchen",
          price: 25.0,
          currency: "USD",
          inStock: true,
          rating: 4.8,
          features: ["Double-wall insulation", "Keeps drinks hot/cold", "BPA-free"]
        },
        {
          id: 4,
          name: "Running Shoes",
          category: "Footwear",
          price: 89.99,
          currency: "USD",
          inStock: false,
          rating: 4.2,
          features: ["Breathable material", "Non-slip sole", "Cushioned heel support"]
        },
        {
          id: 5,
          name: "Smartphone Stand",
          category: "Accessories",
          price: 12.5,
          currency: "USD",
          inStock: true,
          rating: 4.1,
          features: ["Adjustable angle", "Compact design", "Non-slip base"]
        },
        {
          id: 6,
          name: "Gaming Mouse",
          category: "Electronics",
          price: 29.99,
          currency: "USD",
          inStock: false,
          rating: 4.6,
          features: ["Customizable RGB lighting", "High-precision sensor", "Ergonomic design"]
        },
        {
          id: 7,
          name: "Leather Wallet",
          category: "Accessories",
          price: 35.0,
          currency: "USD",
          inStock: true,
          rating: 4.4,
          features: ["Genuine leather", "RFID-blocking", "Slim profile"]
        },
        {
          id: 8,
          name: "Ceramic Coffee Mug",
          category: "Home & Kitchen",
          price: 15.99,
          currency: "USD",
          inStock: true,
          rating: 4.7,
          features: ["Dishwasher-safe", "Microwave-safe", "Hand-painted design"]
        },
        {
          id: 9,
          name: "Portable Charger",
          category: "Electronics",
          price: 22.0,
          currency: "USD",
          inStock: false,
          rating: 4.5,
          features: ["10,000mAh capacity", "Fast charging", "Lightweight"]
        },
        {
          id: 10,
          name: "Yoga Mat",
          category: "Sports",
          price: 45.99,
          currency: "USD",
          inStock: true,
          rating: 4.3,
          features: ["Non-slip surface", "Eco-friendly material", "6mm thickness"]
        }
      ];
      
  return (
    <div className="px-2">
      <h2>Best price in the city</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {priceOptions.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
}
