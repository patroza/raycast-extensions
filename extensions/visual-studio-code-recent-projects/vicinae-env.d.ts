/// <reference types="@vicinae/api">

/*
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 */

type ExtensionPreferences = {
  /** Build - Select which build of Visual Studio Code to use when searching for recent projects */
	"build": "Cursor" | "Kiro" | "Positron" | "Trae" | "Trae CN" | "VSCodium" | "VSCodium - Insiders" | "Code" | "Code - Insiders" | "Windsurf";

	/** View Layout - Select the layout of the view */
	"layout": "list" | "grid";

	/** Advanced - Keep the order of the sections while searching folders, files, etc. */
	"keepSectionOrder": boolean;

	/** Usability - Close other VS Code windows when opening a project */
	"closeOtherWindows": boolean;

	/** Terminal App - Select which Terminal App to use when opening with a terminal */
	"terminalApp": string;

	/** Git Integration - Display the current Git branch for files and folders in Git repositories */
	"showGitBranch": boolean;

	/** Git Integration Color - Hexadecimal color code for Git branch tag (e.g., #00FF00). Leave empty to use default green */
	"gitBranchColor": string;
}

declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Command: Search Recent Projects */
	export type Index = ExtensionPreferences & {
		
	}

	/** Command: Open with Visual Studio Code */
	export type OpenWithVscode = ExtensionPreferences & {
		
	}

	/** Command: Open New Window */
	export type OpenNewWindow = ExtensionPreferences & {
		
	}

	/** Command: Show Installed Extensions */
	export type Extensions = ExtensionPreferences & {
		
	}

	/** Command: Install Extension */
	export type InstallExtension = ExtensionPreferences & {
		
	}

	/** Command: Commands */
	export type Commandpalette = ExtensionPreferences & {
		
	}
}

declare namespace Arguments {
  /** Command: Search Recent Projects */
	export type Index = {
		
	}

	/** Command: Open with Visual Studio Code */
	export type OpenWithVscode = {
		
	}

	/** Command: Open New Window */
	export type OpenNewWindow = {
		
	}

	/** Command: Show Installed Extensions */
	export type Extensions = {
		
	}

	/** Command: Install Extension */
	export type InstallExtension = {
		
	}

	/** Command: Commands */
	export type Commandpalette = {
		
	}
}