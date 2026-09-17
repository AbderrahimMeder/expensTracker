import DashboardLayout from "@/components/dashboard/DashboardLayout";
import TransactionAction from "@/components/dashboard/transactionAction";
import { Transaction } from "@/types";
import { useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {LoadingTransaction} from "@/components/ui/loading";
export default function TransactionEditPage() {
    const APP_URL = 'http://localhost:8000';
    const {id}=useParams();
    const navigate=useNavigate();
    const [transaction,setTransaction]=useState<Transaction>();
    const [loading,setLoading]=useState<boolean>(true);
    useEffect(() => {
        fetchTransaction();
    }, [id]);
    const fetchTransaction=async()=>{
        setLoading(true);
        const token = localStorage.getItem('token');
        if (!token) {
            toast.error('Session expired. Please log in again.');
            navigate('/login');
            return;
        }
        const response = await fetch(`${APP_URL}/api/transactions/${id}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        });
        const data = await response.json();
        if (response.ok) {
            setTransaction(data.transaction);
        }
        setLoading(false);
    }
    
    return (
        <DashboardLayout >
            <TransactionAction
                transaction={transaction}
                mode={'edit'}
            />
            
        </DashboardLayout>
    )
}