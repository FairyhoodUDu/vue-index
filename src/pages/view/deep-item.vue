<template>
  <draggable
    class="dragArea"
    :class="{
      'dragAreaEdit': edit
    }"
    :list="list"
    v-bind="dragOptions"
    @start="drag = true"
    @end="drag = false"
  >
    <template v-for="(item, index) in list">
      <component
        :is="item.component"
        v-bind="item.props"
        :key="index"
        :class="{
          'viewCptItem': edit,
          'active': activeKey === indexKey(index)
        }"
        @click.native.stop="handleSelect(indexKey(index),item.component)"
        :indexList="indexKey(index)"
        :ref="`cpt-${indexKey(index)}`"
      >
        <DeepItem
          v-if="item.child"
          :list="item.child"
          :edit="edit"
          :prevIndexKey="indexKey(index)"
          :activeKey="activeKey"
          :select="select"
          :initKey="initKey"
        ></DeepItem>
      </component>
    </template>
  </draggable>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  name: 'DeepItem',
  components: {
    draggable
  },
  props: {
    list: Array,
    edit: Boolean,
    activeKey: String,
    select: Function,
    prevIndexKey: {
      type: String,
      default: ''
    },
    initKey: Function
  },
  computed: {
    dragOptions () {
      return {
        animation: 200,
        group: 'description',
        disabled: !this.edit,
        ghostClass: 'ghost'
      }
    }
  },
  data () {
    return {
      drag: false
    }
  },
  watch: {
    drag: function () {
      this.initKey()
    }
  },
  methods: {
    /**
     * 生成 key 值
     */
    indexKey: function (index) {
      return this.prevIndexKey ? this.prevIndexKey + '-' + index : index.toString()
    },

    /**
     * 选择组件
     */
    handleSelect: function (key, cpName) {
      debugger
      const props = this.$refs[`cpt-${key}`][0].getConfig()
      this.select(key, props, cpName)
    }
  }
}
</script>

<style lang="less">
@import './index.less';

.dragAreaEdit {
  &:after {
    content: '';
    display: block;
    width: 100%;
    height: 100px;
    line-height: 100px;
    text-align: center;
    box-sizing: border-box;
    border: 1px dashed #ddd;
    flex: 0 0 100%;
  }
}

</style>
