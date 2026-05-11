import Link from 'next/link';
import { SERVICES, SALON_INFO } from '@/lib/constants/services';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[90vh] md:h-[85vh] flex items-center justify-center overflow-hidden bg-gray-900 px-6">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 via-gray-900/60 to-gray-900/90" />
          <div className="absolute top-1/4 -left-20 w-72 md:w-96 h-72 md:h-96 bg-rose-600/20 rounded-full blur-[100px] md:blur-[120px]" />
          <div className="absolute bottom-1/4 -right-20 w-72 md:w-96 h-72 md:h-96 bg-purple-600/10 rounded-full blur-[100px] md:blur-[120px]" />
          <div className="relative w-full h-full opacity-60">
             <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1974')] bg-cover bg-center scale-105" />
          </div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <AnimatedSection>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 tracking-tight leading-[1.1]">
              Realce sua <span className="text-rose-500 italic block sm:inline">Beleza Natural</span>
            </h1>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed px-4 md:px-0">
              No {SALON_INFO.name}, cada atendimento é uma experiência única de cuidado e sofisticação desenhada para você.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/agendamento-e-contato"
                className="w-full sm:w-auto px-10 py-5 bg-rose-500 hover:bg-rose-600 text-white rounded-full font-bold transition-all shadow-xl shadow-rose-500/20 hover:-translate-y-1 active:translate-y-0 uppercase text-sm tracking-widest"
              >
                Agendar Experiência
              </Link>
              <Link
                href="/servicos"
                className="w-full sm:w-auto px-10 py-5 bg-white/5 hover:bg-white/10 text-white border border-white/20 backdrop-blur-md rounded-full font-bold transition-all hover:-translate-y-1 active:translate-y-0 uppercase text-sm tracking-widest"
              >
                Conhecer Serviços
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 md:py-32 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16 md:mb-24">
            <h2 className="text-[10px] md:text-xs font-bold text-rose-500 uppercase tracking-[0.5em] mb-4">Especialidades</h2>
            <p className="text-3xl md:text-5xl font-serif font-bold text-gray-900 tracking-tight">O que fazemos de melhor</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {SERVICES.map((service, idx) => (
              <AnimatedSection key={service.id} delay={idx * 0.1}>
                <Link
                  href={service.path}
                  className="group relative aspect-[4/3] md:h-[500px] overflow-hidden rounded-[2.5rem] shadow-2xl shadow-gray-200/50 transition-all hover:-translate-y-2 block"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10" />
                  <div className="absolute inset-0 bg-gray-100 transition-transform duration-1000 ease-out group-hover:scale-110">
                    <div className={`w-full h-full ${service.id === 'cabelo-escova' ? 'bg-rose-50' : 'bg-purple-50'} flex items-center justify-center`}>
                        <span className="text-gray-300 text-[10px] font-bold uppercase tracking-[0.5em] rotate-90 md:rotate-0">{service.title}</span>
                    </div>
                  </div>
                  <div className="absolute bottom-0 p-8 md:p-12 z-20 w-full">
                    <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-400 font-light mb-6 line-clamp-2 max-w-md">{service.description}</p>
                    <span className="inline-flex items-center text-rose-500 font-bold group-hover:gap-4 gap-2 transition-all uppercase text-xs tracking-widest">
                      Ver detalhes <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* E-E-A-T Section */}
      <section className="py-20 md:py-32 bg-gray-50 overflow-hidden px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            <AnimatedSection className="w-full lg:flex-1 relative">
              <div className="absolute -top-10 -left-10 w-32 md:w-48 h-32 md:h-48 bg-rose-100 rounded-full z-0 blur-2xl opacity-60" />
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/5] bg-gray-200 border-[12px] border-white">
                <div className="w-full h-full flex items-center justify-center text-gray-300 italic">Juliana Moura Portrait</div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2} className="w-full lg:flex-1 text-center lg:text-left">
              <h2 className="text-[10px] md:text-xs font-bold text-rose-500 uppercase tracking-[0.5em] mb-4">Experiência</h2>
              <h3 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-8 tracking-tight">Juliana Moura: A Arte de Transformar</h3>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed font-light">
                Com mais de 10 anos de mercado, Juliana Moura une técnica de ponta e visagismo para revelar a beleza única de cada mulher. Seu salão em São Paulo é reconhecido pela excelência e biossegurança.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mb-12">
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                  <p className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-1">10+</p>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Anos de Carreira</p>
                </div>
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                  <p className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-1">5k+</p>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Clientes Felizes</p>
                </div>
              </div>
              
              <Link
                href="/sobre"
                className="inline-flex items-center gap-2 text-gray-900 font-bold border-b-2 border-rose-500 pb-2 hover:text-rose-500 hover:gap-4 transition-all uppercase text-xs tracking-widest"
              >
                Conheça nossa trajetória
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-40 px-6">
        <AnimatedSection className="max-w-5xl mx-auto bg-gray-900 rounded-[3rem] md:rounded-[5rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl shadow-rose-500/10">
          <div className="absolute inset-0 bg-gradient-to-br from-rose-600/20 to-purple-600/10 opacity-30" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-6xl font-serif font-bold text-white mb-8 tracking-tight">Pronta para brilhar?</h2>
            <p className="text-lg md:text-xl text-gray-400 mb-12 font-light max-w-xl mx-auto leading-relaxed">
              Reserve seu momento de cuidado e experimente o padrão de excelência Juliana Moura.
            </p>
            <Link
              href="/agendamento-e-contato"
              className="inline-block px-12 py-5 bg-white text-gray-900 hover:bg-rose-50 rounded-full font-bold text-sm uppercase tracking-widest transition-all shadow-xl hover:-translate-y-1"
            >
              Agendar Agora
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
