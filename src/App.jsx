import './App.css'
import { AddStudent } from './components/AddStudent'
import { ListStudents } from './components/ListStudents';
import { useDeleted, useFetch, useFetchSave } from './hooks';


function App() {

  const { isLoading, sendStudent } = useFetchSave();
  const { data, isLoadingStudents, isReload, setReload, getFetch } = useFetch();
  const { deleteStudent } = useDeleted();

  const onNewStudent = async (eventNew) => {
    await sendStudent(eventNew);
    setReload(!isReload);
  }

  const onDeleteStudent = async (eventNew) => {
    await deleteStudent(eventNew);
    getFetch();
  }


  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand">Crear un Maker</a>          
        </div>
      </nav>
      <AddStudent onNewStudent = { onNewStudent } />

      {
        isLoading && (
          <div className="alert alert-success" role="alert">
            Guardando usuario
          </div>
        )
      }
      {
        isLoadingStudents ? (
          <div className="alert alert-success" role="alert">
            Cargando usuarios ...
          </div>
        ) : <ListStudents data={ data } onDeleteStudent={ onDeleteStudent } />
      }

    </>
  )
}

export default App
