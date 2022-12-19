import { useNavigate } from "react-router-dom";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";


import { Container, Column, CriarText, SubtitleLogin, TitleLogin, EsqueciText, Row, Title, Wrapper } from "./styles";



const Login = () => {
    const navigate = useNavigate();


const handleClickSignIn = () => {
    navigate('/feed')
}
    
    
    return (
        <>  
        <Header />
        <Container>
            <Column>
            <Title> 
           A plataforma para voce aprender com experts, sominar as principais tecnologias e entrar mais rapido nas enpresas mais desejadas.
             </Title>
             
            </Column>
            <Column>
             <Wrapper>
                <TitleLogin>Faça seu cadastro</TitleLogin>
                <SubtitleLogin>Faça seu login e make the change</SubtitleLogin>
                <form>
                <Input name="email"  placeholder="Email" />
                <Input name="password" placeholder="Senha"/>
                <Button title="Entrar" variant="secondary" onClick={handleClickSignIn} type="submit"/>
                </form>
                <Row>
                    <EsqueciText>Esqueci minha senha</EsqueciText>
                    <CriarText>Criar Conta</CriarText>
                </Row>
             </Wrapper>
               
            </Column>
        </Container>
        </>
    )
}
 

export { Login }