import "./app-info.sass";

const AppInfo = ({ allEmployeesLength, allEmployeesToEncrease }) => {
  return (
    <div className="app-info">
      <h1>Учет сотрудников в компании N</h1>
      <h2>Общее число сотрудников: {allEmployeesLength}</h2>
      <h2>Премию получат: {allEmployeesToEncrease}</h2>
    </div>
  );
};

export default AppInfo;
