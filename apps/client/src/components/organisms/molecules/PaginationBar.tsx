import { PaginationBarContainer, PaginationPageButton } from "elements";
import { useEffect, useState } from "react";

interface PaginationBarProps {
  page: number;
  lastPage: number;
  callback: (page: number | "next" | "prev") => void;
}

export const PaginationBar: React.FC<PaginationBarProps> = ({
  page,
  lastPage,
  callback,
}) => {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    let pagesArray = [];
    for (let i = 1; i <= lastPage; i++) {
      pagesArray.push(i);
    }
    setPages(pagesArray);
  }, []);

  return (
    <PaginationBarContainer>
      {pages?.map(_page => (
        <PaginationPageButton
          active={_page === page}
          onClick={() => callback(_page)}
        >
          {_page}
        </PaginationPageButton>
      ))}
    </PaginationBarContainer>
  );
};
