import React from 'react';

const Copyright = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="text-red py-4 text-center w-full bottom-0 absolute">
        <p>&copy; {currentYear} KalBar Website. All rights reserved.</p>
        </div>
    );
};

export default Copyright;