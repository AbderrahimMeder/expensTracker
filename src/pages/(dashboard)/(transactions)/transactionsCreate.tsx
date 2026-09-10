import DashboardLayout from "@/components/dashboard/DashboardLayout";
import TransactionAction from "@/components/dashboard/transactionAction";


export default function transactionCreate() {
    return (
        <DashboardLayout>
          <TransactionAction/>
        </DashboardLayout>
    );
}