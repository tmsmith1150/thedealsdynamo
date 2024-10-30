import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '@/assets/styles/globals.css';

export const metadata = {
    title: 'The Deals Dynamo',
    keywords: 'clearance tags, product tags, furniture',
    description: 'List your clearance product and print tags'
}

const MainLayout = ({ children }) => {
    return ( <html>
        <body>
            <main>
                <Navbar />
                { children }
            </main>
            <Footer />
        </body>
    </html> );
}
 
export default MainLayout;