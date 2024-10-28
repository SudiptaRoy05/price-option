import PriceOption from "./PriceOption"


export default function PriceOptions() {
    const priceOptions =[
        {
          "id": 1,
          "name": "Wireless Bluetooth Headphones",
          "category": "Electronics",
          "price": 49.99,
          "currency": "USD",
          "inStock": true,
          "rating": 4.5
        },
        {
          "id": 2,
          "name": "Organic Cotton T-Shirt",
          "category": "Clothing",
          "price": 19.99,
          "currency": "USD",
          "inStock": true,
          "rating": 4.3
        },
        {
          "id": 3,
          "name": "Stainless Steel Water Bottle",
          "category": "Home & Kitchen",
          "price": 25.00,
          "currency": "USD",
          "inStock": true,
          "rating": 4.8
        },
        {
          "id": 4,
          "name": "Running Shoes",
          "category": "Footwear",
          "price": 89.99,
          "currency": "USD",
          "inStock": false,
          "rating": 4.2
        },
        {
          "id": 5,
          "name": "Smartphone Stand",
          "category": "Accessories",
          "price": 12.50,
          "currency": "USD",
          "inStock": true,
          "rating": 4.1
        },
        {
          "id": 6,
          "name": "Gaming Mouse",
          "category": "Electronics",
          "price": 29.99,
          "currency": "USD",
          "inStock": false,
          "rating": 4.6
        },
        {
          "id": 7,
          "name": "Leather Wallet",
          "category": "Accessories",
          "price": 35.00,
          "currency": "USD",
          "inStock": true,
          "rating": 4.4
        },
        {
          "id": 8,
          "name": "Ceramic Coffee Mug",
          "category": "Home & Kitchen",
          "price": 15.99,
          "currency": "USD",
          "inStock": true,
          "rating": 4.7
        },
        {
          "id": 9,
          "name": "Portable Charger",
          "category": "Electronics",
          "price": 22.00,
          "currency": "USD",
          "inStock": false,
          "rating": 4.5
        },
        {
          "id": 10,
          "name": "Yoga Mat",
          "category": "Sports",
          "price": 45.99,
          "currency": "USD",
          "inStock": true,
          "rating": 4.3
        }
      ]
      
  return (
    <div>
        <h2>Best price in the city</h2>
        {
            priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
        }
    </div>
  )
}
