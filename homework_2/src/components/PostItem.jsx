const PostItem = (props) => {
    console.log(props)
    return (
        <div>
            <h2>{props.number} {props.post.title}</h2>
        </div>
    )
}
export default PostItem