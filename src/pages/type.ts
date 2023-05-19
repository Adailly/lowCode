// 模型对象
export interface CodeType {
  url: string;
  title: string;
  type: string;
}

// 导航模型
export interface NavigationObject {
  title: string;
  list: NavigationListItem[];
}

// 组件item
export interface NavigationListItem {
  label: string;
  iconName: string;
  typeName: string;
  props: PropsObject;
}

// 传递的基础属性
export interface PropsObject {
  [key: string]: PropertyObject;
}

type StrOrNum = string | number;

// 属性描述
export interface PropertyObject {
  name: string;
  type: string;
  default: StrOrNum;
}
