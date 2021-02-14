import React, {useState, useEffect} from 'react'
import ProcessorForm from './ProcessorForm'
import marked from 'marked'
import * as FiIcons from 'react-icons/fi';
import * as DiIcons from 'react-icons/di';

function Preview() {
    const [isMax, setIsMax] = useState(0);   // trace the state of min max btn
    const [data, setData] = useState('');

    const addPreTxt = txt => {
        document.getElementById('preview').innerHTML = marked(txt.ptxt);
    }


    const onMinMaxRaw = () => {
        setIsMax(! isMax ) ;
        document.getElementById('raw').classList.toggle("rarea");
        document.getElementById('raw').classList.toggle('minmax')
    }

    const onMinMaxPrev = () => {
        setIsMax(! isMax ) ;
        document.getElementById('prevarea').classList.toggle("parea");
        document.getElementById('prevarea').classList.toggle('minmax')
    }
    useEffect( ()=> {
        setData(marked(document.getElementById('editor').value));
        
    }, []);
    return (
        <div id='main'>
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
                    <ProcessorForm onKeyUp={addPreTxt} onLoad={e => console.log(123, e)}></ProcessorForm>
                </div>
            </div>
            
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
        </div>
    )
}

export default Preview
