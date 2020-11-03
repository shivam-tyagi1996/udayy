import React, { Component } from 'react';
import { AppBar, Box, Button, Container, Grid, TextField, Typography } from '@material-ui/core';
import BrowserTab from '../components/BrowserTab';

class Browser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            browser1: '',
            browser2: '',
            textBox1: '',
            textBox2: '',
        }
    }

    onKeyUp1 = (e) => {
        if (e.keyCode === 13) {
            this.setState({ browser1: e.target.value });
        }
    }

    onKeyUp2 = (e) => {
        if (e.keyCode === 13) {
            this.setState({ browser2: e.target.value });
        }
    }

    onLogout = () => {
        const { history } = this.props;
        localStorage.clear();
        history.push('/');
    }


    render() {
        const { browser1, browser2 } = this.state;
        return (
            <Container style={{ marginTop: '10%' }}>
                <AppBar position="static" style={{ background: 'grey', minHeight: '100px' }}>
                    <Grid container style={{ marginTop: '1%' }}>
                        <Grid item sm={6} xs={12}>
                            <Grid container justify="space-between">
                                <Typography variant="h6">
                                    Name
                            </Typography>
                                <TextField placeholder="Enter url 1" variant="outlined" onChange={this.changeTextBox1} onKeyUp={this.onKeyUp1} />
                            </Grid>
                        </Grid>
                        <Grid item sm={6} xs={12} justify="space-between">
                            <Grid container justify="space-between">
                                <TextField placeholder="Enter url 2" variant="outlined" onChange={this.changeTextBox2} onKeyUp={this.onKeyUp2} />
                                <Button color="primary" variant="contained" onClick={this.onLogout}>
                                    Logout
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </AppBar>
                <Box>
                    <Grid container justify="space-between">
                        <Grid item xs={12} sm={6}>
                            <BrowserTab link={browser1} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <BrowserTab link={browser2} />
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        )
    }
}

export default Browser;
