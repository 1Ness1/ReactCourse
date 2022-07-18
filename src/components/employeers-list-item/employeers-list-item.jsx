import './employeers-list-item.css';

const EmployeersListItem = (props) => {
    const {name, salary, onDelete, onToggleProperies, increase, rise} = props;
    let constructorOfClassNames = 'list-group-item d-flex justify-content-between';
    if(increase) {
        constructorOfClassNames += ' increase';
    }

    if(rise) {
        constructorOfClassNames += ' like';
    }
    return (
        <li className={constructorOfClassNames}>
            <span onClick={onToggleProperies} data-toggle='rise' className="list-group-item-label">{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button
                    data-toggle='increase'
                    onClick={onToggleProperies}
                    type="button"
                    className="btn-cookie btn-sm ">
                    <i className="fas fa-cookie"/>
                </button>

                <button type="button"
                        onClick={onDelete}
                        className="btn-trash btn-sm ">
                    <i className="fas fa-trash" />
                </button>
                <i className="fas fa-star" />
            </div>
        </li>
    );
}

export default EmployeersListItem;