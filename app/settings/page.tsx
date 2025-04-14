'use client';

import React, { useState } from 'react';
import { useAuth } from '@/lib/AuthContext';
import { useRouter } from 'next/navigation';

export default function SettingsPage() {
  const { user, signOut, changePassword } = useAuth();
  const [newPassword, setNewPassword] = useState('');
  const [friendUsername, setFriendUsername] = useState('');
  const [reportUsername, setReportUsername] = useState('');
  const router = useRouter();

  const handlePasswordChange = async () => {
    if (newPassword.length < 6) return alert('Password must be at least 6 characters');
    await changePassword(newPassword);
    alert('Password changed successfully.');
    setNewPassword('');
  };

  const handleLogout = async () => {
    await signOut();
    router.push('/login');
  };

  const handleAddFriend = () => {
    if (friendUsername.trim() === '') return;
    alert(`Friend request sent to ${friendUsername}`);
    setFriendUsername('');
  };

  const handleReportUser = () => {
    if (reportUsername.trim() === '') return;
    alert(`User ${reportUsername} has been reported.`);
    setReportUsername('');
  };

  return (
    <main className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Settings</h1>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-1">Change Password</label>
          <input
            type="password"
            placeholder="New password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full border px-3 py-2 rounded"
          />
          <button onClick={handlePasswordChange} className="mt-2 px-4 py-2 bg-blue-600 text-white rounded">
            Update Password
          </button>
        </div>

        <div className="border-t pt-6">
          <label className="block text-sm font-medium mb-1">Add Friend by Username</label>
          <input
            type="text"
            placeholder="Friend's username"
            value={friendUsername}
            onChange={(e) => setFriendUsername(e.target.value)}
            className="w-full border px-3 py-2 rounded"
          />
          <button onClick={handleAddFriend} className="mt-2 px-4 py-2 bg-green-600 text-white rounded">
            Send Friend Request
          </button>
        </div>

        <div className="border-t pt-6">
          <label className="block text-sm font-medium mb-1">Report User</label>
          <input
            type="text"
            placeholder="Username to report"
            value={reportUsername}
            onChange={(e) => setReportUsername(e.target.value)}
            className="w-full border px-3 py-2 rounded"
          />
          <button onClick={handleReportUser} className="mt-2 px-4 py-2 bg-red-600 text-white rounded">
            Report User
          </button>
        </div>

        <div className="pt-6 border-t">
          <button onClick={handleLogout} className="px-4 py-2 bg-gray-600 text-white rounded">
            Log Out
          </button>
        </div>
      </div>
    </main>
  );
}
