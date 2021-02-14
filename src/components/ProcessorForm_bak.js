import React, { useState, useEffect} from 'react'
import raw from '../cases/case.txt'


export default function ProcessorForm(props) {

    const handleKeyUp = e => { 
        props.onKeyUp({
            ptxt: e.target.value
        });
    }

    const LoadText = () =>{
       
        fetch(raw)
        .then(r => r.text() )
        .then(txt => {
           document.getElementById('editor').innerHTML = txt;

        });
    }

    useEffect(() => {
        LoadText();
        
    },[]);   

    return (<div>
        <textarea id='editor' rows='4'
        placeholder='Enter your markdown text'
        onKeyUp={handleKeyUp}  >
           
        </textarea>
        
    </div>
        
    )
}


