import { Slider } from '@mui/material'
import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
    const [value1, setValue1] = useState<number>(0)
    const [value2, setValue2] = useState<number>(100)

    const [value, setValue] = useState<number[]>([value1, value2]);
    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };

    const superDoubleChangeHandler = (value: number[]) => {

    }


    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <span>{value1}</span>
                <SuperRange
                    onChangeRange={(value)=> setValue1(value)}
                />
            </div>

            <div>
                <span>{value1}</span>
                <SuperDoubleRange
                    value={[value1, value2]}
                    onChangeRange={superDoubleChangeHandler}
                />
                <span>{value2}</span>
            </div>
            <div style={{width: 200, marginLeft: 30}}>
                <h3>MU slider</h3>
                <Slider value={value}
                onChange={handleChange}/>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <span>{value[0]}</span><span>{value[1]}</span>
                </div>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
