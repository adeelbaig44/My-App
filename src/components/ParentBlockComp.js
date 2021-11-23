import React,{useState} from 'react'
import ChildBlockComp from './ChildBlockComp'
const ParentBlockComp = () => {
    const [ShowInput, setShowInput] = useState(false)
    const [inputfieldsToAdd,setInputfieldsToAdd] = useState(1);
      const [committedFieldsToAdd,setCommittedFieldsToAdd] = useState(0);
    const onClickParentBlock =()=>{
        setShowInput(true)
    }
    const getBlockCount = (e)=>{
        setInputfieldsToAdd(parseInt(e.currentTarget.value, 10))
    }
    const addBlocks = ()=>{
        setCommittedFieldsToAdd(inputfieldsToAdd);
    }
    return (
        <>
         <div onClick={onClickParentBlock} className="parent-block">
             {
                 ShowInput? ( 
                 <div> 
                 <input onChange={getBlockCount} placeholder="Enter no of div's....." />
                 </div>):null
             }
            <div> 
            {
               [
                ...Array(committedFieldsToAdd),
              ].map((value,index) => (
                <ChildBlockComp id={index + 1} key={index} />
              ))
            }
            </div>
      </div>

      <div onClick={addBlocks} class="center">
      <a href="#"><span>Add Blocks</span></a>
      </div>
        </>
    )
}

export default ParentBlockComp
