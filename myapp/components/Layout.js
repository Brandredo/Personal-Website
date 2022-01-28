import Footer from "./Footer";
import Navbar from "./Navbar";
import Head from 'next/head';

function Layout({ children, ...customMeta }) {

    const meta = {
        title: "Brandon Figueredo - Student, Aspiring SWE",
        description: "...",
        type: "website",
        ...customMeta
    };


    return (

        <>
            <Head>
                <title>{meta.title}</title>
                <meta content={meta.description} name="description" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@200;300;400;500&family=Roboto:wght@500;700&display=swap" rel="stylesheet" />
            </Head>

            <Navbar />
            <main>{children}</main>
            <Footer />
        </>

    );
}

export default Layout;