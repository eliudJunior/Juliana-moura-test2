import { SALON_INFO } from '@/lib/constants/services';
import { getPersonSchema } from '@/lib/seo/schemas';

export default function AboutPage() {
  const personSchema = getPersonSchema();

  return (
    <div className="py-24 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="relative">
             <div className="absolute -top-10 -left-10 w-64 h-64 bg-pink-100 rounded-full blur-3xl opacity-50 z-0" />
             <div className="relative z-10 aspect-[3/4] bg-gray-100 rounded-[40px] overflow-hidden shadow-2xl border-8 border-white">
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                   Retrato de Juliana Moura
                </div>
             </div>
          </div>
          <div>
            <h1 className="text-sm font-bold text-pink-600 uppercase tracking-widest mb-3">Nossa História</h1>
            <h2 className="text-5xl font-serif font-bold text-gray-900 mb-8">Juliana Moura</h2>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed font-light">
              Apaixonada pela arte da beleza desde cedo, Juliana Moura iniciou sua jornada com um propósito claro: elevar a autoestima de suas clientes através de um atendimento personalizado e técnico.
            </p>
            <p className="text-lg text-gray-500 mb-10 leading-relaxed font-light">
              Hoje, com mais de uma década de mercado e diversas certificações internacionais, ela lidera seu próprio espaço em São Paulo, focado em oferecer o que há de mais moderno em tratamentos capilares e estética das unhas.
            </p>
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
               <h3 className="text-lg font-bold text-gray-900 mb-4 italic">"Minha missão é que cada cliente saia da minha cadeira sentindo-se a melhor versão de si mesma."</h3>
               <p className="text-pink-600 font-serif font-bold">— Juliana Moura</p>
            </div>
          </div>
        </div>

        <section className="bg-gray-900 rounded-[60px] p-16 md:p-24 text-white relative overflow-hidden">
           <div className="absolute top-0 right-0 w-96 h-96 bg-pink-600/20 rounded-full blur-[120px]" />
           <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12">Nossos Valores</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                 <div>
                    <h4 className="text-pink-500 font-bold mb-4 uppercase tracking-wider">Excelência</h4>
                    <p className="text-gray-400 font-light">Busca incessante pelas melhores técnicas e produtos do mundo.</p>
                 </div>
                 <div>
                    <h4 className="text-pink-500 font-bold mb-4 uppercase tracking-wider">Biossegurança</h4>
                    <p className="text-gray-400 font-light">Rigor absoluto na esterilização e higiene de cada ferramenta.</p>
                 </div>
                 <div>
                    <h4 className="text-pink-500 font-bold mb-4 uppercase tracking-wider">Acolhimento</h4>
                    <p className="text-gray-400 font-light">Um ambiente pensado para o seu relaxamento e bem-estar total.</p>
                 </div>
              </div>
           </div>
        </section>
      </div>
    </div>
  );
}
