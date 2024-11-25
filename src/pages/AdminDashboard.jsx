import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { 
  Users, 
  Mail, 
  Calendar, 
  Shield, 
  Search,
  UserX,
  Check,
  X
} from 'lucide-react';
import { 
  collection, 
  getDocs, 
  updateDoc, 
  doc, 
  query, 
  where,
  getFirestore 
} from 'firebase/firestore';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(null);
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const db = getFirestore();

  // // Check if user is admin
  // useEffect(() => {
  //   const checkAdminStatus = async () => {
  //     try {
  //       const userRef = doc(db, 'users', currentUser?.uid);
  //       const userDoc = await getDocs(userRef);
        
  //       if (!userDoc.exists() || !userDoc.data().isAdmin) {
  //         navigate('/');
  //       }
  //     } catch (err) {
  //       console.error('Error checking admin status:', err);
  //       navigate('/');
  //     }
  //   };

  //   if (currentUser) {
  //     checkAdminStatus();
  //   }
  // }, [currentUser, navigate]);

  // Fetch users data from Firebase
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const usersCollection = collection(db, 'users');
        const usersSnapshot = await getDocs(usersCollection);
        
        const usersData = usersSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
          createdAt: doc.data().createdAt?.toDate() || new Date(),
        }));
        
        setUsers(usersData);
        setError(null);
      } catch (err) {
        setError('Failed to fetch users');
        console.error('Error fetching users:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [db]);

  // Filter users based on search term
  const filteredUsers = users.filter(user => 
    user.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle blocking/unblocking users
  const handleBlockUser = async (userId) => {
    try {
      const userRef = doc(db, 'users', userId);
      const userToUpdate = users.find(user => user.id === userId);
      
      await updateDoc(userRef, {
        isBlocked: !userToUpdate.isBlocked
      });

      setUsers(users.map(user => 
        user.id === userId 
          ? { ...user, isBlocked: !user.isBlocked }
          : user
      ));
    } catch (err) {
      console.error('Error blocking/unblocking user:', err);
      setError('Failed to update user status');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 p-4">
        <div className="flex items-center justify-center h-64">
          <div className="text-gray-600">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">User Management</h1>
          <p className="mt-2 text-gray-600">
            Manage and monitor all registered users
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <StatsCard 
            title="Total Users" 
            value={users.length} 
            icon={<Users className="h-6 w-6" />}
          />
          <StatsCard 
            title="Active Users" 
            value={users.filter(user => !user.isBlocked).length} 
            icon={<Check className="h-6 w-6" />}
          />
          <StatsCard 
            title="Blocked Users" 
            value={users.filter(user => user.isBlocked).length} 
            icon={<UserX className="h-6 w-6" />}
          />
          <StatsCard 
            title="Admin Users" 
            value={users.filter(user => user.isAdmin).length} 
            icon={<Shield className="h-6 w-6" />}
          />
        </div>

        {/* Search */}
        <div className="mb-6 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search users by name or email..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Users Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    User
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Join Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Role
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredUsers.map((user) => (
                  <tr key={user.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-10 w-10 flex-shrink-0">
                          <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                            <span className="text-gray-600 font-medium">
                              {user.name?.[0]?.toUpperCase() || 'U'}
                            </span>
                          </div>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {user.name || 'Unknown User'}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-2">
                        <Mail className="h-4 w-4 text-gray-400" />
                        <span className="text-sm text-gray-900">{user.email}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-gray-400" />
                        <span className="text-sm text-gray-900">
                          {user.createdAt.toLocaleDateString()}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        user.isBlocked
                          ? 'bg-red-100 text-red-800'
                          : 'bg-green-100 text-green-800'
                      }`}>
                        {user.isBlocked ? 'Blocked' : 'Active'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-2">
                        <Shield className={`h-4 w-4 ${
                          user.isAdmin ? 'text-blue-500' : 'text-gray-400'
                        }`} />
                        <span className="text-sm text-gray-900">
                          {user.isAdmin ? 'Admin' : 'User'}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        onClick={() => handleBlockUser(user.id)}
                        className={`inline-flex items-center px-3 py-1 rounded-md text-sm font-medium ${
                          user.isBlocked
                            ? 'text-green-700 bg-green-100 hover:bg-green-200'
                            : 'text-red-700 bg-red-100 hover:bg-red-200'
                        }`}
                        disabled={user.isAdmin || user.id === currentUser?.uid}
                      >
                        {user.isBlocked ? (
                          <>
                            <Check className="h-4 w-4 mr-1" />
                            Unblock
                          </>
                        ) : (
                          <>
                            <X className="h-4 w-4 mr-1" />
                            Block
                          </>
                        )}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-lg">
            {error}
          </div>
        )}
      </div>
    </div>
  );
};

const StatsCard = ({ title, value, icon }) => (
  <div className="bg-white p-6 rounded-lg shadow">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-gray-500 text-sm">{title}</p>
        <p className="mt-2 text-3xl font-semibold text-gray-900">{value}</p>
      </div>
      <div className="text-blue-500">
        {icon}
      </div>
    </div>
  </div>
);

export default AdminDashboard;