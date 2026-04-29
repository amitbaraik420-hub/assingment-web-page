import Link from 'next/link';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'; 
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Footer Brand Section */}
        <div className="col-span-1 md:col-span-1">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-red-500">▼</span> Footer
          </h2>
          <p className="text-gray-400 text-sm">
            We are committed to providing the best learning experience. Join us to explore a wide range of courses and enhance your skills with our expert instructors.
          </p>
        </div>

        {/* Contact Info Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b border-red-500 pb-1 inline-block">Contact Info</h3>
          <ul className="text-gray-400 space-y-2 text-sm">
            <li>Email: info@example.com</li>
            <li>Phone: +880 1234-567890</li>
            <li>Address: Sylhet, Bangladesh</li>
          </ul>
        </div>

        {/* Social Links Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b border-red-500 pb-1 inline-block">Social Links</h3>
          <div className="flex space-x-4">
            <Link href="#" className="text-gray-400 hover:text-white transition-colors text-xl">
              <FaFacebook />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors text-xl">
              <FaTwitter />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors text-xl">
              <FaLinkedin />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors text-xl">
              <FaInstagram />
            </Link>
          </div>
        </div>

        {/* Legal Links Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b border-red-500 pb-1 inline-block">Useful Links</h3>
          <ul className="text-gray-400 space-y-2 text-sm">
            <li>
              <Link href="/terms" className="hover:text-red-400 transition-colors">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-red-400 transition-colors">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Copyright Section */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-xs">
        <p>&copy; {new Date().getFullYear()} Your Brand Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
