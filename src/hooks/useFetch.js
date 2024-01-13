import { useEffect, useState } from "react";
import { getStudent } from "../helpers/getStudent";

export const useFetch = () => {
    const [state, setState] = useState({
        data: [],
        isLoadingStudents: true,
    });

    const [isReload, setReload] = useState(false);
    const getFetch = async () => {
        setState({
            state: [],
            isLoadingStudents: true
        })

        const resp = await getStudent();
        setState({
            data: resp,
            isLoadingStudents: false
        })
    }

    useEffect(() => {
        getFetch();        
    }, [isReload ]);

    return {
        data: state.data,
        isLoadingStudents: state.isLoadingStudents,
        isReload,
        setReload,
        getFetch
    };
}