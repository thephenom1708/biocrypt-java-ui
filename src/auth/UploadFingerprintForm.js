import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image'
import placeholderImg from '../assets/image-placeholder.png'
import { Button } from '@material-ui/core';

export default function UploadFingerprintForm() {
    const [selectedFile, setSelectedFile] = useState("");

    const fileChangeHandler = (event) => {
        setSelectedFile(URL.createObjectURL(event.target.files[0]));
    }

    return (
        <Form>
            <Form.File
                custom
                label="Choose Fingerprint"
                onChange={fileChangeHandler}
            />

            <br /><br />
            <div className="row">
                <div className="col-sm-12">
                    {
                        selectedFile?
                            <Image src={selectedFile} fluid />
                        :
                            <Image src={placeholderImg} fluid />
                    }
                </div>
            </div>
            <br />
            <div className="row">
                <div className="col-sm-2 offset-10">
                    <Button variant="contained" color="primary">Upload</Button>
                </div>
            </div>
        </Form>  
    );
}
