'use client'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export function ToastProvider() {
  return (
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss={false}
      draggable
      pauseOnHover={false}
      theme="dark"
      toastStyle={{
        background: "#1a1a1a",
        color: "#fff",
        borderRadius: "8px",
        padding: "16px",
        fontSize: "14px",
        fontWeight: "bold",
      }}
    />
  )
}
