import './Index.css';
import Navbar from './Navbar';
import Homebar from './Homebar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from './Create';
import BookDetails from './Bookdetails';
import NotFound from './Error404';

function App() {
  

  return(
          <BrowserRouter>

    <div className='App'>
      <Navbar/>
      
      <div className='content'>
        <Routes>
          <Route path ="/"element = {<Homebar/>}/>
          <Route path ="/create"element = {<Create/>}/>
         <Route path ="/blogs/:id" element = {<BookDetails/>}/>
         <Route path = "*" element= {<NotFound/>}  />
         
         




      

        </Routes>
        
      </div>

    </div>
          </BrowserRouter>

  );
}

export default App;


// npx json-server --watch Data/db.json --port 8000
