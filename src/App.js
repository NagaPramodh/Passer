import ReactPaginate from "react-paginate";
import React, { useEffect, useState } from "react";
import { userData } from "./data/userData";
import { ListGroup, Button } from "react-bootstrap";
import UserList from "./components/userList";

const items = userData;

// export function Items({ currentItems, onDelete, onEdit }) {
//   console.log(currentItems, "currentItems");
//   return (
//     <div className="items">
//       {currentItems &&
//         currentItems.map((item, index) => (
//           <ListGroup.Item key={item.id} variant="dark" action>
//             {item.value} || {item.role} || {item.email}
//             <span>
//               <Button
//                 style={{ marginRight: "10px" }}
//                 variant="light"
//                 onClick={() => onDelete(item.id)}
//               >
//                 Delete
//               </Button>
//               <Button variant="light" onClick={() => onEdit(index)}>
//                 Edit
//               </Button>
//             </span>
//           </ListGroup.Item>
//         ))}
//     </div>
//   );
// }
let itemsPerPage = 2;
function PaginatedItems() {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);

  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;

    setCurrentItems(items.slice(itemOffset, endOffset));

    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <UserList propCurrentData={currentItems} />
      <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </>
  );
}

const App = () => {
  return <PaginatedItems />;
};
export default App;
