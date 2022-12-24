import { useNavigate } from "react-router-dom";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { Container, MainTitle, Title, Column, Wrapper, Row  } from "./styles";



const Cadastro = () => {
    const navigate = useNavigate();


const handleClickSignIn = () => {
    navigate('/')
}
    
    
    return (
        
        <>  
        <Header />
        <Container>
           <Column>
            <MainTitle> 
           A plataforma para voce aprender com experts, sominar as principais tecnologias e entrar mais rapido nas enpresas mais desejadas.
             </MainTitle>
            
             </Column>
             

             <Column>
             <Wrapper>
             <Title>Comence agora Gratis</Title>
             <p>Crie sua conta e make the </p>
            <form>  
            <Input name="nome completo" placeholder="Nome Completo"/>
            <Input name="Email" placeholder="e-mail"/>
            <Input name="password" placeholder="Password"/>
            <Button title="Começar agora" variant="secondary" onClick={handleClickSignIn} />
            </form> 
            <Row>  
            <p>Ao Clicar em "criar minha conta gratis". declaro que aceito as politicas de Privacidade e os terminos de Uso da DIO</p>
            </Row>
             <p>Ja tenho Conta <a href="https://www.dio.me/es/sign-in">Fazer Login</a></p>
             
            </Wrapper>
            </Column>
               
           
        </Container>
        </>
    )
}
 

export { Cadastro }
