import React, {useState, useEffect} from 'react'
import marked from 'marked'
import * as FiIcons from 'react-icons/fi';
import * as DiIcons from 'react-icons/di';

function Preview(props) {
    const [isMax, setIsMax] = useState(0);   // trace the state of min max btn

    const addPreTxt = txt => {
        document.getElementById('preview').innerHTML = marked(txt.ptxt);
    }

    const onMinMaxPrev = () => {
        setIsMax(! isMax ) ; // find if the windows maximez
        document.getElementById('prevarea').classList.toggle("parea");
        document.getElementById('prevarea').classList.toggle('minmax');
    }

    // a way to access ComponentDidMount lifecycle method in functional component
    useEffect( ()=> { 
       addPreTxt({ptxt: props.rawData});
        
    }, [props]); // Watch the props when it changes

    return (
        <div id='prevarea'  className='looks parea'>
            <header className='title'>
                <div className='tlogo'>
                    <span className='icon'><DiIcons.DiReact></DiIcons.DiReact></span>
                    <span className='label'>Preview</span>
                </div>
                <a href='#' onClick={onMinMaxPrev} className='minmax-btn'>
                    <span className='icon'>{isMax ?<FiIcons.FiMinimize2></FiIcons.FiMinimize2>:<FiIcons.FiMaximize2></FiIcons.FiMaximize2>}</span>
                </a>
            </header>
            <div  id='preview' className='body' >
                
            </div>
        </div>
    )
}

export default Preview
