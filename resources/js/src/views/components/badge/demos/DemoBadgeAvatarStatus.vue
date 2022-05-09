<template>
  <div class="demo-space-x">
    <v-badge bottom color="success" overlap offset-x="12" offset-y="12" dot bordered>
      <v-avatar large>
        <v-img :src="require('@/assets/images/avatars/avatar-7.png').default"></v-img>
      </v-avatar>
    </v-badge>

    <v-badge bottom color="warning" offset-x="12" offset-y="12" overlap dot bordered>
      <v-avatar large>
        <v-img :src="require('@/assets/images/avatars/avatar-6.png').default"></v-img>
      </v-avatar>
    </v-badge>

    <v-badge bottom color="error" offset-x="12" offset-y="12" overlap dot bordered>
      <v-avatar large>
        <v-img :src="require('@/assets/images/avatars/avatar-5.png').default"></v-img>
      </v-avatar>
    </v-badge>
  </div>
</template>
