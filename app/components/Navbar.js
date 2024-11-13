import { FaTelegram, FaTwitter, FaDiscord } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-4 md:px-6 py-4 bg-black bg-opacity-80 border-b-4 border-opacity-60 border-pink-500 shadow-lg neon-background font-mono">
      {/* Logo / Brand Name */}
      <div className="flex items-center space-x-4">
        <a href="/">
          <div className="bg-teal-500 text-black px-5 py-2 rounded-full text-lg font-extrabold tracking-widest shadow-md neon-text animate-pulse cursor-pointer">
            <span className="hidden sm:block">ROBO RUTH 12</span>
            <span className="sm:hidden">R12</span>
          </div>
        </a>
      </div>

      {/* Main Center Text */}
      <h1 className="hidden md:block text-xl md:text-2xl lg:text-3xl font-extrabold tracking-wider text-white neon-text-yellow animate-pulse text-center">
        JOIN THE <span className="neon-text-blue">ROBORUTH</span> REVOLUTION!
      </h1>

      {/* Social Icons and Additional Links */}
      <div className="flex items-center space-x-4 md:space-x-6">
        {/* Social Media Icons with Hover Effects */}
        <a href="https://t.me/RoboRuth12" target="_blank" rel="noopener noreferrer">
          <FaTelegram size={24} className="hover:text-purple-300 transition-transform transform hover:scale-110 neon-text-green" />
        </a>
        <a href="https://x.com/RoboRuth12" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={24} className="hover:text-purple-300 transition-transform transform hover:scale-110 neon-text-green" />
        </a>
        {/* <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
          <FaDiscord size={24} className="hover:text-yellow-300 transition-transform transform hover:scale-110 neon-text-green" />
        </a> */}

        {/* Merch Link Button */}
        <a href="#merch">
          <div className="bg-teal-500 text-black px-4 py-2 rounded-full font-bold shadow-md tracking-wide neon-button hover:bg-teal-600 transition duration-300 ease-in-out">
            MERCH
          </div>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
