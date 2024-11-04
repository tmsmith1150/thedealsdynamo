import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AuthProvider from '@/components/AuthProvider';
import '@/assets/styles/globals.css';

export const metadata = {
    title: 'The Deals Dynamo',
    keywords: 'clearance tags, product tags, furniture',
    description: 'List your clearance product and print tags'
}

const MainLayout = ({ children }) => {
    return ( 
    <AuthProvider>
    <html>
        <body>
            <main>
                <Navbar />
                { children }
            </main>
            <Footer />
        </body>
    </html>
    </AuthProvider> );
}
 
export default MainLayout;