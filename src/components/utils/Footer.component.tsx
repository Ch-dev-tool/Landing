import { StartupName } from "../../shared/protoData"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Facebook, Twitter, Instagram, Linkedin, Code } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <a href="/" className="flex items-center space-x-2 text-xl font-bold">
              <Code size={24} className="text-[#fca700]" />
              <span>{StartupName}</span>
            </a>
            <p className="text-gray-400">Empowering developers with cutting-edge AI technology.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-[#fca700] transition-colors">About Us</a></li>
              <li><a href="/services" className="hover:text-[#fca700] transition-colors">Services</a></li>
              <li><a href="/projects" className="hover:text-[#fca700] transition-colors">Projects</a></li>
              <li><a href="/pricing" className="hover:text-[#fca700] transition-colors">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="/privacy" className="hover:text-[#fca700] transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-[#fca700] transition-colors">Terms of Service</a></li>
              <li><a href="/cookies" className="hover:text-[#fca700] transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Stay updated with our latest features and releases.</p>
            <form className="flex space-x-2">
              <Input type="email" placeholder="Your email" className="bg-gray-800 border-gray-700" />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">&copy; 2023 Ch_Dev_tool. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

