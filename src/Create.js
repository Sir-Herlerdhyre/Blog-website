import { useState } from "react";
import {useNavigate} from  "react-router-dom"

const Create = () => {

    const[title, setTitle]= useState('')
    const[body, setBody]= useState('')
    const [author, setAuthor] = useState('')
    const [pending, setPending] = useState(false)
    const navigate = useNavigate();

    const handleSubmit  = (e)   =>{
        e.preventDefault()
        const blog = {title, body, author}
        setPending(true);
        fetch( 'https://685d344c769de2bf085fbdb4.mockapi.io/blogs/blogs' ,
           // 'http://localhost:8000/blogs' , 
            {
                method:'POST',
                headers: {"content-Type": "application/json"},
                body: JSON.stringify(blog)
            }
        ) .then(()=>{
           // console.log('new blog')
            setPending(false);
            navigate('/');
        })
    }

    return ( 
        <div className="create">
            <h2> Add a New Book</h2>
            <form onSubmit={handleSubmit} >
                <label> Book title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                 <label> About the book:</label>
                <textarea required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}>

                </textarea>

                 <label> Author:</label>
                 <input
                    type="text"
                    required
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />

                    {!pending && <button>Add Book</button>}
                     {pending && <button disabled>Adding...</button>}
            </form>
        </div>
     );
} 
 
export default Create;
