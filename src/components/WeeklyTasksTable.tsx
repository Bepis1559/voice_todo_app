import Table from "react-bootstrap/Table";
import "../WeeklyTasksTable.css";
type props = {
  weeklyTasks: weeklyTasks;
};
export function WeeklyTasksTable({ weeklyTasks }: props) {
  const days = Object.keys(weeklyTasks) as (keyof weeklyTasks)[];

  return (
    <Table className="todosTable" responsive bordered>
      <thead>
        <tr>
          {days.map((day) => (
            <th key={day} className="bg-primary text-white text-center">
              {day}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {days.map((day) => (
            <td key={day}>
              {weeklyTasks[day].length > 0 ? (
                <ul className="list-unstyled mb-0">
                  {weeklyTasks[day].map(({ id, content }) => (
                    <li key={id}>{content}</li>
                  ))}
                </ul>
              ) : (
                <span className="text-muted">No tasks</span>
              )}
            </td>
          ))}
        </tr>
      </tbody>
    </Table>
  );
}
