import React from 'react';
import {useMemo} from 'react'
import LinearProgress from '@material-ui/core/LinearProgress';
import {getPorcentage} from '../../../../../helpers/getPorcentage';
import {AchieveLocked} from './AchieveLocked'
import LockOpenIcon from '@material-ui/icons/LockOpen';
import { Avatar } from '@material-ui/core';

export const AchievesCard = ({
    achieveId, achieveTitle,
    achieveContent, achieveIcon,
    achieveFinal
}) => {

    //Hacer funcion para obtener progreso de la base de datos, extraer en const
    const progAct = 1;

    const progFinal = achieveFinal;
    const progress = useMemo(() => getPorcentage(progAct, progFinal), [progAct, progFinal]);

    //funcion para extraer de la base de datos si esta completado o no
    const completed = true; 

    const lockedClass = (completed === false) ? 'locked-card' : '';

    return (
            <div className="col-12 col-lg-6 col-xl-4 my-4">
                <div class={`card animate__animated animate__fadeIn ${lockedClass}`}>
                    {
                         (completed === false) && (<AchieveLocked />)
                    }
                    <div className="card-body">
                        <div className="card-icon">
                            <img src={achieveIcon} />
                        </div>
                    <div className="card-text-container">
                        <div>
                            <h5 className="card-title mb-3">{achieveTitle}</h5>
                            <p className="card-text">{achieveContent}</p>
                        </div>
                        <div className="progress-container">
                            <h3>{progAct} / {achieveFinal}</h3>
                            <LinearProgress variant="determinate" value={progress} color="secondary" />
                            </div>
                        </div>
                            {
                                (completed === true) && (
                                    <div className="unlocked-card">
                                        <Avatar>
                                            <LockOpenIcon />
                                        </Avatar>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
    )
}
