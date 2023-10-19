import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {API} from "../api";
import {routes} from "../App";

const DeletePostPage = () => {
    const [post, setPost] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const getPost = async () => {
            const response = await API.delete(
                `/posts/${id}`
            );
            setPost(response.data);
        };
        getPost();
    }, [id]);

    return (
        <div>
            <h3>Вы действительно хотите удалить пост?</h3>
            <button onClick={()=> navigate(routes.posts)} style={{backgroundColor: "red", margin: "20px", width: "80px",height: "30px"}}>Да</button>
            <button onClick={()=> navigate(-1)} style={{backgroundColor: "green", margin: "20px", width: "80px",height: "30px"}}>Нет</button>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
        </div>
    )
}

export default DeletePostPage