import { Facebook } from "@material-ui/icons";
import api from "../../services/api";
import { LoginArea, LoginButton } from "./style";

export default function Login({onReceive}) {
    async function handleFacebookLogin() {
       let result = await api.fbPopup() 
       
       if(result) {
            onReceive(result.user)
       } else {
           alert("erro");
       }
    }

    return(
        <LoginArea>
            <LoginButton onClick={handleFacebookLogin}>
                Entrar <Facebook />
            </LoginButton>
        </LoginArea>
    )
}