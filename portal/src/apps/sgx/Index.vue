<template>
  <div class="about">
    <h1>This is an SGX page</h1>
    <div align="center">
      <apexchart
        type="radar"
        height="500"
        :options="chartOptions"
        :series="series"
      ></apexchart>
      <a>Dummy data for demo purpose</a>
    </div>
  </div>
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
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003]
        }
      },
      series: [{
        name: 'series-1',
        data: [30, 40, 35, 50, 49, 60, 70, 91, 3, 4, 55, 23, 89]
      }]
    }
  }
}
</script>
