import { Menu, CheckCircle2 } from "lucide-react";
import { useState } from "react";

/**
 * Design Philosophy: Official Government Portal
 * - Matches the official Oman e-Visa portal (evisa.rop.gov.om)
 * - Clean, professional layout with official branding
 * - Blue (#4a6cca) accent color for navigation and footer
 * - Green (#26A65B) for success indicators
 * - Centered content with generous whitespace
 * - Decorative Omani pattern footer
 */

export default function Home() {
  const [language, setLanguage] = useState("en");

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header with Logo */}
      <header className="bg-white border-b border-gray-200 py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Left: Royal Oman Police Logo Image */}
          <div className="flex-shrink-0">
            <img 
              src="https://private-us-east-1.manuscdn.com/user_upload_by_module/session_file/310419663030155529/HshnNhQSydaovPrR.png?Expires=1803341885&Signature=bp4~6O-qzjw4eT5OBNezy1wgFPyKdnliVjOgPF6QiudD9Xbqr1OLv7iQexoKp-CxStcISjXK6XyNbel9Opt-LEXJsbjpFskuPpqFffGwiav3EYP0wQtr0FM1zT4YrVy11Yhbbhkh3Rp~~n6B8z~jNM5PIEsuhMrwFXqDho4pLKvIb~W1S1-W83cJlmR6rdWvKXEGf2EgjSS8xfZ3z0OazXjwc8SHiO6~SIrpVtgP5RXPTvpWSkE~ZX~BgHMweaTE3dULP0D6Aly-6uCrg6Xk7~J7-0PI0F1nCebhVCm-kzAb55O653Ih7QXJ3q0QGGCIC4REajV31xR8ESmixEIrkw__&Key-Pair-Id=K2HSFNDJXOU9YS" 
              alt="Royal Oman Police and e-Visa Header"
              className="h-20 object-contain"
            />
          </div>

          {/* Right: Menu Button */}
          <div className="flex-shrink-0 ml-auto">
            <button className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg transition-colors shadow-md">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Navigation Breadcrumb */}
      <nav className="text-white px-4 py-3 overflow-x-auto" style={{backgroundColor: '#4a6cca'}}>
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm whitespace-nowrap">
          <a href="#" className="hover:underline">Know your Visa Type</a>
          <span className="text-blue-300">|</span>
          <a href="#" className="hover:underline font-semibold">Track Your Application</a>
          <span className="text-blue-300">|</span>
          <a href="#" className="hover:underline">Share Your Experience</a>
          <span className="text-blue-300">|</span>
          <a href="#" className="hover:underline">Contact Us</a>
          <span className="text-blue-300">|</span>
          <a href="#" className="hover:underline">Frequently Asked Questions</a>
          <span className="ml-auto">
            <a href="#" className="hover:underline text-sm">العربية</a>
          </span>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 px-4 py-8 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          {/* Visa Status Card */}
          <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
            {/* Status Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                <CheckCircle2 size={56} className="text-white" strokeWidth={1.5} />
              </div>
            </div>

            {/* Status Title */}
            <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">
              Visa is Active
            </h1>

            {/* Divider */}
            <div className="border-t border-gray-300 mb-8"></div>

            {/* Visa Details */}
            <div className="space-y-6">
              {/* Visa Number */}
              <div className="text-center border-b border-gray-100 pb-4">
                <p className="text-gray-600 text-sm mb-2">Visa Number</p>
                <p className="text-2xl font-bold text-gray-900">65153418</p>
              </div>

              {/* Given Name */}
              <div className="text-center border-b border-gray-100 pb-4">
                <p className="text-gray-600 text-sm mb-2">Given Name</p>
                <p className="text-2xl font-bold text-gray-900">MUDESIR SULTI</p>
              </div>

              {/* Family Name */}
              <div className="text-center border-b border-gray-100 pb-4">
                <p className="text-gray-600 text-sm mb-2">Family Name</p>
                <p className="text-2xl font-bold text-gray-900">ADEM</p>
              </div>

              {/* Gender */}
              <div className="text-center border-b border-gray-100 pb-4">
                <p className="text-gray-600 text-sm mb-2">Gender</p>
                <p className="text-2xl font-bold text-gray-900">Male</p>
              </div>

              {/* Nationality */}
              <div className="text-center border-b border-gray-100 pb-4">
                <p className="text-gray-600 text-sm mb-2">Nationality</p>
                <p className="text-2xl font-bold text-gray-900">ETHIOPIA</p>
              </div>

              {/* Travel Document Number */}
              <div className="text-center border-b border-gray-100 pb-4">
                <p className="text-gray-600 text-sm mb-2">Travel Document Number</p>
                <p className="text-2xl font-bold text-gray-900">EQ2010723</p>
              </div>

              {/* Travel Document Expiry Date */}
              <div className="text-center border-b border-gray-100 pb-4">
                <p className="text-gray-600 text-sm mb-2">Travel Document Expiry Date</p>
                <p className="text-2xl font-bold text-gray-900">21-05-2030</p>
              </div>

              {/* Occupation */}
              <div className="text-center">
                <p className="text-gray-600 text-sm mb-2">Occupation</p>
                <p className="text-2xl font-bold text-gray-900">General Animal Breeder</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Decorative Footer Pattern */}
      <div className="py-0 px-0 overflow-hidden" style={{backgroundColor: '#4a6cca'}}>
        <img 
          src="https://private-us-east-1.manuscdn.com/user_upload_by_module/session_file/310419663030155529/TlnIexgmyevvUEyP.png?Expires=1803342030&Signature=mHagXSVXxDl2WOlWfO3G3hFoapNfIHcnk2L2KEC8CcetUh4MVtCOBlNknMqW6olNmuONkWr9A1v2X5r~LEWQEyhtgFuB3lhiWVKelGs4diBoiy~05qsC0JxF-FI1a9hfqHXqXE4k~b3kVGcy4b9JRyx-EtrbLhexNR9DPCZ4T1zgneGkr4Z1Iy6sn3KsWo5gh~jUIHF0znjL01V-f8-lEZYgRk0buABVEUIYYstU8G90hHeg3n~XKBHspDlPVjHeKMoL5IoguKOA5PAUg9CfgSbN-TbkIfqeTS0SLkj~JmUVpr2jK5I6zRihuUV7VQuubflRsf31Btpjg~EPvDsZ5g__&Key-Pair-Id=K2HSFNDJXOU9YS"
          alt="Decorative Omani Pattern"
          className="w-full h-auto block"
        />
      </div>

      {/* Footer Links */}
      <footer className="text-white px-4 py-4" style={{backgroundColor: '#506ac5'}}>
        <div className="max-w-7xl mx-auto flex flex-wrap gap-4 justify-center text-sm">
          <a href="#" className="hover:underline">Copyright</a>
          <span className="text-blue-300">|</span>
          <a href="#" className="hover:underline">Privacy Policy</a>
          <span className="text-blue-300">|</span>
          <a href="#" className="hover:underline">Disclaimer</a>
          <span className="text-blue-300">|</span>
          <a href="#" className="hover:underline">Sitemap</a>
          <span className="text-blue-300">|</span>
          <a href="#" className="hover:underline">Terms and Conditions</a>
        </div>
      </footer>
    </div>
  );
}
