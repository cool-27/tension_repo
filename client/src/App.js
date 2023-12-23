import logo from './logo.svg';
import './App.css';
import Login from './components/login'
import Dashboard from './components/dashboard'
import { BarChart as MuiBarChart } from '@mui/x-charts/BarChart';
import { BrowserRouter , Route, Routes} from 'react-router-dom';


// const chartSetting = {
//   xAxis: [
//     {
//       label: 'Revenue For November 2019',
//     },
//   ],

//   width: 500,
//   height: 400,
// };

// const dataset = [
//   {
//     london: 1,
//     paris: 2,
//     newYork: 3,
//     zen_trades: 21000,
//     month: 'Everett',
//   },
//   {
//     london: 50,
//     paris: 52,
//     newYork: 78,
//     zen_trades: 18000,
//     month: 'Seattle',
//   },
//   {
//     london: 47,
//     paris: 53,
//     newYork: 106,
//     zen_trades: 10001,
//     month: 'Lynnwood',
//   },
//   {
//     london: 54,
//     paris: 56,
//     newYork: 92,
//     zen_trades: 7000,
//     month: 'Bothell',
//   },
//   {
//     london: 57,
//     paris: 69,
//     newYork: 92,
//     zen_trades: 6000,
//     month: 'Mukilteo',
//   },
//   {
//     london: 60,
//     paris: 63,
//     newYork: 103,
//     zen_trades: 4000,
//     month: 'Edmonds',
//   }
// ];

// const valueFormatter = (value) => `${value}mm`;

function App() {
  return (
    <>
 {/* <div className="row">
      <div className="col-6">
        <h1 className='ml-5 font-bold mt-5'>Revenue By Job Location</h1>
      <div className="ml-5 bg-white">
      <MuiBarChart
      dataset={dataset}
      yAxis={[{ scaleType: 'band', dataKey: 'month' }]}
      series={[{ dataKey: 'zen_trades', label: 'zen_trades ', valueFormatter }]}
      layout="horizontal"
      {...chartSetting}
    >
    </MuiBarChart>
      </div>
      </div>
      <div className="col-6">
      <h1 className='ml-5 font-bold mt-5'>Revenue By Job Type</h1>
      <div className="ml-5">
      <MuiBarChart
      dataset={dataset}
      yAxis={[{ scaleType: 'band', dataKey: 'month' }]}
      series={[{ dataKey: 'zen_trades', label: 'zen_trades ', valueFormatter }]}
      layout="horizontal"
      {...chartSetting}
    >
    </MuiBarChart>
      </div>

      </div>
    </div> */}
<BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
         
        </Routes>
      </BrowserRouter>   


    </>
  );
}

export default App;
