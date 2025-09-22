import React from 'react';
import { UserPlus, FileText, Plane, Stethoscope, Camera, Fingerprint, Shield, Heart, GraduationCap, CheckCircle, Home, Users } from 'lucide-react';

const Services = () => {
  const mainServices = [
    {
      icon: <UserPlus className="w-12 h-12 text-cyan-600" />,
      title: "استقدام العاملات",
      description: "استقدام العاملات من جميع الجنسيات المسموح بها مع ضمان الجودة والكفاءة"
    },
    {
      icon: <FileText className="w-12 h-12 text-cyan-600" />,
      title: "تجديد الإقامة السنوية",
      description: "تجديد الإقامة السنوية للعاملة بدءًا من إجراءات المعاملة وحتى نهايتها"
    },
    {
      icon: <Shield className="w-12 h-12 text-cyan-600" />,
      title: "تجديد إقامة العمل",
      description: "إجراءات تجديد إقامة العمل للعاملة مع متابعة كاملة للمعاملات"
    }
  ];

  const detailedServices = [
    {
      icon: <Plane className="w-6 h-6" />,
      text: "تسفير العاملة عند انتهاء عقدها من منزل الكفيل وإيصالها إلى المطار"
    },
    {
      icon: <Stethoscope className="w-6 h-6" />,
      text: "إجراء الفحص الطبي الشامل للعاملة عند وصولها إلى البلاد"
    },
    {
      icon: <Camera className="w-6 h-6" />,
      text: "تصوير العاملة لإتمام إجراءات إصدار الإقامة"
    },
    {
      icon: <Fingerprint className="w-6 h-6" />,
      text: "إجراء بصمة العاملة في مفرزة البحث الجنائي لإصدار الإقامة السنوية"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      text: "إصدار الإقامة السنوية وتصريح العمل دون الحاجة لمراجعة الكفيل للمركز الأمني"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      text: "إصدار بوليصة تأمين للعاملة تشمل حوادث العمل والوفاة، إضافة إلى التأمين الصحي"
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      text: "تدريب العاملة في أكبر مراكز التدريب في بلدها"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      text: "إجراء كافة الفحوصات الطبية اللازمة للعاملة في بلدها"
    }
  ];

  const homeService = {
    title: 'خدمة "نصلكم أينما كنتم" (الخدمة المنزلية)',
    description: 'تقدم الشركة خدمة "نصل إليك أينما كنت" والتي تتضمن ما يلي:',
    features: [
      "عرض طلبات من جميع الجنسيات لمشاهدتها في منزلك",
      "توقيع عقد العاملة في منزلك",
      "توقيع الأوراق الخاصة بالتفويض مع مصادقتها في البنك دون الحاجة لمراجعة المؤسسة",
      "تسليم العاملة إلى منزل كفيلها عند وصولها",
      "زيارة منزلية لإرشاد العاملة حول كيفية أداء العمل",
      "تسليم جواز سفر العاملة بعد إصدار الإقامة السنوية لها"
    ]
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 rtl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">خدماتنا</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            نقدم مجموعة شاملة من الخدمات المتخصصة في استقدام العاملات المنزلية مع ضمان الجودة والاحترافية
          </p>
        </div>

        {/* Main Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {mainServices.map((service, index) => (
            <div key={index} className="service-card bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-cyan-100 p-4 rounded-full">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* What We Do Section */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">ما نقوم به</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {detailedServices.map((service, index) => (
              <div key={index} className="flex items-start space-x-4 space-x-reverse">
                <div className="flex-shrink-0 bg-cyan-100 p-2 rounded-lg">
                  {service.icon}
                </div>
                <p className="text-gray-700 leading-relaxed">{service.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Home Service Section */}
        <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-2xl p-8">
          <div className="flex items-center mb-6">
            <Home className="w-8 h-8 ml-4" />
            <h3 className="text-3xl font-bold">{homeService.title}</h3>
          </div>
          <p className="text-xl mb-8 opacity-90">{homeService.description}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {homeService.features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3 space-x-reverse">
                <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                <span className="leading-relaxed">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

