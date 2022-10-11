import { App } from "vue";
import MButton from "./button/index.vue";
import MInput from "./input/index.vue";

// 导出单独组件
export { MButton, MInput };

// 编写一个插件，实现一个install方法

export default {
  install(app: App): void {
    app.component(MButton.name, MButton);
    app.component("MInput", MInput);
  },
};
