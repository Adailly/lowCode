<template>
  <div class="div-home">
    <div class="div-home-left">
      <t-tabs v-model="currentTab" theme="card">
        <t-tab-panel
          v-for="(item, index) in leftTabsValue"
          :key="index"
          :label="item.label"
          :value="item.value"
        >
          <div class="div-tab-content">
            <div v-if="currentTab === 'inter'">
              <t-collapse
                v-for="(navi, index) in leftData"
                :key="index"
                default-expand-all
                :borderless="false"
                expandIconPlacement="right"
              >
                <t-collapse-panel :header="navi.title">
                  <draggable
                    class="left-list"
                    :list="navi.list"
                    :sort="false"
                    item-key="label"
                    animation="300"
                    :group="{ name: 'comlist', pull: 'clone', put: false }"
                    :clone="onCloneHandle"
                  >
                    <template #item="{ element }">
                      <div class="left-list-item">
                        <div>
                          <div class="flex-center">
                            <t-icon :name="element.iconName"></t-icon>
                          </div>
                          <div class="left-list-item-title">
                            {{ element.label }}
                          </div>
                        </div>
                      </div>
                    </template>
                  </draggable>
                </t-collapse-panel>
              </t-collapse>
            </div>
            <div v-else-if="currentTab === 'outer'">
              <t-button @click="onClickAction">设计模式</t-button>
            </div>
          </div>
        </t-tab-panel>
      </t-tabs>
    </div>
    <div class="div-home-middle">
      <draggable
        :list="pageNodeModel.children"
        group="comlist"
        :sort="true"
        item-key="label"
      >
        <template #item="{ element, index }">
          <div
            class="page-node"
            :class="onSelectClass(index)"
            @click="onClickNode(index, element)"
          >
            <div class="page-node-item flex-between">
              <Component :is="element.type" :content="findPropsValue.name">
              </Component>
              <t-button variant="outline" @click="deleteTagNode(index)">
                <template #icon>
                  <t-icon name="delete" color="red" />
                </template>
              </t-button>
            </div>
          </div>
        </template>
      </draggable>
    </div>
    <div class="div-home-right">
      <t-tabs v-model="editTab" theme="card">
        <t-tab-panel
          v-for="(item, index) in rightTabsValue"
          :key="index"
          :label="item.label"
          :value="item.value"
        >
          <div class="div-right-edit">
            <div v-if="editTab === 'property'">
              <h4>属性编辑</h4>
              <div v-for="key in Object.keys(selectData.props)">
                <div>{{ selectData.props[key].name }}:</div>
                <Component
                  :is="selectData.props[key].t_type"
                  v-model="selectData.props[key].default"
                >
                </Component>
              </div>
            </div>
            <div v-else-if="editTab === 'style'">
              <h4>样式编辑</h4>
            </div>
            <div v-else>
              <h4>事件编辑</h4>
            </div>
          </div>
        </t-tab-panel>
      </t-tabs>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import draggable from "vuedraggable";
import { tabsValue, navigations, editTabsValue } from "./constants";
import { NavigationListItem, PropsObject, VPageNode, VTagNode } from "../type";
import { cloneDeep, keys, pullAt } from "lodash";
import { getRandomCode } from "../../util/tools";
import { DialogPlugin } from "tdesign-vue-next";

import { ProxyAction } from "../../other/index";

const onClickAction = () => {
  ProxyAction();
};

const currentTab = ref("inter");
const leftTabsValue = tabsValue;
const leftData = navigations;

const editTab = ref("property");
const rightTabsValue = editTabsValue;

// 选中的组件
const selectData = reactive({
  index: 0,
  node: new VTagNode(),
  props: new PropsObject(),
});
const selectPropsValue = reactive<{ [key: string]: any }>({});

// 初始化页面对象
const pageNodeModel = ref<VPageNode>({
  id: getRandomCode(),
  name: "vpage",
  children: [],
});

// 复制组件对象
const onCloneHandle = (element: NavigationListItem) => {
  const data: NavigationListItem = cloneDeep(element);
  const tagNode: VTagNode = {
    id: getRandomCode(),
    label: data.label,
    type: data.typeName,
    props: data.props,
    children: [],
  };
  pageNodeModel.value.children.push(tagNode);
  selectData.node = tagNode;
  selectData.index = pageNodeModel.value.children.length - 1;
  selectData.props = tagNode.props;
  console.log(selectData.props);
  findPropsValue();
};
// 点击选中的node
const onClickNode = (index: number, node: VTagNode) => {
  selectData.index = index;
  selectData.node = node;
  selectData.props = node.props;
  console.log(selectData.props);
  findPropsValue();
};
const findPropsValue = () => {
  Object.keys(selectData.props).forEach((key) => {
    selectPropsValue[key] = selectData.props[key].default;
  });
  console.log(selectPropsValue.name);
};
const onSelectClass = (index: number) => {
  if (selectData.index === index) {
    return "page-node-select";
  }
  return "";
};

// 删除vnode
const deleteTagNode = (index: number) => {
  const dialog = DialogPlugin.confirm({
    placement: "center",
    header: "提示",
    body: "是否删除此组件",
    onCancel: () => {
      dialog.destroy();
    },
    onConfirm: () => {
      pullAt(pageNodeModel.value.children, index);
      dialog.destroy();
    },
  });
};
</script>

<style lang="less" scoped>
.div-home {
  height: 100%;
  background: #e6e6e6;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  &-left {
    height: 100%;
    background: white;
    width: 300px;
    box-sizing: border-box;
    border: 1px #e6e6e6 solid;
    display: flex;
    flex-direction: column;
  }

  &-middle {
    height: 100%;
    padding: 10px;
    flex-grow: 1;
  }

  &-right {
    height: 100%;
    background: white;
    width: 300px;
    padding: 0px;
  }
}

.div-tab-content {
  margin-top: 8px;
  width: 100%;
  height: 100%;
  overflow: auto;
  flex: 1;
}
.left-list {
  display: grid;
  // grid样式
  grid-template-columns: repeat(3, 1fr);
  // 间距
  row-gap: 2px;
  column-gap: 2px;

  &-item {
    padding: 16px 0;
    background-color: #fff;

    &-title {
      margin-top: 8px;
      text-align: center;
    }
  }
}
.page-node {
  width: 100%;
  padding: 6px;

  &-item {
    width: 100%;
    margin-bottom: 8px;
  }
}
.div-right-edit {
  padding: 8px;
}
.page-node-select {
  border: 1px blue solid;
}
:deep(.t-collapse-panel__wrapper .t-collapse-panel__content) {
  padding: 0;
}
</style>
