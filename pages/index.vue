<template>
  <div>
    <v-container>
      <v-layout row wrap>
        <v-spacer></v-spacer>
        <Nav />
      </v-layout>
      <v-layout justify-center row wrap class="mt-5">
        <v-flex xs10>
          <v-text-field v-model="name" :rules="nameRules" label="Project Name" required></v-text-field>
          <v-btn @click="submit()" outline flat color="red">Save</v-btn>
          <v-btn @click="ReadData()" outline flat color="red">Get All</v-btn>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex xs12 justify-center text-xs-center>
          <div v-for="it in dbr" :key="it">
            <h1>{{ it.topic }}</h1>
            <p>{{ it.desc }}</p>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>


<script>
import Nav from '~/components/nav.vue'
import { db } from '~/plugins/firebase.js'

export default {
  components: {
    Nav
  },
  data: () => ({
    name: '',
    dbr: [{ topic: 'nope', desc: 'not yet' }],
    nameRules: [
      v => !!v || 'Name is required',
      v => v.length <= 20 || 'Name must be less than 10 characters'
    ]
  }),
  methods: {
    submit() {
      db.collection('Projects')
        .doc('Proj 1')
        .set({
          Title: this.name,
          Body:
            'Now add another document to the users collection. Notice that this document includes a key-value pair (middle name) that does not appear in the first document. Documents in a collection can contain different sets of information.'
        }).then (function (doc) {console.log("Successfully changed data in database.")})
        .catch(function(error) {
          console.error('Error adding document: ', error)
        })
    },

    ReadData() {
      const ref = db.collection('Projects').doc('Proj 1')
      const myData = [];
      ref.get().then(function(doc) {
        if (doc && doc.exists) {
          myData = doc.data()          
        }
      }).catch(function (e) { console.log(e)})  
      
      for (let index = 0; index < 1; index++) {
            const element = this.dbr[index]
            element.topic = myData.Title
            element.desc = myData.Body
          }
      
    }
  }
}
</script>
