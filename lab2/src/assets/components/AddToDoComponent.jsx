import React, { useState } from "react";

const AddToDoComponent = ({ onSubmit }) => {
    const [title, setTitle] = useState("");

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (title.trim()) {
            onSubmit(title);
            setTitle("");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter a new task"
                value={title}
                onChange={handleTitleChange}
            />
            <button type="submit">Add</button>
        </form>
    );
};

export default AddToDoComponent;
