# [**Aura Helper Framework**](#aura-helper-framework)

[![Version](https://img.shields.io/npm/v/@aurahelper/core?logo=npm)](https://www.npmjs.com/package/@aurahelper/core)
[![Total Downloads](https://img.shields.io/npm/dt/@aurahelper/core?logo=npm)](https://www.npmjs.com/package/@aurahelper/core)
[![Downloads/Month](https://img.shields.io/npm/dm/@aurahelper/core?logo=npm)](https://www.npmjs.com/package/@aurahelper/core)
[![Issues](https://img.shields.io/github/issues/jjlongoria/aura-helper-core)](https://github.com/JJLongoria/aura-helper-core/issues)
[![Known Vulnerabilities](https://snyk.io/test/github/JJLongoria/aura-helper-core/badge.svg)](https://snyk.io/test/github/JJLongoria/aura-helper-core)
[![Code Size](https://img.shields.io/github/languages/code-size/jjlongoria/aura-helper-core)](https://github.com/JJLongoria/aura-helper-core)
[![License](https://img.shields.io/github/license/jjlongoria/aura-helper-core?logo=github)](https://github.com/JJLongoria/aura-helper-core/blob/master/LICENSE)


Aura Helper Framework is a Node JS Framwork developed in JavaScript to able to all developers to create their own application to work with Salesforce. This Framework has to many modules to combine it to create powerfull tools. To Learn more about the framework, go to the [**Aura Helper Framework Documentation**](https://github.com/JJLongoria/aura-helper-core/wiki)

Aura Helper Framwork has his own JSON Format files to work with all modules. See the [Metadata JSON Format](#metadata-json-format) section to learn and understand the Metadata JSON Object used by the framwork to create packages, describe metadata types or create metadata types from other sources like file system. See the [Ignore File](#ignore-file) section to lear and understund the ignore file used by Aura Helper Framework to support some operations like Create Package or Repair dependencies to avoid some metadata types or objects.

Aura Helper Framework use [SFDX CLI](https://developer.salesforce.com/docs/atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_install_cli.htm) in some modules like connector to connect with your Salesforce Orgs. You must to install SFDX to use all Aura Helper Framework features. 

[Aura Helper Extension](https://github.com/JJLongoria/aura-helper) for Visual Studio Code and [Aura Helper CLI](https://github.com/JJLongoria/aura-helper-CLI) are developed using this framework.

# [**Framework Modules**](#aura-helper-framework-modules)
The Aura Helper Framework's modules and libraries are:
  - [**Aura Helper Core**](#aura-helper-core)
  - [**Aura Helper XML Definitions**](#aura-helper-xml-definitions)
  - [**Aura Helper XML Compressor**](#aura-helper-xml-compressor)
  - [**Aura Helper Connector**](#aura-helper-connector)
  - [**Aura Helper Metadata Factory**](#aura-helper-metadata-factory)
  - [**Aura Helper Package Generator**](#aura-helper-package-generator)
  - [**Aura Helper Languages**](#aura-helper-languages)
  - [**Aura Helper Dependencies Manager**](#aura-helper-dependencies-manager)
  - [**Aura Helper CLI Manager**](#aura-helper-cli-manager)
  - [**Aura Helper Git Manager**](#aura-helper-git-manager)
  - [**Aura Helper Ignore**](#aura-helper-ignore)
  - [**Aura Helper CLI**](#aura-helper-cli)

---

## [**Aura Helper Core**](https://github.com/JJLongoria/aura-helper-core)

Main Framework module. It constains to many modules and classes to use in all others modules. Contains All  Core Utils classes, all Object Types used by the framework, the process manager and all processes that can be run.

## [**Aura Helper XML Definitions**](https://github.com/JJLongoria/aura-helper-xml-definitions)

Module to get any Salesforce Metadata XML Files Definition to process Metadata files properly. Yoy can get all Raw definitions, a Raw definition for a specific type or get All or specific definitions for a specific api version. For example, yo can get all Salesforce XML Definitions for API 45.0 or get the Custom Object XML File Definition for API 35.0.

The **difference** between the **XML definition** and the **raw XML definition** is that the raw definition *is not processed*, it returns the entire XML information. The XML definitions return the XML definition processed for a *specific API version*, omitting everything that does not correspond to the indicated version.

## [**Aura Helper XML Compressor**](https://github.com/JJLongoria/aura-helper-xml-compressor)

Module to compress any Salesforce Metadata XML Files to change the format. This module make easy the work with GIT and other Version Control Systems because grant always the same order of the elements, compress the file for ocuppy less storage and make GIT faster and, specially make merges conflict more easy to resolve because identify the changes better.

You can choose the sort order of the elements to reorganize the XML data as you like.

This library depends on [@ah/xml-definitions](https://github.com/JJLongoria/aura-helper-xml-definitions) and support the same versions.

## [**Aura Helper Connector**](https://github.com/JJLongoria/aura-helper-connector)

Module to connect with Salesforce to list or describe metadata types, list or describe all SObjects, make queries, create SFDX Project, validate, deploy or retrieve in SFDX and Metadata API Formats, export and import data and much more. Is used to Aura Helper and Aura Helper CLI to support salesfore conections.

## [**Aura Helper Metadata Factory**](https://github.com/JJLongoria/aura-helper-metadata-factory)

The Metadata Factory Module is an Util Module to Aura Helper Framework to create Metadata Details, Metadata Folder Map or Metadata JSON Object from several sources like git, package file or the file system project among others.

This module support other modules like [@ah/connector](#https://github.com/JJLongoria/aura-helper-connector) among others, to download the MetadataTypes available in your org or to decribe the specified or all Metadata Types. 

## [**Aura Helper Package Generator**](https://github.com/JJLongoria/aura-helper-package-generator)

Aura Helper Package Generator Module contains a powerfull class to create and merge package files to deploy, retrieve or delete metadata from your Salesforce's projects.

You can choose to merge several package xml files (including destructiveChanges.xml and destructiveChangesPost.xml files) to combine into one file of each type, combine all packages in one file and all detructives in another file or merge all files into one package or destructive file.

## [**Aura Helper Languages**](https://github.com/JJLongoria/aura-helper-languages)

Aura Helper Languages Module has usefull inner modules to work with all supported Salesforce languages (Apex, Javascript, Aura...)

You can Tokenize and Parse any apex class to get data from classes like name, variables, methods, constructors... Also you can format your apex classes using the Apex Formatter class

Like Apex classes, you can Tokenize and Parse XML Aura Files and Aura Javascript files with Aura and Javascript modules.

To parse any XML file to process it, you can use the XML Module and its classes to parse prepare and process any XML File.

The languages module has a system module too, to get System apex classes data or Lightning Aura componetns defined on salesforce.

## [**Aura Helper Dependencies Manager**](https://github.com/JJLongoria/aura-helper-dependencies-manager)

Module to check and repair Metadata Dependencies on Salesforce's project files. You can repair your dependencies with one simple method or check if have errors. Also you can use a .ahignore.json file (see [Ignore File](#ignore-file) section) to exclude the specified metadata types when check dependencies error and compress or not the affected XML files. 

## [**Aura Helper CLI Manager**](https://github.com/JJLongoria/aura-helper-cli-manager)

Module to create and handle Aura Helper CLI processes. With this module you can execute all CLI operations and handle the processes progress easy with the callbacks functions.

Aura Helper CLI is a Command Line Interface application to work with Salesforce projects. Is specially designed to DevOps workflows and Continous Integration.

Aura Helper CLI has too many processes to list or describe metadata types, import and export data between orgs, retrieve special metadata types, compress xml files, execute apex anonymous scripts N times or create package files to deploy or delete from git changes among other operations.

## [**Aura Helper Git Manager**](https://github.com/JJLongoria/aura-helper-git-manager)

The Git Manager Module has an util methods to handle and manage git repository and has features to use in Aura Helper Framework. Yo can fetch data, list branches, get commits or get diffs from two branches, tags, commits...

You can use Aura Helper Metadata Factory Module [@ah/metadata-factory](https://github.com/JJLongoria/aura-helper-metadata-factory) to create a Metadata JSON Object from the Git diffs result, to create a package with Aura Helper Package Generator Module [@ah/package-generator](https://github.com/JJLongoria/aura-helper-package-generator) to create de package and destructive files from git changes to deploy or delete from your org. If you want, can use too the Aura Helper Ignore Module [@ah/ignore](https://github.com/JJLongoria/aura-helper-ignore) to avoid deploy or delete some metadata types. With this workflow, refactor code, work with git and teams or implement Continuous Integration among other development processes and tasks are easy.

## [**Aura Helper Ignore**](#aura-helper-ignore)

Module to ignore metadata from your salesforce projects or from a JSON metadata object. This module will be specially util in some use cases, like Custom Label values unique for every environment (like ids...), or to avoid deploy some user permissions, or when you creating autogenerated package (from git for example) and like to excludo some metadata automatically.

## [**Aura Helper CLI**](https://github.com/JJLongoria/aura-helper-CLI)

Command Line Interface to work with Salesforce Projects. This application are entire developed using Aura Helper Framework and has powerfull commands to manage your projects, create Continous Integration and DevOps workflows and support developers to make some utils task on every project like import and export data, create package files (including from git differences), compare metadata from two orgs or from your local project and the auth org, and to much more. 

---

# [**Metadata JSON Format**](#metadata-json-format)

The Metadata JSON Format used by Aura Helper Framework and modules have the next structure. Some fields are required and the datatypes checked to ensure the correct file structure. 

    {
        "MetadataAPIName": {
            "name": "MetadataAPIName",                                  // Required (String). Contains the Metadata Type API Name (like object Key)
            "checked": false,                                           // Required (Boolean). Field for include this type on package or not
            "path": "path/to/the/metadata/folder",                      // Optional (String). Path to the Metadata Type folder in local project
            "suffix": "fileSuffix",                                     // Optional (String). Metadata File suffix
            "childs": {                                                 // Object with a collection of childs (Field required (JSON Object) but can be an empty object)
                "MetadataObjectName":{
                    "name": "MetadataObjectName",                       // Required (String). Contains the Metadata Object API Name (like object Key)
                    "checked": false,                                   // Required (Boolean). Field for include this object on package or not
                    "path": "path/to/the/metadata/file/or/folder",      // Optional (String). Path to the object file or folder path
                    "childs": {                                         // Object with a collection of childs (Field required (JSON Object) but can be an empty object)
                        "MetadataItemName": {
                            "name": "MetadataItemName",                 // Required (String). Contains the Metadata Item API Name (like object Key)
                            "checked": false,                           // Required (Boolean). Field for include this object on package or not
                            "path": "path/to/the/metadata/file"
                        },
                        "MetadataItemName2": {
                            ...
                        },
                        ...,
                        ...,
                        ...
                    }
                }
                "MetadataObjectName2":{
                   ...
                },
                ...,
                ...,
                ...
            }
        }
    }

### **Example**:

    {
        "CustomObject": {
            "name": "CustomObject",
            "checked": false,
            "path":  "path/to/root/project/force-app/main/default/objects",
            "suffix": "object",
            "childs": {
                "Account": {
                    "name": "Account",
                    "checked": true,            // Add Account Object to the package
                    "path": "path/to/root/project/force-app/main/default/objects/Account/Account.object-meta.xml",
                    "childs": {}
                },
                "Case": {
                    "name": "Case",
                    "checked": true,            // Add Case Object to the package
                    "path": "path/to/root/project/force-app/main/default/objects/Case/Case.object-meta.xml",
                    "childs": {}
                },
                ...,
                ...,
                ...
            }
        },
        "CustomField": {
            "name": "CustomField",
            "checked": false,
            "path":  "path/to/root/project/force-app/main/default/objects",
            "suffix": "field",
            "childs": {
                "Account": {
                    "name": "Account",
                    "checked": false,            
                    "path": "path/to/root/project/force-app/main/default/objects/Account/fields",
                    "childs": {
                        "customField__c": {
                            "name": "customField__c",
                            "checked": true,    // Add customField__c to the package
                            "path": "path/to/root/project/force-app/main/default/objects/Account/fields/customField__c.field-meta.xml",
                        },
                        ...,
                        ...,
                        ...
                    }
                },
                "Case": {
                    "name": "Case",
                    "checked": false,           
                    "path": "path/to/root/project/force-app/main/default/objects/Case/fields",
                    "childs": {
                        "CaseNumber": {
                            "name": "CaseNumber",
                            "checked": true,    // Add CaseNumber to the package
                            "path": "path/to/root/project/force-app/main/default/objects/Account/fields/CaseNumber.field-meta.xml",
                        },
                        ...,
                        ...,
                        ...
                    }
                },
                ...,
                ...,
                ...
            }
        }
    }

# [**Ignore File**](#ignore-file)

The ignore file is a JSON file used on ignore, create package or dependencies manager modules. On this file you can specify metadata types, objects and elements for ignore or delete from your local project, package files or ignore when check dependencies.

The ignore file have the next structure

    {
        // Basic structure
        "MetadataTypeAPIName": {
            "MetadataObject1",
            "MetadataObject2"
        }

        // Advance Structure
        "MetadataTypeAPIName": {
            "MetadataObject1:MetadataItem1",
            "MetadataObject1:MetadataItem2",
            "MetadataObject2:*",
            "*",
            "*:*" // Only valid on Custom Objects
        }

        // Special for Permissions
        "MetadataTypeAPIName": {
            "UserPermission:MetadataObject1:PermissionName",
            "UserPermission:MetadataObject2:*",
            "UserPermission:*:PermissionName"
        }
    }

*Example*:

    {
        "CustomLabels": {
            "labelName1",                   // Ignore or remove the custom label "labelName1"
            "labelName2",                   // Ignore or remove the custom label "labelName2",
            "*"                             // Ignore or remove all Custom Labels
        },
        "AssignmentRules":{
            "Case:Assign1",                 // Ignore or remove the Assignent Rule "Assign1" from the object Case
            "Lead:*",                       // Ignore or remove all Assignment Rules from Lead
            "*"                             // Ignore or remove all Assignment Rules
        },
        "CustomObject": {
            "Account",                      // Ignore or remove the Account Object
            "Case:*",                       // Ignore or remove all related objects from case, including the object (Bussines Process, Fields, Validation Rules...),
            "*",                            // Ignore or remove all custom objects (only the object not the related metadata)
            "*:*",                          // Ignore or remove all custom objects and the related metadata (Bussines Process, Fields, Validation Rules...)
        },
        "Report": {
            "ReportFolder",                 // Ignore or remove the entire folder
            "ReportFolder1:ReportName2",    // Ignore or remove the report "ReportName2" from "ReportFolder1" folder.
            "*",                            // Ignore or remove all reports.
        },
        "Workflow": {
            "Account",                      // Ignore or remove the Account worflows (Rules, Task, Alerts...)
            "*"                             // Ignore or  remove all workflows (Rules, Task, Alerts...) from all objects 
        },
        "WorkflowRule": {
            "Case:*",                       // Ignore or remove all Workflow rules from case object
            "Account:Rule1",                // Ignore or remove "Rule1" from Account workflows,
            "*"                             // Ignore or remove all Worflow rules from all objects
        },
        "Profile": {
            "UserPermission:*:Permission1", // Remove the "Permission1" User Permission from all profiles
            "UserPermission:TestProfile:*", // Remove all User permissions from TestProfile file
            "UserPermission:Admin:Perm1",   // Remove the Perm1 User Permission from Admin profile
            "TestProfile2",                 // Ignore or remove  the "TestProfile" profile 
            "*"                             // Ignore or remove all profiles
        }
    }






