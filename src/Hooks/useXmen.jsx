import { useEffect, useState } from "react";

const useXmen = () => {
  const [xmen, setXmen] = useState([]);
  useEffect(() => {
    fetch(
      "https://marvellous-toys-server.vercel.app/shop?sub_category=X-Men"
    )
      .then((res) => res.json())
      .then((data) => setXmen(data));
  }, []);
  return [xmen];
};

export default useXmen;
