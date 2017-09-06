module.exports = {
  plugins: [
    require("autoprefixer")({
      remove: false, //对旧代码不删除prefixer（加快编译速度）
      browsers: ["> 5%", "ie>=9", "Firefox >= 20", "Chrome >= 45"]
    })
  ]
};
