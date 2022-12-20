import React, { useState, useMemo, useCallback } from 'react';
import {
    Container,
    ButtonLetf, 
    ButtonRight,
    SkillWrapper, 
    Skill,
    SkillCard,
    SkillControll
    } from './style'

import {
    FaChevronLeft,
    FaChevronRight,
    FaPlay,
    FaThumbsDown,
    FaThumbsUp,
    FaPlus,
    } from 'react-icons/fa';

const Sections = () => {

    const foo = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

    const [marginContent, setMarginContent] = useState(0);

    const MAX_WIDTH_CONTENT = useMemo(() => foo.length * 220, [foo]);

    const handleScroll = useCallback(
        direction => {
          setMarginContent(stateMargin => {
            const newValue = stateMargin + (direction === 'left' ? -400 : 400);
    
            const isError =
              MAX_WIDTH_CONTENT + newValue < window.innerWidth || newValue === 400;
    
            return isError ? stateMargin : newValue;
          });
        },
        [MAX_WIDTH_CONTENT],
      );

    return(
        <Container>
            <h1>Name</h1>
            <ButtonLetf type="button" onClick={() => handleScroll('right')}>
                <FaChevronLeft />
            </ButtonLetf>

            <SkillWrapper style={{ marginLeft: marginContent, width: MAX_WIDTH_CONTENT}}>
                {foo.map((f)=>(
                    <Skill>
                        <img
                            src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1uS9tYSYXU5jshLx2WlnOLZrMgD.jpg`}
                            alt={`Skill`}/>

                        <SkillCard>
                            <strong>Http</strong>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>    
                        
                            <SkillControll>
                                <button type="button">
                                    <FaPlay /> Assistir
                                </button>
                                <span>
                                    <FaPlus />
                                </span>
                                <span>
                                    <FaThumbsUp />
                                </span>
                                <span>
                                    <FaThumbsDown />
                                </span>
                            </SkillControll>
                        </SkillCard>
                    </Skill>
                ))}   

            </SkillWrapper>

        <ButtonRight type="button" onClick={() => handleScroll('left')}>
            <FaChevronRight />
        </ButtonRight>

        </Container>
    )
}


export default Sections