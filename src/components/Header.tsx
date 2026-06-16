import { useState } from 'react';
import { Menu, X, ArrowRight, Activity, ShieldCheck, PhoneCall } from 'lucide-react';

interface HeaderProps {
  onOpenReferralModal: () => void;
  onScrollTo: (id: string) => void;
  onChangePage: (page: 'home' | 'careers') => void;
  currentPage: 'home' | 'careers';
}

export default function Header({ onOpenReferralModal, onScrollTo, onChangePage, currentPage }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'HomeMed OS', target: 'homemed-os', type: 'anchor' },
    { name: 'Programs', target: 'architecture', type: 'anchor' },
    { name: 'Careers', target: 'careers', type: 'page' },
    { name: 'What Make Us Unique', target: 'programs', type: 'anchor' }
  ];

  const handleLogoClick = () => {
    onChangePage('home');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 50);
  };

  const handleLinkClick = (link: typeof navLinks[0]) => {
    if (link.type === 'page') {
      onChangePage(link.target as 'home' | 'careers');
    } else {
      onChangePage('home');
      setTimeout(() => {
        onScrollTo(link.target);
      }, 80);
    }
    setIsOpen(false);
  };

  const handleContactClick = () => {
    onChangePage('home');
    setTimeout(() => {
      onScrollTo('contact');
    }, 80);
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#061324]/90 backdrop-blur-md border-b border-slate-800/60 text-white transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex items-center cursor-pointer select-none py-1 transition-transform duration-300 hover:scale-[1.02]" onClick={handleLogoClick}>
            <img 
              src="/assets/logo.jpg" 
              alt="HomeMed OS Logo" 
              referrerPolicy="no-referrer"
              className="h-11 sm:h-12 w-auto object-contain rounded-lg"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = (link.type === 'page' && currentPage === link.target) || 
                               (link.type === 'anchor' && currentPage === 'home' && false); // anchor active state is transient
              return (
                <button
                  key={link.name}
                  onClick={() => handleLinkClick(link)}
                  className={`text-sm font-medium transition-colors duration-200 cursor-pointer relative py-1 group ${
                    isActive ? 'text-brand-teal font-semibold' : 'text-slate-300 hover:text-brand-teal'
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-brand-teal transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </button>
              );
            })}
          </nav>

          {/* Action Call-to-actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={handleContactClick}
              className="text-xs font-semibold text-slate-200 hover:text-white px-4 py-2 rounded-md border border-slate-700 hover:border-slate-500 hover:bg-slate-800/30 transition-all duration-200 inline-flex items-center space-x-1.5"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Contact Support</span>
            </button>
            <button
              onClick={onOpenReferralModal}
              className="px-5 py-2.5 rounded-full bg-brand-teal hover:bg-brand-teal-dark active:scale-[0.98] text-[#061324] font-semibold text-xs transition-all duration-200 flex items-center space-x-1 shadow-lg shadow-brand-teal/15 animate-pulse-subtle"
            >
              <span>Request Home Care</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#061324] border-b border-slate-800 transition-all duration-300">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {navLinks.map((link) => {
              const isActive = (link.type === 'page' && currentPage === link.target);
              return (
                <button
                  key={link.name}
                  onClick={() => handleLinkClick(link)}
                  className={`block w-full text-left px-3 py-3 rounded-md text-base font-medium transition-colors duration-200 ${
                    isActive ? 'text-brand-teal bg-slate-900/60 font-semibold' : 'text-slate-300 hover:text-brand-teal hover:bg-slate-800/50'
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
            <div className="pt-4 pb-2 border-t border-slate-800 px-3 flex flex-col space-y-3">
              <button
                onClick={handleContactClick}
                className="w-full text-center py-2.5 rounded-md text-sm font-medium text-slate-300 border border-slate-700 hover:bg-slate-800/40"
              >
                Contact Support
              </button>
              <button
                onClick={() => {
                  onOpenReferralModal();
                  setIsOpen(false);
                }}
                className="w-full text-center py-2.5 rounded-md text-sm font-bold bg-brand-teal text-[#061324] flex items-center justify-center space-x-2"
              >
                <span>Request Home Care</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
