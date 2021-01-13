<template>
  <div class="input-group">
    <span class="input-group-item">背景颜色</span>
    <el-color-picker v-model="editProps.bgColor" :show-alpha="true" />
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  props: {
    handleChangeProps: {
      type: Function
    },
    editProps: {
      type: Object,
      default: () => ({})
    }
  },
  watch: {
    /**
     * props 改变
     */
    editProps: {
      handler: function (newProps) {
        this.handleChangeProps(newProps)
      },
      immediate: true,
      deep: true
    }
  },
  created () {
    console.log('editProps', this.editProps)
  }
}
</script>
<style lang="less" scoped>
.input-group {
  margin: 10px auto;
  position: relative;
}
.input-group-item {
  vertical-align: middle;
  margin-right: 10px;
}
.el-color-picker {
  vertical-align: middle;
}

</style>
