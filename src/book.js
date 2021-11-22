import React, { useEffect,useState } from 'react'
import {get,update} from './BookAPI'

 function Book(props){
    // console.log(await get(props.id))
    const [book,setBook] = useState({})
    useEffect(()=>{
        props.book!=undefined?setBook(props.book):get(props.id).then(res=>{
             res.then(res1 => {
                setBook(res1)
            })
        })
    },[])
    return(
         <li key={book?.id}>
          <div className="book" key={book?.id+'b'}>
            <div className="book-top">
              <div
                className="book-cover"
                style={{
                  width: 128,
                  height: 193,
                  backgroundImage: `url(${book?.imageLinks?.smallThumbnail})`,
                }}></div>
              <div className="book-shelf-changer">
                <select value={book?.shelf||'none'} onChange={v=>{v.target?.value?.length>0&&update({id:book.id},v.target.value).then(()=>props.update())}}>
                  <option value="" >
                    Move to...
                  </option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>
            <div className="book-title">{book?.title}</div>
            <div className="book-authors">{book?.authors?.length > 0 && book?.authors.map(e=>e+' . ')}</div>
          </div>
        </li>
    )
}
export default Book