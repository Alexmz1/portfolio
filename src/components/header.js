import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [currentText, setCurrentText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentRole, setCurrentRole] = useState(0);
    const menuBurger = useRef(null);

    const roles = [
        "Développeur Full Stack",
        "Graphic Designer",
        "Administrateur Linux",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            const currentRoleText = roles[currentRole];

            if (currentIndex < currentRoleText.length) {
                setCurrentText((prevText) => prevText + currentRoleText[currentIndex]);
                setCurrentIndex((prevIndex) => prevIndex + 1);
            } else {
                setTimeout(() => {
                    setCurrentIndex(0);
                    setCurrentRole((prevRole) => (prevRole + 1) % roles.length);
                    setCurrentText("");
                }, 1500);
                clearInterval(interval);
            }
        }, 100);

        return () => clearInterval(interval);
    }, [currentIndex, currentRole]);

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
        <header className="bg-transparent p-4">
            <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
                
            <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold">
                <span className="block md:inline text-white">Alexis MENEZ</span>
                <span className="hidden md:inline text-white"> -</span>
                <span className="block md:inline text-white md:ml-2">{currentText}</span>
            </h1>

                <nav className="hidden md:flex space-x-6">
                    <Link href="#about" className="text-white hover:text-purple-500">À propos</Link>
                    <Link href="#projects" className="text-white hover:text-purple-500">Projets</Link>
                    <Link href="#contact" className="text-white hover:text-purple-500">Contact</Link>
                </nav>

                {/* Menu Burger Responsive */}
                <div className="md:hidden relative" ref={menuBurger}>
                    <button onClick={() => setIsOpen(!isOpen)} className="btn btn-square btn-ghost">
                        {isOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5M3.75 12h16.5m-16.5 6.75h16.5"/>
                            </svg>
                        )}
                    </button>

                    {isOpen && (
                        <ul className="absolute top-16 right-4 bg-black border border-white shadow-lg rounded-lg w-48 p-4 space-y-2 z-50">
                            <li>
                                <Link href="#about" className="block py-2 text-white hover:text-purple-500" onClick={() => setIsOpen(false)}>À propos</Link>
                            </li>
                            <li>
                                <Link href="#projects" className="block py-2 text-white hover:text-purple-500" onClick={() => setIsOpen(false)}>Projets</Link>
                            </li>
                            <li>
                                <Link href="#contact" className="block py-2 text-white hover:text-purple-500" onClick={() => setIsOpen(false)}>Contact</Link>
                            </li>
                        </ul>
                    )}
                </div>
            </div>
        </header>
    );
}
