// thinkjs单元测试文档 https://thinkjs.org/zh-cn/doc/3.0/unitest.html
import _ from 'lodash';
import { think } from 'thinkjs';
import '../helpers/app';

describe('elasticsearch service', () => {
  const service = think.service('elasticsearch', 'api');

  const func = service.getWastes;

  it('获取垃圾查询结果:elasticsearch/getWastes', async() => {
    // const args = [{ userId: 123 }];
    const args = ['剩菜剩饭'];
    const result = await func.apply(service, args);
    expect(_.isEmpty(result)).toBe(false);
  });
});
