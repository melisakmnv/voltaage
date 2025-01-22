import { useState, useEffect } from 'react'
import { Step, Stepper, StepLabel, TextField, StepContent } from '@mui/material'

export const Test = () => {

    const [activeStep, setActiveStep] = useState<number>(0)

    const names = ["eric", "melisa", "elise"]
    const [nameValue, setNameValue] = useState<string>("")

    const handleName = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => setNameValue(event.target.value)

    const handleNextStep = () => {
        if (filteredName.length) setActiveStep(currentStep => currentStep = 1)
    }


    const filteredName = names.filter((fname) => {
        if (nameValue === "") return null
        // return nameValue.includes(fname)
        return fname === nameValue
    })


    console.log({ filteredName })
    console.log({ activeStep })

    useEffect(() => {
        handleNextStep()
    }, [filteredName.length])

    return (
        <div>
            <Stepper activeStep={activeStep} orientation="vertical" >
                <Step>
                    <StepLabel>
                        Name
                    </StepLabel>
                    <StepContent TransitionProps={{ in: true }}>
                        <TextField autoFocus label="name" value={nameValue} onChange={handleName} />
                    </StepContent>
                </Step>
                <Step>
                    <StepLabel>
                        Name
                    </StepLabel>
                    <StepContent TransitionProps={{ in: true }}>
                        <TextField  label="name" />
                    </StepContent>
                </Step>
                <Step>
                    <StepLabel>
                        Name
                    </StepLabel>
                    <StepContent TransitionProps={{ in: true }}>
                        <TextField  label="name" />
                    </StepContent>
                </Step>
            </Stepper>
        </div>
    )
}
