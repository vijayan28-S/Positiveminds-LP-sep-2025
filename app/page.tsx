"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact"
import { MapPin, Phone, Mail } from "lucide-react";
import {  Facebook, Instagram } from "lucide-react";
import AssessmentCTA from "./components/AssessmentCTA";


export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [open, setOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    childName: "",
    childAge: "",
    program: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your interest! We will contact you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      childName: "",
      childAge: "",
      program: "",
      message: "",
    });
    setShowForm(false);
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-50 to-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-6">
            {/* Logo and Brand */}
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20">
                <Image
                  src="/logo.png"
                  alt="Positive Minds Academy Logo"
                  width={80}
                  height={80}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-[#22abe0]">
                  Positive Minds Academy
                </h1>
                <p className="text-sm text-gray-600">
                  Unlocking Mathematical Potential
                </p>
              </div>
            </div>

            {/* Navigation Menu */}
            <div className="hidden md:flex items-center space-x-8">
          {/* Dropdown */}
          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center space-x-1 cursor-pointer text-gray-800 font-medium hover:text-primary focus:outline-none"
            >
              <span>Programs</span>
              <svg
                className={`w-4 h-4 text-gray-600 transform transition-transform ${
                  open ? "rotate-180" : "rotate-0"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {open && (
              <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">

                <a
                  href="/#programs"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Elementary Math
                </a>
                <a
                  href="/#programs"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Middle School Math
                </a>
                <a
                  href="/#programs"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Abacus Math
                </a>
              </div>
            )}
          </div>
              <a
                href="#benefits"
                className="text-gray-800 font-medium cursor-pointer hover:text-blue-600"
              >
                Why Choose Us
              </a>
              <a
                href="#testimonials"
                className="text-gray-800 font-medium cursor-pointer hover:text-blue-600"
              >
                Testimonials
              </a>
              <a
                href="#faq"
                className="text-gray-800 font-medium cursor-pointer hover:text-blue-600"
              >
                FAQ
              </a>

              {/* Contact Info */}
              <a
                href="tel:+19252170673"
                className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors duration-200"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="font-medium">Call Us</span>
              </a>

              {/* CTA Button */}
              <button
                onClick={() => setShowForm(true)}
                className="bg-[#22abe0] text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
              >
                Book a Free Trial Class
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-800 hover:text-[#22abe0]"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-1">
                  <span className="text-gray-800 font-medium">Programs</span>
                  <svg
                    className="w-4 h-4 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                <a href="#benefits" className="text-gray-800 font-medium">
                  Why Choose Us
                </a>
                <a href="#testimonials" className="text-gray-800 font-medium">
                  Testimonials
                </a>
                <a href="#faq" className="text-gray-800 font-medium">
                  FAQ
                </a>
                <a
                  href="tel:+19252170673"
                  className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors duration-200"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span className="font-medium">Call Us</span>
                </a>
                <button
                  onClick={() => setShowForm(true)}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 w-full"
                >
                  Book a Free Trial Class
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Unlock Your Child’s{" "}
                  <span className="text-[#22abe0]">Full Math Potential!</span>
                </h1>
                <p className="text-xl md:text-xl text-gray-700 font-medium">
                  Fun, interactive, and results-driven-help your child stay ahead, boost confidence, and develop lifelong math skills!
                </p>
              </div>

              {/* Key Benefits */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <span className="text-gray-800 font-medium">
                    Personalized learning experiences
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <span className="text-gray-800 font-medium">
                    Expert guidance from certified instructors
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <span className="text-gray-800 font-medium">
                    Proven results with 97% grade improvement
                  </span>
                </div>
              </div>

{/* CTA Buttons */}
<div className="pt-4 flex flex-col sm:flex-row sm:space-x-3 space-y-3 sm:space-y-0 items-center">
  <button
    onClick={() => setShowForm(true)}
    className="w-full sm:w-auto bg-[#22abe0] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg"
  >
    Book a Free Trial Class
  </button>
  <Link
    href="#programs"
    className="w-full sm:w-auto bg-[#22abe0] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg text-center"
  >
    Explore Programs
  </Link>
</div>
</div>

            <div className="relative">
              <Image
              src="/Positive-minds.png"
                // src="https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Students learning math with abacus in classroom"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center">
                    <span className="text-[#22abe0] font-bold text-2xl">
                      15+
                    </span>
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-gray-900">
                      Years Experience
                    </p>
                    <p className="text-sm text-gray-600">Proven Results</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Banner - Below hero section */}
<section className="grid grid-cols-2 w-full max-w-[1300px] mx-auto h-[200px]">
  {/* Left Box */}
  <div className="bg-[#22abe0] flex items-center justify-center">
    <div className="text-center">
      <h2 className="text-2xl md:text-5xl font-bold text-white mb-1">
        Save up to $100!
      </h2>
      <p className="text-white text-sm md:text-base">
        for a limited time only*
      </p>
    </div>
  </div>

  {/* Right Box */}
  <button
    onClick={() => setShowForm(true)}
    className="bg-purple-800 flex items-center justify-center hover:bg-purple-900 transition-colors duration-200 cursor-pointer"
  >
    <h2 className="text-2xl md:text-5xl font-bold text-white">
      ENROLL NOW
    </h2>
  </button>
</section>


      {/* Math Program Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/math.jpg"
                alt="Student writing math problems"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-orange-600">
                The Positive Mind Math Program
              </h2>
              <h3 className="text-4xl font-bold text-gray-800">
                Develop and Build Critical Math Skills
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                The Positive Mind Math Program begins with counting and
                progresses through calculus, helping your child develop the
                skills and study habits needed to improve their math ability and
                build confidence in their academic success. Our proven method
                helps students master concepts and achieve their full potential.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong>Elementary Math (K-5):</strong> Foundation building with
                basic operations, number sense, fractions & decimals, and daily
                homework support.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong>Middle School Math (6-8):</strong> Advanced preparation
                with pre-algebra foundations, geometry concepts, problem-solving
                strategies, and high school readiness.
              </p>
              <a
                href="#programs"
                className="inline-block bg-purple-800 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-900 transition-colors"
              >
                EXPLORE THE MATH PROGRAM
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Abacus Program Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-orange-600">
                The Positive Mind Abacus Program
              </h2>
              <h3 className="text-4xl font-bold text-gray-800">
                Give Your Child the Gift of Focus
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                The Positive Mind Abacus Program begins with basic mental math
                and progresses through advanced concentration techniques,
                helping your child develop focus, memory, and cognitive
                abilities needed for academic success. Our traditional abacus
                method builds confidence through mental math mastery.
              </p>
              <a
                href="#programs"
                className="inline-block bg-purple-800 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-900 transition-colors"
              >
                EXPLORE THE ABACUS PROGRAM
              </a>
            </div>
            <div className="relative">
              <Image
                src="/abacus.jpg"
                alt="Student reading and learning"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Programs Section */}
      <section id="programs" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="-mt-12 text-4xl font-bold text-center text-[#22abe0] mb-16">
            Our Programs
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Elementary Math Program */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl mb-4">🧮</div>
                  <h3 className="text-2xl font-bold">Elementary Math</h3>
                  <p className="text-blue-100">Grades K-5</p>
                </div>
              </div>
              <div className="p-8">
                <h4 className="text-xl font-bold text-gray-800 mb-4">
                  Foundation Building
                </h4>
                <ul className="space-y-3 text-gray-600 mb-6">
                  <li className="flex items-center space-x-2">
                    <span className="text-blue-500">✓</span>
                    <span>Number recognition and counting</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-blue-500">✓</span>
                    <span>Basic addition and subtraction</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-blue-500">✓</span>
                    <span>Shape recognition and patterns</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-blue-500">✓</span>
                    <span>Interactive learning with manipulatives</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-blue-500">✓</span>
                    <span>Fun math games and activities</span>
                  </li>
                </ul>

                <button
                  onClick={() => setShowForm(true)}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
                >
                  Enroll Now
                </button>
              </div>
            </div>

            {/* Middle School Math Program */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl mb-4">📐</div>
                  <h3 className="text-2xl font-bold">Middle School Math</h3>
                  <p className="text-purple-100">Grades 6-8</p>
                </div>
              </div>
              <div className="p-8">
                <h4 className="text-xl font-bold text-gray-800 mb-4">
                  Advanced Preparation
                </h4>
                <ul className="space-y-3 text-gray-600 mb-6">
                  <li className="flex items-center space-x-2">
                    <span className="text-purple-500">✓</span>
                    <span>Pre-algebra and algebra foundations</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-purple-500">✓</span>
                    <span>Geometry and measurement</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-purple-500">✓</span>
                    <span>Fractions, decimals, and percentages</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-purple-500">✓</span>
                    <span>Word problem strategies</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-purple-500">✓</span>
                    <span>Math competition preparation</span>
                  </li>
                </ul>


                <button
                  onClick={() => setShowForm(true)}
                  className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-200"
                >
                  Enroll Now
                </button>
              </div>
            </div>

            {/* Abacus Math Program */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl mb-4">🧘</div>
                  <h3 className="text-2xl font-bold">Abacus Math</h3>
                  <p className="text-green-100">All Ages</p>
                </div>
              </div>
              <div className="p-8">
                <h4 className="text-xl font-bold text-gray-800 mb-4">
                  Mental Math Mastery
                </h4>
               <ul className="space-y-3 text-gray-600 mb-6">
              <li className="flex items-center space-x-2">
                <span className="text-green-500">✓</span>
                <span>Abacus operation techniques</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-green-500">✓</span>
                <span>Mental calculation training</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-green-500">✓</span>
                <span>Speed and accuracy development</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-green-500">✓</span>
                <span>Concentration and focus exercises</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-green-500">✓</span>
                <span>Regular skill assessments</span>
              </li>
            </ul>

                <button
                  onClick={() => setShowForm(true)}
                  className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200"
                >
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
<section id="benefits" className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="-mt-12 text-4xl font-bold text-center text-[#22abe0] mb-16">
      HOW POSITIVE MIND CAN BENEFIT YOUR CHILD
    </h2>

    <div className="grid md:grid-cols-3 gap-12">
      
      {/* Benefit 1 */}
      <div className="text-center">
        <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
          {/* Graduation Cap SVG */}
          <svg xmlns="http://www.w3.org/2000/svg" 
               className="w-10 h-10 text-white" 
               fill="currentColor" 
               viewBox="0 0 24 24">
            <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
            <path d="M11 12.08L3.12 8.09 2 8.66l9 4.91 9-4.91-1.12-.57L13 12.08v4.83l-2-.91v-3.92z" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          Improve Study Skills and Grades
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Our students enhance their study habits, reduce homework anxiety, and master math concepts, often studying above grade level with our proven methodology.
        </p>
      </div>

      {/* Benefit 2 */}
      <div className="text-center">
        <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
          {/* Brain SVG */}
          <svg xmlns="http://www.w3.org/2000/svg" 
               className="w-10 h-10 text-white" 
               fill="currentColor" 
               viewBox="0 0 24 24">
            <path d="M9 2a4 4 0 0 0-4 4v1a4 4 0 0 0 0 8v1a4 4 0 0 0 8 0V6a4 4 0 0 0-4-4zm6 0a4 4 0 0 0-4 4v10a4 4 0 0 0 8 0v-1a4 4 0 0 0 0-8V6a4 4 0 0 0-4-4z" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          Build Confidence and Independence
        </h3>
        <p className="text-gray-700 leading-relaxed">
          We empower students to learn independently, boosting their confidence with each new challenge through personalized instruction and positive reinforcement.
        </p>
      </div>

      {/* Benefit 3 */}
      <div className="text-center">
        <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
          {/* Light Bulb SVG */}
          <svg xmlns="http://www.w3.org/2000/svg" 
               className="w-10 h-10 text-white" 
               fill="currentColor" 
               viewBox="0 0 24 24">
            <path d="M9 21h6v-1H9v1zm3-19a7 7 0 0 0-4 12.75V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.25A7 7 0 0 0 12 2z" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          Strengthen Critical Thinking
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Through daily practice and guidance, students develop problem-solving skills and achieve mastery step by step, building a strong foundation for future learning.
        </p>
      </div>

    </div>
  </div>
</section>


      

      {/* Gallery Section */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1  className="-mt-12 text-4xl font-bold text-center text-[#22abe0] mb-16">GALLERY</h1>
    <h2 className=" -mt-10 text-4xl font-bold text-center text-gray-800 mb-16">
      See Our Students in Action
    </h2>

    {/* Media Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Image 1 */}
      <div
        className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
        onClick={() => setSelectedImage("/1.jpg")}
      >
        <Image
          src="/1.jpg"
          alt="Students learning math with abacus"
          width={400}
          height={300}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Image 2 */}
      <div
        className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
        onClick={() => setSelectedImage("/2.jpg")}
      >
        <Image
          src="/2.jpg"
          alt="Problem solving"
          width={400}
          height={300}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Image 3 */}
      <div
        className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
        onClick={() => setSelectedImage("/3.jpg")}
      >
        <Image
          src="/3.jpg"
          alt="Reading time"
          width={400}
          height={300}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Video 1 */}
      <div className="relative rounded-lg overflow-hidden shadow-lg">
        <video
          controls
          className="w-full h-64 object-cover"
          src="/video-1.mp4"
        ></video>
      </div>

      {/* Video 2 */}
      <div className="relative rounded-lg overflow-hidden shadow-lg">
        <video
          controls
          className="w-full h-64 object-cover"
          src="/video-2.mp4"
        ></video>
      </div>

      {/* Video 3 */}
      <div className="relative rounded-lg overflow-hidden shadow-lg">
        <video
          controls
          className="w-full h-64 object-cover"
          src="/video-3.mp4"
        ></video>
      </div>
    </div>




          {/* Video Gallery */}
          {/* <div>
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Video Gallery - Student Success Stories
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"> */}
              {/* YouTube Short 1 */}
              {/* <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative aspect-[9/16] bg-gradient-to-br from-red-500 to-red-600">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                      <svg
                        className="w-8 h-8 text-red-600 ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-semibold">Emma's Math Journey</p>
                    <p className="text-sm opacity-90">3rd → 5th Grade</p>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-gray-800 mb-2">
                    From Struggling to Excelling
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Watch Emma's transformation from struggling with basic math
                    to mastering advanced concepts.
                  </p>
                </div>
              </div> */}

              {/* YouTube Short 2 */}
              {/* <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative aspect-[9/16] bg-gradient-to-br from-blue-500 to-blue-600">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                      <svg
                        className="w-8 h-8 text-blue-600 ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-semibold">Alex's Abacus Skills</p>
                    <p className="text-sm opacity-90">Mental Math Champion</p>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-gray-800 mb-2">
                    Lightning Fast Calculations
                  </h4>
                  <p className="text-gray-600 text-sm">
                    See Alex demonstrate incredible mental math abilities
                    learned through our abacus program.
                  </p>
                </div>
              </div> */}

              {/* YouTube Short 3 */}
              {/* <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative aspect-[9/16] bg-gradient-to-br from-green-500 to-green-600">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                      <svg
                        className="w-8 h-8 text-green-600 ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-semibold">James's Success</p>
                    <p className="text-sm opacity-90">
                      7th → High School Ready
                    </p>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-gray-800 mb-2">
                    High School Preparation
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Follow James's journey from struggling with pre-algebra to
                    excelling in high school math.
                  </p>
                </div>
              </div> */}

              {/* Regular YouTube Video 1 */}
              {/* <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative aspect-video bg-gradient-to-br from-purple-500 to-purple-600">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                      <svg
                        className="w-10 h-10 text-purple-600 ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-semibold">Parent Testimonials</p>
                    <p className="text-sm opacity-90">5:32</p>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-gray-800 mb-2">
                    What Parents Say About Us
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Hear from real parents about their children's amazing
                    transformations at Positive Mind.
                  </p>
                </div>
              </div> */}

              {/* Regular YouTube Video 2 */}
              {/* <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative aspect-video bg-gradient-to-br from-orange-500 to-orange-600">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                      <svg
                        className="w-10 h-10 text-orange-600 ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-semibold">Abacus Competition</p>
                    <p className="text-sm opacity-90">8:15</p>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-gray-800 mb-2">
                    Regional Abacus Competition
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Watch our students compete and showcase their incredible
                    mental math abilities.
                  </p>
                </div>
              </div> */}

              {/* Regular YouTube Video 3 */}
              {/* <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative aspect-video bg-gradient-to-br from-teal-500 to-teal-600">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                      <svg
                        className="w-10 h-10 text-teal-600 ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-semibold">Center Tour</p>
                    <p className="text-sm opacity-90">6:42</p>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-gray-800 mb-2">
                    Take a Virtual Tour
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Explore our learning center and see where the magic happens
                    for our students.
                  </p>
                </div>
              </div>
            </div>
          </div> */}
          </div>

        
      </section>
      <Testimonials/>
      <FAQ/>

      {/* FAQ Section */}
      {/* <section id="faq" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            Frequently Asked Questions
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                What age groups do you serve?
              </h3>
              <p className="text-gray-600">
                We serve students from Kindergarten through 8th grade, with
                specialized programs for elementary (K-5) and middle school
                (6-8) students.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                How often do students attend classes?
              </h3>
              <p className="text-gray-600">
                Students typically attend twice per week for 30-45 minutes per
                session, with additional practice work at home.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Is there a free assessment?
              </h3>
              <p className="text-gray-600">
                Yes! We offer a complimentary assessment to determine your
                child's current level and create a personalized learning plan.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                What makes your abacus program different?
              </h3>
              <p className="text-gray-600">
                Our abacus program combines traditional mental math techniques
                with modern teaching methods, helping students develop
                concentration, memory, and calculation speed.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* About Our Center Section */}
      {/* <section className="py-20 bg-purple-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Students in classroom learning"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-white">
                About Our Center
              </h2>
              <p className="text-lg text-white leading-relaxed">
                Visit our center to meet our instructor and discover how
                Positive Mind can help your child build confidence and develop a
                love for learning. Read success stories from other families and
                learn about our flexible programs and pricing options.
              </p>
            </div>
          </div>
        </div>
      </section> */}
      <Contact />
     {/* Free Assessment CTA Section */}
<section className="bg-yellow-500 py-16">
  <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
    
    {/* Text */}
    <h2 className="text-2xl md:text-5xl font-extrabold text-white text-center md:text-left">
      Schedule Your Child&apos;s Free Assessment
    </h2>

    {/* Button */}
    <button
      onClick={() => setShowForm(true)}
      className="bg-white text-[#2D245B] font-bold px-8 py-3 rounded-md shadow-md hover:bg-gray-100 transition"
    >
      BOOK NOW
    </button>
  </div>
</section>


      {/* Footer */}
      <footer id="" className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Column 1: Positive Mind Academy */}
           <div className="space-y-4">
            <div className="flex items-center space-x-2">
              {/* Logo Image */}
              <div className="-ml-2 w-12 h-12 rounded-full overflow-hidden flex items-center justify-center bg-white">
                <img
                  src="/logo.png"   // replace with your logo path
                  alt="Positive Mind Academy Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-white">
                Positive Minds Academy
              </h3>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering students with personalized learning experiences and
              expert guidance to excel in their academic journey.
            </p>

            {/* Social & Location Icons */}
            <div className="flex space-x-3">
              <a
                href="https://www.google.com/maps/place/Positive+Minds+Academy/@37.6675922,-121.8615602,17z/data=!3m1!4b1!4m6!3m5!1s0x808fe9ac2f543e99:0x7cd74680980d06b7!8m2!3d37.6675922!4d-121.8615602!16s%2Fg%2F11srkqgp6h?entry=ttu&g_ep=EgoyMDI1MDUwMy4wIKXMDSoASAFQAw%3D%3D" // replace with Google Maps link
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                aria-label="Location"
              >
                <MapPin className="w-4 h-4 text-blue-900" />
              </a>

              <a
                href="https://www.facebook.com/pmaachievingexcellencetogether" // replace with FB link
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 text-blue-900" />
              </a>

              <a
                href="https://www.instagram.com/positive_minds_academy/" // replace with Instagram link
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-blue-900" />
              </a>
            </div>
                      </div>

                    {/* Column 2: Contact Us */}
          <div id="Contact-us"  className="space-y-4">
            <h4 className="text-lg font-bold text-white border-b border-white pb-2">
              Contact Us
            </h4>
            <div className="space-y-3">
              {/* Address */}
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 text-blue-400 flex items-center justify-center mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Address</p>
                  <div className="text-gray-300 text-sm space-y-1">
                    <p>Positive Minds Academy</p>
                    <p>39 California Avenue, Suite #108</p>
                    <p>Pleasanton, CA 94566</p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 text-blue-400 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Phone</p>
                  <a
                    href="tel:+19252170673"
                    className="text-gray-300 text-sm hover:text-white transition-colors duration-200"
                  >
                    +1 (925) 217-0673
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 text-blue-400 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Email</p>
                  <p className="text-gray-300 text-sm">
                    sarmita@positivemindsacademy.com
                  </p>
                </div>
              </div>
            </div>
          </div>


            {/* Column 3: Our Programs */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-white border-b border-white pb-2">
                Our Programs
              </h4>
              <div className="space-y-2">
                <a
                  href="#programs"
                  className="text-gray-300 text-sm hover:text-white cursor-pointer transition-colors block"
                >
                  Elementary Math (K-2)
                </a>
                <a
                  href="#programs"
                  className="text-gray-300 text-sm hover:text-white cursor-pointer transition-colors block"
                >
                  Middle-School Math
                </a>
                <a
                  href="#programs"
                  className="text-gray-300 text-sm hover:text-white cursor-pointer transition-colors block"
                >
                  Abacus Math
                </a>
              </div>
            </div>

            {/* Column 4: Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-white border-b border-white pb-2">
                Quick Links
              </h4>
              <div className="space-y-2">
                <a
                  href="#benefits"
                  className="text-gray-300 text-sm hover:text-white cursor-pointer transition-colors block"
                >
                  Why Choose Us
                </a>
                <a
                  href="#testimonials"
                  className="text-gray-300 text-sm hover:text-white cursor-pointer transition-colors block"
                >
                  Testimonials
                </a>
                <a
                  href="#faq"
                  className="text-gray-300 text-sm hover:text-white cursor-pointer transition-colors block"
                >
                  FAQ
                </a>
                <a
                  href="#"
                  className="text-gray-300 text-sm hover:text-white cursor-pointer transition-colors block"
                >
                  Privacy Policy
                </a>
              </div>
              <button
                onClick={() => setShowForm(true)}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-blue-700 transition-colors duration-200"
              >
                Book a Free Trial Class
              </button>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-700 pt-8">
            <div className="text-center">
              <p className="text-gray-400 text-sm">
                © 2025 Positive Mind Academy. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Enrollment Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-gray-800">
                  Book Your Free Trial
                </h2>
                <button
                  onClick={() => setShowForm(false)}
                  className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
                >
                  ×
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Parent/Guardian Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="childName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Child's Name *
                  </label>
                  <input
                    type="text"
                    id="childName"
                    name="childName"
                    value={formData.childName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Enter your child's full name"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="childAge"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Child's Grade *
                    </label>
                    <select
                      id="childAge"
                      name="childAge"
                      value={formData.childAge}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      <option value="">Select grade</option>
                      <option value="k">Kindergarten</option>
                      <option value="1">1st Grade</option>
                      <option value="2">2nd Grade</option>
                      <option value="3">3rd Grade</option>
                      <option value="4">4th Grade</option>
                      <option value="5">5th Grade</option>
                      <option value="6">6th Grade</option>
                      <option value="7">7th Grade</option>
                      <option value="8">8th Grade</option>
                      <option value="pre-algebra">Pre-Algebra</option>
                      <option value="algebra-1">Algebra I</option>
                      <option value="algebra-2">Algebra II</option>
                      <option value="geometry">Geometry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="program"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Program of Interest *
                  </label>
                  <select
                    id="program"
                    name="program"
                    value={formData.program}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="">Select a program</option>
                    <option value="elementary">Elementary Math (K-5)</option>
                    <option value="middle">Middle School Math (6-8)</option>
                    <option value="abacus">Abacus Math Training</option>
                    <option value="all">Not Sure / Need Guidance</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Tell us about your child's needs or any questions you have"
                  />
                </div>

                {/* <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>What happens next?</strong>
                    <br />
                    1. We'll contact you within 24 hours to schedule a free
                    assessment
                    <br />
                    2. Your child will complete a skills evaluation (30-45
                    minutes)
                    <br />
                    3. We'll provide a detailed report and program
                    recommendations
                    <br />
                    4. No obligation to enroll - it's completely free!
                  </p>
                </div> */}

                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-purple-800 text-white rounded-lg hover:bg-purple-900 transition-colors duration-200 font-semibold"
                  >
                    Submit Inquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Image Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-7xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white text-4xl font-bold hover:text-gray-300 transition-colors duration-200"
            >
              ×
            </button>
            <Image
              src={selectedImage}
              alt="Gallery image"
              width={1200}
              height={800}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </main>
  );
}
