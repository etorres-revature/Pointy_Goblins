import React, { useState, useEffect } from "react";
import {
  Container,
  Table,
  InputGroup,
  FormControl,
  Button,
  FormGroup,
  Form,

  Dropdown
} from "react-bootstrap";
import API from "../utils/API";

import { Doughnut, Chart } from "react-chartjs-2";

function Budget() {
  const [budgetItem, setBudgetItem] = useState({
    description: "",
    type: "",
    quantity: "",
    unitCost: "",
  });

  useEffect(() => {
    API.getAllBudgetItems().then((result) => {
      setAllBudgetItems(result.data);
    });
  }, []);

  const [allBudgetItems, setAllBudgetItems] = useState([]);

  function updateUserCredentials(event) {
    const { name, value } = event.target;
    setBudgetItem({ ...budgetItem, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setAllBudgetItems([...allBudgetItems, budgetItem]);
    API.addBudgetItem(budgetItem).then((result) => {
      console.log("success");
    });
  }

  function deleteItem() {
    console.log("you clicked the button");
  }

  let costTotals = {
    travelAdmin: 0,
    tickets: 0,
    auto: 0,
    lodging: 0,
    food: 0,
    entertainment: 0,
    shopping: 0,
    petChildCare: 0,
    other: 0,
  };

  allBudgetItems.forEach((item) => {
    console.log(
      "🚀 ~ file: budget.js ~ line 56 ~ allBudgetItems.forEach ~ item",
      item
    );

    switch (item.type) {
      case "travelAdmin":
      case "tickets":
      case "auto":
      case "lodging":
      case "food":
      case "entertainment":
      case "shopping":
      case "petChildCare":
      case "other":
        costTotals[item.type] += item.unitCost;
        break;
      default:
        return;
    }
  });

  console.log(
    "🚀 ~ file: budget.js ~ line 53 ~ Budget ~ costTotals",
    costTotals
  );

  const costTotalsArrayForChartData = Object.values(costTotals);
  console.log(
    "🚀 ~ file: budget.js ~ line 83 ~ Budget ~ costTotalsArrayForChartData",
    costTotalsArrayForChartData
  );

  const totalBudgetCost = costTotalsArrayForChartData.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
  console.log(
    "🚀 ~ file: budget.js ~ line 85 ~ Budget ~ totalBudgetCost",
    totalBudgetCost
  );

  const chartData = {
    labels: [
      "Travel Admin",
      "Tickets",
      "Auto",
      "Lodging",
      "Food",
      "Entertainment",
      "Shopping",
      "Pet/Child Care",
      "other",
    ],
    datasets: [
      {
        data: costTotalsArrayForChartData,
        backgroundColor: [
          "green",
          "blue",
          "red",
          "yellow",
          "purple",
          "orange",
          "indigo",
          "violet",
          "brown",
        ],
        hoverBackgroundColor: [
          "green",
          "blue",
          "red",
          "yellow",
          "purple",
          "orange",
          "indigo",
          "violet",
          "brown",
        ],
      },
    ],
  };

  //   console.log(budgetItem);
  console.log(allBudgetItems);
  return (
    <div>
      {/* chart on the right half of page */}
      {/* <div className="col-md-6"> */}
      <div>
        <div
          className="chart-container mx-auto "
          style={{ position: "relative", height: "20rem", width: "20rem" }}
        >
          <Doughnut
            options={{
              maintainAspectRatio: false,
              legend: {
                position: "right",
              },
            }}
            data={chartData}
          />
        </div>
        <h3 className=" d-flex justify-content-center">
          Total Cost: <strong>{totalBudgetCost}</strong>
        </h3>
        <hr></hr>
        <h4 className="ml-5">Add additional costs below:</h4>
        <br></br>
      </div>

      {/* <div className="col-md-6"> */}
      <div>
        <Container className="mt-2">
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                Description
              </InputGroup.Text>
            </InputGroup.Prepend>

            <FormControl
              onChange={updateUserCredentials}
              name="description"
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
            />
          </InputGroup>
          {/* <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                Type
              </InputGroup.Text>
            </InputGroup.Prepend>

            <FormControl
              onChange={updateUserCredentials}
              name="type"
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
            />
          </InputGroup> */}
          <Form.Group>
            <Form.Control
              onChange={updateUserCredentials}
              name='type'
              as='select'
            >
              <option value='' selected>Choose Category...</option>
              <option value='travelAdmin'>travelAdmin</option>
              <option value='tickets'>Tickets</option>
              <option value='auto'>Auto</option>
              <option value='lodging'>Lodging</option>
              <option value='food'>Food</option>
              <option value='entertainment'>Entertainment</option>
              <option value='shopping'>Shopping</option>
              <option value='petChildCare'>Child/Pet Care</option>
              <option value='other'>Other</option>
            </Form.Control>
          </Form.Group>


          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                Quantity
              </InputGroup.Text>
            </InputGroup.Prepend>

            <FormControl
              onChange={updateUserCredentials}
              name="quantity"
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                Unit Cost $
              </InputGroup.Text>
            </InputGroup.Prepend>

            <FormControl
              onChange={updateUserCredentials}
              name="unitCost"
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
            />
          </InputGroup>
          <Button onClick={handleSubmit} variant="primary" type="submit" block>
            Submit
          </Button>
          <br />
        </Container>
        <br />

        <div>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Description</th>
                <th>Type</th>
                <th>Quantity</th>
                <th>Unit cost</th>
                <th>Total Amount</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {allBudgetItems &&
                allBudgetItems.map((item) => (
                  <tr>
                    <td>{item.description}</td>
                    <td>{item.type}</td>
                    <td>{item.quantity}</td>
                    <td>{item.unitCost}</td>
                    <td>{item.quantity * item.unitCost}</td>
                    <td>
                      <Button variant="danger" size="sm" onClick={deleteItem}>
                        X
                      </Button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default Budget;
