<template>
  <div class="v-avatar-group" :class="rootThemeClasses">
    <v-avatar>
      <v-img :src="require('@/assets/images/avatars/avatar-1.png').default"></v-img>
    </v-avatar>

    <v-avatar>
      <v-img :src="require('@/assets/images/avatars/avatar-2.png').default"></v-img>
    </v-avatar>

    <v-avatar>
      <v-img :src="require('@/assets/images/avatars/avatar-3.png').default"></v-img>
    </v-avatar>
    <v-avatar>
      <v-img :src="require('@/assets/images/avatars/avatar-4.png').default"></v-img>
    </v-avatar>

    <v-avatar>
      <v-img :src="require('@/assets/images/avatars/avatar-5.png').default"></v-img>
    </v-avatar>

    <v-avatar>
      <v-img :src="require('@/assets/images/avatars/avatar-6.png').default"></v-img>
    </v-avatar>
  </div>
</template>

<script>
import useVuetify from '@core/utils/vuetify'

export default {
  setup() {
    const { rootThemeClasses } = useVuetify()

    return {
      rootThemeClasses,
    }
  },
}
</script>
