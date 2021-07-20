import { defineAsyncComponent } from "vue";

export function registerGlobalCompoonent(app) {
  app.component(
    "auth-layout",
    defineAsyncComponent(() => import("@/layouts/Auth"))
  );
  app.component(
    "default-layout",
    defineAsyncComponent(() => import("@/layouts/Default"))
  );
}
