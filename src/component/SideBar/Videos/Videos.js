import React, { useState } from "react";
import classNames from "classnames";
import Grid from "@mui/material/Grid";
import ButtonBase from "@mui/material/ButtonBase";
import {withStyles} from "@mui/styles";
import {Typography} from "@mui/material";
import {Field} from "formik";
import {updateVideo} from "../../../redux/productSlicer";
import {useDispatch} from "react-redux";
import styles from "./videostyles";
import VideoPlayer from "./VideoPlayer/VideoPlayer";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";

const Videos = ({  videos, handleChange }) => {

    const classes = styles()

    const [checked, setChecked] = useState(
        localStorage.getItem("video")
            ? JSON.parse(localStorage.getItem("video"))
            : 0
    );

    const [open, setOpen] = useState(false)
    const handleModalOpen = () => setOpen(true)
    const handleModalClose = () => setOpen(false)

    const dispatch = useDispatch()
    const handleChecked = (i) => (e) => {
        localStorage.setItem("video", i);
        setChecked(i);
        dispatch(updateVideo(i))
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
    const itemPlayClass = (i) =>
        i>0
        ?
        classNames({
          [classes.iconPlay]: true,
          [classes.playChecked]: checked === i
        })
        : null
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
                    Choose the Video
                </Typography>
                <Grid
                    container
                    item
                    justifyContent="center"
                    alignItems="center"
                    style={{width: '100%', height: 'calc(100% - 50px)', overflow: "auto"}}
                >
                    {videos.map((video, i) => (
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
                                        name="video"
                                        value={video.id}
                                        checked={checked === i}
                                        onChange={handleChange}
                                        onClick={handleChecked(i)}
                                        className={classes.input}
                                        id={video.id}
                                        required
                                    />
                                <div
                                    className={classes.itemInner}
                                    style={{ backgroundImage: `url(${video.url.url_preview})` }}
                                    >
                                  { i>0 &&
                                    <>
                                    <div className={itemPlayClass(i)} >
                                      <PlayCircleOutlineIcon
                                        style={{
                                        width: '70px',
                                        height: '70px',
                                        }}
                                        onClick={handleModalOpen}
                                      />
                                    </div>
                                    <VideoPlayer
                                    video={video}
                                    open={open}
                                    handleModalClose={handleModalClose}

                                    />
                                    </>
                                  }
                                </div>
                            </ButtonBase>
                            <label htmlFor={video.name} className={labelClass()}>
                                {video.name}
                            </label>
                                <Typography className={classes.categoryClass}>
                                    {video.category}
                                </Typography>
                        </Grid>
                    ))}
                </Grid>

            </Grid>
    );
};
export default withStyles(styles)(Videos);
