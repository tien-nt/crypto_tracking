import {
    AppBar,
    Container,
    MenuItem,
    Toolbar,
    Typography,
    Select,
    createTheme,
    ThemeProvider
} from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core';
import { useNavigate } from "react-router-dom";
import { CryptoState } from "../CryptoContext";
const userStyles = makeStyles(() => ({
    title: {
        flex: 1,
        color: "gold",
        fontFamily: "Montserrat",
        fontWeight: "bold",
        cursor: "pointer"
    }
}));
const Header = () => {

    const classes = userStyles();
    const navigate = useNavigate();


    const { currency, setCurrency } = CryptoState();
    console.log(currency);

    const darkTheme = createTheme({
        palette: {
            primary: {
                main: "#fff",
            },
            type: "dark",
        },
    })
    return (
        <ThemeProvider theme={darkTheme}>


            <AppBar color='transparent' position='static'>
                <Container>
                    <Toolbar>
                        <Typography
                            className={classes.title}
                            onClick={() => navigate('/')}
                            variant='h6'
                        >Crypto Tracking</Typography>
                        <Select variant="outlined"
                            style={{ with: 100, height: 40, marginLeft: 15 }}
                            value={currency}
                            onChange={(e) => setCurrency(e.target.value)}>
                            <MenuItem value={"USD"}>USD</MenuItem>
                            <MenuItem value={"INR"}>INR</MenuItem>
                            <MenuItem value={"VND"}>VND</MenuItem>
                            <MenuItem value={"SGD"}>SGD</MenuItem>
                        </Select>
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
    );
};

export default Header;
