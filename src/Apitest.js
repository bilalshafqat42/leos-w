import React, { useState, useEffect } from "react";

const Apitest = () => {
  const [buildingDatas, setBuildingDatas] = useState([]);
  useEffect(() => {
    const fetchingData = async () => {
      const res = await fetch(
        "http://masterplan.leos.freemyip.com/API/GetUnits?DB=6000&PropertyNo=P10001"
      );
      const data = await res.json();
      console.log(data);
      setBuildingDatas(data);
    };
    fetchingData();
  }, []);
  return (
    <div>
      <p>
        {buildingDatas.map((buildingData) => (
          <>
            {buildingData.balconyArea}
            {buildingData.propertyName}
            {buildingData.status}
            {buildingData.balconyArea}
            {buildingData.balconyArea}
            {buildingData.balconyArea}
            <br />
          </>
        ))}
      </p>
    </div>
  );
};

export default Apitest;
