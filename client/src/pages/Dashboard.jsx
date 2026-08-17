import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const user = JSON.parse(
    localStorage.getItem("user") || "{}"
  );

  const [items, setItems] = useState([]);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  const [editingId, setEditingId] = useState(null);

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const api = axios.create({
    baseURL: "http://localhost:5000/api",
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  const fetchItems = async () => {
    try {
      const response = await api.get("/items");
      setItems(response.data);
    } catch (error) {
      setError("Failed to load items");
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const resetForm = () => {
    setName("");
    setDescription("");
    setPrice("");
    setCategory("");
    setEditingId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");
    setError("");

    const itemData = {
      name,
      description,
      price: Number(price),
      category
    };

    try {
      if (editingId) {
        await api.put(
          `/items/${editingId}`,
          itemData
        );

        setMessage("Item updated successfully");
      } else {
        await api.post("/items", itemData);

        setMessage("Item created successfully");
      }

      resetForm();
      fetchItems();
    } catch (error) {
      setError(
        error.response?.data?.message ||
          "Operation failed"
      );
    }
  };

  const handleEdit = (item) => {
    setEditingId(item._id);
    setName(item.name);
    setDescription(item.description);
    setPrice(item.price);
    setCategory(item.category);

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this item?"
    );

    if (!confirmed) return;

    try {
      await api.delete(`/items/${id}`);

      setMessage("Item deleted successfully");

      fetchItems();
    } catch (error) {
      setError("Failed to delete item");
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <div className="dashboard">

      <nav className="navbar">
        <div>
          <h2>StackCraft</h2>
        </div>

        <div className="nav-right">
          <span>
            Welcome, {user.name || "User"}
          </span>

          <button onClick={logout}>
            Logout
          </button>
        </div>
      </nav>

      <main className="dashboard-content">

        <div className="dashboard-header">
          <div>
            <h1>Dashboard</h1>

            <p>
              Manage your items
            </p>
          </div>
        </div>

        {message && (
          <div className="success-message">
            {message}
          </div>
        )}

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        <section className="form-card">

          <h2>
            {editingId
              ? "Edit Item"
              : "Add New Item"}
          </h2>

          <form onSubmit={handleSubmit}>

            <div className="form-grid">

              <div>
                <label>Name</label>

                <input
                  type="text"
                  value={name}
                  onChange={(e) =>
                    setName(e.target.value)
                  }
                  placeholder="Item name"
                  required
                />
              </div>

              <div>
                <label>Category</label>

                <input
                  type="text"
                  value={category}
                  onChange={(e) =>
                    setCategory(e.target.value)
                  }
                  placeholder="Category"
                  required
                />
              </div>

              <div>
                <label>Price</label>

                <input
                  type="number"
                  value={price}
                  onChange={(e) =>
                    setPrice(e.target.value)
                  }
                  placeholder="Price"
                  min="0"
                  required
                />
              </div>

              <div>
                <label>Description</label>

                <input
                  type="text"
                  value={description}
                  onChange={(e) =>
                    setDescription(e.target.value)
                  }
                  placeholder="Description"
                  required
                />
              </div>

            </div>

            <div className="form-buttons">

              <button type="submit">
                {editingId
                  ? "Update Item"
                  : "Add Item"}
              </button>

              {editingId && (
                <button
                  type="button"
                  className="secondary-button"
                  onClick={resetForm}
                >
                  Cancel
                </button>
              )}

            </div>

          </form>

        </section>

        <section className="items-section">

          <div className="section-title">
            <h2>Your Items</h2>

            <span>
              {items.length} items
            </span>
          </div>

          {items.length === 0 ? (
            <div className="empty-state">
              No items found. Add your first item above.
            </div>
          ) : (
            <div className="items-grid">

              {items.map((item) => (

                <div
                  className="item-card"
                  key={item._id}
                >

                  <div className="item-top">

                    <h3>{item.name}</h3>

                    <span className="category">
                      {item.category}
                    </span>

                  </div>

                  <p>
                    {item.description}
                  </p>

                  <h3>
                    ₹{Number(item.price).toLocaleString("en-IN")}
                  </h3>

                  <div className="item-actions">

                    <button
                      onClick={() =>
                        handleEdit(item)
                      }
                    >
                      Edit
                    </button>

                    <button
                      className="delete-button"
                      onClick={() =>
                        handleDelete(item._id)
                      }
                    >
                      Delete
                    </button>

                  </div>

                </div>

              ))}

            </div>
          )}

        </section>

      </main>

    </div>
  );
}

export default Dashboard;