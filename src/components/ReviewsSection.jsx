import React from 'react';
import { Star, Quote } from 'lucide-react';

const reviewsData = [
  {
    id: 1,
    name: "Vikram Patil",
    tagline: "Weekend Stay with Family",
    location: "Pune, Maharashtra",
    rating: 5,
    review: "SakalSari Farmhouse exceeded our expectations! Extremely peaceful, clean 1BHK villa, and the private jacuzzi was the highlight of our weekend trip. The gated security and complete privacy made us feel very comfortable."
  },
  {
    id: 2,
    name: "Sneha & Amit Shinde",
    tagline: "Couples Getaway",
    location: "Kolhapur, Maharashtra",
    rating: 5,
    review: "A hidden gem in Vadgaon, Sangli. Unwinding in the lush garden surrounded by fresh countryside breeze was truly refreshing. Super easy booking process via WhatsApp!"
  },
  {
    id: 3,
    name: "Rohan Deshmukh",
    tagline: "Private Family Retreat",
    location: "Mumbai, Maharashtra",
    rating: 5,
    review: "Awesome private stay! We had the entire property exclusively to ourselves. Kitchen facilities and washing machine were super helpful for a stress-free family holiday."
  },
  {
    id: 4,
    name: "Pooja Kulkarni",
    tagline: "Relaxing Holiday",
    location: "Sangli, Maharashtra",
    rating: 5,
    review: "Beautiful, clean, and well-maintained farmhouse with modern amenities. The jacuzzi under the open sky in the evening was fantastic. Highly recommended for small groups!"
  }
];

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-16 lg:py-24 bg-brand-ivory relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-sageDark bg-brand-beige border border-brand-sand px-4 py-1.5 rounded-full inline-block mb-3">
            What Our Guests Say
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-charcoal mb-4">
            Guest Reviews
          </h2>
          <div className="w-16 h-1 bg-brand-sage mx-auto mb-4 rounded-full"></div>
          <p className="text-brand-mutedText text-base sm:text-lg font-light">
            Read real experiences from families and couples who stayed at SakalSari Farmhouse.
          </p>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviewsData.map((item) => (
            <div 
              key={item.id}
              className="bg-white rounded-3xl p-7 border border-brand-sand/70 shadow-soft-sm hover:shadow-soft-md transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div className="space-y-4">
                
                {/* Header: Stars & Quote Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-brand-sand group-hover:text-brand-sageLight transition-colors" />
                </div>

                {/* Review Paragraph */}
                <p className="text-brand-charcoal text-sm sm:text-base font-light leading-relaxed italic">
                  "{item.review}"
                </p>
              </div>

              {/* Footer: Guest Name & Tagline */}
              <div className="pt-5 mt-5 border-t border-brand-sand/50 flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-brand-charcoal text-base">
                    {item.name}
                  </h4>
                  <p className="text-xs text-brand-sageDark font-medium">
                    {item.tagline}
                  </p>
                </div>
                <span className="text-[11px] font-medium text-brand-mutedText bg-brand-beige px-3 py-1 rounded-full border border-brand-sand/50">
                  {item.location}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
