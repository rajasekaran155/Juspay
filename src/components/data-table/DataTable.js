import { useState, useMemo } from "react";
import Icon from "../icon/Icon";
import Image from "../image/Image";
import "./DataTable.css";

export default function DataTable({
  dataTableName,
  tableRecords,
  tableColumns,
  tableConfig,
}) {
  const { isPaginationSupported, itemsPerPage } = tableConfig.pagination;
  const { isSortSupported, sortColumn } = tableConfig.sort;
  const { isSearchSupported, searchColumn } = tableConfig.search;
  const [activeIndex, setActiveIndex] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const [sortConfig, setSortConfig] = useState({
    key: sortColumn,
    direction: "asc",
  });

  const filteredRecords = useMemo(() => {
    if (!isSearchSupported || !searchValue) return tableRecords;
    return tableRecords.filter((record) =>
      record[searchColumn]?.content
        ?.toString()
        .toLowerCase()
        .includes(searchValue.toLowerCase())
    );
  }, [tableRecords, searchValue, isSearchSupported, searchColumn]);

  const sortedRecords = useMemo(() => {
    if (!isSortSupported || !sortConfig.key) return filteredRecords;
    const sorted = [...filteredRecords].sort((a, b) => {
      const aVal = a[sortConfig.key]?.content?.toString().toLowerCase();
      const bVal = b[sortConfig.key]?.content?.toString().toLowerCase();
      if (aVal < bVal) return sortConfig.direction === "asc" ? -1 : 1;
      if (aVal > bVal) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });
    return sorted;
  }, [filteredRecords, sortConfig, isSortSupported]);

  const totalPages = isPaginationSupported
    ? Math.ceil(sortedRecords.length / itemsPerPage)
    : 1;

  const displayRecords = useMemo(() => {
    if (!isPaginationSupported) return sortedRecords;
    const start = activeIndex * itemsPerPage;
    const end = start + itemsPerPage;
    return sortedRecords.slice(start, end);
  }, [sortedRecords, activeIndex, isPaginationSupported, itemsPerPage]);

  const handleSearch = (value) => {
    setSearchValue(value);
    setActiveIndex(0);
  };

  const handleSort = (key) => {
    if (!isSortSupported) return;
    setSortConfig((prev) => {
      if (prev.key === key) {
        return { key, direction: prev.direction === "asc" ? "desc" : "asc" };
      }
      return { key, direction: "asc" };
    });
  };

  return (
    <div className="data-table">
      <p className="data-table-title">{dataTableName}</p>
      <div className="table-actions">
        <div className="table-action-section-1">
          <Icon name="Plus" />
          <Icon name="Filter" />
          <Icon name="Sort" />
        </div>
        {isSearchSupported && (
          <div className="table-action-section-2">
            <Icon name="Search" />
            <input
              type="text"
              name="search"
              placeholder="Search"
              value={searchValue}
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>
        )}
      </div>
      <table>
        <thead>
          <tr>
            {tableConfig.isSupportMultiSelect && (
              <td className="table-cell table-cell-heading">
                <input type="checkbox" />
              </td>
            )}
            {tableColumns.map((col) => (
              <td
                key={col.key}
                className="table-cell table-cell-heading"
                style={{ cursor: "pointer" }}
                onClick={() => handleSort(col.key)}
              >
                {col.displayName}
              </td>
            ))}
          </tr>
        </thead>
        <tbody>
          {displayRecords.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {tableConfig.isSupportMultiSelect && (
                <td className="table-cell table-cell-body">
                  <input type="checkbox" />
                </td>
              )}
              {tableColumns.map((column) => (
                <td key={column.key} className="table-cell table-cell-body">
                  <div className="table-cell-content">
                    {row[column.key]?.isRender ? (
                      row[column.key].isRender()
                    ) : (
                      <>
                        {row[column.key]?.isIconAvailable && (
                          <Icon name={row[column.key].iconName} />
                        )}
                        {row[column.key]?.isImageAvailable && (
                          <Image name={row[column.key].imageName} />
                        )}
                        {row[column.key]?.content}
                      </>
                    )}
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {isPaginationSupported && totalPages > 1 && (
        <div className="pagination">
          <button
            className="pagination-btn"
            disabled={activeIndex === 0}
            onClick={() => setActiveIndex((index) => index - 1)}
          >
            <Icon name="ArrowLineLeft" />
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`pagination-btn ${
                index === activeIndex ? "active" : ""
              }`}
              onClick={() => setActiveIndex(index)}
            >
              {index + 1}
            </button>
          ))}
          <button
            className="pagination-btn"
            disabled={activeIndex === totalPages - 1}
            onClick={() => setActiveIndex((index) => index + 1)}
          >
            <Icon name="ArrowLineRightBlack" />
          </button>
        </div>
      )}
    </div>
  );
}
