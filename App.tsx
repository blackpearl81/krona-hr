/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { HRProvider, useHR } from './context/HRContext';
import { Sidebar, ActiveTab } from './components/layout/Sidebar';
import { Header } from './components/layout/Header';
import { OverviewView } from './components/overview/OverviewView';
import { AttendanceView } from './components/attendance/AttendanceView';
import { LeavesView } from './components/leaves/LeavesView';
import { PerformanceView } from './components/performance/PerformanceView';
import { DirectoryView } from './components/directory/DirectoryView';
import { LeaveRequestModal } from './components/modals/LeaveRequestModal';
import { ManualAttendanceModal } from './components/modals/ManualAttendanceModal';
import { PerformanceReviewModal } from './components/modals/PerformanceReviewModal';
import { EmployeeDetailDrawer } from './components/modals/EmployeeDetailDrawer';

const DashboardContent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ActiveTab>('overview');
  const [isLeaveModalOpen, setIsLeaveModalOpen] = useState<boolean>(false);
  const [isManualModalOpen, setIsManualModalOpen] = useState<boolean>(false);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const { selectedEmployeeForDrawer, setSelectedEmployeeForDrawer } = useHR();

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-slate-100 antialiased selection:bg-slate-200">
      {/* Sidebar Navigation */}
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenLeaveModal={() => setIsLeaveModalOpen(true)}
      />

      {/* Main Workspace Frame */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Header */}
        <Header
          activeTab={activeTab}
          onOpenLeaveModal={() => setIsLeaveModalOpen(true)}
          onOpenManualAttendance={() => setIsManualModalOpen(true)}
          onOpenReviewModal={() => setIsReviewModalOpen(true)}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        {/* Viewport Canvas */}
        <main className="flex-1 overflow-y-auto p-6 max-w-7xl w-full mx-auto">
          {activeTab === 'overview' && (
            <OverviewView
              setActiveTab={setActiveTab}
              onOpenLeaveModal={() => setIsLeaveModalOpen(true)}
              onOpenReviewModal={() => setIsReviewModalOpen(true)}
            />
          )}

          {activeTab === 'attendance' && (
            <AttendanceView
              onOpenManualModal={() => setIsManualModalOpen(true)}
            />
          )}

          {activeTab === 'leaves' && (
            <LeavesView
              onOpenLeaveModal={() => setIsLeaveModalOpen(true)}
            />
          )}

          {activeTab === 'performance' && (
            <PerformanceView
              onOpenReviewModal={() => setIsReviewModalOpen(true)}
            />
          )}

          {activeTab === 'directory' && (
            <DirectoryView
              onOpenLeaveModal={() => setIsLeaveModalOpen(true)}
            />
          )}
        </main>
      </div>

      {/* Interactive Modals & Drawers */}
      <LeaveRequestModal
        isOpen={isLeaveModalOpen}
        onClose={() => setIsLeaveModalOpen(false)}
      />

      <ManualAttendanceModal
        isOpen={isManualModalOpen}
        onClose={() => setIsManualModalOpen(false)}
      />

      <PerformanceReviewModal
        isOpen={isReviewModalOpen}
        onClose={() => setIsReviewModalOpen(false)}
      />

      <EmployeeDetailDrawer
        employee={selectedEmployeeForDrawer}
        onClose={() => setSelectedEmployeeForDrawer(null)}
        onOpenLeaveModalForEmployee={(empId) => {
          setIsLeaveModalOpen(true);
        }}
      />
    </div>
  );
};

export default function App() {
  return (
    <HRProvider>
      <DashboardContent />
    </HRProvider>
  );
}
