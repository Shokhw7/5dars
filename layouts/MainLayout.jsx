import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

import React from 'react'

function MainLayout() {
  return (
    <>
    <Navbar/>
    <main>
        <Outlet/>
    </main>
    </>
  )
}

export default MainLayout;