import React, { useState } from 'react';
import { Phone, MessageCircle, Mail, MapPin, Clock, Send, Facebook, Instagram } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "الخط الساخن",
      details: ["+962 79 748 8831", "+962 79 748 8836"],
      action: "tel:+962797488831"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "واتساب",
      details: ["+962 79 925 0286"],
      action: "https://wa.me/962799250286"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "البريد الإلكتروني",
      details: ["info@maidservice.com", "sales@maidservice.com"],
      action: "mailto:info@maidservice.com"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "العنوان",
      details: ["الدوار السابع - شارع المودة", "خلف سيفوي السابع - مجمع طنوس التجاري", "الطابق الثالث مكتب 301"],
      action: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 rtl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">تواصل معنا</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            سواء كنت تريد الاستفسار عن الشراكات أو تقديم ملاحظات أو مجرد قول مرحبًا، فنحن هنا لمساعدتك وتقديم أفضل خدمة عملاء ممكنة.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8">معلومات التواصل</h3>
            
            {/* Contact Cards */}
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-info p-6 rounded-xl border border-gray-200">
                  <div className="flex items-start space-x-4 space-x-reverse">
                    <div className="bg-cyan-100 p-3 rounded-lg text-cyan-600">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">{info.title}</h4>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600 mb-1">
                          {info.action ? (
                            <a href={info.action} className="hover:text-cyan-600 transition-colors duration-300">
                              {detail}
                            </a>
                          ) : (
                            detail
                          )}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Working Hours */}
            <div className="contact-info p-6 rounded-xl border border-gray-200 mb-8">
              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="bg-cyan-100 p-3 rounded-lg text-cyan-600">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">ساعات العمل</h4>
                  <p className="text-gray-600">من السبت الى الخميس</p>
                  <p className="text-gray-600">9 صباحا - 5:30 مساءا</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4 space-x-reverse">
              <a href="#" className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="bg-pink-600 text-white p-3 rounded-lg hover:bg-pink-700 transition-colors duration-300">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8">أرسل رسالة</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  الاسم الكامل
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors duration-300"
                  placeholder="أدخل اسمك الكامل"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors duration-300"
                  placeholder="أدخل بريدك الإلكتروني"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  رقم الهاتف
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors duration-300"
                  placeholder="أدخل رقم هاتفك"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  الرسالة
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors duration-300 resize-none"
                  placeholder="اكتب رسالتك هنا..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-cyan-600 text-white py-3 px-6 rounded-lg hover:bg-cyan-700 transition-colors duration-300 flex items-center justify-center space-x-2 space-x-reverse font-semibold"
              >
                <Send className="w-5 h-5" />
                <span>إرسال الرسالة</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

