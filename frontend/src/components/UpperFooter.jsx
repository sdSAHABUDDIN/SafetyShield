// src/components/Footer.jsx
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#fdf8f3] text-black py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">
        
        {/* Logo + Social */}
        <div className="col-span-2">
          <img src="/logo.png" alt="Fire-Boltt" className="w-40 mb-6" />
          <h3 className="font-semibold mb-4">Follow Us</h3>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <FaFacebookF className="text-xl" />
              <span>Like us on Facebook</span>
            </li>
            <li className="flex items-center gap-3">
              <FaInstagram className="text-xl" />
              <span>Join us on Instagram</span>
            </li>
            <li className="flex items-center gap-3">
              <FaYoutube className="text-xl" />
              <span>Join us on YouTube</span>
            </li>
          </ul>
        </div>

        {/* Our Products */}
        <div>
          <h3 className="font-semibold mb-4">Our Products</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Audio</a></li>
            <li><a href="#">Smart watches</a></li>
          </ul>
          <h3 className="font-semibold mt-6 mb-4">Shop By Feature</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Luxury Stainless Steel Smartwatch</a></li>
            <li><a href="#">Bluetooth Calling Smartwatch</a></li>
            <li><a href="#">AMOLED Display Smartwatch</a></li>
            <li><a href="#">Essential Smartwatch</a></li>
            <li><a href="#">Round Display Smartwatch</a></li>
          </ul>
        </div>

        {/* Smartwatch By Price */}
        <div>
          <h3 className="font-semibold mb-4">Smartwatch By Price</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Smartwatch Under 1500</a></li>
            <li><a href="#">Smartwatch Under 2000</a></li>
          </ul>
        </div>

        {/* Help Desk */}
        <div>
          <h3 className="font-semibold mb-4">Help Desk</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Support</a></li>
            <li><a href="#">Track Complaint Status</a></li>
            <li><a href="#">Track Your Order</a></li>
            <li><a href="#">Warranty Registration</a></li>
            <li><a href="#">Warranty Policy</a></li>
            <li><a href="#">Register a Complaint</a></li>
            <li><a href="#">Shipping and Returns</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* About Boltt */}
        <div>
          <h3 className="font-semibold mb-4">About Boltt</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Shipping & Returns</a></li>
            <li><a href="#">Read Our Blogs</a></li>
          </ul>
          <h3 className="font-semibold mt-6 mb-4">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
