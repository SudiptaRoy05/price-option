import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis } from "recharts";
import { Audio, DNA } from "react-loader-spinner";

export default function Axios() {
  const [phone, setPhone] = useState([]);

  const [loading, setLoding] = useState(true);

  useEffect(() => {
    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((data) => {
        const phoneData = data.data.data;
        const phonesWithFakeData = phoneData.map((phone) => {
          const obj = {
            name: phone.phone_name,
            price: parseInt(phone.slug.split("-")[1]),
          };
          return obj;
        });
        console.log(phonesWithFakeData);
        setPhone(phonesWithFakeData);
        setLoding(false);
      });
  }, []);
  return (
    <div className="flex flex-col justify-center items-center">
      <DNA
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
      {loading && (
        <div className="flex justify-center">
          <Audio
            height="80"
            width="80"
            radius="9"
            color="green"
            ariaLabel="loading"
            wrapperStyle
            wrapperClass
          />
          )
        </div>
      )}
      <BarChart width={550} height={140} data={phone}>
        <Bar dataKey="price" fill="#8884d8" />
        <XAxis dataKey="name"></XAxis>
      </BarChart>
    </div>
  );
}
