import React, { useState, useMemo, useCallback } from 'react';
import {
    Container,
    ButtonLetf, 
    ButtonRight,
    SkillWrapper, 
    Skill,
    GrandietWrapper,
    SkillCard,
    SkillControll,
    Infos,
    relevances,
    } from './style'

import {
    FaChevronLeft,
    FaChevronRight,
    FaPlay,
    FaThumbsDown,
    FaThumbsUp,
    FaPlus,
    } from 'react-icons/fa';

const Sections = ({skills, title}) => {

    const [marginContent, setMarginContent] = useState(0);

    const MAX_WIDTH_CONTENT = useMemo(() => skills.length * 360, [skills]);

    const handleScroll = useCallback(
        direction => {
          setMarginContent(stateMargin => {
            let newValue = stateMargin + (direction === 'left' ? -200 : 200);
    
            let isError = MAX_WIDTH_CONTENT + newValue < window.innerWidth || newValue === 200;

            console.log(newValue)
    
            return isError ? stateMargin : newValue;
          });
        },
        [MAX_WIDTH_CONTENT],
      );

      const relevanceColor = (relevance) => 
        {
            if(relevance <= 25) 
                return relevances["low"]; 
            else if(relevance <= 50) 
                return relevances["mediumLow"]; 
            else if(relevance <= 75) 
                return relevances["medium"]; 
            else if(relevance <= 100) 
                return relevances["hight"]; 
        }
        return(
            <Container>
                <h1>{title}</h1>
                <ButtonLetf type="button" onClick={() => handleScroll('right') } >
                    <FaChevronLeft />
                </ButtonLetf>
    
                <SkillWrapper style={{ marginLeft: marginContent, width: MAX_WIDTH_CONTENT}}>
                    {skills.map( (skill,key) =>(
                        <Skill key={key}>
                            {/* <newSkillWrapper> <p>{skill.name}</p> </newSkillWrapper> */}
                            <GrandietWrapper className='background-card' type={skill.banner}> 
                                <p>{skill.name}</p>
                            </GrandietWrapper>
                            {/* <img
                                src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1uS9tYSYXU5jshLx2WlnOLZrMgD.jpg`}
                                alt={`Skill`}/> */}
                            <SkillCard className='skill-card'>
                                <Infos >
                                    <span style={{fontWeight: '700px', color: relevanceColor(skill.relevance)}}> {skill.relevance}% relevante</span>
                                </Infos>  
                                <Infos>
                                    <span style={{fontSize: '15px'}}> Experiência: {skill.experience} {skill.experience <= 1 ? 'ano': 'anos'} </span>
                                </Infos>  
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
                            {/* <SkillCard className='skill-card'>
                                <strong>{skill.name}</strong>
                                <Infos>
                                    <span style={{color: relevanceColor(skill.relevance)}}> {skill.relevance}% relevante</span>
                                    <span> Experiência: {skill.experience} {skill.experience <= 1 ? 'ano': 'anos'} </span>
                                 
                                </Infos>                            
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
                            </SkillCard> */}
                        </Skill>
                    ))}   
    
                </SkillWrapper>
    
            <ButtonRight type="button" onClick={() => handleScroll('left')} >
                <FaChevronRight />
            </ButtonRight>
    
            </Container>
        )

    

}


export default Sections