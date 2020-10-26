import React from 'react'
import NavBar from '../NavBar/NavBar';
import './Layout.css';


export default function Layout() {
    return (
        <>
            <header className="header">
                <NavBar />
            </header>
            <main className="content">{children}</main>
        </>
    )
}
