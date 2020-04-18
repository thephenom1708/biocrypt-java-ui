import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';

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
        </Form>  
    );
}
