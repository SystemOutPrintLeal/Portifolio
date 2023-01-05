import React from 'react'
import Header from '../../components/Header'
import Featured from '../../components/Featured'
import Sections from '../../components/Sections'
import { backend, frontend } from '../../services/skills'


export default function Home(){

    return(
        <>
            <Header/>
            <Featured/>
            <Sections title="Backend" skills ={backend}/>
            <Sections title="Frontend" skills ={frontend}/>


        </>
    )
}