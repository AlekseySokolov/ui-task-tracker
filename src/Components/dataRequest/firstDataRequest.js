import React, {Component} from 'react';
import axios from 'axios';

class FirstDataRequest extends Component {
    loadData() {
        axios.get("./data.json")
            .then(res => this.props.getData(res.data["users"]))
    }
    componentDidMount() {
        this.loadData();
    }
    render() {
        return (
            <></>
        )
    }
}

export default FirstDataRequest;
