import React, { useState } from 'react'
import { Stepper, Step, StepLabel, StepContent, Button } from '@material-ui/core';
import LoginForm from './LoginForm';
import UploadFingerprintForm from './UploadFingerprintForm';
import Modal from '../utils/components/Modal';

export default function AuthStepper() {
    const steps = ['User Credentials', 'Verify User', 'Upload Fingerprint'];
    const [activeStep, setActiveStep] = useState(2);

    const getStepContent = (step) => {
        switch (step) {
            case 0:
                return <LoginForm />

            case 1:
                return "Result of verification";

            case 2:
                return (
                    <React.Fragment>
                        <Modal id={"upload-fingerprint-modal"}
                            modalTitle={"Upload Fingerprint"}
                            modalContent={<UploadFingerprintForm />}
                            modalLarge={true}
                        />

                        <Button variant="outlined" color="secondary"
                            data-toggle="modal" data-target="#upload-fingerprint-modal">
                            Upload Fingerprint
                        </Button>
                    </React.Fragment>
                );

            default:
                return null;
        }
    }

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((label, index) => (
                <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                    <StepContent>
                        {
                            getStepContent(index)
                        }
                    </StepContent>
                </Step>
            ))}
        </Stepper>
    );

}
