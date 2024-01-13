export const getStudent = async () => {
    const url = 'http://localhost:5102/api/markers/v1/students';    
    const resp = await fetch( url );
    const data = await resp.json();
    const students = data._embedded.studentList;
    return students;
}