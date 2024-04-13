import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { collection, query, where, getDocs, doc } from "firebase/firestore";
import { db } from "../firebase";
import Chats from "./Chats";

function Search() {
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  const handleSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", userName)
    );

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (error) {
      setErr(error)
    }
  };

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };

  return (
    <div className="searchContainer">
      <div className="searchForm">
        <FaSearch
          style={{
            color: "rgb(184, 184, 184)",
            fontSize: "20px",
            cursor: "pointer",
          }}
        />
        <input
          type="text"
          placeholder="Search"
          onKeyDown={handleKey}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Search;