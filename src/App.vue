<template>
  <v-app>
    <v-app-bar app color="white" class="elevation-0"  tile height="80">

      <v-row>
        <v-col cols="4" />
        <v-col cols="4">
          <v-text-field
            label="Search everything"
            append-icon="mdi-magnify"
            dense
            solo
            class="mt-6"
            flat
            background-color="grey lighten-4"
            rounded
          ></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-row>
            <v-col>
              <v-row class="mt-3">
                <!-- <v-col> -->
                  <v-btn text>
                    <v-icon> mdi-bell-outline </v-icon>
                  </v-btn>
                <!-- </v-col> -->
                <!-- <v-col> -->
                   <v-btn text>
                    <v-icon>mdi-account-settings</v-icon>
                  </v-btn>
                <!-- </v-col> -->
              </v-row>
            </v-col>
            <v-col>
              <v-list-item class="px-2 ml-10">
                <v-list-item-avatar>
                  <v-img
                    src="https://randomuser.me/api/portraits/men/85.jpg"
                  ></v-img>
                </v-list-item-avatar>

                <v-list-item-title>John Leider</v-list-item-title>
              </v-list-item>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-app-bar>
    <SideBar />
    <v-main style="background-color: #f0f7fa">
      <v-container fluid>
        <router-view class="ml-5 mt-5" />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import SideBar from "./components/SideBar";
export default {
  name: "App",

  components: {
    SideBar,
  },

  data: () => ({
    //
  }),
};
</script>
<style scoped>
</style>