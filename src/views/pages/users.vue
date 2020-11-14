<template>
  <div>
    <v-container>
      <h4>Admin System Management Overview</h4>
    </v-container>
    <v-container v-if="tableView">
      <br />
      <v-row>
        <h3 class="font-weight-black">Users</h3>

        <v-spacer /><v-spacer /><v-spacer />
        <v-row class="d-flex justify-right">
          <v-col cols="3">
            <v-btn color="primary" rounded depressed>
              <v-icon>mdi-account-plus</v-icon>
              <div class="ml-1">Add User</div>
            </v-btn>
          </v-col>
          <v-col>
            <v-text-field
              label="Search user"
              append-icon="mdi-magnify"
              dense
              solo
              rounded
            ></v-text-field>
          </v-col>
        </v-row>
      </v-row>
      <v-card class="elevation-9">
        <v-data-table
          :headers="headers"
          :items="desserts"
          :loading="loading"
          :pagination.sync="pagination"
          hide-default-footer
          item-key="id"
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
        <div class="text-center pt-2">
          <v-pagination
            @input="paginationChangeHandler"
            :value="pagination.page"
            :length="pages"
            :total-visible="3"
          ></v-pagination>
        </div>
      </v-card>
    </v-container>

    <v-container v-if="profileView">
      <v-sheet
        height="200"
        width="100%"
        color="#f0f7fa"
        style="border: 1px solid black"
      >
        <div class="d-flex justify-center">
          <v-avatar size="100">
            <img
              src="https://randomuser.me/api/portraits/men/85.jpg"
              max-height="200"
              max-width="200"
            />
          </v-avatar>
        </div>
        <div class="d-flex justify-center">
          <h2>John Leider</h2>
        </div>
        <div class="d-flex justify-center">
          <v-btn rounded depressed color="primary" class="px-10">
            <v-icon>mdi-pencil</v-icon>
            <div class="ml-1">edit</div>
          </v-btn>
          <v-btn rounded depressed outlined color="primary" class="ml-2 px-10">
            <v-icon color="red">mdi-delete</v-icon>
            <div class="ml-1">delete</div>
          </v-btn>
        </div>
      </v-sheet>
      <v-sheet
       color="#f0f7fa"
        height="400"
        width="100%"
        style="border:1px solid black;"
       >
        <v-row style="border:1px solid black;">
          <v-col>
            <h3>Account</h3>
            <v-card class="elevation-8 pa-5 rounded-xl">
                <v-text-field
              label="Username"
              outlined
              value="Nouman Ahmed"
              dense
              
              :disabled="profileView"
            ></v-text-field>
            </v-card>
          </v-col>
          <v-col></v-col>
        </v-row>
      </v-sheet>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pagination: { totalItems: 5, rowsPerPage: 2, page: 1 },
      tableView: false,
      profileView: true,
      headers: [
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
      desserts: [
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
    };
  },
  computed: {
    pages() {
      if (
        this.pagination.rowsPerPage == null ||
        this.pagination.totalItems == null
      ) {
        return 0;
      }
      return Math.ceil(
        this.pagination.totalItems / this.pagination.rowsPerPage
      );
    },
  },
  methods: {
    paginationChangeHandler(pageNumber) {
      this.pagination.page = pageNumber;
    },
  },
};
</script>
<style scoped>
</style>