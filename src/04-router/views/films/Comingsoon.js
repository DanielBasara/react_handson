import React, { useEffect } from "react";
import axios from "axios";

export default function Comingsoon() {
  useEffect(() => {
    axios
      .get(
        "/ajax/comingList?ci=1&limit=10&movieIds=&token=&optimus_uuid=3E7789F0F17211ECAFCBE3E675808687E413743B11814D569B78633E6BE09B97&optimus_risk_level=71&optimus_code=10"
      )
      .then((res) => {
        console.log(res);
      });
  }, []);

  return <div>Comingsoon</div>;
}
