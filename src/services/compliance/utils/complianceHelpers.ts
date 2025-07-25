import { ComplianceCaseType, ComplianceCaseStatus, Priority, KYCReviewStatus, AlertSeverity } from '../../../types';

export const formatCaseType = (type: ComplianceCaseType): string => {
  return type.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
};

export const formatCaseStatus = (status: ComplianceCaseStatus): string => {
  return status.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
};

export const formatKYCStatus = (status: KYCReviewStatus): string => {
  return status.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
};

export const getPriorityColor = (priority: Priority): string => {
  const colors = {
    [Priority.LOW]: 'text-blue-600',
    [Priority.MEDIUM]: 'text-yellow-600',
    [Priority.HIGH]: 'text-orange-600',
    [Priority.CRITICAL]: 'text-red-600'
  };
  return colors[priority] || 'text-gray-600';
};

export const getPriorityBadgeColor = (priority: Priority): string => {
  const colors = {
    [Priority.LOW]: 'bg-blue-100 text-blue-800',
    [Priority.MEDIUM]: 'bg-yellow-100 text-yellow-800',
    [Priority.HIGH]: 'bg-orange-100 text-orange-800',
    [Priority.CRITICAL]: 'bg-red-100 text-red-800'
  };
  return colors[priority] || 'bg-gray-100 text-gray-800';
};

export const getStatusBadgeColor = (status: ComplianceCaseStatus): string => {
  const colors = {
    [ComplianceCaseStatus.OPEN]: 'bg-blue-100 text-blue-800',
    [ComplianceCaseStatus.IN_REVIEW]: 'bg-yellow-100 text-yellow-800',
    [ComplianceCaseStatus.PENDING_APPROVAL]: 'bg-orange-100 text-orange-800',
    [ComplianceCaseStatus.RESOLVED]: 'bg-green-100 text-green-800',
    [ComplianceCaseStatus.CLOSED]: 'bg-gray-100 text-gray-800',
    [ComplianceCaseStatus.ESCALATED]: 'bg-red-100 text-red-800',
    [ComplianceCaseStatus.SUSPENDED]: 'bg-purple-100 text-purple-800'
  };
  return colors[status] || 'bg-gray-100 text-gray-800';
};

export const getKYCStatusBadgeColor = (status: KYCReviewStatus): string => {
  const colors = {
    [KYCReviewStatus.PENDING_REVIEW]: 'bg-yellow-100 text-yellow-800',
    [KYCReviewStatus.IN_REVIEW]: 'bg-blue-100 text-blue-800',
    [KYCReviewStatus.APPROVED]: 'bg-green-100 text-green-800',
    [KYCReviewStatus.REJECTED]: 'bg-red-100 text-red-800',
    [KYCReviewStatus.REQUIRES_MORE_INFO]: 'bg-orange-100 text-orange-800',
    [KYCReviewStatus.ESCALATED]: 'bg-purple-100 text-purple-800'
  };
  return colors[status] || 'bg-gray-100 text-gray-800';
};

export const getSeverityBadgeColor = (severity: AlertSeverity): string => {
  const colors = {
    [AlertSeverity.LOW]: 'bg-blue-100 text-blue-800',
    [AlertSeverity.MEDIUM]: 'bg-yellow-100 text-yellow-800',
    [AlertSeverity.HIGH]: 'bg-orange-100 text-orange-800',
    [AlertSeverity.CRITICAL]: 'bg-red-100 text-red-800'
  };
  return colors[severity] || 'bg-gray-100 text-gray-800';
};

export const calculateRiskLevel = (riskScore: number): string => {
  if (riskScore >= 80) return 'Critical';
  if (riskScore >= 60) return 'High';
  if (riskScore >= 40) return 'Medium';
  if (riskScore >= 20) return 'Low';
  return 'Minimal';
};

export const isOverdue = (dueDate?: string): boolean => {
  if (!dueDate) return false;
  return new Date(dueDate) < new Date();
};

export const getDaysUntilDue = (dueDate: string): number => {
  const due = new Date(dueDate);
  const now = new Date();
  const diffTime = due.getTime() - now.getTime();
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};

export const formatDateRelative = (dateString: string): string => {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const diffHours = Math.floor(diffTime / (1000 * 60 * 60));
  const diffMinutes = Math.floor(diffTime / (1000 * 60));

  if (diffDays > 0) {
    return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
  } else if (diffHours > 0) {
    return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
  } else if (diffMinutes > 0) {
    return `${diffMinutes} minute${diffMinutes > 1 ? 's' : ''} ago`;
  } else {
    return 'Just now';
  }
};

export const validateCaseData = (data: any): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];

  if (!data.customerId?.trim()) {
    errors.push('Customer ID is required');
  }

  if (!data.type) {
    errors.push('Case type is required');
  }

  if (!data.subject?.trim()) {
    errors.push('Subject is required');
  } else if (data.subject.length < 5) {
    errors.push('Subject must be at least 5 characters');
  }

  if (!data.description?.trim()) {
    errors.push('Description is required');
  } else if (data.description.length < 10) {
    errors.push('Description must be at least 10 characters');
  }

  if (data.riskScore && (isNaN(Number(data.riskScore)) || Number(data.riskScore) < 0 || Number(data.riskScore) > 100)) {
    errors.push('Risk score must be between 0 and 100');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
};