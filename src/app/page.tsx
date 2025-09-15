"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";


export default function Home() {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
  });

  const images = [
  {
    src: "/images/ghunnghat-delhi-nQAseP3G96Q-unsplash.jpg",
    alt: "Traditional Saree",
    caption: "Grace your look with our premium saree collection",
  },
  {
    src: "/images/francesco-liotti-HQDhVniM0ys-unsplash.jpg",
    alt: "Men’s Casual Wear",
    caption: "Stay stylish with our latest men’s casual outfits",
  },
  {
    src: "/images/nikhil-uttam-cwR5CVlcyBc-unsplash.jpg",
    alt: "Women’s Ethnic Wear",
    caption: "Discover elegant ethnic wear for every occasion",
  },
  {
    src: "/images/sandy-hibbard-083N2w-K5ts-unsplash.jpg",
    alt: "Designer Kurta",
    caption: "Stand out with our exclusive designer kurtas",
  },
];


  const timer = useRef<NodeJS.Timeout | null>(null);

  // Auto play every 3 seconds
  useEffect(() => {
    if (!instanceRef.current) return;

    const slider = instanceRef.current;

    timer.current = setInterval(() => {
      slider.next();
    }, 3000);

    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [instanceRef]);

  // women section card 
const womenCloths = [
  {
    id: 1,
    title: "Elegant Saree",
    price: "₹2,499",
    image: "/images/women-saree.jpg",
  },
  {
    id: 2,
    title: "Designer Kurti",
    price: "₹1,299",
    image: "/images/women-kurti.jpg",
  },
  {
    id: 3,
    title: "Party Gown",
    price: "₹3,999",
    image: "/images/women-gown.jpg",
  },
  {
    id: 4,
    title: "Casual Top",
    price: "₹799",
    image: "/images/women-top.jpg",
  },
];

// men secttion cards or data

const menCloths = [
  {
    id: 1,
    title: "Casual Denim Jacket",
    price: "₹2,799",
    image: "/images/men-denim.jpg",
  },
  {
    id: 2,
    title: "Classic White Shirt",
    price: "₹1,199",
    image: "/images/men-shirt.jpg",
  },
  {
    id: 3,
    title: "Formal Suit",
    price: "₹5,999",
    image: "/images/men-suit.jpg",
  },
  {
    id: 4,
    title: "Trendy Hoodie",
    price: "₹1,499",
    image: "/images/men-hoodie.jpg",
  },
];



  return (
    <main className="p-4">
      {/* carousel for the seasonal sell */}
      <div ref={sliderRef} className="keen-slider rounded-xl overflow-hidden">
  {images.map((img, idx) => (
    <div
      key={idx}
      className="keen-slider__slide relative flex items-center justify-center h-[300px] md:h-[500px]"
    >
      <Image
        src={img.src}
        alt={img.alt}
        width={1200}  // fixed width
        height={500}  // fixed height
        className="object-cover w-full h-full rounded-xl"
      />
      <div className="absolute bottom-0 bg-black bg-opacity-50 text-white w-full py-4 text-center text-lg md:text-xl">
        {img.caption}
      </div>
    </div>
  ))}
</div>


{/* women section */}




    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mx-auto px-4">
        {/* Banner */}
        <div className="relative mb-12">
          <Image
            src="/images/men-banner.jpg"
            alt="Men's Fashion"
            width={1200}
            height={500}
            className="w-full h-[300px] md:h-[450px] object-cover rounded-2xl"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white text-center rounded-2xl">
            <h2 className="text-4xl md:text-5xl font-bold">Men’s Collection</h2>
            <p className="mt-2 text-lg md:text-xl">Style that speaks for you ✨</p>
            <Button className="mt-6 bg-white text-black hover:bg-gray-200">
              Explore Now
            </Button>
          </div>
        </div>
</div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {womenCloths.map((item) => (
            <Card key={item.id} className="rounded-2xl shadow-md hover:shadow-xl transition">
              <CardHeader className="p-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover rounded-t-2xl"
                />
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-lg font-semibold">{item.title}</CardTitle>
                <p className="text-gray-600 mt-1">{item.price}</p>
              </CardContent>
              <CardFooter className="p-4 flex justify-center">
                <Button className="w-full">Add to Cart</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  {/* men section  */}

<section className="py-16 bg-gradient-to-b from-gray-50 to-gray-100">
  <div className="container mx-auto px-4">
    {/* Section Heading */}
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
      👔 Men’s Collection
    </h2>
</div>
    {/* Product Grid */}
    <div className=" mx-auto px-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {menCloths.map((item) => (
        <Card
          key={item.id}
          className="rounded-2xl shadow-md hover:shadow-2xl transition transform hover:-translate-y-2"
        >
          <Image
            src={item.image}
            alt={item.title}
            width={400}
            height={300}
            className="w-full h-64 object-cover rounded-t-2xl"
          />
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-gray-600">{item.price}</p>
          </CardContent>
          <CardFooter className="p-4 flex justify-center">
            <Button className="w-full">Add to Cart</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  </div>
</section>
{/* cloth section */}
 <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        {/* Heading + Text */}
        <h2 className="text-3xl font-bold mb-2">Kid’s Collection</h2>
        <p className="text-gray-600 mb-8">
          Explore our latest styles for every occasion.
        </p>

        {/* Simple Image */}
        <Image
          src="/images/mens-collection.jpg"
          alt="Kid's Clothing"
          width={400}
          height={400}
          className="mx-auto rounded-lg"
        />
      </div>
    </section>

    </main>
  );
}
