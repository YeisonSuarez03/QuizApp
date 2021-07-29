import React, { useContext, useEffect, useRef } from 'react';
import { Button } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

import { useLocation } from 'react-router-dom';
import { getLocation } from '../../../helpers/getLocation';

import mainIconBg from '../../../assets/lordicon/main-icon-unscreen.gif';
import { SideContext } from '../../../context/SideContext';

import { Sidebar } from './Sidebar';
import { useState } from 'react';
import { getPlacementByWidth } from '../../../helpers/getPlacementByWidth';
import { showCloseIcon } from '../../../helpers/showCloseIcon';



export const Header = () => {

    const menu = useRef();
    const close = useRef();

    const windowWidth = window.innerWidth;
    const placement = getPlacementByWidth(windowWidth, 'left', 'bottom');

    const {nocturnal, setNocturnal} = useContext(SideContext);

    const location = useLocation();
    const finalLocation = getLocation(location.pathname);

    const [show, setShow] = useState(false);

    const toggleThemeChange = () => {
        if (nocturnal === false) {
          localStorage.setItem("theme", "dark");
          setNocturnal(true);
        } else {
          localStorage.setItem("theme", "light");
          setNocturnal(false);
        }
      };

      const toggleDrawer = () => {
          setShow(s => !s);
          if (windowWidth <= 768) {
            (!show) ?  showCloseIcon('block', 'none', close, menu) : showCloseIcon('none', 'block', close, menu) 
          }
      }

      useEffect(() => {
        close.current.setAttribute("style", "display: none;");
      }, []);


    return (
        <div className="main__header">
            <div className="main__burger-button pointer">
            <Button onClick={toggleDrawer}>
                <MenuIcon innerRef={menu}  />
                <CloseIcon innerRef={close} />
            </Button>
                <Drawer anchor={placement} open={show} variant={`${(placement === 'left') ? 'temporary' : 'persistent'}`} onClose={toggleDrawer} >
                    <Sidebar setShow={setShow} />
                </Drawer>
            </div>
            <div className="main__header-page">
                <img src={mainIconBg} />
                <h1 className="main__header-title m-2">{finalLocation}</h1>
            </div>
            <div className="main__profile-level">
                <div className="main__profile-container">
                    <div className="main__profile-level-num">
                        <span>10</span>
                    </div>
                    <div className="main__profile-progressbar">
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-text">
                                    <span>200</span><span>/</span><span>1000</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className={`main__nocturnal-container pointer ${nocturnal ? 'dark-activated' : ''}`} onClick={toggleThemeChange}>
                <div className="main__nocturnal">
                    <div className="toggleTheme">

                    </div>
                    <div className="first-radius">
                        <i className="far fa-sun"></i>
                    </div>
                    <div className="second-radius">
                        <i className="fas fa-moon"></i>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
