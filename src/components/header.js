import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const menuBurger = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (menuBurger.current && !menuBurger.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    return (
        <header className="bg-transparent p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold text-violet-700">
                    Alexis MENEZ - Master Lead Developer Full Stack
                </h1>

                <nav className="hidden md:flex space-x-6">
                    <Link href="#about" className="hover:text-purple-500">À propos</Link>
                    <Link href="#projects" className="hover:text-purple-500">Projets</Link>
                    <Link href="#contact" className="hover:text-purple-500">Contact</Link>
                </nav>

                <div className="md:hidden relative" ref={menuBurger}>
                    <button onClick={() => setIsOpen(!isOpen)} className="btn btn-square btn-ghost">
                        {isOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" trokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5M3.75 12h16.5m-16.5 6.75h16.5"/>
                            </svg>
                        )}
                    </button>

                    {isOpen && (
                        <ul className="absolute top-16 right-4 bg-black shadow-lg rounded-lg w-48 p-4 space-y-2 z-50">
                            <li>
                                <Link href="#about" className="block py-2 hover:text-purple-500" onClick={() => setIsOpen(false)}>À propos</Link>
                            </li>
                            <li>
                                <Link href="#projects" className="block py-2 hover:text-purple-500" onClick={() => setIsOpen(false)}>Projets</Link>
                            </li>
                            <li>
                                <Link href="#contact" className="block py-2 hover:text-purple-500" onClick={() => setIsOpen(false)}>Contact</Link>
                            </li>
                        </ul>
                    )}
                </div>
            </div>
        </header>
    );
}
