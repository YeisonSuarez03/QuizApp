import React, { useEffect, useMemo, useState } from 'react'
import { useRef } from 'react';
import { SideContext } from './context/SideContext';
import { getRandomRGB } from './helpers/getRandomRGB';
import { AppRouter } from './routers/AppRouter'
import './styles/styles.scss';

export const QuizApp = () => {

    const background = useRef(useMemo(() => getRandomRGB(), []));

    const [nocturnal, setNocturnal] = useState(localStorage.getItem("theme") === "dark" ? true : false);
    


    return (
        <SideContext.Provider value={{nocturnal, setNocturnal, background: background.current}}>
            <AppRouter />
        </SideContext.Provider>
    )
}
