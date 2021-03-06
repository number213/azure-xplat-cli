// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '9532a63e-f2eb-4649-bb23-5ed01077ce80',
    name: 'franks-official-test-sub',
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
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus2';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses/IPAllocationMethodOutOfRangeName?api-version=2017-10-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/publicIPAddresses/IPAllocationMethodOutOfRangeName' under resource group 'xplat-test-public-ip' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'fdbbcc63-994d-4dcd-9f49-cb84254575fc',
  'x-ms-correlation-request-id': 'fdbbcc63-994d-4dcd-9f49-cb84254575fc',
  'x-ms-routing-request-id': 'WESTEUROPE:20170918T122650Z:fdbbcc63-994d-4dcd-9f49-cb84254575fc',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 18 Sep 2017 12:26:49 GMT',
  connection: 'close',
  'content-length': '192' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses/IPAllocationMethodOutOfRangeName?api-version=2017-10-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/publicIPAddresses/IPAllocationMethodOutOfRangeName' under resource group 'xplat-test-public-ip' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'fdbbcc63-994d-4dcd-9f49-cb84254575fc',
  'x-ms-correlation-request-id': 'fdbbcc63-994d-4dcd-9f49-cb84254575fc',
  'x-ms-routing-request-id': 'WESTEUROPE:20170918T122650Z:fdbbcc63-994d-4dcd-9f49-cb84254575fc',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 18 Sep 2017 12:26:49 GMT',
  connection: 'close',
  'content-length': '192' });
 return result; }]];
