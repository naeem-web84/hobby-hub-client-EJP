import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../components/Footer';
import Loader from '../components/Loader';
import TitleUpdater from '../components/TitleUpdater';
import ScrollToTop from '../components/ScrollTop';

const MainLayout = () => {
    const navigation = useNavigation();

    return (
        <div className="bg-white text-gray-800 min-h-screen">
            <ScrollToTop/>
            <TitleUpdater />
            <Navbar />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 min-h-[calc(100vh-300px)]">
                {navigation.state === 'loading' ? <Loader /> : <Outlet />}
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;
