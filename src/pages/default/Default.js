import "./Default.css";
import Card from "../../components/card/Card";
import SummaryTable from "../../components/summary-table/SummaryTable";
import { useNavigate } from "react-router-dom";
import ProjectionsAndActuals from "../../components/projections-and-actuals/ProjectionsAndActuals";
import RevenueChart from "../../components/revenue-chart/RevenueChart";
import LocationRevenue from "../../components/revenue-by-location/LocationRevenue";
import TotalSales from "../../components/total-sales/TotalSales";
export default function Default() {
  const navigate = useNavigate();
  const clickHandler = (card) => {
    if (card.name === "Orders") navigate("orders");
  };
  const customersCard = {
    name: "Customers",
    value: "3,781",
    percentage: 11.01,
    bgColor: "var(--customer-card-bg-color)",
    color: "var(--black)",
    clickHandler,
  };
  const ordersCard = {
    name: "Orders",
    value: "1,219",
    percentage: -0.03,
    bgColor: "var(--orders-card-bg-color)",
    clickHandler,
  };
  const revenueCard = {
    name: "Revenue",
    value: "$695",
    percentage: 15.03,
    bgColor: "var(--orders-card-bg-color)",
    clickHandler,
  };
  const growthCard = {
    name: "Growth",
    value: "30.1%",
    percentage: 6.08,
    bgColor: "var(--growth-card-bg-color)",
    color: "var(--black)",
    clickHandler,
  };
  const topSellingProductsList = [
    {
      name: "ASOS Ridley High Waist",
      price: "$79.49",
      quantity: "82",
      amount: "$6,518.18",
    },
    {
      name: "Marco Lightweight Shirt",
      price: "$128.50",
      quantity: "37",
      amount: "$4,754.50",
    },
    {
      name: "Half Sleeve  Shirt",
      price: "$39.99",
      quantity: "64",
      amount: "$2,559.36",
    },
    {
      name: "Lightweight Jacket",
      price: "$20.00",
      quantity: "184",
      amount: "$3,680.00",
    },
    {
      name: "Marco Shoes",
      price: "$79.49",
      quantity: "64",
      amount: "$1,965.81",
    },
  ];
  const topSellingProductsColumns = ["name", "price", "quantity", "amount"];
  return (
    <div className="default-layout">
      <main className="middle-content">
        <p style={{ fontWeight: 600, marginBottom: "20px" }}>eCommerce</p>
        <div className="section">
          <div style={{ display: "flex" }} className="section-1">
            <div className="card-details">
              <Card cardInfo={customersCard} />
              <Card cardInfo={ordersCard} />
              <Card cardInfo={revenueCard} />
              <Card cardInfo={growthCard} />
            </div>
            <ProjectionsAndActuals />
          </div>
          <div className="section-2">
            <RevenueChart />
            <LocationRevenue />
          </div>
          <div className="section-3">
            <SummaryTable
              tableRecords={topSellingProductsList}
              tableName={"Top Selling Products"}
              tableColumns={topSellingProductsColumns}
            />
            <TotalSales />
          </div>
        </div>
      </main>
    </div>
  );
}
