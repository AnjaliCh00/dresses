"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

const kidsCloths = [
  { id: 1, title: "T-Shirt for Boys", price: "₹499", image: "/images/kids-tshirt.jpg" },
  { id: 2, title: "Dress for Girls", price: "₹799", image: "/images/kids-dress.jpg" },
  { id: 3, title: "Casual Shorts", price: "₹399", image: "/images/kids-shorts.jpg" },
  { id: 4, title: "Jacket", price: "₹1,199", image: "/images/kids-jacket.jpg" },
];

export default function KidsPage() {
  return (
    <main className="bg-gray-50">

      {/* Section 1: Hero Banner */}
      <section className="relative w-full h-[400px] mb-12">
        <Image
          src="/images/kids-hero.jpg"
          alt="Kids Fashion"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Kids’ Collection
          </h1>
          <p className="text-lg md:text-xl">
            Playful, Comfortable & Stylish Outfits for Your Little Ones
          </p>
          <Button className="mt-6 bg-white text-black hover:bg-gray-200">
            Shop Now
          </Button>
        </div>
      </section>

      {/* Section 2: Featured Products */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Kids Wear</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {kidsCloths.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition">
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={300}
                className="w-full h-64 object-cover rounded-t-xl"
              />
              <div className="p-4 text-center">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-gray-600">{item.price}</p>
                <Button className="mt-3 w-full">Add to Cart</Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Fun Promo Banner */}
      <section className="relative h-[300px] my-16 bg-gray-50 rounded-xl flex items-center justify-center">
        <div className="text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Summer Fun Sale – Up to 30% Off
          </h2>
          <p className="text-lg mb-4">Bright and colorful styles for every kid!</p>
          <Button className="bg-white text-black">Shop Sale</Button>
        </div>
      </section>

      {/* Section 4: Storytelling Section */}
      <section className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative h-80 md:h-[400px]">
          <Image
            src="/images/kids-play.jpg"
            alt="Playtime Outfits"
            fill
            className="object-cover rounded-xl shadow-lg"
          />
        </div>
        <div className="flex flex-col justify-center space-y-4">
          <h3 className="text-3xl font-bold">Comfortable Playtime Outfits</h3>
          <p className="text-gray-700">
            Soft fabrics, vibrant colors, and fun designs that let your kids move, play, and explore in style. Perfect for school, parties, and casual outings.
          </p>
          <Button className="bg-black text-white w-48 mt-4">
            Explore Collection
          </Button>
        </div>
      </section>

    </main>
  );
}
