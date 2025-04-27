import {
  am5,
  am5radar,
  am5themes_Animated,
  am5xy,
} from "@/common/lib/utils/amchart";

/* Chart code */
const mainColor = am5.color(0xc83830);
const secondaryColor = am5.color(0xd9cec8);

export const ChartDays = () => {
  return (
    <div id="chartdiv">
      <div id="piediv"></div>
      <div id="linediv"></div>
      <div id="gaugediv"></div>
      <div id="mapdiv"></div>
      <div id="columndiv"></div>
    </div>
  );
};

const makeLineSeriesChart = () => {
  // Create root element
  // https://www.amcharts.com/docs/v5/getting-started/#Root_element
  let root = am5.Root.new("linediv");

  let myTheme = am5.Theme.new(root);

  myTheme.rule("Label").setAll({
    fontSize: "0.8em",
  });

  root.setThemes([am5themes_Animated.new(root), myTheme]);

  // Create chart
  // https://www.amcharts.com/docs/v5/charts/xy-chart/
  let chart = root.container.children.push(
    am5xy.XYChart.new(root, {
      panX: false,
      panY: false,
      wheelX: "panX",
      wheelY: "zoomX",
      paddingLeft: 0,
      layout: root.verticalLayout,
    })
  );

  let data = [
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
  // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
  let xRenderer = am5xy.AxisRendererX.new(root, {
    minorGridEnabled: true,
    minGridDistance: 60,
  });
  let xAxis = chart.xAxes.push(
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

  let yAxis = chart.yAxes.push(
    am5xy.ValueAxis.new(root, {
      min: 0,
      extraMax: 0.1,
      renderer: am5xy.AxisRendererY.new(root, {
        strokeOpacity: 0.1,
      }),
    })
  );

  // Add series
  // https://www.amcharts.com/docs/v5/charts/xy-chart/series/

  let series1 = chart.series.push(
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

  let series2 = chart.series.push(
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
  // https://www.amcharts.com/docs/v5/concepts/animations/
  chart.appear(1000, 100);
  series1.appear(1000, 500);
  series2.appear(1000, 1500);
};

const makeRadarGauge = () => {
  const continents = [
    "europe",
    "asia",
    "northAmerica",
    "southAmerica",
    "oceania",
    "africa",
  ];
  const continentNames: {
    [key: string]: string;
  } = {
    europe: "Europe",
    asia: "Asia",
    northAmerica: "North America",
    southAmerica: "South America",
    oceania: "Oceania",
    africa: "Africa",
  };

  const root = am5.Root.new("gaugediv");

  var myTheme = am5.Theme.new(root);
  myTheme.rule("Label").setAll({
    fontSize: "0.8em",
  });

  root.setThemes([am5themes_Animated.new(root), myTheme]);

  // Create chart
  // https://www.amcharts.com/docs/v5/charts/radar-chart/
  var radarGauge = root.container.children.push(
    am5radar.RadarChart.new(root, {
      radius: am5.percent(90),
      panX: false,
      panY: false,
      wheelX: "none",
      wheelY: "none",
      innerRadius: am5.percent(20),
      startAngle: -90,
      endAngle: 180,
    })
  );

  radarGauge.states.create("hidden", {
    width: 1,
    opacity: 0,
    visible: false,
  });

  // Data
  var data: { category: string; value: number; full: number; id: string }[] =
    [];

  am5.array.each(continents, function (id) {
    data.push({
      category: continentNames[id],
      value: Math.round(Math.random() * 70) + 20,
      full: 100,
      id: id,
    });
  });

  // Create axes and their renderers
  // https://www.amcharts.com/docs/v5/charts/radar-chart/#Adding_axes
  var xRenderer = am5radar.AxisRendererCircular.new(root, {
    minGridDistance: 30,
  });

  xRenderer.labels.template.setAll({
    radius: 10,
  });

  xRenderer.grid.template.setAll({
    forceHidden: true,
  });

  var xAxis = radarGauge.xAxes.push(
    am5xy.ValueAxis.new(root, {
      renderer: xRenderer,
      min: 0,
      max: 100,
      strictMinMax: true,
      numberFormat: "#'%'",
    })
  );

  //xRenderer.labels.template.set("forceHidden", true)

  var yRenderer = am5radar.AxisRendererRadial.new(root, {
    minGridDistance: 20,
  });

  yRenderer.labels.template.setAll({
    forceHidden: true,
  });

  yRenderer.grid.template.setAll({
    forceHidden: true,
  });

  var yAxis = radarGauge.yAxes.push(
    am5xy.CategoryAxis.new(root, {
      categoryField: "category",
      renderer: yRenderer,
    })
  );

  yAxis.data.setAll(data);

  // Create series
  // https://www.amcharts.com/docs/v5/charts/radar-chart/#Adding_series
  var series1 = radarGauge.series.push(
    am5radar.RadarColumnSeries.new(root, {
      xAxis: xAxis,
      yAxis: yAxis,
      clustered: false,
      valueXField: "full",
      categoryYField: "category",
      fill: root.interfaceColors.get("alternativeBackground"),
    })
  );

  series1.columns.template.setAll({
    width: am5.p100,
    fillOpacity: 0.1,
    strokeOpacity: 0,
    cornerRadius: 20,
  });

  series1.data.setAll(data);

  var gaugeSeries = radarGauge.series.push(
    am5radar.RadarColumnSeries.new(root, {
      xAxis: xAxis,
      yAxis: yAxis,
      clustered: false,
      valueXField: "value",
      fill: mainColor,
      stroke: mainColor,
      categoryYField: "category",
    })
  );

  gaugeSeries.columns.template.setAll({
    width: am5.p100,
    strokeOpacity: 0,
    cornerRadius: 20,
    cursorOverStyle: "pointer",
    tooltipText: "{category}: {valueX}",
  });

  gaugeSeries.columns.template.states.create("dimm", {
    opacity: 0.4,
  });

  gaugeSeries.data.setAll(data);

  // Animate chart and series in
  // https://www.amcharts.com/docs/v5/concepts/animations/#Initial_animation
  gaugeSeries.appear(2000);
};
