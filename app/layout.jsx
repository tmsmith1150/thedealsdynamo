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
                { children }
            </main>
        </body>
    </html> );
}
 
export default MainLayout;