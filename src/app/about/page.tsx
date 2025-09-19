"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function AboutPage() {
  return (
    <main className="bg-gray-50">

      {/* Hero Section */}
      <section className="relative w-full h-[400px] mb-16">
        <Image
          src="/images/kevin-laminto-0ZPlUMo2lis-unsplash.jpg"
          alt="About Us"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0  bg-opacity-40 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">About Dressify</h1>
          <p className="text-lg md:text-xl">
            Fashion. Style. Comfort. Our story begins with a passion for clothing.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
        <p className="text-gray-700 text-center max-w-3xl mx-auto">
          Dressify was founded with the vision to bring stylish and affordable
          clothing to everyone. From casual wear to formal attire, we believe that
          fashion should be fun, accessible, and make you feel confident in your own
          skin. Our team carefully curates each collection to ensure quality, comfort,
          and the latest trends.
        </p>
      </section>

      {/* Our Values / Team Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-gray-100 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-2">Quality First</h3>
              <p className="text-gray-600">
                We prioritize the quality of our fabrics and designs in every product.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-2">Customer Happiness</h3>
              <p className="text-gray-600">
                Your satisfaction is our top priority. We strive to provide excellent service.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-2">Sustainable Fashion</h3>
              <p className="text-gray-600">
                We aim to create a positive impact through sustainable and responsible fashion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-16 bg-gray text-black text-center">
        <h2 className="text-3xl font-bold mb-4">Join the Dressify Community</h2>
        <p className="mb-6">
          Sign up for updates, exclusive offers, and the latest fashion trends.
        </p>
        <Link href="/#">    
        <Button className="bg-white text-black hover:bg-gray-100">
          Subscribe Now
        </Button>
        </Link>
      </section>

    </main>
  );
}
