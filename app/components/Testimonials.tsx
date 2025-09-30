"use client";

import React, { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

// Simple Tailwind Button
function Button({
  children,
  className = "",
  variant = "default",
  size = "md",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline";
  size?: "sm" | "md" | "lg";
}) {
  const base =
    "font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded-full transition-colors";
  const variants: Record<string, string> = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
  };
  const sizes: Record<string, string> = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };
  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

// Simple Tailwind Card
function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-2xl border border-gray-200 bg-white shadow-sm ${className}`}>
      {children}
    </div>
  );
}

function CardContent({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`p-6 ${className}`}>{children}</div>;
}

const testimonials = [
  {
    id: 1,
    name: "Anh Pham",
    role: "Parent of Elementary Student",
    content:
      "My daughter has been going here for math tutoring since she was 5 yrs old, she is now 9. She started out with basic math tutoring using an abacus, advanced to mental math calculation without abacus, and now she is doing pre-algebra. She has gained confidence, speed, and accuracy from this program, and it shows through her grades in school. Teachers are very nice, supportive, and flexible. I'd defintely recommend this program! Thank you Ms. Sarmita and Ms. Shree!",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Laxmi",
    role: "Parent of Middle School Student",
    content:
      "My Son has been going here for a Math class with Mrs. Shree for a while now. She is a great teacher. I love the way you interact with your students; it’s easy to see that your students respect you and your ability to easily connect with students and that you care about them and also i like the clear communication of learning objectives in your teaching method and is highly appreciated.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "sirisha b",
    role: "Elementary School Teacher",
    content:
      "My daughter has been going here since 2.5 years. She really loves it. The teachers make it fun. She is learning how to do math on the abacus. They have workshops to help kids with difficult concepts. The teachers Ms Sarmita and Ms Shree are very good.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Amanda Mendoza",
    role: "Parent of Elementary Student",
    content:
      "We have had Mrs. Shree for while now. She is a great teacher (experienced, knowledgeable, nice, and helpful) and the kids love her. It feels good to see the improvement in the kids’ math skills over the years. Thank you for that, Mrs. Shree!",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1024) setItemsPerPage(3);
      else if (width >= 768) setItemsPerPage(2);
      else setItemsPerPage(1);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const pageCount = Math.ceil(testimonials.length / itemsPerPage);

  const nextSlide = () =>
    setActiveIndex((prev) => (prev === pageCount - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setActiveIndex((prev) => (prev === 0 ? pageCount - 1 : prev - 1));

  return (
    <section id="testimonials" className="py-20 px-20 bg-white font-sans">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className=" -mt-20 text-3xl md:text-4xl font-bold mb-4 text-[#22abe0]">
            What Parents & Educators Say
          </h2>
          <p className="text-gray-600 text-lg">
            Hear from parents and educators about the positive impact our
            programs have had on students' mathematical development.
          </p>
        </div>

        <div className="relative">
          <div className="flex overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${activeIndex * (100 / itemsPerPage)}%)`,
              }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="min-w-full md:min-w-[50%] lg:min-w-[33.333%] px-4"
                >
                  <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent>
                      <div className="flex items-center mb-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover mr-4"
                        />
                        <div>
                          <h4 className="font-bold text-gray-800">
                            {testimonial.name}
                          </h4>
                          <p className="text-sm text-gray-500">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-5 h-5 ${
                              i < testimonial.rating
                                ? "text-yellow-400"
                                : "text-gray-300"
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-gray-700">{testimonial.content}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            <Button
              onClick={prevSlide}
              variant="outline"
              size="sm"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            {[...Array(pageCount)].map((_, i) => (
              <Button
                key={i}
                variant={i === activeIndex ? "default" : "outline"}
                size="sm"
                className={`w-3 h-3 rounded-full p-0 ${
                  i === activeIndex ? "bg-blue-600" : ""
                }`}
                onClick={() => setActiveIndex(i)}
                aria-label={`Go to testimonial page ${i + 1}`}
              >
                <span className="sr-only">Page {i + 1}</span>
              </Button>
            ))}
            <Button
              onClick={nextSlide}
              variant="outline"
              size="sm"
              aria-label="Next testimonial"
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
