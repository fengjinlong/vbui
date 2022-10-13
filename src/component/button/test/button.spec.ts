import { markRaw, nextTick, ref } from "vue";
import { mount, shallowMount } from "@vue/test-utils";
import { describe, expect, it, test } from "vitest";

import VButton from "../button.vue";

const AXIOM = "Rem is the best girl";

describe("Button.vue", () => {
  it("create", () => {
    const wrapper = shallowMount(VButton, {
      props: {
        type: "success",
      },
    });

    expect(wrapper.classes()).toContain("btn-success");
  });

  it("disabled", async () => {
    const wrapper = shallowMount(VButton, {
      props: {
        disabled: "disabled",
      },
    });
    console.log("aaa", wrapper.props());

    expect(wrapper.props().disabled).toBe(true);
  });
});
