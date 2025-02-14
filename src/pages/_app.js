import Head from 'next/head';
import '../styles/globals.css'; // Si tu utilises des styles

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Mon portfolio - Alexis</title> {/* Définit le titre global */}
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;