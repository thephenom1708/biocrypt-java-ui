import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image'
import placeholderImg from '../assets/image-placeholder.png'
import { Button } from '@material-ui/core';
import FileBase64 from 'react-file-base64';
import FingerprintsAPI from '../api/FingerprintsAPI';
import { useSelector } from 'react-redux';
import Spinner from '../utils/components/Spinner';
import { useToasts } from 'react-toast-notifications';

export default function RegisterFingerprintsForm() {
    const { addToast } = useToasts();
    const user = useSelector(state => state.auth.user);
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [isLoading, setLoading] = useState(false);

    const fileChangeHandler = (files) => {
        setSelectedFiles(files);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        setLoading(true);

        const fingerprints = selectedFiles.map((file, index) => {
            return {
                id: index, 
                base64: file.base64.split(",")[1]
            }
        });

        FingerprintsAPI.registerFingerprints(user.id, fingerprints).then(response => {
            addToast("Fingerprints registered successfully!", { appearance: 'success' });
        }, () => {
            addToast("Something went wrong!", { appearance: 'error' });
        }).then(setLoading(false));
    }

    return (
        <Form>{JSON.stringify(user)}
            <FileBase64
                multiple={true} 
                onDone={fileChangeHandler}
            />

            <br /><br />
            <div className="row">
                <div className="col-sm-4">
                    {
                        selectedFiles[0] ?
                            <Image src={selectedFiles[0].base64} fluid />
                            :
                            <Image src={placeholderImg} fluid />
                    }
                </div>
                <div className="col-sm-4">
                    {
                        selectedFiles[1] ?
                            <Image src={selectedFiles[1].base64} fluid />
                            :
                            <Image src={placeholderImg} fluid />
                    }
                </div>
                <div className="col-sm-4">
                    {
                        selectedFiles[2] ?
                            <Image src={selectedFiles[2].base64} fluid />
                            :
                            <Image src={placeholderImg} fluid />
                    }
                </div>
            </div>
            <br />
            <div className="row">
                <div className="col-sm-2 offset-10">
                    <Button variant="contained" color="primary" onClick={submitHandler}>
                        {isLoading? <Spinner /> : null }Upload
                    </Button>
                </div>
            </div>
        </Form>
    );
}
