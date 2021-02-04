import React from "react";
import "../styles/RecordHeader.css";
import Card from './Card';

class RecordHeader extends React.Component {
    state = {
        alphabetical: true,
        ascending: true,
        sortedEmployees: [],
        employees: []
    }
    componentDidMount() {
        console.log(this.props.employees)
        if (this.state.sortedEmployees.length < 1) {
            this.setState({
                sortedEmployees: this.props.employees
            })
        }
    }
    componentDidUpdate(prevProps) {
        if (this.props.employees !== prevProps.employees) {
            this.setState({
                sortedEmployees: this.props.employees
            })
        }
    }
    sortName = () => {
        let sortEmp = [];
        if (this.state.alphabetical) {
            sortEmp = this.props.employees.sort((a, b) => {
                var nameA = a.name.last.toLowerCase(), nameB = b.name.last.toLowerCase();
                if (nameA < nameB)
                    return -1
                if (nameA > nameB)
                    return 1
                return 0
            })
        } else {
            sortEmp = this.props.employees.sort((a, b) => {
                var nameA = a.name.last.toLowerCase(), nameB = b.name.last.toLowerCase();
                if (nameA > nameB)
                    return -1
                if (nameA < nameB)
                    return 1
                return 0
            })
        }
        this.setState({
            alphabetical: !this.state.alphabetical,
            sortedEmployees: sortEmp
        })
    }
    sortPhone = () => {
        let sortEmp = [];
        if (this.state.ascending) {
            sortEmp = this.props.employees.sort((a, b) => {
                var nameA = a.dob.phone, nameB = b.dob.phone
                if (nameA < nameB)
                    return -1
                if (nameA > nameB)
                    return 1
                return 0
            })
        } else {
            sortEmp = this.props.employees.sort((a, b) => {
                var nameA = a.dob, nameB = b.dob;
                if (nameA > nameB)
                    return -1
                if (nameA < nameB)
                    return 1
                return 0
            })
        }
        this.setState({
            ascending: !this.state.ascending,
            sortedEmployees: sortEmp
        })
    }
    render() {
        return (
            <div>
                <div className="header">
                    <div>Photo</div>
                    <div><p onClick={this.sortName} className="name">Name</p> </div>
                    {/* <div><p onClick={this.sortPhone} className="">Phone</p></div> */}
                    <div>Phone</div>
                    <div>E-mail</div>
                    <div>DOB</div>
                </div>
                {
                    this.state.sortedEmployees.length > 0 &&
                    this.state.sortedEmployees.map((item, index) => (
                            <Card
                                // image={item.picture.large}
                                first={item.name.first}
                                last={item.name.last}
                                phone={item.phone}
                                email={item.email}
                                dob={item.dob.date}
                                
                            />
                    ))
                }
            </div>
        );
    }
}
export default RecordHeader;