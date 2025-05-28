import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function useLogout() {
  let navigate = useNavigate();
  return () => {
    localStorage.clear();
    navigate("/");
    toast.success("🔒 Successfully logged out!");
  };
}
