import { useForm } from "../hooks/useForm";
import PropTypes from 'prop-types';


export const AddStudent = ({ onNewStudent }) => {

    const { firstName, lastName, email, onInputChange, onResetForm } = useForm({
        firstName: '',
        lastName: '',
        email: ''
    })

    const onFormSubmit = ( event ) => {
        event.preventDefault();

        const newStudent = {            
            firstName,
            lastName,
            email            
        }

        onNewStudent(newStudent);
        onResetForm();

    }

    return (
        <div className="card" style={{ padding: "10px" }}>
            <div className="card-body">

                <form className="row row-cols-lg-auto g-3 align-items-center"
                    onSubmit={ onFormSubmit }>
                    <div className="col-12">
                        <div className="input-group">
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Primer nombre" 
                                name="firstName"
                                value={ firstName }
                                onChange={ onInputChange }
                                />
                        </div>
                    </div>

                    <div className="col-12">
                        <div className="input-group">
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Segundo nombre" 
                                name="lastName"
                                value={ lastName }
                                onChange={ onInputChange }
                                />
                        </div>
                    </div>

                    <div className="col-12">
                        <div className="input-group">
                            <input 
                                type="email" 
                                className="form-control" 
                                placeholder="Email" 
                                name="email"
                                value={ email }
                                onChange={ onInputChange }
                                />
                        </div>
                    </div>

                    <div className="col-12">
                        <button type="submit" className="btn btn-success">Guardar</button>
                    </div>
                </form>
            </div>
        </div>
    )

}

AddStudent.propTypes = {
    onNewStudent: PropTypes.func.isRequired
}