import React,{useState} from 'react'


export default function TextForm(props) {
    const handleUpClick= ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase","success")
    }
    const handleLoClick= ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase","success")
    }
    const handleClear= ()=>{
        let newText = "";
        setText(newText)
        props.showAlert("Text Cleared","success")
    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
        setText(event.target.value);
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text); 
        props.showAlert("Copied to Clipboard !", "success");
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }
    const [text, setText] = useState('');
    return (
        <> 
        <div className='container' style={{color:props.mode==='light'?'':'white'}}>
        <div className='container' >
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'#343a40' , color:props.mode==='light'?'':'white'}} id="myBox" rows="6" ></textarea>
            </div>
            <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleClear}>Clear</button>
            <button  className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
            <button  className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div> 
        <div className="container my 3">
            <h1>Text Summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters  </p>
        </div> 
        </div>
        </> 
  )
}
