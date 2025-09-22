import React from 'react';
import { Phone, MessageCircle, Mail, Star } from 'lucide-react';
import heroImage from '../assets/OJDCs1gDdaJO.jpeg';

const Hero = () => {
  return (
    <section id="home" className="hero-gradient text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between rtl">
          {/* Content */}
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
              <span className="mr-2 text-lg">18 عامًا من التميز</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              شريكك الموثوق في استقدام
              <span className="text-yellow-400"> العاملات المنزلية</span>
            </h1>
            
            <p className="text-xl mb-8 leading-relaxed opacity-90">
              خدمة موثوقة وذات مهارة ومصممة خصيصًا لتلبية احتياجاتك. نوفر أفضل العاملات المنزلية من جميع الجنسيات المعتمدة.
            </p>

            {/* Contact Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="tel:+962797488831"
                className="flex items-center justify-center bg-white text-cyan-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                <Phone className="w-5 h-5 ml-2" />
                الخط الساخن: +962 79 748 8831
              </a>
              
              <a
                href="https://wa.me/962799250286"
                className="flex items-center justify-center bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-300"
              >
                <MessageCircle className="w-5 h-5 ml-2" />
                واتساب: +962 79 925 0286
              </a>
            </div>

            {/* Additional Info */}
            <div className="flex flex-col sm:flex-row gap-6 text-sm opacity-90">
              <div className="flex items-center">
                <Mail className="w-4 h-4 ml-2" />
                <span>info@maidservice.com</span>
              </div>
              <div>
                <span>من السبت الى الخميس: 9 صباحا - 5:30 مساءا</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="lg:w-1/2 lg:pr-10">
            <div className="relative">
              <img
                src={heroImage}
                alt="خدمات التنظيف المنزلي"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white text-cyan-700 p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold">18+</div>
                <div className="text-sm">سنة خبرة</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

