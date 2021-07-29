import React from 'react';


import { CategoryTypes } from './CategoryTypes';
import { categoryTypes } from '../../../maincontent/category types/categoryTypes';



export const GameCategoriesScreen = () => {

    

    return (
        <div className="categories__container">
            {
                categoryTypes.map(category => (
                    <CategoryTypes {...category} />
                ))

            }
            
            
            
        </div>
    )
}
