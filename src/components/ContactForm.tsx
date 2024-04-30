import { Col, Row, Container, Alert, Spinner } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState, useRef, useEffect } from "react";
import Dompurify from "dompurify";
import { useForm } from "react-hook-form";
import checkFormSubmissionLimit from "../browserCookie";
import { fetchUserIP } from "../getUserData";
import { useNavigate } from "react-router-dom";

function ContactForm() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formSubmissionInProgress, setFormSubmissionInProgress] =
    useState(false);
  const siteUrl = "/";
  const myForm = useRef(null);
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const navigate = useNavigate();

  async function onSubmit(e: any) {
    const formOptions = e.formOptions;
    const formOrganization = e.formOrganization ? e.formOrganization : "N/A";
    const formName = e.formName;
    const formEmail = e.formEmail;
    const formEmailBody = e.formEmailBody;

    const isEmail = emailRegex.test(e.formEmail);

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
        // "https://uqqwvytdo7.execute-api.us-east-2.amazonaws.com/Prod",
        "https://8zhapv77l1.execute-api.us-east-2.amazonaws.com/Beta",
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
        // window.location.href = "/";
        navigate(siteUrl);
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
              navigate(siteUrl);
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
          <Form ref={myForm} onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formOptions">
              <Form.Label>How Can I Help You?</Form.Label>
              <Form.Select
                disabled={formSubmissionInProgress ? true : false}
                // required
                aria-invalid={errors.formOptions ? "true" : "false"}
                {...register("formOptions", { required: true })}
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
            {errors.formOptions && errors.formOptions.type === "required" && (
              <span role="alert" className="redText">
                <br></br> This is required
              </span>
            )}

            <Form.Group className="mb-3" controlId="formOrganization">
              <Form.Label>Organization</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your organization's name."
                disabled={formSubmissionInProgress ? true : false}
                aria-invalid={errors.formOrganization ? "true" : "false"}
                {...register("formOrganization")}
              />

              <Form.Text className="text-muted">
                Enter the organization you are associated with if applicable.
                {errors.formOrganization &&
                  errors.formOrganization.type === "required" && (
                    <span role="alert" className="redText">
                      <br></br>This is required
                    </span>
                  )}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your full name."
                // required
                disabled={formSubmissionInProgress ? true : false}
                aria-invalid={errors.formName ? "true" : "false"}
                {...register("formName", { required: true, maxLength: 30 })}
              />
              <Form.Text className="text-muted">
                Enter your name.
                {errors.formName && errors.formName.type === "required" && (
                  <span role="alert" className="redText">
                    <br></br>This is required
                  </span>
                )}
                {errors.formName && errors.formName.type === "maxLength" && (
                  <span role="alert" className="redText">
                    <br></br>Max length exceeded
                  </span>
                )}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                // required
                disabled={formSubmissionInProgress ? true : false}
                aria-invalid={errors.formEmail ? "true" : "false"}
                {...register("formEmail", { required: true })}
              />
              <Form.Text className="text-muted">
                The email I can get back in contact with you at.
                {errors.formEmail && errors.formEmail.type === "required" && (
                  <span role="alert" className="redText">
                    <br></br>This is required
                  </span>
                )}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmailBody">
              <Form.Label>Details:</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here."
                style={{ height: "100px" }}
                // required
                disabled={formSubmissionInProgress ? true : false}
                aria-invalid={errors.formEmailBody ? "true" : "false"}
                {...register("formEmailBody", { required: true })}
              />
              <Form.Text>
                {errors.formEmailBody &&
                  errors.formEmailBody.type === "required" && (
                    <span role="alert" className="redText">
                      This is required<br></br>
                    </span>
                  )}
              </Form.Text>
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
