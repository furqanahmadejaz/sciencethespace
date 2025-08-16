import { useState } from "react";

const SearchBox = ({setBlogs}) => {
  const [input, setInput] = useState("");
  

  const handleClear = () => {
    setInput("");
  };

  const handleSearch = async(value) => {
    // Implement your search logic here
    
    const response = await fetch("http://localhost:4000/api/blogs");
    const getBlogs = await response.json();
    setInput(value);

    const results = getBlogs.filter((blog) =>
    {
     return blog.title.toLowerCase().includes(value) || blog.body.toLowerCase().includes(value) || blog.author.toLowerCase().includes(value);
    })
    setBlogs(results);
  };

  return (
    <div className="searchbox">
      <div className="search-container">
        <span className="search-icon">&#128269;</span>
        <input
          type="text"
          onChange={(e) => handleSearch(e.target.value.toLowerCase())}
          value={input}
          placeholder="Search..."
        />
        {input && (
          <span className="clear-icon" onClick={handleClear}>
            &#10006;
          </span>
        )}
        <button className="search-button">Search</button>
      </div>
      </div>
  );
};

export default SearchBox;
