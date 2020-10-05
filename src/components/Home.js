import React, { useState, useContext } from 'react';
import StoreContext from './StoreUseContext';

function Home() {
  const color = React.useContext(StoreContext);
  // console.log(color);
  // const [state, setState] = useState({name: '', age: 0});
  const [stateString, setStateString] = useState('a');
  // const userList = useSelector(state => state.user);
  // const dispatch = useDispatch();
  console.log("chay ");
  var changeState = () => {
    // console.log("1: name = " + state.name + " age = " + state.age);

    // setState(() => ({
    //   name: `string ${Math.floor(Math.random()*(25-10+1))+10}`,
    //   age: Math.floor(Math.random()*(25-10+1))+10
    // }));

    
    setStateString("b");
    console.log("string " + stateString);

    // console.log("2: name = " + state.name + " age = " + state.age);
    
    // if (type === "add") {
    //   let index = userList[userList.length - 1].id + 1;
    //   if (Number.isNaN(index)) {
    //     index = userList[userList.length - 2].id + 1;
    //   }
    //   const action = {
    //     type: type,
    //     id: index,
    //     name: Math.random().toString(36).substring(7) +index,
    //     age: Math.floor(Math.random()*(25-10+1))+10
    //   };
    //   dispatch(action);
    // } else if (type === "delete" || type === "update") {
    //   const action = {
    //     type: type,
    //     id: id
    //   };
    //   dispatch(action);
    // }
    // console.log(userList);
  }
  // var users = userList.map((user, index) => {
  //     if (user.id > 0) {
  //       return <div key={index}>
  //                 <p>{user.id} - {user.name} - {user.age}</p>
  //              </div>
  //     }
  //   });
  // console.log(userList);
  return (
    <div>
      <label>test useContext</label>
        <button onClick={()=>setStateString(stateString + 1)}>ADD</button>
        {/* <button onClick={()changeState('delete', 1)}>DELETE</button>
        <button onClick={changeState('update', 2)}>UPDATE</button> */}
        {/* {users} */}
        <p style={{ color }}>
          Hello World
        </p>
    </div>
  );
}

export default React.memo(Home);
