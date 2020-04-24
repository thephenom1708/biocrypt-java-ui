import React, { useState } from 'react'
import { Stepper, Step, StepLabel, StepContent, Button } from '@material-ui/core';
import Modal from '../utils/components/Modal';
import RegisterForm from './RegisterForm';
import RegisterFingerprintsForm from './RegisterFingerprintsForm';

export default function RegisterStepper() {
    const steps = ['Register New User', 'Register Fingerprints'];
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const getStepContent = (step) => {
        switch (step) {
            case 0:
                return <RegisterForm incrementStepper={handleNext}/>

            case 1:
                return (
                    <React.Fragment>
                        <Modal id={"register-fingerprints-modal"}
                            modalTitle={"Register Fingerprints"}
                            modalContent={<RegisterFingerprintsForm />}
                            modalLarge={true}
                        />

                        <Button variant="outlined" color="secondary"
                            data-toggle="modal" data-target="#register-fingerprints-modal">
                            Register Fingerprints
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
