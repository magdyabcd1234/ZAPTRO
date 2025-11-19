// import React from 'react'

// const Footer = () => {
//   return (
    
//     <div>footer</div>

//   )
// }

// export default Footer










import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#101829] text-gray-300 py-10 mt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">

        {/* القسم الأول */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">Zaptro</h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            Powering Your World with the Best in Electronics
          </p>
          <p>123 Electronics St, Style City. NY 10001<br /> Email:support@Zaptro.com <br /> phone:(123)456-7890</p>
        </div>

        {/* القسم الثاني */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Customer Service</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-red-400 transition">Contact Us</a></li>
            <li><a href="#" className="hover:text-red-400 transition">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-red-400 transition">FAQs</a></li>
            <li><a href="#" className="hover:text-red-400 transition">Order Tracking</a></li>
            <li><a href="#" className="hover:text-red-400 transition">Size Guide</a></li>
          </ul>
        </div>

        {/* القسم الثالث */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="hover:text-blue-500 transition"><Facebook size={22} /></a>
            <a href="#" className="hover:text-sky-400 transition"><Twitter size={22} /></a>
            <a href="#" className="hover:text-pink-500 transition"><Instagram size={22} /></a>
            <a href="#" className="hover:text-blue-400 transition"><Linkedin size={22} /></a>
          </div>
        </div>

    <div>
        <h1 className="text-3xl text-amber-50">Stay in the loop</h1>
        <p>Subscribe to get special offers, free giveaways, and more</p>

        <div className="footer-form mt-4 text-amber-50">
            <input type="text" placeholder="Your email address" className="py-2 px-2"/>
            <button className="bg-red-500 py-2 px-2 rounded">Subscribe</button>
        </div>
    </div>

      </div>

      {/* الجزء السفلي */}
      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-sm text-gray-500">
      © 2025 <span className="text-red-500">Zaptro</span>. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;