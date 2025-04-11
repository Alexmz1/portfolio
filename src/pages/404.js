import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Custom404() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black to-purple-950 text-white px-4 relative overflow-hidden">

            {/* Glitch Title */}
            <motion.h1
                initial={{ opacity: 0, y: -40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="text-7xl sm:text-9xl font-extrabold text-center text-white glitch z-10 relative"
            >
                <span aria-hidden="true" className="glitch-layer glitch-layer-1">404</span>
                <span aria-hidden="true" className="glitch-layer glitch-layer-2">404</span>
                404
            </motion.h1>

            {/* Subtitle */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-lg sm:text-2xl text-center text-white/80 mb-8 z-10"
            >
                Oups… cette page n'existe pas.
            </motion.p>

            {/* Button */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="z-10"
            >
                <Link
                    href="/"
                    className="bg-purple-600 text-white text-sm font-medium px-6 py-3 rounded-md hover:bg-purple-800 transition-colors"
                >
                    Retour à l'accueil
                </Link>
            </motion.div>

            <style jsx>{`
                .glitch {
                    position: relative;
                    display: inline-block;
                    color: white;
                }

                .glitch-layer {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    color: white;
                }

                .glitch-layer-1 {
                    animation: glitch 2s infinite linear alternate-reverse;
                    text-shadow: -2px 0 red;
                }

                .glitch-layer-2 {
                    animation: glitch2 1.5s infinite linear alternate;
                    text-shadow: 2px 0 blue;
                }

                @keyframes glitch {
                    0% {
                        clip-path: inset(10% 0 85% 0);
                        transform: translate(-2px, -2px);
                    }
                    20% {
                        clip-path: inset(50% 0 30% 0);
                        transform: translate(2px, 2px);
                    }
                    40% {
                        clip-path: inset(0 0 60% 0);
                        transform: translate(-2px, 0);
                    }
                    60% {
                        clip-path: inset(40% 0 20% 0);
                        transform: translate(0, 2px);
                    }
                    80% {
                        clip-path: inset(10% 0 80% 0);
                        transform: translate(2px, -2px);
                    }
                    100% {
                        clip-path: inset(0 0 100% 0);
                        transform: translate(0);
                    }
                }

                @keyframes glitch2 {
                    0% {
                        clip-path: inset(20% 0 60% 0);
                        transform: translate(1px, 1px);
                    }
                    25% {
                        clip-path: inset(80% 0 10% 0);
                        transform: translate(-1px, -2px);
                    }
                    50% {
                        clip-path: inset(30% 0 40% 0);
                        transform: translate(2px, 1px);
                    }
                    75% {
                        clip-path: inset(10% 0 80% 0);
                        transform: translate(-2px, 2px);
                    }
                    100% {
                        clip-path: inset(0 0 100% 0);
                        transform: translate(0);
                    }
                }
            `}</style>
        </div>
    )
}
