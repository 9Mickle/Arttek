import React, {useMemo, useState} from 'react';
import PostList from "./components/PostList";
import './styles/App.css';
import './components/UI/button/MyButton.module.css'
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/modal/MyModal";
import MyButton from "./components/UI/button/MyButton";

function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: "JS", body: "аа"},
        {id: 2, title: "JS", body: "бб"},
        {id: 3, title: "JS", body: "ввв"},
    ])

    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)

    function createPost(newPost) {
        setPosts([...posts, newPost])
        setModal(false)
    }

    function removePost(post) {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div className="App">
            <MyButton style={{marginTop: "30px"}} onClick={() => setModal(true)}>
                Создать пост
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>
            <hr style={{margin: "15px 0"}}/>
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />

            {/*Условие отрисовки постов*/}
            <PostList remove={removePost} posts={sortedAndSearchedPosts}/>
        </div>
    );
}

export default App;
