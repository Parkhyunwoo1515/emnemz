import React from 'react';
import PageHeader from './PageHeader.js';

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

class FinishedWork extends React.Component {
    render() {
        return (
            <section className="main">
                <div className="main header">
                    <nav className="navbar">
                        <ui class="navbar_logo">
                            <li><button className="header-button" onClick={() => this.props.setPage("main")}>Yu칼노리</button></li>
                        </ui>
                        <ui class="navbar_writing">
                            <li><button className="header-button" onClick={() => this.props.setPage("main")}>소설 작성방</button></li>
                            <li><button className="header-button" onClick={() => this.props.setPage("finished")}>완결 작품방</button></li>
                        </ui>
                        <ui class="navbar_menu">
                            <li><button className="header-button" onClick={() => this.props.setPage("mypage")} style={{ color: "white" }}>마이 페이지</button></li>
                            <li><a href="" style={{ color: "white" }}>알림</a></li>
                            <li><a href="" style={{ color: "white" }}>환경설정</a></li>
                            <li><a href="" style={{ color: "white" }}>로그인</a></li>
                        </ui>
                    </nav>
                </div >
                <div className="search bar">
                    <nav class="searchbar">
                        <div class="searchbar_input">
                            <input class="inputbar"></input>
                            <button> 검색</button>
                        </div>
                        <ui class="searchbar_char">
                            <text>해시태그:&nbsp;&nbsp;&nbsp;</text>
                            <select name="job">
                                <option value="">소설</option>
                                <option value="학생">판타지</option>
                                <option value="회사원" selected="selected">만화</option>
                                <option value="기타">드라마</option>
                            </select>&nbsp;&nbsp;&nbsp;
                  
          <text>정렬:&nbsp;&nbsp;&nbsp;</text>
                            <select name="job">
                                <option value="">최신순</option>
                                <option value="학생">인기순</option>
                                <option value="회사원" selected="selected">평점순</option>
                                <option value="기타">검색순</option>
                            </select>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </ui>
                    </nav>
                    </div>
                <div className="test text">
                    <p>This page is for works that are complete </p>
                </div>
            </section>

          )

    }
}


export default FinishedWork;
