import React, {Component} from 'react';
import axios from 'axios';

class DataRequest extends Component {
    loadData() {
        axios.get("data.json")
            .then(res => {
                return this.props.getData(res.data["users"])
            })
    }
    componentDidMount() {
        this.loadData();
        this.interval = setInterval(() => {
            this.loadData();
        }, 1000);
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

export default DataRequest;
