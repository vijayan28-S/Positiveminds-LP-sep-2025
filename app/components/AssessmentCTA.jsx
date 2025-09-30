export default function setShowForm({ onBookClick }) {
  return (
    <section className="bg-yellow-500 py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Text */}
        <h2 className="text-2xl md:text-3xl font-extrabold text-white text-center md:text-left">
          Schedule Your Child&apos;s Free Assessment
        </h2>

        {/* Button */}
        <button
          onClick={onBookClick}
          className="bg-white text-[#2D245B] font-bold px-8 py-3 rounded-md shadow-md hover:bg-gray-100 transition"
        >
          BOOK NOW
        </button>
      </div>
    </section>
  );
}
