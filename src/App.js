import { Chat, DonutLarge, MoreVert, SearchOutlined } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { AppWindow, ChatList, ContentArea, Header, HeaderAvatar, HeaderBtn, HeaderButtons, Search, SearchInput, SearchInputArea, Sidebar } from "./assets/css/style";

import ChatIntro from "./components/ChatIntro";
import ChatItem from "./components/ChatItem";
import ChatWindow from "./components/ChatWindow";
import Login from "./components/Login.js";
import NewChat from "./components/NewChat";
import api from "./services/api";

function App() {
  const [chatlist, setChatlist] = useState([])
  const [activeChat, setActiveChat] = useState({})
  const [showNewChat, setShowNewChat] = useState(false)
  const [user, setUser] = useState(null)

  useEffect(() => {
      if(user !== null) {
        let unsub = api.onChatList(user.id, setChatlist)

        return unsub
      }
  }, [user])

  function openNewChat() {
      setShowNewChat(true)
  }

  async function handleLoginData(u) {
    let newUser = {
      id:u.uid,
      name:u.displayName,
      avatar:u.photoURL
    }

    await api.addUser(newUser)

    setUser(newUser)
  }

  if(user === null) {
    return(
      <Login onReceive={handleLoginData}/>
    )
  }

  return (
    <AppWindow>
      <Sidebar>
        <NewChat 
          show={showNewChat}
          setShow={setShowNewChat}
          user={user}
          chatlist={chatlist}
        />
        <Header>
          <HeaderAvatar src={user.avatar}/>

          <HeaderButtons>
            <HeaderBtn>
              <DonutLarge style={{color:'#919191'}} />
            </HeaderBtn>

            <HeaderBtn onClick={openNewChat}>
              <Chat style={{color:'#919191'}} />
            </HeaderBtn>

            <HeaderBtn>
              <MoreVert style={{color:'#919191'}} />
            </HeaderBtn>
          </HeaderButtons>
        </Header>

        <Search>
          <SearchInputArea>
            <SearchOutlined fontSize="small" style={{color:'#919191'}} />
            <SearchInput placeholder="Procurar ou começar uma nova conversa" type="search"/>
          </SearchInputArea>
        </Search>

        <ChatList>
          {chatlist.map((item, key) => (
            <ChatItem 
              key={item.chatId}
              data={item}
              active={activeChat.chatId === chatlist[key].chatId}
              onClick={() => setActiveChat(chatlist[key])}
            />
          ))}
        </ChatList>
      </Sidebar>

      <ContentArea>
        {activeChat.chatId !== undefined && 
          <ChatWindow 
            user={user}
            data={activeChat}
          />
        }
        {activeChat.chatId === undefined &&
          <ChatIntro />
        }
      </ContentArea>
    </AppWindow>
  );
}

export default App;
