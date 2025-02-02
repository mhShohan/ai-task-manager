import useTasks from '@/store/useTask';

function formatDate(isoString: string) {
  const date = new Date(isoString);

  // Extract hours, minutes, seconds
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  // Convert to 12-hour format
  hours = hours % 12 || 12;

  // Format date part
  const day = date.getDate();
  const month = date.toLocaleString('en-US', { month: 'short' });
  const year = date.getFullYear();

  return `${hours}:${String(minutes).padStart(2, '0')} ${ampm} - ${day} ${month}, ${year}`;
}

const TaskTable = () => {
  const { tasks } = useTasks();

  return (
    <div className='p-4 w-[80%] mx-auto mt-6'>
      <table className='w-full border border-gray-300 shadow-lg rounded-lg'>
        <thead>
          <tr className='bg-gray-200 text-left'>
            <th className='p-2 border w-[5%]'>Index</th>
            <th className='p-2 border w-[25%]'>Title</th>
            <th className='p-2 border flex-grow'>Description</th>
            <th className='p-2 border w-[10%] text-center'>Status</th>
            <th className='p-2 border w-[20%] text-center'>Created At</th>
          </tr>
        </thead>
        <tbody>
          {tasks?.map((item, index) => (
            <tr key={index} className='hover:bg-gray-100'>
              <td className='p-2 border text-center'>{item.index}</td>
              <td className='p-2 border'>{item.title}</td>
              <td className='p-2 border text-sm'>{item.description}</td>
              <td className='p-2 border uppercase text-center'>
                <span
                  className={`rounded-full px-4 text-sm font-semibold text-white py-[2px] ${
                    item.status === 'pending' && 'bg-amber-600'
                  } ${item.status === 'complete' && 'bg-green-600'} ${
                    item.status === 'declined' && 'bg-red-600'
                  }`}
                >
                  {item.status}
                </span>
              </td>
              <td className='p-2 border text-sm text-center'>{formatDate(item.createdAt)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskTable;
