import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import LandingScreen from './screens/LandingScreen';
import DecisionSetupScreen from './screens/DecisionSetupScreen';
import EditContextScreen from './screens/EditContextScreen';
import SourceSelectionScreen from './screens/SourceSelectionScreen';
import SortingFeedbackScreen from './screens/SortingFeedbackScreen';
import DecisionBoardScreen from './screens/DecisionBoardScreen';
import ComparisonScreen from './screens/ComparisonScreen';
import OptionDetailScreen from './screens/OptionDetailScreen';
import BackupSelectionScreen from './screens/BackupSelectionScreen';
import BackupSavedScreen from './screens/BackupSavedScreen';
import ConfirmationScreen from './screens/ConfirmationScreen';
import DirectionsScreen from './screens/DirectionsScreen';
import ShareScreen from './screens/ShareScreen';
import UseBackupScreen from './screens/UseBackupScreen';
import DashboardScreen from './screens/DashboardScreen';
import FilteredOptionsScreen from './screens/FilteredOptionsScreen';

import GroupSetupScreen from './screens/group/GroupSetupScreen';
import GroupEditContextScreen from './screens/group/GroupEditContextScreen';
import GroupSourcesScreen from './screens/group/GroupSourcesScreen';
import GroupSortingFeedbackScreen from './screens/group/GroupSortingFeedbackScreen';
import GroupDecisionBoardScreen from './screens/group/GroupDecisionBoardScreen';
import GroupFilteredOptionsScreen from './screens/group/GroupFilteredOptionsScreen';
import GroupComparisonScreen from './screens/group/GroupComparisonScreen';
import GroupOptionDetailScreen from './screens/group/GroupOptionDetailScreen';
import GroupBackupSavedScreen from './screens/group/GroupBackupSavedScreen';
import GroupVoteScreen from './screens/group/GroupVoteScreen';
import GroupBackupSelectionScreen from './screens/group/GroupBackupSelectionScreen';
import GroupConfirmationScreen from './screens/group/GroupConfirmationScreen';
import GroupDirectionsScreen from './screens/group/GroupDirectionsScreen';
import GroupShareScreen from './screens/group/GroupShareScreen';
import GroupUseBackupScreen from './screens/group/GroupUseBackupScreen';
import GroupDashboardScreen from './screens/group/GroupDashboardScreen';
import BarcelonaIdeasScreen from './screens/group/BarcelonaIdeasScreen';
import BarcelonaSetupScreen from './screens/group/BarcelonaSetupScreen';
import BarcelonaSourcesScreen from './screens/group/BarcelonaSourcesScreen';
import BarcelonaDecisionBoardScreen from './screens/group/BarcelonaDecisionBoardScreen';
import BarcelonaComparisonScreen from './screens/group/BarcelonaComparisonScreen';
import BarcelonaSortingFeedbackScreen from './screens/group/BarcelonaSortingFeedbackScreen';
import BarcelonaOptionDetailScreen from './screens/group/BarcelonaOptionDetailScreen';
import BarcelonaVoteScreen from './screens/group/BarcelonaVoteScreen';
import BarcelonaBackupSelectionScreen from './screens/group/BarcelonaBackupSelectionScreen';
import BarcelonaConfirmationScreen from './screens/group/BarcelonaConfirmationScreen';
import BarcelonaDirectionsScreen from './screens/group/BarcelonaDirectionsScreen';

export default function App() {
  const currentTime = new Date().toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center p-8">
        {/* Simple Phone Border */}
        <div className="w-[390px] h-[844px] border-[8px] border-slate-800 rounded-[40px] shadow-2xl overflow-hidden bg-white">
          {/* Status Bar */}
          <div className="w-full bg-white px-6 py-2 flex items-center justify-between text-[14px] font-medium border-b border-gray-200">
            <div className="flex items-center gap-1">
              <span className="text-foreground">5G</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
              </svg>
            </div>
            <div className="text-foreground">{currentTime}</div>
            <div className="flex items-center gap-1">
              <span className="text-foreground">87%</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4 6h14a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2zm0 2v8h14V8H4zm16 2h1v4h-1v-4z" />
              </svg>
            </div>
          </div>

          {/* Screen content */}
          <div className="w-full h-[calc(100%-44px)] bg-white overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <Routes>
              <Route path="/" element={<LandingScreen />} />
              <Route path="/setup" element={<DecisionSetupScreen />} />
              <Route path="/edit-context" element={<EditContextScreen />} />
              <Route path="/sources" element={<SourceSelectionScreen />} />
              <Route path="/sorting" element={<SortingFeedbackScreen />} />
              <Route path="/board" element={<DecisionBoardScreen />} />
              <Route path="/compare" element={<ComparisonScreen />} />
              <Route path="/detail" element={<OptionDetailScreen />} />
              <Route path="/backup-selection" element={<BackupSelectionScreen />} />
              <Route path="/backup-saved" element={<BackupSavedScreen />} />
              <Route path="/confirmation" element={<ConfirmationScreen />} />
              <Route path="/directions" element={<DirectionsScreen />} />
              <Route path="/share" element={<ShareScreen />} />
              <Route path="/use-backup" element={<UseBackupScreen />} />
              <Route path="/dashboard" element={<DashboardScreen />} />
              <Route path="/filtered" element={<FilteredOptionsScreen />} />

              {/* Group Vibe Check Flow */}
              <Route path="/group/setup" element={<GroupSetupScreen />} />
              <Route path="/group/edit-context" element={<GroupEditContextScreen />} />
              <Route path="/group/sources" element={<GroupSourcesScreen />} />
              <Route path="/group/sorting" element={<GroupSortingFeedbackScreen />} />
              <Route path="/group/board" element={<GroupDecisionBoardScreen />} />
              <Route path="/group/filtered" element={<GroupFilteredOptionsScreen />} />
              <Route path="/group/compare" element={<GroupComparisonScreen />} />
              <Route path="/group/detail" element={<GroupOptionDetailScreen />} />
              <Route path="/group/backup-saved" element={<GroupBackupSavedScreen />} />
              <Route path="/group/vote" element={<GroupVoteScreen />} />
              <Route path="/group/backup-selection" element={<GroupBackupSelectionScreen />} />
              <Route path="/group/confirmation" element={<GroupConfirmationScreen />} />
              <Route path="/group/directions" element={<GroupDirectionsScreen />} />
              <Route path="/group/share" element={<GroupShareScreen />} />
              <Route path="/group/use-backup" element={<GroupUseBackupScreen />} />
              <Route path="/group/dashboard" element={<GroupDashboardScreen />} />
              <Route path="/group/barcelona-ideas" element={<BarcelonaIdeasScreen />} />
              <Route path="/group/barcelona-setup" element={<BarcelonaSetupScreen />} />
              <Route path="/group/barcelona-sources" element={<BarcelonaSourcesScreen />} />
              <Route path="/group/barcelona-sorting" element={<BarcelonaSortingFeedbackScreen />} />
              <Route path="/group/barcelona-board" element={<BarcelonaDecisionBoardScreen />} />
              <Route path="/group/barcelona-compare" element={<BarcelonaComparisonScreen />} />
              <Route path="/group/barcelona-detail" element={<BarcelonaOptionDetailScreen />} />
              <Route path="/group/barcelona-vote" element={<BarcelonaVoteScreen />} />
              <Route path="/group/barcelona-backup-selection" element={<BarcelonaBackupSelectionScreen />} />
              <Route path="/group/barcelona-confirmation" element={<BarcelonaConfirmationScreen />} />
              <Route path="/group/barcelona-directions" element={<BarcelonaDirectionsScreen />} />

              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
