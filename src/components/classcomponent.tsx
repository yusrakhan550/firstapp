import React, { Component } from "react";

interface Istate{
    title: string;
    password: string
}
interface IPROPS{
    class: string;
    post?: string;
}
export default class classcomponent extends Component<IPROPS,Istate> {
    constructor (props: IPROPS){
        super(props);
        this.state = {
            title:'MR',
            password:'OKAY'
        }
    }
    render() {
        const {title, password} = this.state
        return(
            <>
                <h1 className="bg-dark text-white text-center p-1">Class Component</h1>
                <div className="border px-4 bg-light mb-4">
                    <h3> Class: <b>{this.props.class}</b><br /></h3>
                    <h3> Class: <b>{this.props.post}</b><br /></h3>
                </div>
                <div className="bg-ligt card p-4">
                    <h1>Class Component Using STATE</h1>
                    <h3>Title: {title}</h3>
                    <h3>Password: {password}</h3>
                </div>
            </>
        )
    }
}