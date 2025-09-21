import DataTable from "../../components/data-table/DataTable";
import "./Orders.css";
export function StatusCell({ type, content }) {
  return (
    <div className={`status status-${type}`}>
      <p className={`bullet bullet-${type}`}></p>
      <span>{content}</span>
    </div>
  );
}
export default function Orders() {
  const tableConfig = {
    isSupportMultiSelect: true,
    pagination: {
      isPaginationSupported: true,
      itemsPerPage: 4,
    },
    sort: {
      isSortSupported: true,
      sortColumn: "user",
    },
    search: {
      isSearchSupported: true,
      searchColumn: "user",
    },
  };
  const tableColumns = [
    {
      key: "orderId",
      displayName: "Order ID",
    },
    {
      key: "user",
      displayName: "User",
    },
    {
      key: "project",
      displayName: "Project",
    },
    {
      key: "address",
      displayName: "Address",
    },
    {
      key: "date",
      displayName: "Date",
    },
    {
      key: "status",
      displayName: "Status",
    },
  ];
  const tableRecords = [
    {
      orderId: {
        content: "#CM9801",
      },
      user: {
        isImageAvailable: true,
        imageName: "Natali",
        content: "Natali Craig",
      },
      project: {
        content: "Landing Page",
      },
      address: {
        content: "Meadow Lane Oakland",
      },
      date: {
        content: "Just now",
        isIconAvailable: true,
        iconName: "Calendar",
      },
      status: {
        isRender: () =>
          StatusCell({ type: "in-progress", content: "In Progress" }),
      },
    },
    {
      orderId: {
        content: "#CM9802",
      },
      user: {
        isImageAvailable: true,
        imageName: "Kate",
        content: "Kate Morrison",
      },
      project: {
        content: "CRM Admin pages",
      },
      address: {
        content: "Larry San Francisco",
      },
      date: {
        content: "A minute ago",
        isIconAvailable: true,
        iconName: "Calendar",
      },
      status: {
        isRender: () => StatusCell({ type: "complete", content: "Complete" }),
      },
    },
    {
      orderId: {
        content: "#CM9803",
      },
      user: {
        isImageAvailable: true,
        imageName: "Drew",
        content: "Drew Cano",
      },
      project: {
        content: "Client Project",
      },
      address: {
        content: "Bagwell Avenue Ocala",
      },
      date: {
        content: "1 hour ago",
        isIconAvailable: true,
        iconName: "Calendar",
      },
      status: {
        isRender: () => StatusCell({ type: "pending", content: "Pending" }),
      },
    },
    {
      orderId: {
        content: "#CM9804",
      },
      user: {
        isImageAvailable: true,
        imageName: "Orlando",
        content: "Orlando Diggs",
      },
      project: {
        content: "Admin Dashboard",
      },
      address: {
        content: "Washburn Baton Rouge",
      },
      date: {
        content: "Yesterday",
        isIconAvailable: true,
        iconName: "Calendar",
      },
      status: {
        isRender: () => StatusCell({ type: "approved", content: "Approved" }),
      },
    },
    {
      orderId: {
        content: "#CM9805",
      },
      user: {
        isImageAvailable: true,
        imageName: "Andi",
        content: "Andi Lane",
      },
      project: {
        content: "App Landing Page",
      },
      address: {
        content: "Nest Lane Olivette",
      },
      date: {
        content: "Feb 2, 2023",
        isIconAvailable: true,
        iconName: "Calendar",
      },
      status: {
        isRender: () => StatusCell({ type: "rejected", content: "Rejected" }),
      },
    },
  ];
  return (
    <div className="orders">
      <DataTable
        dataTableName={"Order List"}
        tableConfig={tableConfig}
        tableColumns={tableColumns}
        tableRecords={tableRecords}
      />
    </div>
  );
}
