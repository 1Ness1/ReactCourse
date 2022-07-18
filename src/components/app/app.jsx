import { Component } from "react";

import "./app.sass";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeersList from "../employeers-list/employeers-list";
import EmployeersForm from "../employeers-form/employeers-form";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        { name: "John C.", salary: 800, increase: false, id: 1, rise: true },
        {
          name: "Alex    M. ",
          salary: 3000,
          increase: false,
          id: 2,
          rise: false,
        },
        { name: "Carl W..", salary: 5000, increase: true, id: 3, rise: false },
      ],
      term: "",
      filter: "all",
    };

    this.maxId = 4;
  }

  deleteCurrentItem = (id) => {
    this.setState(({ data }) => {
      const filteredData = data.filter((item) => item.id !== id);
      return { data: filteredData };
    });
  };

  onFilterSelect = (filter) => {
    this.setState({ filter });
  };

  addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      rise: false,
      increase: false,
      id: this.maxId++,
    };
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr,
      };
    });
  };

  filterPost = (items, filter) => {
    if (filter === "rise") {
      return items.filter((item) => item.rise === true);
    }

    if (filter === "moreThousand") {
      return items.filter((item) => item.salary > 1000);
    }

    return items;
  };

  onToggleProperies = (id, prop = "increase") => {
    this.setState(({ data }) => ({
      // const currentIndex = data.findIndex(element => element.id === id);
      // const primaryObject = data[currentIndex];
      // const newObject = {...primaryObject, increase: !primaryObject.increase};
      // const newArray = [
      //     ...data.slice(0, currentIndex), newObject, ...data.slice(currentIndex + 1)
      // ]
      // return {
      //     data: newArray
      // }

      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        }

        return item;
      }),
    }));
  };

  searchEmployees = (items, term) => {
    if (term.length === 0) return items;

    return items.filter((item) => {
      return item.name.indexOf(term) > -1;
    });
  };

  onUpdateSearch = (term) => {
    this.setState({ term });
  };

  render() {
    const allEmployeesLength = this.state.data.length;
    const allEmployeesToEncrease = this.state.data.filter(
      (item) => item.increase
    ).length;

    const { data, term, filter } = this.state;
    const visibleData = this.filterPost(
      this.searchEmployees(data, term),
      filter
    );
    return (
      <div className="app">
        <AppInfo
          allEmployeesLength={allEmployeesLength}
          allEmployeesToEncrease={allEmployeesToEncrease}
        />

        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter
            onFilterSelect={this.onFilterSelect}
            filter={filter}
            visibleAllData={this.visibleAllData}
          />
          <EmployeersList
            onToggleProperies={this.onToggleProperies}
            onDelete={this.deleteCurrentItem}
            data={visibleData}
          />

          <EmployeersForm onAdd={this.addItem} />
        </div>
      </div>
    );
  }
}

export default App;
