import { Component } from "react";
import './employeers-form.css'

class EmployeesForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: '',
        }
    }

    onValueChange = ({target}) => {
        this.setState({
            [target.name]: target.value,
        })
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.onAdd(this.state.name, this.state.salary);
        this.setState({
            name: '',
            salary: ''
        })
    }

    render() {
        const {name, salary} = this.state;

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    onSubmit={this.onSubmit}
                    className="add-form d-flex">
                    <input
                       onChange={this.onValueChange}
                       type="text"
                       className="form-control new-post-label"
                       name={'name'}
                        value={name}
                        placeholder="Как его зовут?"/>
                    <input
                        onChange={this.onValueChange}
                       type="number"
                       className="form-control new-post-label"
                       name={'salary'}
                       value={salary}
                       placeholder="З/П в $?"/>

                    <button type="submit"
                            className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployeesForm;