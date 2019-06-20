import React, {Component} from 'react';
import axios from 'axios';

class DataRequest extends Component {
    loadData() {
        axios.get("data.json")
            .then(res => {
             const test = (res.data["users"])
                 .filter(obj => obj.username === this.props.name)
                 .reduce((acc, value) => value ,{})
                  return this.props.getData(test)
            })
    }
    componentDidMount() {
        this.loadData();
        this.interval = setInterval(() => {
            this.loadData();
        }, 90000);
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
