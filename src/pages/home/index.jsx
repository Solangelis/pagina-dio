import { useNavigate } from 'react-router-dom';

import banner from '../../assets/banner.png'
import { Button } from "../../components/Button";
import { Header} from "../../components/Header";

import { Container, TextContent, TitleHighlight, Title } from "./styles";

const Home = () => {

    const navigate = useNavigate();

    const handleClickSignIn = () => {
        navigate('/login')
    }

    return (
        <>  
        <Header/>
        <Container>
            <div>
            <Title> 
            <TitleHighlight>
            Implementar
            <br/> 
            </TitleHighlight>
            o seu futuro global agora!
             </Title>
             <TextContent>
                Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional, evolvindo em comunidade com os melhores experts.
             </TextContent>
             <Button title="Começar agora" variant="secondary" onClick={handleClickSignIn} />
            </div>
            <div>
                <img src={banner} alt="imagen principal" />
            </div>
        </Container>
        </>
    )
}
 

export { Home }