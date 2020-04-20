import React, { useState } from 'react'
import { Stepper, Step, StepLabel, StepContent, Button } from '@material-ui/core';
import UploadFingerprintForm from './UploadFingerprintForm';
import Modal from '../utils/components/Modal';
import RegisterForm from './RegisterForm';

export default function RegisterStepper() {
    const steps = ['Register New User', 'Upload Fingerprint'];
    const [activeStep, setActiveStep] = useState(0);

    
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    
    const handleReset = () => {
        setActiveStep(0);
    };

    const getStepContent = (step) => {
        switch (step) {
            case 0:
                return <RegisterForm incrementStepper={handleNext}/>

            case 1:
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
