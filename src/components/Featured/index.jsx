import React from "react";
import { FaPlay, FaInfoCircle } from 'react-icons/fa';

import { 
        Container, 
        FeaturedBackground, 
        InsideFeatured, 
        InsindeInfo,
        Buttons, 
        ButtonPlay, 
        ButtonAbout } from "./style.js";


const Featured = () => {
    return(
        <Container>
            <FeaturedBackground>
                <div>
                    <InsideFeatured>
                        <h1>Desenvolvedor FullStack Pleno</h1>
                        <InsindeInfo>
                            <span> 100% relevante</span>
                            <span> 2019 </span>
                            <span> 3 Temporadas </span>
                        </InsindeInfo>
                        <p>
                            Sou viciado em café, apaixonado em resolver e estou sempre sempre em busca de novos desafios.<br/> 
                            Tenho experiência em várias linguagens e tecnologias, além de ser um excelente companheiro de equipe {':)'}
                        </p>
                        <span>
                            <strong>Gênero:</strong> Undefined
                        </span>

                        <Buttons>
                            <ButtonPlay >
                                <FaPlay /> Assistir
                            </ButtonPlay>
                            <ButtonAbout >
                                <FaInfoCircle /> Mais informações
                            </ButtonAbout>
                        </Buttons>
                    </InsideFeatured>
                </div>
            </FeaturedBackground>
        </Container>
    )
}

export default Featured