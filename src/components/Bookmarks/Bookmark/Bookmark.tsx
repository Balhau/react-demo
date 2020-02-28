import React, {Component} from 'react';
import classes from './Bookmark.module.css';

type BookmarkType = {
    title: string,
    body: string,
    author: string
};

const Bookmark = (props:BookmarkType) => {

    return (
        <div className={classes.Bookmark}>
            <p><strong>{props.title}</strong></p>
            <p>{props.body}</p>
            <span>{props.author}</span>
        </div>
    );
}

export default Bookmark;