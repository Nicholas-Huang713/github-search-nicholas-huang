import React from 'react'
import NavBar from '../NavBar/NavBar';
import './Layout.css';


export default function Layout(props) {
    return (
        <>
            <header className="header">
                <NavBar />
            </header>
            <main className="content">{props.children}</main>
        </>
    )
}
