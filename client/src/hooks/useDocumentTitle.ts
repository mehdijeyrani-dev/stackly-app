import { useEffect } from "react";

const useDocumentTitle = (title: string) => {
  useEffect(() => {
    document.title = `${title} - Stackly`;
  }, [title]);
};

export default useDocumentTitle;
