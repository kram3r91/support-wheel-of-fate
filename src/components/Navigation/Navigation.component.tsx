import React from "react";

import { Container, Grid, Button } from "@material-ui/core";

import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';

import "./Navigation.component.css";

class Navigation extends React.Component {
    render() {
        return (
        <div
            className="navigation-component"
        >
            <Container>
                <Grid
                    container
                    spacing={3}
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <Grid
                        item
                    >
                        <Button
                            onClick={() => (
                                window.location.href="/"
                            )}>
                            Support Wheel of Fate
                        </Button>
                    </Grid>
                    <Grid
                        item
                    >
                        <Button
                            onClick={() => (
                                window.location.href="/add-engineer"
                            )}>
                            <AddCircleIcon />
                            Add engineer
                        </Button>
                        <Button
                            onClick={() => (
                                window.location.href="/engineers"
                            )}
                        >
                            <SupervisedUserCircleIcon />
                            All engineers
                        </Button>
                        <Button
                            onClick={() => (
                                window.location.href="/bau"
                            )}
                        >
                            <CalendarTodayIcon />
                            BAU
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </div>
        )
    }
}
export default Navigation;