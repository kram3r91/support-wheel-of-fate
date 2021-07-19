import React from "react";

import {
    Modal,
    Backdrop,
    Fade,
    Paper
} from '@material-ui/core';

import "./ModalClear.component.css";

type Props = {
    closeModal: Function;
};

class ModalClear extends React.Component<Props> {
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
                        <h2>Cleared form</h2>
                        <p>You have successfully deleted all the information from the form</p>
                    </Paper>
                </Fade>
            </Modal>
        )
    }
}
export default ModalClear;