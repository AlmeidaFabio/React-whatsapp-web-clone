import { ChatIntroArea, ChatIntroImage, ChatIntroText1, ChatIntroText2 } from "./style";

export default function ChatIntro() {
    return(
        <ChatIntroArea>
            <ChatIntroImage src="https://web.whatsapp.com/img/intro-connection-hq-light_9466a20e6d2921a21ac7ab82419be157.jpg"/>
            <ChatIntroText1>Matenha seu celular conectado</ChatIntroText1>
            <ChatIntroText2>O Whatsapp conecta ao seu telefone para sincronizar suas mensagens. <br/>Para reduzir o uso de dados, conecte seu telefone a uma rede Wi-Fi.</ChatIntroText2>
        </ChatIntroArea>
    )
}