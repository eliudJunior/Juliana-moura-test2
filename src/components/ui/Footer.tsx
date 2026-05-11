import Link from 'next/link';
import { SALON_INFO } from '@/lib/constants/services';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-24 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="text-2xl font-serif font-bold text-gray-900 tracking-tight">
              JULIANA<span className="text-pink-500">MOURA</span>
            </Link>
            <p className="mt-6 text-gray-500 font-light leading-relaxed">
              Elevando a beleza e a autoestima com excelência técnica e um toque de arte em São Paulo.
            </p>
          </div>
          
          <div>
            <h3 className="text-xs font-bold text-gray-400 tracking-[0.3em] uppercase mb-6">Contatos</h3>
            <ul className="space-y-4">
              <li className="text-gray-600 font-medium">{SALON_INFO.phone}</li>
              <li className="text-gray-500 font-light break-all">{SALON_INFO.email}</li>
              <li className="text-gray-500 font-light">{SALON_INFO.address}</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold text-gray-400 tracking-[0.3em] uppercase mb-6">Horário</h3>
            <ul className="space-y-4">
              <li className="text-gray-600 font-medium">{SALON_INFO.openingHours}</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold text-gray-400 tracking-[0.3em] uppercase mb-6">Navegação</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/sobre" className="text-gray-500 hover:text-pink-500 transition-colors font-light">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="text-gray-500 hover:text-pink-500 transition-colors font-light">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/agendamento-e-contato" className="text-gray-500 hover:text-pink-500 transition-colors font-light">
                  Agendamento
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200/50 pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-gray-400 font-light">&copy; {new Date().getFullYear()} {SALON_INFO.name}. Todos os direitos reservados.</p>
          <div className="flex gap-8">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest cursor-pointer hover:text-pink-500 transition-colors">Instagram</span>
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest cursor-pointer hover:text-pink-500 transition-colors">WhatsApp</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
