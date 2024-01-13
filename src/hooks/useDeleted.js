import { deleteStudentById } from "../helpers/deleteStudentById";

export const useDeleted = () => {

    const deleteStudent = async ( id ) => {
        await deleteStudentById(id);
    }    

    return {
        deleteStudent
    };
}