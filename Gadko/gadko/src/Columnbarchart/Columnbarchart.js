import ReactApexChart from 'react-apexcharts';
import "../Columnbarchart/Columnbarchart.css";
import { Provider } from 'react-redux';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Store from '../store';
// import store from '../store';

const Colmnbarchart = ({ screenSwitchCount, incrementScreenSwitch }) => {

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        incrementScreenSwitch();
        // localStorage.setItem('nofswitchscreen', JSON.stringify(screenSwitchCount) );
        // const storedData = JSON.parse(localStorage.getItem('nofswitchscreen'));
        // console.log(storedData+1)  ;
        console.log(`Screen switch count: ${screenSwitchCount + 1}`);
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [incrementScreenSwitch, screenSwitchCount]);

  return <>
    <Provider store={Store}>
      <div className="Colmnbarchart">
        <ReactApexChart
          options={{
            chart: {
              height: 350,
              type: 'bar',
            },
            xaxis: {
              categories: ["Grammar", "Programming", "Coding", "Code Mark"],
              position: 'top',
              axisBorder: {
                show: false
              },
              axisTicks: {
                show: false
              },
              crosshairs: {
                fill: {
                  type: 'gradient',
                  gradient: {
                    colorFrom: '#D8E3F0',
                    colorTo: '#BED1E6',
                    stops: [0, 100],
                    opacityFrom: 0.4,
                    opacityTo: 0.5,
                  }
                }
              },
              tooltip: {
                enabled: true,
              }
            },
            yaxis: {
              axisBorder: {
                show: false
              },
              axisTicks: {
                show: false,
              },
              labels: {
                show: false,
                formatter: function (val) {
                  return val + "%";
                }
              }
            },
          }}
          type="bar"
          height={350}
          width={500}
          series={[{
            name: 'Inflation',
            data: [3, 1, 5, 22],
          }]}
        />
      </div>
    </Provider>

  </>
};



const mapStateToProps = (state) => ({
  screenSwitchCount: state.yourReducerName.screenSwitchCount,
});


const mapDispatchToProps = {
  incrementScreenSwitch: () => ({ type: 'INCREMENT_SCREEN_SWITCH' }),
};


export default connect(mapStateToProps, mapDispatchToProps)(Colmnbarchart);
