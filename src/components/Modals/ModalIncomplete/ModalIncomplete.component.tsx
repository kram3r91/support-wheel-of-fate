import React from "react";

import {
    Modal,
    Backdrop,
    Fade,
    Paper
} from '@material-ui/core';

import "./ModalIncomplete.component.css";

type Props = {
    closeModal: Function;
};

class ModalIncomplete extends React.Component<Props> {
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
                        <h2>Form incomplete</h2>
                        <p>Please fill in all the fields in the form.</p>
                    </Paper>
                </Fade>
            </Modal>
        )
    }
}
export default ModalIncomplete;