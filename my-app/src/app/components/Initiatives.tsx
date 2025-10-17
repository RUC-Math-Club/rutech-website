import React from 'react';

function Initiatives () {
    return (
        <section id="Initiatives">
        <div className=" m-2 sm:m-35 text-center">
            <h1>Initiatives</h1>
            <div>
                <h1
                className="
                    font-poppins
                    text-[4rem]
                    l:text-[8rem]
                    font-extrabold
                    text-red-600
                    uppercase
                    tracking-widest
                    select-none
                    m-0
                "
                >
                {/* Need Responsive Logo */}
                CEIP
                </h1>
                <p className="sm:text-lg lg:text-2xl">A student driven initiative to build an environment intelligence platform for air quality data in the camden community with near $10,000 in funding.</p>
            </div>
        </div>
        </section>       
    );
};

export default Initiatives;