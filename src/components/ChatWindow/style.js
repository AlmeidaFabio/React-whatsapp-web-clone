import styled from 'styled-components'
const img = 'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'

export const ChatWindowArea = styled.div`
    display:flex;
    flex-direction:column;
    height:100%;
`
export const ChatWindowHeader = styled.div`
    height:60px;
    border-bottom:1px solid #ccc;
    display:flex;
    justify-content:space-between;
    align-items:center;
`
export const ChatWindowHeaderInfo = styled.div`
    display:flex;
    align-items:center;
    cursor:pointer;
`
export const ChatWindowHeaderAvatar = styled.img`
    width:40px;
    height:40px;
    border-radius:50%;
    margin-left:15px;
    margin-right:15px;
`
export const ChatWindowHeaderName = styled.div`
    font-size:17px;
    color:#000;
`
export const ChatWindowHeaderButtons = styled.div`
    display:flex;
    align-items:center;
    margin-right:15px;
`
export const ChatWindowHeaderBtn = styled.div`
    width:40px;
    height:40px;
    border-radius:50%;
    display:flex;
    justify-content:center;
    align-items:center;
    cursor:pointer;
    overflow:hidden;
    transition: all ease 0.3s;
`
export const ChatWindowBody = styled.div`
    flex:1;
    background-color:#e5ddd5;
    background-size:cover;
    background-position:center; 
    background-image:url(${img});
    padding: 20px 30px;

    &::-webkit-scrollbar {
        width:6px;
        height:6px;
    }

    &::-webkit-scrollbar-thumb {
        background-color:rgba(0,0,0,0.2);
    }
`
export const EmojiArea = styled.div`
    height:200px;
    overflow-y:hidden;
    transition: all ease 0.3s;

    .emoji-picker-react {
        width:auto;
        background:none;

        .emoji-group {
            &::before {
                background:none;
            }
        }
    }
`
export const ChatWindowFooter = styled.div`
    height:62px;
    display:flex;
    align-items:center;
`
export const ChatWindowPre = styled.div`
    display:flex;
    margin: 0 15px;
`
export const ChatWindowInputArea = styled.div`
    flex:1;
`
export const ChatWindowInput = styled.input`
    width:100%;
    height:40px;
    border:0;
    outline:0;
    background-color:#fff;
    border-radius:20px;
    font-size:15px;
    color:#4a4a4a;
    padding-left:15px;
`
export const ChatWindowPos = styled.div`
    display:flex;
    margin:0 15px;
`