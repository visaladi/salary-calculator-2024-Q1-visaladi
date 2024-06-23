// src/components/TaskList.js
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Task from './Task';
import ReactPaginate from 'react-paginate';
import { TaskContext } from '../context/TaskContext';

const TaskList = () => {
  const { tasks, setTasks } = useContext(TaskContext);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('https://6363c8f68a3337d9a2e7d805.mockapi.io/api/to-do');
        setTasks(response.data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };
    fetchTasks();
  }, [setTasks]);

  const PER_PAGE = 8;
  const offset = currentPage * PER_PAGE;
  const pageCount = Math.ceil(tasks.length / PER_PAGE);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div>
      <h2>Task List</h2>
      <div className="task-list">
        {tasks.slice(offset, offset + PER_PAGE).map(task => (
          <Task key={task.id} task={task} />
        ))}
      </div>
      <ReactPaginate
        previousLabel={"← Previous"}
        nextLabel={"Next →"}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        previousLinkClassName={"pagination__link"}
        nextLinkClassName={"pagination__link"}
        disabledClassName={"pagination__link--disabled"}
        activeClassName={"pagination__link--active"}
      />
    </div>
  );
};

export default TaskList;
