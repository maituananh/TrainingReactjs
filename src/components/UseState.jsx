import React, { useState, useEffect, useMemo, useContext } from 'react';
import Home from './Home';
import StoreContext from './StoreUseContext'

function UseState(string) {
    const [stateString, setStateString] = useState('a');
    const [stateEffect, setStateEffect] = useState(1);
    const [stateUseMemo, updateStateUseMemo] = useState('green');
    let flag = 1;
    const [stateColor, setColor] = useState("red");
    const {name} = string;
    console.log("component useState "+ name);

    // function changeState(string) {
    //     setStateString(string);
    // }

    // function isUseEffect() {
    //     setStateEffect(69);
    // }

    // componentDidUpdate
    // 1. chạy khi bất kì state nào đc thay đổi
    // useEffect(() => {
    //     if (flag !== stateEffect) {
    //         setStateEffect(69);
    //     }
    //     console.log("componentDidUpdate")
    // });

    // componentDidMount
    // 1. chạy lần đầu tiên khi render component.
    // 2. chạy khi state trong mảng được update.
    // useEffect(() => {
    //     console.log("componentDidMount ");
    //     updateStateUseMemo(name);
    // }, [stateUseMemo]);

    function changeColor() {
        setColor('green');
    }

    return (
        <div>
            <label>child component</label>
            <button onClick={() => updateStateUseMemo(name)}> click </button>
            <div style={{backgroundColor: name, width: '30px', height: '30px'}}>

            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <h1>USE USECONTEXT</h1>
            <button onClick={() => changeColor()}>Hello color</button>
            <StoreContext.Provider value={stateColor}>
                <Home/>
                
            </StoreContext.Provider>
            {/* <h1>DEMO REDUX</h1>
            <button onClick={() => changeState(Math.random().toString(36).substring(7))}>Use State</button>
            <button onClick={() => isUseEffect()}>Use Effect</button>
            <h3>Use State Hook</h3>
            {stateString}
            <h3>Use Effect Hook</h3>
            {stateEffect}
            <h3>Use Memo</h3>
            <label> The input use UseMemo </label>
            <input onChange={e => updateStateUseMemo(e.target.value)}/>
            <label>Output after changes: {stateUseMemo}</label> */}
        </div>
    );
}

export default React.memo(UseState);
