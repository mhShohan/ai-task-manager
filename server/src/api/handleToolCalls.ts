import taskServices from '@/services/task.services';

async function handleToolCalls(toolCall) {
  const functionName = toolCall.function.name;
  const args = JSON.parse(toolCall.function.arguments);

  let data;

  switch (functionName) {
    case 'create_task':
      await taskServices.create(args);
      data = await taskServices.getAll();
      break;
    case 'get_all_tasks':
      data = await taskServices.getAll(args);
      break;
    case 'get_single_task':
      data = await taskServices.getSingle(args.id);
      break;
    case 'update_task':
      await taskServices.update(args.index, args);
      data = await taskServices.getAll();
      break;
    case 'delete_task':
      await taskServices.delete(args);
      data = await taskServices.getAll();
      break;
    default:
      data = [];
      break;
  }

  return data;
}

export default handleToolCalls;
