import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../components/Layout/Layout';

// Service Components
import Dashboard from '../services/dashboard/Dashboard';
import AuthService from '../services/auth/AuthService';
import LoginPage from '../services/auth/components/LoginPage';
import RegisterPage from '../services/auth/components/RegisterPage';
import TwoFactorPage from '../services/auth/components/TwoFactorPage';
import AccountSettingsPage from '../services/auth/components/AccountSettingsPage';
import CustomerManagement from '../services/customers/CustomerManagement';
import CustomerDetailPage from '../services/customers/components/CustomerDetailPage';
import LeadDetailPage from '../services/customers/components/LeadDetailPage';
import TransactionExplorer from '../services/transactions/TransactionExplorer';
import ExportJobsPage from '../services/transactions/components/ExportJobsPage';
import VirtualCards from '../services/virtual-cards/VirtualCards';
import SavingsModule from '../services/savings/SavingsModule';
import PricingBilling from '../services/pricing-billing/PricingBilling';

// Placeholder components for remaining services
import ReportsPage from '../services/dashboard/components/ReportsPage';
import AlertsPage from '../services/dashboard/components/AlertsPage';

import RoleManagement from '../services/roles/RoleManagement';
import ComplianceAML from '../services/compliance/ComplianceAML';
const FraudRisk = () => <div className="p-8"><h1 className="text-2xl font-bold">Fraud & Risk Management</h1><p>Coming soon...</p></div>;
const FinanceReconciliation = () => <div className="p-8"><h1 className="text-2xl font-bold">Finance & Reconciliation</h1><p>Coming soon...</p></div>;
const LoansCredit = () => <div className="p-8"><h1 className="text-2xl font-bold">Loans & Credit Scoring</h1><p>Coming soon...</p></div>;
const MessagingCenter = () => <div className="p-8"><h1 className="text-2xl font-bold">Messaging & Communication Center</h1><p>Coming soon...</p></div>;
const SupportTicketing = () => <div className="p-8"><h1 className="text-2xl font-bold">Support & Ticketing</h1><p>Coming soon...</p></div>;
const ProductManagement = () => <div className="p-8"><h1 className="text-2xl font-bold">Product & Feature Management</h1><p>Coming soon...</p></div>;
const SuperAdmin = () => <div className="p-8"><h1 className="text-2xl font-bold">Super-Admin Service Delegation</h1><p>Coming soon...</p></div>;
const MarketingGrowth = () => <div className="p-8"><h1 className="text-2xl font-bold">Marketing & Growth</h1><p>Coming soon...</p></div>;
const LoyaltyRewards = () => <div className="p-8"><h1 className="text-2xl font-bold">Loyalty & Rewards</h1><p>Coming soon...</p></div>;
const BIReporting = () => <div className="p-8"><h1 className="text-2xl font-bold">BI Reporting</h1><p>Coming soon...</p></div>;
const AdvertisingNotifications = () => <div className="p-8"><h1 className="text-2xl font-bold">In-App Advertising & Notifications</h1><p>Coming soon...</p></div>;

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Public Auth Routes */}
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/register" element={<RegisterPage />} />
        <Route path="/auth/2fa" element={<TwoFactorPage />} />
        
        {/* Protected Routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/auth" element={<AuthService />} />
          <Route path="/auth/settings" element={<AccountSettingsPage />} />
          <Route path="/customers" element={<CustomerManagement />} />
          <Route path="/customers/:id" element={<CustomerDetailPage />} />
          <Route path="/leads/:id" element={<LeadDetailPage />} />
          <Route path="/transactions" element={<TransactionExplorer />} />
          <Route path="/transactions/exports" element={<ExportJobsPage />} />
          <Route path="/roles" element={<RoleManagement />} />
          <Route path="/compliance" element={<ComplianceAML />} />
          <Route path="/fraud" element={<FraudRisk />} />
          <Route path="/finance" element={<FinanceReconciliation />} />
          <Route path="/pricing" element={<PricingBilling />} />
          <Route path="/savings" element={<SavingsModule />} />
          <Route path="/loans" element={<LoansCredit />} />
          <Route path="/cards" element={<VirtualCards />} />
          <Route path="/messaging" element={<MessagingCenter />} />
          <Route path="/support" element={<SupportTicketing />} />
          <Route path="/products" element={<ProductManagement />} />
          <Route path="/admin" element={<SuperAdmin />} />
          <Route path="/marketing" element={<MarketingGrowth />} />
          <Route path="/loyalty" element={<LoyaltyRewards />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/alerts" element={<AlertsPage />} />
          <Route path="/advertising" element={<AdvertisingNotifications />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;