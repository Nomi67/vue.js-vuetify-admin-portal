<template>
  <v-card>
    <v-navigation-drawer
      v-model="drawer"
      elevation="0"
      permanent
      app
      height="100vh"
    >
      <v-list-item class="px-2 ml-10">
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-title>John Leider</v-list-item-title>
      </v-list-item>

      <v-list dense shaped class="mt-10">
        <v-list-item
          v-for="item in items"
          :key="item.title"
          class="tile py-1"
          link
          :to="item.to"
        >
          <v-list-item-icon class="ml-10">
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      
      
        <v-list class=" mt-10" dense shaped>
           <v-list-item link class="py-2 " >
          <v-list-item-icon  class="ml-10">
            <v-icon color="red">mdi-power</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="red--text">Logout</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        </v-list>
  
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      items: [
        { title: "Overview", icon: "mdi-home-city" ,to:"/"},

        { title: "Users", icon: "mdi-account-group-outline",to:"/users" },
        { title: "Courses", icon: "mdi-account",to:'/courses' },
        { title: "Course Providers", icon: "mdi-account",to:'/course-provider' },
        { title: "Statictics", icon: "mdi-account" ,to:"/stats"},
        { title: "Notification", icon: "mdi-account" },
      ],
      mini: true,
    };
  },
};
</script>
<style scoped>

</style>