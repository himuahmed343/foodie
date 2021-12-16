import React from 'react'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Featured from './Featured';

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            { children }
            <Footer />
        </>
    )
}

export default Layout
