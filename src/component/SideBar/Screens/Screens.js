import React, {useState} from "react";
import classNames from "classnames";
import Grid from "@mui/material/Grid";
import ButtonBase from "@mui/material/ButtonBase";
import {withStyles} from "@mui/styles";
import {Typography} from "@mui/material";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import {Field} from "formik";
import {useDispatch} from "react-redux";
import {updateScreen} from "../../../redux/productSlicer";
import styles from "./screenstyles";



const Screens = ({ screens, handleChange }) => {
  const classes = styles()
    const [checked, setChecked] = useState(
        localStorage.getItem("screen")
            ? JSON.parse(localStorage.getItem("screen"))
            : 0
    );
    const dispatch = useDispatch()
    const handleChecked = (i) => (e) => {
        localStorage.setItem("screen", i);
        setChecked(i);
        dispatch(updateScreen(i))
    };

    const itemOuterClass = (i) =>
        classNames({
            [classes.mainClass]: true,
            [classes.checked]: checked === i
        });
    const labelClass = (i) =>
        classNames({
            [classes.mainLblClass]: true,
            [classes.LblChecked]: checked === i
        });
    return (
            <>
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
                        style={{padding: "0 8px", textTransform: "uppercase"}}
                    >
                        Choose the Screen Size
                    </Typography>
                    <Grid
                        container
                        item
                        justifyContent="center"
                        alignItems="center"
                        style={{width: '100%', height: 'calc(100% - 50px)', overflow: "auto"}}
                    >
                        {screens.map((screen, i) => (

                            <Grid
                                item
                                key={i}
                                justifyContent="center"
                                alignItems="center"
                                style={{display: "flex", flexDirection: "column"}}
                            >
                                <ButtonBase className={itemOuterClass(i)}>
                                        <Field
                                            type="radio"
                                            name="screen"
                                            value={screen.name}
                                            checked={checked === i}
                                            onChange={handleChange}
                                            onClick={handleChecked(i)}
                                            className={classes.input}
                                            id={screen.id}
                                            required
                                        />
                                    <Stack direction="row" spacing={2}>
                                        <Box>
                                            <div
                                                className={classes.itemInner}
                                                style={{backgroundImage: `url(${screen.url})`}}
                                            />
                                        </Box>
                                        <Box className={classes.price}>
                                            - ${screen.price}
                                        </Box>
                                    </Stack>
                                </ButtonBase>
                                <label htmlFor={screen.name} className={labelClass(i)}>
                                    {screen.name}
                                </label>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </>
    );
};
export default withStyles(styles)(Screens);
