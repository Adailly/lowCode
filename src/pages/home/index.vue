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
                  <div class="left-list">
                    <div
                      class="left-list-item flex-center"
                      v-for="(objc, index) in navi.list"
                    >
                      <div>
                        <div class="flex-center">
                          <t-icon :name="objc.iconName"></t-icon>
                        </div>
                        <div class="left-list-item-title">{{ objc.label }}</div>
                      </div>
                    </div>
                  </div>
                </t-collapse-panel>
              </t-collapse>
            </div>
          </div>
        </t-tab-panel>
      </t-tabs>
    </div>
    <div class="div-home-middle">
      <div></div>
    </div>
    <div class="div-home-right">
      <h4>属性设置:</h4>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { tabsValue, navigations } from "./constants";
const currentTab = ref("inter");
const leftTabsValue = tabsValue;
const leftData = navigations;
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
    padding: 10px;
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
    }
  }
}
:deep(.t-collapse-panel__wrapper .t-collapse-panel__content) {
  padding: 0;
}
</style>
