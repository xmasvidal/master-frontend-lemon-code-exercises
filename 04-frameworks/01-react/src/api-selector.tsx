import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography} from "@mui/material";

export const ApiSelector: React.FC = () => {

    function setSelectedApi(apiName:string) {
        window.sessionStorage.setItem("selectedApi", apiName);
    }

    return (
        <>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Link onClick={(e) => setSelectedApi('github')} to="/github" className={"menuLink"} >
                        <Typography variant="h6" color="inherit" component="div">
                            GitHub
                        </Typography>
                    </Link>
                    <Link onClick={(e) => setSelectedApi('rick-and-morty')} to="/rick-and-morty" className={"menuLink"} >
                        <Typography variant="h6" color="inherit" component="div">
                            Rick & Morty
                        </Typography>
                    </Link>
                </Toolbar>
            </AppBar>
        </>
    )
}