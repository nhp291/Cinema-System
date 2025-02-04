import React, { useState } from "react";
import Layout from "../../containers/Layout_User";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import Alert from "../../components/Alert"; // Import Alert component
import "../../styles/user/Contact.scss";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [alert, setAlert] = useState<{ type: "success" | "error" | "info" | "warning"; message: string } | null>(null);

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    if (!formData.name) {
      setAlert({ type: "error", message: "Vui lòng nhập họ và tên!" });
      return false;
    }
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      setAlert({ type: "error", message: "Vui lòng nhập email hợp lệ!" });
      return false;
    }
    if (!formData.message) {
      setAlert({ type: "error", message: "Vui lòng nhập nội dung liên hệ!" });
      return false;
    }
    setAlert(null);
    return true;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setAlert({ type: "success", message: "Gửi liên hệ thành công!" });
      setFormData({ name: "", email: "", message: "" });
    }, 2000);
  };

  return (
    <Layout>
      <Container className="contact-form-container">
        <h2 className="text-center mb-4">Liên Hệ Với Chúng Tôi</h2>
        {/* Hiển thị alert */}
        <Alert
          show={alert !== null}
          type={alert?.type || "info"}
          message={alert?.message || ""}
          onClose={() => setAlert(null)}
        />
        <Form noValidate onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationName">
              <Form.Label>Họ và tên</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nhập họ và tên"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Nhập email của bạn"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Row>
          <Form.Group className="mb-3" controlId="validationMessage">
            <Form.Label>Nội dung</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Nhập nội dung liên hệ"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <div className="d-flex justify-content-center">
            <Button type="submit" className="btn-submit" disabled={isLoading}>
              {isLoading ? "Đang gửi..." : "Gửi Liên Hệ"}
            </Button>
          </div>
        </Form>
      </Container>
    </Layout>
  );
};

export default ContactForm;