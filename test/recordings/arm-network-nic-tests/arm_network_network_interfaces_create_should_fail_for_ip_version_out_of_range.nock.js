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
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/IPVersionOutOfRangeName?api-version=2017-03-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/networkInterfaces/IPVersionOutOfRangeName' under resource group 'xplat-test-nic' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '520704bd-af91-4c9a-84fc-344db4e42423',
  'x-ms-correlation-request-id': '520704bd-af91-4c9a-84fc-344db4e42423',
  'x-ms-routing-request-id': 'WESTEUROPE:20170602T140828Z:520704bd-af91-4c9a-84fc-344db4e42423',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 02 Jun 2017 14:08:28 GMT',
  connection: 'close',
  'content-length': '177' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/IPVersionOutOfRangeName?api-version=2017-03-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/networkInterfaces/IPVersionOutOfRangeName' under resource group 'xplat-test-nic' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '520704bd-af91-4c9a-84fc-344db4e42423',
  'x-ms-correlation-request-id': '520704bd-af91-4c9a-84fc-344db4e42423',
  'x-ms-routing-request-id': 'WESTEUROPE:20170602T140828Z:520704bd-af91-4c9a-84fc-344db4e42423',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 02 Jun 2017 14:08:28 GMT',
  connection: 'close',
  'content-length': '177' });
 return result; }]];