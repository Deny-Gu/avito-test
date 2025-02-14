import { IPaginationProps } from "../types/IPaginationProps";
import { PaginationWrapper } from "./styles/style";

const ListPagination = ({ itemsPerPage, totalPosts, setCurrentPage, currentPage }: IPaginationProps) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    const paginate = (pageNumber: number, e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        setCurrentPage(pageNumber);
    };

    return (
        <nav>
            <PaginationWrapper>
                {pageNumbers.map((number) => (
                <li
                    key={number}
                    className={`page-item ${currentPage === number ? "active" : ""}`}
                >
                    <a
                    onClick={(e) => paginate(number, e)}
                    href="!#"
                    className="page-link"
                    >
                    {number}
                    </a>
                </li>
                ))}
            </PaginationWrapper>
        </nav>
    );
};

export default ListPagination