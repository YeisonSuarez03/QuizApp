import React from 'react';
import { achievesArray } from './Achieves/achievesArray';
import { AchievesCard } from './Achieves/AchievesCard';


export const ProfileAchieves = () => {

    return (
        <div className="container profile__achieve-cards">
            <div className="row">
               {
                   achievesArray.map(achieve => (
                       <AchievesCard 
                       key={achieve.achieveId}
                       {...achieve}
                        />
                   ))
               }
            </div>
        </div>
    )
}
