import { SALON_INFO, SERVICES } from '@/lib/constants/services';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { Phone, MapPin, Clock, Send } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="py-20 md:py-32 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16 md:mb-24">
          <h1 className="text-xs md:text-sm font-bold text-pink-600 uppercase tracking-[0.4em] mb-4">Sua Experiência Começa Aqui</h1>
          <p className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-8 tracking-tight">Agendamento & Contato</p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Booking Info */}
          <AnimatedSection className="order-2 lg:order-1 space-y-8 md:space-y-12">
            <div className="bg-gray-50 rounded-[3rem] p-8 md:p-12 border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-10 tracking-tight">Canais de Atendimento</h2>
              <div className="space-y-10">
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-white rounded-2xl text-pink-500 shadow-sm">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-1">WhatsApp / Telefone</p>
                    <p className="text-xl text-gray-900 font-medium">{SALON_INFO.phone}</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-white rounded-2xl text-pink-500 shadow-sm">
                    <Clock size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-1">Horário de Funcionamento</p>
                    <p className="text-xl text-gray-900 font-medium">{SALON_INFO.openingHours}</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-white rounded-2xl text-pink-500 shadow-sm">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-1">Nosso Espaço</p>
                    <p className="text-xl text-gray-900 font-medium">{SALON_INFO.address}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="aspect-video bg-gray-100 rounded-[3rem] flex items-center justify-center text-gray-300 font-bold uppercase tracking-widest text-xs border border-gray-100">
               Localização Interativa
            </div>
          </AnimatedSection>

          {/* Booking Form */}
          <AnimatedSection delay={0.2} className="order-1 lg:order-2">
            <div className="bg-white rounded-[3rem] p-8 md:p-12 border border-gray-100 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-pink-50 rounded-full blur-3xl opacity-50 -mr-16 -mt-16" />
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-8 tracking-tight relative z-10">Solicitar Reserva</h3>
              <form className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Nome</label>
                    <input type="text" className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-pink-500 transition-all font-medium" placeholder="Como podemos te chamar?" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">WhatsApp</label>
                    <input type="tel" className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-pink-500 transition-all font-medium" placeholder="(00) 00000-0000" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Serviço</label>
                  <div className="relative">
                    <select className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-pink-500 transition-all appearance-none font-medium text-gray-700">
                      <option>Selecione o procedimento</option>
                      {SERVICES.map(s => <option key={s.id}>{s.title}</option>)}
                    </select>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Mensagem</label>
                  <textarea rows={4} className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-pink-500 transition-all font-medium" placeholder="Deseja acrescentar algum detalhe?"></textarea>
                </div>
                <button type="submit" className="w-full py-5 bg-gray-900 hover:bg-pink-600 text-white rounded-full font-bold text-lg transition-all shadow-xl hover:-translate-y-1 flex items-center justify-center gap-3 group">
                  Enviar Solicitação
                  <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
                <p className="text-center text-[10px] md:text-xs text-gray-400 leading-relaxed px-4">
                  Ao enviar, sua solicitação será processada e nossa equipe entrará em contato para confirmar a disponibilidade.
                </p>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
