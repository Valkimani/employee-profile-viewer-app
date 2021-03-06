import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import RecordHeader from './RecordHeader';


class TableNav extends React.Component {

state={
    searchWord: "",
    filteredEmployees:[]
};
// Adding a compoundDidMount to make the app interact with the browser//
componentDidMount() {
    if (this.state.filteredEmployees.length < 1) {
        this.setState({
            filteredEmployees: this.props.employees
        })
        console.log(this.props.employees)
    }
}


// Adding a handle input change to update the app//
handleInputChange = event => {
    this.setState({
        searchTerm: event.target.value
    });
    let userTyped = event.target.value;
    const filteredList = this.props.employees.filter((item) => {
        let values = item.name + item.phone + item.email + item.dob;
        return values.indexOf(userTyped) !== -1;
    });
    this.setState({
        filteredEmployees: filteredList
    });
}
render () {
    return (
        <div>
            <form className ="form">
<input 
value={this.state.searchWord}
name="searchWord"
onChange={event => this.handleInputChange (event)}
type="text"
placeholder="Search"
/>
            </form>
            {this.state.filteredEmployees.length > 0 &&
            
            <RecordHeader empList={this.state.filteredEmployees} />
}
        </div>
    );
};
}



export default TableNav;