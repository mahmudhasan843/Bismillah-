import React from 'react';

export default function App() {
  return (
    <div className="relative z-10">
      <header className="text-center py-12 px-4">
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent mb-4">
          বিসমিল্লাহ ব্যাগ পোর্টাল
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 font-medium">
          প্রিমিয়াম চাইনা লেডিস ব্যাগ কালেকশন
        </p>
        <p className="text-lg text-gray-600 mt-2">
          সরাসরি চায়না থেকে আমদানিকৃত প্রিমিয়াম লেডিস ব্যাগ
        </p>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="glass-card rounded-3xl p-8 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            স্বাগতম
          </h2>
          <p className="text-lg text-gray-700 text-center leading-relaxed">
            বাংলাদেশের সবচেয়ে নির্ভরযোগ্য অনলাইন শপ। 
            ৫ডি হাই-ডেফিনিশন শপিং অভিজ্ঞতা।
          </p>
          <div className="mt-8 text-center">
            <a 
              href="tel:+8801827872334" 
              className="inline-block bg-gradient-to-r from-rose-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              যোগাযোগ করুন: 01827872334
            </a>
          </div>
        </div>
      </main>

      <footer className="text-center py-8 px-4 mt-12">
        <p className="text-gray-600">
          © 2024 Bismillah Bag Portal | Made with ❤️ by Mahamud Hasan
        </p>
      </footer>
    </div>
  );
}
