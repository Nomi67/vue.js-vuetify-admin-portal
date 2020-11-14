<template>
  <div>
    <v-container>
      <v-row>
        
        <h3 class="font-weight-blac">Courses</h3>
        
        <v-spacer />
        <v-btn text>
          Filter
          <v-icon>mdi-filter-outline</v-icon>
        </v-btn>
      </v-row>
      <v-data-table
        :headers="headers"
        :items="desserts"
        :items-per-page="7"
        class="elevation-9 mt-3 py-5 px-2"
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
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headers: [
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
      desserts: [
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
    };
  },
  methods: {},
};
</script>
<style scoped>
.style {
  border: 1px solid green;
  border-radius: 10px;
}
.v-table tr:hover:not(.v-table__expanded__content) {
  background: red !important;
}
</style>