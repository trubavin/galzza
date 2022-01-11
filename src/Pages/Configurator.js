import React from 'react';
import LeftSideBar from "../component/SideBar/SideBar";
import Model3d from "../component/Model3d/Model3d";
import Box from "@mui/material/Box";

const Configurator = () => {

    return (
        <Box sx={{display: 'flex', flexDirection: 'row', height: 'calc(100vh - 64px)', overflow: "hidden"}}>
            <Box sx={{width: '35%',height: '100%', background: "#e6e6e6"}}>
               <LeftSideBar />
            </Box>
            <Box sx={{width: '65%', height: '100%',background: "#e6e6e6"}}>
                <Model3d/>
            </Box>
        </Box>
    );
};

export default Configurator;
