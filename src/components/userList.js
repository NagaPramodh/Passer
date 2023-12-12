import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { addUser, deleteUser, updateUser } from "../redux/userSlice";
import { userData } from "../data/userData";
import Items from "../components/items";
const UserList = ({ propCurrentItems }) => {
  const [userInput, setUserInput] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userRole, setUserRole] = useState("");
  const [list, setList] = useState(userData);
  const [addModal, showAddModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [editedIndex, setEditedIndex] = useState(null);
  const dispatch = useDispatch();
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
      dispatch(addUser(newItem));
      setList([...list, newItem]);
      setUserInput("");
      setUserEmail("");
      setUserRole("");
      showAddModal(false);
    }
  };

  const deleteItem = (key) => {
    dispatch(deleteUser(key));
  };

  const handleAdd = () => {
    showAddModal(true);
  };

  const handleEdit = (index) => {
    setEditedIndex(index);
    setUserInput(propCurrentItems[index].value);
    setUserEmail(propCurrentItems[index].email);
    setUserRole(propCurrentItems[index].role);
    setShowModal(true);
  };

  const handleSave = () => {
    const updatedItem = {
      id: propCurrentItems[editedIndex].id,
      value: userInput || propCurrentItems[editedIndex].value,
      email: userEmail || propCurrentItems[editedIndex].email,
      role: userRole || propCurrentItems[editedIndex].role,
    };
    dispatch(updateUser(updatedItem));
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
        <Col>
          <Button variant="dark" className="mt-2 mb-2" onClick={handleAdd}>
            Add User
          </Button>
          <Modal show={addModal} onHide={() => showAddModal(false)} centered>
            <Modal.Header closeButton>
              <Modal.Title>Create User</Modal.Title>
            </Modal.Header>
            <Modal.Body>
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
              </InputGroup>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => showAddModal(false)}>
                Cancel
              </Button>
              <Button variant="primary" onClick={addItem}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </Col>
      </Row>
      <Row>
        <Col>
          <ListGroup>
            <Items
              currentItems={propCurrentItems}
              onDelete={(id) => deleteItem(id)}
              onEdit={(index) => handleEdit(index)}
            />
          </ListGroup>
        </Col>
      </Row>
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormControl
            placeholder="Edit User Name"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />

          <FormControl
            placeholder="Edit User Email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
          <FormControl
            placeholder="Edit User Role"
            value={userRole}
            onChange={(e) => setUserRole(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => handleSave()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default UserList;
