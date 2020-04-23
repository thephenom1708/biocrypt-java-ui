import React, { useState } from 'react'
import FileBase64 from 'react-file-base64';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image'
import placeholderImg from '../assets/image-placeholder.png'
import { Button } from '@material-ui/core';
import { useToasts } from 'react-toast-notifications';
import { useSelector } from 'react-redux';
import FingerprintsAPI from '../api/FingerprintsAPI';
import Spinner from '../utils/components/Spinner';

export default function UploadFingerprintForm() {
    const { addToast } = useToasts();
    const registeredFingerprints = useSelector(state => state.app.fingerprints);

    const [selectedFile, setSelectedFile] = useState("");
    const [isLoading, setLoading] = useState(false);

    const fileChangeHandler = (file) => {
        setSelectedFile(file);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        setLoading(true);

        const testFingerprint = {
            id: 0,
            base64: selectedFile.base64.split(",")[1]
        }

        FingerprintsAPI.verifyFingerprints(testFingerprint, registeredFingerprints).then(response => {
            addToast(response.message, { appearance: "success" });
        }, () => {
            addToast("Something went wrong! Please Try again!", { appearance: 'error' });
        }).then(setLoading(false));
    }

    return (
        <Form>
            {/* <Form.File
                custom
                label="Choose Fingerprint"
                onChange={fileChangeHandler}
            /> */}
            <FileBase64
                multiple={false}
                onDone={fileChangeHandler}
            />

            <br /><br />
            <div className="row">
                <div className="col-sm-12">
                    {
                        selectedFile ?
                            <Image src={selectedFile.base64} fluid />
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
