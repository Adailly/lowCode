<template>
  <t-button>{{ data.name }}</t-button>
</template>

<script setup lang="ts">
import { PropType, reactive } from 'vue'
import { PropsObject } from '../../type'

const props = defineProps({
  data: {
    type: Object as PropType<PropsObject>,
  },
})

const data = reactive({
  name: '',
  width: 0,
  height: 0,
})
if (props.data) {
  console.log(props.data)
  Object.keys(props.data).forEach((key) => {
    if (key === 'name') {
      data.name = props.data?.name.default as string
    }
  })
}
</script>
