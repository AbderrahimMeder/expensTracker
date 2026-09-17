
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import TransactionAction from "@/components/dashboard/transactionAction";
import { useAuth } from "@/hooks/auth";
import toast from "react-hot-toast";
import { Category } from "@/types"
import { LoadingTransaction } from "@/components/ui/loading";
export default function transactionCreate() {
  const navigate = useNavigate();
  const { user, loading } = useAuth();
  useEffect( () => {
    if (!loading) {

      const token = localStorage.getItem('token');
      if (!user && !token) navigate('/login')
    }
  }, [loading, navigate]);
  

  return (
    <DashboardLayout>
      <TransactionAction mode={'create'} />
    </DashboardLayout>
  );
}