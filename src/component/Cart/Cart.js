import * as React from 'react';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import {Typography} from "@mui/material";
import Paper from "@mui/material/Paper";
import localState from "../SideBar/localState";
import Divider from '@mui/material/Divider';

const Cart = () => {

  const {screens, colors, designs} = localState

  return (
    <>
      <Box
        sx={{
          width: 300,
          flexGrow: 1,
          background: "#ffffff8c",
          backdropFilter: ' blur(12px)'
        }}
      >
        <Typography sx={{display: "flex", justifyContent: "center", flex: 1, mt: 6}} variant="h6" component="div"
                    color="#fff">
          ORDER SUMMARY
        </Typography>
        <Paper
          elevation={4}
          sx={{margin: '45px 16px 0 16px', minHeight: '80%', borderRadius: "6px"}}
        >
          <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
          >
            <Grid container item direction="column">
              <Grid item>
                <Typography sx={{display: "flex", justifyContent: "center"}} variant="h6" component="div"
                            color="primary">
                  MODEL
                </Typography>
              </Grid>
              <Grid container item>
                <Grid container direction="column" item sx={{width: '50%'}}>
                  <Grid item>
                    <img
                      style={{
                        maxWidth: '110px',
                        borderRadius: '6px',
                        margin: '20px 20px 0px 20px'
                      }}
                      src={localStorage.getItem("screen") ? screens[localStorage.getItem("screen")].url : screens[0].url}
                      srcSet={localStorage.getItem("screen") ? screens[localStorage.getItem("screen")].url : screens[0].url}
                      alt={localStorage.getItem("screen") ? screens[localStorage.getItem("screen")].name : screens[0].name}
                      loading="lazy"
                    />
                    <Typography align="center" style={{fontWeight: "bold"}}>
                      {localStorage.getItem("screen") ? screens[localStorage.getItem("screen")].name : screens[0].name}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item justifyContent="center" alignItems="center" sx={{width: '50%', display: 'flex'}} >
                  <Typography
                    variant='h5'
                    style={{
                      color: '#444',
                      display: "flex"
                    }}>
                    ${localStorage.getItem("screen") ? screens[localStorage.getItem("screen")].price : screens[0].price}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Divider />

            <Grid container item direction="column">
              <Grid item>
                <Typography sx={{display: "flex", justifyContent: "center"}} variant="h6" component="div"
                            color="primary">
                  COLOR
                </Typography>
              </Grid>
              <Grid container item>
                <Grid container direction="column" item sx={{width: '50%'}}>
                  <Grid item>
                    <img
                      style={{
                        maxWidth: '110px',
                        borderRadius: '6px',
                        margin: '20px 20px 0px 20px'
                      }}
                      src={localStorage.getItem("color") ? colors[localStorage.getItem("color")].url.url_fanera : colors[0].url.url_fanera}
                      srcSet={localStorage.getItem("color") ? colors[localStorage.getItem("color")].url.url_fanera : colors[0].url.url_fanera}
                      alt={localStorage.getItem("color") ? colors[localStorage.getItem("color")].name : colors[0].name}
                      loading="lazy"
                    />
                  </Grid>
                </Grid>
                <Grid item justifyContent="center" alignItems="center" sx={{width: '50%', display: 'flex'}} >
                  <Typography
                    variant='h6'
                    style={{
                      color: '#444',
                      display: "flex"
                    }}>
                    {localStorage.getItem("color") ? colors[localStorage.getItem("color")].name : colors[0].name}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Divider />

            <Grid container item direction="column">
              <Grid item>
                <Typography sx={{display: "flex", justifyContent: "center"}} variant="h6" component="div"
                            color="primary">
                  DESIGN
                </Typography>
              </Grid>
              <Grid container item>
                <Grid container direction="column" item sx={{width: '50%'}}>
                  <Grid item>
                    <img
                      style={{
                        maxWidth: '110px',
                        borderRadius: '6px',
                        margin: '20px 20px 0px 20px'
                      }}
                      src={localStorage.getItem("design") ? designs[localStorage.getItem("design")].url : designs[0].url}
                      srcSet={localStorage.getItem("design") ? designs[localStorage.getItem("design")].url : designs[0].url}
                      alt={localStorage.getItem("design") ? designs[localStorage.getItem("design")].name : designs[0].name}
                      loading="lazy"
                    />
                  </Grid>
                </Grid>
                <Grid item justifyContent="center" alignItems="center" sx={{width: '50%', display: 'flex'}} >
                  <Typography
                    variant='h6'
                    style={{
                      color: '#444',
                      display: "flex",
                      textAlign: 'center',
                    }}>
                    {localStorage.getItem("design") ? designs[localStorage.getItem("design")].name : designs[0].name}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>


          </Grid>
        </Paper>
      </Box>
    </>
  );
}
export default Cart
