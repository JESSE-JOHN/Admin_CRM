import { useState, useEffect } from 'react';
import { ComplianceService } from '../services/ComplianceService';
import { KYCReviewService } from '../services/KYCReviewService';

export const useComplianceData = () => {
  const [stats, setStats] = useState({
    totalCases: 0,
    openCases: 0,
    highPriorityCases: 0,
    overdueReviews: 0,
    pendingKYC: 0,
    approvedToday: 0
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const complianceService = new ComplianceService();
  const kycReviewService = new KYCReviewService();

  const loadStats = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const [complianceStats, kycStats] = await Promise.all([
        complianceService.getComplianceStats(),
        kycReviewService.getKYCStats()
      ]);

      setStats({
        totalCases: complianceStats.totalCases,
        openCases: complianceStats.openCases,
        highPriorityCases: complianceStats.highPriorityCases,
        overdueReviews: complianceStats.overdueReviews,
        pendingKYC: kycStats.pendingReviews,
        approvedToday: kycStats.approvedToday
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load compliance data');
      console.error('Failed to load compliance stats:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadStats();
  }, []);

  return {
    stats,
    isLoading,
    error,
    refreshStats: loadStats
  };
};