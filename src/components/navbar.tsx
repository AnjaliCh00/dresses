"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-gray-800">
          Clothify
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 items-center">
         
          <Link href="/women" className="text-gray-700 hover:text-black">
            Women
          </Link>
           <Link href="/men" className="text-gray-700 hover:text-black">
            Men
          </Link>
          <Link href="/kids" className="text-gray-700 hover:text-black">
            Kids
          </Link>
          <Link href="/sale" className="text-red-600 font-semibold hover:text-red-800">
            Sale
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-black">
            About
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-black">
            Contact
          </Link>

          {/* Cart */}
          <Button variant="outline" size="icon">
            <ShoppingBag className="h-5 w-5" />
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col items-center gap-4 p-4">
           
            <Link href="/women" onClick={() => setIsOpen(false)}>
              Women
            </Link>
             <Link href="/men" onClick={() => setIsOpen(false)}>
              Men
            </Link>
            <Link href="/kids" onClick={() => setIsOpen(false)}>
              Kids
            </Link>
            <Link href="/sale" className="text-red-600 font-semibold" onClick={() => setIsOpen(false)}>
              Sale
            </Link>
            <Link href="/about" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
            <Button variant="outline" size="sm" className="w-full">
              <ShoppingBag className="h-5 w-5 mr-2" /> Cart
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
