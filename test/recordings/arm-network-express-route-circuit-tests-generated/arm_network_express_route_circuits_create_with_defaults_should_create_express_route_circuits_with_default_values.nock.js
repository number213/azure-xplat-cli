// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '947d47b4-7883-4bb9-9d85-c5e8e2f572ce',
    name: 'nrptest58.westus.validation.partner',
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
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-circuit/providers/Microsoft.Network/expressRouteCircuits/expressRouteCircuitsDefaultName?api-version=2017-09-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/expressRouteCircuits/expressRouteCircuitsDefaultName' under resource group 'xplat-test-circuit' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'b2e8db32-e8f4-4bd3-aa7e-6dcb7b852d6a',
  'x-ms-correlation-request-id': 'b2e8db32-e8f4-4bd3-aa7e-6dcb7b852d6a',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T113923Z:b2e8db32-e8f4-4bd3-aa7e-6dcb7b852d6a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 27 Sep 2017 11:39:22 GMT',
  connection: 'close',
  'content-length': '192' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-circuit/providers/Microsoft.Network/expressRouteCircuits/expressRouteCircuitsDefaultName?api-version=2017-09-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/expressRouteCircuits/expressRouteCircuitsDefaultName' under resource group 'xplat-test-circuit' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'b2e8db32-e8f4-4bd3-aa7e-6dcb7b852d6a',
  'x-ms-correlation-request-id': 'b2e8db32-e8f4-4bd3-aa7e-6dcb7b852d6a',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T113923Z:b2e8db32-e8f4-4bd3-aa7e-6dcb7b852d6a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 27 Sep 2017 11:39:22 GMT',
  connection: 'close',
  'content-length': '192' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-circuit/providers/Microsoft.Network/expressRouteCircuits/expressRouteCircuitsDefaultName?api-version=2017-09-01', '*')
  .reply(201, "{\r\n  \"name\": \"expressRouteCircuitsDefaultName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-circuit/providers/Microsoft.Network/expressRouteCircuits/expressRouteCircuitsDefaultName\",\r\n  \"etag\": \"W/\\\"bab749a2-9a0a-4a96-82c6-5c9beec8b13a\\\"\",\r\n  \"type\": \"Microsoft.Network/expressRouteCircuits\",\r\n  \"location\": \"brazilsouth\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"e4ea4175-c066-4931-a971-62a8469a9763\",\r\n    \"peerings\": [],\r\n    \"authorizations\": [],\r\n    \"serviceProviderProperties\": {\r\n      \"serviceProviderName\": \"Interxion\",\r\n      \"peeringLocation\": \"London\",\r\n      \"bandwidthInMbps\": 100\r\n    },\r\n    \"circuitProvisioningState\": \"Disabled\",\r\n    \"allowClassicOperations\": false,\r\n    \"serviceKey\": \"00000000-0000-0000-0000-000000000000\",\r\n    \"serviceProviderProvisioningState\": \"NotProvisioned\"\r\n  },\r\n  \"sku\": {\r\n    \"name\": \"Standard_MeteredData\",\r\n    \"tier\": \"Standard\",\r\n    \"family\": \"MeteredData\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1002',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'dd286ae2-3fde-4d23-a4fc-ba81822629d8',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/brazilsouth/operations/dd286ae2-3fde-4d23-a4fc-ba81822629d8?api-version=2017-09-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'e9beb728-e911-45f9-9695-a48390e34a35',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T113927Z:e9beb728-e911-45f9-9695-a48390e34a35',
  date: 'Wed, 27 Sep 2017 11:39:26 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-circuit/providers/Microsoft.Network/expressRouteCircuits/expressRouteCircuitsDefaultName?api-version=2017-09-01', '*')
  .reply(201, "{\r\n  \"name\": \"expressRouteCircuitsDefaultName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-circuit/providers/Microsoft.Network/expressRouteCircuits/expressRouteCircuitsDefaultName\",\r\n  \"etag\": \"W/\\\"bab749a2-9a0a-4a96-82c6-5c9beec8b13a\\\"\",\r\n  \"type\": \"Microsoft.Network/expressRouteCircuits\",\r\n  \"location\": \"brazilsouth\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"e4ea4175-c066-4931-a971-62a8469a9763\",\r\n    \"peerings\": [],\r\n    \"authorizations\": [],\r\n    \"serviceProviderProperties\": {\r\n      \"serviceProviderName\": \"Interxion\",\r\n      \"peeringLocation\": \"London\",\r\n      \"bandwidthInMbps\": 100\r\n    },\r\n    \"circuitProvisioningState\": \"Disabled\",\r\n    \"allowClassicOperations\": false,\r\n    \"serviceKey\": \"00000000-0000-0000-0000-000000000000\",\r\n    \"serviceProviderProvisioningState\": \"NotProvisioned\"\r\n  },\r\n  \"sku\": {\r\n    \"name\": \"Standard_MeteredData\",\r\n    \"tier\": \"Standard\",\r\n    \"family\": \"MeteredData\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1002',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'dd286ae2-3fde-4d23-a4fc-ba81822629d8',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/brazilsouth/operations/dd286ae2-3fde-4d23-a4fc-ba81822629d8?api-version=2017-09-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'e9beb728-e911-45f9-9695-a48390e34a35',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T113927Z:e9beb728-e911-45f9-9695-a48390e34a35',
  date: 'Wed, 27 Sep 2017 11:39:26 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/brazilsouth/operations/dd286ae2-3fde-4d23-a4fc-ba81822629d8?api-version=2017-09-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '4e3d29b0-e354-4543-adac-2a54bd7ee82b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '16c5765a-9ba1-4837-ac30-319615a0d60a',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T113958Z:16c5765a-9ba1-4837-ac30-319615a0d60a',
  date: 'Wed, 27 Sep 2017 11:39:57 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/brazilsouth/operations/dd286ae2-3fde-4d23-a4fc-ba81822629d8?api-version=2017-09-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '4e3d29b0-e354-4543-adac-2a54bd7ee82b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '16c5765a-9ba1-4837-ac30-319615a0d60a',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T113958Z:16c5765a-9ba1-4837-ac30-319615a0d60a',
  date: 'Wed, 27 Sep 2017 11:39:57 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-circuit/providers/Microsoft.Network/expressRouteCircuits/expressRouteCircuitsDefaultName?api-version=2017-09-01')
  .reply(200, "{\r\n  \"name\": \"expressRouteCircuitsDefaultName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-circuit/providers/Microsoft.Network/expressRouteCircuits/expressRouteCircuitsDefaultName\",\r\n  \"etag\": \"W/\\\"ec20e0a3-f04a-4271-84be-064404c82848\\\"\",\r\n  \"type\": \"Microsoft.Network/expressRouteCircuits\",\r\n  \"location\": \"brazilsouth\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"e4ea4175-c066-4931-a971-62a8469a9763\",\r\n    \"peerings\": [],\r\n    \"authorizations\": [],\r\n    \"serviceProviderProperties\": {\r\n      \"serviceProviderName\": \"Interxion\",\r\n      \"peeringLocation\": \"London\",\r\n      \"bandwidthInMbps\": 100\r\n    },\r\n    \"circuitProvisioningState\": \"Enabled\",\r\n    \"allowClassicOperations\": false,\r\n    \"gatewayManagerEtag\": \"\",\r\n    \"serviceKey\": \"dc78003c-f0d0-40c9-8d8f-b41685234192\",\r\n    \"serviceProviderProvisioningState\": \"NotProvisioned\"\r\n  },\r\n  \"sku\": {\r\n    \"name\": \"Standard_MeteredData\",\r\n    \"tier\": \"Standard\",\r\n    \"family\": \"MeteredData\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1033',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '9f97714b-c573-4563-80c2-f6e3fb11cb09',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': 'c2d1d0c8-10b4-455d-b1bd-9438daa6c876',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T113959Z:c2d1d0c8-10b4-455d-b1bd-9438daa6c876',
  date: 'Wed, 27 Sep 2017 11:39:59 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-circuit/providers/Microsoft.Network/expressRouteCircuits/expressRouteCircuitsDefaultName?api-version=2017-09-01')
  .reply(200, "{\r\n  \"name\": \"expressRouteCircuitsDefaultName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-circuit/providers/Microsoft.Network/expressRouteCircuits/expressRouteCircuitsDefaultName\",\r\n  \"etag\": \"W/\\\"ec20e0a3-f04a-4271-84be-064404c82848\\\"\",\r\n  \"type\": \"Microsoft.Network/expressRouteCircuits\",\r\n  \"location\": \"brazilsouth\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"e4ea4175-c066-4931-a971-62a8469a9763\",\r\n    \"peerings\": [],\r\n    \"authorizations\": [],\r\n    \"serviceProviderProperties\": {\r\n      \"serviceProviderName\": \"Interxion\",\r\n      \"peeringLocation\": \"London\",\r\n      \"bandwidthInMbps\": 100\r\n    },\r\n    \"circuitProvisioningState\": \"Enabled\",\r\n    \"allowClassicOperations\": false,\r\n    \"gatewayManagerEtag\": \"\",\r\n    \"serviceKey\": \"dc78003c-f0d0-40c9-8d8f-b41685234192\",\r\n    \"serviceProviderProvisioningState\": \"NotProvisioned\"\r\n  },\r\n  \"sku\": {\r\n    \"name\": \"Standard_MeteredData\",\r\n    \"tier\": \"Standard\",\r\n    \"family\": \"MeteredData\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1033',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '9f97714b-c573-4563-80c2-f6e3fb11cb09',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': 'c2d1d0c8-10b4-455d-b1bd-9438daa6c876',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T113959Z:c2d1d0c8-10b4-455d-b1bd-9438daa6c876',
  date: 'Wed, 27 Sep 2017 11:39:59 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-circuit/providers/Microsoft.Network/expressRouteCircuits/expressRouteCircuitsDefaultName?api-version=2017-09-01')
  .reply(200, "{\r\n  \"name\": \"expressRouteCircuitsDefaultName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-circuit/providers/Microsoft.Network/expressRouteCircuits/expressRouteCircuitsDefaultName\",\r\n  \"etag\": \"W/\\\"ec20e0a3-f04a-4271-84be-064404c82848\\\"\",\r\n  \"type\": \"Microsoft.Network/expressRouteCircuits\",\r\n  \"location\": \"brazilsouth\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"e4ea4175-c066-4931-a971-62a8469a9763\",\r\n    \"peerings\": [],\r\n    \"authorizations\": [],\r\n    \"serviceProviderProperties\": {\r\n      \"serviceProviderName\": \"Interxion\",\r\n      \"peeringLocation\": \"London\",\r\n      \"bandwidthInMbps\": 100\r\n    },\r\n    \"circuitProvisioningState\": \"Enabled\",\r\n    \"allowClassicOperations\": false,\r\n    \"gatewayManagerEtag\": \"\",\r\n    \"serviceKey\": \"dc78003c-f0d0-40c9-8d8f-b41685234192\",\r\n    \"serviceProviderProvisioningState\": \"NotProvisioned\"\r\n  },\r\n  \"sku\": {\r\n    \"name\": \"Standard_MeteredData\",\r\n    \"tier\": \"Standard\",\r\n    \"family\": \"MeteredData\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1033',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '2147c1a8-acc6-40d1-9fa2-984c7eb8ddb5',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '7589352d-42d1-458d-a9f2-6f0774888c01',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T114001Z:7589352d-42d1-458d-a9f2-6f0774888c01',
  date: 'Wed, 27 Sep 2017 11:40:01 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-circuit/providers/Microsoft.Network/expressRouteCircuits/expressRouteCircuitsDefaultName?api-version=2017-09-01')
  .reply(200, "{\r\n  \"name\": \"expressRouteCircuitsDefaultName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-circuit/providers/Microsoft.Network/expressRouteCircuits/expressRouteCircuitsDefaultName\",\r\n  \"etag\": \"W/\\\"ec20e0a3-f04a-4271-84be-064404c82848\\\"\",\r\n  \"type\": \"Microsoft.Network/expressRouteCircuits\",\r\n  \"location\": \"brazilsouth\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"e4ea4175-c066-4931-a971-62a8469a9763\",\r\n    \"peerings\": [],\r\n    \"authorizations\": [],\r\n    \"serviceProviderProperties\": {\r\n      \"serviceProviderName\": \"Interxion\",\r\n      \"peeringLocation\": \"London\",\r\n      \"bandwidthInMbps\": 100\r\n    },\r\n    \"circuitProvisioningState\": \"Enabled\",\r\n    \"allowClassicOperations\": false,\r\n    \"gatewayManagerEtag\": \"\",\r\n    \"serviceKey\": \"dc78003c-f0d0-40c9-8d8f-b41685234192\",\r\n    \"serviceProviderProvisioningState\": \"NotProvisioned\"\r\n  },\r\n  \"sku\": {\r\n    \"name\": \"Standard_MeteredData\",\r\n    \"tier\": \"Standard\",\r\n    \"family\": \"MeteredData\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1033',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '2147c1a8-acc6-40d1-9fa2-984c7eb8ddb5',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '7589352d-42d1-458d-a9f2-6f0774888c01',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T114001Z:7589352d-42d1-458d-a9f2-6f0774888c01',
  date: 'Wed, 27 Sep 2017 11:40:01 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-circuit/providers/Microsoft.Network/expressRouteCircuits/expressRouteCircuitsDefaultName?api-version=2017-09-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/brazilsouth/operationResults/9052311c-94c8-4483-8d57-ac5892bc9cbf?api-version=2017-09-01',
  'retry-after': '10',
  'x-ms-request-id': '9052311c-94c8-4483-8d57-ac5892bc9cbf',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/brazilsouth/operations/9052311c-94c8-4483-8d57-ac5892bc9cbf?api-version=2017-09-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '965c3723-d359-46a7-bc53-9c0221fd9e93',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T114003Z:965c3723-d359-46a7-bc53-9c0221fd9e93',
  date: 'Wed, 27 Sep 2017 11:40:03 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-circuit/providers/Microsoft.Network/expressRouteCircuits/expressRouteCircuitsDefaultName?api-version=2017-09-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/brazilsouth/operationResults/9052311c-94c8-4483-8d57-ac5892bc9cbf?api-version=2017-09-01',
  'retry-after': '10',
  'x-ms-request-id': '9052311c-94c8-4483-8d57-ac5892bc9cbf',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/brazilsouth/operations/9052311c-94c8-4483-8d57-ac5892bc9cbf?api-version=2017-09-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '965c3723-d359-46a7-bc53-9c0221fd9e93',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T114003Z:965c3723-d359-46a7-bc53-9c0221fd9e93',
  date: 'Wed, 27 Sep 2017 11:40:03 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/brazilsouth/operations/9052311c-94c8-4483-8d57-ac5892bc9cbf?api-version=2017-09-01')
  .reply(200, "{\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '30',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '0a561507-8f5d-4935-a1e9-a6acbe8e82f0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '2abd522f-0205-4dab-8bdf-86ab8dd40df5',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T114034Z:2abd522f-0205-4dab-8bdf-86ab8dd40df5',
  date: 'Wed, 27 Sep 2017 11:40:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/brazilsouth/operations/9052311c-94c8-4483-8d57-ac5892bc9cbf?api-version=2017-09-01')
  .reply(200, "{\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '30',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '0a561507-8f5d-4935-a1e9-a6acbe8e82f0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '2abd522f-0205-4dab-8bdf-86ab8dd40df5',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T114034Z:2abd522f-0205-4dab-8bdf-86ab8dd40df5',
  date: 'Wed, 27 Sep 2017 11:40:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/brazilsouth/operations/9052311c-94c8-4483-8d57-ac5892bc9cbf?api-version=2017-09-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '63164afb-4681-41c0-80a7-12ada403664e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '40a16e21-621e-4696-89cb-f7af760daba6',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T114105Z:40a16e21-621e-4696-89cb-f7af760daba6',
  date: 'Wed, 27 Sep 2017 11:41:04 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/brazilsouth/operations/9052311c-94c8-4483-8d57-ac5892bc9cbf?api-version=2017-09-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '63164afb-4681-41c0-80a7-12ada403664e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '40a16e21-621e-4696-89cb-f7af760daba6',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T114105Z:40a16e21-621e-4696-89cb-f7af760daba6',
  date: 'Wed, 27 Sep 2017 11:41:04 GMT',
  connection: 'close' });
 return result; }]];