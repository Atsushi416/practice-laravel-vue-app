import ExampleComponent from "../components/ExampleComponent";

import { mount } from '@vue/test-utils'

test("テスト", () => {
  const component = mount(ExampleComponent);

  console.log("a");
});