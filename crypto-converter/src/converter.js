import React, { useEffect, useState } from "react";
import { Card, Form, Input, Select } from "antd";
function Converter() {
  const apiUrl = "https://api.coingecko.com/api/v3/exchange_rates";
  const defaultFromSelectValue = "Bitcoin";
  const defaultToSelectValue = "Ether";
  const [crytoList, setCryptoList] = useState([]);
  const [inputValue, setInputValue] = useState("0");
  const [fromSelectValue, setFromSelectValue] = useState(
    defaultFromSelectValue
  );
  const [toSelectValue, setToSelectValue] = useState(defaultToSelectValue);
  const [result, setResult] = useState("0");
  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    const response = await fetch(apiUrl);
    const jsonData = await response.json();
    const data = jsonData.rates;
    // const tempArray=[];
    // const obj=Object.entries(data)
    // // console.log(obj)
    // Object.entries(data).forEach(item=>{
    //     const tempObj={
    //         value:item[1].name,
    //         label:item[1].name,
    //         rate:item[1].value
    //     }
    //     tempArray.push(tempObj)

    // })
    // console.log(tempArray)
    const tempArray = Object.entries(data).map((item) => {
      return {
        //returning object
        value: item[1].name,
        label: item[1].name,
        rate: item[1].value,
      };
    });
    setCryptoList(tempArray);
  }
  useEffect(() => {
    if (crytoList.length === 0) return;
    const fromSelectRate = crytoList.find((item) => {
      return item.value === fromSelectValue;
    }).rate;
    const toSelectRate = crytoList.find((item) => {
      return item.value === toSelectValue;
    }).rate;
    const resultValue = (inputValue * toSelectRate) / fromSelectRate;
    setResult(resultValue.toFixed(4));
  }, [inputValue, fromSelectValue, toSelectValue]);

  return (
    <div className="container">
      <Card title={<h1>Crypto Convertor</h1>}>
        <Form size="large">
          <Form.Item>
            <Input
              onChange={(event) => {
                setInputValue(event.target.value);
              }}
            />
          </Form.Item>
        </Form>
        <div className="select-box">
          <Select
            style={{ width: "120px" }}
            onChange={(value) => {
              setFromSelectValue(value);
            }}
            defaultValue={defaultFromSelectValue}
            options={crytoList}
          />
          <Select
            style={{ width: "120px" }}
            onChange={(value) => {
              setToSelectValue(value);
            }}
            defaultValue={defaultToSelectValue}
            options={crytoList}
          />
        </div>
        <p>
          {inputValue} {fromSelectValue} = {result} {toSelectValue}
        </p>
      </Card>
    </div>
  );
}

export default Converter;
