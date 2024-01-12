import { useEffect, useState } from "react";

const useAntihero = () => {
  const [antihero, setAntihero] = useState([]);
  useEffect(() => {
    fetch("https://marvellous-toys-server.vercel.app/shop?sub_category=Antihero")
      .then((res) => res.json())
      .then((data) => setAntihero(data));
  }, []);
  return [antihero];
};

export default useAntihero;
