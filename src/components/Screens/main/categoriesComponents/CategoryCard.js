import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { SideContext } from '../../../../context/SideContext';

export const CategoryCard = ({
    categoryId, 
    mainColor,
    mainImage,
    icon,
    title,
    textContent    
}) => {

    const {nocturnal} = useContext(SideContext);

    const boxShadow = `3px 2px 20px ${mainColor}65`;

    const progressBar = {
        width: '20%',
        background: mainColor,
    }

    const progressTextColor = {
        color: mainColor,
    }

    const shadow = (nocturnal) ? boxShadow : '4px 10px 10px #55555570';

    return (
        <div class="card animate__animated animate__fadeIn" style={{boxShadow: shadow}}>
        <div className="card-main-img">
            <div className="card-img-overlay" style={{background: mainColor}}></div>
            <img src={mainImage} className="card-img-top" alt="" />
        </div>
        <div className="card-body">
            <div className="card-icon">
                <img src={icon} />
            </div>
            <div className="card-text-container">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{textContent}</p>
            </div>
            <div className="progress-container mx-3 mt-3">
                <p className="mb-1" style={progressTextColor}>Progress:</p>
                <div className="progress">
                    <div className="progress-bar" role="progressbar" style={progressBar} aria-valuenow={progressBar.width} aria-valuemin="0" aria-valuemax="100">
                        {progressBar.width}
                    </div>
                </div>
            </div>
            

        </div>
        <div className="categories__hovercard" style={{background: mainColor}}>
            <Link to={`/home/category/${categoryId}`} style={{width: '100%', height: '100%'}}>
                <i class="far fa-play-circle"></i>
            </Link>
        </div>
    </div>
    )
}
