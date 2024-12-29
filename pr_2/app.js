// Import functions from taskManager.js
import { addTask, sortTasksByPriority, displayTasksDueInTimeframe, sendReminders } from './taskManager.js';

// Example usage
addTask('Complete project report', 2, 2);
addTask('college work', 1, 1);
addTask('SGP waiting', 3, 3);

sortTasksByPriority();
displayTasksDueInTimeframe(3);
sendReminders();
