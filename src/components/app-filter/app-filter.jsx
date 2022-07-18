import {Component} from "react";

import './app-filter.css'

class AppFilter extends Component {


    render() {
        const buttonsData = [
            {name: 'all', label: 'Все сотрудники'},
            {name: 'rise', label: 'На повышение'},
            {name: 'moreThousand', label: 'З/п больше 1000$'},
        ];

        const buttons = buttonsData.map(({name, label}) => {
            const active = this.props.filter === name;
            const className = active ? 'btn-light' : 'btn-outline-light'
            return (
                <button className={`btn ${className} `} type='button' onClick={() => this.props.onFilterSelect(name)} key={name}>
                    {label}
                </button>
            )
        })

        return (
            <div className='btn-group'>
                {buttons}

            </div>
        );
    }

}

export default AppFilter;