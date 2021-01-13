<template>
  <div :class="{
    'black': dark
  }">
    <div class="viewWrap globalBg">
      <DeepItem
        :list="config"
        :edit="edit"
        :activeKey="activeKey"
        :select="handleSelectToChangeProps"
        :initKey="handleInitKey"
      ></DeepItem>
    </div>
  </div>
</template>

<script>
import DeepItem from './deep-item'

export default {
  name: 'DeepWrap',
  components: {
    DeepItem
  },
  data () {
    return {
      drag: false,
      config: [],
      activeKey: '',
      dark: false,
      edit: true
    }
  },
  mounted: function () {
    window.addEventListener('message', this.onMsg)
  },
  beforeDestroy: function () {
    window.removeEventListener('message', this.onMsg)
  },
  methods: {
    onMsg: function ({ data }) {
      const { type } = data
      console.group('View 收到消息')
      console.log(data)
      console.groupEnd()
      /**
       * 添加组件
       */
      switch (type) {
        case 'addCpt': // 添加组件，在this.config后 push内容
          this.handleAddCpt(data.data)
          break
        case 'getConfig':// 发送 this.config 的数据
          this.handleGetConfig()
          break
        case 'changeProps': // {key,props},递归在this.config找到key,再赋值
          this.handleChangeProps(data.data)
          break
        case 'delCpt': // 根据 activeKey,delDeepIndex递归filter,得到删除activeKey对应数据后的 this.config，初始化 activeKey
          this.handleDelCpt()
          break
        case 'changeTheme':
          this.handleChangeTheme(data.data)
          break
        case 'changeEditStatus':
          this.handleChangeEditStatus(data.data)
          break
        default:
          break
      }
    },

    /**
     * 初始化 key
     */
    handleInitKey: function () {
      debugger
      this.activeKey = ''
      this.pushMsg({
        type: 'initKey'
      })
    },

    /**
     * 向父级发送消息
     */
    pushMsg: function (data) {
      debugger
      top.postMessage(data, location.href.replace('view', ''))
    },

    /**
     * 选择组件修改 props
     */
    handleSelectToChangeProps: function (key, props, cpName) {
      debugger
      if (!this.edit) return
      this.activeKey = key
      this.pushMsg({
        type: 'changeProps',
        data: {
          key,
          props,
          componentName: cpName
        }
      })
    },

    /**
     * 添加组件
     */
    handleAddCpt: function (cpt) {
      this.config.push(cpt)
      console.log('addcpt后的config', this.config)
    },

    /**
     * 获取配置
     */
    handleGetConfig: function () {
      debugger
      this.pushMsg({
        type: 'getConfig',
        data: {
          config: this.config
        }
      })
    },

    /**
     * 修改配置项
     */
    handleChangeProps: function ({ key, props, cpName }) {
      debugger
      this.config = this.changeDeepIndex(this.config, key, props)
    },

    /**
     * 切换主题
     */
    handleChangeTheme: function ({ dark }) {
      this.dark = dark
    },

    /**
     * 切换编辑状态
     */
    handleChangeEditStatus: function ({ edit }) {
      this.edit = edit
      if (!edit) {
        this.handleInitKey()
        this.pushMsg({
          type: 'handleCloseEdit'
        })
      }
    },

    /**
     * 删除组件
     */
    handleDelCpt: function () {
      debugger
      if (this.activeKey) {
        // this.config = common.delDeepKey(this.config, this.activeKey)
        this.config = this.delDeepIndex(this.config, this.activeKey)
        this.handleInitKey()
        this.pushMsg({
          type: 'handleDelCpt'
        })
      }
    },

    /**
   * 删除多维数组中指定 index 数组的项
   */
    delDeepIndex: function (arr, key, prevKey = '') {
      debugger
      return arr.filter((item, index) => {
        let currentKey = prevKey !== '' ? prevKey + '-' + index : index.toString()
        if (currentKey === key) return false
        if (item.child && item.child.length > 0) item.child = this.delDeepIndex(item.child, key, currentKey)
        return true
      })
    },

    /**
     * 修改多维数组中指定 index 的值
     */
    changeDeepIndex: function (arr, key, res, prevKey = '') {
      debugger
      return arr.map((item, index) => {
        let currentKey = prevKey !== '' ? prevKey + '-' + index : index.toString()
        if (currentKey === key) {
          item.props = res
        }
        if (item.child) item.child = this.changeDeepIndex(item.child, key, res, currentKey)
        return item
      })
    }
  }
}
</script>

<style lang="less">
.viewWrap > .dragArea {
  &:after {
    visibility: hidden;
  }
}

</style>
