"use client"
import { Navbar } from "../../../components/navbar/Navbar";
import { useState } from "react";

type Room = {
    id: number;
    title: string;
    description: string;
    photo: string;
    created_by: string;
    created_at: string;
};

const RoomsPage = () => {
    const [rooms, setRooms] = useState<Room[]>([
        {
            id: 1,
            title: "Deluxe Room",
            description: "A spacious room with ocean view.",
            photo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-mobile/tix-hotel/images-web/2020/10/30/5b409e27-268b-4943-9dc8-8b724a08207a-1604034589828-a94fd3b1bb1abc9883689a25b0311bb4.jpg",
            created_by: "Admin",
            created_at: new Date().toLocaleString(),
        },
        {
            id: 2,
            title: "Executive Suite",
            description: "A spacious room with ocean view.",
            photo: "https://ik.imagekit.io/tvlk/generic-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20007673-24279147080a3f895d60b1e3c44e3fff.jpeg?_src=imagekit&tr=c-at_max,f-jpg,h-720,pr-true,q-40,w-1280",
            created_by: "Admin",
            created_at: new Date().toLocaleString(),
        },
        {
            id: 3,
            title: "Presidential Suite",
            description: "A spacious room with ocean view.",
            photo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2021/03/12/97693bad-f0cf-4cba-8dbb-baebcc351606-1615562660452-0a197b41f8dba7b22d60f665a7ec7916.jpg",
            created_by: "Admin",
            created_at: new Date().toLocaleString(),
        },
        {
            id: 4,
            title: "Kos kosan",
            description: "A spacious room with ocean view.",
            photo: "https://ik.imagekit.io/tvlk/generic-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20007673-8a58934f5e5e203f39d555eb89cdb65b.jpeg?_src=imagekit&tr=c-at_max,f-jpg,h-720,pr-true,q-40,w-1280",
            created_by: "Admin",
            created_at: new Date().toLocaleString(),
        },
    ]);

    const [newRoom, setNewRoom] = useState({ title: "", description: "", photo: "", created_by: "" });
    const [editingRoom, setEditingRoom] = useState<Room | null>(null);

    // Create a new room
    const handleCreate = () => {
        if (!newRoom.title || !newRoom.description || !newRoom.photo || !newRoom.created_by) return;
        setRooms([
            ...rooms,
            { id: rooms.length + 1, ...newRoom, created_at: new Date().toLocaleString() },
        ]);
        setNewRoom({ title: "", description: "", photo: "", created_by: "" });
    };

    // Delete a room
    const handleDelete = (id: number) => {
        setRooms(rooms.filter(room => room.id !== id));
    };

    // Start editing a room
    const handleEdit = (room: Room) => {
        setEditingRoom(room);
    };

    // Update a room
    const handleUpdate = () => {
        if (!editingRoom) return;
        setRooms(rooms.map(room => (room.id === editingRoom.id ? editingRoom : room)));
        setEditingRoom(null);
    };

    return (
        <div>
            <Navbar currentUser={null} />
            <div className="mx-auto bg-gray-100 p-6">
                <h1 className="text-2xl font-bold mb-4">Room Management</h1>

                {/* Create Room */}
                <div className="flex gap-4 mb-4">
                    <input
                        type="text"
                        placeholder="Title"
                        className="border p-2 rounded w-1/5"
                        value={newRoom.title}
                        onChange={(e) => setNewRoom({ ...newRoom, title: e.target.value })}
                    />
                    <textarea
                        placeholder="Description"
                        className="border p-2 rounded w-1/5"
                        value={newRoom.description}
                        onChange={(e) => setNewRoom({ ...newRoom, description: e.target.value })}
                    />
                    <input
                        type="url"
                        placeholder="Photo URL"
                        className="border p-2 rounded w-1/5"
                        value={newRoom.photo}
                        onChange={(e) => setNewRoom({ ...newRoom, photo: e.target.value })}
                    />
                    <input
                        type="date"
                        placeholder="Created By"
                        className="border p-2 rounded w-1/5"
                        value={newRoom.created_by}
                        onChange={(e) => setNewRoom({ ...newRoom, created_by: e.target.value })}
                    />
                    <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleCreate}>
                        Add Room
                    </button>
                </div>

                {/* Rooms Table */}
                <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border p-2">Photo</th>
                            <th className="border p-2">Title</th>
                            <th className="border p-2">Description</th>
                            <th className="border p-2">Created By</th>
                            <th className="border p-2">Created At</th>
                            <th className="border p-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rooms.map((room) => (
                            <tr key={room.id} className="border">
                                <td className="border p-2">
                                    <img src={room.photo} alt={room.title} className="w-21 h-21 rounded" />
                                </td>
                                <td className="border p-2">
                                    {editingRoom?.id === room.id ? (
                                        <input
                                            type="text"
                                            value={editingRoom.title}
                                            onChange={(e) => setEditingRoom({ ...editingRoom, title: e.target.value })}
                                            className="border p-1 rounded"
                                        />
                                    ) : (
                                        room.title
                                    )}
                                </td>
                                <td className="border p-2">
                                    {editingRoom?.id === room.id ? (
                                        <textarea
                                            value={editingRoom.description}
                                            onChange={(e) => setEditingRoom({ ...editingRoom, description: e.target.value })}
                                            className="border p-1 rounded"
                                        />
                                    ) : (
                                        room.description
                                    )}
                                </td>
                                <td className="border p-2">
                                    {editingRoom?.id === room.id ? (
                                        <input
                                            type="text"
                                            value={editingRoom.created_by}
                                            onChange={(e) => setEditingRoom({ ...editingRoom, created_by: e.target.value })}
                                            className="border p-1 rounded"
                                        />
                                    ) : (
                                        room.created_by
                                    )}
                                </td>
                                <td className="border p-2">{room.created_at}</td>
                                <td className="border p-2">
                                    {editingRoom?.id === room.id ? (
                                        <button className="bg-green-500 text-white px-2 py-1 rounded mr-2" onClick={handleUpdate}>
                                            Save
                                        </button>
                                    ) : (
                                        <>
                                            <button className="bg-yellow-500 text-white px-2 py-1 rounded mr-2" onClick={() => handleEdit(room)}>
                                                Edit
                                            </button>
                                            <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={() => handleDelete(room.id)}>
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

export default RoomsPage;
