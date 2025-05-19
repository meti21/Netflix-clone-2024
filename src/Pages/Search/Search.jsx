import React from 'react'
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Search() {
  return (
    <div>
      <section className="internal-page-wrapper py-3">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12">
              <Navbar className="bg-body-tertiary justify-content-center mt-5">
                <Form className="d-flex">
                  <Form.Control
                    type="text"
                    placeholder="Search"
                    className="me-2"
                  />
                  <Button type="submit" style={{ backgroundColor: '#D81E27'}}>Submit</Button>
                </Form>
              </Navbar>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Search