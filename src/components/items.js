import React from "react";
import { ListGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../App.css";
function Items({ currentItems, onDelete, onEdit }) {
  return (
    <div className="items">
      <ListGroup className="user-item">
        {currentItems &&
          currentItems.map((item, index) => (
            <ListGroup.Item
              key={item.id}
              className="user-item-list-group"
              variant="dark"
            >
              <Link to={`/user/${item.id}`} className="user-item-link">
                {item.value}
              </Link>

              <span>
                <Button
                  style={{ marginRight: "10px" }}
                  variant="light"
                  // onClick={() => onDelete(item.id)}
                  onClick={(e) => {
                    e.stopPropagation();
                    onDelete(item.id);
                  }}
                >
                  Delete
                </Button>
                <Button
                  variant="light"
                  onClick={(e) => {
                    e.stopPropagation();
                    onEdit(index);
                  }}
                >
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
