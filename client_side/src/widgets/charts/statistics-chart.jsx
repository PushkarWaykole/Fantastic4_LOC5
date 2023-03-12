import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import PropTypes from "prop-types";
import Chart from "react-apexcharts";

export function StatisticsChart({ color, chart, title, description, footer }) {
  return (
    <Card
      className=""
      style={{
        background:
          "linear-gradient(to bottom left,#309900 13%, #217a09, #145d0b, #0b4009, #082600)",
      }}
    >
      <CardHeader variant="gradient" color={color}>
        <Chart {...chart} />
      </CardHeader>
      <CardBody className="p-6">
        <Typography variant="h6" color="white">
          {title}
        </Typography>
        <Typography variant="small" className="font-normal text-white">
          {description}
        </Typography>
      </CardBody>
      {footer && (
        <CardFooter
          className="rounded-lg border-t border-blue-gray-50 px-6 py-5"
          style={{
            background: "rgba(255,255,255,0.15)",
          }}
        >
          {footer}
        </CardFooter>
      )}
    </Card>
  );
}

StatisticsChart.defaultProps = {
  color: "blue",
  footer: null,
};

StatisticsChart.propTypes = {
  color: PropTypes.oneOf([
    "white",
    "blue-gray",
    "gray",
    "brown",
    "deep-orange",
    "orange",
    "amber",
    "yellow",
    "lime",
    "light-green",
    "green",
    "teal",
    "cyan",
    "light-blue",
    "blue",
    "indigo",
    "deep-purple",
    "purple",
    "pink",
    "red",
  ]),
  chart: PropTypes.object.isRequired,
  title: PropTypes.node.isRequired,
  description: PropTypes.node.isRequired,
  footer: PropTypes.node,
};

StatisticsChart.displayName = "/src/widgets/charts/statistics-chart.jsx";

export default StatisticsChart;
