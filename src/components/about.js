import Link from "next/link";
import { Code, Server, Brush } from "lucide-react";
import { FaHtml5, FaCss3, FaPhp, FaJava, FaPython, FaAngular, FaSymfony, FaGithub, FaWindows, FaApple, FaLinux } from 'react-icons/fa';
import { SiTailwindcss, SiPhpmyadmin, SiGnubash, SiIntellijidea, SiAdobephotoshop, SiNextdotjs } from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";

export default function About() {
    return (
        <section id="about" className="relative py-16 overflow-hidden mb-8 mt-8">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center md:flex-row md:space-x-12">
                    <div className="avatar mb-8 md:mb-0">
                        <div className="w-40 h-40 md:w-48 md:h-48 rounded-full border-2 border-white shadow-lg">
                            <img src="/images/profilePicture/profilePicutre2.jpeg" alt="Photo de profil" />
                        </div>
                    </div>

                    <div className="text-center md:text-left">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
                            Salut ! Je suis Alexis, étudiant dans le numérique basé à Paris
                        </h2>
                        <div className="flex flex-col md:flex-row justify-center md:justify-start items-center space-y-4 md:space-y-0 md:space-x-6 mt-6 text-lg md:text-xl font-semibold text-gray-300">
                            <span className="flex items-center space-x-2">
                                <Code className="w-6 h-6 text-purple-400" />
                                <span>Développeur Web</span>
                            </span>
                            <span className="flex items-center space-x-2">
                                <Server className="w-6 h-6 text-blue-400" />
                                <span>Administrateur Linux</span>
                            </span>
                            <span className="flex items-center space-x-2">
                                <Brush className="w-6 h-6 text-pink-400" />
                                <span>Designer</span>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="card bg-gradient-to-r from-purple-900 to-black shadow-xl p-6">
                        <h3 className="text-xl md:text-2xl text-white">Langages et technologies</h3>
                        <div className="mt-4 flex flex-wrap gap-5 text-white">
                            <div className="flex flex-col items-center">
                                <FaHtml5 className="w-8 h-8 text-orange-500" />
                                <span className="text-sm mt-2">HTML5</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <FaCss3 className="w-8 h-8 text-blue-500" />
                                <span className="text-sm mt-2">CSS3</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <FaPhp className="w-8 h-8 text-purple-300" />
                                <span className="text-sm mt-2">PHP</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <FaJava className="w-8 h-8 text-orange-600" />
                                <span className="text-sm mt-2">Java</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <FaPython className="w-8 h-8 text-yellow-300" />
                                <span className="text-sm mt-2">Python</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <SiGnubash className="w-8 h-8" />
                                <span className="text-sm mt-2">Bash</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <FaAngular className="w-8 h-8 text-red-600" />
                                <span className="text-sm mt-2">Angular</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <FaSymfony className="w-8 h-8" />
                                <span className="text-sm mt-2">Symfony</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <SiTailwindcss className="w-8 h-8 text-sky-400" />
                                <span className="text-sm mt-2">Tailwind CSS</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <SiNextdotjs className="w-8 h-8" />
                                <span className="text-sm mt-2">Next.js</span>
                            </div>
                        </div>
                    </div>

                    <div className="card bg-gradient-to-r from-purple-900 to-black shadow-xl p-6">
                        <h3 className="text-xl md:text-2xl text-white">Logiciels et Applications</h3>
                        <div className="mt-4 flex flex-wrap gap-6 text-white">
                            <div className="flex flex-col items-center">
                                <BiLogoVisualStudio className="w-8 h-8 text-blue-400" />
                                <span className="text-sm mt-2">VS Code</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <FaGithub className="w-8 h-8 text-black" />
                                <span className="text-sm mt-2">GitHub</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <SiPhpmyadmin className="w-8 h-8 text-orange-300" />
                                <span className="text-sm mt-2">PhpMyAdmin</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <SiIntellijidea className="w-8 h-8" />
                                <span className="text-sm mt-2">IntelliJ IDEA</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <SiAdobephotoshop className="w-8 h-8 text-blue-500" />
                                <span className="text-sm mt-2">Photoshop</span>
                            </div>
                        </div>
                    </div>

                    <div className="card bg-gradient-to-r from-purple-900 to-black shadow-xl p-6">
                        <h3 className="text-xl md:text-2xl text-white">Systèmes d'exploitation</h3>
                        <div className="mt-4 flex flex-wrap gap-8 text-white">
                            <div className="flex flex-col items-center">
                                <FaWindows className="w-8 h-8 text-blue-500" />
                                <span className="text-sm mt-2">Windows</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <FaApple className="w-8 h-8" />
                                <span className="text-sm mt-2">macOS</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <FaLinux className="w-8 h-8 text-yellow-500" />
                                <span className="text-sm mt-2">Linux</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-16">
                    <div style={{ fontFamily: 'Rosie Brown, serif' }}>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-12 text-center">Mon parcours</h2>
                    </div>
                    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical text-white">
                        <li>
                            <div className="timeline-middle">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="timeline-start mb-10 md:text-end">
                                <time className="font-mono italic">2020 - 2022</time>
                                <div className="text-lg font-black">BTS Système Numérique Informatique et Résaux</div>
                                Stage de 2 mois chez AXA France dans l'équipe de suivi de parcours informatique<br />
                                Découverte de l'exploitation d'un parc applicatif (Serveurs, Base de données...)<br />
                                Développement et évolution de scripts XML<br />
                                Montage vidéo pour des présentations<br />
                                Monitoring applicatif et analyse de problèmes
                            </div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-middle">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="timeline-end md:mb-10">
                                <time className="font-mono italic">2022</time>
                                <div className="text-lg font-black">EPSI</div>
                                Python, Tests unitaires, RGPD
                            </div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-middle">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="timeline-start mb-10 md:text-end">
                                <time className="font-mono italic">2023</time>
                                <div className="text-lg font-black">Formation Développeur d'Applications Informatique - Philiance formation</div>
                                Java avec le framework Angular, Versionning (GIT), POO et architecture logicielle, PhpMyAdmin, SQL-MySQL (opérations CRUD), Hibernate, REST API (Springboot), HTML5, CSS3, Bootstrap 
                            </div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-middle">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="timeline-end md:mb-10">
                                <time className="font-mono italic">2023 - 2024</time>
                                <div className="text-lg font-black">Bachelor Chef de Projet Digitaux option Dev. WEB - EEMI</div>
                                Alternance chez Cegedim.Cloud au poste d'Administrateur Linux<br />
                                Administration : Bases de données, système et stockage, backup<br />
                                Scripting/Environnement : Bash, Shell-powershell, Python, Linux<br />
                                Gestion des requêtes et incident et rédaction de documentation<br />
                            </div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-middle">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="timeline-start mb-10 md:text-end">
                            <time className="font-mono italic">2024 - aujourd'hui</time>
                            <div className="text-lg font-black">Mastère Lead Développeur Full Stack - EEMI</div>
                            Alternance chez Cegedim.Cloud au poste d'Administrateur Linux
                            </div>
                        </li>
                        </ul>
                </div>
            </div>
        </section>
    );
}
