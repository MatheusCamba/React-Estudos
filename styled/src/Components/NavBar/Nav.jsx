import React, { useState } from "react";

import { NavContainer, Image, Input, ContainerMain, ContainerTeste } from "./styled";

import logo from '../../assets/logo.svg'
import { Card } from "../Card/Card";
import { FiSearch } from 'react-icons/fi'

import {data} from '../../../data.js'

export function Nav() {
    const [search, setSeach] = useState("")

    console.log(data)

    return (
        <>
            <NavContainer>
                    <Image src={logo} alt='Logo Desafio'/>
                    <Input type='text' placeholder="Digite aqui" onChange={(e) => setSeach(e.target.value)} />
            </NavContainer>
            <ContainerMain>
                    <ContainerTeste>
                        {
                            data.filter((info) => {
                                if(search == ""){
                                    return info
                                } else if(info.name.toLowerCase().includes(search.toLowerCase())){
                                    return info
                                }
                            }).map((item, index) => (
                                <Card key={index} image={item.url} name={item.name} likes={item.likes} views={item.views}/>
                            ))
                        }
                    </ContainerTeste>
            </ContainerMain>
        </>
    )
}