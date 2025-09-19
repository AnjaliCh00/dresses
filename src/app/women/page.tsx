"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

import Link from "next/link";

const featuredWomenCloths = [
  {
    id: 1,
    title: "Elegant Saree",
    price: "₹2,499",
    image: "/images/vivek-aqrzx6ZWuYI-unsplash.jpg",
  },
  {
    id: 2,
    title: "Designer Kurti",
    price: "₹1,299",
    image: "/images/muneeb-malhotra-7W_LcKPjRFo-unsplash.jpg",
  },
  {
    id: 3,
    title: "Party Gown",
    price: "₹3,999",
    image: "/images/q-a-tr-n-BYWyLbpNZJ0-unsplash.jpg",
  },
  {
    id: 4,
    title: "Casual Top",
    price: "₹799",
    image: "/images/hale-tat-5b_RXCDykto-unsplash.jpg",
  },
];

export default function WomenPage() {
  return (
    <main className="bg-gray-50">

      {/* Section 1: Hero Banner */}
      <section className="relative w-full h-[500px] mb-16">
        <Image
          src="/images/clarke-sanders-JpCOGj0uIlI-unsplash.jpg"
          alt="Women Fashion"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0  bg-opacity-20 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">
            Women’s Exclusive Collection
          </h1>
          <p className="text-lg md:text-2xl mb-6 text-black">
            Elegance, Style, and Comfort in Every Outfit
          </p>
         
          <Button className="bg-white text-black hover:bg-gray-200">
            Shop Now
          </Button>
      
        </div>
      </section>

      {/* Section 2: Featured Products */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {featuredWomenCloths.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-4">
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={400}
                className="w-full h-64 object-cover rounded-xl"
              />
              <h3 className="mt-4 font-semibold text-lg">{item.title}</h3>
              <p className="text-gray-600">{item.price}</p>
            
              <Button className="mt-3 w-full">Add to Cart</Button>
     
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Full-width Banner / Promotion */}
      <section className="relative w-full h-[400px] my-16">
        <Image
          src="/images/maria-gavrilova-lls01pFlFjI-unsplash.jpg"
          alt="Seasonal Offer"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-opacity-40 flex flex-col items-center justify-center text-center text-white px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Summer Sale – Up to 50% Off
          </h2>
       <Link href="/sale">
          <Button className="bg-white text-black hover:bg-gray-200 mt-4">
            Shop Sale
          </Button>
          </Link>
       

                
        </div>
      </section>

      {/* Section 4: Casual Wear Spotlight */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Casual Wear Spotlight
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative h-96">
            <Image
              src="/images/jason-tran-tT_q3CtWUUM-unsplash.jpg"
              alt="Casual Look"
              fill
              className="object-cover rounded-xl shadow-md"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4">Stylish Everyday Tops</h3>
            <p className="text-gray-600 mb-6">
              Comfortable and trendy tops perfect for daily wear. Mix and match with your favorite jeans or skirts.
            </p>
      
            <Button className="bg-black text-white hover:bg-gray-800 w-48">
              Explore Collection
            </Button>
    
          </div>
        </div>
      </section>

    </main>
  );
}
