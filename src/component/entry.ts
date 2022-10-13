import { App } from "vue";
import VButton from "./button/button.vue";
// import VBInput from "./input/index.vue";

// 导出单独组件
export { VButton };

// 编写一个插件，实现一个install方法

export default {
  install(app: App): void {
    app.component("VButton", VButton);
    // app.component("VBInput", VBInput);
  },
};
