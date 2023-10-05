import React, { useState } from 'react';
import "./Pager.css"

const Pager = (props) => {
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="pagination-container">
            {Array.from({ length: props.num }).map((_, index) => (
                <button
                    key={index}
                    className={currentPage === index + 1 ? 'active' : ''}
                    onClick={() => handlePageClick(index + 1)}
                >
                    {index + 1}
                </button>
            ))}
        </div>
    );
};

export default Pager;
