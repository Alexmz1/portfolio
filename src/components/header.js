import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-transparent">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="text-xl font-bold">
                    Alexis MENEZ - Master Lead Developer Full Stack
                </h1>

                <nav>
                    <ul className="flex space-x-6">
                        <li>
                            <Link href="#about">
                                À propos
                            </Link>
                        </li>
                        <li>
                            <Link href="#projects">
                                Projets
                            </Link>
                        </li>
                        <li>
                            <Link href="#contact">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
