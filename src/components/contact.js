import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const form = useRef();
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setSuccess(false);
        setError(false);

        emailjs.sendForm(
            "service_gtud36g",
            "template_9w04rlg",
            form.current,
            "jqE6hgRe6v0n5q3l-"
        )
        .then(() => {
            setSuccess(true);
            form.current.reset();
        })
        .catch(() => {
            setError(true);
        });
    };

    return (
        <section id="contact" className="py-12 mb-10 bg-purple dark:bg-gray-dark">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div style={{ fontFamily: 'Rosie Brown, serif' }}>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-12 text-center">
                        Contact
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* LEFT - LinkedIn */}
                    <div className="text-white flex flex-col items-center">
                        <p className="mb-6 text-center">
                            Vous pouvez me contacter via LinkedIn en cliquant sur le lien ci-dessous.
                        </p>
                        <a
                            href="https://www.linkedin.com/in/menez-alexis/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-transparent border border-gray-300 text-white font-semibold rounded-lg shadow-md transition duration-300 hover:bg-white hover:text-black"
                        >
                            Voir mon profil LinkedIn
                        </a>
                    </div>

                    {/* RIGHT - Form */}
                    <div className="w-full">
                        <form ref={form} onSubmit={sendEmail} className="space-y-4 p-6 relative">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex flex-col">
                                    <label className="text-white font-medium mb-1">Prénom</label>
                                    <input
                                        type="text"
                                        name="firstname"
                                        required
                                        className="w-full p-3 rounded-lg border border-white bg-white/10 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
                                        placeholder="Votre prénom"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-white font-medium mb-1">Nom</label>
                                    <input
                                        type="text"
                                        name="lastname"
                                        required
                                        className="w-full p-3 rounded-lg border border-white bg-white/10 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
                                        placeholder="Votre nom"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col">
                                <label className="text-white font-medium mb-1">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    className="w-full p-3 rounded-lg border border-white bg-white/10 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
                                    placeholder="Votre email"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label className="text-white font-medium mb-1">Message</label>
                                <textarea
                                    name="message"
                                    rows="4"
                                    required
                                    className="w-full p-3 rounded-lg border border-white bg-white/10 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
                                    placeholder="Votre message"
                                />
                            </div>

                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    className="px-6 py-3 bg-transparent border border-gray-300 text-white font-semibold rounded-lg shadow-md transition duration-300 hover:bg-white hover:text-black"
                                >
                                    Envoyer
                                </button>
                            </div>

                            {success && (
                                <p className="text-green-300 text-center mt-4">Message envoyé avec succès !</p>
                            )}
                            {error && (
                                <p className="text-red-300 text-center mt-4">Une erreur est survenue. Réessayez.</p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
