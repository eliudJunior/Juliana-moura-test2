import Link from 'next/link';
import { SERVICES } from '@/lib/constants/services';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function ServicesHub() {
  return (
    <div className="py-20 md:py-32 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-24">
          <h1 className="text-xs md:text-sm font-bold text-pink-600 uppercase tracking-[0.4em] mb-4">Cardápio de Beleza</h1>
          <p className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-8 tracking-tight">Nossos Serviços</p>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
            Oferecemos soluções completas para cabelo e unhas, utilizando as melhores técnicas e produtos do mercado internacional.
          </p>
        </AnimatedSection>

        <div className="space-y-32 md:space-y-48">
          {SERVICES.map((service, index) => (
            <AnimatedSection 
              key={service.id} 
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-24`}
            >
              <div className="flex-1 w-full relative">
                <div className="absolute -inset-4 bg-gray-50 rounded-[3rem] -z-10" />
                <div className="aspect-[16/10] bg-gray-100 rounded-[2.5rem] overflow-hidden shadow-2xl relative border-8 border-white">
                   <div className="absolute inset-0 bg-gradient-to-br from-pink-50/50 to-purple-50/50 flex items-center justify-center text-gray-300 font-bold tracking-widest uppercase text-xs">
                      {service.title} Photo
                   </div>
                </div>
              </div>
              <div className="flex-1 text-center lg:text-left">
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-6 tracking-tight">{service.title}</h2>
                <p className="text-lg text-gray-600 mb-10 leading-relaxed font-light">
                  {service.description}
                </p>
                <div className="space-y-6 mb-12">
                  {service.items.slice(0, 3).map((item) => (
                    <div key={item.name} className="flex justify-between items-center border-b border-gray-100 pb-3">
                      <span className="text-gray-900 font-medium text-lg">{item.name}</span>
                      <span className="text-pink-600 font-serif font-bold text-xl">{item.price}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href={service.path}
                  className="inline-flex items-center px-10 py-4 bg-gray-900 text-white rounded-full font-bold hover:bg-pink-600 transition-all shadow-xl hover:-translate-y-1"
                >
                  Ver Catálogo Completo
                </Link>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}
