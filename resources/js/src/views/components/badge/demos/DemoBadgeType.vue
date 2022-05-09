<template>
  <div class="demo-space-x">
    <!-- avatar -->
    <v-badge avatar overlap>
      <template #badge>
        <v-avatar size="15">
          <v-icon>
            {{ icons.mdiInformationVariant }}
          </v-icon>
        </v-avatar>
      </template>

      <v-avatar>
        <v-img :src="require('@/assets/images/avatars/avatar-1.png').default"></v-img>
      </v-avatar>
    </v-badge>

    <!-- icon -->
    <v-badge :icon="icons.mdiLockOpenOutline" overlap>
      <v-avatar>
        <v-img :src="require('@/assets/images/avatars/avatar-2.png').default"></v-img>
      </v-avatar>
    </v-badge>

    <!-- tile -->
    <v-badge tile content="5" overlap>
      <v-avatar>
        <v-img :src="require('@/assets/images/avatars/avatar-3.png').default"></v-img>
      </v-avatar>
    </v-badge>
  </div>
</template>

<script>
import { mdiLockOpenOutline, mdiInformationVariant } from '@mdi/js'

export default {
  setup() {
    return {
      icons: {
        mdiLockOpenOutline,
        mdiInformationVariant,
      },
    }
  },
}
</script>
