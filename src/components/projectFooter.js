import Link from "next/link";

export default function Footer() {
return (
    <footer className="footer footer-center bg-black rounded p-10">
        <nav className="grid grid-flow-col gap-4">
            <Link href="/#about" className="link link-hover">À propos</Link>
            <Link href="/#projects" className="link link-hover">Projets</Link>
            <Link href="/#contact" className="link link-hover">Contact</Link>
        </nav>

        <nav>
            <div className="grid grid-flow-col gap-4">
                <a href="https://github.com/Alexmz1" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current overflow-visible">
                        <path d="M12 0a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2.3c-3.3.7-4-1.6-4-1.6a3.2 3.2 0 00-1.4-1.8c-1-.6.1-.6.1-.6a2.6 2.6 0 011.9 1.3 2.7 2.7 0 003.7 1 2.7 2.7 0 01.8-1.7c-2.7-.3-5.5-1.3-5.5-5.8a4.6 4.6 0 011.2-3.2 4.3 4.3 0 01.1-3.2s1-.3 3.2 1.2a11 11 0 015.8 0c2.2-1.5 3.2-1.2 3.2-1.2a4.3 4.3 0 01.1 3.2 4.6 4.6 0 011.2 3.2c0 4.5-2.8 5.5-5.5 5.8a3.1 3.1 0 01.9 2.4v3.6c0 .3.2.7.8.6A12 12 0 0012 0z" />
                    </svg>
                </a>
                <a href="https://www.linkedin.com/in/menez-alexis/" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current overflow-visible">
                        <path d="M19 0h-14a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5v-14a5 5 0 00-5-5zm-11 19h-3v-9h3zm-1.5-10.2a1.8 1.8 0 110-3.6 1.8 1.8 0 010 3.6zm12.5 10.2h-3v-5c0-1.2 0-2.7-1.6-2.7s-1.9 1.3-1.9 2.6v5.1h-3v-9h3v1.2h.1a3.2 3.2 0 012.9-1.6c3.2 0 3.8 2.1 3.8 4.9z" />
                    </svg>
                </a>
            </div>
        </nav>

        <aside>
            <p>© {new Date().getFullYear()} - Tous droits réservés | Alexis Menez</p>
        </aside>
    </footer>
);
}
