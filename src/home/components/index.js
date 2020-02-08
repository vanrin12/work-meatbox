// @flow
import React, { memo, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { userHeadTable } from 'constants/tableHead';
import Table from 'components/Table';
import { Spinner } from 'react-bootstrap';

type Props = {
  getUserList: Function,
  userList: Array<{}>,
  isProcessing: boolean
};

const Home = ({ getUserList, userList, isProcessing }: Props) => {
  const totalCount = 20;
  useEffect(() => {
    getUserList();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="home-page">
      <h1>Users Management Test App</h1>
      {isProcessing ? (
        <div className="wrapper-loading">
          <Spinner
            animation="grow"
            role="status"
            className=""
            text=""
            variant="dark"
            size="lg"
          />
        </div>
      ) : (
        <>
          <Table tableHeads={userHeadTable} tableBody={userList} />
          <div className="wrapper-pagination">
            <ReactPaginate
              previousLabel="←"
              nextLabel="→"
              breakLabel={<span className="gap">...</span>}
              pageCount={Math.ceil(totalCount / 10)}
              // onPageChange={eventKey => handleActivePage(eventKey)}
              forcePage={0}
              containerClassName="pagination"
              disabledClassName="disabled"
              activeClassName="active"
              breakClassName="page-item"
              breakLinkClassName="page-link"
              pageClassName="page-item"
              pageLinkClassName="page-link"
              previousClassName="page-item"
              previousLinkClassName="page-link"
              nextClassName="page-item"
              marginPagesDisplayed={1}
              nextLinkClassName="page-link"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default memo<Props>(Home);
