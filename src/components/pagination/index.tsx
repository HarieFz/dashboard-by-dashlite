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
      <p className="text-[#989898] desktop:text-base laptop:text-xs">
        Showing {(currentPage + 1) * 6} of {pageCount * 6} Results
      </p>

      <div>
        <ReactPaginate
          breakLabel="..."
          nextLabel={<ArrowRight className="desktop:text-xl laptop:text-4.25" />}
          previousLabel={<ArrowLeft className="desktop:text-xl laptop:text-4.25 px.25" />}
          onPageChange={(e) => onPageChange(e.selected)}
          pageCount={pageCount}
          forcePage={currentPage}
          marginPagesDisplayed={1}
          pageRangeDisplayed={2}
          containerClassName="flex items-center desktop:gap-2.5 laptop:gap-1.75 select-none"
          // LI wrapper
          pageClassName="bg-[#F6F6F6] rounded-[3px] transition-colors"
          activeClassName="!bg-[#EAEAEA] transition-colors"
          previousClassName="text-[#484848] cursor-pointer flex items-center justify-center desktop:w-6 desktop:h-6 laptop:w-4.25 laptop:h-4.25"
          nextClassName="text-[#484848] cursor-pointer flex items-center justify-center desktop:w-6 desktop:h-6 laptop:w-4.25 laptop:h-4.25"
          breakClassName="bg-[#F6F6F6] rounded-[3px] text-[#484848] cursor-pointer flex items-center justify-center desktop:w-8.5 desktop:h-8.5 laptop:w-5.75 laptop:h-6.25"
          // A element (link) inside each LI
          pageLinkClassName="block desktop:px-3.25 laptop:px-2.25 desktop:py-1.75 laptop:py-1.25 text-[#989898] hover:text-[#484848] cursor-pointer desktop:text-sm laptop:text-[10px]"
          activeLinkClassName="!text-[#484848]"
          previousLinkClassName="block flex items-center justify-center desktop:w-6 desktop:h-6 laptop:w-4.25 laptop:h-4.25"
          nextLinkClassName="block flex items-center justify-center desktop:w-6 desktop:h-6 laptop:w-4.25 laptop:h-4.25"
          breakLinkClassName="block desktop:px-3.25 laptop:px-3.25 desktop:py-1.75 laptop:py-1.25 text-[#989898] cursor-pointer"
          // disabled
          disabledClassName="!text-[#989898] !cursor-not-allowed"
        />
      </div>
    </div>
  );
}
