import React from "react";
import { Container, HeaderItems, ProfileItems} from "./style.js";
import { FaSearch, FaBell, FaGift, FaCaretDown } from 'react-icons/fa';

const Header = () => (
    <Container isBlack={false} >
        <HeaderItems>
            <ul>
            <li style={{ fontWeight: 'bold' }}>Inicio</li>
            <li>Series</li>
            <li>Filmes</li>
            <li>Mais Recentes</li>
            <li>Minha Lista</li>
            </ul>
        </HeaderItems>
        <ProfileItems>
            <FaSearch />
            <FaGift />
            <FaBell />
            <button type="button">
                <img
                    src="https://occ-0-761-185.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABR8DzEDMx6x6rgkSexM2EYh44oQISc8fyEFr6WnraR9_HyniHFDRbXRrElpLThfL9OYFOueAItK7VIEb2xH7AqA.png?r=c71"
                    alt="imagem profile usuario"
                />
                <FaCaretDown />
            </button>
        </ProfileItems>
        
    </Container>
)


export default Header