import React, { useState } from 'react';
import { Filter } from 'lucide-react';
import BalanceCard from '../../../components/Dashboard/BalanceCard';
import ExpenseAnalysisCard from '../../../components/Dashboard/ExpenseAnalysisCard';
import IncomeAnalysisCard from '../../../components/Dashboard/IncomeAnalysisCard';
import CurrencyExchangeCard from '../../../components/Dashboard/CurrencyExchangeCard';
import ExpenseBreakdownCard from '../../../components/Dashboard/ExpenseBreakdownCard';
import QuickTransferCard from '../../../components/Dashboard/QuickTransferCard';

const DashboardPage: React.FC = () => {
  const [showBalance, setShowBalance] = useState(true);

  // Mock data for the dashboard
  const balanceData = {
    totalBalance: 25000.80,
    cards: [
      {
        id: '1',
        name: 'Primary Card',
        balance: 22426.10,
        cardNumber: '1234567890123797',
        type: 'primary' as const
      },
      {
        id: '2',
        name: 'Secondary Card',
        balance: 22426.10,
        cardNumber: '1234567890124527',
        type: 'secondary' as const
      }
    ]
  };

  const expenseAnalysisData = {
    totalExpense: 2056,
    changePercentage: 2.3,
    changeDirection: 'down' as const,
    monthlyData: [800, 1200, 900, 1500, 1800, 1100, 1300, 1600]
  };

  const incomeAnalysisData = {
    totalIncome: 51312,
    changePercentage: 50,
    categories: [
      { name: 'Job', percentage: 50.5, color: '#22c55e' },
      { name: 'Investment', percentage: 24.0, color: '#84cc16' },
      { name: 'Others', percentage: 15.1, color: '#eab308' }
    ]
  };

  const currencyData = {
    baseCurrency: 'USD',
    currencies: [
      { code: 'IDR', name: 'Rupiah', rate: 15425.15, symbol: '₹' },
      { code: 'EUR', name: 'Euro', rate: 0.95, symbol: '€' },
      { code: 'CNY', name: 'Japanese Yen', rate: 7.06, symbol: '¥' }
    ]
  };

  const expenseBreakdownData = {
    totalExpense: 5205.61,
    changePercentage: 2.3,
    monthlyData: [
      { month: 'Jan', amount: 4200, intensity: 0.6 },
      { month: 'Feb', amount: 3800, intensity: 0.4 },
      { month: 'Mar', amount: 5200, intensity: 0.8 },
      { month: 'Apr', amount: 4600, intensity: 0.7 },
      { month: 'May', amount: 5800, intensity: 1.0 },
      { month: 'Jun', amount: 3200, intensity: 0.3 },
      { month: 'Jul', amount: 4800, intensity: 0.75 },
      { month: 'Aug', amount: 5205, intensity: 0.85 }
    ]
  };

  const quickTransferData = {
    contacts: [
      { id: '1', name: 'Aman', avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150' },
      { id: '2', name: 'Mathew', avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150' },
      { id: '3', name: 'Seedor', avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150' },
      { id: '4', name: 'Melisa', avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150' }
    ]
  };

  const handleTransfer = (contactId: string, amount: number) => {
    console.log(`Transfer $${amount} to contact ${contactId}`);
    // TODO: Implement actual transfer logic
  };

  const getCurrentTime = () => {
    const now = new Date();
    const hour = now.getHours();
    
    if (hour < 12) return 'Good morning';
    if (hour < 17) return 'Good afternoon';
    return 'Good evening';
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-900">
      {/* Header */}
      <div className="bg-white dark:bg-dark-800 border-b border-gray-200 dark:border-dark-700 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm text-gray-600 dark:text-dark-400 mb-1">
              Hi, Admin 👋
            </div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-dark-100">
              {getCurrentTime()},
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 dark:border-dark-600 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-700 transition-colors">
              <Filter size={16} className="text-gray-500" />
              <span className="text-gray-700 dark:text-dark-300">Filter</span>
            </button>
            <button className="bg-gray-900 dark:bg-dark-200 text-white dark:text-dark-900 px-6 py-2 rounded-lg hover:bg-gray-800 dark:hover:bg-dark-300 transition-colors font-medium">
              Create a Report
            </button>
          </div>
        </div>
      </div>

      {/* Dashboard Grid */}
      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {/* Total Balance - Spans 1 column */}
          <div className="xl:col-span-1">
            <BalanceCard
              totalBalance={balanceData.totalBalance}
              cards={balanceData.cards}
              showBalance={showBalance}
              onToggleBalance={() => setShowBalance(!showBalance)}
            />
          </div>

          {/* Expense Analysis - Spans 1 column */}
          <div className="xl:col-span-1">
            <ExpenseAnalysisCard
              totalExpense={expenseAnalysisData.totalExpense}
              changePercentage={expenseAnalysisData.changePercentage}
              changeDirection={expenseAnalysisData.changeDirection}
              monthlyData={expenseAnalysisData.monthlyData}
            />
          </div>

          {/* Overall Income - Spans 1 column */}
          <div className="xl:col-span-1">
            <IncomeAnalysisCard
              totalIncome={incomeAnalysisData.totalIncome}
              changePercentage={incomeAnalysisData.changePercentage}
              categories={incomeAnalysisData.categories}
            />
          </div>

          {/* Currency Exchange - Spans 1 column */}
          <div className="xl:col-span-1">
            <CurrencyExchangeCard
              baseCurrency={currencyData.baseCurrency}
              currencies={currencyData.currencies}
            />
          </div>

          {/* Expense Breakdown - Spans 2 columns */}
          <div className="xl:col-span-2">
            <ExpenseBreakdownCard
              totalExpense={expenseBreakdownData.totalExpense}
              changePercentage={expenseBreakdownData.changePercentage}
              monthlyData={expenseBreakdownData.monthlyData}
            />
          </div>

          {/* Quick Transfer - Spans 2 columns */}
          <div className="xl:col-span-2">
            <QuickTransferCard
              contacts={quickTransferData.contacts}
              onTransfer={handleTransfer}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;