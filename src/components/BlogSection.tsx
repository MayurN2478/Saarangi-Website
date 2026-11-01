import React, { useState } from 'react';
import { BookOpen, Calendar, Clock, ArrowRight, X, Sparkles } from 'lucide-react';
import { BLOG_POSTS, BlogPost } from '../data/restaurantData';

export const BlogSection: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="py-20 sm:py-28 bg-vintage-ivory text-vintage-brown relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-vintage-sand/80 border border-vintage-gold/40 text-vintage-maroon text-xs font-semibold uppercase tracking-wider mb-3">
            <BookOpen className="w-4 h-4 text-vintage-gold" />
            <span>Stories & Culinary Heritage</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-vintage-brown tracking-tight">
            Saarangi Journal & Blog
          </h2>

          <div className="ornament-line my-4">
            <span className="text-vintage-gold text-lg">✦</span>
          </div>

          <p className="text-sm sm:text-base text-vintage-brown/80 max-w-2xl mx-auto leading-relaxed">
            Read about the timeless traditions of wood-fired gastronomy, our sacred origins in Tirumala, and how we bring authenticity to Mysuru.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              className="rounded-2xl overflow-hidden bg-vintage-sand/30 border border-vintage-gold/25 hover:border-vintage-gold/60 shadow-vintage hover:shadow-vintage-lg transition-all duration-300 flex flex-col group hover:-translate-y-1.5"
            >
              <div className="relative h-56 w-full overflow-hidden bg-vintage-darkest">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 bg-vintage-maroon/90 text-vintage-ivory text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-md border border-vintage-gold/30">
                  {post.category}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 text-xs text-vintage-terracotta mb-2.5">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-vintage-gold" />
                      <span>{post.date}</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-vintage-gold" />
                      <span>{post.readTime}</span>
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-vintage-brown group-hover:text-vintage-maroon transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-vintage-brown/80 mt-2.5 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-vintage-cream/80">
                  <button
                    onClick={() => setSelectedPost(post)}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-vintage-maroon group-hover:text-vintage-brown transition-colors uppercase tracking-wider"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4 text-vintage-gold group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Blog Post Detail Modal */}
        {selectedPost && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in"
            onClick={() => setSelectedPost(null)}
          >
            <div
              className="relative max-w-2xl w-full bg-vintage-ivory rounded-2xl overflow-hidden border border-vintage-gold/50 shadow-2xl flex flex-col max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header Image */}
              <div className="relative h-64 w-full bg-vintage-darkest">
                <img
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedPost(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:text-vintage-gold transition-colors"
                  aria-label="Close article"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-3 left-4 bg-vintage-maroon text-vintage-ivory text-xs px-3 py-1 rounded-md font-semibold border border-vintage-gold/30">
                  {selectedPost.category}
                </div>
              </div>

              {/* Article Content */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-4">
                <div className="flex items-center gap-4 text-xs text-vintage-terracotta">
                  <span>{selectedPost.date}</span>
                  <span>•</span>
                  <span>{selectedPost.readTime}</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-vintage-brown leading-tight">
                  {selectedPost.title}
                </h3>

                <div className="h-0.5 w-16 bg-vintage-gold my-2" />

                <div className="prose text-vintage-brown/85 text-sm sm:text-base leading-relaxed space-y-4">
                  <p className="font-medium text-vintage-brown leading-relaxed italic bg-vintage-sand/40 p-3.5 rounded-lg border-l-4 border-vintage-gold">
                    "{selectedPost.excerpt}"
                  </p>
                  <p>{selectedPost.content}</p>
                  <p className="text-xs text-vintage-brown/70 pt-2 border-t border-vintage-cream">
                    Published by <strong>Saarangi – The Vintage Kitchen Editorial Team</strong>, Vijayanagar, Mysuru.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
