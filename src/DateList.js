import React, {Component} from 'react';
import Place from './Place';


class DateList extends Component {

    constructor(props){
        super(props);
    }
    state = {
        name: ''
    }

    render() {
        return (<div>
            <Place />
        </div>);
    }
}


export default DateList;