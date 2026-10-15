import React, { useState } from 'react';
import { NAVIGATION_LINKS } from '../constants';
import { RiMenuLine, RiCloseLine } from '@remixicon/react';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleLinkClick = (e, href) => {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
            const offset = -85;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY + offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <div>
            <nav className="fixed left-0 right-0 z-50 lg:top-4">
                {/* Desktop Menu */}
                <div className="mx-auto hidden max-w-6xl items-center justify-between py-4 px-6 rounded-full border border-white/30 backdrop-blur-lg lg:flex">
                    <div className="flex items-center gap-12">
                        <div className="mr-6">
                            <a href="#">
                                <span className="text-2xl font-semibold uppercase">Kavya Immanni</span>
                            </a>
                        </div>
                    </div>
                    <ul className="flex items-center gap-8">
                        {NAVIGATION_LINKS.map((item, index) => (
                            <li key={index}>
                                <a
                                    className="text-xl font-medium hover:text-stone-300"
                                    href={item.href}
                                    onClick={(e) => handleLinkClick(e, item.href)}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Mobile Menu */}
                <div className="py-3 px-6 backdrop-blur-md lg:hidden">
                    <div className="flex items-center justify-between">
                        <div>
                            <a href="#">
                                <span className="pl-2 text-lg font-semibold uppercase">Kavya Immanni</span>
                            </a>
                        </div>
                        <div className="flex items-center">
                            <button
                                className="focus:outline-none lg:hidden"
                                onClick={toggleMobileMenu}
                                aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
                            >
                                {isMobileMenuOpen ? (
                                    <RiCloseLine className="m-2 h-6 w-5" />
                                ) : (
                                    <RiMenuLine className="m-2 h-6 w-5" />
                                )}
                            </button>
                        </div>
                    </div>
                    {isMobileMenuOpen && (
                        <ul className="my-4 ml-4 flex flex-col gap-6 backdrop-blur-md">
                            {NAVIGATION_LINKS.map((item, index) => (
                                <li key={index}>
                                    <a
                                        href={item.href}
                                        className="block w-full text-lg font-medium"
                                        onClick={(e) => handleLinkClick(e, item.href)}
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
