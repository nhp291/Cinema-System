import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Layout_User.scss';


interface LayoutProps {
    children: React.ReactNode;
}

const CinemaLayout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className='layout'>
            <Header />
            <main className='layout__content mt-4'>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default CinemaLayout;
