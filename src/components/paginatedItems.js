import ReactPaginate from "react-paginate";
import React, { useEffect, useState } from "react";
import UserList from "./userList";
import { useSelector } from "react-redux";

function PaginatedItems({ itemsPerPage }) {
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  const [itemOffset, setItemOffset] = useState(0);
  const usersList = useSelector((state) => state.users.list);
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(usersList.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(usersList.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, usersList]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % usersList.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <UserList propCurrentItems={currentItems} />
      {currentItems && (
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
      )}
    </>
  );
}
export default PaginatedItems;
