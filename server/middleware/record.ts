/*
 * @Author: Yanc
 * @Date: 2023-03-05 01:41:11
 * @LastEditTime: 2023-03-05 02:01:17
 */
export default defineEventHandler((event) => {
  console.log("访问了路径" + event.node.req.url + "触发中间件");
});
