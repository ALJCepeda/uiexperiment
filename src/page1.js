import React from 'react';
import {Col, Button, FormGroup, ControlLabel, HelpBlock, FormControl} from 'react-bootstrap'

var Hello = React.createClass({
  getInitialState() {
    return {
      superhero: '',
      sidekick: '',
      startDate: '',
      endDate: '',
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


  render: function() {
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
                <Button bsStyle="primary">Open Modal</Button>
              </Col>
              <Col xs={12} md={4}>section 3</Col>
              <Col xs={12} md={4}>section 3</Col>
            </Col>
          </form>
        </div>
    );
  }
});

module.exports = Hello;
