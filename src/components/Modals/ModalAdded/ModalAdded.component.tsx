import React from "react";

import {
    Modal,
    Backdrop,
    Fade,
    Paper
} from '@material-ui/core';

import "./ModalAdded.component.css";

type Props = {
    closeModal: Function;
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
                        <h2>Engineer added</h2>
                        <p>You have successfully added the new engineer.</p>
                    </Paper>
                </Fade>
            </Modal>
        )
    }
}
export default ModalAdded;