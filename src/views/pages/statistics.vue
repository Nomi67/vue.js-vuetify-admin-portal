
<script>

import { Bar } from 'vue-chartjs'
export default {
    props: ['chartdata', 'options'],
    
    extends: Bar,
  mounted () {
    this.renderChart(this.chartdata, this.options)
  }
}
</script>