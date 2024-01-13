export const deleteStudentById = async ( id ) => {

    const url = 'http://localhost:5102/api/markers/v1/students';
    const requestOptions = {
        method: 'DELETE'        
    };
    await fetch( `${ url }/${ id }`, requestOptions );
    return true;
}