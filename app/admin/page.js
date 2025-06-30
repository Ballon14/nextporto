"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

// Komponen untuk Login
function LoginForm({ onLogin }) {
    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
    })
    const [error, setError] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        // Autentikasi sederhana - bisa diganti dengan sistem yang lebih aman
        if (
            credentials.username === "admin" &&
            credentials.password === "admin123"
        ) {
            onLogin(true)
            localStorage.setItem("adminLoggedIn", "true")
        } else {
            setError("Username atau password salah!")
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 w-full max-w-md border border-white/20"
            >
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-white mb-2">
                        🔐 Admin Panel
                    </h1>
                    <p className="text-gray-300">
                        Login untuk mengelola portfolio
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-white text-sm font-medium mb-2">
                            Username
                        </label>
                        <input
                            type="text"
                            value={credentials.username}
                            onChange={(e) =>
                                setCredentials({
                                    ...credentials,
                                    username: e.target.value,
                                })
                            }
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            placeholder="Masukkan username"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-white text-sm font-medium mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            value={credentials.password}
                            onChange={(e) =>
                                setCredentials({
                                    ...credentials,
                                    password: e.target.value,
                                })
                            }
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            placeholder="Masukkan password"
                            required
                        />
                    </div>

                    {error && (
                        <div className="text-red-400 text-sm text-center">
                            {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-200"
                    >
                        Login
                    </button>
                </form>

                <div className="mt-6 text-center text-gray-400 text-sm">
                    <p>Username: admin</p>
                    <p>Password: admin123</p>
                </div>
            </motion.div>
        </div>
    )
}

// Komponen untuk Dashboard Admin
function AdminDashboard() {
    const [activeTab, setActiveTab] = useState("skills")
    const [data, setData] = useState({
        skills: [],
        experiences: [],
        projects: [],
    })
    const [loading, setLoading] = useState(true)
    const [showForm, setShowForm] = useState(false)
    const [editingItem, setEditingItem] = useState(null)
    const [formData, setFormData] = useState({})

    useEffect(() => {
        fetchData()
    }, [activeTab])

    const fetchData = async () => {
        try {
            const response = await fetch(`/api/${activeTab}`)
            const result = await response.json()
            setData((prev) => ({ ...prev, [activeTab]: result }))
        } catch (error) {
            console.error("Error fetching data:", error)
        } finally {
            setLoading(false)
        }
    }

    const handleLogout = () => {
        localStorage.removeItem("adminLoggedIn")
        window.location.reload()
    }

    const handleDelete = async (id) => {
        if (confirm("Apakah Anda yakin ingin menghapus item ini?")) {
            try {
                await fetch(`/api/${activeTab}/${id}`, { method: "DELETE" })
                fetchData()
            } catch (error) {
                console.error("Error deleting item:", error)
            }
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const method = editingItem ? "PUT" : "POST"
            const url = editingItem
                ? `/api/${activeTab}/${editingItem._id}`
                : `/api/${activeTab}`
            let dataToSend = { ...formData }
            if (activeTab === "skills") {
                dataToSend.icon = "🛠️"
                dataToSend.color = "#222222"
            }
            await fetch(url, {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(dataToSend),
            })
            setShowForm(false)
            setEditingItem(null)
            setFormData({})
            fetchData()
        } catch (error) {
            console.error("Error saving item:", error)
        }
    }

    const renderForm = () => {
        const fields = {
            skills: ["name", "category", "level", "description"],
            experiences: [
                "title",
                "company",
                "location",
                "description",
                "technologies",
                "achievements",
            ],
            projects: [
                "title",
                "description",
                "image",
                "technologies",
                "githubUrl",
                "liveUrl",
                "category",
                "featured",
            ],
        }

        return (
            <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 transition-all duration-300">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-lg max-h-[80vh] overflow-y-auto border border-gray-200 relative"
                >
                    <button
                        onClick={() => {
                            setShowForm(false)
                            setEditingItem(null)
                            setFormData({})
                        }}
                        className="absolute top-4 right-4 text-gray-400 hover:text-red-500 text-xl font-bold focus:outline-none"
                        aria-label="Tutup"
                    >
                        ×
                    </button>
                    <h3 className="text-2xl font-bold mb-6 text-gray-800 text-center">
                        {editingItem ? "Edit" : "Tambah"}{" "}
                        {activeTab.slice(0, -1)}
                    </h3>
                    <form onSubmit={handleSubmit} className="space-y-5">
                        {fields[activeTab].map((field) => (
                            <div key={field} className="flex flex-col gap-1">
                                <label className="block text-sm font-semibold text-gray-700 mb-1 capitalize">
                                    {field}
                                </label>
                                {field === "color" ? (
                                    <input
                                        type="color"
                                        value={formData[field] || "#222222"}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                [field]: e.target.value,
                                            })
                                        }
                                        className="w-16 h-10 p-0 border-0 bg-transparent cursor-pointer"
                                        style={{ boxShadow: "0 0 0 1px #ccc" }}
                                    />
                                ) : field === "description" ||
                                  field === "achievements" ? (
                                    <textarea
                                        value={formData[field] || ""}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                [field]: e.target.value,
                                            })
                                        }
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition text-black"
                                        rows={3}
                                        placeholder={`Masukkan ${field}`}
                                    />
                                ) : field === "level" ? (
                                    <input
                                        type="number"
                                        value={formData[field] || ""}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                [field]: parseInt(
                                                    e.target.value
                                                ),
                                            })
                                        }
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition text-black"
                                        min="1"
                                        max="100"
                                        placeholder="1-100"
                                    />
                                ) : field === "featured" ? (
                                    <select
                                        value={formData[field] || false}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                [field]:
                                                    e.target.value === "true",
                                            })
                                        }
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition text-black"
                                    >
                                        <option
                                            value={false}
                                            className="text-black"
                                        >
                                            Tidak
                                        </option>
                                        <option
                                            value={true}
                                            className="text-black"
                                        >
                                            Ya
                                        </option>
                                    </select>
                                ) : field === "category" ? (
                                    <select
                                        value={formData[field] || ""}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                [field]: e.target.value,
                                            })
                                        }
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition text-black"
                                    >
                                        <option value="" className="text-black">
                                            Pilih kategori
                                        </option>
                                        {activeTab === "skills" ? (
                                            <>
                                                <option
                                                    value="Frontend"
                                                    className="text-black"
                                                >
                                                    Frontend
                                                </option>
                                                <option
                                                    value="Backend"
                                                    className="text-black"
                                                >
                                                    Backend
                                                </option>
                                                <option
                                                    value="Database"
                                                    className="text-black"
                                                >
                                                    Database
                                                </option>
                                                <option
                                                    value="Tools"
                                                    className="text-black"
                                                >
                                                    Tools
                                                </option>
                                                <option
                                                    value="Other"
                                                    className="text-black"
                                                >
                                                    Other
                                                </option>
                                            </>
                                        ) : (
                                            <>
                                                <option
                                                    value="Web App"
                                                    className="text-black"
                                                >
                                                    Web App
                                                </option>
                                                <option
                                                    value="Mobile App"
                                                    className="text-black"
                                                >
                                                    Mobile App
                                                </option>
                                                <option
                                                    value="Desktop App"
                                                    className="text-black"
                                                >
                                                    Desktop App
                                                </option>
                                                <option
                                                    value="API"
                                                    className="text-black"
                                                >
                                                    API
                                                </option>
                                                <option
                                                    value="Other"
                                                    className="text-black"
                                                >
                                                    Other
                                                </option>
                                            </>
                                        )}
                                    </select>
                                ) : (
                                    <input
                                        type="text"
                                        value={formData[field] || ""}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                [field]: e.target.value,
                                            })
                                        }
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition text-black"
                                        placeholder={`Masukkan ${field}`}
                                    />
                                )}
                            </div>
                        ))}
                        <div className="flex gap-3 pt-4">
                            <button
                                type="submit"
                                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold shadow transition-all duration-200"
                            >
                                {editingItem ? "Update" : "Simpan"}
                            </button>
                            <button
                                type="button"
                                onClick={() => {
                                    setShowForm(false)
                                    setEditingItem(null)
                                    setFormData({})
                                }}
                                className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 rounded-lg font-semibold shadow transition-all duration-200"
                            >
                                Batal
                            </button>
                        </div>
                    </form>
                </motion.div>
            </div>
        )
    }

    const renderTable = () => {
        const items = data[activeTab] || []

        if (loading) {
            return <div className="text-center py-8">Loading...</div>
        }

        return (
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                <div className="px-6 py-4 border-b flex justify-between items-center">
                    <h3 className="text-lg font-semibold capitalize">
                        {activeTab}
                    </h3>
                    <button
                        onClick={() => setShowForm(true)}
                        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                    >
                        Tambah {activeTab.slice(0, -1)}
                    </button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead className="bg-gray-100">
                            <tr>
                                {activeTab === "skills" && (
                                    <>
                                        <th className="px-6 py-3 text-left text-sm font-bold text-gray-700 border-b border-gray-200">
                                            NAME
                                        </th>
                                        <th className="px-6 py-3 text-left text-sm font-bold text-gray-700 border-b border-gray-200">
                                            CATEGORY
                                        </th>
                                        <th className="px-6 py-3 text-left text-sm font-bold text-gray-700 border-b border-gray-200">
                                            LEVEL
                                        </th>
                                        <th className="px-6 py-3 text-left text-sm font-bold text-gray-700 border-b border-gray-200">
                                            ACTIONS
                                        </th>
                                    </>
                                )}
                                {activeTab === "experiences" && (
                                    <>
                                        <th className="px-6 py-3 text-left text-sm font-bold text-gray-700 border-b border-gray-200">
                                            TITLE
                                        </th>
                                        <th className="px-6 py-3 text-left text-sm font-bold text-gray-700 border-b border-gray-200">
                                            COMPANY
                                        </th>
                                        <th className="px-6 py-3 text-left text-sm font-bold text-gray-700 border-b border-gray-200">
                                            ACTIONS
                                        </th>
                                    </>
                                )}
                                {activeTab === "projects" && (
                                    <>
                                        <th className="px-6 py-3 text-left text-sm font-bold text-gray-700 border-b border-gray-200">
                                            TITLE
                                        </th>
                                        <th className="px-6 py-3 text-left text-sm font-bold text-gray-700 border-b border-gray-200">
                                            CATEGORY
                                        </th>
                                        <th className="px-6 py-3 text-left text-sm font-bold text-gray-700 border-b border-gray-200">
                                            FEATURED
                                        </th>
                                        <th className="px-6 py-3 text-left text-sm font-bold text-gray-700 border-b border-gray-200">
                                            ACTIONS
                                        </th>
                                    </>
                                )}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {items.map((item) => (
                                <tr
                                    key={item._id}
                                    className="hover:bg-blue-50 transition"
                                >
                                    {activeTab === "skills" && (
                                        <>
                                            <td className="px-6 py-4 border-b border-gray-100 text-gray-800 font-medium">
                                                {item.name}
                                            </td>
                                            <td className="px-6 py-4 border-b border-gray-100 text-gray-700">
                                                {item.category}
                                            </td>
                                            <td className="px-6 py-4 border-b border-gray-100 text-gray-700">
                                                {item.level}%
                                            </td>
                                            <td className="px-6 py-4 border-b border-gray-100">
                                                <button
                                                    onClick={() => {
                                                        setEditingItem(item)
                                                        setFormData(item)
                                                        setShowForm(true)
                                                    }}
                                                    className="text-blue-600 hover:text-blue-900 mr-3 font-semibold"
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        handleDelete(item._id)
                                                    }
                                                    className="text-red-600 hover:text-red-900 font-semibold"
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </>
                                    )}
                                    {activeTab === "experiences" && (
                                        <>
                                            <td className="px-6 py-4 border-b border-gray-100 text-gray-800 font-medium">
                                                {item.title}
                                            </td>
                                            <td className="px-6 py-4 border-b border-gray-100 text-gray-700">
                                                {item.company}
                                            </td>
                                            <td className="px-6 py-4 border-b border-gray-100">
                                                <button
                                                    onClick={() => {
                                                        setEditingItem(item)
                                                        setFormData(item)
                                                        setShowForm(true)
                                                    }}
                                                    className="text-blue-600 hover:text-blue-900 mr-3 font-semibold"
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        handleDelete(item._id)
                                                    }
                                                    className="text-red-600 hover:text-red-900 font-semibold"
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </>
                                    )}
                                    {activeTab === "projects" && (
                                        <>
                                            <td className="px-6 py-4 border-b border-gray-100 text-gray-800 font-medium">
                                                {item.title}
                                            </td>
                                            <td className="px-6 py-4 border-b border-gray-100 text-gray-700">
                                                {item.category}
                                            </td>
                                            <td className="px-6 py-4 border-b border-gray-100 text-gray-700">
                                                {item.featured ? "Yes" : "No"}
                                            </td>
                                            <td className="px-6 py-4 border-b border-gray-100">
                                                <button
                                                    onClick={() => {
                                                        setEditingItem(item)
                                                        setFormData(item)
                                                        setShowForm(true)
                                                    }}
                                                    className="text-blue-600 hover:text-blue-900 mr-3 font-semibold"
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        handleDelete(item._id)
                                                    }
                                                    className="text-red-600 hover:text-red-900 font-semibold"
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </>
                                    )}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Header */}
            <div className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-6">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">
                                🎛️ Admin Dashboard
                            </h1>
                            <p className="text-gray-600">
                                Kelola data portfolio Anda
                            </p>
                        </div>
                        <button
                            onClick={handleLogout}
                            className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Tabs */}
                <div className="mb-8">
                    <nav className="flex space-x-8">
                        {["skills", "experiences", "projects"].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`py-2 px-1 border-b-2 font-medium text-sm capitalize ${
                                    activeTab === tab
                                        ? "border-blue-500 text-blue-600"
                                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                                }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </nav>
                </div>

                {/* Table */}
                {renderTable()}
            </div>

            {/* Form Modal */}
            {showForm && renderForm()}
        </div>
    )
}

export default function AdminPage() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        const loggedIn = localStorage.getItem("adminLoggedIn") === "true"
        setIsLoggedIn(loggedIn)
    }, [])

    if (!isLoggedIn) {
        return <LoginForm onLogin={setIsLoggedIn} />
    }

    return <AdminDashboard />
}
