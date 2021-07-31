<template>
  <el-tabs tab-position="left" tabstyle="height: 200px">
    <el-tab-pane label="2021WW31">
      <div>
        <h1>2021WW31 Release</h1>
        <div align="center">
          <apexchart
            type="radar"
            height="500"
            :options="chartOptions"
            :series="series"
          ></apexchart>
        </div>
      </div>
    </el-tab-pane>
    <el-tab-pane label="2021WW27">
      <div>
        <h1>2021WW27 Release</h1>
        <div align="center">
          <apexchart
            type="radar"
            height="500"
            :options="chartOptions"
            :series="series"
          ></apexchart>
        </div>
      </div>
    </el-tab-pane>
    <el-tab-pane label="2021WW24">
      <div>
        <h1>2021WW24 Release</h1>
        <div align="center">
          <apexchart
            type="radar"
            height="500"
            :options="chartOptions"
            :series="series"
          ></apexchart>
        </div>
      </div>
    </el-tab-pane>
  </el-tabs>
</template>

<script>

export default {
  data: function () {
    return {
      chartOptions: {
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          categories: ['1991', '1992', '1993', '1994', '1995', 1996, 1997, 1998]
        }
      },
      series: [
        {
          name: 'series-1',
          data: [30, 40, 35, 50, 49, 60, 70, 91]
        },
        {
          name: 'series-2',
          data: [67, 22, 33, 6, 14, 60, 7, 13]
        }
      ]
    }
  }
}
</script>
