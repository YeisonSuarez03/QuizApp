import React from 'react'
import { ProfilePicsSect } from './ProfilePicsSect'
import { ProfileTabs } from './ProfileTabs'

export const ProfileScreen = React.memo(() => {
    return (
        <div className="profile__main-container">
            <ProfilePicsSect />
            <ProfileTabs />
        </div>
    )
})
