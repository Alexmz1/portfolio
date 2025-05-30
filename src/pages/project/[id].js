import { useRouter } from 'next/router';
import { ArrowLeft } from 'lucide-react';
import Footer from "@/components/projectFooter";

const devProjects = [
    { id: 1, type: "dev", title: "Portfolio", description: "Un portfolio individuel créé avec Next.js pour mettre en valeur mes compétences et réalisations. Ce projet propose des animations lisses, une navigation améliorée et une interface utilisateur contemporaine, assurant une expérience immersive pour les visiteurs. Son design minimaliste et épuré valorise les projets, les expériences de travail et les aptitudes techniques de façon précise et succincte.", 
        image: "/images/developmentProject/portfolio.jpg", github: "https://github.com/Alexmz1/portfolio" },
    { id: 2, type: "dev", title: "Fleur de la Seine", description: "Site vitrine développé en pour une fleuriste, mettant en avant des compositions florales pour des événements tels que des deuils. Le site est conçu pour être à la fois esthétique et fonctionnel, offrant une navigation fluide et une présentation claire des services proposés.",
        image: "/images/developmentProject/fleurDeLaSeine.png", url: "https://fleur-de-la-seine.fr/" },
    { id: 3, type: "dev", title: "Money Wise", description: "Application de gestion financière personnelle conçue en PHP Symfony. Elle offre aux utilisateurs la possibilité de surveiller leurs revenus et leurs dépenses, et de gérer leur budget. Avec une interface intuitive et des fonctionnalités de filtrage, elle permet une gestion complète de vos finances.", 
        image: "/images/developmentProject/moneyWise.png", github: "https://github.com/Alexmz1/bank-account" },
    { id: 4, type: "dev", title: "Sneakers Card", description: "Carte avec un effet 3D interactive inspirée de l’univers des sneakers, développée en Swift. Ce projet met en avant des éléments de design réalistes, et une navigation intuitive pour plonger les utilisateurs dans un univers visuellement attrayant.", 
        image: "/images/developmentProject/sneakersCard.jpg", github: "https://github.com/Alexmz1/sneakers-world" },
];

const designProjects = [
    { id: 1, type: "design", title: "Vinyle Utopia", description: "Création d’un visuel représentant le vinyle de l'album Utopia de Travis Scott. Chaque élément visuel reflète la créativité et l'univers musical de l'artiste, tout en mettant en avant des détails fins et travaillés.", 
        image: "/images/designProject/vinyleTravis.jpg" },
    { id: 2, type: "design", title: "Poster Hamza", description: "Création d'une affiche mettant en avant le rappeur Hamza, en employant un style de scrapbooking. Ce design fusionne des découpes de journaux, des montages et des teintes différents pour illustrer le style distinctif du rappeur. ", 
        image: "/images/designProject/hamzaPoster.png" },
    { id: 3, type: "design", title: "Poster Pharrell Williams", description: "Poster de Pharrell Williams, en tant que directeur artistique de Louis Vuitton, façon New York Times. Le design met en avant la vision avant-gardiste de Pharrell dans l'univers de la mode et de la musique, tout en soulignant son impact sur la culture actuelle.", 
        image: "/images/designProject/pharrellPoster.jpg" },
];

function getProjectByIdAndType(id, type) {
    if (type === "dev") {
        return devProjects.find((project) => project.id === parseInt(id));
    }
    if (type === "design") {
        return designProjects.find((project) => project.id === parseInt(id));
    }
}

export default function ProjectDetail() {
    const router = useRouter();
    const { id, type } = router.query;

    if (!id || !type) {
        return (
            <div className="flex items-center justify-center h-screen bg-gradient-to-b from-black to-purple-950 text-white">
                <div className="flex flex-col items-center space-y-4">
                    <span className="loading loading-spinner loading-lg text-white"></span>
                    <p className="text-white text-lg font-semibold">Chargement en cours...</p>
                </div>
            </div>
        );
    }

    const project = getProjectByIdAndType(id, type);

    if (!project) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black to-purple-950 text-white">
                <h1 className="text-3xl font-bold mb-6">Projet non trouvé</h1>
                <button onClick={() => router.push('/')} className="px-6 py-3 bg-transparent border border-gray-300 text-white font-semibold rounded-lg shadow-md transition duration-300 hover:bg-white hover:text-black">
                    Retour à l'accueil
                </button>
            </div>
        );
    }

    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-black to-purple-950 text-white">
            <div className="flex-grow p-8">
                <button className="flex items-center space-x-2 text-white text-lg mb-6 hover:text-gray-300" onClick={() => router.push('/#projects')}>
                    <ArrowLeft size={24} />
                    <span>Retourner aux projets</span>
                </button>

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mt-8 mb-12 text-center" style={{ fontFamily: 'Rosie Brown, serif' }}>
                    {project.title}
                </h1>

                <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
                    <div className="flex-shrink-0 w-full lg:w-1/2 mb-6 lg:mb-0">
                        <img src={project.image} alt={project.title} className="w-full h-auto max-h-96 object-contain rounded-lg"/>
                    </div>

                    <div className="lg:w-1/2 pl-0 lg:pl- self-start">
                        <p className="text-lg mb-8">{project.description}</p>
                        {project.type === "dev" && (
                            <div className="flex flex-col sm:flex-row gap-4">
                                {project.url && (
                                    <a
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-md transition duration-300 hover:bg-purple-800"
                                    >
                                        Voir le site
                                    </a>
                                )}
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-6 py-3 bg-transparent border border-gray-300 text-white font-semibold rounded-lg shadow-md transition duration-300 hover:bg-white hover:text-black"
                                    >
                                        Voir sur GitHub
                                    </a>
                                )}
                            </div>
                        )}
                    </div>
                </div>

                <p className="text-center text-sm mt-8">Tous droits réservés © Alexis MENEZ</p>
            </div>
            <Footer />
        </div>
    );
}
