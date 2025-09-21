import "./SummaryTable.css";
export default function SummaryTable({
  tableName,
  tableRecords,
  tableColumns,
}) {
  const toUpperCase = (str) => str.slice(0, 1).toUpperCase() + str.slice(1);
  return (
    <div className="summary-table">
      <h4 className="table-title">{tableName}</h4>
      <table>
        <thead className="table-heading">
          <tr>
            {tableColumns.map((col, index) => (
              <td className="table-cell" key={`${index + Date.now()}`}>
                {toUpperCase(col)}
              </td>
            ))}
          </tr>
        </thead>
        <tbody className="table-body">
          {tableRecords.map((row, index) => (
            <tr key={`${index + Date.now()}`}>
              {tableColumns.map((key, index) => (
                <td className="table-cell" key={`${index + Date.now()}`}>
                  {row[key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
