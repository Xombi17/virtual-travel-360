import React, { useState } from 'react';
import { 
  Globe, 
  Search, 
  MapPin, 
  User, 
  Heart, 
  MessageCircle, 
  Award, 
  ChevronRight,
  Compass
} from 'lucide-react';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const featuredDestinations = [
    {
      id: 1,
      name: 'Paris',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Experience the City of Lights in virtual reality',
      category: 'Urban'
    },
    {
      id: 2,
      name: 'Santorini',
      image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Explore the stunning white and blue landscapes',
      category: 'Coastal'
    },
    {
      id: 3,
      name: 'Great Wall of China',
      image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Walk the ancient wonder from the comfort of home',
      category: 'Historical'
    },
    {
      id: 4,
      name: 'Grand Canyon',
      image: 'https://images.unsplash.com/photo-1615551043360-33de8b5f410c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Marvel at one of nature\'s greatest wonders',
      category: 'Natural'
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80',
      text: 'I never thought I could visit the Eiffel Tower from my living room. The experience was incredibly immersive!',
      rating: 5
    },
    {
      id: 2,
      name: 'Michael Chen',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80',
      text: 'The VR experience of Santorini was so realistic, I could almost feel the Mediterranean breeze.',
      rating: 5
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80',
      text: 'As someone with limited mobility, this platform has opened up the world to me in ways I never thought possible.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-gradient-to-r from-slate-900/80 to-slate-800/80 backdrop-blur-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Globe className="h-8 w-8 text-blue-400" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">VirtualVoyage</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#" className="hover:text-blue-400 transition-colors">Home</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Destinations</a>
            <a href="#" className="hover:text-blue-400 transition-colors">VR Experience</a>
            <a href="#" className="hover:text-blue-400 transition-colors">About</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Contact</a>
          </div>
          <div className="flex items-center space-x-4">
            <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-full transition-colors">
              Sign In
            </button>
            <button className="p-2 rounded-full bg-slate-700 hover:bg-slate-600 transition-colors">
              <User className="h-5 w-5" />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" 
            alt="Virtual Travel" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-800/50 to-slate-900/90"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block">Experience the World</span>
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">in Virtual Reality</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl text-slate-300">
            Travel to breathtaking destinations around the globe without leaving your home. Immersive 360° experiences await.
          </p>
          
          {/* Search Bar */}
          <div className="relative w-full max-w-2xl mb-10">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-20 py-4 rounded-full bg-white/10 backdrop-blur-md border border-slate-600 focus:border-blue-400 focus:ring-2 focus:ring-blue-400 focus:outline-none text-white placeholder-slate-400"
              placeholder="Search destinations, experiences, or categories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="absolute right-2 top-2 bottom-2 px-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all">
              Start Exploring
            </button>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all flex items-center justify-center space-x-2 text-lg font-medium">
              <span>Experience in VR</span>
              <ChevronRight className="h-5 w-5" />
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white/30 hover:border-white/60 rounded-full transition-all flex items-center justify-center space-x-2 text-lg font-medium backdrop-blur-sm">
              <span>View Destinations</span>
              <MapPin className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Floating Destination Bubbles */}
        <div className="absolute top-1/4 left-10 w-20 h-20 rounded-full overflow-hidden border-2 border-white/30 shadow-lg shadow-blue-500/20 animate-pulse">
          <img src="https://images.unsplash.com/photo-1564594736624-def7a10ab047?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80" alt="Paris" className="w-full h-full object-cover" />
        </div>
        <div className="absolute top-1/3 right-20 w-24 h-24 rounded-full overflow-hidden border-2 border-white/30 shadow-lg shadow-purple-500/20 animate-pulse" style={{ animationDelay: "1s" }}>
          <img src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80" alt="Mountain" className="w-full h-full object-cover" />
        </div>
        <div className="absolute bottom-1/4 left-1/4 w-16 h-16 rounded-full overflow-hidden border-2 border-white/30 shadow-lg shadow-blue-500/20 animate-pulse" style={{ animationDelay: "2s" }}>
          <img src="https://images.unsplash.com/photo-1606820854416-439b3305ff39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80" alt="Taj Mahal" className="w-full h-full object-cover" />
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Featured</span> Destinations
            </h2>
            <a href="#" className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
              <span>View all</span>
              <ChevronRight className="h-5 w-5 ml-1" />
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredDestinations.map((destination) => (
              <div key={destination.id} className="group bg-slate-800 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 border border-slate-700 hover:border-blue-500/50">
                <div className="relative h-60 overflow-hidden">
                  <img 
                    src={destination.image} 
                    alt={destination.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-blue-500 text-xs font-semibold px-2 py-1 rounded-full">
                    {destination.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{destination.name}</h3>
                  <p className="text-slate-400 mb-4">{destination.description}</p>
                  <div className="flex justify-between items-center">
                    <button className="text-blue-400 hover:text-blue-300 transition-colors flex items-center">
                      <span>Explore</span>
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </button>
                    <button className="p-2 rounded-full bg-slate-700 hover:bg-slate-600 transition-colors">
                      <Heart className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Categories */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Explore</span> by Experience
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-blue-500/20 to-blue-700/20 p-8 rounded-xl border border-blue-500/30 hover:border-blue-400 transition-colors text-center group">
              <div className="w-16 h-16 mx-auto bg-blue-500/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-500/30 transition-colors">
                <Compass className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Adventure</h3>
              <p className="text-slate-400 mb-6">Thrilling experiences from mountain climbing to deep sea diving</p>
              <a href="#" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                <span>Explore adventures</span>
                <ChevronRight className="h-4 w-4 ml-1" />
              </a>
            </div>
            
            <div className="bg-gradient-to-br from-purple-500/20 to-purple-700/20 p-8 rounded-xl border border-purple-500/30 hover:border-purple-400 transition-colors text-center group">
              <div className="w-16 h-16 mx-auto bg-purple-500/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-purple-500/30 transition-colors">
                <Globe className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Cultural</h3>
              <p className="text-slate-400 mb-6">Immerse yourself in the rich traditions and heritage of diverse cultures</p>
              <a href="#" className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors">
                <span>Discover cultures</span>
                <ChevronRight className="h-4 w-4 ml-1" />
              </a>
            </div>
            
            <div className="bg-gradient-to-br from-green-500/20 to-green-700/20 p-8 rounded-xl border border-green-500/30 hover:border-green-400 transition-colors text-center group">
              <div className="w-16 h-16 mx-auto bg-green-500/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-green-500/30 transition-colors">
                <MapPin className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Natural Wonders</h3>
              <p className="text-slate-400 mb-6">Explore breathtaking landscapes and natural phenomena</p>
              <a href="#" className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors">
                <span>See wonders</span>
                <ChevronRight className="h-4 w-4 ml-1" />
              </a>
            </div>
            
            <div className="bg-gradient-to-br from-amber-500/20 to-amber-700/20 p-8 rounded-xl border border-amber-500/30 hover:border-amber-400 transition-colors text-center group">
              <div className="w-16 h-16 mx-auto bg-amber-500/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-amber-500/30 transition-colors">
                <Award className="h-8 w-8 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Historical</h3>
              <p className="text-slate-400 mb-6">Step back in time and visit ancient wonders and historical sites</p>
              <a href="#" className="inline-flex items-center text-amber-400 hover:text-amber-300 transition-colors">
                <span>Travel through time</span>
                <ChevronRight className="h-4 w-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* VR Experience */}
      <section className="py-20 bg-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-blue-900 mix-blend-multiply"></div>
          <img 
            src="https://images.unsplash.com/photo-1626387346567-68d0b1ee4f58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" 
            alt="VR Experience" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Immersive</span> VR Experience
              </h2>
              <p className="text-xl text-slate-300 mb-8 max-w-lg">
                Connect your VR headset and transport yourself to destinations around the world. Feel like you're really there with our cutting-edge virtual reality technology.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                  </div>
                  <span className="ml-3 text-slate-300">Compatible with all major VR headsets</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                  </div>
                  <span className="ml-3 text-slate-300">High-definition 360° panoramic views</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                  </div>
                  <span className="ml-3 text-slate-300">Spatial audio for complete immersion</span>
                </li>
              </ul>
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all flex items-center justify-center space-x-2 text-lg font-medium">
                <span>Set Up VR Experience</span>
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
            
            <div className="lg:w-1/2 lg:pl-20">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl"></div>
                <div className="relative bg-slate-900/80 backdrop-blur-sm border border-slate-700 rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                    alt="VR Experience" 
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-blue-500/30 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-blue-500/50 transition-colors">
                      <div className="w-0 h-0 border-t-8 border-t-transparent border-l-16 border-l-white border-b-8 border-b-transparent ml-2"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">What Our</span> Travelers Say
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-slate-800 rounded-xl p-8 border border-slate-700 hover:border-blue-500/50 transition-colors">
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-blue-400"
                  />
                  <div>
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-slate-300 italic">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-blue-900/50 mix-blend-multiply"></div>
          <img 
            src="https://images.unsplash.com/photo-1488085061387-422e29b40080?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" 
            alt="World Map" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Explore the World</span> Virtually?
          </h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Join thousands of virtual travelers and experience the wonders of the world from the comfort of your home.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all flex items-center justify-center space-x-2 text-lg font-medium">
              <span>Start Your Journey</span>
              <ChevronRight className="h-5 w-5" />
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white/30 hover:border-white/60 rounded-full transition-all flex items-center justify-center space-x-2 text-lg font-medium backdrop-blur-sm">
              <span>Learn More</span>
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Globe className="h-8 w-8 text-blue-400" />
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">VirtualVoyage</span>
              </div>
              <p className="text-slate-400 mb-6">
                Experience the world from the comfort of your home with our immersive virtual travel platform.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-500/20 transition-colors">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-500/20 transition-colors">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-500/20 transition-colors">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-6">Explore</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Destinations</a></li>
                <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">VR Experiences</a></li>
                <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Categories</a></li>
                <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Featured</a></li>
                <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">New Additions</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-6">Company</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">About Us</a></li>
                <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Careers</a></li>
                <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Press</a></li>
                <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Partners</a></li>
                <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-6">Support</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Help Center</a></li>
                <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">VR Setup Guide</a></li>
                <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">FAQs</a></li>
                <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-800 text-center text-slate-500">
            <p>&copy; {new Date().getFullYear()} VirtualVoyage. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;