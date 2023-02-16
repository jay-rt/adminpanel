import Featured from "../../components/charts/featured/Featured";
import Chart from "../../components/charts/regular/Chart";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Widget from "../../components/widget/Widget";
import List from "../../components/table/Table";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart />
        </div>
        <div className="list-container">
          <h1 className="list-title">Latest Transactions</h1>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Home;
