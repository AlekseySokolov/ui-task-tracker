import React, {Component} from 'react';

class UpdateObjPerson extends Component {
    loadData() {
        this.props.getPerson(this.props.data)
    }
    componentDidMount() {
        this.loadData();
        this.interval = setInterval(() => {
            this.loadData();
        }, 60000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    render() {
        return (
            <></>
        )
    }
}

export default UpdateObjPerson;
