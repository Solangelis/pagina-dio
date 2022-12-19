import React from 'react'

 
import { CardContainer, Content, ImageBackground, UserInfo, PostInfo, HasInfo, UserPicture } from './styles'

const Card =() => {
  return (
    <CardContainer>
        <ImageBackground src="http://www.desenvolvimento.mg.gov.br/assets/post/AdobeStock_236631818_03-05-2021.jpeg"/>
        <Content>
            <UserInfo>
                <UserPicture src='https://avatars.githubusercontent.com/u/65560042?v=4'/>
                <div>
                    <h4>Solangelis</h4>
                    <p>Ha 8 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeto para curso javaScript</h4>
                <p>Projeto Feito o curso de javaScript<strong>Saiba Mais</strong></p>
            </PostInfo>
            <HasInfo>
                <h4>HTML #CSS #Javascript #React</h4>
                <p>
                  
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
}

export { Card }