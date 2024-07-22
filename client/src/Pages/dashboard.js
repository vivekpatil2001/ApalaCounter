import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';
import { logoutUser } from '../Redux/User/userSlices';
import BarGraphWithDropdown from '../component/BarGraphWithDropdown';
import ChartWithDropdown from '../component/lineGraphSales';
import ChartofProducts from '../component/lineGraphProduct';
import ChartofVisitors from '../component/lineGraphVisitors';
import Chartofdonut from '../component/donutChart';
import { toast } from 'react-toastify';


const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = jwtDecode(token);
      setFullName(decodedToken.fullName);
    } else { // Redirect to login if no token found
    }
  }, [navigate]);

  const handleLogout = () => {
    dispatch(logoutUser());
    localStorage.removeItem('token');
    toast.error("Logout Successfully!")
    navigate('/');
  };

  return (
    <div className="bg-white border-[1px] mt-28 mx-6 rounded-lg shadow-lg">
      <div className="bg-teal-700 text-white p-4 rounded-t-lg flex justify-between items-center">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <div className="flex items-center space-x-4">
          <span className="text-sm">Online Orders | Hi, <span className="font-bold">{fullName}</span></span>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
          >
            LogOut
          </button>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <div className="p-8 w-[95vw] mt-4">
          <p className="mb-12 text-black text-xm font-semibold">
            Welcome to <span className="font-bold text-4xl text-gray-600">Apala Bazaar</span>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-purple-500 text-white p-6 rounded-lg">
              <h2 className="text-xl">Current Users</h2>
              <h3 className="text-2xl font-bold">500</h3>
              <p className="flex flex-row gap-2">
                Increased by 45% <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-graph-up" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M0 0h1v15h15v1H0zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07" />
                </svg>
              </p>
            </div>
            <div className="bg-orange-500 text-white p-6 rounded-lg">
              <h2 className="text-xl">Sales Today</h2>
              <h3 className="text-2xl font-bold">600</h3>
              <p className="flex flex-row gap-2">
                Above Average by 45% <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-graph-up" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M0 0h1v15h15v1H0zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07" />
                </svg>
              </p>
            </div>
            <div className="bg-blue-500 text-white p-6 rounded-lg">
              <h2 className="text-xl">Revenue today</h2>
              <h3 className="text-2xl font-bold">44400</h3>
              <p className="flex flex-row gap-2">
                More than 45% <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-graph-up" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M0 0h1v15h15v1H0zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07" />
                </svg>
              </p>
            </div>
            <div className="bg-red-500 text-white p-6 rounded-lg">
              <h2 className="text-xl">Total Visitors Today</h2>
              <h3 className="text-2xl font-bold">100</h3>
              <p className="flex flex-row gap-2">
                User Increased 45% <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-graph-up" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M0 0h1v15h15v1H0zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07" />
                </svg>
              </p>
            </div>
          </div>
        </div>
        <div className="flex m-20 mt-0 mb-20 rounded-md flex-row w-[90vw]">
          <BarGraphWithDropdown />
          <ChartWithDropdown />
        </div>
        <div className="flex mb-10 bg-white shadow-3xl rounded shadow-xl flex-row items-center justify-center w-[90vw]">
          <div>
            <ChartofProducts />
          </div>
          <div>
            <ChartofVisitors />
          </div>
          <div>
            <Chartofdonut />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
