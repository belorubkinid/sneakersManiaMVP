import React from 'react';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function InfoAlertMessage(props) {
  return (
    <div>
       <ToastContainer
      theme = {'dark'}
      style={{marginTop: '200px'}}
      position="top-center"
      autoClose={10000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      />
    </div>
  );
}

export default InfoAlertMessage;
