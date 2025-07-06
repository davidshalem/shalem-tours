import React, { useEffect, useState } from "react";
import Head from "next/head";
import { Phone, MapPin, Clock, MessageSquare, X } from "lucide-react";
import Image from "next/image";

const MinibusImage = "/minibus.jpeg";

export default function ShalemTours() {
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBanner(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div dir="rtl" className="relative min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-100 text-gray-800 px-4 md:px-12 font-assistant">
      <Head>
        <title>ShalemTours - שירותי הסעות</title>
      </Head>

      {showBanner && (
        <div className="fixed bottom-6 right-6 bg-yellow-100 border border-yellow-300 text-yellow-800 px-6 py-4 rounded-xl shadow-lg z-50 flex items-center gap-4 animate-bounce-slow">
          <div className="flex-1">
            <p className="text-lg font-semibold">🎉 10% הנחה להזמנה ראשונה השבוע!</p>
            <p className="text-sm">שלחו לנו הודעה עכשיו ב־WhatsApp והזמינו</p>
          </div>
          <button onClick={() => setShowBanner(false)} className="text-yellow-700 hover:text-yellow-900">
            <X className="w-5 h-5" />
          </button>
        </div>
      )}

      <header className="text-center py-12">
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-4 drop-shadow-sm">ShalemTours</h1>
        <p className="text-xl md:text-2xl text-gray-600">הסעות מיניבוס בדרום, מרכז והשפלה</p>
      </header>

      <div className="mb-16 flex justify-center">
        <Image
          src={MinibusImage}
          alt="Shalem Tours Minibus"
          width={1200}
          height={700}
          className="rounded-3xl shadow-xl w-full max-w-screen-lg"
        />
      </div>

      <section className="grid md:grid-cols-2 gap-10 mb-20">
        <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition">
          <h2 className="text-3xl font-bold mb-4 text-blue-700">למה לבחור בנו?</h2>
          <ul className="list-disc list-inside space-y-2 text-right text-gray-700 text-lg">
            <li>מיניבוס חדש ומפואר</li>
            <li>נהגים מוסמכים עם ניסיון</li>
            <li>שירות אמין, מקצועי וזמין</li>
            <li>כיסוי אזורי נרחב בדרום, מרכז ושפלה</li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition">
          <h2 className="text-3xl font-bold mb-4 text-blue-700">השירותים שלנו</h2>
          <ul className="list-disc list-inside space-y-2 text-right text-gray-700 text-lg">
            <li>הסעות לאירועים משפחתיים ועסקיים</li>
            <li>שירות לנתב"ג 24/6 (לא כולל שבת)</li>
            <li>טיולים פרטיים לקבוצות קטנות</li>
            <li>שירותי הסעות לחברות וארגונים</li>
          </ul>
        </div>
      </section>

      <section className="bg-blue-50 rounded-3xl shadow-inner p-10 mb-20">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-800">צרו קשר להזמנה</h2>
        <div className="flex flex-col items-center space-y-5">
          <div className="flex items-center gap-3 text-lg text-gray-700">
            <Phone className="text-blue-600" /> <span>052-3476546</span>
          </div>
          <div className="flex items-center gap-3 text-lg text-gray-700">
            <Phone className="text-blue-600" /> <span>052-2913499</span>
          </div>
          <div className="flex items-center gap-3 text-lg text-gray-700">
            <MapPin className="text-blue-600" /> <span>ניר עקיבא, ישראל</span>
          </div>
          <div className="flex items-center gap-3 text-lg text-gray-700">
            <Clock className="text-blue-600" /> <span>שירות 24/6 - לא בשבת</span>
          </div>

          <a
            href="https://wa.me/972523476546"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white rounded-full px-6 py-3 text-lg font-semibold transition shadow-md"
          >
            <MessageSquare className="w-5 h-5" /> שלחו לנו הודעה ב־WhatsApp
          </a>

          <form
            action="https://formspree.io/f/xwpbjnwj"
            method="POST"
            className="w-full max-w-xl bg-white rounded-xl p-6 shadow-md space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="שם מלא"
              required
              className="w-full border border-gray-300 p-3 rounded-lg text-lg"
            />
            <input
              type="tel"
              name="phone"
              dir="rtl"
              placeholder="טלפון"
              required
              className="w-full border border-gray-300 p-3 rounded-lg text-lg"
            />
            <textarea
              name="message"
              placeholder="הודעה"
              required
              className="w-full border border-gray-300 p-3 rounded-lg text-lg"
            ></textarea>
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg text-lg font-semibold transition">
              שלח
            </button>
          </form>
        </div>
      </section>

      <footer className="text-center text-sm text-gray-500 pb-8">
        © {new Date().getFullYear()} ShalemTours. כל הזכויות שמורות.
      </footer>
    </div>
  );
}
