import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="wrapper">
                <p>&copy; <a href="https://www.thatmohamedomar.com" target="_blank">Mohamed Omar 2019.</a> <a href="https://twitter.com/thatmohamedomar" target="_blank"><i className="fab fa-twitter"></i></a><a href="https://www.linkedin.com/in/mohamedomar2/" target="_blank"><i className="fab fa-linkedin-in"></i></a></p>
                <p className="credit">Representative data is pulled in from <a href="https://represent.opennorth.ca/api/" target="_blank">Open North's Represent API. </a></p>
            </div>
        </footer>
    )
}

export default Footer;