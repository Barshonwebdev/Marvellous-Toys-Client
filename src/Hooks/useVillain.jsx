import { useEffect, useState } from "react";

const useVillain = () => {
  const [villains, setVillains] = useState([]);
  useEffect(() => {
    fetch("https://marvellous-toys-server.vercel.app/shop?sub_category=Villain")
      .then((res) => res.json())
      .then((data) => setVillains(data));
  }, []);
  return [villains];
};

export default useVillain;
