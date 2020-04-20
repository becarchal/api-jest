// thinkjs单元测试文档 https://thinkjs.org/zh-cn/doc/3.0/unitest.html
// jest 测试文档 https://jestjs.io/docs/en/getting-started
// Jest单元测试的几个指标 https://www.jianshu.com/p/1a89b2df6423
import { koaApp } from '../helpers/app';

// const basePath = `/api/`;
// beforeAll(async done => {
//   think.app.once('appReady', done);
// });
// afterAll(async done => {
// });

describe('首页index', () => {
  it('首页:index/index', async() => {
    const res = await koaApp.get('/index/index');
    expect(res.status).toBe(200);
    expect(res.body.data).toBe('OK');
  });
});
