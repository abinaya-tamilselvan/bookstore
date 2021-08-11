import React from 'react'
import './index.css'

const FirstBook ={

    title: "Attitude Is Everything",
    author: " Jeff Keller",
    img: "https://m.media-amazon.com/images/I/710jnzKlDTL._AC_UY218_.jpg"
}
const SecondBook ={

    title: "The Alchemist",
    author: "Paulo Coelho",
    img: "https://images-na.ssl-images-amazon.com/images/I/410llGwMZGL._SX328_BO1,204,203,200_.jpg"

}

const ThirdBook ={
    
    title: "Who Will Cry When You Die?",
    author: "Robin Sharma",
    img: "https://images-na.ssl-images-amazon.com/images/I/41wKll7ITyL._SX362_BO1,204,203,200_.jpg"
}

function Bookstore() {
    return (
        <section className ="booklist">

         <Book img={FirstBook.img} title={FirstBook.title} author={FirstBook.author} />  
         {/* we have passed in the object through the component using props */}
         <Book img={SecondBook.img} title={SecondBook.title} author={SecondBook.author}></Book>
         <Book img={ThirdBook.img} title = {ThirdBook.title}  author = {ThirdBook.author}></Book>
    
        </section>
           
    )
}
const Book = ({img,title,author}) => {

    // const {img, title, author} = props  // another way to use props

    return (<article className = 'book'>

        <img src ={img}></img>
        <h1>{title}</h1>
        <h3>{author}</h3>
    </article>
   );
}
export default Bookstore