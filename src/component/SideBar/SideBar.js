import React, {useState} from 'react';
import Paper from "@mui/material/Paper";
import WizardHeader from "./WizardHeader/WizardHeader";
import useStyles from "./styles"
import Button from "@mui/material/Button";
import Screens from "./Screens/Screens";
import Colors from "./Colors/Colors";
import Designs from "./Designs/Designs";
import Success from "./Sucess";
import { Formik, Form } from 'formik';
import localState from "./localState";
import CircularProgress from "@mui/material/CircularProgress";
import {useDispatch, useSelector} from "react-redux";
import {updateActiveStep} from "../../redux/productSlicer";
import Videos from "./Videos/Videos";


const steps = ['Screen', 'Color', 'Design', 'Video']


const {screens, colors, designs, videos} = localState;

function _renderStepContent(step, handleChange) {
    switch (step) {
        case 0:
            return <Screens screens={screens} handleChange={handleChange}/>
        case 1:
            return <Colors colors={colors} handleChange={handleChange}/>
        case 2:
            return <Designs designs={designs} handleChange={handleChange}/>
        case 3:
          return <Videos videos={videos} handleChange={handleChange}/>
        default:
            return <div>Not Found</div>
    }
}

const LeftSideBar = () => {
    const classes = useStyles()
    const activeStep = useSelector((state) => state.product.activeStep)
    const dispatch = useDispatch()
    const isLastStep = activeStep === steps.length - 1


    function _sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

    async function _submitForm(values, actions) {
        await _sleep(1000)

        actions.setSubmitting(false)
        dispatch(updateActiveStep(activeStep + 1))
        alert(JSON.stringify(localStorage, null, 2))
        localStorage.clear()
    }

    function _handleSubmit(values, actions) {
        if (isLastStep) {
            _submitForm(values, actions)
        } else {
            dispatch(updateActiveStep(activeStep + 1))
            actions.setTouched({})
            actions.setSubmitting(false)
            localStorage.setItem("step", activeStep + 1)
        }
    }

    function _handleBack() {
        dispatch(updateActiveStep(activeStep - 1))
        localStorage.setItem("step", activeStep - 1)
    }

    const handleChange = (index) => (e) => {
        dispatch(updateActiveStep(index))
        localStorage.setItem("step", index)
    };



    return (
        <>
            {activeStep === steps.length ? (
                <Success/>
            ) : (
                <Paper style={{width: '90%', margin: "10px auto", height: 'calc(100% - 80px)'}} elevation={6}
                       className="">
                    <WizardHeader
                        tabs={steps}
                        activeStep={activeStep}
                        handleChange={handleChange}
                        formSubmitted={isLastStep}
                    />
                    <Formik
                        initialValues={{screen:"", color:""}}
                        onSubmit={_handleSubmit}
                    >
                        {({isSubmitting, handleChange}) => (
                            <Form style={{height: 'calc(100% - 60px)'}}   >

                                    {_renderStepContent(activeStep, handleChange)}

                                    <div className={activeStep !== 0 ? classes.bottom_buttons : classes.bottom_button}>
                                        {activeStep !== 0 && (
                                            <Button onClick={_handleBack} className={classes.prevBtn}>
                                                Back
                                            </Button>
                                        )}
                                    <div className={classes.wrapper}>
                                        <Button
                                            disabled={isSubmitting}
                                            type="submit"
                                            variant="contained"
                                            color="primary"
                                            className={classes.nextBtn}
                                        >
                                            {isLastStep ? 'Place order' : 'Next'}
                                        </Button>
                                        {isSubmitting && (
                                            <CircularProgress
                                                size={24}
                                                className=""
                                            />
                                        )}
                                    </div>
                                    </div>
                            </Form>
                        )}
                    </Formik>
                </Paper>
            )}

        </>
    );
};

export default LeftSideBar;
