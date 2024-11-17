import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AuthProvider from '@/components/AuthProvider';
import { ToastContainer } from 'react-toastify';
import { GlobalProvider } from '@/context/GlobalContext';
import '@/assets/styles/globals.css';
import 'photoswipe/dist/photoswipe.css';

export const metadata = {
    title: 'The Deals Dynamo',
    keywords: 'clearance tags, product tags, furniture',
    description: 'List your clearance product and print tags'
}

const MainLayout = ({ children }) => {
    return ( 
    <AuthProvider>
        <GlobalProvider>
    <html>
        <body>
        <Navbar />
            <main>
                { children }
            </main>
            <Footer />
            <ToastContainer />
        </body>
    </html>
    </GlobalProvider>
    </AuthProvider> );
}
 
export default MainLayout;