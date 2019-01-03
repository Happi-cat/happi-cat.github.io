---
title:      "Ubuntu screen resizing on VirtualBox"
subtitle:   "The display resolution of Ubuntu does not seem to change as the Virtualbox window is resized or if we were to go into Full Screen mode."
date:       2015-02-01
layout:     post
category: 	virtualbox
tags:		ubuntu virtualbox
header-img: "img/post-bg-01.jpg"
---

Inside virtual machine just type to install guest additions:

-	sudo apt-get install virtualbox-guest-dkms virtualbox-guest-utils virtualbox-guest-x11


If that happens once you have the guest additions installed, it may help reconfiguring DKMS

-	dpkg-reconfigure virtualbox-guest-dkms