import React from "react";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";


const ControlButtons = ({isCoverClosed, closeCover, isPlayMode, changeMode, initCameraReset, isTweening}) => {

    return (
        <>
            <Box
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  position: 'absolute',
                  zIndex: 9,
                  background: "#e5e5e5",
                  width: '65%',
                  overflow: 'hidden'
                }}
            >
                <ButtonGroup
                    // orientation="vertical"
                    aria-label="vertical outlined button group"
                    style={{
                     margin: "10px 20px"
                    }}
                >
                    <Button
                        onClick={closeCover}
                        disabled={ isPlayMode || isTweening }
                        style={{minWidth:'150px', margin:' 0 20px', border: "1px solid #283593", borderRadius: '3px'}}
                    >
                        {isCoverClosed ? 'Open Cover' : 'Close Cover'}
                    </Button>
                    <Button
                        onClick={changeMode}
                        disabled={ isCoverClosed || isTweening }
                        style={{minWidth:'200px', margin:' 0 20px', border: "1px solid #283593", borderRadius: '3px'}}
                    >
                        {isPlayMode ? 'Play Mode' : 'Demonstration Mode'}
                    </Button>
                    <Button
                        onClick={initCameraReset}
                        style={{minWidth:'150px', margin:' 0 20px', border: "1px solid #283593", borderRadius: '3px'}}
                    >
                        Reset Camera
                    </Button>
                </ButtonGroup>
            </Box>
            </>
            );
        };

export default ControlButtons;
