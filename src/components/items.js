import React from "react";
import { ListGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
function Items({ currentItems, onDelete, onEdit }) {
  return (
    <div className="items">
      <ListGroup>
        {currentItems &&
          currentItems.map((item, index) => (
            <ListGroup.Item key={item.id} variant="dark" action>
              <Link to={`/user/${item.id}`}>{item.value}</Link>
              <span>
                <Button
                  style={{ marginRight: "10px" }}
                  variant="light"
                  onClick={() => onDelete(item.id)}
                >
                  Delete
                </Button>
                <Button variant="light" onClick={() => onEdit(index)}>
                  Edit
                </Button>
              </span>
            </ListGroup.Item>
          ))}
      </ListGroup>
    </div>
  );
}

export default Items;
