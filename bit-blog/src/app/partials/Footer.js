import React from 'react';

export const Footer = (props) =>{
    return(
        
        <footer className="page-footer #1565c0 blue darken-3">
            <div className="container">
            © {new Date().getFullYear()} Uros and Jovica Corp.
            </div>
        </footer>
    )
}