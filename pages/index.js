import React, { useState } from 'react';
import imageChangeOnMouseOver from './imageChangeOnMouseOver';

const InputElement = () => {
    const [inputText, setInputText] = useState("");
    const [historyList, setHistoryList] = useState([]);
    return <div>
                <input 
                    placeholder="Enter Some Text" 
                    onChange={(e) => {
                        setInputText(e.target.value);
                        setHistoryList([...historyList, e.target.value]);
                    }}
                /><br />
                {inputText}
                <hr/>
                <br/>
                <ul>
                    {historyList.map(rec => {
                        return <div>{rec}</div>
                    })}
                </ul>
            </div>

};

export default InputElement;