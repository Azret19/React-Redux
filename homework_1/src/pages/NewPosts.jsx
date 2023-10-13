import {useState} from "react";
import PostItem from "../components/PostItem";

const NewPosts = () => {
    const [posts, setPosts] = useState([
        {id: 1, title: "Add your post"}
    ])

    const [title, setTitle] = useState('')

    const addNewPost = (e) => {
        e.preventDefault()
      const newPost = {
          id: Date.now(),
          title
      }
        setPosts([...posts, newPost])
        setTitle("")
    }

    return (
        <>
            <form>
                <input
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    type="text"
                    placeholder="Post title..."
                />
                <button onClick={addNewPost}>Add post</button>
            </form>
            <h1>Post list</h1>
            {posts.map((post,index) =>
                <PostItem number={index + 1} key={post.id} post={post}/>
            )}
        </>
    )
}
export default NewPosts

