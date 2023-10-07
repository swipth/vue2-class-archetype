import Vue from "vue";
// 图标懒加载
Vue.directive("lazy", {
  bind: function (el: HTMLImageElement, binding) {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        //   当图片出现在视图中，替换图片中的url
        el.src = binding.value
        //   停止监听
        observer.unobserve(el)
      }
    }, {threshold: 0.01})//配置观察者 阈值是0.01 也就是当目标元素的课件区域占比大于等于0.01时 被视为目标元素进入窗口
    //   开始监听el元素
    observer.observe(el)
  },
});
