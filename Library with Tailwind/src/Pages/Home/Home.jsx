import React from 'react'
import Header from "../../Components/Header/Header"
import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
    </>
  )
}
