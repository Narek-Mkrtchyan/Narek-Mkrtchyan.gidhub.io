import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''});

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post, id: Date.now()
        }
       create(newPost);
        // setPosts([...posts, {...post, id: Date.now()}]);
        setPost({title: '', body: ''});
    }

    return (
        <form>
            {/*{upravlaemi component}*/}
            <MyInput
                value={post.title}
                onChange={e => setPost({...post, title: e.target.value})}
                type="text"
                placeholder="name posts"/>
            <MyInput
                value={post.body}
                onChange={e => setPost({...post, body: e.target.value})}
                type="text"
                placeholder="description posts"/>
            <MyButton onClick={addNewPost}> add posts</MyButton>
        </form>
    );
};

export default PostForm;