
import React from 'react';
import { useEffect , useState } from 'react';
import axios from 'axios'
function SearchBooks(pageNumber) {

    const [loading, setLoading] = useState(true)
    const [error, setError] =useState(false)
    const [books, setBooks] =useState([])
    const[hasMore, setHasMore] =useState(false)
        useEffect(() => {
            setLoading(true)
            setError(false)

            axios({
                method: 'GET',
                url: 'https://jsonplaceholder.typicode.com/photos',
                params: {_page: pageNumber,_limit: 10},
                
             }).then( res => {
                 
                 setBooks(prevBooks => {
                     return [...new Set([...prevBooks, ...res.data])]
                     setHasMore(res.data.doc.length > 0 )
                     console.log(res.data)
                 })

             }).catch( e => {
                 if(axios.isCancel(e)) return
                 setError(true)
             })
             
        },[pageNumber])
    return {loading,error,books,hasMore}
    return null
    
}
export default SearchBooks
