export interface IPaginationProps {
  itemsPerPage: number;
  totalPosts: number;
  setCurrentPage: (n: number) => void;
  currentPage: number;
}
