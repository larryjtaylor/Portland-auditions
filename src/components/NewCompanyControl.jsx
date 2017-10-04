import React from "react";
import NewCompanyForm from "./NewCompanyForm";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";

class NewCompanyControl extends React.Component {

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
    }
    return (
      <div>
        <Button
            bsStyle="primary"
            bsSize="large"
            onClick={this.showFormModal}
            style={buttonStyle}>
                Add Company
        </Button>
        <Modal
            show={this.state.formModalIsShowing}
            onHide={this.hideFormModal}
            bsSize="large">
          <Modal.Header>
            <Modal.Title>Add a Company</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <NewCompanyForm
                hideFormAfterSubmission = {this.hideFormModal}/>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default NewCompanyControl;
