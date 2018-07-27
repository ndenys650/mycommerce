<template>
  <v-layout row>
    <v-flex xs10 offset-xs1>
      <v-card class="elevation-8 mb-5" tile>
        <v-layout fill-height wrap>
          <v-flex md12 xs10>
            <v-layout fill-height wrap>
              <v-flex xs12>
                <v-card tile flat class="p-3">
                  <v-card-media
                    height="600px"
                    :src="page.fields.image"
                  >
                  </v-card-media>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-card>
      <v-card>
        <v-card-title primary-title>
          <div>
            <div class="headline">{{ page.fields.name }}</div>
            <span class="grey--text">{{ page.fields.description }}</span>
          </div>
        </v-card-title>
        <v-list>
          <v-list-tile v-for="(descriptions, index) in page.fields.description_details" :key="index">
            <v-list-tile-action>
              <v-icon color="indigo">play_arrow</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ descriptions.detail}}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-flex>
    <v-card class="elevation-8 mb-5" tile>
      <v-layout fill-height wrap>
        <v-flex md12 xs12>
          <v-layout fill-height wrap>
            <v-flex xs6 >
              <v-card tile flat class="p-3">
              <v-fade-transition>
                <v-card-media
                  height="200px"
                  :src="page.fields.image"
                >
                </v-card-media>
                </v-fade-transition>
              </v-card>
            </v-flex>
            <v-flex xs6>
              <v-card tile flat class="p-3" to="/store">
                <v-card-media
                  height="200px"
                  src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                >
                </v-card-media>
              </v-card>
            </v-flex>
            <v-flex xs6>
              <v-card tile flat class="p-3" to="/store">
                <v-card-media
                  height="200px"
                  src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                >
                </v-card-media>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-card>
</v-layout>
</template>

<script>
import { butter } from '@/buttercms'
import { mapActions } from 'vuex'

export default {
  name: 'ProductPage',
  data () {
    return {
      slug: this.$route.params.slug,
      page: {
        slug: '',
        fields: {}
      }
    }
  },
  methods: {
    getPage () {
      butter.page.retrieve('store', this.slug)
        .then((res) => {
          console.log(res.data.data)
          this.page = res.data.data
        }).catch((res) => {
          console.log(res)
        })
    },
    ...mapActions([
    ])
  },
  created () {
    this.getPage()
  }
}
</script>

<style>

</style>
