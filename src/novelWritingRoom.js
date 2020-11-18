import React from 'react';

class novelWritingRoom extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            currPage: "novelwritingRoom",
        };

        this.setPage = this.setPage.bind(this);
    }

    setPage(page) {
        this.setState({ currPage: page });
    }
    render_menu(){
        return(<div>
            novel writing room
        </div>);
    }
    render(){
        

        return this.render_menu();
    }
}

export default novelWritingRoom;