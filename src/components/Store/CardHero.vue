<template>
<v-slide-x-transition>
  <v-card class="elevation-8 mb-5" tile v-show="show">
    <v-layout fill-height wrap>
      <v-flex md12 xs12>
        <v-layout fill-height wrap>
          <v-flex xs6 v-for="(page,index) in pages" :key="page.slug + '_' + index">
            <v-card tile flat class="p-3" :to="'/store/' + page.slug">
            <v-fade-transition>
              <v-card-media
                height="200px"
                :src="page.fields.image"
                class="transparent"
              >
              </v-card-media>
               </v-fade-transition>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-card>
</v-slide-x-transition>
</template>

<script>
import { butter } from '@/buttercms'

export default {
  name: 'CardHero',
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

</style>
