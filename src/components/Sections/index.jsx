import React, { useState } from 'react';
import {
    Container,
    ButtonLetf, 
    ButtonRight,
    SkillWrapper, 
    Skill
    } from './style'

import {
    FaChevronLeft,
    FaChevronRight,
    } from 'react-icons/fa';

const Sections = () => {

    const foo = [0,0,0,0,0]

    return(
        <Container>
            <h1>Name</h1>
            <ButtonLetf type="button">
                <FaChevronLeft />
            </ButtonLetf>

            <SkillWrapper style={{ marginLeft: 0, width: 1100}}>
                {foo.map((f)=>(
                    <Skill>
                        <img
                            src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1uS9tYSYXU5jshLx2WlnOLZrMgD.jpg`}
                            alt={`Skill`}/>

                        
                        
                    </Skill>
                ))}
        
    

            </SkillWrapper>

        </Container>
    )
}


export default Sections