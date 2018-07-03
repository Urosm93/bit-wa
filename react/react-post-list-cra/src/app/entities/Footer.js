import React from 'react';

const Footer = (props) =>
    (
        <footer className="page-footer">
            <div className="footer-copyright">
                <div className="container">
                    © {new Date().getFullYear()} Copyright Uros Miletic
                </div>
            </div>
        </footer>
    )


export { Footer };

