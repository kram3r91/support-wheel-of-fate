import React from "react";

import {
    Container,
    Grid,
    FormControl,
    Select,
    TextField,
    InputLabel,
    MenuItem,
    Button
} from "@material-ui/core";

import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

import style from "./Add.module.css";

import ModalClear from "../../components/Modals/ModalClear/ModalClear.component";
import ModalIncomplete from "../../components/Modals/ModalIncomplete/ModalIncomplete.component";
import ModalAdded from "../../components/Modals/ModalAdded/ModalAdded.component";

type Props = {};

type State = {
    fullName: string;
    department: string;
    experience: string;
    showModalClear: boolean;
    showModalIncomplete: boolean;
    showModalAdded: boolean;
}
class AddEngineerPage extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            fullName: "",
            department: "",
            experience: "",
            showModalClear: false,
            showModalIncomplete: false,
            showModalAdded: false,
        };

        this.clearForm = this.clearForm.bind(this);
        this.addEngineer = this.addEngineer.bind(this);
        this.closeModalClear = this.closeModalClear.bind(this);
        this.closeModalIncomplete = this.closeModalIncomplete.bind(this);
        this.closeModalAdded = this.closeModalAdded.bind(this);
    }

    clearForm() {
        this.setState({
            fullName: "",
            department: "",
            experience: "",
            showModalClear: true,
        })
    }
    addEngineer() {
        const fullName = this.state.fullName;
        const department = this.state.department;
        const experience = this.state.experience;

        if( fullName !== "" && department !== "" && experience !== "" ) {

            var engineers = JSON.parse(localStorage.getItem("engineers") || "[]");
            var engineer = {"id": engineers.length+1, "fullName": fullName, "department": department, "experience": experience}

            engineers.push(engineer);

            localStorage.setItem("engineers", JSON.stringify(engineers));

            this.setState({
                fullName: "",
                department: "",
                experience: "",
                showModalAdded: true,
            })
        }else{
            this.setState({
                showModalIncomplete: true
            })
        }
    }

    closeModalClear() {
        this.setState({
            showModalClear: false
        })
    }
    closeModalIncomplete() {
        this.setState({
            showModalIncomplete: false
        })
    }
    closeModalAdded() {
        this.setState({
            showModalAdded: false
        })
    }
    render() {
        return(
            <Container>
                <Grid
                    container
                    spacing={3}
                >
                    <Grid
                        item
                        xs={12}
                    >
                        <h3>Add engineer</h3>
                    </Grid>
                </Grid>
                <form
                    className={style["addEngineer-form"]}
                >
                    <Grid
                        container
                        spacing={3}
                        justifyContent="center"
                    >
                        <Grid
                            item
                            xs={12}
                            sm={6}
                        >
                            <TextField
                                id="fullname"
                                label="Full name"
                                variant="outlined"
                                fullWidth
                                value={this.state.fullName}
                                onChange={(e) => {
                                    this.setState({
                                        fullName: e.target.value
                                    })
                                }}
                            />
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        spacing={3}
                        justifyContent="center"
                    >
                        <Grid
                            item
                            xs={6}
                            sm={3}
                        >
                            <FormControl
                                fullWidth
                                variant="outlined"
                            >
                                <InputLabel id="department">Department</InputLabel>
                                <Select
                                    labelId="department"
                                    id="department-outlined"
                                    value={this.state.department}
                                    label="Department"
                                    onChange={(e) => {
                                        this.setState({
                                            department: e.target.value as string
                                        })
                                    }}
                                >
                                    <MenuItem
                                        value=""
                                    >
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem
                                        value="frontend"
                                    >
                                        Frontend
                                    </MenuItem>
                                    <MenuItem
                                        value="backend"
                                    >
                                        Backend
                                    </MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid
                            item
                            xs={6}
                            sm={3}
                        >
                            <FormControl
                                fullWidth
                                variant="outlined"
                            >
                                <InputLabel id="experience">Experience</InputLabel>
                                <Select
                                    labelId="experience"
                                    id="experience-outlined"
                                    value={this.state.experience}
                                    label="Experience"
                                    onChange={(e) => {
                                        this.setState({
                                            experience: e.target.value as string
                                        })
                                    }}
                                >
                                    <MenuItem
                                        value=""
                                    >
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem
                                        value="junior"
                                    >
                                        Junior
                                    </MenuItem>
                                    <MenuItem
                                        value="mid"
                                    >
                                        Mid
                                    </MenuItem>
                                    <MenuItem
                                        value="senior"
                                    >
                                        Senior
                                    </MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>

                    <Grid
                        container
                        spacing={3}
                        justifyContent="center"
                    >
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            className={style["form-buttons"]}
                        >
                            <Button
                                variant="outlined"
                                color="secondary"
                                onClick={ () => {
                                    this.clearForm()
                                }}
                            >
                                <HighlightOffIcon fontSize="small" />
                                Clear form
                            </Button>
                            <Button
                                variant="outlined"
                                className={style["addEngineer-button"]}
                                onClick={ () => {
                                    this.addEngineer()
                                }}
                            >
                                <AddCircleOutlineIcon fontSize="small" />
                                Add engineer
                            </Button>
                        </Grid>
                    </Grid>
                </form>
                {this.state.showModalClear === true && (
                    <ModalClear
                        closeModal={this.closeModalClear}
                    />
                )}
                {this.state.showModalIncomplete === true && (
                    <ModalIncomplete
                        closeModal={this.closeModalIncomplete}
                    />
                )}
                {this.state.showModalAdded === true && (
                    <ModalAdded
                        closeModal={this.closeModalAdded}
                    />
                )}
            </Container>
        )
    }
}

export default AddEngineerPage;