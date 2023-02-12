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
                            Ei, eu sou o Victor eu gosto de construir coisas {":)"}<br/>
                            Atualmente eu faço isso como trabalho e também como hobby.<br/>
                            Eu estou sempre aprendendo algo novo pois adoro o que faço.
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