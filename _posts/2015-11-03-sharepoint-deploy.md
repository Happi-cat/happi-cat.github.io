---
title:      "SharePoint Deploy"
subtitle:   "Deployment script"
date:       2015-11-03
layout:     post
category: 	SharePoint
tags:		sharepoint
header-img: "img/post-bg-01.jpg"
---

# PowerDeploy

Lets me introduce PowerDeploy script for SP Server development.

Here is the script for sharepoint solutions deployment:
[Gist](https://gist.github.com/Happi-cat/50dc0f5b7d8940a4eacf)

Run get-help .\PowerDeploy.ps1 in PS to get help

Config file example:

```xml
<Packages>
	<Package Identity="SP.Project1.wsp" LiteralPath="D:\builds\release-5">
		<DeployActions>
			<UpgradeSolution/>
		</DeployActions>
		<PostDeployActions>
			<!-- 
				New farm feature that should be installed, 
				And it will be activated by default 
			-->
			<InstallFeature Path="SP.Project1_Shared"/>
		</PostDeployActions>
	</Package>
	<Package Identity="SP.Project2.wsp" LiteralPath="D:\builds\release-5">
		<DeployActions>
			<UpgradeSolution/>
		</DeployActions>
		<PostDeployActions>
			<!-- Re-create settings list -->
			<DisableFeature Identity="2a520f9f-bc3c-4874-8e48-46201554bc2e" Url="http://localhost:8080/sites/dev"/>
			<CustomAction ScriptFile="D:\PowerDeploy\Extensions\RemoveList.ps1">
				<SiteUrl>http://localhost:8080/sites/dev</SiteUrl>
				<ListName>List Title #1</ListName>
			</CustomAction>
			<EnableFeature Identity="2a520f9f-bc3c-4874-8e48-46201554bc2e" Url="http://localhost:8080/sites/dev"/>
			<!-- TODO: Uncomment section below for @DEV AND @PP @FARM -->
			<!--
				<CustomAction ScriptFile="D:\PowerDeploy\Extensions\UpdateProjectsSettings.ps1"></CustomAction>-->
		</PostDeployActions>
	</Package>
	<Package Identity="SP.Project3.wsp" LiteralPath="D:\builds\release-5">
		<DeployActions>
			<UpgradeSolution/>
		</DeployActions>
	</Package>
	<Package Identity="SP.Project4.wsp" LiteralPath="D:\builds\release-5">
		<DeployActions>
			<UpgradeSolution/>
		</DeployActions>
	</Package>
</Packages>
```
