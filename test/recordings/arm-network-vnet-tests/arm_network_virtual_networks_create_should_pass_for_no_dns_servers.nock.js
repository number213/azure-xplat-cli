// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
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
  process.env['AZURE_VM_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/noDnsServersName?api-version=2017-06-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/virtualNetworks/noDnsServersName' under resource group 'xplat-test-vnet' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'bb717790-1693-42f2-ae05-33748340c545',
  'x-ms-correlation-request-id': 'bb717790-1693-42f2-ae05-33748340c545',
  'x-ms-routing-request-id': 'WESTEUROPE:20170707T123559Z:bb717790-1693-42f2-ae05-33748340c545',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 07 Jul 2017 12:35:58 GMT',
  connection: 'close',
  'content-length': '169' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/noDnsServersName?api-version=2017-06-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/virtualNetworks/noDnsServersName' under resource group 'xplat-test-vnet' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'bb717790-1693-42f2-ae05-33748340c545',
  'x-ms-correlation-request-id': 'bb717790-1693-42f2-ae05-33748340c545',
  'x-ms-routing-request-id': 'WESTEUROPE:20170707T123559Z:bb717790-1693-42f2-ae05-33748340c545',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 07 Jul 2017 12:35:58 GMT',
  connection: 'close',
  'content-length': '169' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/noDnsServersName?api-version=2017-06-01', '*')
  .reply(201, "{\r\n  \"name\": \"noDnsServersName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/noDnsServersName\",\r\n  \"etag\": \"W/\\\"63de2431-96d4-4654-af72-03a2c94e810e\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"b0881f69-bd16-439b-8eae-93d0f04758d9\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\"\r\n      ]\r\n    },\r\n    \"subnets\": [],\r\n    \"virtualNetworkPeerings\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '588',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '3',
  'x-ms-request-id': 'ac50ce23-605d-496c-86ff-59eca906f280',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/ac50ce23-605d-496c-86ff-59eca906f280?api-version=2017-06-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'a71ed925-5315-4e76-a775-ec4ba9983ec7',
  'x-ms-routing-request-id': 'WESTEUROPE:20170707T123602Z:a71ed925-5315-4e76-a775-ec4ba9983ec7',
  date: 'Fri, 07 Jul 2017 12:36:02 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/noDnsServersName?api-version=2017-06-01', '*')
  .reply(201, "{\r\n  \"name\": \"noDnsServersName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/noDnsServersName\",\r\n  \"etag\": \"W/\\\"63de2431-96d4-4654-af72-03a2c94e810e\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"b0881f69-bd16-439b-8eae-93d0f04758d9\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\"\r\n      ]\r\n    },\r\n    \"subnets\": [],\r\n    \"virtualNetworkPeerings\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '588',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '3',
  'x-ms-request-id': 'ac50ce23-605d-496c-86ff-59eca906f280',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/ac50ce23-605d-496c-86ff-59eca906f280?api-version=2017-06-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'a71ed925-5315-4e76-a775-ec4ba9983ec7',
  'x-ms-routing-request-id': 'WESTEUROPE:20170707T123602Z:a71ed925-5315-4e76-a775-ec4ba9983ec7',
  date: 'Fri, 07 Jul 2017 12:36:02 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/ac50ce23-605d-496c-86ff-59eca906f280?api-version=2017-06-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'be70ba8b-0dc0-4a59-89be-12597e0b838e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '7e43324d-3463-48d1-b7c1-a34a23c54153',
  'x-ms-routing-request-id': 'WESTEUROPE:20170707T123634Z:7e43324d-3463-48d1-b7c1-a34a23c54153',
  date: 'Fri, 07 Jul 2017 12:36:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/ac50ce23-605d-496c-86ff-59eca906f280?api-version=2017-06-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'be70ba8b-0dc0-4a59-89be-12597e0b838e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '7e43324d-3463-48d1-b7c1-a34a23c54153',
  'x-ms-routing-request-id': 'WESTEUROPE:20170707T123634Z:7e43324d-3463-48d1-b7c1-a34a23c54153',
  date: 'Fri, 07 Jul 2017 12:36:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/noDnsServersName?api-version=2017-06-01')
  .reply(200, "{\r\n  \"name\": \"noDnsServersName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/noDnsServersName\",\r\n  \"etag\": \"W/\\\"af8c5956-e182-4ff3-a0d9-f9b1f6612956\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"b0881f69-bd16-439b-8eae-93d0f04758d9\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\"\r\n      ]\r\n    },\r\n    \"subnets\": [],\r\n    \"virtualNetworkPeerings\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '589',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"af8c5956-e182-4ff3-a0d9-f9b1f6612956"',
  'x-ms-request-id': '7a171455-18c5-49a6-aae3-622d4a94dccc',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '0c992008-33d9-48a0-9022-46ef670add0d',
  'x-ms-routing-request-id': 'WESTEUROPE:20170707T123635Z:0c992008-33d9-48a0-9022-46ef670add0d',
  date: 'Fri, 07 Jul 2017 12:36:34 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/noDnsServersName?api-version=2017-06-01')
  .reply(200, "{\r\n  \"name\": \"noDnsServersName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/noDnsServersName\",\r\n  \"etag\": \"W/\\\"af8c5956-e182-4ff3-a0d9-f9b1f6612956\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"b0881f69-bd16-439b-8eae-93d0f04758d9\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\"\r\n      ]\r\n    },\r\n    \"subnets\": [],\r\n    \"virtualNetworkPeerings\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '589',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"af8c5956-e182-4ff3-a0d9-f9b1f6612956"',
  'x-ms-request-id': '7a171455-18c5-49a6-aae3-622d4a94dccc',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '0c992008-33d9-48a0-9022-46ef670add0d',
  'x-ms-routing-request-id': 'WESTEUROPE:20170707T123635Z:0c992008-33d9-48a0-9022-46ef670add0d',
  date: 'Fri, 07 Jul 2017 12:36:34 GMT',
  connection: 'close' });
 return result; }]];