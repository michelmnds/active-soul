import { useEffect } from "react";

export function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | Active Soul` : "Active Soul";
  }, [title]);
}
