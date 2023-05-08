import React from "react";
import Home from "../Home";
import MyAccount from "../MyAccount";
import MyOrder from "../MyOrder";
import MyOrders from "../MyOrders";
import SignIn from "../SignIn";
import "./App.css";

export default function App() {
  return (
    <div className="bg-red-400 text-black">
      <Home />
      <MyAccount />
      <MyOrder />
      <MyOrders />
      <SignIn />
    </div>
  );
}
