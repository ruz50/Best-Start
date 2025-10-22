"use client";
import React, { useEffect, useMemo, useState, useCallback, useRef } from "react";
import "./Header.css";

const MOBILE_BP = 960;

const Header: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  // Detect mobile with matchMedia and close menu when switching to desktop
  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BP}px)`);
    const handler = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
      if (!e.matches) setIsMenuOpen(false);
    };
    // initial
    setIsMobile(mql.matches);
    if (!mql.matches) setIsMenuOpen(false);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  // Body scroll lock when menu is open
  useEffect(() => {
    const prev = document.body.style.overflow;
    if (isMenuOpen) document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [isMenuOpen]);

  // Close on Esc
  useEffect(() => {
    if (!isMenuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsMenuOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isMenuOpen]);

  // Auto-focus close button when opened
  useEffect(() => {
    if (isMenuOpen) closeBtnRef.current?.focus();
  }, [isMenuOpen]);

  const toggleMenu = useCallback(() => setIsMenuOpen(v => !v), []);
  const closeMenu  = useCallback(() => setIsMenuOpen(false), []);

  const navLinks = useMemo(() => (
    <ul className="header-links" onClick={(e) => {
      // close when a link is clicked (mobile)
      if (isMobile && (e.target as HTMLElement).closest("a")) closeMenu();
    }}>
      <li><a href="#abt-us">Մեր մասին</a></li>
      <li><a href="/questions">Հարցեր</a></li>
      <li><a href="/questions">Թեստեր</a></li>
      <li><a href="#contact">Կապ մեզ հետ</a></li>
    </ul>
  ), [isMobile, closeMenu]);

  return (
    <header className="header-main">
      <a href="/" className="logo-wrap" aria-label="Best Start • Home">
        <img src="/logo.png" alt="best start logo" />
      </a>

      {/* Desktop nav */}
      {!isMobile && (
        <nav className="header-menu" aria-label="Main">
          {navLinks}
        </nav>
      )}

      {/* Mobile burger */}
      {isMobile && (
        <button
          type="button"
          className="hamburger-btn"
          aria-label="Open menu"
          aria-controls="mobile-menu"
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          <img src="/burger-menu.png " alt="" className={`${isMenuOpen && "hidden-brg-menu"}`} />
          <span className="sr-only">Menu</span>
        </button>
      )}

      {/* Mobile off-canvas */}
      {isMobile && (
        <div
          id="mobile-menu"
          className={`mm-overlay ${isMenuOpen ? "open" : ""}`}
          aria-hidden={!isMenuOpen}
          onClick={closeMenu}
        >
          <aside
            className={`mm-panel ${isMenuOpen ? "open" : ""}`}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mm-head">
              <button
                ref={closeBtnRef}
                className="mm-close"
                type="button"
                aria-label="Close menu"
                onClick={closeMenu}
              >
                <img src="/close.png" alt="" />
              </button>
            </div>
            <nav className="mm-nav" aria-label="Mobile">
              {navLinks}
            </nav>
          </aside>
        </div>
      )}
    </header>
  );
};

export default Header;
