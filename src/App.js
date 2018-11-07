import React, { Component } from "react"
import "./App.css"
import { Formik, Form, Field } from "formik"
import { Persist } from "formik-persist"

class App extends Component {
  state = {
    firstName: "",
    lastName: ""
  }

  render() {
    return (
      <>
        <Formik onSubmit={values => this.setState(values)}>
          {props => (
            <Form style={{ display: "flex", flexDirection: "column" }}>
              <label htmlFor="firstName">First Name</label>
              <Field id="firstName" name="firstName" />
              <label htmlFor="lastName">Last Name</label>
              <Field id="lastName" name="lastName" />
              <button type="submit">Submit</button>
              <Persist name="person-form" />
            </Form>
          )}
        </Formik>
        {JSON.stringify(this.state)}
      </>
    )
  }
}

export default App
