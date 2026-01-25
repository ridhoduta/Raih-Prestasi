"use client";

import React, { useState } from "react";

const Home = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/admin/competition-categories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    });

    const result = await res.json();

    if (!res.ok) {
      setMessage(result.message || "Gagal menambahkan kategori");
      return;
    }

    setMessage("Kategori berhasil ditambahkan ✅");
    setName("");
  };

  return (
    <>
      <h1>Tambah Competition Category</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nama kategori"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <button type="submit">Simpan</button>
      </form>

      {message && <p>{message}</p>}
    </>
  );
};

export default Home;
