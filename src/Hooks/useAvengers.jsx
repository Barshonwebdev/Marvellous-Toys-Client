import { useEffect, useState } from "react";

const useAvengers = () => {
    const [avengers, setAvengers] = useState([]);
    useEffect(() => {
      fetch(
        "https://marvellous-toys-server.vercel.app/shop?sub_category=Avengers"
      )
        .then((res) => res.json())
        .then((data) => setAvengers(data));
    }, []);
    return [avengers];
};

export default useAvengers;