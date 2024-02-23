import { Col, Row, Container, Alert } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";

function ContactForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const siteUrl = "/";

  return (
    <Container
      className="contact-form-section padding-md margin-inline-sm rounded"
      fluid
    >
      <Row className="padding-sm">
        <Col>
          <div
            className="details-button-home-contact-form"
            onClick={() => {
              window.location.href = siteUrl;
            }}
          >
            Back To Home
          </div>
        </Col>
      </Row>
      <Row className="padding-sm">
        <Col>
          <h1 className="text-align-center">Get in Touch</h1>
        </Col>
      </Row>
      <Row className="padding-sm">
        <Col>
          <Form
            onSubmit={async (e) => {
              e.preventDefault();
              console.log(e.currentTarget);
              try {
                const formData = {
                  options: e.currentTarget.formOptions.value,
                  organization: e.currentTarget.formOrganization.value,
                  name: e.currentTarget.formName.value,
                  email: e.currentTarget.formEmail.value,
                  emailBody: e.currentTarget.formEmailBody.value,
                };

                const result = await fetch(
                  "https://uqqwvytdo7.execute-api.us-east-2.amazonaws.com/Prod",
                  {
                    method: "POST",
                    mode: "cors",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                  }
                );

                if (result.ok) {
                  setSubmitSuccess(true);
                } else {
                  setSubmitSuccess(false);
                }

                setFormSubmitted(true);

                setTimeout(() => {
                  setFormSubmitted(false);
                  setSubmitSuccess(false);
                }, 3000);
              } catch (e) {
                console.log("error: ", e);
                setFormSubmitted(true);
                setSubmitSuccess(false);

                setTimeout(() => {
                  setFormSubmitted(false);
                  setSubmitSuccess(false);
                }, 3000);
              }
            }}
          >
            <Form.Group className="mb-3" controlId="formOptions">
              <Form.Label>How Can I Help You?</Form.Label>
              <Form.Select>
                <option>Job Opportunities</option>
                <option>Collaboration Opportunities</option>
                <option>Technical Support</option>
                <option>Feedback</option>
                <option>Request for Speaking Engagements</option>
                <option>Project Inquiries</option>
                <option>General Inquiries</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formOrganization">
              <Form.Label>Organization</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your organization's name."
              />
              <Form.Text className="text-muted">
                Enter the organization you are associated with if applicable.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your full name." />
              <Form.Text className="text-muted">Enter your name.</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                The email I can get back in contact with you at.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmailBody">
              <Form.Label>Details:</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here."
                style={{ height: "100px" }}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
      <Row>
        {formSubmitted ? (
          submitSuccess ? (
            <Alert key={"success"} variant={"success"}>
              Form sent successfully.
            </Alert>
          ) : (
            <Alert key={"danger"} variant={"danger"}>
              Failed to send form.
            </Alert>
          )
        ) : null}
      </Row>
    </Container>
  );
}

export default ContactForm;
