import React from 'react'
import s from './MyPosts.module.css'
import Post from "./Posts/Post";
import post from "./Posts/Post";



const MyPosts = (props) => {

    let postElements = props.posts
        .map( p => <Post message={p.message} like={p.likeCount}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
    }

    return (
        <div>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea ref={newPostElement}></textarea>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
        </div>
        <div className={s.posts}>
            {postElements}
        </div>
    </div>)
}

export default MyPosts;