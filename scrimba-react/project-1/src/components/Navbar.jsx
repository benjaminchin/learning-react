import React from 'react'
import logo from '../assets/react.svg'
import './Navbar.css'

export default function Navbar() {
    return (
        <nav>
            <img src = { logo }/>
            <h3>React Facts</h3>
            <h4>React Course - Project 1</h4>
        </nav>
    )
}