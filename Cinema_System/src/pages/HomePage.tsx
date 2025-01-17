import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
    return (
        <div className='home-page'>
            <Header />
            <main className='home-page__content'>
                <h1>Welcome to the Home Page</h1>
                <p>This is the home page of the app</p>
            </main>
            <footer />
        </div>
    );
};

export default HomePage;