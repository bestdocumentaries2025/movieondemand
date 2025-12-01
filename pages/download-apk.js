import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function DownloadApk() {
  const [countdown, setCountdown] = useState(5);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  const handleDownload = () => {
    setIsDownloading(true);
    
    // Simulate download progress
    const interval = setInterval(() => {
      setDownloadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          // Redirect to actual download
          window.location.href = 'https://median.co/share/yeewnke';
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const features = [
    {
      icon: '🚀',
      title: 'Lightning Fast',
      description: 'Optimized for speed and performance'
    },
    {
      icon: '🎬',
      title: 'HD Streaming',
      description: 'Watch movies in high definition'
    },
    {
      icon: '📱',
      title: 'Mobile Optimized',
      description: 'Perfect experience on your phone'
    },
    {
      icon: '🔒',
      title: 'Safe & Secure',
      description: '100% virus-free guaranteed'
    }
  ];

  const stats = [
    { number: '10K+', label: 'Active Users' },
    { number: '4.8', label: 'Star Rating' },
    { number: '50K+', label: 'Downloads' },
    { number: '24/7', label: 'Support' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <Head>
        <title>Download MovieOnDemand APK - Free HD Streaming App</title>
        <meta name="description" content="Download MovieOnDemand APK for Android. Watch thousands of movies and TV shows in HD quality for free." />
        <meta name="keywords" content="movieondemand apk, download, android app, free movies, streaming" />
      </Head>

      <Header />

      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium">Latest Version 2.1.0</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              MovieOnDemand APK
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Watch <span className="text-blue-400 font-semibold">10,000+</span> movies and TV shows in 
              <span className="text-green-400 font-semibold"> HD quality</span> on your Android device
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <div className="flex items-center gap-3 text-yellow-400">
                {'⭐'.repeat(5)}
                <span className="text-white font-semibold">4.8/5 (2,500+ reviews)</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <span className="text-green-400">✓</span>
                <span>100% Safe & Virus Free</span>
              </div>
            </div>
          </div>
        </section>

        {/* Download Card */}
        <section className="container mx-auto px-4 mb-20">
          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-8 shadow-2xl">
              <div className="text-center mb-8">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-2xl">
                  📱
                </div>
                <h2 className="text-2xl font-bold mb-2">Ready to Download</h2>
                <p className="text-gray-400">File size: 45 MB • Android 6.0+</p>
              </div>

              {countdown > 0 ? (
                <div className="text-center mb-6">
                  <div className="bg-yellow-500/20 border border-yellow-500 rounded-lg p-4">
                    <p className="text-yellow-300 font-semibold">
                      Download starts in {countdown} second{countdown !== 1 ? 's' : ''}
                    </p>
                    <p className="text-yellow-200 text-sm mt-1">
                      Please wait while we prepare your download...
                    </p>
                  </div>
                </div>
              ) : null}

              {isDownloading ? (
                <div className="space-y-4">
                  <div className="bg-gray-700 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-green-400 to-blue-500 h-3 rounded-full transition-all duration-300"
                      style={{ width: `${downloadProgress}%` }}
                    ></div>
                  </div>
                  <p className="text-center text-gray-400">
                    Preparing download... {downloadProgress}%
                  </p>
                </div>
              ) : (
                <button
                  onClick={handleDownload}
                  disabled={countdown > 0}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 text-lg"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  {countdown > 0 ? `Download in ${countdown}s` : 'Download Now'}
                </button>
              )}

              <div className="mt-6 text-center text-sm text-gray-400 space-y-2">
                <p>✅ No registration required</p>
                <p>✅ Free forever</p>
                <p>✅ Regular updates</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="container mx-auto px-4 mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Our App?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 text-center hover:border-blue-500 transition-all duration-300">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="container mx-auto px-4 mb-20">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-gray-700 rounded-2xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container mx-auto px-4 mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "Is this APK safe to install?",
                answer: "Yes, our APK is 100% safe and virus-free. We regularly scan all files for security."
              },
              {
                question: "Do I need to root my device?",
                answer: "No, our app works perfectly on non-rooted Android devices running Android 6.0 or higher."
              },
              {
                question: "Is it really free?",
                answer: "Yes! MovieOnDemand is completely free with no hidden charges or subscription fees."
              },
              {
                question: "How often is the app updated?",
                answer: "We release updates every 2-3 weeks with new features, bug fixes, and performance improvements."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-2 text-blue-400">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Streaming?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of satisfied users and start watching your favorite content today!
            </p>
            <button
              onClick={handleDownload}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg"
            >
              Download Now - It's Free!
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}