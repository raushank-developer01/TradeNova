import React from 'react';

import Hero from './Hero';

import Navbar from '../Navbar';
import Team from './Team';

import Footer from '../Footer';

function AboutPage() {
    return ( 
        <>
            <Navbar />
            <Hero />
            <Team />
            <Footer />
        </>
     );
}

export default AboutPage;