import React ,{useState, useEffect}from "react";
import Chart from 'react-apexcharts';
import "../DoughnutChart/DoughnutChart.css";
const DoughnutChart=()=>{

    // const [contryname, setCountryname]= useState([]);
    // const [medal, setMedal]= useState([]);

    // useEffect( ()=>{
    //  const getdata= async()=>{
    //       const countryname=[];
    //       const getmedal=[];

    //     const reqData= await fetch("http://localhost/reactgraphtutorial/medals"); 
    //     const resData= await reqData.json();
    //     for(let i=0; i<resData.length; i++)
    //     {
    //         countryname.push(resData[i].country);
    //         getmedal.push(parseInt(resData[i].medals));
    //     }
    //     setCountryname(countryname);
    //     setMedal(getmedal);
     

    //  }
    //  getdata();
    // },[]);
    return(
        <div className="DoughnutChart">
            <Chart 
            type="donut"
            width={1000}
            height={420}
            series={[12,45,80,100]}
            // series={medal}
            options={{
                    
                labels: ["Part A", "Part B", "Part C", "Coding"], // Set the labels here
                plotOptions: {
                  
                  pie: {
                    
                    donut: {
                      labels: {
                        show: true,
                        total: {
                          show: true,
                          showAlways: true,
                          color: '#f90000',
                        }
                      }
                    }
                  }
                },
                dataLabels: {
                  enabled: true,
                },
                legend:{
                  fontSize: '20px',
                  markers: {
                    width: 20, // Increase the size of the legend pointer (color marker)
                    height: 20,
                },
               
               }
              }}
              
            
            />
    </div>
    );
}
export default DoughnutChart;