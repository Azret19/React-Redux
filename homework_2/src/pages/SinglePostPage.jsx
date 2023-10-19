import { useEffect, useState } from "react";
import {useParams, useNavigate, useSearchParams, Link, Route} from "react-router-dom";
import { API } from "../api";
import { routes } from "../App";
import DeletePostPage from "./DeletePostPage";

const SinglePostPage = () => {
    const [post, setPost] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();
    // const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const getPost = async () => {
            const response = await API.get(
                `/posts/${id}`
            );
            setPost(response.data);
        };
        getPost();
    }, [id]);


    return (
        <div>
            {/*<button onClick={()=>navigate(-1)}>Назад</button>*/}
            <h4>{post.title}</h4>
            <p>{post.body}</p>
            <Link style={{backgroundColor: "pink"}} to={`/posts/${id}/delete`}>DELETE</Link>
        </div>
    );
};
export default SinglePostPage;