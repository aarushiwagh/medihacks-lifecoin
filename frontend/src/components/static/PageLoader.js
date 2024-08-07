import React from "react"; 

import LinearProgress  from '@material-ui/core/LinearProgress';
import Backdrop from '@material-ui/core/Backdrop';
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import '../../css/App.css';


export const PageLoader = () => (
    <div> 
        <Backdrop open className="backdrop-design">
            <center>
                <Box>
        
                    <br/>
                    <br/>
                    <Typography variant="h7" color="textSecondary">Connecting to the chain. Please check your connection.</Typography>
                    <br/>
                    <br/>
                    <LinearProgress color="secondary" />   
                </Box> 
            </center>
        </Backdrop> 
    </div>
) 