// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '6e0b24a6-2bef-4598-9bd3-f87e9700e24c',
    name: 'Windows Azure Internal Consumption',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'test1';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://test1.westus.batch.azure.com';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://test1.westus.batch.azure.com:443')
  .get('/pools/xplatTestPool/nodes?api-version=2016-02-01.3.0&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://test1.westus.batch.azure.com/$metadata#nodes\",\"value\":[\r\n    {\r\n      \"id\":\"tvm-1650185656_1-20160422t053728z\",\"url\":\"https://test1.westus.batch.azure.com/pools/xplatTestPool/nodes/tvm-1650185656_1-20160422t053728z\",\"state\":\"idle\",\"schedulingState\":\"enabled\",\"stateTransitionTime\":\"2016-04-22T05:54:18.9370641Z\",\"lastBootTime\":\"2016-04-22T05:54:18.8040259Z\",\"allocationTime\":\"2016-04-22T05:37:28.0108159Z\",\"ipAddress\":\"10.80.34.68\",\"affinityId\":\"TVM:tvm-1650185656_1-20160422t053728z\",\"vmSize\":\"small\",\"totalTasksRun\":0,\"totalTasksSucceeded\":0,\"runningTasksCount\":0\r\n    },{\r\n      \"id\":\"tvm-1650185656_2-20160422t053728z\",\"url\":\"https://test1.westus.batch.azure.com/pools/xplatTestPool/nodes/tvm-1650185656_2-20160422t053728z\",\"state\":\"idle\",\"schedulingState\":\"enabled\",\"stateTransitionTime\":\"2016-04-22T05:57:00.1389632Z\",\"lastBootTime\":\"2016-04-22T05:57:00.0219632Z\",\"allocationTime\":\"2016-04-22T05:37:28.0108159Z\",\"ipAddress\":\"10.80.28.106\",\"affinityId\":\"TVM:tvm-1650185656_2-20160422t053728z\",\"vmSize\":\"small\",\"totalTasksRun\":0,\"totalTasksSucceeded\":0,\"runningTasksCount\":0\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'ce83da15-cd63-4d2d-806d-5a91a8d705c8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '422a03f6-c903-4694-88b5-c254aadc4aa0',
  dataserviceversion: '3.0',
  date: 'Fri, 22 Apr 2016 06:11:54 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://test1.westus.batch.azure.com:443')
  .get('/pools/xplatTestPool/nodes?api-version=2016-02-01.3.0&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://test1.westus.batch.azure.com/$metadata#nodes\",\"value\":[\r\n    {\r\n      \"id\":\"tvm-1650185656_1-20160422t053728z\",\"url\":\"https://test1.westus.batch.azure.com/pools/xplatTestPool/nodes/tvm-1650185656_1-20160422t053728z\",\"state\":\"idle\",\"schedulingState\":\"enabled\",\"stateTransitionTime\":\"2016-04-22T05:54:18.9370641Z\",\"lastBootTime\":\"2016-04-22T05:54:18.8040259Z\",\"allocationTime\":\"2016-04-22T05:37:28.0108159Z\",\"ipAddress\":\"10.80.34.68\",\"affinityId\":\"TVM:tvm-1650185656_1-20160422t053728z\",\"vmSize\":\"small\",\"totalTasksRun\":0,\"totalTasksSucceeded\":0,\"runningTasksCount\":0\r\n    },{\r\n      \"id\":\"tvm-1650185656_2-20160422t053728z\",\"url\":\"https://test1.westus.batch.azure.com/pools/xplatTestPool/nodes/tvm-1650185656_2-20160422t053728z\",\"state\":\"idle\",\"schedulingState\":\"enabled\",\"stateTransitionTime\":\"2016-04-22T05:57:00.1389632Z\",\"lastBootTime\":\"2016-04-22T05:57:00.0219632Z\",\"allocationTime\":\"2016-04-22T05:37:28.0108159Z\",\"ipAddress\":\"10.80.28.106\",\"affinityId\":\"TVM:tvm-1650185656_2-20160422t053728z\",\"vmSize\":\"small\",\"totalTasksRun\":0,\"totalTasksSucceeded\":0,\"runningTasksCount\":0\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'ce83da15-cd63-4d2d-806d-5a91a8d705c8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '422a03f6-c903-4694-88b5-c254aadc4aa0',
  dataserviceversion: '3.0',
  date: 'Fri, 22 Apr 2016 06:11:54 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://test1.westus.batch.azure.com:443')
  .get('/pools/xplatTestLinuxPool/nodes?api-version=2016-02-01.3.0&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://test1.westus.batch.azure.com/$metadata#nodes\",\"value\":[\r\n    {\r\n      \"id\":\"tvm-1219235766_1-20160422t053911z\",\"url\":\"https://test1.westus.batch.azure.com/pools/xplatTestLinuxPool/nodes/tvm-1219235766_1-20160422t053911z\",\"state\":\"idle\",\"schedulingState\":\"enabled\",\"stateTransitionTime\":\"2016-04-22T05:41:47.829753Z\",\"lastBootTime\":\"2016-04-22T05:41:47.767899Z\",\"allocationTime\":\"2016-04-22T05:39:11.7708953Z\",\"ipAddress\":\"10.0.0.4\",\"affinityId\":\"TVM:tvm-1219235766_1-20160422t053911z\",\"vmSize\":\"standard_d1_v2\",\"totalTasksRun\":0,\"totalTasksSucceeded\":0,\"runningTasksCount\":0\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'a9d6ac98-e7f4-429a-b18e-52ed6df75d58',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': 'd6028f10-7cd6-4245-b5ba-6a6efac2ab80',
  dataserviceversion: '3.0',
  date: 'Fri, 22 Apr 2016 06:11:54 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://test1.westus.batch.azure.com:443')
  .get('/pools/xplatTestLinuxPool/nodes?api-version=2016-02-01.3.0&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://test1.westus.batch.azure.com/$metadata#nodes\",\"value\":[\r\n    {\r\n      \"id\":\"tvm-1219235766_1-20160422t053911z\",\"url\":\"https://test1.westus.batch.azure.com/pools/xplatTestLinuxPool/nodes/tvm-1219235766_1-20160422t053911z\",\"state\":\"idle\",\"schedulingState\":\"enabled\",\"stateTransitionTime\":\"2016-04-22T05:41:47.829753Z\",\"lastBootTime\":\"2016-04-22T05:41:47.767899Z\",\"allocationTime\":\"2016-04-22T05:39:11.7708953Z\",\"ipAddress\":\"10.0.0.4\",\"affinityId\":\"TVM:tvm-1219235766_1-20160422t053911z\",\"vmSize\":\"standard_d1_v2\",\"totalTasksRun\":0,\"totalTasksSucceeded\":0,\"runningTasksCount\":0\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'a9d6ac98-e7f4-429a-b18e-52ed6df75d58',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': 'd6028f10-7cd6-4245-b5ba-6a6efac2ab80',
  dataserviceversion: '3.0',
  date: 'Fri, 22 Apr 2016 06:11:54 GMT',
  connection: 'close' });
 return result; }]];