"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <h1 className="text-4xl font-bold text-center mb-4">Contact Us</h1>
        <p className="text-center text-gray-600 mb-12">
          Have questions or feedback? We'd love to hear from you!
        </p>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-md">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1 font-medium">Name</label>
                <Input id="name" type="text" placeholder="Your Name" />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1 font-medium">Email</label>
                <Input id="email" type="email" placeholder="Your Email" />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1 font-medium">Message</label>
                <Textarea id="message" placeholder="Your Message" rows={5} />
              </div>
              <Button type="submit" className="w-full mt-2">Send Message</Button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col justify-center space-y-6 text-gray-700">
            <div className="flex items-center gap-3">
              <MapPin className="w-6 h-6 text-black" />
              <span>123 Fashion Street, New Delhi, India</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-6 h-6 text-black" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-6 h-6 text-black" />
              <span>support@dressify.com</span>
            </div>
          </div>

        </div>

        {/* Optional Map / Banner */}
        <div className="mt-16 h-64 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500">
          Map Placeholder
        </div>

      </div>
    </main>
  );
}
