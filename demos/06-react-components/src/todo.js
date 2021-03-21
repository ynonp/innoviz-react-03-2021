import React, { useState } from 'react';
import _ from 'lodash';

function taskStyle(task) {
  let style = {};

  if (task.done) {
    style.textDecoration = 'line-through';
  }

  return style;
}


export default function TodoList(props) {
  const [ tasks, setTasks ] = useState([
    { text: 'Feed the cat', done: false },
    { text: 'Write some React', done: false },
    { text: 'Write more JavaScript', done: false },
    { text: 'aaa', done: false },
    { text: 'bbb', done: false },
    { text: 'ccc', done: false },
  ]);
  const [ newTaskText, setNewTaskText ] = useState('');

  function toggleTask(index) {
    setTasks(tasks => tasks.map((t, i) => (
      i === index ? { ...t, done: !t.done } : t
    )));
  }

  function shuffle() {
    setTasks(_.shuffle(tasks));
  }


  function addTask(text) {
    if (text === '') return;

    setTasks(tasks => [...tasks, { text, done: false }]);
    setNewTaskText('');
  }

  return (
    <div>
      <label>New Task:
        <input type="text" value={newTaskText} onChange={(e) => setNewTaskText(e.target.value)} />
      </label>
      <button onClick={() => addTask(newTaskText)}>Add</button>
      <button onClick={shuffle}>Shuffle</button>

      <ul style={{listStyle: 'none', padding: 0}}>
        {tasks.map((task, idx) => (
          <li
            style={taskStyle(task)}
            onClick={() => toggleTask(idx)}
          >
            <input type="checkbox" />
            {task.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

