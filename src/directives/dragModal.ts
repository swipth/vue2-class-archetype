import Vue from "vue";

let globalLeft: number;
let globalTop: number;
// 注册自定义拖拽指令，弥补 modal 组件不能拖动的缺陷
Vue.directive("drag-modal", (el, bindings, vnode) => {
  Vue.nextTick(() => {
    // @ts-ignore destroyOnClose
    const { visible, destroyOnClose } = vnode.componentInstance;
    // 防止未定义 destroyOnClose 关闭弹窗时dom未被销毁，指令被重复调用
    if (!visible) return;
    // eslint-disable-next-line
    const modal = el.getElementsByClassName("ant-modal")[0] as any;
    // eslint-disable-next-line
    const header = el.getElementsByClassName("ant-modal-header")[0] as any;
    const selfWidth = modal.clientWidth;
    const selfHeight = modal.clientHeight;
    // 鼠标变成可移动的指示
    header.style.cursor = "move";

    // 未定义 destroyOnClose 时，dom未被销毁，关闭弹窗再次打开，弹窗会停留在上一次拖动的位置
    if (!destroyOnClose) {
      modal.style.left = (globalLeft || 0) + "px";
      modal.style.top = (globalTop || 0) + "px";
    }

    header.onmousedown = (e: MouseEvent) => {
      const startX = e.clientX;
      const startY = e.clientY;
      el.onmousemove = (event) => {
        const endX = event.pageX;
        const endY = event.pageY;
        modal.left = endX - startX + (globalLeft || 0);
        modal.top = endY - startY + (globalTop || 0);
        if (modal.left < -(document.body.clientWidth - selfWidth) / 2) modal.left = -(document.body.clientWidth - selfWidth) / 2;
        if (modal.left > (document.body.clientWidth - selfWidth) / 2) modal.left = (document.body.clientWidth - selfWidth) / 2;
        if (modal.top < -(document.body.clientHeight - selfHeight) / 2) modal.top = -(document.body.clientHeight - selfHeight) / 2;
        if (modal.top > (document.body.clientHeight - selfHeight) / 2) modal.top = (document.body.clientHeight - selfHeight) / 2;
        modal.style.left = modal.left + "px";
        modal.style.top = modal.top + "px";
      };
      el.onmouseup = () => {
        globalLeft = modal.left;
        globalTop = modal.top;
        el.onmousemove = null;
        el.onmouseup = null;
        header.releaseCapture && header.releaseCapture();
      };
      header.setCapture && header.setCapture();
    };
  });
});
