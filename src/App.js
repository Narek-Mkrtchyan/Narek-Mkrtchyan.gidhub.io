import React, {useRef, useState} from "react";
import Counter from "./components/Counter";
import './styles/App.css';
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript 1', body: 'javascript - language'},
        {id: 2, title: 'Javascript 2', body: 'javascript - language'},
        {id: 3, title: 'Javascript 3', body: 'javascript - language'},
    ])
    const [post, setPost] = useState({title: '', body: ''});





    const addNewPost = (e) => {
       e.preventDefault();

console.log("asd")

       setPosts([...posts, {...post, id: Date.now()}]);
        setPost({title: '', body: ''});
    }

    return (
        <div className="App">
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
            <PostList posts={posts} title='Posts 1'/>
        </div>

    );
}

export default App;
