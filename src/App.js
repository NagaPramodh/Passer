import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import {
  Container,
  Row,
  Col,
  Button,
  InputGroup,
  FormControl,
  ListGroup,
  Modal,
} from "react-bootstrap";

const App = () => {
  const [userInput, setUserInput] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userRole, setUserRole] = useState("");
  const [list, setList] = useState([{ id: 1, value: "task5" }]);
  const [addModal, showAddModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [editedIndex, setEditedIndex] = useState(null);

  const updateInput = (value) => {
    setUserInput(value);
  };

  const addItem = () => {
    if (userInput !== "") {
      const newItem = {
        id: Math.random(),
        value: userInput,
        email: userEmail,
        role: userRole,
      };
      console.log(newItem, "newItem");
      setList([...list, newItem]);
      setUserInput("");
      setUserEmail("");
      setUserRole("");
    }
  };

  const deleteItem = (key) => {
    const updatedList = list.filter((item) => item.id !== key);
    setList(updatedList);
  };

  const handleEdit = (index) => {
    setEditedIndex(index);
    setShowModal(true);
  };

  const handleSave = (editedTodo) => {
    if (editedTodo.trim() !== "") {
      const updatedTodos = [...list];
      updatedTodos[editedIndex].value = editedTodo;
      setList(updatedTodos);
    }
    setShowModal(false);
  };

  return (
    <Container>
      <Row
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "3rem",
          fontWeight: "bolder",
        }}
      >
        User Information
      </Row>

      <hr />
      <Row>
        <Col md={{ span: 5, offset: 4 }}>
          <InputGroup className="mb-2">
            <div style={{ display: "flex", flexDirection: "column" }}>
              <FormControl
                placeholder="add item . . . "
                size="lg"
                value={userInput}
                onChange={(e) => updateInput(e.target.value)}
                aria-label="add something"
                aria-describedby="basic-addon2"
              />
              <FormControl
                placeholder="add Email . . . "
                size="lg"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                aria-label="add something"
                aria-describedby="basic-addon2"
              />
              <FormControl
                placeholder="add Role . . . "
                size="lg"
                value={userRole}
                onChange={(e) => setUserRole(e.target.value)}
                aria-label="add something"
                aria-describedby="basic-addon2"
              />
            </div>
            <InputGroup>
              <Button variant="dark" className="mt-2" onClick={addItem}>
                ADD User
              </Button>
            </InputGroup>
          </InputGroup>
        </Col>
      </Row>
      <Row>
        {/* <Col md={{ span: 5, offset: 4 }}> */}
        <Col>
          <ListGroup>
            {list.map((item, index) => (
              <div key={index}>
                <ListGroup.Item
                  variant="dark"
                  action
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  {item.value}
                  <span>
                    <Button
                      style={{ marginRight: "10px" }}
                      variant="light"
                      onClick={() => deleteItem(item.id)}
                    >
                      Delete
                    </Button>
                    <Button variant="light" onClick={() => handleEdit(index)}>
                      Edit
                    </Button>
                  </span>
                </ListGroup.Item>
              </div>
            ))}
          </ListGroup>
        </Col>
      </Row>
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormControl
            placeholder="Edit item"
            value={list[editedIndex]?.value}
            onChange={(e) => {
              const editedTodo = e.target.value;
              setList((prevList) =>
                prevList.map((item, index) =>
                  index === editedIndex ? { ...item, value: editedTodo } : item
                )
              );
            }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={() => handleSave(list[editedIndex]?.value)}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default App;
