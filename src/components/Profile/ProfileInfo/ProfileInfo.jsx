import React from 'react'
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div className={s.DescriptionBlock}>
            <div>
                <img src='https://wallup.net/wp-content/uploads/2016/01/206968-nature-landscape-mountain.jpg'/>
            </div>
        <div>
            ava + description
        </div>
    </div>)
}

export default ProfileInfo;