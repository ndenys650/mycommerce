<template>
  <v-footer
    height="auto"
    color="cyan lighten-1"
  >
    <v-layout
      justify-center
      row
      wrap
    >
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        flat
        round
      >
        {{ link }}
      </v-btn>
      <v-flex
        cyan
        lighten-4
        py-3
        text-xs-center
        black--text
        xs12
      >
        &copy; 2018 — <strong>made with <v-icon color="black">favorite_border</v-icon> by Nate Denys</strong>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  data: () => ({
    links: [
      'Home',
      'About',
      'Team',
      'Services',
      'Contact'
    ]
  })
}
</script>
