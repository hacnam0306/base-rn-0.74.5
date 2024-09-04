import type {ConfigFile} from '@rtk-query/codegen-openapi';

const config: ConfigFile = {
  schemaFile: 'https://stg.gaina-tb.sense.co.jp/docs-json',

  apiFile: 'redux_/api/authenticated.api',
  apiImport: 'authenticatedApi',
  hooks: true,
  outputFiles: {
    './maker.ts': {
      filterEndpoints: [/maker/i],
    },
  },
};
export default config;
