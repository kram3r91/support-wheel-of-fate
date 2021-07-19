import React from "react";

import {
    Container,
    Grid,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper
} from "@material-ui/core";

import ModalView from "../../components/Modals/ModalView/ModalView.component";
import style from "./Engineers.module.css";

type Props = {};

type State = {
    fullName: string;
    department: string;
    experience: string;
    showModalView: boolean;
};

class EngineersPage extends React.Component<Props, State> {
    constructor(props: Props){
        super(props);
        this.state = {
            fullName: "",
            department: "",
            experience: "",
            showModalView: false,
        };

        this.closeModalView = this.closeModalView.bind(this);
    }

    closeModalView() {
        this.setState({
            showModalView: false
        })
    }
    render() {
        const engineers = JSON.parse(localStorage.getItem("engineers") || "[]");
        const allEngineers: any[] = [];

        engineers.forEach((object: any, index: any) => {
            const key = index;
            const id = object.id;
            const fullName = object.fullName;
            const department = object.department;
            const experience = object.experience;

            allEngineers.push(
                <TableRow
                    key="id"
                    className={style["form-row"]}
                    onClick={() => {(
                        this.setState({
                            fullName: fullName,
                            department: department,
                            experience: experience,
                            showModalView: true
                        })    
                    )}}
                >
                    <TableCell>{id}</TableCell>
                    <TableCell>{fullName}</TableCell>
                </TableRow>
            )
        })
        return(
            <Container>
                <Grid container spacing={3}>
                    <Grid
                        item
                        xs={12}
                    >
                        <h3>Engineers page</h3>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                    >
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>ID</TableCell>
                                        <TableCell>Full name</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {allEngineers}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>
                {this.state.showModalView === true && (
                    <ModalView
                        closeModal={this.closeModalView}
                        fullName={this.state.fullName}
                        experience={this.state.experience}
                        department={this.state.department}
                    />
                )}
            </Container>
        )
    }
}

export default EngineersPage;