import styled from 'styled-components'

export const AppWindow = styled.div`
    display:flex;
    height:100vh;
    background-color:#ededed;
`
export const Sidebar = styled.div`
    width:35%;
    max-width:415px;
    display:flex;
    flex-direction:column;
    border-right:1px solid #ddd;
`
export const Header = styled.div`
    height:60px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:0 15px;
`
export const HeaderAvatar = styled.img`
    width:40px;
    height:40px;
    border-radius:20px;
    cursor: pointer;
`
export const HeaderButtons = styled.div`
    display:flex;
`
export const HeaderBtn = styled.div`
    width:40px;
    height:40px;
    border-radius:20px;
    display:flex;
    justify-content:center;
    align-items:center;
    cursor: pointer;
`
export const Search = styled.div`
    background-color:#f6f6f6;
    border-bottom:1px solid #eee;
    padding:5px 15px;
`
export const SearchInputArea = styled.div`
    background-color:#fff;
    height:40px;
    border-radius:20px;
    display:flex;
    align-items:center;
    padding:0 10px;
`
export const SearchInput = styled.input`
    flex:1;
    border:0;
    outline:0;
    background-color:transparent;
    margin-left:10px;
`
export const ChatList = styled.div`
    flex:1;
    background-color:#fff;
    overflow-y:auto;

    &::-webkit-scrollbar {
        width:6px;
        height:6px;
    }

    &::-webkit-scrollbar-thumb {
        background-color:rgba(0,0,0,0.2);
    }
`
export const ContentArea = styled.div`
    flex:1;
`