import { useEffect } from "react";
import {
  am5,
  am5radar,
  am5themes_Animated,
  am5xy,
} from "@/common/lib/utils/amchart";

/* Chart code */
const mainColor = am5.color(0x7F56D9);

const ChartActiveUsers = () => {
  useEffect(() => {
    const continents = [
      "europe",
      "asia",
      "northAmerica",
     
    ];
    const continentNames: Record<string, string> = {
      europe: "Europe",
      asia: "Asia",
      northAmerica: "North America",
      
    };

    // Create root element
    const root = am5.Root.new("gaugediv");

    // Set themes
    const myTheme = am5.Theme.new(root);
    myTheme.rule("Label").setAll({
      fontSize: "0.8em",
    });
    root.setThemes([am5themes_Animated.new(root), myTheme]);

    // Create chart
    const radarGauge = root.container.children.push(
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

    // Generate data
    const data = continents.map((id) => ({
      category: continentNames[id],
      value: Math.round(Math.random() * 70) + 20,
      full: 100,
      id: id,
    }));

    // Create x-axis (circular)
    const xRenderer = am5radar.AxisRendererCircular.new(root, {
      minGridDistance: 30,
    });
    xRenderer.labels.template.setAll({ radius: 10 });
    xRenderer.grid.template.setAll({ forceHidden: true });

    const xAxis = radarGauge.xAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: xRenderer,
        min: 0,
        max: 100,
        strictMinMax: true,
        numberFormat: "#'%'",
      })
    );

    // Create y-axis (radial)
    const yRenderer = am5radar.AxisRendererRadial.new(root, {
      minGridDistance: 20,
    });
    yRenderer.labels.template.setAll({ forceHidden: true });
    yRenderer.grid.template.setAll({ forceHidden: true });

    const yAxis = radarGauge.yAxes.push(
      am5xy.CategoryAxis.new(root, {
        categoryField: "category",
        renderer: yRenderer,
      })
    );
    yAxis.data.setAll(data);

    // Create background series
    const series1 = radarGauge.series.push(
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

    // Create main gauge series
    const gaugeSeries = radarGauge.series.push(
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

    // Animate series
    gaugeSeries.appear(2000);

    // Cleanup function
    return () => {
      root.dispose();
    };
  }, []);

  return (
    <div id="chartdiv">
      <div id="gaugediv" style={{ width: "100%", height: "250px" }}></div>
    </div>
  );
};

export default ChartActiveUsers;
