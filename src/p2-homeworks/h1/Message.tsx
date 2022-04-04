import React from 'react'
import style from './Message.module.css'

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={style.messageContainer}>
            <div className={style.messageAva}>
                <img src={props.avatar} alt="avatar"/>
            </div>
            <div className={style.messageTextContainer}>
                <div className={style.cornerBox}>
                    <div className={style.cornerRound}></div>
                    <div className={style.corner}></div>
                </div>
                <div className={style.messageBox}>
                    <div className={style.name}>{props.name}</div>
                    <div className={style.message}>{props.message}</div>
                </div>
                <div className={style.timeContainer}>
                    <div className={style.time}>{props.time}</div>
                </div>
            </div>
        </div>
    )
}

export default Message
