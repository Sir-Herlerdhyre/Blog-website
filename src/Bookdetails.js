import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BookDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const handleClick = () => {
        //fetch('http://localhost:8000/blogs/' + blog.id, { method: 'DELETE' })
        fetch('https://685d344c769de2bf085fbdb4.mockapi.io/blogs/blogs' + blog.id, { method: 'DELETE' })
        
            .then(() => {
                navigate('/')
            })
    }
    const { data: blog, loading, error } = useFetch('https://685d344c769de2bf085fbdb4.mockapi.io/blogs/blogs' + id);
   
    //http://localhost:8000/blogs/
    return (
        <div className="book-details">
            {loading && <div>Loading....</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title} </h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
    );
}

export default BookDetails;