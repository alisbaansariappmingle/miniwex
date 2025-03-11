import React from 'react'

const Header = () => {
  return (
    <header className="bg-white py-4 px-6 fixed w-full z-50 shadow-sm">
    <div className=" mx-auto">
        <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
                <a href="#" className="flex items-center">
                    <span className="text-2xl font-bold bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text text-transparent">MiniWeb X</span>
                </a>
            </div>

            {/* Call to Action Button */}
            <div className=" lg:block">
                <button className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition duration-300">
                    Login Your Website
                </button>
            </div>

            {/* Mobile Menu Button */}
            {/* <div className="lg:hidden">
                <button
                    // onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="text-gray-500 hover:text-gray-600 focus:outline-none"
                >
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>   
            </div> */}
        </div>

        {/* Mobile Menu */}

    </div>
</header>
  )
}

export default Header