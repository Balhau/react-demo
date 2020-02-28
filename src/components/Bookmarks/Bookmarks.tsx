import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Bookmark from './Bookmark'
import classes from './Bookmarks.module.css';



const Bookmarks = (props:any)=>{

    const postsUrl = "https://jsonplaceholder.typicode.com/posts";
    const [posts,setPosts]=useState([])
    
    //Fetch server data
    useEffect(() => {
        axios.get(postsUrl)
            .then(response=>{
                const posts=response.data
                .map(
                    (post:any) => (
                        <Bookmark
                            key={post.id}
                            title={post.title}
                            body={post.body}
                            author={"Lord Varyes"}
                        />
                    )
                )
                setPosts(posts);
            })
      }, [])

    return (
        <div className={classes.Bookmarks}>
            {posts}
        </div>
    )
};

export default Bookmarks;