import React, { useState, useEffect } from "react";
import { Table, InputGroup, FormControl, Button } from "react-bootstrap";
import API from "../utils/API";

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

  //   console.log(budgetItem);
  console.log(allBudgetItems);
  return (
    <div>
      <div>
        <InputGroup className='mb-3'>
          <InputGroup.Prepend>
            <InputGroup.Text id='inputGroup-sizing-default'>
              Description
            </InputGroup.Text>
          </InputGroup.Prepend>

          <FormControl
            onChange={updateUserCredentials}
            name='description'
            aria-label='Default'
            aria-describedby='inputGroup-sizing-default'
          />
        </InputGroup>
        <InputGroup className='mb-3'>
          <InputGroup.Prepend>
            <InputGroup.Text id='inputGroup-sizing-default'>
              Type
            </InputGroup.Text>
          </InputGroup.Prepend>

          <FormControl
            onChange={updateUserCredentials}
            name='type'
            aria-label='Default'
            aria-describedby='inputGroup-sizing-default'
          />
        </InputGroup>
        <InputGroup className='mb-3'>
          <InputGroup.Prepend>
            <InputGroup.Text id='inputGroup-sizing-default'>
              Quantity
            </InputGroup.Text>
          </InputGroup.Prepend>

          <FormControl
            onChange={updateUserCredentials}
            name='quantity'
            aria-label='Default'
            aria-describedby='inputGroup-sizing-default'
          />
        </InputGroup>
        <InputGroup className='mb-3'>
          <InputGroup.Prepend>
            <InputGroup.Text id='inputGroup-sizing-default'>
              Unit Cost $
            </InputGroup.Text>
          </InputGroup.Prepend>

          <FormControl
            onChange={updateUserCredentials}
            name='unitCost'
            aria-label='Default'
            aria-describedby='inputGroup-sizing-default'
          />
        </InputGroup>
        <Button onClick={handleSubmit} variant='primary' type='submit' block>
          Submit
        </Button>
        <br />
      </div>
      <br />
      <div>
        <Table striped bordered hover size='sm'>
          <thead>
            <tr>
              <th>Description</th>
              <th>Type</th>
              <th>Quantity</th>
              <th>Unit cost</th>
              <th>Total Amount</th>
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
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Budget;
