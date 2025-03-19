'use client';

import Link from 'next/link';

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-500 to-blue-600 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-10 -top-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute left-0 bottom-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Transform Your Product Development Process?
          </h2>
          <p className="text-lg mb-8 text-blue-100 max-w-2xl mx-auto">
            Join innovative teams already using ProFlow to create better products, faster. Get started today and see how AI-augmented product development can work for you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup" className="px-8 py-4 rounded-full font-medium bg-white hover:bg-blue-50 text-blue-600 transition-colors inline-flex items-center justify-center shadow-lg shadow-blue-700/20">
              Start Free Trial
            </Link>
            <Link href="/demo" className="px-8 py-4 rounded-full font-medium bg-blue-600 hover:bg-blue-700 border border-blue-400 text-white transition-colors inline-flex items-center justify-center">
              Schedule Demo
            </Link>
          </div>
          
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
              <div className="font-bold text-3xl text-white mb-1">30+</div>
              <div className="text-blue-100">Teams using ProFlow</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
              <div className="font-bold text-3xl text-white mb-1">500+</div>
              <div className="text-blue-100">Ideas refined</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
              <div className="font-bold text-3xl text-white mb-1">75%</div>
              <div className="text-blue-100">Faster to market</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 