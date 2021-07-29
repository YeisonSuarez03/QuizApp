import React, { useContext, useEffect, useMemo, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';

import profilePic from '../../../assets/2021-01-11.jpg';
import gifConfetti from '../../../assets/lordicon/confetti_icon_white.gif';
import appIcon from '../../../assets/lordicon/1121-iota-internet-of-things-outline.png';
import userIcon from '../../../assets/lordicon/21-avatar-outline.gif';
import { OverlayTrigger, Popover } from 'react-bootstrap';
import bgPic from '../../../assets/backgrounds/thumb2-4k-geometric-figures-art-abstract-texture-geometry.jpg';
import { getPlacementByWidth } from '../../../helpers/getPlacementByWidth';
import { evaluateUrlName } from '../../../helpers/evaluateUrlName';
import { getFirstLetterName } from '../../../helpers/getFirstLetterName';
import { Avatar } from '@material-ui/core';
import { getRandomRGB } from '../../../helpers/getRandomRGB';
import { SideContext } from '../../../context/SideContext';

export const Sidebar = ({setShow}) => {

    const isPicSet = useRef();
    const firstLetter = useRef();
    const {background} = useContext(SideContext);

    const windowWidth = window.innerWidth;

    const placement = getPlacementByWidth(windowWidth, 'right', 'left');

    const handlerLinkChange = () => {
        setShow(s => !s);
    }

    //hook extractor url del state global

    //mock url y name

    const url = '';
    const name = 'Yeison';
    const handlerPicChange = () => {
        isPicSet.current = evaluateUrlName(url);
        firstLetter.current = getFirstLetterName(name);
    }

    useMemo(() => handlerPicChange(), [url]);

    //mockear Avatar, debemos obtener de la db la url de la img, si no la hay, muestra primera letra username
    //Traer de la db con useEffect el url y guardarlo en una var, luego evaluar si esta vacia o no



   

    const popoverProfile = (
        <Popover id="popover-basic" style={{zIndex: '100'}}>
          <Popover.Header className="sidebar__popover" as="h3"><img src={gifConfetti} />Hola, {name}!</Popover.Header>
          <Popover.Body className="sidebar__popover-body">
            <Link to="/home/profile/:1234" className="sidebar__popover-links" onClick={handlerLinkChange}>
                <img src={userIcon} />
                <span>Profile</span>
            </Link>
            <Link to="/auth" className="sidebar__popover-links" onClick={handlerLinkChange}>
                <i class="fas fa-power-off"></i>
                <span>Logout</span>
            </Link>
            
          </Popover.Body>
        </Popover>
      );

      const TriggerPopoverName = () => (
        <OverlayTrigger trigger={["click", "focus"]} placement={placement} overlay={popoverProfile}>
                <Avatar className="pointer" style={{background: background}}>{firstLetter.current}</Avatar>
        </OverlayTrigger>
      );

      const TriggerPopoverImg = () => (
        <OverlayTrigger trigger={["click", "focus"]} placement={placement} overlay={popoverProfile}>
                <Avatar className="pointer" alt={name} src={url} />
        </OverlayTrigger>
      );

      

    return (
        <div className="sidebar">
        <div className="sidebar__container" style={{background: `url(${bgPic})`}}>
            <div className="sidebar__overlay">
                <div className="sidebar__items">
                    <div>
                        <div className="sidebar__appName">
                            <img src={appIcon} />
                            <span>QuizApp</span>
                        </div>
                        <div className="sidebar__profile">
                        {
                            (isPicSet.current)
                            ? (<TriggerPopoverImg />)
                            : (<TriggerPopoverName />)
                        }
                        
                            
                        
                            
                        </div>
                    </div>
                    <div className="sidebar__navigation-links mt-5">
                        <NavLink 
                            to="/home/categories" 
                            activeClassName="sidebar__activelink" 
                            className="sidebar__links"
                            onClick={handlerLinkChange}
                            >
                        <div>
                            <i class="fas fa-dice-d6 mx-4"></i><span>Categories</span> 
                        </div>
                        </NavLink>
                        <NavLink 
                            to="/home/tops" 
                            activeClassName="sidebar__activelink" 
                            className="sidebar__links" 
                            onClick={handlerLinkChange}
                            >
                        <div>
                        <i class="fas fa-trophy mx-4"></i><span>tops</span> 
                        </div>
                        </NavLink>
                        <NavLink 
                            to="/home/profile" 
                            activeClassName="sidebar__activelink" 
                            className="sidebar__links"
                            onClick={handlerLinkChange}
                            >
                        <div>
                            <i class="fas fa-user mx-4"></i><span>Profile</span>
                        </div>
                        </NavLink>
                        
                    </div>

                </div>
            </div>
        </div>
        </div>
    )
}
