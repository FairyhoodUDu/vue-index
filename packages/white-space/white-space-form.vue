<template>
  <div class="input-group">
    <el-form label-width="80px">
      <el-form-item label="高度">
        <el-input v-model="editProps.height" placholder="请输入高度"></el-input>
      </el-form-item>
      <el-form-item label="背景透明">
         <el-switch v-model="editProps.transparent"></el-switch>
      </el-form-item>
    </el-form>
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
        debugger
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
</style>
