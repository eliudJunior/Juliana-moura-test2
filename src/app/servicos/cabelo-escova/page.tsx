import Link from 'next/link';
import { SERVICES } from '@/lib/constants/services';

export default function HairServicePage() {
  const service = SERVICES.find(s => s.id === 'cabelo-escova')!;

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="mb-10">
          <Link href="/servicos" className="text-pink-600 hover:text-pink-700 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Voltar para Serviços
          </Link>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div>
             <h1 className="text-5xl font-serif font-bold text-gray-900 mb-8">{service.title}</h1>
             <p className="text-xl text-gray-600 mb-10 font-light leading-relaxed">
               {service.description} Nossa equipe utiliza técnicas de corte e finalização que respeitam o caimento natural dos fios, garantindo um resultado duradouro e sofisticado.
             </p>
             <div className="bg-pink-50 rounded-3xl p-10 border border-pink-100">
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">Tabela de Preços</h2>
                <div className="space-y-6">
                  {service.items.map((item) => (
                    <div key={item.name} className="flex justify-between items-center border-b border-pink-200/50 pb-4">
                      <div>
                        <p className="text-gray-900 font-semibold">{item.name}</p>
                        <p className="text-sm text-gray-500 italic">Duração aprox: {item.duration}</p>
                      </div>
                      <span className="text-xl font-serif font-bold text-pink-600">{item.price}</span>
                    </div>
                  ))}
                </div>
             </div>
          </div>
          <div className="space-y-12">
            <div className="aspect-[4/5] bg-gray-100 rounded-3xl shadow-inner flex items-center justify-center text-gray-400">
               Imagem Cabelo e Escova
            </div>
            
            {/* AEO Section */}
            <div className="bg-gray-50 rounded-3xl p-10 border border-gray-100">
              <h2 className="text-xl font-serif font-bold text-gray-900 mb-4">Qual a diferença entre uma escova comum e a escova modeladora Juliana Moura?</h2>
              <p className="text-gray-600 leading-relaxed font-light">
                A escova modeladora Juliana Moura utiliza tecnologia térmica avançada e produtos de proteção que não apenas secam, mas tratam a fibra capilar. O resultado é um cabelo com movimento natural, brilho intenso e uma fixação que dura o dia todo, sem o aspecto pesado de finalizadores comuns.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section for SEO */}
        <section className="border-t border-gray-100 pt-24">
           <h2 className="text-3xl font-serif font-bold text-gray-900 mb-12 text-center">Dúvidas Frequentes</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                 <h3 className="font-bold text-gray-900 mb-3">Com que frequência devo fazer uma hidratação profunda?</h3>
                 <p className="text-gray-600 font-light">Para cabelos saudáveis, recomendamos a hidratação a cada 15 dias. Se os fios estiverem com química, o ideal é um tratamento semanal para reposição de nutrientes.</p>
              </div>
              <div>
                 <h3 className="font-bold text-gray-900 mb-3">O salão trabalha com coloração sem amônia?</h3>
                 <p className="text-gray-600 font-light">Sim, oferecemos opções de coloração de alta tecnologia sem amônia, ideais para couros cabeludos sensíveis e para quem busca um brilho extra sem agredir os fios.</p>
              </div>
           </div>
        </section>
      </div>
    </div>
  );
}
