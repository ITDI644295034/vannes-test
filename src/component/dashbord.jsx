import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
function Dashbord() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3333/dashbord");
      setUser(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!user) {
    console.log(user);
    return <div>Loading</div>;
  }
  return (
    <>
      <>
        <div className="flex flex-col">
          {user.map((data, index) => (
            <>
              <div className="bg-green-300 m-2">
                <div key={index}>{data.major}{data.count}</div>
              </div>
            </>
          ))}
        </div>

        <div className="flex flex-col">
          {user.map((data, index) => (
            <>
              <div className="bg-green-300 m-2">
                <div key={index}>{data.major}{data.count}</div>
              </div>
            </>
          ))}
        </div>
      </>
    </>
  );
}

export default Dashbord;
