import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppRoutes from './Utils/AppRoutes'


export default function App() {
  const router = createBrowserRouter(AppRoutes)
  return (
    <div>
      <RouterProvider router={router} future={{v7_startTransition: true,}}/>
    </div>
  )
}


