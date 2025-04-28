import Head from 'next/head';
import '../styles/globals.css'; // Si tu utilises des styles

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Mon portfolio - Alexis</title>
                <meta property="og:title" content="Mon Portfolio - Alexis" />
                <meta property="og:description" content="Découvrez mes projets en développement web et design graphique." />
                <meta property="og:image" content="/images/profilePicture/profilePicutre2.jpeg" />
                <meta property="og:url" content="https://portfolio-alexis-menez.vercel.app" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;