import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className='layout'>
            <Header />
            <main
                className='layout__content'
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100vh',
                    padding: '20px',
                    backgroundColor: '#2a3b50',
                    color: '#fff',
                    marginTop: '-17px',
                }}
            >
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
