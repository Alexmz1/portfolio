import React from "react";
import Link from "next/link";

const Project = () => {
    const devProjects = [
        { id: 1, type: "dev", title: "Portfolio", description: "Portfolio développé en Next.js", image: "/images/developmentProject/portfolio.jpg" },
        { id: 2, type: "dev", title: "Fleur de la seine", description: "Site vitrine de fleuriste pour des deuils", image: "/images/developmentProject/fleurDeLaSeine.png" },
        { id: 3, type: "dev", title: "Money Wise", description: "Application de gestion de dépenses et recettes développée en PHP Symfony", image: "/images/developmentProject/moneyWise.png" },
        { id: 4, type: "dev", title: "Sneakers Card", description: "Carte 3D liée à l'univers de la sneakers développée en Swift", image: "/images/developmentProject/sneakersCard.jpg" },
    ];

    const designProjects = [
        { id: 1, type: "design", title: "Vinyle Utopia", description: "Représentation du vinyle de l'album Utopia de Travis Scott", image: "/images/designProject/vinyleTravis.jpg" },
        { id: 2, type: "design", title: "Poster Hamza", description: "Poster du rappeur Hamza en version scrapbooking", image: "/images/designProject/hamzaPoster.png" },
        { id: 3, type: "design", title: "Poster Pharrell Williams", description: "Poster de Pharrell Williams en tant que directeur artistique Louis Vuitton façon New York Times", image: "/images/designProject/pharrellPoster.jpg" },
    ];

    return (
        <section id="projects" className="py-12 mb-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div style={{ fontFamily: 'Rosie Brown, serif' }}>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-10 text-center">
                        Mes projets
                    </h2>
                </div>

                {/* Projects - Development */}
                <div className="mb-12">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 text-center lg:text-left">
                        Projets développement web
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {devProjects.map((project) => (
                            <div key={project.id} className="w-full p-4 transform hover:scale-105 transition-transform duration-300">
                                <Link href={`/project/${project.id}?type=${project.type}`}>
                                    <img src={project.image} alt={project.title} className="w-full h-48 sm:h-60 object-cover rounded-lg mb-4" />
                                    <h3 className="text-lg sm:text-xl font-semibold text-white">{project.title}</h3>
                                    <p className="text-gray-300 text-sm sm:text-base">{project.description}</p>
                                    <span className="inline-block mt-4 px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-md hover:bg-purple-800 transition-colors">
                                        Voir en détail
                                    </span>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Projects - Design */}
                <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 text-center lg:text-left">
                        Projets design graphique
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {designProjects.map((project) => (
                            <div key={project.id} className="w-full p-4 transform hover:scale-105 transition-transform duration-300">
                                <Link href={`/project/${project.id}?type=${project.type}`}>
                                    <img src={project.image} alt={project.title} className="w-full h-48 sm:h-60 object-cover rounded-lg mb-4" />
                                    <h3 className="text-lg sm:text-xl font-semibold text-white">{project.title}</h3>
                                    <p className="text-gray-300 text-sm sm:text-base">{project.description}</p>
                                    <span className="inline-block mt-4 px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-md hover:bg-purple-800 transition-colors">
                                        Voir en détail
                                    </span>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Project;
