import React from "react";
import "./App.css";
import mondaySdk from "monday-sdk-js";
const monday = mondaySdk();

class App extends React.Component {
  constructor(props) {
    super(props);

    // Default state
    this.state = {
      settings: {},
      monthlyFixedCosts: 0,
      billableHoursPerMonth: 136,
      hourlyBillableRate: 0
    };
    
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    // TODO: set up event listeners
  }

  handleChange(event) {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }

  hourlyRate() { 
    let totalMonthlyCosts = this.state.monthlyFixedCosts / this.state.billableHoursPerMonth;
    let rate = parseFloat(totalMonthlyCosts) + parseFloat(this.state.hourlyBillableRate);
    return Math.round((rate + Number.EPSILON) * 100) / 100;
  }

  render() {
    return (
      <form>
      <h1>Your hourly rate is {this.hourlyRate()}</h1>
      <p>Enter monthly costs (such as rent, utilities, or phone).</p>
      <input
        type='number'
        name='monthlyFixedCosts'
        value={this.state.monthlyFixedCosts}
        onChange={this.handleChange}
      />
      <p>Enter billable hours per month. Account for about 15% non-billable tasks such as email, office work, and business development.</p>
      <input
        type='number'
        name='billableHoursPerMonth'
        value={this.state.billableHoursPerMonth}
        onChange={this.handleChange}
      />
      <p>Enter desired hourly rate.</p>
      <input
        type='number'
        name='hourlyBillableRate'
        value={this.state.hourlyBillableRate}
        onChange={this.handleChange}
      />
      </form>
    );
  }
}

export default App;
