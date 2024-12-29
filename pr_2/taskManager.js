
let tasks = [];


function addTask(title, dueTime, priority) {
  try {
    if (!title || !dueTime || !priority) {
      throw new Error('Missing fields: title, dueTime, or priority');
    }
    const task = {
      title,
      dueTime: parseInt(dueTime),
      priority: parseInt(priority),
    };
    tasks.push(task);
    console.log('Task added:', task);
  } catch (error) {
    console.error('Error adding task:', error.message);
  }
}


function sortTasksByPriority() {
  tasks.sort((a, b) => a.priority - b.priority);
  console.log('Tasks sorted by priority:', tasks);
}


function displayTasksDueInTimeframe(minutes) {
  const now = Date.now();
  const cutoffTime = now + minutes * 20000;

  const dueTasks = tasks.filter(task => {
    const taskDueTime = now + task.dueTime * 10000;
    return taskDueTime <= cutoffTime;
  });

  console.log(`Tasks due within the next ${minutes} minutes:`);
  dueTasks.forEach(task => console.log(task));
}


function sendReminders() {
  tasks.forEach(task => {
    const reminderTime = task.dueTime * 10000;
    setTimeout(() => {
      console.log(`Reminder: ${task.title} is due!`);
    }, reminderTime);
  });
}


export { addTask, sortTasksByPriority, displayTasksDueInTimeframe, sendReminders };
