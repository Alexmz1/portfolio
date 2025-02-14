import { useRouter } from 'next/router';
import { ArrowLeft } from 'lucide-react';
import Footer from "@/components/projectFooter";

const devProjects = [
    { id: 1, type: "dev", title: "Portfolio", description: "Portfolio développé en Next.js", image: "/images/developmentProject/portfolio.jpg", link: "https://github.com/Alexmz1/portfolio" },
    { id: 2, type: "dev", title: "Money Wise", description: "Application de gestion de dépenses et recettes développée en PHP Symfony", image: "/images/developmentProject/moneyWise.png", link: "https://github.com/Alexmz1/bank-account" },
    { id: 3, type: "dev", title: "Sneakers Card", description: "Carte 3D liée à l'univers de la sneakers développée en Swift", image: "/images/developmentProject/sneakersCard.jpg", link: "https://github.com/Alexmz1/sneakers-world" },
];

const designProjects = [
    { id: 1, type: "design", title: "Vinyle Utopia", description: "Représentation du vinyle de l'album Utopia de Travis Scott", image: "/images/designProject/vinyleTravis.jpg" },
    { id: 2, type: "design", title: "Poster Hamza", description: "Poster du rappeur Hamza en version scrapbooking", image: "/images/designProject/hamzaPoster.png" },
    { id: 3, type: "design", title: "Poster Pharrell Williams", description: "Poster de Pharrell Williams en tant que directeur artistique Louis Vuitton façon New York Times", image: "/images/designProject/pharrellPoster.jpg" },
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
        return <p>Chargement...</p>;
    }

    const project = getProjectByIdAndType(id, type);

    if (!project) {
        return <p>Projet non trouvé</p>;
    }

    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-black to-purple-950 text-white">
            <div className="flex-grow p-8">
                <button className="flex items-center space-x-2 text-white text-lg mb-6 hover:text-gray-300" onClick={() => router.push('/')}>
                    <ArrowLeft size={24} />
                    <span>Retour à l'accueil</span>
                </button>

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mt-8 mb-12 text-center" style={{ fontFamily: 'Rosie Brown, serif' }}>
                    {project.title}
                </h1>


                <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-between">
                    <div className="flex-shrink-0 w-full lg:w-1/2 mb-6 lg:mb-0">
                    <img src={project.image} alt={project.title} className="w-full h-auto max-h-96 object-contain rounded-lg"/>
                </div>

                <div className="lg:w-1/2 pl-0 lg:pl-8">
                    <p className="text-lg mb-8">{project.description}</p>

                    {project.type === "dev" && project.link && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-transparent border border-gray-300 text-white font-semibold rounded-lg shadow-md transition duration-300 hover:bg-white hover:text-black">
                            Voir sur GitHub
                        </a>
                    )}
                </div>
            </div>
        </div>
        <Footer />
    </div>
    );
}
