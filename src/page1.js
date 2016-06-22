import React from 'react';
import {Modal, Col, Button, FormGroup, ControlLabel, HelpBlock, FormControl, Radio, Table
,OverlayTrigger, Popover, Tooltip} from 'react-bootstrap'

var Hello = React.createClass({
  getInitialState() {
    return {
      superhero: '',
      sidekick: '',
      startDate: '',
      endDate: '',
      showModal: false,
      selectDateOther: '',
    };
  },

  getValidationState() {
    const length = this.state.superhero.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  },

  getValidationStateForDate() {
    const length = this.state.superhero.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  },

  handleChange(e) {
    this.setState({ superhero: e.target.value });
  },


  handleChangeSidekick(e) {
    this.setState({ sidekick: e.target.value });
  },

  handleChangeStartDate(e) {
    this.setState({ startDate: e.target.value });
  },

  handleChangeEndDate(e) {
    this.setState({ endDate: e.target.value });
  },

  handleClick(e){
    console.log('button clicked');
    this.setState({ showModal: true });
  },

  closeModal() {
    this.setState({ showModal: false });
  },

  save() {
    console.log('Save happened');
    this.setState({ showModal: false });
  },

  render: function() {
    let popover = <Popover id="myPopover" title="popover">very popover. such engagement</Popover>;
    let tooltip = <Tooltip id="myTooltip">wow.</Tooltip>;

    return (
        <div id="outerContainer">
          <form>

            <Col md={12}>
              <div>Field Inputs and Validation</div>
              <hr />
              <Col xs={12} md={4}>
                <Col xs={12} md={12}>
                  <FormGroup
                    controlId="formSuperheroText"
                    validationState={this.getValidationState()}
                  >
                    <ControlLabel>Favorite Comic Book Superhero</ControlLabel>
                    <FormControl
                      type="text"
                      value={this.state.superhero}
                      placeholder="e.g. Batman"
                      onChange={this.handleChange}
                    />
                    <FormControl.Feedback />
                    <HelpBlock>Validation is based on string length.</HelpBlock>
                  </FormGroup>
                </Col>
              </Col>
              <Col xs={12} md={4}>
                <FormGroup
                  controlId="formSidekickText"
                  validationState={this.getValidationState()}
                >
                  <ControlLabel>Favorite Comic Book Sidekick</ControlLabel>
                  <FormControl
                    type="text"
                    value={this.state.sidekick}
                    placeholder="e.g. Robin"
                    onChange={this.handleChangeSidekick}
                  />
                  <FormControl.Feedback />
                </FormGroup>
              </Col>
              <Col xs={12} md={4}>zxcv</Col>
            </Col>

            <Col md={12}>
              <div>Date Range Picker</div>
              <hr />
              <Col xs={12} md={4}>
                <Col md={6}>
                    <FormGroup
                      controlId="formStartDate"
                      validationState={this.getValidationStateForDate()}
                    >
                      <ControlLabel>Start Date</ControlLabel>
                      <FormControl
                        type="text"
                        value={this.state.startDate}
                        placeholder="mm/dd/yyyy"
                        onChange={this.handleChangeStartDate}
                      />
                      <FormControl.Feedback />
                    </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup
                    controlId="formEndDate"
                    validationState={this.getValidationStateForDate()}
                  >
                    <ControlLabel>End Date</ControlLabel>
                    <FormControl
                      type="text"
                      value={this.state.endDate}
                      placeholder="mm/dd/yyyy"
                      onChange={this.handleChangeEndDate}
                    />
                    <FormControl.Feedback />
                  </FormGroup>
                </Col>
              </Col>
              <Col xs={12} md={4}>
                <div id="dateSelectHelper">Select April 29 - May 4th</div>
              </Col>
              <Col xs={12} md={4}>section 2</Col>
            </Col>

            <Col md={12}>
              <div>Modal</div>
              <hr />
              <Col xs={12} md={4}>
                <Button bsStyle="primary" onClick={this.handleClick}>Open Modal</Button>
              </Col>
              <Col xs={12} md={4}>section 3</Col>
              <Col xs={12} md={4}>section 3</Col>
            </Col>
          </form>

          <Modal show={this.state.showModal} onHide={this.closeModal}>
            <Modal.Header closeButton>
              <Modal.Title>Open Modal</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div id="modalBodyOuterContainer">
                <Col xs={12} md={12}>
                  <Col md={8}>
                    <FormGroup controlId="formControlsSelect">
                      <ControlLabel>Select</ControlLabel>
                      <FormControl componentClass="select" placeholder="select">
                        <option value="select">Select</option>
                        <option value="Do">Do</option>
                        <option value="Ray">Ray</option>
                        <option value="Mi">Mi</option>
                        <option value="Fa">Fa</option>
                        <option value="So">So</option>
                        <option value="La">La</option>
                        <option value="Ti">Ti</option>
                        <option value="Do">Do</option>
                      </FormControl>
                    </FormGroup>
                  </Col>
                  <Col md={4}>
                    <FormGroup
                      controlId="formSelectDateOther"
                      validationState={this.getValidationStateForDate()}
                    >
                      <ControlLabel>Select Date</ControlLabel>
                      <FormControl
                        type="text"
                        value={this.state.selectDateOther}
                        placeholder="mm/dd/yyyy"
                        onChange={this.handleChangeStartDate}
                      />
                      <FormControl.Feedback />
                    </FormGroup>
                  </Col>
                </Col>
                <Col xs={12} md={12}>
                  <Radio checked readOnly>
                    Radio
                  </Radio>
                </Col>
                <Col xs={12} md={12}>
                  <Table striped bordered condensed hover>
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Larry the Bird</td>
                        <td>@twitter</td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.closeModal}>Cancel</Button>
              <Button onClick={this.save} bsStyle="primary">Save</Button>
            </Modal.Footer>
        </Modal>
        </div>
    );
  }
});

module.exports = Hello;
