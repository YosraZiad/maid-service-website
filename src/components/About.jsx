import React from 'react';
import { Users, Award, Shield, Clock } from 'lucide-react';
import aboutImage from '../assets/yuv3F0WoFaHo.jpg';

const About = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8 text-cyan-600" />,
      title: "فريق محترف",
      description: "عاملات مدربات ومؤهلات من أفضل مراكز التدريب"
    },
    {
      icon: <Award className="w-8 h-8 text-cyan-600" />,
      title: "18 سنة خبرة",
      description: "خبرة طويلة في مجال استقدام العمالة المنزلية"
    },
    {
      icon: <Shield className="w-8 h-8 text-cyan-600" />,
      title: "ضمان الجودة",
      description: "نضمن جودة الخدمة وموثوقية العاملات"
    },
    {
      icon: <Clock className="w-8 h-8 text-cyan-600" />,
      title: "خدمة سريعة",
      description: "إجراءات سريعة وفعالة لاستقدام العاملات"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 rtl">
          {/* Image */}
          <div className="lg:w-1/2">
            <img
              src={aboutImage}
              alt="عن الشركة"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>

          {/* Content */}
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">من نحن</h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              شركة رائدة في مجال استقدام العمالة المنزلية في المنطقة بخبرة تمتد لأكثر من 18 عامًا في الأردن ودول الخليج. 
              تأسست الشركة بهدف تلبية احتياجات الأسر والشركات في توفير العمالة المنزلية المؤهلة والتي تتمتع بالكفاءة العالية، 
              مع التركيز على توفير خدمات متميزة واحترافية.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 space-x-reverse">
                  <div className="flex-shrink-0 bg-cyan-100 p-3 rounded-lg">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

