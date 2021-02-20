import styled from 'styled-components'

export const NewChatArea = styled.div`
    width:35%;
    max-width:415px;
    position:fixed;
    left:0;
    top:0;
    bottom:0;
    background-color:#fff;
    display:flex;
    flex-direction:column;
    border-right:1px solid #ddd;
    transition: all ease 0.3s;
`
export const NewChatHeader = styled.div`
    display:flex;
    background-color:#00bfa5;
    align-items:center;
    padding:60px 15px 15px 15px;
`
export const NewChatBackButton = styled.div`
    width:40px;
    height:40px;
    display:flex;
    justify-content:center;
    align-items:center;
    cursor:pointer;
`
export const NewChatHeadTitle = styled.div`
   font-size:19px;
   height:40px;
   line-height:40px;
   flex:1;
   font-weight:bold;
   color:#fff;
   margin-left:20px; 
`
export const NewChatList = styled.div`
    flex:1;
    overflow-y:auto;

    &::-webkit-scrollbar {
        width:6px;
        height:6px;
    }

    &::-webkit-scrollbar-thumb {
        background-color:rgba(0,0,0,0.2);
    }
`
export const NewChatListItem = styled.div`
    display:flex;
    align-items:center;
    padding:15px;
    cursor: pointer;

    &:hover {
        background-color:#f5f5f5;
    }
`
export const NewChatItemAvatar = styled.img`
    width:50px;
    height:50px;
    border-radius:50%;
    margin-right:15px;
`
export const NewChatItemName = styled.div`
    font-size:17px;
    color:#000;
`