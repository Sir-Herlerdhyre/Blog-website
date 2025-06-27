import { useEffect, useState} from 'react';
import Booklist from './Booklist';
import useFetch from './useFetch';

const Home = () => {
    const { data: books, loading, error} = useFetch('https://685d344c769de2bf085fbdb4.mockapi.io/blogs/blogs')


    return (
        <div className="Home">
          {error&& <div>{error}</div>}
          {loading && <div>loading..</div>}
          { books && <Booklist book={books} title ="Books and Authors" />}
      
      </div>
      );
      
}

 
export default Home;



