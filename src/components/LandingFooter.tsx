import {
  FaRegEnvelope,
  FaLinkedin,
  FaComments,
  FaFacebookMessenger,
  FaYoutube,
} from "react-icons/fa";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { motion } from "framer-motion";

function Footer() {
  return (
    <motion.footer
      className="bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row flex-wrap gap-10 md:gap-0">
        {/* Logo & Description */}
        <div className="w-full md:w-1/3">
          <div className="flex items-center gap-3">
            <img src="./images/logo/company-logo.png" alt="logo" className="w-32" />
          </div>
          <p className="mt-4 text-[#9CA3AF] text-md md:text-lg font-light w-5/6">
            Empowering voices through AI-enhanced debate practice and learning.
            Join our community of critical thinkers and future leaders.
          </p>
        </div>

        {/* Platform / Resources / Contact */}
        <div className="w-full md:w-2/3 flex flex-col sm:flex-row justify-between mt-6 md:mt-0 gap-6">
          {/* Platform */}
          <div className="flex-1">
            <h4 className="text-md md:text-lg font-semibold mb-2">Platform</h4>
            <ul className="text-md md:text-lg text-[#9CA3AF] font-light space-y-1">
              <li>Features</li>
              <li>Pricing</li>
              <li>About Us</li>
              <li>Careers</li>
            </ul>
          </div>

          {/* Resources */}
          <div className="flex-1">
            <h4 className="text-md md:text-lg font-semibold mb-2">Resources</h4>
            <ul className="text-md md:text-lg text-[#9CA3AF] font-light space-y-1">
              <li>Blog</li>
              <li>Tutorials</li>
              <li>FAQ</li>
              <li>Support</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex-1">
            <h4 className="text-md md:text-lg font-semibold mb-2">Contact</h4>
            <ul className="text-md md:text-lg text-[#9CA3AF] font-light space-y-2">
              <li className="flex items-center gap-2"><FaRegEnvelope /> support@d23.ai</li>
              <li className="flex items-center gap-2"><IoCallOutline /> +1 (555) 123-4567</li>
              <li className="flex items-center gap-2"><IoLocationOutline /> 800 S Abel St, Milpitas, CA 95035</li>
              <li className="flex gap-6 text-lg mt-2">
                <FaLinkedin className="hover:text-blue-600 cursor-pointer" size={24} />
                <FaComments className="hover:text-gray-500 cursor-pointer" size={24} />
                <FaFacebookMessenger className="hover:text-blue-400 cursor-pointer" size={24} />
                <FaYoutube className="hover:text-red-600 cursor-pointer" size={24} />
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#2d7091] text-white text-center text-md md:text-lg py-4 mt-6">
        © 2025 D23.ai. All rights reserved.
      </div>
    </motion.footer>
  );
}

export default Footer;
