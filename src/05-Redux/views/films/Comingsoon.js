import React, { useEffect } from "react";
import axios from "axios";

export default function Comingsoon() {
  useEffect(() => {
    axios({
      url: "https://movie.douban.com/j/new_search_subjects?sort=U&range=0,10&tags=&start=0",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "X-Content-Type-Options": "nosniff",
        "X-DAE-App": "movie",
        "X-DAE-Instance": "default",
        "X-Douban-Mobileapp": "0",
        "X-Xss-Protection": "1; mode=block",
      },
    }).then((res) => console.log(res));
  }, []);

  return <div>Comingsoon</div>;
}
