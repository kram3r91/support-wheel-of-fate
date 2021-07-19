import React from "react";

import {
    Modal,
    Backdrop,
    Fade,
    Paper
} from '@material-ui/core';

import "./ModalView.component.css";

type Props = {
    closeModal: Function;
    fullName: string;
    department: string;
    experience: string;
};

class ModalAdded extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
        this.handleClose = this.handleClose.bind(this);
    }
    handleClose() {
        this.props.closeModal()
    }
    render() {
        return (
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open
                onClose={this.handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in>
                    <Paper
                        className="modal-paper"
                    >
                        <h2>Name: {this.props.fullName}</h2>
                        <p>Department: {this.props.department}</p>
                        <p>Experience: {this.props.experience}</p>
                    </Paper>
                </Fade>
            </Modal>
        )
    }
}
export default ModalAdded;