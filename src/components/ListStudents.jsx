import PropTypes from 'prop-types';

export const ListStudents = ({data, onDeleteStudent}) => {
    return (
        <table className="table table-striped table-hover">
            <thead>
                <tr>
                    <th scope="col">Primer nombre</th>
                    <th scope="col">Segundo nombre</th>
                    <th scope="col">Email</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map( (student) => (
                        <tr key={student.id}>
                            <td>{ student.firstName }</td>
                            <td>{ student.lastName }</td>
                            <td>{ student.email }</td>
                            <td>
                            <button 
                                type="button" 
                                onClick={ () => onDeleteStudent( student.id ) }                                
                                className="btn btn-danger">
                                Borrar
                            </button>

                            </td>
                        </tr>

                    ) )
                }
                
                
            </tbody>

        </table>
    );
}

ListStudents.propTypes = {
    data: PropTypes.array,
    onDeleteStudent: PropTypes.func.isRequired
}