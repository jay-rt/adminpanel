import Featured from "../../components/charts/featured/Featured";
import Chart from "../../components/charts/regular/Chart";
import Widget from "../../components/widget/Widget";
import List from "../../components/tables/basic/Table";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="widgets">
        <Widget type="user" />
        <Widget type="order" />
        <Widget type="earning" />
        <Widget type="balance" />
      </div>
      <div className="charts">
        <Featured />
        <Chart title="Last 6 Months (Revenue)" aspect={2.5 / 1} />
      </div>
      <div className="list-container">
        <h1 className="list-title">Latest Transactions</h1>
        <List />
      </div>
    </div>
  );
};

export default Home;
