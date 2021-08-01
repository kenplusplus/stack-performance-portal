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
  </el-tabs>
</template>

<script>

import { useStore } from 'vuex'

export default {
  mounted: function () {
    console.log('mounted TDX.')
    this.$store = useStore()
    console.log(this.$store.state.tdx)
    for (var releaseIndex in this.$store.getters.tdx_releases) {
      console.log(this.$store.getters.tdx_releases[releaseIndex])
      var release = this.$store.getters.tdx_releases[releaseIndex]
      console.log(this.$store.state.tdx[release])
      console.log(Object.keys(this.$store.state.tdx[release]))
      console.log(Object.values(this.$store.state.tdx[release]))
      console.log(Object.values(this.$store.state.tdx[release]).length)
      var seriesBeta = []
      var seriesProduction = []
      for (let index = 0; index < Object.values(this.$store.state.tdx[release]).length; index++) {
        seriesBeta.push(85)
        seriesProduction.push(100)
      }

      // for (var metric_index in this.$store.state.tdx[release]) {
      // }
      this.releaseData.push(
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
              categories: Object.keys(this.$store.state.tdx[release])
            }
          },
          series: [
            {
              name: 'td/non-td',
              data: Object.values(this.$store.state.tdx[release])
            },
            {
              name: 'beta',
              data: seriesBeta
            },
            {
              name: 'production',
              data: seriesProduction
            }
          ]
        }
      )
      console.log(this.releaseData)
    }
  },
  data: function () {
    return {
      store: null,
      releaseData: []
    }
  }
}
</script>
