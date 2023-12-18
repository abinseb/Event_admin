import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function Form_component() {
  return (
    <>
     <FloatingLabel
        controlId="floatingInput"
        label="Company/Institution Name"
        className="mb-3"
      >
        <Form.Control  placeholder="Name"  />
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Mobile Number"
        className="mb-3"
      >
        <Form.Control type="number" placeholder="+91 10 digit number" />
      </FloatingLabel>
      
    </>
  );
}

export default Form_component;