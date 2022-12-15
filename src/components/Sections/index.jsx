import React, { useState } from 'react';
import {
    Container,
    ButtonLetf, 
    ButtonRight
    } from './style'

import {
    FaChevronLeft,
    FaChevronRight,
    } from 'react-icons/fa';

const Sections = () => {

    return(
        <Container>
            <h1>Name</h1>
            <ButtonLetf type="button">
                <FaChevronLeft />
            </ButtonLetf>
        </Container>
    )
}


export default Sections