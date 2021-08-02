<template>
  <el-tabs tab-position="left" tabstyle="height: 200px">
    <el-tab-pane v-for="(release, index) in releaseData" :key="index" :label="release.name">
      <div>
        <h1>{{ release.name }} Performance</h1>
        <div align="center">
          <apexchart
            type="radar"
            height="800"
            :options="release.chartOptions"
            :series="release.series"
          ></apexchart>
        </div>
      </div>
    </el-tab-pane>
    <el-tab-pane label="Workload/Metrics">
      <div>
        <el-row :gutter="12">
          <el-col :span="8" v-for="(metric, index) in Object.keys(metricsChart)" :key="index" >
            <el-card class='metric-card' shadow="always">
              <h2>{{ metric }}</h2>
              <apexchart type="line" height="200" :options="metricsChart[metric].chartOptions" :series="metricsChart[metric].series"></apexchart>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import { useStore } from 'vuex'

export default {
  mounted: function () {
    console.log('mounted SGX.')
    this.$store = useStore()
  },
  data: function () {
    return {
      store: null
    }
  },
  computed: {
    releaseData () {
      var returnArray = []

      for (var releaseIndex in this.$store.getters.sgx_releases) {
        var release = this.$store.getters.sgx_releases[releaseIndex]
        var seriesProduction = []
        for (let index = 0; index < Object.values(this.$store.state.sgx[release]).length; index++) {
          seriesProduction.push(100)
        }

        returnArray.push(
          {
            name: release,
            chartOptions: {
              chart: {
                id: 'chart-' + release
              },
              yaxis: {
                max: 120
              },
              xaxis: {
                categories: Object.keys(this.$store.state.sgx[release])
              }
            },
            series: [
              {
                name: 'sgx/non-sgx',
                data: Object.values(this.$store.state.sgx[release])
              },
              {
                name: 'production',
                data: seriesProduction
              }
            ]
          }
        )
      }
      return returnArray
    },
    metricsData () {
      var metricsNames = []
      var metricsArray = {}
      for (var releaseIndex in this.$store.getters.sgx_releases) {
        var release = this.$store.getters.sgx_releases[releaseIndex]
        var metricsKeys = Object.keys(this.$store.state.sgx[release])
        var metricsValues = Object.values(this.$store.state.sgx[release])
        for (var metricsIndex in metricsKeys) {
          var metric = metricsKeys[metricsIndex]
          if (!metricsNames.includes(metric, 0)) {
            metricsNames.push(metric)
            metricsArray[metric] = {}
          }
          metricsArray[metric][release] = metricsValues[metricsIndex]
        }
      }
      return metricsArray
    },
    metricsChart () {
      var returnData = {}
      var metricsNames = Object.keys(this.metricsData)
      for (var index in metricsNames) {
        var name = metricsNames[index]
        returnData[name] = {
          x: Object.keys(this.metricsData[name]).reverse(),
          chartOptions: {
            chart: {
              height: 350,
              type: 'line',
              zoom: {
                enabled: true
              }
            },
            dataLabels: {
              enabled: true
            },
            xaxis: {
              categories: Object.keys(this.metricsData[name]).reverse()
            }
          },
          series: [
            {
              name: 'metric',
              data: Object.values(this.metricsData[name]).reverse()
            }
          ]
        }
      }
      console.log(returnData)
      return returnData
    }
  }
}
</script>
<style>
.metric-card {
  position: relative;
  margin: 2px;
  width: 100%;
}
</style>
