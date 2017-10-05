import React from "react";
import NewAuditionForm from "./NewAuditionForm";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";

class NewAuditionControl extends React.Component {

  constructor(props) {
    super(props);
    this.showFormModal = this.showFormModal.bind(this);
    this.hideFormModal = this.hideFormModal.bind(this);
    this.state = {formModalIsShowing: false};
  }

  showFormModal() {
    this.setState({formModalIsShowing: true});
  }

  hideFormModal() {
    this.setState({formModalIsShowing: false});
  }

  render() {

    var buttonStyle = {
      marginLeft: "45%",
      marginBottom: "60px"
    };
    return (
      <div>
        <Button
            bsStyle="primary"
            bsSize="large"
            onClick={this.showFormModal}
            style={buttonStyle}>
                Add Audition
        </Button>
        <Modal
            show={this.state.formModalIsShowing}
            onHide={this.hideFormModal}
            bsSize="large">
          <Modal.Header>
            <Modal.Title>Add an Audition</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <NewAuditionForm
                hideFormAfterSubmission = {this.hideFormModal}/>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default NewAuditionControl;
