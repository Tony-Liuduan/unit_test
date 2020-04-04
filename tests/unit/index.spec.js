/*
 * @Author: liuduan
 * @Date: 2020-04-03 20:29:03
 * @LastEditors: liuduan
 * @LastEditTime: 2020-04-03 21:00:19
 * @Description: 单测，执行依赖node版本
 */

// describe + it 完善了测试用例
// 断言库 expect api
describe("first test unit", function () {
    it("测试+1函数", function () {
        expect(add(1)).toBe(1);
        expect(add(2)).toBe(3);
    })
})