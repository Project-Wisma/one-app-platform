"use client"
import { useState } from "react";
import { Navbar } from "../../../components/navbar/Navbar";

type UserActivity = {
    id: number;
    name: string;
    role: string;
    activities: string;
    created_at: string;
};

const UserActivitiesPage = () => {
    const [activities, setActivities] = useState<UserActivity[]>([
        {
            id: 1,
            name: "John Doe",
            role: "Admin",
            activities: "Created a new user",
            created_at: new Date().toLocaleString(),
        },
    ]);

    const [newActivity, setNewActivity] = useState({ name: "", role: "", activities: "" });
    const [editingActivity, setEditingActivity] = useState<UserActivity | null>(null);

    // Create a new activity
    const handleCreate = () => {
        if (!newActivity.name || !newActivity.role || !newActivity.activities) return;
        setActivities([
            ...activities,
            { id: activities.length + 1, ...newActivity, created_at: new Date().toLocaleString() },
        ]);
        setNewActivity({ name: "", role: "", activities: "" });
    };

    // Delete an activity
    const handleDelete = (id: number) => {
        setActivities(activities.filter(activity => activity.id !== id));
    };

    // Start editing an activity
    const handleEdit = (activity: UserActivity) => {
        setEditingActivity(activity);
    };

    // Update an activity
    const handleUpdate = () => {
        if (!editingActivity) return;
        setActivities(activities.map(activity => (activity.id === editingActivity.id ? editingActivity : activity)));
        setEditingActivity(null);
    };

    return (
        <div>
            <Navbar currentUser={null} />
            <div className="bg-gray-100 min-h-screen flex items justify-center p-4">
                <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl">
                    <h1 className="text-2xl font-bold mb-4">User Activities</h1>

                    {/* Activities Table */}
                    <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border p-2">Name</th>
                                <th className="border p-2">Role</th>
                                <th className="border p-2">Activity</th>
                                <th className="border p-2">Created At</th>
                                <th className="border p-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {activities.map((activity) => (
                                <tr key={activity.id} className="border">
                                    <td className="border p-2">
                                        {editingActivity?.id === activity.id ? (
                                            <input
                                                type="text"
                                                value={editingActivity.name}
                                                onChange={(e) => setEditingActivity({ ...editingActivity, name: e.target.value })}
                                                className="border p-1 rounded"
                                            />
                                        ) : (
                                            activity.name
                                        )}
                                    </td>
                                    <td className="border p-2">
                                        {editingActivity?.id === activity.id ? (
                                            <input
                                                type="text"
                                                value={editingActivity.role}
                                                onChange={(e) => setEditingActivity({ ...editingActivity, role: e.target.value })}
                                                className="border p-1 rounded"
                                            />
                                        ) : (
                                            activity.role
                                        )}
                                    </td>
                                    <td className="border p-2">
                                        {editingActivity?.id === activity.id ? (
                                            <input
                                                type="text"
                                                value={editingActivity.activities}
                                                onChange={(e) => setEditingActivity({ ...editingActivity, activities: e.target.value })}
                                                className="border p-1 rounded"
                                            />
                                        ) : (
                                            activity.activities
                                        )}
                                    </td>
                                    <td className="border p-2">{activity.created_at}</td>
                                    <td className="border p-2">
                                        {editingActivity?.id === activity.id ? (
                                            <button className="bg-green-500 text-white px-2 py-1 rounded mr-2" onClick={handleUpdate}>
                                                Save
                                            </button>
                                        ) : (
                                            <>
                                                <button className="bg-yellow-500 text-white px-2 py-1 rounded mr-2" onClick={() => handleEdit(activity)}>
                                                    Edit
                                                </button>
                                                <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={() => handleDelete(activity.id)}>
                                                    Delete
                                                </button>
                                            </>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default UserActivitiesPage;
