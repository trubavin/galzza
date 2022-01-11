import React, { useState } from "react";
import classNames from "classnames";
import Grid from "@mui/material/Grid";
import ButtonBase from "@mui/material/ButtonBase";
import {withStyles} from "@mui/styles";
import {Typography} from "@mui/material";
import {Field} from "formik";
import {updateDesign} from "../../../redux/productSlicer";
import {useDispatch} from "react-redux";
import styles from "./designsstyles";

const Designs = ({  designs, handleChange }) => {
   const classes = styles()
    const [checked, setChecked] = useState(
        localStorage.getItem("design")
            ? JSON.parse(localStorage.getItem("design"))
            : 0
    );
    const dispatch = useDispatch()
    const handleChecked = (i) => (e) => {
        localStorage.setItem("design", i);
        setChecked(i);
        dispatch(updateDesign(i))
    };

    const itemOuterClass = (i) =>
        classNames({
            [classes.mainClass]: true,
            [classes.checked]: checked === i
        });
    // const labelClass = (i) =>
    //     classNames({
    //         [classes.mainLblClass]: true,
    //         [classes.LblChecked]: checked === i
    //     });
    return (
            <Grid
                container
                justifyContent="center"
                alignItems="center"
                style={{width: '90%', margin: "10px auto", height: 'calc(100% - 75px)'}}
            >
                <Typography
                    variant="h5"
                    gutterBottom
                    color="secondary"
                    align="center"
                    style={{ padding: "0 8px", textTransform: "uppercase" }}
                >
                    Choose the Cover Design
                </Typography>
                <Grid
                    container
                    item
                    justifyContent="center"
                    alignItems="center"
                    style={{width: '100%', height: 'calc(100% - 50px)', overflow: "auto"}}
                >
                    {designs.map((design, i) => (
                        <Grid
                            item
                            key={i}
                            justifyContent="center"
                            alignItems="center"
                            style={{ display: "flex", flexDirection: "column" }}
                        >

                            <ButtonBase className={itemOuterClass(i)}>
                                    <Field
                                        type="radio"
                                        name="screen"
                                        value={design.id}
                                        checked={checked === i}
                                        onChange={handleChange}
                                        onClick={handleChecked(i)}
                                        className={classes.input}
                                        id={design.id}
                                        required
                                    />
                                <div
                                    className={classes.itemInner}
                                    style={{ backgroundImage: `url(${design.url})` }}
                                />
                            </ButtonBase>
                            <label htmlFor={design.name} >
                                {design.name}
                            </label>
                                <Typography className={classes.categoryClass}>
                                    {design.category}
                                </Typography>
                        </Grid>
                    ))}
                </Grid>

            </Grid>
    );
};
export default withStyles(styles)(Designs);
