import React, { useState } from 'react';
import { Phone, MessageCircle, Mail, Globe, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('ar');

  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar');
  };

  const menuItems = language === 'ar' ? [
    { name: 'الرئيسية', href: '#home' },
    { name: 'من نحن', href: '#about' },
    { name: 'خدماتنا', href: '#services' },
    { name: 'السير الذاتية', href: '#resumes' },
    { name: 'الأسئلة الشائعة', href: '#faq' },
    { name: 'تواصل معنا', href: '#contact' }
  ] : [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Our Services', href: '#services' },
    { name: 'Resumes', href: '#resumes' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact Us', href: '#contact' }
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Contact Bar */}
      <div className="hero-gradient text-white py-2">
        <div className="container mx-auto px-4">
          <div className={`flex justify-between items-center text-sm ${language === 'ar' ? 'rtl' : 'ltr'}`}>
            <div className="flex items-center space-x-4 space-x-reverse">
              <div className="flex items-center">
                <Phone className="w-4 h-4 ml-2" />
                <span>+962 79 748 8831</span>
              </div>
              <div className="flex items-center">
                <MessageCircle className="w-4 h-4 ml-2" />
                <span>+962 79 925 0286</span>
              </div>
            </div>
            <div className="flex items-center space-x-4 space-x-reverse">
              <div className="flex items-center">
                <Mail className="w-4 h-4 ml-2" />
                <span>info@maidservice.com</span>
              </div>
              <span>{language === 'ar' ? 'من السبت الى الخميس 9 صباحا - 5:30 مساءا' : 'Sat-Thu 9 AM - 5:30 PM'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className={`flex justify-between items-center ${language === 'ar' ? 'rtl' : 'ltr'}`}>
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-cyan-700">
              {language === 'ar' ? 'شركة الخدمات المنزلية' : 'Home Services Co.'}
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 space-x-reverse">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-gray-700 hover:text-cyan-700 transition-colors duration-300 font-medium"
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={toggleLanguage}
              className="flex items-center bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors duration-300"
            >
              <Globe className="w-4 h-4 ml-2" />
              {language === 'ar' ? 'English' : 'العربية'}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-cyan-700"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`md:hidden mt-4 pb-4 ${language === 'ar' ? 'rtl' : 'ltr'}`}>
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="block py-2 text-gray-700 hover:text-cyan-700 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={toggleLanguage}
              className="flex items-center bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors duration-300 mt-4"
            >
              <Globe className="w-4 h-4 ml-2" />
              {language === 'ar' ? 'English' : 'العربية'}
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

