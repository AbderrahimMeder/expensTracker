
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import TransactionAction from "@/components/dashboard/transactionAction";
import { useAuth } from "@/context/authContext";
import toast from "react-hot-toast";


export default function transactionCreate() {
  const [categories, setCategories] = useState([]);
  const [paymentMethodProps, setPaymentMethodProps] = useState([]);
  const navigate = useNavigate();
    const { user, loading } = useAuth();
    const APP_URL = 'http://localhost:8000';
    useEffect(() => {
      if(!loading){
        if(!user) navigate('/login')
        fetchCategories();
        fetchPaymentMethods();
      }
    }, [loading, navigate]);
    const fetchCategories = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        toast.error('Session expired. Please log in again.');
        navigate('/login');
        return;
      }
      const response = await fetch(`${APP_URL}/api/categories`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      if (response.ok) {
        setCategories(data);
      }
    };
    const fetchPaymentMethods = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        toast.error('Session expired. Please log in again.');
        navigate('/login');
        return;
      }
      const response = await fetch(`${APP_URL}/api/payment-methods`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      if (response.ok) {
        setPaymentMethodProps(data);
      }
    };
    return (
        <DashboardLayout>
          <TransactionAction categories={categories} paymentMethodProps={paymentMethodProps}/>
        </DashboardLayout>
    );
}