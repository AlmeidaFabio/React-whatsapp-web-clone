import { ArrowBack } from "@material-ui/icons";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { NewChatArea, NewChatBackButton, NewChatHeader, NewChatHeadTitle, NewChatItemAvatar, NewChatItemName, NewChatList, NewChatListItem } from "./style";

export default function NewChat({user, chatlist, show, setShow}) {
    const [list, setList] = useState([])

    useEffect(() => {
        async function getList() {
            if(user !== null) {
                let results = await api.getContactsList(user.id)

                setList(results)
            }
        }
        getList()

    }, [user])

    function closeNewChat() {
        setShow(false)
    }

    async function addNewChat(user2) {
        await api.addNewChat(user, user2)

        closeNewChat()
    }
    
    return(
        <NewChatArea style={{left: show ? 0 : -415}}>
            <NewChatHeader>
                <NewChatBackButton onClick={closeNewChat}>
                    <ArrowBack style={{color: '#ffffff'}}/>
                </NewChatBackButton>
                    
                <NewChatHeadTitle>
                    Nova Conversa
                </NewChatHeadTitle>
            </NewChatHeader>

            <NewChatList>
                {list.map((item, key) => (
                    <NewChatListItem key={key} onClick={() => addNewChat(item)}>
                        <NewChatItemAvatar src={item.avatar}/> 
                        <NewChatItemName>{item.name}</NewChatItemName>
                    </NewChatListItem>
                ))}
            </NewChatList>
        </NewChatArea>
    )
}