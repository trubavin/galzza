import React, {useState} from "react";
import classNames from "classnames";
import Grid from "@mui/material/Grid";
import ButtonBase from "@mui/material/ButtonBase";
import {withStyles} from "@mui/styles";
import {Typography} from "@mui/material";
import {useDispatch} from "react-redux";
import {updateColor} from "../../../redux/productSlicer";
import {Field} from "formik";
import styles from "../Colors/colorsstyles";


const Colors = ({ colors, handleChange }) => {
  const classes = styles()
    const [checked, setChecked] = useState(
        localStorage.getItem("color")
            ? JSON.parse(localStorage.getItem("color"))
            : 0
    );
    const dispatch = useDispatch()
    const handleChecked = (i) => (e) => {
        localStorage.setItem("color", i);
        setChecked(i);
        dispatch(updateColor(i))
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
            <Grid
                container
                justifyContent="center"
                alignItems="center"
                style={{width: '90%', margin: "10px auto",  height: 'calc(100% - 75px)'}}
            >
                <Typography
                    variant="h5"
                    gutterBottom
                    color="secondary"
                    align="center"
                    style={{padding: "0 8px", textTransform: "uppercase"}}
                >
                    Choose the Color
                </Typography>
                <Grid
                    container
                    item
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    style={{ width: '100%', height: 'calc(100% - 50px)', overflow: "auto"}}
                >
                    {colors.map((color, i) => (
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
                                        name="color"
                                        value={color.name}
                                        checked={checked === i}
                                        onChange={handleChange}
                                        onClick={handleChecked(i)}
                                        className={classes.input}
                                        required
                                    />
                                <div
                                    className={classes.itemInner}
                                    style={{backgroundImage: `url(${color.url.url_fanera})`}}
                                />
                            </ButtonBase>
                            <label htmlFor={color.name} className={labelClass(i)}>
                                {color.name}
                            </label>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
    );
};
export default withStyles(styles)(Colors);
