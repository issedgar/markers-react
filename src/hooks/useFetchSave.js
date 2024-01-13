import { useState } from 'react'
import { saveStudent } from '../helpers/saveStudent';

export const useFetchSave = () => {

    const [student, setStudent] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const sendStudent = async ( target ) => {
        setIsLoading(true)
        const newStudent = await saveStudent(target);
        setStudent(newStudent)
        setIsLoading(false)
    }

    return {
        student,
        isLoading,
        sendStudent
    };

}
