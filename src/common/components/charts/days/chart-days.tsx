import { useEffect } from "react";
import { am5, am5themes_Animated, am5xy } from "@/common/lib/utils/amchart";

/* Chart code */
const mainColor = am5.color(0x7F56D9);
const secondaryColor = am5.color(0xd9cec8);

const ChartDays = () => {
  useEffect(() => {
    // Create root element
    const root = am5.Root.new("linediv");

    const myTheme = am5.Theme.new(root);
    myTheme.rule("Label").setAll({
      fontSize: "0.8em",
    });

    root._logo?.dispose()

    root.setThemes([am5themes_Animated.new(root), myTheme]);

    // Create chart
    const chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: false,
        panY: false,
        wheelX: "panX",
        wheelY: "zoomX",
        paddingLeft: 0,
        layout: root.verticalLayout,
      })
    );

    const data = [
      {
        year: "2021",
        income: 18.5,
        expenses: 12.1,
      },
      {
        year: "2022",
        income: 22.2,
        expenses: 30.5,
      },
      {
        year: "2023",
        income: 39.1,
        expenses: 34.9,
      },
      {
        year: "2024",
        income: 45.5,
        expenses: 31.1,
      },
      {
        year: "2025",
        income: 30.6,
        expenses: 22.2,
        strokeSettings: {
          strokeWidth: 3,
          strokeDasharray: [5, 5],
        },
      },
      {
        year: "2026",
        income: 34.1,
        expenses: 32.9,
        info: "(projection)",
      },
    ];

    // Create axes
    const xRenderer = am5xy.AxisRendererX.new(root, {
      minorGridEnabled: true,
      minGridDistance: 60,
    });
    const xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        categoryField: "year",
        renderer: xRenderer,
        tooltip: am5.Tooltip.new(root, {}),
      })
    );
    xRenderer.grid.template.setAll({
      location: 1,
    });

    xAxis.data.setAll(data);

    const yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        min: 0,
        extraMax: 0.1,
        renderer: am5xy.AxisRendererY.new(root, {
          strokeOpacity: 0.1,
        }),
      })
    );

    // Add series
    const series1 = chart.series.push(
      am5xy.LineSeries.new(root, {
        name: "Income",
        xAxis: xAxis,
        yAxis: yAxis,
        stroke: secondaryColor,
        fill: secondaryColor,
        valueYField: "income",
        categoryXField: "year",
        tooltip: am5.Tooltip.new(root, {
          pointerOrientation: "horizontal",
          labelText: "{name}: {valueY} {info}",
        }),
      })
    );

    series1.data.setAll(data);
    series1.strokes.template.setAll({
      strokeWidth: 3,
      templateField: "strokeSettings",
    });

    const series2 = chart.series.push(
      am5xy.LineSeries.new(root, {
        name: "Expenses",
        xAxis: xAxis,
        yAxis: yAxis,
        stroke: mainColor,
        fill: mainColor,
        valueYField: "expenses",
        categoryXField: "year",
        tooltip: am5.Tooltip.new(root, {
          pointerOrientation: "horizontal",
          labelText: "{name}: {valueY} {info}",
        }),
      })
    );

    series2.strokes.template.setAll({
      strokeWidth: 3,
      templateField: "strokeSettings",
    });

    series2.data.setAll(data);

    chart.set("cursor", am5xy.XYCursor.new(root, {}));

    // Make stuff animate on load
    chart.appear(1000, 100);
    series1.appear(1000, 500);
    series2.appear(1000, 1500);

    // Cleanup on unmount
    return () => {
      root.dispose();
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div id="chartdiv">
      <div id="linediv" style={{ width: "100%", height: "250px" }}></div>
    </div>
  );
};

export default ChartDays;
