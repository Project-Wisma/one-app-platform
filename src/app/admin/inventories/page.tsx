"use client"
import { Navbar } from "../../../components/navbar/Navbar";
import { useState } from "react";

type Inventory = {
    id: number;
    title: string;
    description: string;
    photo: string;
    quantity: number;
    created_by: string;
    created_at: string;
};

const InventoriesPage = () => {
    const [inventories, setInventories] = useState<Inventory[]>([
        {
            id: 1,
            title: "Laptop",
            description: "High-performance laptop for development.",
            photo: "https://macstore.id/wp-content/uploads/2024/04/macbookair-og-202402.jpeg",
            quantity: 5,
            created_by: "Admin",
            created_at: new Date().toLocaleString(),
        },
    ]);

    const [newInventory, setNewInventory] = useState({ title: "", description: "", photo: "", quantity: 1, created_by: "" });
    const [editingInventory, setEditingInventory] = useState<Inventory | null>(null);

    // Create a new inventory item
    const handleCreate = () => {
        if (!newInventory.title || !newInventory.description || !newInventory.photo || !newInventory.created_by) return;
        setInventories([
            ...inventories,
            { id: inventories.length + 1, ...newInventory, created_at: new Date().toLocaleString() },
        ]);
        setNewInventory({ title: "", description: "", photo: "", quantity: 1, created_by: "" });
    };

    // Delete an inventory item
    const handleDelete = (id: number) => {
        setInventories(inventories.filter(item => item.id !== id));
    };

    // Start editing an inventory item
    const handleEdit = (item: Inventory) => {
        setEditingInventory(item);
    };

    // Update an inventory item
    const handleUpdate = () => {
        if (!editingInventory) return;
        setInventories(inventories.map(item => (item.id === editingInventory.id ? editingInventory : item)));
        setEditingInventory(null);
    };

    return (
        <div>
            <Navbar currentUser={null} />
            <div className="bg-gray-100 min-h-screen flex justify-center p-4">
                <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl">
                    <h1 className="text-2xl font-bold mb-4">Inventory Management</h1>

                    {/* Create Inventory */}
                    <div className="flex gap-4 mb-4">
                        <input
                            type="text"
                            placeholder="Title"
                            className="border p-2 rounded w-1/6"
                            value={newInventory.title}
                            onChange={(e) => setNewInventory({ ...newInventory, title: e.target.value })}
                        />
                        <input
                            type="text"
                            placeholder="Description"
                            className="border p-2 rounded w-1/6"
                            value={newInventory.description}
                            onChange={(e) => setNewInventory({ ...newInventory, description: e.target.value })}
                        />
                        <input
                            type="url"
                            placeholder="Photo URL"
                            className="border p-2 rounded w-1/6"
                            value={newInventory.photo}
                            onChange={(e) => setNewInventory({ ...newInventory, photo: e.target.value })}
                        />
                        <input
                            type="number"
                            placeholder="Quantity"
                            className="border p-2 rounded w-1/6"
                            min="1"
                            value={newInventory.quantity}
                            onChange={(e) => setNewInventory({ ...newInventory, quantity: parseInt(e.target.value) })}
                        />
                        <input
                            type="date"
                            placeholder="Created By"
                            className="border p-2 rounded w-1/6"
                            value={newInventory.created_by}
                            onChange={(e) => setNewInventory({ ...newInventory, created_by: e.target.value })}
                        />
                        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleCreate}>
                            Add Item
                        </button>
                    </div>

                    {/* Inventories Table */}
                    <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border p-2">Photo</th>
                                <th className="border p-2">Title</th>
                                <th className="border p-2">Description</th>
                                <th className="border p-2">Quantity</th>
                                <th className="border p-2">Created By</th>
                                <th className="border p-2">Created At</th>
                                <th className="border p-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {inventories.map((item) => (
                                <tr key={item.id} className="border">
                                    <td className="border p-2">
                                        <img src={item.photo} alt={item.title} className="w-16 h-16 rounded" />
                                    </td>
                                    <td className="border p-2">
                                        {editingInventory?.id === item.id ? (
                                            <input
                                                type="text"
                                                value={editingInventory.title}
                                                onChange={(e) => setEditingInventory({ ...editingInventory, title: e.target.value })}
                                                className="border p-1 rounded"
                                            />
                                        ) : (
                                            item.title
                                        )}
                                    </td>
                                    <td className="border p-2">
                                        {editingInventory?.id === item.id ? (
                                            <input
                                                type="text"
                                                value={editingInventory.description}
                                                onChange={(e) => setEditingInventory({ ...editingInventory, description: e.target.value })}
                                                className="border p-1 rounded"
                                            />
                                        ) : (
                                            item.description
                                        )}
                                    </td>
                                    <td className="border p-2">
                                        {editingInventory?.id === item.id ? (
                                            <input
                                                type="number"
                                                min="1"
                                                value={editingInventory.quantity}
                                                onChange={(e) => setEditingInventory({ ...editingInventory, quantity: parseInt(e.target.value) })}
                                                className="border p-1 rounded"
                                            />
                                        ) : (
                                            item.quantity
                                        )}
                                    </td>
                                    <td className="border p-2">{item.created_by}</td>
                                    <td className="border p-2">{item.created_at}</td>
                                    <td className="border p-2">
                                        {editingInventory?.id === item.id ? (
                                            <button className="bg-green-500 text-white px-2 py-1 rounded mr-2" onClick={handleUpdate}>
                                                Save
                                            </button>
                                        ) : (
                                            <>
                                                <button className="bg-yellow-500 text-white px-2 py-1 rounded mr-2" onClick={() => handleEdit(item)}>
                                                    Edit
                                                </button>
                                                <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={() => handleDelete(item.id)}>
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

export default InventoriesPage;
