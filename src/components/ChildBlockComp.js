import React,{useState} from 'react'
import {ChromePicker} from 'react-color'
const ChildBlockComp = (props) => {
    const [Color, setColor] = useState('#fff')
    const [ShowColorPicker, setShowColorPicker] = useState(false)
    const onClickColorPicker =()=>{
        setShowColorPicker(!ShowColorPicker)
    }
    return (
        <>
        {
        ShowColorPicker?( <ChromePicker color={Color} onChange={upDatedColor => setColor(upDatedColor.hex)}/> ):null
        }
        <div className="appended-blocks"> 
        <div style={{ backgroundColor: `${Color}`}} className="child-block" id={props.id}> Block{props.id} </div>
        {/* <button className="btn-color-picker" onClick={onClickColorPicker}>Select Color</button> */}
        <div onClick={onClickColorPicker} class="center">
      <a href="#"><span>Color Picker</span></a>
      </div>
        </div>
        </>
    )
}

export default ChildBlockComp
