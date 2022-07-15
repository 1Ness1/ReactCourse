import './app.css';
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeersList from "../employeers-list/employeers-list";
import EmployeersForm from '../employeers-form/employeers-form'
const App = () => {
    return (
        <div className='app'>
            <AppInfo />

            <div className='search-panel'>
                <SearchPanel />
                <AppFilter />
                <EmployeersList />

                <EmployeersForm />
            </div>
        </div>
    );
}

export default App;