import { Star } from 'lucide-react';
import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from './LanguageContext';

interface TestimonialConfig {
  nameKey: string;
  roleKey: string;
  contentKey: string;
  rating: number;
  avatar: string;
}

const testimonials: TestimonialConfig[] = [
  {
    nameKey: 'testimonials.items.0.name',
    roleKey: 'testimonials.items.0.role',
    contentKey: 'testimonials.items.0.content',
    rating: 5,
    avatar:
      'https://images.unsplash.com/photo-1519217651866-847339e674d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjIzNTA1NTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    nameKey: 'testimonials.items.1.name',
    roleKey: 'testimonials.items.1.role',
    contentKey: 'testimonials.items.1.content',
    rating: 5,
    avatar:
      'https://images.unsplash.com/photo-1519217651866-847339e674d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjIzNTA1NTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    nameKey: 'testimonials.items.2.name',
    roleKey: 'testimonials.items.2.role',
    contentKey: 'testimonials.items.2.content',
    rating: 5,
    avatar:
      'https://images.unsplash.com/photo-1519217651866-847339e674d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjIzNTA1NTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];

export function Testimonials() {
  const { t } = useLanguage();

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full mb-4">
            {t('testimonials.badge')}
          </div>
          <h2 className="text-gray-900 mb-4">
            {t('testimonials.heading')}
          </h2>
          <p className="text-gray-600">
            {t('testimonials.description')}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 border-gray-200 hover:shadow-lg transition-shadow">
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-yellow-400" size={20} />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-600 mb-6">"{t(testimonial.contentKey)}"</p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-6 border-t border-gray-200">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full overflow-hidden">
                  <ImageWithFallback
                    src={testimonial.avatar}
                    alt={t(testimonial.nameKey)}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-gray-900">{t(testimonial.nameKey)}</div>
                  <div className="text-gray-600">{t(testimonial.roleKey)}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

