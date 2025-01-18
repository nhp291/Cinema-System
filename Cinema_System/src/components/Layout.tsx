import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/Layout_User.scss';


interface LayoutProps {
    children: React.ReactNode;
}

const CinemaLayout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className='layout'>
            <Header />
            <main className='layout__content'>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default CinemaLayout;
