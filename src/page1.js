import React from 'react';
import {Modal, Col, Button, FormGroup, ControlLabel, HelpBlock, FormControl, Radio, Table, Glyphicon
,OverlayTrigger, Popover, Tooltip} from 'react-bootstrap'
import DatePicker from 'react-bootstrap-date-picker'

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

  handleChangeStartDate(value) {
    this.setState({ startDate: value });
  },

  handleChangeEndDate(value) {
    this.setState({ endDate: value });
  },

  handleChangeSelectDate(value){
    this.setState({ selectDateOther: value });
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
    let tooltip = <Tooltip id="myTooltip">Favorte comic book Superhero is used to tailor your payroll experience.</Tooltip>;

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
                    <ControlLabel>
                      Favorite Comic Book Superhero
                      <OverlayTrigger overlay={tooltip}>
                        <span id="glpyhContainer" className="glphyStyle">
                          <Glyphicon glyph="info-sign" />
                        </span>
                      </OverlayTrigger>
                    </ControlLabel>
                    <FormControl
                      type="text"
                      value={this.state.superhero}
                      placeholder="e.g. Batman"
                      onChange={this.handleChange}
                    />
                    <FormControl.Feedback />
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
              <Col xs={12} md={4}></Col>
            </Col>

            <Col md={12}>
              <div>Date Range Picker</div>
              <hr />
              <Col xs={12} md={4}>
                <Col md={6}>
                  <FormGroup>
                    <ControlLabel>Start Date</ControlLabel>
                    <DatePicker value={this.state.startDate} onChange={this.handleChangeStartDate} />
                  </FormGroup>
                </Col>
                <Col md={6}>
                <FormGroup>
                  <ControlLabel>End Date</ControlLabel>
                  <DatePicker value={this.state.endDate} onChange={this.handleChangeEndDate} />
                </FormGroup>
                </Col>
              </Col>
              <Col xs={12} md={4}>
                <div id="dateSelectHelper">Select April 29 - May 4th</div>
              </Col>
              <Col xs={12} md={4}></Col>
            </Col>

            <Col md={12}>
              <div>Modal</div>
              <hr />
              <Col xs={12} md={4}>
                <Button bsStyle="primary" onClick={this.handleClick}>Open Modal</Button>
              </Col>
              <Col xs={12} md={4}></Col>
              <Col xs={12} md={4}></Col>
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
                  <FormGroup>
                    <ControlLabel>Select Date</ControlLabel>
                    <DatePicker value={this.state.selectDateOther} onChange={this.handleChangeSelectDate} />
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
                        <td>01/01/2016</td>
                        <td>Simple Ceasar sniffed his sifter</td>
                        <td><Button>AAA</Button></td>
                      </tr>
                      <tr>
                        <td>06/12/15 - 06/15/15</td>
                        <td>Seized his knees</td>
                        <td><Button>AAA</Button></td>
                      </tr>
                      <tr>
                        <td>04/27/2015</td>
                        <td>And sneezed</td>
                        <td><Button>AAA</Button></td>
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
