import React from 'react';
const btnstyle={
  border: 0,
  color: "black",
  background: "white",
  fontSize: 36,
  marginLeft: 30,
  marginTop: 10,
}

const stnstyle={
  border: 0,
  color: "black",
  background: "white",
  fontSize: 24,
  marginLeft:30,
}
const searchbarstyle={
  color: "black",
  background: "#C4C4C4",
  fontSize: 17,
  marginLeft:30,
  height: 29,
  width: 600,
  marginRight: 10,
  marginTop: 10,  
}

class MyPage extends React.Component {
    render() {
        return (
            <div className="main header">
                <input style={searchbarstyle}/>
                  <button onClick={()=>{alert("조금더 시간을 주시면 구현됩니다")}}> 검색</button>
            </div>

          )

    }
}


export default MyPage;