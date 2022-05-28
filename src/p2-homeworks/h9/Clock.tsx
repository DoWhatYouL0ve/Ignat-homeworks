import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import styles from './Clock.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearTimeout(timerId)
    }
    const start = () => {
        stop()
        const id: number = +setInterval(() => {
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    const stringTime = (date.getHours() > 9 ? date.getHours() : '0' + date.getHours() )+ ':' + (date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes() )+ ':' + (date.getSeconds() > 9 ? date.getSeconds() : '0' + date.getSeconds())// fix with date
    const stringDate = date.getFullYear() + '/' + date.getMonth() + '/' + date.getDate() // fix with date

    return (
        <div className={styles.clockContainer}>
            <div className={styles.timeContainer}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>
            <br/>
            {show && (
                <div className={styles.dateContainer}>
                    {stringDate}
                </div>
            )}
            <div>
                <SuperButton onClick={start}>start</SuperButton>
                <SuperButton onClick={stop}>stop</SuperButton>
            </div>
        </div>
    )
}

export default Clock
