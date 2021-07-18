import React from "react";

import { Container, Grid } from "@material-ui/core";

class EngineersPage extends React.Component {
    render() {
        return(
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <h3>Engineers page</h3>
                    </Grid>
                </Grid>
            </Container>
        )
    }
}

export default EngineersPage;