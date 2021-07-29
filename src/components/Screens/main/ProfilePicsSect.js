import { Avatar, Fab } from '@material-ui/core';
import React, { useContext, useEffect, useMemo, useRef } from 'react';
import bgPic from '../../../assets/backgrounds/thumb2-4k-geometric-figures-art-abstract-texture-geometry.jpg';
import { SideContext } from '../../../context/SideContext';
import { evaluateUrlName } from '../../../helpers/evaluateUrlName';
import { getFirstLetterName } from '../../../helpers/getFirstLetterName';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import EditIcon from '@material-ui/icons/Edit';
import { getPlacementByWidth } from '../../../helpers/getPlacementByWidth';


export const ProfilePicsSect = () => {

    const isPicSet = useRef();
    const firstLetter = useRef();
    const {background} = useContext(SideContext);

    const sizeButton = getPlacementByWidth(window.innerWidth, 'large', 'small');

    //extraer url y nombre de user
    const url = '';
    const name = 'Yeison';
    const handlerPicChange = () => {
        isPicSet.current = evaluateUrlName(url);
        firstLetter.current = getFirstLetterName(name);
    }

        
    useMemo(() => handlerPicChange(), [url]);

    //mockear Avatar, debemos obtener de la db la url de la img, si no la hay, muestra primera letra username
    //Traer de la db con useEffect el url y guardarlo en una var, luego evaluar si esta vacia o no

    
    

    return (
        <div className="profile__bg-img" style={{backgroundImage: `url(${bgPic})`}}>
            <Fab aria-label="edit picture" size={sizeButton} color="secondary">
                        <CameraAltIcon />
            </Fab>
            <div className="profile__bg-overlay">
                <div className="profile__pic-container">
                    <div className="profile__pic-fab">
                    {
                        (isPicSet.curent)
                        ? (<Avatar className="pointer" alt={name} src={url} />)
                        : (<Avatar className="pointer" style={{background: background}}>{firstLetter.current}</Avatar>)
                    }
                    <Fab aria-label="edit picture" size="small">
                        <CameraAltIcon />
                    </Fab>
                    </div>
                    <div className="profile__username-container mt-3">
                        <h3>{name}</h3>
                        <Fab aria-label="edit name" size="small" color="primary">
                            <EditIcon />
                        </Fab>
                    </div>
                    

                
                </div>
            </div>
        </div>
    )
}
