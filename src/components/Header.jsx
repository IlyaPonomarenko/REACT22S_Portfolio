import React from "react";
import Container from 'react-bootstrap/Container';
import "../styles/Header.css"

const Header = () => {
  return (
    <div className='hero-banner'>
        <div className="content">
            <Container>
                <p>Hello there</p>
            </Container>
        </div>
    </div>
  );
};

export default Header;
