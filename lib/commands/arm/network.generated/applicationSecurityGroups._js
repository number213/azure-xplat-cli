/**
 * Copyright (c) Microsoft.  All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Warning: This code was generated by a tool.
// 
// Changes to this file may cause incorrect behavior and will be lost if the
// code is regenerated.

'use strict';

var generatorUtils = require('../../../util/generatorUtils');
var tagUtils = require('../tag/tagUtils');
var util = require('util');

var profile = require('../../../util/profile');
var utils = require('../../../util/utils');

var $ = utils.getLocaleString;

exports.init = function (cli) {
  var network = cli.category('network')
    .description($('Commands to manage network resources'));
  var applicationSecurityGroups = network.category('application-security-group')
    .description($('Commands to manage application security groups'));

  applicationSecurityGroups.command('create [resource-group] [name] [location]')
    .description($('Create an application security group'))
    .usage('[options] <resource-group> <name> <location>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-n, --name <name>', $('the name of the application security group'))
    .option('-l, --location <location>', $('the location'))
    .option('-t, --tags [tags]', $('the list of tags.\n     Can be multiple. In the format of "name=value".\n     Name is required and value is optional.\n     For example, -t "tag1=value1;tag2"'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, name, location, options, _) {
      resourceGroup = cli.interaction.promptIfNotGiven($('resource group : '), resourceGroup, _);
      name = cli.interaction.promptIfNotGiven($('name : '), name, _);
      options.location = cli.interaction.promptIfNotGiven($('location : '), location, _);

      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var applicationSecurityGroup;
      var progress = cli.interaction.progress(util.format($('Looking up the application security group "%s"'), name));
      try {
        applicationSecurityGroup = networkManagementClient.applicationSecurityGroups.get(resourceGroup, name, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          applicationSecurityGroup = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }

      if (applicationSecurityGroup) {
        throw new Error(util.format($('application security group with name "%s" already exists in the resource group "%s"'), name, resourceGroup));
      }

      var parameters = {};
      if(options.location) {
        parameters.location = options.location;
      }

      if(options.tags && utils.argHasValue(options.tags)) {
        tagUtils.appendTags(parameters, options);
      }

      generatorUtils.removeEmptyObjects(parameters);
      progress = cli.interaction.progress(util.format($('Creating application security group "%s"'), name));
      try {
        applicationSecurityGroup = networkManagementClient.applicationSecurityGroups.createOrUpdate(resourceGroup, name, parameters, _);
      } finally {
        progress.end();
      }

      cli.interaction.formatOutput(applicationSecurityGroup, generatorUtils.traverse);
    });

  applicationSecurityGroups.command('set [resource-group] [name]')
    .description($('Update an application security group'))
    .usage('[options] <resource-group> <name>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-n, --name <name>', $('the name of the application security group'))
    .option('-t, --tags [tags]', $('the list of tags.\n     Can be multiple. In the format of "name=value".\n     Name is required and value is optional.\n     For example, -t "tag1=value1;tag2"'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, name, options, _) {
      resourceGroup = cli.interaction.promptIfNotGiven($('resource group : '), resourceGroup, _);
      name = cli.interaction.promptIfNotGiven($('name : '), name, _);

      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var applicationSecurityGroup;
      var progress = cli.interaction.progress(util.format($('Looking up the application security group "%s"'), name));
      try {
        applicationSecurityGroup = networkManagementClient.applicationSecurityGroups.get(resourceGroup, name, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          applicationSecurityGroup = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }

      if (!applicationSecurityGroup) {
        throw new Error(util.format($('application security group with name "%s" not found in the resource group "%s"'), name, resourceGroup));
      }

      var parameters = applicationSecurityGroup;
      if(options.tags && utils.argHasValue(options.tags)) {
        tagUtils.appendTags(parameters, options);
      }

      generatorUtils.removeEmptyObjects(parameters);
      progress = cli.interaction.progress(util.format($('Updating application security group "%s"'), name));
      try {
        applicationSecurityGroup = networkManagementClient.applicationSecurityGroups.createOrUpdate(resourceGroup, name, parameters, _);
      } finally {
        progress.end();
      }

      cli.interaction.formatOutput(applicationSecurityGroup, generatorUtils.traverse);
    });

  applicationSecurityGroups.command('delete [resource-group] [name]')
    .description($('Delete an application security group'))
    .usage('[options] <resource-group> <name>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-n, --name <name>', $('the name of the application security group'))
    .option('-q, --quiet', $('quiet mode, do not ask for delete confirmation'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, name, options, _) {
      resourceGroup = cli.interaction.promptIfNotGiven($('resource group : '), resourceGroup, _);
      name = cli.interaction.promptIfNotGiven($('name : '), name, _);

      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var applicationSecurityGroup;
      var progress = cli.interaction.progress(util.format($('Looking up the application security group "%s"'), name));
      try {
        applicationSecurityGroup = networkManagementClient.applicationSecurityGroups.get(resourceGroup, name, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          applicationSecurityGroup = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }

      if (!applicationSecurityGroup) {
        throw new Error(util.format($('application security group with name "%s" not found in the resource group "%s"'), name, resourceGroup));
      }

      if (!options.quiet && !cli.interaction.confirm(util.format($('Delete application security group "%s"? [y/n] '), name), _)) {
        cli.output.info(util.format($('application security group "%s" was not deleted and still exists in the resource group "%s"'), name, resourceGroup));
        return;
      }

      progress = cli.interaction.progress(util.format($('Deleting application security group "%s"'), name));
      try {
        applicationSecurityGroup = networkManagementClient.applicationSecurityGroups.deleteMethod(resourceGroup, name, _);
        cli.output.info(util.format($('application security group "%s" was successfully deleted from resource group "%s"'), name, resourceGroup));
      } finally {
        progress.end();
      }
    });

  applicationSecurityGroups.command('show [resource-group] [name]')
    .description($('Show an application security group'))
    .usage('[options] <resource-group> <name>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-n, --name <name>', $('the name of the application security group'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, name, options, _) {
      resourceGroup = cli.interaction.promptIfNotGiven($('resource group : '), resourceGroup, _);
      name = cli.interaction.promptIfNotGiven($('name : '), name, _);

      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var applicationSecurityGroup;
      var progress = cli.interaction.progress(util.format($('Looking up the application security group "%s"'), name));
      try {
        applicationSecurityGroup = networkManagementClient.applicationSecurityGroups.get(resourceGroup, name, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          applicationSecurityGroup = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }

      if (!applicationSecurityGroup) {
        cli.output.warn(util.format($('application security group with name "%s" not found in the resource group "%s"'), name, resourceGroup));
      }

      cli.interaction.formatOutput(applicationSecurityGroup, generatorUtils.traverse);
    });

  applicationSecurityGroups.command('list [resource-group]')
    .description($('List application security groups'))
    .usage('[options] <resource-group>')
    .option('-g, --resource-group [resource-group]', $('the name of the resource group'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, options, _) {
      options.resourceGroup = resourceGroup;
      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var applicationSecurityGroup = null;
      var progress;
      try {
        if(typeof networkManagementClient.applicationSecurityGroups.listAll != 'function') {
          resourceGroup = cli.interaction.promptIfNotGiven($('resource-group : '), resourceGroup, _);
          progress = cli.interaction.progress($('Getting the application security groups'));
          applicationSecurityGroup = networkManagementClient.applicationSecurityGroups.list(resourceGroup,  _);
        } else {
          if(options.resourceGroup) {
            progress = cli.interaction.progress($('Getting the application security groups'));
            applicationSecurityGroup = networkManagementClient.applicationSecurityGroups.list(resourceGroup,  _);
          } else {
            progress = cli.interaction.progress($('Getting the application security groups'));
            applicationSecurityGroup = networkManagementClient.applicationSecurityGroups.listAll(_);
          }
        }
      } finally {
        progress.end();
      }

      cli.interaction.formatOutput(applicationSecurityGroup, function(applicationSecurityGroup) {
        if (!applicationSecurityGroup || applicationSecurityGroup.length === 0) {
          cli.output.warn($('No application security groups found'));
        } else {
          cli.output.table(applicationSecurityGroup, function (row, item) {
            generatorUtils.showTableRow(row, item);
          });
        }
      });
    });
};
