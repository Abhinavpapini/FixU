"use client"
import React, { useEffect } from 'react';
import ServiceFormWrapper from "../components/ServiceFormWrapper";
import { useServices } from "../../contexts/ServicesContext";

const Book: React.FC = () => {
  const { refreshServices } = useServices();
  
  // Ensure we have the latest services when navigating to this page
  useEffect(() => {
    refreshServices();
  }, []);
  
  return (
    <ServiceFormWrapper />
  );
}

export default Book;