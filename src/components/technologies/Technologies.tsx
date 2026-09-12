import React, { use } from 'react';
import type { ItechType } from '../../types/TechType';
 interface technologyProps{
    technologyPromise: Promise<ItechType[]>
 }
const Technologies = ({technologyPromise}: technologyProps) => {
    console.log(technologyPromise);
    const technologies= use(technologyPromise)
    console.log(technologies);
    return (
        <div>
            
        </div>
    );
};

export default Technologies;