import React from 'react';

class novelRoomList extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            currPage: "novelRoomList",
        };

        this.setPage = this.setPage.bind(this);
    }

    setPage(page) {
        this.setState({ currPage: page });
    }
    render_menu(){
        return(<div>
            novel room Lists
        </div>);
    }
    render(){
        

        return this.render_menu();
    }
}

export default novelRoomList;