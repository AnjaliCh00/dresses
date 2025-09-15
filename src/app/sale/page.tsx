"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

const summerSaleProducts = [
  { id: 1, title: "Floral Dress", price: "₹1,499", image: "/images/summer-dress.jpg" },
  { id: 2, title: "Light T-Shirt", price: "₹599", image: "/images/summer-tshirt.jpg" },
  { id: 3, title: "Casual Shorts", price: "₹699", image: "/images/summer-shorts.jpg" },
  { id: 4, title: "Sun Hat", price: "₹399", image: "/images/summer-hat.jpg" },
];

const winterSaleProducts = [
  { id: 1, title: "Wool Sweater", price: "₹1,299", image: "/images/winter-sweater.jpg" },
  { id: 2, title: "Warm Jacket", price: "₹3,499", image: "/images/winter-jacket.jpg" },
  { id: 3, title: "Winter Scarf", price: "₹499", image: "/images/winter-scarf.jpg" },
  { id: 4, title: "Beanie", price: "₹299", image: "/images/winter-beanie.jpg" },
];

const stockClearanceProducts = [
  { id: 1, title: "Denim Jeans", price: "₹799", image: "/images/stock-jeans.jpg" },
  { id: 2, title: "Casual Shirt", price: "₹599", image: "/images/stock-shirt.jpg" },
  { id: 3, title: "Sneakers", price: "₹1,199", image: "/images/stock-shoes.jpg" },
  { id: 4, title: "Tote Bag", price: "₹399", image: "/images/stock-bag.jpg" },
];

function ProductGrid({ products }: { products: typeof summerSaleProducts }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {products.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-xl shadow-md hover:shadow-lg transition"
        >
          <Image
            src={item.image}
            alt={item.title}
            width={400}
            height={300}
            className="w-full h-64 object-cover rounded-t-xl"
          />
          <div className="p-4 text-center">
            <h3 className="font-semibold text-black">{item.title}</h3>
            <p className="text-gray-600">{item.price}</p>
            <Button className="mt-3 w-full bg-black text-white hover:bg-gray-800">Add to Cart</Button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function SalePage() {
  return (
    <main className="bg-gray-50">

      {/* Section 1: Summer Sale */}
      <section className="py-16 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-8 text-black">Summer Sale</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Bright and breezy outfits for the sunny season. Enjoy up to 50% off on selected summer collection!
        </p>
        <div className="container mx-auto px-4">
          <ProductGrid products={summerSaleProducts} />
        </div>
      </section>

      {/* Section 2: Winter Sale */}
      <section className="py-16 bg-white">
        <h2 className="text-4xl font-bold text-center mb-8 text-black">Winter Sale</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Stay warm and stylish! Grab your winter essentials at amazing discounted prices.
        </p>
        <div className="container mx-auto px-4">
          <ProductGrid products={winterSaleProducts} />
        </div>
      </section>

      {/* Section 3: Stock Clearance */}
      <section className="py-16 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-8 text-black">Stock Clearance</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Hurry! Limited stock items at unbeatable prices. Don’t miss your chance to grab them.
        </p>
        <div className="container mx-auto px-4">
          <ProductGrid products={stockClearanceProducts} />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-black text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Don’t Miss Out!</h2>
        <p className="mb-6">Subscribe now to get notified about upcoming sales and exclusive deals.</p>
        <Button className="bg-white text-black hover:bg-gray-200">Subscribe Now</Button>
      </section>

    </main>
  );
}
