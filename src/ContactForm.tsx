import { Col, Row, Container, Alert, Spinner } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState, useRef } from "react";
import Dompurify from "dompurify";
import checkFormSubmissionLimit from "./browserCookie";
import { fetchUserIP } from "./getUserData";

function ContactForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formSubmissionInProgress, setFormSubmissionInProgress] =
    useState(false);
  const siteUrl = "/";
  const myForm = useRef(null);
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  async function handleSubmit(e: any) {
    e.preventDefault();

    // Capture form values before awaiting fetchUserData
    const formOptions = e.currentTarget?.formOptions.value;
    const formOrganization = e.currentTarget?.formOrganization.value
      ? e.currentTarget?.formOrganization.value
      : "N/A";
    const formName = e.currentTarget?.formName.value;
    const formEmail = e.currentTarget?.formEmail.value;
    const formEmailBody = e.currentTarget?.formEmailBody.value;

    const isEmail = emailRegex.test(e.currentTarget?.formEmail.value);

    if (!isEmail) {
      alert("Invalid Email.");
      return;
    }

    if (!checkFormSubmissionLimit()) {
      alert("You have reached your max number of submissions for today.");
      return;
    }

    setFormSubmissionInProgress(true);

    try {
      const currentUserData = await fetchUserIP();
      // console.log(currentUserData);

      const sanitizedFormData = {
        options: Dompurify.sanitize(formOptions),
        organization: Dompurify.sanitize(formOrganization),
        name: Dompurify.sanitize(formName),
        email: Dompurify.sanitize(formEmail),
        emailBody: Dompurify.sanitize(formEmailBody),
        userIP: currentUserData,
      };

      const result = await fetch(
        "https://uqqwvytdo7.execute-api.us-east-2.amazonaws.com/Prod",
        {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(sanitizedFormData),
        }
      );
      if (result.ok) {
        setSubmitSuccess(true);
      } else {
        console.error("Failed to submit form:", result.statusText);
        setSubmitSuccess(false);
      }
      setFormSubmitted(true);
      if (myForm.current) {
        (myForm.current as HTMLFormElement).reset();
      }
      setTimeout(() => {
        setFormSubmitted(false);
        setSubmitSuccess(false);
        setFormSubmissionInProgress(false);
        window.location.href = "/";
      }, 3000);
    } catch (e) {
      console.log("error: ", e);
      setFormSubmitted(true);
      setSubmitSuccess(false);
      setTimeout(() => {
        setFormSubmitted(false);
        setSubmitSuccess(false);
        setFormSubmissionInProgress(false);
        alert(
          "Try again. If the problem persist reach out to the dev team on linkedin."
        );
      }, 3000);
    }
  }

  return (
    <Container
      className="contact-form-section padding-md margin-inline-md rounded"
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
          <Form ref={myForm} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formOptions">
              <Form.Label>How Can I Help You?</Form.Label>
              <Form.Select
                disabled={formSubmissionInProgress ? true : false}
                required
              >
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
                disabled={formSubmissionInProgress ? true : false}
              />

              <Form.Text className="text-muted">
                Enter the organization you are associated with if applicable.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your full name."
                required
                disabled={formSubmissionInProgress ? true : false}
              />
              <Form.Text className="text-muted">Enter your name.</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                required
                disabled={formSubmissionInProgress ? true : false}
              />
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
                required
                disabled={formSubmissionInProgress ? true : false}
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              disabled={formSubmissionInProgress ? true : false}
            >
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
        ) : formSubmissionInProgress ? (
          <Alert
            className="flex gap justify-content-center align-items-center"
            variant="info"
          >
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
            <b>Sending!</b>
          </Alert>
        ) : null}
      </Row>
    </Container>
  );
}

export default ContactForm;
