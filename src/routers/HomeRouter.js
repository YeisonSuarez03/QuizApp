import React, { useContext, useEffect } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { CategoryScreen } from '../components/Screens/main/categoriesComponents/CategoryScreen'
import { GameCategoriesScreen } from '../components/Screens/main/categoriesComponents/GameCategoriesScreen'
import { Header } from '../components/Screens/main/Header'
import { ProfileScreen } from '../components/Screens/main/profile/ProfileScreen'
import { TopsScreen } from '../components/Screens/main/topsComponents/TopsScreen'
import { SideContext } from '../context/SideContext'

export const HomeRouter = () => {

    const {nocturnal} = useContext(SideContext);

    useEffect(() => {
        document.getElementsByTagName("html")[0]
                .setAttribute("data-theme", localStorage.getItem("theme"));
       
    }, [nocturnal])
    
    return (
        <div className="d-flex homeMain animate__animated animate__fadeIn">
            <Switch>
            <div className="main">
                <Header />
                <Route exact path="/home/categories" component={GameCategoriesScreen} />
                <Route exact path="/home/category" component={CategoryScreen} />
                <Route exact path="/home/tops" component={TopsScreen} />
                <Route exact path="/home/profile" component={ProfileScreen} />

                <Redirect to="/home/categories" />

            </div>
            </Switch>  
        </div>
    )
}
