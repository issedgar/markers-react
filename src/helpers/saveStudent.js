export const saveStudent = async ( student ) => {
    const url = 'http://localhost:5102/api/markers/v1/students';
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(student)
    };

    const resp = await fetch( url, requestOptions );

    return resp;
}