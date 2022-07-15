import EmployeersListItem from "../employeers-list-item/employeers-list-item";
import './employeers-list.css';

const EmployeersList = () => {
    return (
        <div className='app-list list-group'>
            <EmployeersListItem />
            <EmployeersListItem />
            <EmployeersListItem />
        </div>
    );
}

export default EmployeersList;