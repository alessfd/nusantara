import React from 'react';

const Copyright = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="bg-lime-50 text-red py-4 text-center">
        <p>&copy; {currentYear} KalBar Website. All rights reserved.</p>
        </div>
    );
};

export default Copyright;