import React from 'react';
import { Globe, Users, Star } from 'lucide-react';

const Nationalities = () => {
  const nationalities = [
    {
      name: "أوغندا",
      flag: "🇺🇬",
      description: "عاملات مدربات ومتخصصات في أعمال المنزل",
      rating: 4.8
    },
    {
      name: "الفلبين",
      flag: "🇵🇭",
      description: "خبرة واسعة في العناية بالأطفال وكبار السن",
      rating: 4.9
    },
    {
      name: "نيبال",
      flag: "🇳🇵",
      description: "مهارات عالية في التنظيف والطبخ",
      rating: 4.7
    },
    {
      name: "غانا",
      flag: "🇬🇭",
      description: "عاملات موثوقات ومتفانيات في العمل",
      rating: 4.6
    },
    {
      name: "بنغلادش",
      flag: "🇧🇩",
      description: "خدمات منزلية شاملة وعناية فائقة",
      rating: 4.5
    },
    {
      name: "إثيوبيا",
      flag: "🇪🇹",
      description: "تخصص في العناية المنزلية والضيافة",
      rating: 4.7
    },
    {
      name: "سريلانكا",
      flag: "🇱🇰",
      description: "مهارات متقدمة في إدارة المنزل",
      rating: 4.8
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 rtl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Globe className="w-8 h-8 text-cyan-600 ml-3" />
            <h2 className="text-4xl font-bold text-gray-800">الجنسيات المستقدمة</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            نوفر عاملات منزلية مدربات ومؤهلات من أفضل الجنسيات المعتمدة لضمان جودة الخدمة
          </p>
        </div>

        {/* Nationalities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {nationalities.map((nationality, index) => (
            <div key={index} className="service-card bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300">
              {/* Flag */}
              <div className="text-6xl mb-4">{nationality.flag}</div>
              
              {/* Country Name */}
              <h3 className="text-xl font-bold text-gray-800 mb-3">{nationality.name}</h3>
              
              {/* Rating */}
              <div className="flex items-center justify-center mb-3">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${i < Math.floor(nationality.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                  <span className="mr-2 text-sm text-gray-600 font-medium">{nationality.rating}</span>
                </div>
              </div>
              
              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">{nationality.description}</p>
              
              {/* Action Button */}
              <button className="mt-4 w-full bg-cyan-600 text-white py-2 px-4 rounded-lg hover:bg-cyan-700 transition-colors duration-300 text-sm font-medium">
                اطلب الآن
              </button>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-cyan-600 mb-2">7</div>
              <div className="text-gray-600">جنسيات متاحة</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-600 mb-2">1000+</div>
              <div className="text-gray-600">عاملة مستقدمة</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-600 mb-2">98%</div>
              <div className="text-gray-600">رضا العملاء</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-600 mb-2">18</div>
              <div className="text-gray-600">سنة خبرة</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nationalities;

