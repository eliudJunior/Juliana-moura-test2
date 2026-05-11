import Link from 'next/link';
import { SERVICES } from '@/lib/constants/services';

export default function NailsServicePage() {
  const service = SERVICES.find(s => s.id === 'manicure-pedicure')!;

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
          <div className="order-2 lg:order-1 space-y-12">
            <div className="aspect-[4/5] bg-gray-100 rounded-3xl shadow-inner flex items-center justify-center text-gray-400">
               Imagem Manicure e Pedicure
            </div>
            
            <div className="bg-gray-50 rounded-3xl p-10 border border-gray-100">
              <h2 className="text-xl font-serif font-bold text-gray-900 mb-4">Higienização e Biossegurança</h2>
              <p className="text-gray-600 leading-relaxed font-light">
                No Salão Juliana Moura, sua saúde vem em primeiro lugar. Todos os nossos instrumentos de metal passam por um rigoroso processo de esterilização em autoclave hospitalar, e utilizamos kits individuais descartáveis para cada cliente, garantindo total segurança e higiene.
              </p>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
             <h1 className="text-5xl font-serif font-bold text-gray-900 mb-8">{service.title}</h1>
             <p className="text-xl text-gray-600 mb-10 font-light leading-relaxed">
               Cuidado completo para mãos e pés com foco na saúde das unhas e no bem-estar. Trabalhamos com as melhores marcas de esmaltes nacionais e importados.
             </p>
             <div className="bg-purple-50 rounded-3xl p-10 border border-purple-100">
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">Tabela de Preços</h2>
                <div className="space-y-6">
                  {service.items.map((item) => (
                    <div key={item.name} className="flex justify-between items-center border-b border-purple-200/50 pb-4">
                      <div>
                        <p className="text-gray-900 font-semibold">{item.name}</p>
                        <p className="text-sm text-gray-500 italic">Duração aprox: {item.duration}</p>
                      </div>
                      <span className="text-xl font-serif font-bold text-purple-600">{item.price}</span>
                    </div>
                  ))}
                </div>
             </div>
             
             <div className="mt-12">
               <Link
                href="/agendamento-e-contato"
                className="w-full inline-flex justify-center items-center px-10 py-5 bg-gray-900 text-white rounded-full font-bold text-lg hover:bg-pink-600 transition-all shadow-xl"
               >
                Agendar Horário
               </Link>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
