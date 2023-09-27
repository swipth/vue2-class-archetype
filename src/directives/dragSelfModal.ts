import Vue from "vue";

let globalLeft2 = 550;
let globalTop2 = 120;
// 注册自定义拖拽指令，弥补 modal 组件不能拖动的缺陷
Vue.directive("drag-self-modal", (el, bindings, vnode) => {
  Vue.nextTick(() => {
    // @ts-ignore destroyOnClose
    const { visible } = vnode.componentInstance;
    // 防止未定义 destroyOnClose 关闭弹窗时dom未被销毁，指令被重复调用
    if (!visible) return;
    // eslint-disable-next-line
    const modal = el.getElementsByClassName("custom-modal")[0] as any;
    // eslint-disable-next-line
    const header = el.getElementsByClassName("custom-modal-header")[0] as any;
    const selfWidth = modal.clientWidth;
    const selfHeight = modal.clientHeight;
    // 初始化定位位置
    globalLeft2 = (document.body.clientWidth - selfWidth) / 2;
    globalTop2 = (document.body.clientHeight - selfHeight) / 2;
    header.style.cursor = "move";

    header.onmousedown = (e: MouseEvent) => {
      const startX = e.clientX;
      const startY = e.clientY;
      el.onmousemove = (event) => {
        const endX = event.pageX;
        const endY = event.pageY;
        modal.left = endX - startX + (globalLeft2 || 0);
        modal.top = endY - startY + (globalTop2 || 0);
        if (modal.left < 0) modal.left = 0;
        if (modal.left > document.body.clientWidth - selfWidth) modal.left = document.body.clientWidth - selfWidth;
        if (modal.top < 0) modal.top = 0;
        if (modal.top > document.body.clientHeight - selfHeight) modal.top = document.body.clientHeight - selfHeight;
        modal.style.left = modal.left + "px";
        modal.style.top = modal.top + "px";
      };
      el.onmouseup = () => {
        globalLeft2 = modal.left;
        globalTop2 = modal.top;
        el.onmousemove = null;
        el.onmouseup = null;
        header.releaseCapture && header.releaseCapture();
      };
      header.setCapture && header.setCapture();
    };
  });
});
