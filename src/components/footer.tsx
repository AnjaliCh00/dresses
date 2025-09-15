"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-12">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand / About */}
          <div>
            <h2 className="text-white text-2xl font-bold mb-4">Dressify</h2>
            <p className="text-sm">
              Discover stylish clothing that fits your personality.  
              Fashion made simple, elegant, and affordable.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/women" className="hover:text-white">
                  Women
                </Link>
              </li>
              <li>
                <Link href="/men" className="hover:text-white">
                  Men
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Customer Service
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/faq" className="hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:text-white">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Stay Connected
            </h3>
            <p className="text-sm mb-4">
              Subscribe to our newsletter and never miss the latest trends.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 w-full rounded-l-md text-black focus:outline-none"
              />
              <button
                type="submit"
                className="bg-white text-black px-4 py-2 rounded-r-md font-semibold"
              >
                Subscribe
              </button>
            </form>
            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <Link href="#" className="hover:text-white">
                <Facebook />
              </Link>
              <Link href="#" className="hover:text-white">
                <Instagram />
              </Link>
              <Link href="#" className="hover:text-white">
                <Twitter />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
          © {new Date().getFullYear()} Dressify. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
