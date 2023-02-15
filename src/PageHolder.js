import React, { useState } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Series from './pages/Series';

export default function PageHolder() {
    const [currentPage, setCurrentPage] = useState('Home');
    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />;
        };
        if (currentPage === 'Series') {
            return <Series />;
        };
        
    };
    const handlePageChange = (page) => setCurrentPage(page);
    return (
        <div>
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}

        </div>
    );
}