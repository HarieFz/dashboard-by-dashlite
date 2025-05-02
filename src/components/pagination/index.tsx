import ReactPaginate from "react-paginate";
import ArrowLeft from "../../assets/icons/arrow-left.svg?react";
import ArrowRight from "../../assets/icons/arrow-right.svg?react";

type PaginationProps = {
  pageCount: number;
  currentPage: number;
  onPageChange: (selectedPage: number) => void;
};

export default function Pagination({ pageCount, currentPage, onPageChange }: PaginationProps) {
  return (
    <div className="flex items-center justify-between mt-3.5 px-6.25">
      <p className="text-[#989898]">
        Showing {(currentPage + 1) * 6} of {pageCount * 6} Results
      </p>

      <div>
        <ReactPaginate
          breakLabel="..."
          nextLabel={<ArrowRight className="w-6 h-6" />}
          previousLabel={<ArrowLeft className="w-6 h-6" />}
          onPageChange={(e) => onPageChange(e.selected)}
          pageCount={pageCount}
          forcePage={currentPage}
          marginPagesDisplayed={1}
          pageRangeDisplayed={2}
          containerClassName="flex items-center gap-2.5 select-none"
          // LI wrapper
          pageClassName="bg-[#F6F6F6] rounded-[3px] transition-colors"
          activeClassName="!bg-[#EAEAEA] transition-colors"
          previousClassName="text-[#484848] w-6 h-6 cursor-pointer flex items-center justify-center"
          nextClassName="text-[#484848] w-6 h-6 cursor-pointer flex items-center justify-center"
          breakClassName="bg-[#F6F6F6] rounded-[3px] transition-colors"
          // A element (link) inside each LI
          pageLinkClassName="block px-3.25 py-1.75 text-[#989898] hover:text-[#484848] cursor-pointer text-sm"
          activeLinkClassName="!text-[#484848]"
          previousLinkClassName="block w-6 h-6 flex items-center justify-center"
          nextLinkClassName="block w-6 h-6 flex items-center justify-center"
          breakLinkClassName="block px-2.5 py-1.75 text-[#989898] cursor-pointer"
          disabledClassName="!text-[#989898] !cursor-not-allowed"
        />
      </div>
    </div>
  );
}
