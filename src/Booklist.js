import { Link } from "react-router-dom";

const Booklist = ({book,title}) => {
    // const book=props.book;
    // const title= props.title;

    return ( 
         <div className="book-list">
            <h2>{title} </h2>
           {book.map(about => (
            <div className="book-preview" key = {about.id}>
               <Link to = {`blogs/${about.id}`}>
            <h2> {about.title}</h2>
            <p> A book written by {about.author}</p>
           </Link>
            </div>
           ))}
           
        </div>
     );
}
 
export default Booklist ;