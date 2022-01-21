import React from "react";
import Grid from "@mui/material/Grid";
import ButtonBase from "@mui/material/ButtonBase";
import style from './WizardHeaderStyle'

const WizardHeader = ({
                          activeStep,
                          handleChange,
                          tabs
                      }) => {
    const classes = style();
    const tabWidth = 100 / tabs.length;
    const indicatorLeft = activeStep * tabWidth;
    const indicatorStyle = {
        width: `${tabWidth}%`,
        left: `${indicatorLeft}%`
    };
    return (
        <Grid container className={classes.root}>
            {tabs.map((tab, index) => (
                <Grid item key={index} style={{ width: `${tabWidth}%` }}>
                    <ButtonBase
                        className={classes.tab}
                        onClick={handleChange(index)}
                    >
                        {tab}
                    </ButtonBase>
                </Grid>
            ))}

            <div style={indicatorStyle} className={classes.indicator}>
                <span>{tabs[activeStep]}</span>
            </div>
        </Grid>
    );
};
export default WizardHeader;
