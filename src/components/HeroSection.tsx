import React from 'react';
import heroimage from './heroimageweb.webp'

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-b from-[#101212] relative to-[#08201D]">
      {/* <header className="absolute inset-x-0 top-0 z-10 w-full">
        <div className="px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex-shrink-0">
              <a href="#" title="Forex Hub" className="flex">
                <img
                  className="w-auto h-8"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/5/logo.svg"
                  alt="Forex Hub Logo"
                />
              </a>
            </div>

            <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-10">
              <a href="#" title="Trading Features" className="text-base text-white transition-all duration-200 hover:text-opacity-80"> Features </a>
              <a href="#" title="Forex Solutions" className="text-base text-white transition-all duration-200 hover:text-opacity-80"> Solutions </a>
              <a href="#" title="Market Resources" className="text-base text-white transition-all duration-200 hover:text-opacity-80"> Resources </a>
              <a href="#" title="Forex Pricing" className="text-base text-white transition-all duration-200 hover:text-opacity-80"> Pricing </a>
            </div>

            <div className="lg:flex lg:items-center lg:justify-end lg:space-x-6 sm:ml-auto">
              <a href="#" title="Log in" className="hidden text-base text-white transition-all duration-200 lg:inline-flex hover:text-opacity-80"> Log in </a>
              <a href="#" title="Get Started" className="inline-flex items-center justify-center px-3 sm:px-5 py-2.5 text-sm sm:text-base font-semibold transition-all duration-200 text-white bg-white/20 hover:bg-white/40 focus:bg-white/40 rounded-lg" role="button"> Open a Forex Account </a>
            </div>

            <button type="button" className="inline-flex p-2 ml-1 text-white transition-all duration-200 rounded-md sm:ml-4 lg:hidden focus:bg-gray-800 hover:bg-gray-800">
              <svg className="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>

              <svg className="hidden w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </div>
      </header> */}

      <section className="relative lg:min-h-[1000px] pt-24 pb-10 sm:pt-32 sm:pb-16 lg:pb-24">
        <div className="absolute inset-x-0 bottom-0 z-10 hidden lg:flex">
          <img className="hidden w-full lg:block" src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/5/credit-cards.png" alt="Forex Trading" />
          <img className="block w-full lg:hidden" src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/5/credit-cards-mobile.png" alt="Forex Mobile" />
        </div>

        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-xl mx-auto text-center">
            <h1 className="text-4xl font-bold sm:text-6xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-white"> Trade Forex with Confidence </span>
            </h1>
            <p className="mt-5 text-base text-white sm:text-xl">Start trading on the global forex markets with easy-to-use tools and no hidden fees.</p>

            <a href="#" title="Open Account" className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-white transition-all duration-200 bg-blue-600 rounded-lg sm:mt-16 hover:bg-blue-700 focus:bg-blue-700" role="button">
              Start Trading
              <svg className="w-6 h-6 ml-8 -mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </a>

            <div className="grid grid-cols-1 px-20 mt-12 text-left gap-x-12 gap-y-8 sm:grid-cols-3 sm:px-0">
              <div className="flex items-center">
                <svg className="flex-shrink-0" width="31" height="25" viewBox="0 0 31 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M25.1667 14.187H20.3333C17.6637 14.187 15.5 16.3507 15.5 19.0203V19.8258C15.5 19.8258 18.0174 20.6314 22.75 20.6314C27.4826 20.6314 30 19.8258 30 19.8258V19.0203C30 16.3507 27.8363 14.187 25.1667 14.187Z"
                    stroke="#28CC9D"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18.7227 6.9369C18.7227 4.71276 20.5263 2.90912 22.7504 2.90912C24.9746 2.90912 26.7782 4.71276 26.7782 6.9369C26.7782 9.16104 24.9746 11.7702 22.7504 11.7702C20.5263 11.7702 18.7227 9.16104 18.7227 6.9369Z"
                    stroke="#28CC9D"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.2231 15.8512H7.11157C3.73595 15.8512 1 18.5871 1 21.9628V22.9814C1 22.9814 4.18311 24 10.1674 24C16.1516 24 19.3347 22.9814 19.3347 22.9814V21.9628C19.3347 18.5871 16.5988 15.8512 13.2231 15.8512Z"
                    fill="#0B1715"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.07422 6.68386C5.07422 3.87152 7.35485 1.59088 10.1672 1.59088C12.9795 1.59088 15.2602 3.87152 15.2602 6.68386C15.2602 9.4962 12.9795 12.7954 10.1672 12.7954C7.35485 12.7954 5.07422 9.4962 5.07422 6.68386Z"
                    fill="#0B1715"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="ml-3 text-lg text-white">Low spreads for high profitability.</p>
              </div>
              <div className="flex items-center">
                <svg className="flex-shrink-0" width="31" height="25" viewBox="0 0 31 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M21.333 18.0561C23.2993 18.0561 24.833 16.5224 24.833 14.5561C24.833 12.5898 23.2993 11.0561 21.333 11.0561C19.3667 11.0561 17.833 12.5898 17.833 14.5561C17.833 16.5224 19.3667 18.0561 21.333 18.0561Z"
                    stroke="#28CC9D"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.83301 18.0561C10.7993 18.0561 12.333 16.5224 12.333 14.5561C12.333 12.5898 10.7993 11.0561 8.83301 11.0561C6.86668 11.0561 5.33301 12.5898 5.33301 14.5561C5.33301 16.5224 6.86668 18.0561 8.83301 18.0561Z"
                    stroke="#28CC9D"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="ml-3 text-lg text-white">Leverage your trades with margin options.</p>
              </div>
              <div className="flex items-center">
                <svg className="flex-shrink-0" width="31" height="25" viewBox="0 0 31 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M22.5006 6.08393L18.8333 6.08393L16.9999 9.41625C16.6666 10.0839 16.0006 10.4163 15.3333 10.4163H11.6666C11.0003 10.4163 10.3333 10.0839 10.0000 9.41625L8.16666 6.08393L4.49999 6.08393"
                    stroke="#28CC9D"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.9999 20.1252C21.0001 20.1252 25.9999 15.2916 25.9999 10.2916C25.9999 5.29161 21.0001 0.458008 15.9999 0.458008C10.9999 0.458008 6.00002 5.29161 6.00002 10.2916C6.00002 15.2916 10.9999 20.1252 15.9999 20.1252Z"
                    stroke="#28CC9D"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="ml-3 text-lg text-white">Advanced charting and analysis tools.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
