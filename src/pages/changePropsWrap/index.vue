<template>
  <div class="changePropsWrap">
    <div class="changePropsTitle">
      <span>组件配置</span>
      <a-button type="danger" @click="handleDelCpt">删除组件</a-button>
    </div>
    <div class="changePropsCont" v-if="editComponentName">
      <component
      :is="current"
      :handleChangeProps="handleChangeProps"
      :editProps="editProps"
      :pushMsg="pushMsg"></component>
    </div>
  </div>
</template>

<script>
import './index.less'

export default {
  name: 'ChangePropsWrap',
  props: {
    handleChangeProps: {
      type: Function
    },
    editProps: {
      type: Object,
      default: () => ({})
    },
    pushMsg: {
      type: Function
    },
    editComponentName: {
      type: String,
      default: ''
    }
  },
  computed: {
    current: function () {
      console.log('currentCom', this.editComponentName)
      return `${this.editComponentName}-form`
    }
  },
  methods: {
    /**
     * 删除组件
     */
    handleDelCpt: function () {
      this.pushMsg({
        type: 'delCpt'
      })
    }
  },
  watch: {
    editComponentName (value) {
      console.log('editComponentName', value)
    }
  }
}
</script>
