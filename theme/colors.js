const { colors } = require('@mitchreece/theme-variables')

module.exports = {
    focusBorder: `${colors.secondary}C1`,
    foreground: colors.fontLight,

    "textLink.foreground": colors.secondary,

    "badge.background": colors.secondary,
    "badge.foreground": colors.fontLight,
    "activityBarBadge.background": colors.secondary,
    "activityBarBadge.foreground": colors.fontLight,

    "button.background": `${colors.secondary}9C`,
    "button.foreground": colors.primary,
    "button.hoverBackground": colors.secondary,

    "dropdown.background": colors.primaryDark,

    "input.background": colors.primaryDark,
    "input.foreground": colors.secondary,
    "input.placeholderForeground": `${colors.secondary}C1`,
    
    "list.hoverBackground": colors.primary,
    "list.hoverForeground": `${colors.secondary}C1`,
    "list.activeSelectionForeground": colors.secondary,
    "list.activeSelectionBackground": colors.primary,
    "list.highlightForeground": colors.secondary,
    "list.focusForeground": colors.secondary,
    "list.focusBackground": colors.primary,

    "titleBar.activeBackground": colors.primaryDark,
    "titleBar.activeForeground": `${colors.secondary}9C`,
    "titleBar.inactiveBackground": colors.primary,

    "activityBar.background": colors.primary,
    "activityBar.foreground": colors.fontLight,

    "sideBar.background": colors.primary,
    "sideBarTitle.foreground": colors.secondary,
    "sideBarSectionHeader.background": `${colors.secondary}C1`,
    "sideBarSectionHeader.foreground": colors.primary,

    "editor.background": colors.primary,
    
    "editorGroupHeader.tabsBackground": colors.primary,
    "tab.activeBackground": colors.primary,
    "tab.activeForeground": colors.secondary,
    "tab.border": colors.primary,
    "tab.inactiveBackground": colors.primary,
    "tab.inactiveForeground": `${colors.fontLight}CC`,

    "panel.border": colors.primary,
    "panelTitle.activeBorder": colors.secondary,
    "panelTitle.activeForeground": colors.secondary,

    "statusBar.background": colors.primary,
    "statusBar.foreground": `${colors.secondary}9C`,
    "statusBarItem.hoverBackground": colors.primaryDark,
    "statusBarItem.prominentHoverBackground": colors.fontLight,
    "statusBar.noFolderBackground": colors.primaryDark,
    "statusBar.debuggingBackground": colors.secondary,
    "statusBar.debuggingForeground": colors.fontLight,
}