import EmployeersListItem from "../employeers-list-item/employeers-list-item";
import "./employeers-list.sass";

const EmployeersList = ({ data, onDelete, onToggleProperies }) => {
  const filteredElements = data.filter((salary) => salary.salary < 10000);
  const elements = filteredElements.map((item) => {
    const { id, ...itemProps } = item;

    return (
      <EmployeersListItem
        onToggleProperies={({ currentTarget }) => {
          onToggleProperies(id, currentTarget.getAttribute("data-toggle"));
        }}
        {...itemProps}
        key={id}
        onDelete={() => onDelete(id)}
      />
    );
  });

  return <div className="app-list list-group">{elements}</div>;
};

export default EmployeersList;
