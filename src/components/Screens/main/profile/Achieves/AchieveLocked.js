import React from 'react';
import LockIcon from '@material-ui/icons/Lock';
import { Avatar } from '@material-ui/core';


export const AchieveLocked = () => {
    return (
        <div className="profile__achieve-locked">
            <div>
                <Avatar>
                    <LockIcon />
                </Avatar>
            </div>
            
        </div>
    )
}
