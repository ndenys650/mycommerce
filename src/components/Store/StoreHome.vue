<template>
  <v-container id="create">
    <section>
      <card-hero />
    </section>
    <section>
      <v-slide-y-transition>
      <v-container
              fluid
              grid-list-lg
              v-show="show"
            >
        <v-layout row wrap>
          <v-flex xs12 md10 offset-md1 v-for="(page,index) in pages" :key="page.slug + '_' + index">
            <v-card color="cyan lighten-1" class="white--text ma-2 elevation-7" :to="'/store/' + page.slug">
                <v-layout>
                  <v-flex xs7>
                    <v-card-media
                      :src="page.fields.image"
                      :alt="page.fields.name"
                      height="125px"
                      contain
                    ></v-card-media>
                  </v-flex>
                  <v-flex xs5>
                    <v-card-title primary-title>
                      <div>
                        <div class="headline">{{ page.fields.name }}</div>
                        <div>{{ page.fields.short_description }}</div>
                        <div>${{ page.fields.price }}</div>
                      </div>
                    </v-card-title>
                  </v-flex>
                </v-layout>
              <v-divider light></v-divider>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
      </v-slide-y-transition>
    </section>
  </v-container>
</template>

<script>
import { butter } from '@/buttercms'
import CardHero from './CardHero'

export default {
  name: 'StoreHome',
  components: {
    'card-hero': CardHero
  },
  data: () => ({
    show: false,
    page_title: 'Products',
    // Create array to hold the pages from ButterCMS API
    pages: []
  }),
  methods: {
    // Get List of Customer Pages
    getPages () {
      butter.page.list('store')
        .then((res) => {
          console.log(res.data.data) // Check the results in the console
          this.pages = res.data.data
        })
    }
  },
  created () {
    // Fire on page creation
    this.getPages()
  },
  updated () {
    this.show = true
  }
}
</script>

<style>
#create .v-speed-dial {
  position: absolute;
}
#create .v-btn--floating {
  position: relative;
}
</style>
