<template>
  <div>
    <v-row >
      <v-col >
        <v-sheet   class="elevation-11 pa-3 mx-auto rounded-xl" >
          <statistics v-bind:chartdata="data" v-bind:options="options"/>
        </v-sheet>
      </v-col>
      <v-col>
          <v-sheet   class="elevation-11 pa-3 mx-auto rounded-xl" >
          <statistics v-bind:chartdata="data" v-bind:options="options"/>
        </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import statistics from "./statistics";
export default {
  components: {
    statistics,
  },
   data() {
    return {
        data: {
        labels: ['Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat','Sun'],
        datasets: [{
            label: 'User Growth',
            data: [8, 10, 3, 5, 2, 3,6],
            backgroundColor: [
                'blue',
                'blue',
               'blue',
                'blue',
                'blue',
                'blue',
                'blue',
            ],
            borderColor: [
                
            ],
            borderWidth: 1
        }]
    },
     options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
    }
    },
};
</script>