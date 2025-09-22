import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Heart } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'الرئيسية', href: '#home' },
    { name: 'من نحن', href: '#about' },
    { name: 'خدماتنا', href: '#services' },
    { name: 'تواصل معنا', href: '#contact' }
  ];

  const usefulLinks = [
    { name: 'الأسئلة الشائعة', href: '#faq' },
    { name: 'السير الذاتية', href: '#resumes' },
    { name: 'سياسة الخصوصية', href: '#privacy' },
    { name: 'شروط الخدمة', href: '#terms' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12 rtl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-cyan-400">شركة الخدمات المنزلية</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              شريكك الموثوق في استقدام العاملات المنزلية. 18 عامًا من التميز في تقديم خدمات موثوقة ومتميزة.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <a href="#" className="bg-blue-600 p-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-pink-600 p-2 rounded-lg hover:bg-pink-700 transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">روابط سريعة</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">روابط مفيدة</h4>
            <ul className="space-y-3">
              {usefulLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">تواصل معنا</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 space-x-reverse">
                <MapPin className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                <div className="text-gray-300 text-sm">
                  <p>الدوار السابع - شارع المودة</p>
                  <p>خلف سيفوي السابع - مجمع طنوس التجاري</p>
                  <p>الطابق الثالث مكتب 301</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 space-x-reverse">
                <Phone className="w-5 h-5 text-cyan-400" />
                <div className="text-gray-300 text-sm">
                  <p>+962 79 748 8836</p>
                  <p>+962 79 132 6263</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 space-x-reverse">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span className="text-gray-300 text-sm">info@maidservice.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              ©2025 شركة الخدمات المنزلية. جميع الحقوق محفوظة
            </p>
            <p className="text-gray-400 text-sm flex items-center">
              صنع بـ <Heart className="w-4 h-4 text-red-500 mx-1" /> في الأردن
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

