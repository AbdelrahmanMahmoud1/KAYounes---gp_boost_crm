import React from 'react'
import  BarChart  from  "../components/reports/BarChart"
import  PieChart  from  "../components/reports/PieChart"

import { useState, useEffect } from "react";
import axios from "axios";
// const Data = [
//     {
//       id: 1,
//       year: 2016,
//       userGain: 80000,
//       userLost: 823
//     },
//     {
//       id: 2,
//       year: 2017,
//       userGain: 45677,
//       userLost: 345
//     },
//     {
//       id: 3,
//       year: 2018,
//       userGain: 78888,
//       userLost: 555
//     },
//     {
//       id: 4,
//       year: 2019,
//       userGain: 90000,
//       userLost: 4555
//     },
//     {
//       id: 5,
//       year: 2020,
//       userGain: 4300,
//       userLost: 234
//     }
//   ];

  

 
const Reports = () => {
    
    
    const [fetchcountry, setfetchcountry] = useState([]);
    const [fetchproductcount, setfetchproductcount] = useState([]);
    const [fetchproductmincount, setfetchproductmincount] = useState([]);
    const [fetchCustomerSegments, setfetchCustomerSegments] = useState([]);
    
      useEffect(() => {
        axios
            .get("http://45.241.172.171:8000/reports/countrycount")
            .then((response) => {
                console.log(response)
                setfetchcountry(response.data)
                ;})
        axios
            .get("http://45.241.172.171:8000/reports/productcount/")
            .then((response) => {
                console.log(response)
                setfetchproductcount(response.data)
                ;})

        axios
            .get("http://45.241.172.171:8000/reports/minproductcount/")
            .then((response) => {
                console.log(response)
                setfetchproductmincount(response.data)
                ;})

        axios
            .get("http://45.241.172.171:8000/reports/customersSegments/")
            .then((response) => {
                console.log(response)
                setfetchCustomerSegments(response.data)
                ;})


      },[])

    useEffect(() => {
        setChartData({
            labels: fetchcountry.map((data) => data.country), 
            datasets: [
              {
                label: "Users Gained ",
                data: fetchcountry.map((data) => data.count),
                backgroundColor: [
                  "rgba(75,192,192,1)",
                  "#ecf0f1",
                  "#50AF95",
                  "#f3ba2f",
                  "#2a71d0"
                ],
                borderColor: "black",
                borderWidth: 2
              }
            ]
      })
    },[fetchcountry])

    useEffect(() => {
        setChartData2({
            labels: fetchproductcount.map((data) => data.description), 
            datasets: [
              {
                label: "Users Gained ",
                data: fetchproductcount.map((data) => data.count),
                backgroundColor: [
                  "rgba(75,192,192,1)",
                  "#ecf0f1",
                  "#50AF95",
                  "#f3ba2f",
                  "#2a71d0"
                ],
                borderColor: "black",
                borderWidth: 2
              }
            ]
      })
    },[fetchproductcount])

    useEffect(() => {
        setChartData3({
            labels: fetchproductmincount.map((data) => data.description), 
            datasets: [
              {
                label: "Users Gained ",
                data: fetchproductmincount.map((data) => data.count),
                backgroundColor: [
                  "rgba(75,192,192,1)",
                  "#ecf0f1",
                  "#50AF95",
                  "#f3ba2f",
                  "#2a71d0"
                ],
                borderColor: "black",
                borderWidth: 2
              }
            ]
      })
    },[fetchproductmincount])
    

    useEffect(() => {
        setChartData4({
            labels: fetchCustomerSegments.map((data) => data.label), 
            datasets: [
              {
                label: "Users Gained ",
                data: fetchCustomerSegments.map((data) => data.the_count),
                backgroundColor: [
                  "rgba(75,192,192,1)",
                  "#ecf0f1",
                  "#50AF95",
                  "#f3ba2f",
                  "#2a71d0"
                ],
                borderColor: "black",
                borderWidth: 2
              }
            ]
      })
    },[fetchCustomerSegments])

      const [chartData, setChartData] = useState({
        labels: fetchcountry.map((data) => data.country), 
        datasets: [
          {
            label: "Users Gained ",
            data: fetchcountry.map((data) => data.count),
            backgroundColor: [
              "rgba(75,192,192,1)",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0"
            ],
            borderColor: "black",
            borderWidth: 2
          }
        ]
  });

      const [chartData2, setChartData2] = useState({
        labels: fetchproductcount.map((data) => data.description), 
        datasets: [
          {
            label: "Users Gained ",
            data: fetchproductcount.map((data) => data.count),
            backgroundColor: [
              "rgba(75,192,192,1)",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0"
            ],
            borderColor: "black",
            borderWidth: 2
          }
        ]
        
  }, []);

  const [chartData3, setChartData3] = useState({
    labels: fetchproductmincount.map((data) => data.description), 
    datasets: [
      {
        label: "Users Gained ",
        data: fetchproductmincount.map((data) => data.count),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0"
        ],
        borderColor: "black",
        borderWidth: 2
      }
    ]
    
  


}, []);

const [chartData4, setChartData4] = useState({
    labels: fetchCustomerSegments.map((data) => data.label), 
    datasets: [
      {
        label: "Users Gained ",
        data: fetchCustomerSegments.map((data) => data.count),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0"
        ],
        borderColor: "black",
        borderWidth: 2
      }
    ]
    
  


}, []);
   
    
      
  return (
    <div style={{ position: "relative", margin: "auto", width: "50vw" }} >
   
    <BarChart chartData={chartData} />
    <BarChart chartData={chartData2} />
    <BarChart chartData={chartData3} />
    <PieChart chartData={chartData4} />
    </div>
  )
}

export default Reports;



// Hibernating Customers
// Exceptional Customers
// Punctual Customers
// Recent Customers