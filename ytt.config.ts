import { defineConfig } from 'yapi-to-ts';

export default defineConfig([
  {
    serverUrl: 'http://yapi.xxx.com:3000/',
    typesOnly: false,
    prefix: '', // 路径前缀
    restful: true, // 是否是restful风格的接口
    repeat: false, // 如果restful风格的接口情况下导致了接口函数名重复，请开启repeat为true
    boolean: [], // 由于yapi的query和params暂时不支持类型，所以只能手动输入，将你碰到的boolean类型的key值传入数组
    number: ['pageSize', 'pageNumber'], // 由于yapi的query和params暂时不支持类型，所以只能手动输入，将你碰到的number类型的key值传入数组
    target: 'typescript',
    reactHooks: {
      enabled: false,
    },
    prodEnvName: 'local',
    outputFilePath: 'src/api/index.ts',
    requestFunctionFilePath: 'src/utils/request.ts',
    dataKey: 'data',
    projects: [
      {
        token: '从yapi项目内的设置 - token配置，拷贝token',
        categories: [
          {
            id: 0, // 这里是分类的id，如果是空数组，那么将会执行所有的分类，如果填了，那么将执行填写的分类。如果无特殊要求，建议传空数组
            prefix: '', // 路径前缀
            getRequestFunctionName(interfaceInfo, changeCase) {
              // 这里是可以设置请求函数的名称，interfaceInfo.path可以获取到'/api/group'。如果无需自定义配置，建议删除
              return changeCase.camelCase(interfaceInfo.parsedPath.name);
            },
          },
        ],
      },
    ],
  },
]);
