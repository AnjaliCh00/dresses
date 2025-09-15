"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

const menCloths = [
  { id: 1, title: "Denim Jacket", price: "₹2,799", image: "/images/men-denim.jpg" },
  { id: 2, title: "White Shirt", price: "₹1,199", image: "/images/men-shirt.jpg" },
  { id: 3, title: "Formal Suit", price: "₹5,999", image: "/images/men-suit.jpg" },
  { id: 4, title: "Hoodie", price: "₹1,499", image: "/images/men-hoodie.jpg" },
 
];

export default function MenPage() {
  return (
    <main className="bg-gray-100">

      {/* Section 1: Hero Banner Split Style */}
      <section className="relative flex flex-col md:flex-row items-center h-[500px] bg-gradient-to-r from-gray-800 to-gray-600 text-white px-6">
        <div className="md:w-1/2 flex flex-col justify-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            Men’s Premium Collection
          </h1>
          <p className="text-lg md:text-xl">
            Bold, stylish, and crafted for the modern man.
          </p>
          <Button className="bg-white text-black w-40 hover:bg-gray-200">
            Shop Now
          </Button>
        </div>
        <div className="md:w-1/2 relative h-80 md:h-full mt-8 md:mt-0">
          <Image
            src="/images/men-hero2.jpg"
            alt="Men Fashion"
            fill
            className="object-cover rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Section 2: Horizontal Scroll Products */}
      <section className="py-16">
  <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>

  {/* Grid with 4 columns */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6">
    {menCloths.map((item) => (
      <div
        key={item.id}
        className="bg-white rounded-xl shadow-md hover:shadow-xl transition"
      >
        <Image
          src={item.image}
          alt={item.title}
          width={400}
          height={300}
          className="w-full h-64 object-cover rounded-t-xl"
        />
        <div className="p-4">
          <h3 className="font-semibold">{item.title}</h3>
          <p className="text-gray-600">{item.price}</p>
          <Button className="mt-3 w-full">Add to Cart</Button>
        </div>
      </div>
    ))}
  </div>
</section>


      {/* Section 3: Dark Promo Banner */}
      <section className="relative h-[300px] my-16 bg-black text-white flex items-center justify-center">
        <div className="text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Seasonal Sale – Up to 40% Off
          </h2>
          <p className="text-lg mb-4">Grab your favorite styles before they're gone!</p>
          <Button className="bg-white text-black hover:bg-gray-200">Shop Sale</Button>
        </div>
      </section>

      {/* Section 4: Feature Section (Image + Text Side by Side) */}
      <section className="container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative h-96 md:h-[400px]">
          <Image
            src="/images/men-casual.jpg"
            alt="Casual Wear"
            fill
            className="object-cover rounded-xl shadow-lg"
          />
        </div>
        <div className="flex flex-col justify-center space-y-4">
          <h3 className="text-3xl font-bold">Casual Wear Essentials</h3>
          <p className="text-gray-700">
            Explore our collection of casual shirts, tees, and pants designed for comfort and style. Perfect for daily wear or weekend outings.
          </p>
          <Button className="bg-black text-white hover:bg-gray-800 w-48 mt-4">
            Explore Collection
          </Button>
        </div>
      </section>

    </main>
  );
}
