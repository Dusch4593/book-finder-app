import React, { useEffect, useState } from "react";

function fetchResults(search_query) {
  const GOOD_READS_API_URL = "http://localhost:3000/api/search?q=";

  const [data, setData] = useState({ works: [], isFetching: false });

  useEffect(() => {
    const fetchWorks = async () => {
      try {
        setData({ works: data.works, isFetching: true });
        const response = await fetch(GOOD_READS_API_URL + search_query);
        const json = await response.json();
        const results = await json.results.work;
        setData({ works: results, isFetching: false });
      } catch (e) {
        console.log(e);
        setData({ works: data.works, isFetching: false });
      }
    };
    fetchWorks();
  }, []);

  if (data.isFetching) {
    console.log("fetching");
  } else {
    console.log(data.works);
  }

  return (
    data.works
  );
};

// export function fetchResults() {
//   return extractData
// };
