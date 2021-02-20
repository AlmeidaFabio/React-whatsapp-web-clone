import { AttachFile, Close, InsertEmoticon, Mic, MoreVert, Search, Send } from "@material-ui/icons";
import EmojiPicker from "emoji-picker-react";
import { useEffect, useRef, useState } from "react";
import api from "../../services/api";
import MessageItem from "../MessageItem";
import { ChatWindowArea, ChatWindowBody, ChatWindowFooter, ChatWindowHeader, ChatWindowHeaderAvatar, ChatWindowHeaderBtn, ChatWindowHeaderButtons, ChatWindowHeaderInfo, ChatWindowHeaderName, ChatWindowInput, ChatWindowInputArea, ChatWindowPos, ChatWindowPre, EmojiArea } from "./style";

export default function ChatWindow({user, data}) {
    let recognition = null;
    let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if(SpeechRecognition !== undefined) {
        recognition = new SpeechRecognition();
    }

    const [emojiOpen, setEmojiOpen] = useState(false)
    const [text, setText] = useState('')
    const [listening, setListening] = useState(false)
    const [list, setList] = useState([])
    const [users, setUsers] = useState([])
    const body = useRef()

    useEffect(() => {
        setList([])
        let unsub = api.onChatContent(data.chatId, setList, setUsers)
        return unsub
    }, [data.chatId])

    useEffect(() => {
        if(body.current.scrollHeight > body.current.offsetHeight) {
            body.current.scrollTop = body.current.scrollHeight - body.current.offsetHeight
        }
    }, [list])

    function handleEmojiClick(e, emojiObject) {
        setText(text + emojiObject.emoji)
    }

    function handleEmoji() {
        setEmojiOpen(true)
    }

    function handleCloseEmoji() {
        setEmojiOpen(false)
    }

    function handleMic() {
        if(recognition !== null) {
            recognition.onstart = () => {
                setListening(true)
            }
            recognition.onend = () => {
                setListening(false)
            }
            recognition.onresult = (e) => {
                setText(e.results[0][0].transcript)
            }

            recognition.start()
        }
    }

    function handleInputKeyUp(e) {
        if(e.keyCode === 13) {
            handleSend()
        }
    }

    function handleSend() {
        if(text !== '') {
            api.senMessage(data, user.id, 'text', text, users)

            setText('')
            setEmojiOpen(false)
        }
    }

    return(
        <ChatWindowArea>
            <ChatWindowHeader>
                <ChatWindowHeaderInfo>
                    <ChatWindowHeaderAvatar src={data.image}/>
                    <ChatWindowHeaderName>{data.title}</ChatWindowHeaderName>
                </ChatWindowHeaderInfo>

                <ChatWindowHeaderButtons>
                    <ChatWindowHeaderBtn>
                        <Search style={{color: '#919191'}} />
                    </ChatWindowHeaderBtn>

                    <ChatWindowHeaderBtn>
                        <AttachFile style={{color: '#919191'}} />
                    </ChatWindowHeaderBtn>

                    <ChatWindowHeaderBtn>
                        <MoreVert style={{color: '#919191'}} />
                    </ChatWindowHeaderBtn>
                </ChatWindowHeaderButtons>
            </ChatWindowHeader>

            <ChatWindowBody ref={body}>
                {list.map((item, key) => (
                    <MessageItem 
                        key={key}
                        data={item}
                        user={user}
                    />
                ))}
            </ChatWindowBody>
            
            <EmojiArea style={{height: emojiOpen ? '200px' : '0px'}}>
                <EmojiPicker 
                    disableSearchBar
                    disableSkinTonePicker
                    onEmojiClick={handleEmojiClick}
                />
            </EmojiArea>

            <ChatWindowFooter>
                <ChatWindowPre>
                    <ChatWindowHeaderBtn 
                        onClick={handleCloseEmoji}
                        style={{width: emojiOpen ? 40 : 0}}
                    >
                        <Close style={{color: '#919191'}} />
                    </ChatWindowHeaderBtn>

                    <ChatWindowHeaderBtn onClick={handleEmoji}>
                        <InsertEmoticon style={{color: emojiOpen ? '#009688' : '#919191'}} />
                    </ChatWindowHeaderBtn>
                </ChatWindowPre>

                <ChatWindowInputArea>
                    <ChatWindowInput 
                        type="text"
                        placeholder="Digite uma mensagem"
                        value={text}
                        onChange={e => setText(e.target.value)}
                        onKeyUp={handleInputKeyUp}
                    />
                </ChatWindowInputArea>

                <ChatWindowPos>
                {text === '' && 
                    <ChatWindowHeaderBtn onClick={handleMic}>
                        <Mic style={{color:listening ? '#126ece' : '#919191'}} />
                    </ChatWindowHeaderBtn>
                }
                {text !== '' &&
                    <ChatWindowHeaderBtn onClick={handleSend}>
                        <Send style={{color: '#919191'}} />
                    </ChatWindowHeaderBtn>
                }                 
                </ChatWindowPos>
            </ChatWindowFooter>
        </ChatWindowArea>
    )
}