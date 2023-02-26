import React,{useState, useEffect} from "react";
import { 
    Container, 
    HeaderItems, 
    ProfileItems} 
    from "./style.js";
import { FaSearch, FaBell, FaGift, FaCaretDown } from 'react-icons/fa';

import LogoNetflix from '../../assets/logo.png';

const Header = () => {
    const [isBlack, setIsBlack] = useState(false);

    useEffect(()=>{
        window.addEventListener('scroll', () => setIsBlack(window.scrollY > 10));

        return () => {
            window.removeEventListener('scroll', () =>
            setIsBlack(window.scrollY > 10))
        }
    },[])

    return (
        <Container isBlack={isBlack} >
            <HeaderItems>
                <img src={LogoNetflix} alt="Logo Netflix" />
                <ul>
                    <li style={{ fontWeight: 'bold' }}>Inicio</li>
                    <li>Sobre</li>
                    <li>Habilidades</li>
                    <li>Curiosidades</li>
                </ul>
            </HeaderItems>
            <ProfileItems>
                <FaSearch />
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
}


export default Header