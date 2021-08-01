<template>
  <el-tabs tab-position="left" tabstyle="height: 200px">
    <el-tab-pane label="2021WW31">
      <div>
        <h1>2021WW31 Release</h1>
        <div align="center">
          <apexchart
            type="radar"
            height="800"
            :options="chartOptions"
            :series="series"
          ></apexchart>
        </div>
      </div>
    </el-tab-pane>
    <el-tab-pane label="2021WW27">
      <div>
        <h1>2021WW27 Release</h1>
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
      // for (var metric_index in this.$store.state.tdx[release]) {
      // }
    }
  },
  data: function () {
    return {
      store: null,
      chartOptions: {
        chart: {
          id: 'vuechart-example'
        },
        yaxis: {
          max: 120
        },
        xaxis: {
          categories: [
            '7-zip',
            'MBW-128M',
            'MBW-128M-F',
            'CacheBench-R',
            'CacheBench-W',
            'CacheBench-RW',
            'GlibC-cos',
            'GlibC-exp',
            'GlibC-ffs',
            'GlibC-sin',
            'GlibC-log2',
            'GlibC-modf',
            'GlibC-sinh',
            'GlibC-sqrt',
            'GlibC-tanh',
            'GlibC-asinh',
            'GlibC-atanh',
            'GlibC-ffsll',
            'GlibC-sincos',
            'GlibC-pthread',
            'Openssl-RSA',
            'OSBench-CreateFile',
            'OSBench-CreateThread',
            'OSBench-LaunchProgram',
            'OSBench-CreateProcess',
            'OSBench-MemAlloc',
            'ctx_clock',
            'Apache',
            'TFLite-Squeeze',
            'TFLite-Inception',
            'TFLite-NAS',
            'TFLite-MobileF',
            'TFLite-MobileQ',
            'TFLite-ResNet',
            'Numpy',
            'VMBoot',
            'ContainerStart',
            'Iperf-TCP',
            'FIO',
            'vsock',
            'redis-set',
            'redis-rpush',
            'redis-spop']
        }
      },
      series: [
        {
          name: 'td/non-td',
          data: [
            99,
            97,
            92,
            91,
            91,
            82,
            95,
            93,
            91,
            92,
            95,
            92,
            95,
            90,
            92,
            92,
            90,
            91,
            92,
            92,
            97,
            93,
            92,
            81,
            92,
            92,
            99,
            89,
            84,
            95,
            124,
            105,
            103,
            96,
            100,
            73,
            94,
            73,
            60,
            1,
            97,
            99,
            91]
        },
        {
          name: 'beta',
          data: [
            85,
            85,
            85,
            85,
            85,
            85,
            85,
            85,
            85,
            85,
            85,
            85,
            85,
            85,
            85,
            85,
            85,
            85,
            85,
            85,
            85,
            85,
            85,
            85,
            85,
            85,
            85,
            85,
            85,
            85,
            85,
            85,
            85,
            85,
            85,
            85,
            85,
            85,
            85,
            85,
            85,
            85,
            85]
        }
      ]
    }
  }
}
</script>
