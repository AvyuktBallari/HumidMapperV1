import logo from '../assets/icon.svg';
const Footer = () => {
    return (
      <div className="relative mt-16 font-cute">
        <div className="border-t border-neutral-800 px-8 pt-20 pb-32 relative bg-[#0f0f0f]">
          <div className="max-w-7xl mx-auto flex sm:flex-row flex-col justify-between items-start">
            {/* Logo Section */}
            <div className="flex flex-col items-start mb-4">
            <div className="flex items-center mb-4">
                <img
                  src={logo}
                  alt="Informatik Logo"
                  className="rounded-lg cursor-pointer object-contain h-8"
                />
                <h4 className="ml-2 text-lg text-[#cfcfcf] font-semibold">HumidMapper</h4>
              </div>
              <div className="text-sm text-gray-400">Copyright © 2025</div>
              <div className="text-xs text-gray-400 mt-2">All rights reserved</div>
            </div>
  
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 items-start mt-10 md:mt-0">
              <div className="flex flex-col space-y-4">
                <h5 className="text-sm font-semibold text-gray-300">Quick Links</h5>
                <a className="text-xs sm:text-sm text-gray-400 hover:text-gray-500 transition-colors">LinkedIn</a>
                <a className="text-xs sm:text-sm text-gray-400 hover:text-gray-500 transition-colors" href="#">About Us</a>
                <a className="text-xs sm:text-sm text-gray-400 hover:text-gray-500 transition-colors" href="/contact">Contact</a>
              </div>
  
              <div className="flex flex-col space-y-4">
                <h5 className="text-sm font-semibold text-gray-300">Contact</h5>
                <p className="text-xs sm:text-sm text-gray-400">6030 Southard Trce Cumming GA 30040</p>
                <p className="text-xs sm:text-sm text-gray-400">Phone: +1-470-297-5926</p>
                <p className="text-xs sm:text-sm text-gray-400">Email: hr@humidmapper.com</p>
              </div>
  
              {/* Newsletter Section */}
              <div className="flex flex-col space-y-4">
                <h5 className="text-sm font-semibold text-gray-300">Newsletter(soon)</h5>
                <p className="text-xs sm:text-sm text-gray-400">Sign up for our newsletter to get the latest updates:</p>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 text-sm border text-[#cfcfcf] border-gray-600 rounded-lg w-full"
                />
                <button className="bg-[#cfcfcf] text-black px-5 py-2 rounded-lg text-sm hover:scale-110 transiton duration-1000" disabled>
                  Soon
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Footer;