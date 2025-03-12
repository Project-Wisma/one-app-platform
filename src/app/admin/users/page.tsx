"use client"
import { Navbar } from "../../../components/navbar/Navbar";
import { useState } from "react";

type User = {
    id: number;
    name: string;
    email: string;
    role: "Admin" | "Editor" | "Viewer" | string;
};

const UsersPage = () => {
    const [users, setUsers] = useState<User[]>([
        { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
        { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Editor" },
    ]);
    const [newUser, setNewUser] = useState({ name: "", email: "", role: "Viewer" });
    const [editingUser, setEditingUser] = useState<User | null>(null);

    // Create a new user
    const handleCreate = () => {
        if (!newUser.name || !newUser.email) return;
        setUsers([...users, { id: users.length + 1, ...newUser }]);
        setNewUser({ name: "", email: "", role: "Viewer" });
    };

    // Delete a user
    const handleDelete = (id: number) => {
        setUsers(users.filter(user => user.id !== id));
    };

    // Start editing a user
    const handleEdit = (user: User) => {
        setEditingUser(user);
    };

    // Update a user
    const handleUpdate = () => {
        if (!editingUser) return;
        setUsers(users.map(user => (user.id === editingUser.id ? editingUser : user)));
        setEditingUser(null);
    };

    return (
        <div>
            <Navbar currentUser={null} />
            <div className="mx-auto p-6">
                <h1 className="text-2xl font-bold mb-4">User Management</h1>

                {/* Create User */}
                <div className="flex gap-4 mb-4">
                    <input
                        type="text"
                        placeholder="Name"
                        className="border p-2 rounded w-1/4"
                        value={newUser.name}
                        onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="border p-2 rounded w-1/4"
                        value={newUser.email}
                        onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                    />
                    <select
                        className="border p-2 rounded w-1/4"
                        value={newUser.role}
                        onChange={(e) => setNewUser({ ...newUser, role: e.target.value as User["role"] })}
                    >
                        <option value="Admin">Admin</option>
                        <option value="Editor">Editor</option>
                        <option value="Viewer">Viewer</option>
                    </select>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleCreate}>
                        Add User
                    </button>
                </div>

                {/* Users Table */}
                <table className="w-full border-collapse border">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border p-2">Name</th>
                            <th className="border p-2">Email</th>
                            <th className="border p-2">Role</th>
                            <th className="border p-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id} className="border">
                                <td className="border p-2">
                                    {editingUser?.id === user.id ? (
                                        <input
                                            type="text"
                                            value={editingUser.name}
                                            onChange={(e) => setEditingUser({ ...editingUser, name: e.target.value })}
                                            className="border p-1 rounded"
                                        />
                                    ) : (
                                        user.name
                                    )}
                                </td>
                                <td className="border p-2">
                                    {editingUser?.id === user.id ? (
                                        <input
                                            type="email"
                                            value={editingUser.email}
                                            onChange={(e) => setEditingUser({ ...editingUser, email: e.target.value })}
                                            className="border p-1 rounded"
                                        />
                                    ) : (
                                        user.email
                                    )}
                                </td>
                                <td className="border p-2">
                                    {editingUser?.id === user.id ? (
                                        <select
                                            value={editingUser.role}
                                            onChange={(e) => setEditingUser({ ...editingUser, role: e.target.value as User["role"] })}
                                            className="border p-1 rounded"
                                        >
                                            <option value="Admin">Admin</option>
                                            <option value="Editor">Editor</option>
                                            <option value="Viewer">Viewer</option>
                                        </select>
                                    ) : (
                                        user.role
                                    )}
                                </td>
                                <td className="border p-2">
                                    {editingUser?.id === user.id ? (
                                        <button className="bg-green-500 text-white px-2 py-1 rounded mr-2" onClick={handleUpdate}>
                                            Save
                                        </button>
                                    ) : (
                                        <>
                                            <button className="bg-yellow-500 text-white px-2 py-1 rounded mr-2" onClick={() => handleEdit(user)}>
                                                Edit
                                            </button>
                                            <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={() => handleDelete(user.id)}>
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
    );
};

export default UsersPage;
