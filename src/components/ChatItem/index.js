import { useEffect, useState } from "react";
import { Avatar, DateArea, LastMsg, Line, Lines, ListArea, NameArea } from "./style";

export default function ChatItem({onClick, data, active}) {
    const [time, setTime] = useState('')

    useEffect(() => {
        if(data.lastMessageDate > 0) {
            let d = new Date(data.lastMessageDate.seconds * 1000)
            let hours = d.getHours()
            let minutes = d.getMinutes()

            hours = hours < 10 ? '0'+hours : hours
            minutes = minutes < 10 ? '0'+minutes : minutes

            setTime(`${hours}:${minutes}`)
        }
    }, [data])

    return(
        <ListArea 
            onClick={onClick}
            className={`${active ? 'active' : ''}`}
        >
            <Avatar src={data.image}/>
            <Lines>
                <Line>
                    <NameArea>{data.title}</NameArea>
                    <DateArea>{time}</DateArea>
                </Line>

                <Line>
                    <LastMsg>
                        <p>{data.lastMessage}</p>
                    </LastMsg>
                </Line>
            </Lines>
        </ListArea>
    )
}