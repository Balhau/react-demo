import React, {Component} from 'react';

type PostProps = {
    title: string,
    body: string,
    footer: string
};

const initState = () => {
    const ini_state : Array<any> =[

    ];

    return {"data" : ini_state};
}

class Post extends Component<PostProps>{
    constructor(props:PostProps){
        super(props);
        this.setState(initState());
    }

    render(){
        return (
            <p>Cenas</p>
        )};
}