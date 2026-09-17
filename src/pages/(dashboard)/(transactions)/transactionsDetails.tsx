
import TransactionDetails from "@/components/dashboard/transactiondDetails";
import { useAuth } from "@/hooks/auth";
import { useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";

export default function TransactionDetailsPage(){
  const {id} = useParams<{id: string}>();
  const {user} = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!user && !localStorage.getItem('token')) {
      navigate('/login');
    }
  }, [user]);
  return (
    <TransactionDetails id={id} user={user} />
  )
}