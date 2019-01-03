---
title:      "Sublime Text Config"
subtitle:   "Sublime Text Personal Config"
date:       2016-07-25
layout:     post
category: 	"Sublime Text"
tags:		"sublime text"
header-img: "img/post-bg-01.jpg"
---

## First Machine

On your first machine, use the following instructions.

```powershell
cd "$env:appdata\Sublime Text 3\Packages\"
mkdir $env:userprofile\Dropbox\Sublime
mv User $env:userprofile\Dropbox\Sublime\
cmd /c mklink /D User $env:userprofile\Dropbox\Sublime\User
```

## Other Machine(s)

On your other machine(s), use the following instructions. These instructions will remove your User/ folder and all contents!

```powershell
cd "$env:appdata\Sublime Text 3\Packages\"
rmdir -recurse User
cmd /c mklink /D User $env:userprofile\Dropbox\Sublime\User
```

## Settings Example

```json
{
	"always_show_minimap_viewport": true,
	"bold_folder_labels": true,
	"caret_extra_bottom": 2,
	"caret_extra_top": 2,
	"caret_extra_width": 3,
	"caret_style": "phase",
	"color_scheme": "Packages/Material Theme/schemes/Material-Theme.tmTheme",
	"draw_white_space": "all",
	"font_options":
	[
		"gray_antialias",
		"subpixel_antialias"
	],
	"font_size": 10,
	"highlight_line": true,
	"ignored_packages":
	[
		"Vintage"
	],
	"indent_guide_options":
	[
		"draw_normal",
		"draw_active"
	],
	"line_padding_bottom": 3,
	"line_padding_top": 3,
	"material_theme_small_tab": true,
	"theme": "Material-Theme.sublime-theme",
	"wide_caret": true
}
```