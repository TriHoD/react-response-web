import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import '../ContentSection';
import ContentSection from '../ContentSection';
import Footer from '../Footer';

function HomePage () {
    return (
        <>
            <ContentSection />
            <Cards />
            <Footer />
        </>
    )
}

export default HomePage;
