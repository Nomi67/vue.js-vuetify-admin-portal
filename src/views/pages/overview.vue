<template>
  <div>
    <v-container>
      <h4>Admin System Management Overview</h4>
      <br />
      <h2>Overview</h2>

      <v-row>
        <v-col v-for="(item, index) in stats" v-bind:key="index" cols="4">
          <v-card class="pa-5 rounded-5" elevation="5">
            <v-row>
              <v-col cols="4">
                <v-progress-circular
                  :rotate="360"
                  :size="100"
                  :width="15"
                  :value="item.value"
                  color="primary"
                >
                  {{ item.value }}
                </v-progress-circular>
              </v-col>
              <v-col class="ml-2 pb-8">
                <v-row class="fill-height">
                  <h3>{{ item.text }}</h3>
                </v-row>
                <v-row class="fill-height"> {{ item.percentage }}% </v-row>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-container class="mt-8">
      <v-row>
        <h3 class="font-weight-black">New Users</h3>

        <v-spacer />
        <v-btn text>
          Filter
          <v-icon>mdi-filter-outline</v-icon>
        </v-btn>
      </v-row>
      <v-card class="elevation-9 mt-3">
      <v-data-table
        :headers="userHeaders"
        :items="userItems"
        :items-per-page="7"
        class=" py-5 px-2"
        hide-default-footer
      >
        <template v-slot:item.name="{ item }">
          <v-list-item-avatar>
            <v-img :src="item.image"></v-img>
          </v-list-item-avatar>
          {{ item.name }}
        </template>
        <template v-slot:item.accountStatus="{ item }">
          <v-chip
            dark
            v-if="item.accountStatus == 'online'"
            class="ma-2 px-8"
            color="green"
          >
            {{ item.accountStatus }}
          </v-chip>
          <v-chip
            dark
            v-if="item.accountStatus == 'offline'"
            class="ma-2 px-8"
            color="red"
          >
            {{ item.accountStatus }}
          </v-chip>
          <v-chip
            dark
            v-if="item.accountStatus == 'away'"
            class="ma-2 px-8"
            color="yellow darken-3"
          >
            {{ item.accountStatus }}
          </v-chip>
        </template>
        <template v-slot:item.action="{}">
          <v-icon> mdi-dots-horizontal </v-icon>
        </template>
      </v-data-table>
      <v-card-actions>
        <v-row class="d-flex justify-center">
        <v-btn color="primary" rounded depressed >View all users</v-btn>
        </v-row>
      </v-card-actions>
      </v-card>
    </v-container>

    <v-container class="mt-8">
      <v-row>
        
        <h3 class="font-weight-black">Courses</h3>
        
        <v-spacer />
        <v-btn text>
          Filter
          <v-icon>mdi-filter-outline</v-icon>
        </v-btn>
      </v-row>
      <v-card class="elevation-9 mt-3">
      <v-data-table
        :headers="courseHeaders"
        :items="courseItems"
        :items-per-page="7"
        class=" py-5 px-2"
        hide-default-footer
      >
        <template v-slot:item.rating="{ item }">
          <v-rating
            v-model="item.rating"
            background-color="indigo lighten-3"
            color="indigo"
            readonly
          ></v-rating>
        </template>

        <template v-slot:item.action="{}">
          <v-icon> mdi-dots-horizontal </v-icon>
        </template>
      </v-data-table>
      <v-card-actions class="d-flex justify-center">
         <v-btn color="primary" rounded depressed >View all courses</v-btn>
      </v-card-actions>
      </v-card>
    </v-container>

     <v-container class=" mt-8">
      <v-row>
        <h3 class="font-weight-black">Course Providers</h3>

        <v-spacer />
        <v-btn text>
          Filter
          <v-icon>mdi-filter-outline</v-icon>
        </v-btn>
      </v-row>
      <v-card class="elevation-9 mt-3">
      <v-data-table
        :headers="courseProviderheaders"
        :items="courseProviderItems"
        :items-per-page="7"
        class=" py-5 px-2"
        hide-default-footer
      >
        <template v-slot:item.action="{}">
          <v-icon> mdi-dots-horizontal </v-icon>
        </template>
      </v-data-table>
      <v-card-actions class="d-flex justify-center">
         <v-btn color="primary" rounded depressed >View all course providers</v-btn>
      </v-card-actions>
      </v-card>
    </v-container>
    <v-container class="mt-8">
      <v-row>
        <h3 class="font-weight-black">Statistics</h3>

        <v-spacer />
        <v-btn text>
          Filter
          <v-icon>mdi-filter-outline</v-icon>
        </v-btn>
      </v-row>
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
    </v-container>
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
      interval: {},
      value: 50,
      stats: [
        { value: 70, text: "Total number of users", percentage: 12 },
        { value: 50, text: "Total number of Courses", percentage: 12 },
        { value: 60, text: "Total number of Course Providers", percentage: 12 },
      ],
      userHeaders: [
        {
          text: "Account Status",
          align: "start",
          sortable: false,
          value: "accountStatus",
        },
        { text: "User Name", value: "name", sortable: false },
        { text: "Email Address", value: "email", sortable: false },
        { text: "Country", value: "country", sortable: false },
        { text: "Action", value: "action", sortable: false },
      ],
      userItems: [
        {
          accountStatus: "online",
          name: "Nouman Ahmed",
          image: "https://randomuser.me/api/portraits/men/85.jpg",
          email: "ichnouman@gmail.com",
          country: "Pakistan",
        },
        {
          accountStatus: "offline",
          name: "Zain Ul Abadin",
          image: "https://randomuser.me/api/portraits/men/85.jpg",
          email: "zain@gmail.com",
          country: "Pakistan",
        },
        {
          accountStatus: "online",
          name: "Hanzla Rafique",
          image: "https://randomuser.me/api/portraits/men/85.jpg",
          email: "hanzla@gmail.com",
          country: "Pakistan",
        },
        {
          accountStatus: "away",
          name: "Nouman Ahmed",
          image: "https://randomuser.me/api/portraits/men/85.jpg",
          email: "ichnouman@gmail.com",
          country: "Pakistan",
        },
        {
          accountStatus: "online",
          name: "Nouman Ahmed",
          image: "https://randomuser.me/api/portraits/men/85.jpg",
          email: "ichnouman@gmail.com",
          country: "Pakistan",
        },
      ],
      courseHeaders: [
        {
          text: "Course Name",
          align: "start",
          sortable: false,
          value: "courseName",
        },
        { text: "Registered Students", value: "regStudents", sortable: false },
        { text: "Course Provider", value: "courseProvider", sortable: false },
        { text: "Rating", value: "rating", sortable: false },
        { text: "Action", value: "action", sortable: false },
      ],
      courseItems: [
        {
          courseName: "Project Management",
          regStudents: 300,
          courseProvider: "Udemy",
          rating: 3,
        },
        {
          courseName: "Project Management",
          regStudents: 300,
          courseProvider: "Udemy",
          rating: 5,
        },
        {
          courseName: "Project Management",
          regStudents: 300,
          courseProvider: "Udemy",
          rating: 4,
        },
        {
          courseName: "Project Management",
          regStudents: 300,
          courseProvider: "Udemy",
          rating: 3,
        },
        {
          courseName: "Project Management",
          regStudents: 300,
          courseProvider: "Udemy",
          rating: 5
        },
      ],
      courseProviderheaders: [
        {
          text: "Course Name",
          align: "start",
          sortable: false,
          value: "courseName",
        },
        { text: "Registered Students", value: "regStudents", sortable: false },
        { text: "Course Provider", value: "courseProvider", sortable: false },
        { text: "Action", value: "action", sortable: false },
      ],
      courseProviderItems: [
        {
          courseName: "Project Management",
          regStudents: 300,
          courseProvider: "Udemy",
          rating: 3,
        },
        {
          courseName: "Project Management",
          regStudents: 300,
          courseProvider: "Udemy",
          rating: 5,
        },
        {
          courseName: "Project Management",
          regStudents: 300,
          courseProvider: "Udemy",
          rating: 4,
        },
        {
          courseName: "Project Management",
          regStudents: 300,
          courseProvider: "Udemy",
          rating: 3,
        },
        {
          courseName: "Project Management",
          regStudents: 300,
          courseProvider: "Udemy",
          rating: 5,
        },
      ],
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
    };
  },
};
</script>