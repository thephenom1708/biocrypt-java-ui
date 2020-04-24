import React, { useState } from 'react'
import { TextField } from '@material-ui/core'
import Spinner from '../utils/components/Spinner';
import AuthAPI from '../api/AuthAPI';
import { useDispatch } from 'react-redux';
import { getRegisteredFingerprints } from '../biocrypt/App.action';
import { useToasts } from 'react-toast-notifications';

export default function LoginForm({ incrementStepper }) {
    const { addToast } = useToasts();
    const dispatch = useDispatch();
    
    const [username, setUsername] = useState("");
    const [pin, setPin] = useState("");
    const [errors, setErrors] = useState({});
    const [isLoading, setLoading] = useState(false);

    const reset = () => {
        setUsername("");
        setPin("");
        setErrors({});
    }   

    const submitHandler = (event) => {
        event.preventDefault();
        setLoading(true);
        AuthAPI.login(username, pin).then(response => {
            reset();
            dispatch(getRegisteredFingerprints(response.user.id));
            incrementStepper();
            addToast("Credentials Verified!", { appearance: 'success' });
        }, err => {
            setErrors(err.errors);
        }).then(setLoading(false));
    }


    return (
        <form>
            <div className="form-group">
                <TextField fullWidth
                    required
                    type="text"
                    label="Username"
                    variant="outlined"
                    size="small"
                    value={username}
                    onChange={event => setUsername(event.target.value)}

                    error={errors.username ? true : false}
                    helperText={errors.username ? errors.username[0] : ""}
                />
            </div>
            <div className="form-group">
                <TextField fullWidth
                    required
                    type="password"
                    label="Pin"
                    variant="outlined"
                    size="small"
                    value={pin}
                    onChange={event => setPin(event.target.value)}

                    error={errors.pin ? true : false}
                    helperText={errors.pin ? errors.pin[0] : ""}
                />
            </div>
            <p className="text-center">
                <p className="error">
                    {errors['non_field_errors'] ? errors['non_field_errors'][0] : ""}
                </p>
                <br />
                <button type="submit" onClick={submitHandler} className="btn btn-primary">
                    {isLoading ? <Spinner /> : <i className="fa fa-sign-in"></i>} Log in
                </button>
            </p>
        </form>

    )
}
