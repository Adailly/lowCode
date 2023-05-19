import {
  NavigationObject,
  NavigationListItem,
  PropsObject,
  PropertyObject,
} from "../type";

export const tabsValue = [
  {
    label: "内置组件",
    value: "inter",
  },
  {
    label: "业务组件",
    value: "bussiness",
  },
  {
    label: "外部组件",
    value: "outer",
  },
];

const baseList: NavigationListItem[] = [
  {
    label: "按钮",
    iconName: "app",
    typeName: "t-button",
    props: {
      width: {
        name: "宽度",
        type: "number",
        default: 40,
      },
      height: {
        name: "高度",
        type: "number",
        default: 20,
      },
    },
  },
  {
    label: "图标",
    iconName: "app",
    typeName: "t-button",
    props: {
      width: {
        name: "宽度",
        type: "number",
        default: 40,
      },
      height: {
        name: "高度",
        type: "number",
        default: 20,
      },
    },
  },
  {
    label: "链接",
    iconName: "link",
    typeName: "t-link",
    props: {
      width: {
        name: "宽度",
        type: "number",
        default: 40,
      },
      height: {
        name: "高度",
        type: "number",
        default: 20,
      },
    },
  },
];
const layoutList: NavigationListItem[] = [
  {
    label: "分割线",
    iconName: "app",
    typeName: "t-divider",
    props: {
      width: {
        name: "宽度",
        type: "number",
        default: 40,
      },
      height: {
        name: "高度",
        type: "number",
        default: 20,
      },
    },
  },
  {
    label: "栅格",
    iconName: "app",
    typeName: "t-grid",
    props: {
      width: {
        name: "宽度",
        type: "number",
        default: 40,
      },
      height: {
        name: "高度",
        type: "number",
        default: 20,
      },
    },
  },
  {
    label: "布局",
    iconName: "app",
    typeName: "t-layout",
    props: {
      width: {
        name: "宽度",
        type: "number",
        default: 40,
      },
      height: {
        name: "高度",
        type: "number",
        default: 20,
      },
    },
  },
  {
    label: "间隔",
    iconName: "app",
    typeName: "t-space",
    props: {
      width: {
        name: "宽度",
        type: "number",
        default: 40,
      },
      height: {
        name: "高度",
        type: "number",
        default: 20,
      },
    },
  },
];
const natigationList: NavigationListItem[] = [
  {
    label: "固钉",
    iconName: "app",
    typeName: "t-affix",
    props: {},
  },
  {
    label: "锚点",
    iconName: "app",
    typeName: "t-anchor",
    props: {},
  },
  {
    label: "回到顶部",
    iconName: "app",
    typeName: "t-backtop",
    props: {},
  },
  {
    label: "面包屑",
    iconName: "app",
    typeName: "t-breadcrumb",
    props: {},
  },
  {
    label: "下拉菜单",
    iconName: "app",
    typeName: "t-dropdown",
    props: {},
  },
  {
    label: "导航菜单",
    iconName: "app",
    typeName: "t-menu",
    props: {},
  },
  {
    label: "分页",
    iconName: "app",
    typeName: "t-pagination",
    props: {},
  },
  {
    label: "步骤条",
    iconName: "app",
    typeName: "t-steps",
    props: {},
  },
  {
    label: "侧边栏",
    iconName: "app",
    typeName: "t-sticktool",
    props: {},
  },
  {
    label: "选项卡",
    iconName: "app",
    typeName: "t-tabs",
    props: {},
  },
];
const inputList: NavigationListItem[] = [
  {
    label: "输入框",
    iconName: "app",
    typeName: "t-input",
    props: {},
  },
];
const dataList: NavigationListItem[] = [
  {
    label: "图片",
    iconName: "app",
    typeName: "t-image",
    props: {},
  },
];
const msgList: NavigationListItem[] = [
  {
    label: "对话框",
    iconName: "app",
    typeName: "t-dialog",
    props: {},
  },
];

export const navigations: NavigationObject[] = [
  {
    title: "基础组件",
    list: baseList,
  },
  {
    title: "布局组件",
    list: layoutList,
  },
  {
    title: "导航组件",
    list: natigationList,
  },
  {
    title: "输入组件",
    list: inputList,
  },
  {
    title: "数据展示组件",
    list: dataList,
  },
  {
    title: "消息提醒组件",
    list: msgList,
  },
];
