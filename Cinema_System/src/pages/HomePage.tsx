import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
    return (
        <div className='home-page'>
            <Header />
            <main className='home-page__content' style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                padding: '20px',
                backgroundColor: '#2a3b50',
                color: '#fff',
                marginTop: '-17px'
            }}>
                <h1>Welcome to the Home Page</h1>
                <p>This is the home page of the app</p>
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;