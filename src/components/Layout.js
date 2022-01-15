import React from 'react'
import '../index.css'
import '../styles/styles.scss'

export default function Layout({ children }) {
    return (
        <div className='layout'>
            {children}
            <footer>
                <div className="footer-content">
                    <hr />
                    <p>© Copyright {new Date().getFullYear()}</p>
                    <p>Made by <a href="https://rishimungia.github.io">Rishi Mungia</a></p>
                </div>
            </footer>
        </div>
    )
}
