import EmployeeList from './EmployeeList'
import EmployeeListProvider from '../contexts/EmployeeContext'


function App() {
  return (
    <div className="App">
      <div className="container-xl">
        <div className="table-responsive">
          <div className="table-wrapper">
            <EmployeeListProvider>
              <EmployeeList />
            </EmployeeListProvider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
