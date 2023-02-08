import React from 'react'
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.Item}>
        <img src='https://w-dog.ru/wallpapers/1/93/296486574365124/avatar-kino-nejtiri.jpg'/>
            {props.message}
        <div>
            <span>like</span> {props.like}
        </div>
    </div>)
}

export default Post;