import React from "react";

const Contact = () => {
    return (
        <section id="contact" className="py-12 mb-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
                <div style={{ fontFamily: 'Rosie Brown, serif' }}>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-10">
                        Contact
                    </h2>
                </div>

                <p className="text-white mb-6">
                    Vous pouvez me contacter via LinkedIn en cliquant sur le lien ci-dessous.
                </p>
                
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    {/* 
                        <a href="/CV.pdf" download className="px-6 py-3 bg-transparent border border-gray-300 text-white font-semibold rounded-lg shadow-md transition duration-300 hover:bg-white hover:text-black">
                            Télécharger mon CV
                        </a>
                    */}

                    <a href="https://www.linkedin.com/in/menez-alexis/" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-transparent border border-gray-300 text-white font-semibold rounded-lg shadow-md transition duration-300 hover:bg-white hover:text-black">
                        Voir mon profil LinkedIn
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
