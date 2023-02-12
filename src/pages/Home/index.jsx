import React,{useEffect, useState} from 'react'
import Header from '../../components/Header'
import Featured from '../../components/Featured'
import Sections from '../../components/Sections'
import { backend, frontend } from '../../services/skills'
import { FaHammer } from 'react-icons/fa';



export default function Home(){

    const [isVisible, setIsVisible] = useState(false);

    const ConstructionFlag = () => (
        <div style={{
            transition:'all 0.8', 
            backgroundColor: '#d3d3d3',
            color: 'black',
            display: 'flex',
            justifyContent: 'center'}}>
                <p style={{fontSize:'18px' , margin: '2px'}}><FaHammer/> Em Construção...<FaHammer/></p>
        </div>
    )

    useEffect(()=>{
        window.addEventListener('scroll', () => setIsVisible(window.scrollY > 10));

        return () => {
            window.removeEventListener('scroll', () =>
            setIsVisible(window.scrollY > 10))
        }
    },[])

    return(
        <>
            {!isVisible &&
                <ConstructionFlag/>
            }
            <Header/>
            <Featured/>
            <Sections title="Backend" skills ={backend}/>
            <Sections title="Frontend" skills ={frontend}/>
            <ConstructionFlag/>


        </>
    )
}