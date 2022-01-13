import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout({ children }) {
    return (

        <>
            <Navbar />
            <main className="flex-1 flex-col">{children}</main>
            <Footer />
        </>

    );
}

export default Layout;