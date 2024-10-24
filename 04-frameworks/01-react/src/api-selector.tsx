import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography} from "@mui/material";

export const ApiSelector: React.FC = () => {
    return (
        <>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Link to="/list" className={"menuLink"} >
                        <Typography variant="h6" color="inherit" component="div">
                            GitHub
                        </Typography>
                    </Link>
                    <Link to="/rick-and-morty" className={"menuLink"} >
                        <Typography variant="h6" color="inherit" component="div">
                            Rick & Morty
                        </Typography>
                    </Link>
                </Toolbar>
            </AppBar>
        </>
    )
}