import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles, HeartHandshake, ChevronDown } from 'lucide-react';
import Button from '../common/Button';
import { NAV_SECTIONS } from './navConfig';

function NavItem({ item, onClick, isMobile = false }) {
  const Icon = item.icon;

  const content = (
    <>
      <div
        className={`w-8 h-8 rounded-xl border flex items-center justify-center shrink-0 transition-colors shadow-sm ${
          item.iconStyle || 'bg-slate-100 text-slate-600 border-slate-200'
        }`}
      >
        <Icon className="w-4 h-4" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-1.5 flex-nowrap">
          <span className="text-sm font-bold text-slate-900 group-hover:text-humind-primary-600 transition-colors whitespace-nowrap">
            {item.title}
          </span>
          {item.badge && (
            <span className="shrink-0 whitespace-nowrap px-1.5 py-0.5 text-[9px] font-semibold rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/80 leading-none">
              {item.badge}
            </span>
          )}
        </div>
        <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
          {item.desc}
        </p>
      </div>
    </>
  );

  const containerClass = `group flex items-start gap-3 p-2.5 rounded-2xl transition-all duration-150 ${
    isMobile
      ? 'hover:bg-white'
      : 'hover:bg-slate-50 border border-transparent hover:border-slate-200/70'
  }`;

  if (item.to) {
    return (
      <Link to={item.to} onClick={onClick} className={containerClass}>
        {content}
      </Link>
    );
  }

  return (
    <div className={`${containerClass} opacity-80 cursor-default`}>
      {content}
    </div>
  );
}

function MegaDropdown({ section, onItemClick }) {
  const PromoIcon = section.promo.icon;

  return (
    <div
      className={`absolute mt-2.5 bg-white rounded-3xl p-5 shadow-xl shadow-slate-200/60 border border-slate-200/90 z-50 transition-all ${
        section.align === 'center'
          ? 'left-1/2 -translate-x-1/2 ' + section.width
          : 'left-0 ' + section.width
      }`}
    >
      <div className="grid grid-cols-12 gap-5">
        {/* Left Column Promo Card */}
        <div
          className={`${section.promoSpan} bg-gradient-to-br border rounded-2xl p-4 flex flex-col justify-between ${section.promo.gradient}`}
        >
          <div>
            <div
              className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-soft mb-3 ${section.promo.iconBg}`}
            >
              <PromoIcon className="w-6 h-6" />
            </div>
            <h4 className="text-sm font-extrabold text-slate-900 leading-snug">
              {section.promo.title}
            </h4>
            <p className="text-[11px] text-slate-600 mt-2 leading-relaxed">
              {section.promo.desc}
            </p>
          </div>
          {section.promo.badge && (
            <div className="pt-3">
              <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-humind-primary-700 bg-white/90 px-2.5 py-1 rounded-full border border-sky-200/70 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                {section.promo.badge}
              </span>
            </div>
          )}
        </div>

        {/* Right Column Links */}
        <div className={`${section.contentSpan} flex flex-col justify-center py-0.5`}>
          <div className="text-[11px] font-bold text-slate-400 tracking-wider uppercase mb-2 px-1">
            {section.menuTitle}
          </div>
          <div
            className={
              section.columns === 2
                ? 'grid grid-cols-2 gap-x-4 gap-y-2'
                : 'space-y-1.5'
            }
          >
            {section.items.map((item) => (
              <NavItem
                key={item.title}
                item={item}
                onClick={(e) => onItemClick(e, item)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileOpenSection, setMobileOpenSection] = useState(null);

  const navContainerRef = useRef(null);
  const location = useLocation();

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (navContainerRef.current && !navContainerRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogoClick = (e) => {
    setActiveDropdown(null);
    setIsOpen(false);

    if (location.pathname === '/') {
      e.preventDefault();
      const heroElement = document.getElementById('hero');
      if (heroElement) {
        heroElement.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  const handleItemClick = (e, item) => {
    setActiveDropdown(null);
    setIsOpen(false);

    if (item.scrollTarget && location.pathname === '/') {
      e?.preventDefault();
      const el = document.getElementById(item.scrollTarget);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const toggleDropdown = (name) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  const toggleMobileSection = (name) => {
    setMobileOpenSection((prev) => (prev === name ? null : name));
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            onClick={handleLogoClick}
            className="flex items-center gap-2.5 group shrink-0 focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-humind-primary-500 flex items-center justify-center text-white shadow-soft group-hover:bg-humind-primary-600 group-hover:scale-105 transition-all duration-200">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight text-slate-900 group-hover:text-humind-primary-600 transition-colors">
                Hum<span className="text-humind-primary-500">ind</span>
              </span>
              <span className="text-[10px] -mt-1 text-slate-400 font-medium tracking-wide">
                Ruang Aman Pikiranmu
              </span>
            </div>
          </Link>

          {/* Desktop Navigation (Mega Menus) */}
          <nav className="hidden md:flex items-center gap-1.5" ref={navContainerRef}>
            {NAV_SECTIONS.map((section) => (
              <div key={section.id} className="relative">
                <button
                  type="button"
                  onClick={() => toggleDropdown(section.id)}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-150 ${
                    activeDropdown === section.id
                      ? 'text-humind-primary-700 bg-humind-primary-50 border border-humind-primary-100 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70 border border-transparent'
                  }`}
                  aria-expanded={activeDropdown === section.id}
                >
                  <span>{section.label}</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === section.id
                        ? 'rotate-180 text-humind-primary-600'
                        : 'text-slate-400'
                    }`}
                  />
                </button>

                {activeDropdown === section.id && (
                  <MegaDropdown
                    section={section}
                    onItemClick={handleItemClick}
                  />
                )}
              </div>
            ))}
          </nav>

          {/* Action CTAs Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/my-schedules">
              <Button
                variant="ghost"
                size="sm"
                className="text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 font-semibold"
              >
                Masuk
              </Button>
            </Link>
            <Link to="/psychologists">
              <Button
                variant="primary"
                size="sm"
                iconLeft={HeartHandshake}
                className="shadow-soft hover:shadow-soft-hover transition-all duration-150 active:scale-95"
              >
                Konseling Sekarang
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-200/80 bg-white/95 backdrop-blur-md px-4 pt-3 pb-6 space-y-2">
          {NAV_SECTIONS.map((section) => (
            <div key={section.id} className="border-b border-slate-100 pb-2">
              <button
                type="button"
                onClick={() => toggleMobileSection(section.id)}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-base font-bold text-slate-900 hover:bg-slate-50"
              >
                <span>{section.mobileLabel || section.label}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    mobileOpenSection === section.id
                      ? 'rotate-180 text-humind-primary-600'
                      : 'text-slate-400'
                  }`}
                />
              </button>

              {mobileOpenSection === section.id && (
                <div className="p-2 space-y-1.5 bg-slate-50/70 rounded-2xl my-1 border border-slate-100">
                  {section.items.map((item) => (
                    <NavItem
                      key={item.title}
                      item={item}
                      isMobile
                      onClick={(e) => handleItemClick(e, item)}
                    />
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Action CTAs Mobile */}
          <div className="pt-3 flex flex-col gap-2.5">
            <Link to="/my-schedules" onClick={() => setIsOpen(false)}>
              <Button
                variant="outline"
                size="md"
                className="w-full border-slate-300 text-slate-700 font-semibold"
              >
                Masuk Akun
              </Button>
            </Link>
            <Link to="/psychologists" onClick={() => setIsOpen(false)}>
              <Button
                variant="primary"
                size="md"
                iconLeft={HeartHandshake}
                className="w-full shadow-soft font-semibold"
              >
                Konseling Sekarang
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
