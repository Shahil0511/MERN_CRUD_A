import { useState } from "react";
import axios from "axios";
const Form = () => {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const todo = {
      task,
      description,
    };
    try {
      const response = await axios.post(
        "http://localhost:5000/api/todos",
        todo
      );
      console.log("data Saved", response.data);
      setDescription("");
      setTask("");
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  return (
    <div className="container my-5">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputTask" className="form-label">
            Task
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputTask"
            aria-describedby="taskHelp"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputDescription" className="form-label">
            Description
          </label>
          <textarea
            value={description}
            className="form-control"
            id="exampleInputDescription"
            rows="3"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
