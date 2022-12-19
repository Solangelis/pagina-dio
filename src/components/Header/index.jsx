import React from "react";
import logo from '../../assets/logo.png'
import { Button } from "../Button";
import {
  
    Menu,
    Input,
    BuscarInputContainer,
    MenuRight,
    Row,
    Wrapper,
    Container,
    UserPicture
} from './styles'


const Header = ( {autenticado} ) => {
return(
    <Wrapper>
        <Container>
            <Row>
                <img src={logo} alt="logo da dio" />
                {autenticado ? (
                    <>
                      <BuscarInputContainer>
                       <Input placeholder="Buscar"/>
                       </BuscarInputContainer>
                       <Menu>Live Code</Menu>
                        <Menu>Global</Menu>
                    </>
                ) : null}
            </Row>
            <Row>
              {autenticado ? (
                <UserPicture src="https://avatars.githubusercontent.com/u/65560042?v=4" />
              )  :  (
                <>
                  <MenuRight href="#" > Home</MenuRight>
                  <Button title='Entrar' />
                  <Button title='Cadastrar' />
                </>
              )}
              
            </Row>
        </Container>
    </Wrapper>


  )
}

export { Header }