



import { Header} from "../../components/Header";
import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";

import { Container, Column, Title, TitleHighlight } from "./styles";

const Feed  = () => {
    return (
        <>  
        <Header autenticado={true}/>
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card/>
                <Card/>
               
            </Column>
            <Column>
            <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
            <UserInfo percentual={45} nome="Solangelis Hernandez" image="https://avatars.githubusercontent.com/u/65560042?v=4"/>
            <UserInfo percentual={30} nome="Solangelis Hernandez" image="https://avatars.githubusercontent.com/u/65560042?v=4"/>
            <UserInfo percentual={90} nome="Solangelis Hernandez" image="https://avatars.githubusercontent.com/u/65560042?v=4"/>
            <UserInfo percentual={100} nome="Solangelis Hernandez" image="https://avatars.githubusercontent.com/u/65560042?v=4"/>
            </Column>
           
        </Container>
        </>
    )
}
 

export { Feed }