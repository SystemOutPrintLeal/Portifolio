import React,{useEffect, useState} from 'react'
import Header from '../../components/Header'
import Featured from '../../components/Featured'
import Sections from '../../components/Sections'
import Footer from '../../components/Footer'
import { backend, frontend } from '../../services/skills'
import { FaHammer } from 'react-icons/fa';

const ConstructionFlag = (props) => (
    <div style={{
        transition:'all 0.8', 
        backgroundColor: '#d3d3d3',
        color: 'black',
        display: props.isVisible,
        justifyContent: 'center'}}>
            <p style={{fontSize:'18px' , margin: '2px'}}><FaHammer/> Em Construção...<FaHammer/></p>
    </div>
)

export default function Home(){

    const [isVisible, setIsVisible] = useState(false);

    useEffect(()=>{
        window.addEventListener('scroll', () => setIsVisible(window.scrollY > 10));

        return () => {
            window.removeEventListener('scroll', () =>
            setIsVisible(window.scrollY > 10))
        }
    },[])


    return(
        <>
            <ConstructionFlag isVisible={isVisible?'none':'flex'}/>
            <Header/>
            <Featured/>
            <Sections title="Backend" skills ={backend}/>
            <Sections title="Frontend" skills ={frontend}/>
            <Footer/>
            <ConstructionFlag isVisible={'flex'}/>

        </>
    )
}