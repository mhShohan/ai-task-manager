// Function tools for Task Service operations
const taskTools = {
  // Create new task
  createNewTaskTool: () => ({
    type: 'function',
    function: {
      name: 'create_task',
      description: 'Insert a new task into mongoDB',
      parameters: {
        type: 'object',
        properties: {
          title: {
            type: 'string',
            description: 'Title of the task',
          },
          status: {
            type: 'string',
            enum: ['pending', 'complete', 'declined'],
            description: 'Status of the task',
          },
          description: {
            type: 'string',
            description:
              'Details description of the task. If description is not provide then try to generate description',
          },
        },
        required: ['title', 'description', 'status'],
      },
    },
  }),

  // Get all tasks with optional query parameters
  getAllTasksTool: () => ({
    type: 'function',
    function: {
      name: 'get_all_tasks',
      description: 'Retrieve all tasks from mongoDB with optional filtering and sorting',
      parameters: {
        type: 'object',
        properties: {
          status: {
            type: 'string',
            enum: ['pending', 'complete', 'declined'],
            description: 'Filter tasks by status',
          },
          title: {
            type: 'string',
            description: 'Filter tasks by title (partial match)',
          },
          sortBy: {
            type: 'string',
            enum: ['createdAt', 'index', 'status'],
            description: 'Sort all tasks',
          },
          sortOrder: {
            type: 'string',
            enum: ['ascending', 'descending'],
            description: 'Sort tasks ascending or descending',
          },
        },
        required: [],
      },
    },
  }),

  // Get single task by ID
  getSingleTaskTool: () => ({
    type: 'function',
    function: {
      name: 'get_single_task',
      description: 'Retrieve a specific task by its ID from mongoDB',
      parameters: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'MongoDB ObjectId of the task',
          },
        },
        required: ['id'],
      },
    },
  }),

  // Update task
  updateTaskTool: () => ({
    type: 'function',
    function: {
      name: 'update_task',
      description: 'Update an existing task in mongoDB',
      parameters: {
        type: 'object',
        properties: {
          index: {
            type: 'string',
            description: 'index of the task to update',
          },
          title: {
            type: 'string',
            description: 'New title of the task',
          },
          status: {
            type: 'string',
            enum: ['pending', 'complete', 'declined'],
            description: 'New status of the task',
          },
          description: {
            type: 'string',
            description: 'New description of the task',
          },
        },
        required: ['id'],
      },
    },
  }),

  // Delete task
  deleteTaskTool: () => ({
    type: 'function',
    function: {
      name: 'delete_task',
      description: 'Delete task from mongoDB',
      parameters: {
        type: 'object',
        properties: {
          _id: {
            type: 'string',
            description: 'MongoDB ObjectId of the task to delete',
          },
          index: {
            type: 'number',
            description: 'index of the task to delete',
          },
          status: {
            type: 'string',
            description: 'status of the task to delete',
          },
        },
        required: [],
      },
    },
  }),
};

// Function to get all tools as an array
const tools = () => {
  return [
    taskTools.createNewTaskTool(),
    taskTools.getAllTasksTool(),
    taskTools.getSingleTaskTool(),
    taskTools.updateTaskTool(),
    taskTools.deleteTaskTool(),
  ];
};

export { taskTools, tools };
