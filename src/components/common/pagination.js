import React from 'react';
import _ from 'lodash';

const Pagination = ({
  itemsCount, 
  pageSize, 
  onPageChange, 
  currentPage
}) => {
  
  const pageCount = Math.ceil(itemsCount / pageSize);
  const pages = _.range(1, pageCount + 1);

  return(
    <div>
      <ul className='pagination'>
        {pages.map(page => (
          <li
            className={currentPage === page ? 'active' : ''}
            key={page}
            onClick={() => onPageChange(page)}
          >
            {page}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pagination;