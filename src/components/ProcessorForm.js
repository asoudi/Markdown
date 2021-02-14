import React, { useState } from 'react'

import * as FiIcons from 'react-icons/fi';
import * as DiIcons from 'react-icons/di';

export default function ProcessorForm(props) {
    const [isMax, setIsMax] = useState(0);   // trace the state of min max btn

    const onMinMaxRaw = () => {
        setIsMax(! isMax ) ;
        document.getElementById('raw').classList.toggle("rarea");
        document.getElementById('raw').classList.toggle('minmax');
    }

    const handleOnChange = e => {
        props.onChange({
            rawData: e.target.value
        });
    }

    return ( 
        
        <div id='raw' className='looks rarea'>
        <header className='title'>
            <div className='tlogo'>
                <span className='icon'><DiIcons.DiReact></DiIcons.DiReact></span>
                <span className='label'>Editor</span>
            </div>
            <a href='#' onClick={onMinMaxRaw} className='minmax-btn'>
                <span className='icon'>{isMax ?<FiIcons.FiMinimize2></FiIcons.FiMinimize2>:<FiIcons.FiMaximize2></FiIcons.FiMaximize2>}</span>
            </a>
       </header>
        <div  className='body'>
            <textarea id='editor' rows='4'
                placeholder='Type your markdown text'
                defaultValue={props.rawData}
                onChange={handleOnChange} >
           
            </textarea>
        </div>
    </div>
    
        
    )
}


