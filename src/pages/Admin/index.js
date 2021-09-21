import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router";

import Header from "../../components/Header";
import LeftNav from "../../components/LeftNav";
import FrontendAuth from "../../components/FrontendAuth";


const Admin = () => {
  const user = useSelector((state) => {
    return state.loginReducer;
  });
  if (!user.id) {
    return <Redirect to="/login" />;
  }
  return <div></div>;
};

export default Admin;
