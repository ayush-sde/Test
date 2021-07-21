import React,{useState ,useEffect ,useRef} from 'react'
import SearchBooks from './SearchBooks'
import Photo from './photo';
function Test() {
    const [pageNumber,setPageNumber] = useState(1);
   
   let {
        books,
        hasMore,
        loading,
        error } =SearchBooks(pageNumber)
    
        

    function loadMore()
    {
        const body = document.body;
        const html = document.documentElement;
        const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
        if((window.innerHeight + window.pageYOffset) >= (docHeight -1))
        {
            setPageNumber(pageNumber+1);
            console.log("loaded")
        }
       
 
    }
    
    useEffect(() => {
        window.addEventListener('scroll' , loadMore ) 
        
    })
    
    return (
        <div >
            <ul class="list-group">
            <li class="list-group-item">
            {
                books.map ((book ,index) => {
                return <Photo key ={book.id} url={book.url} title={book.title} id={book.id} 
                albumid = {book.albumId}/>
               
            })}

            </li>
            
            </ul>
            
            <div>{loading && "loading ... "}</div>
            <div>{error && "error ... "}</div>
           
        </div>
    )
}
export default Test
