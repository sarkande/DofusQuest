"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var path = require("path");
var applications_settings_1 = require("./class/applications_settings");
var logger_1 = require("./class/logger");
console.log("Hello from Electron");
logger_1.logger.log("Hello from Logger");
var applicationSettings = new applications_settings_1.ApplicationSettings();
function createWindow() {
    var win = new electron_1.BrowserWindow({
        width: 800,
        height: 420,
        alwaysOnTop: true,
        webPreferences: {
            // contextIsolation: false,
            preload: path.join(__dirname, "preload.js"),
            nodeIntegration: true,
            contextIsolation: false, // Assurez-vous que contextIsolation est false pour IPC
        },
    });
    if (electron_1.app.isPackaged) {
        // 'build/index.html'
        win.loadURL("file://".concat(__dirname, "/../index.html"));
    }
    else {
        win.loadURL("http://localhost:3000/index.html");
        win.webContents.openDevTools();
        // Hot Reloading on 'node_modules/.bin/electronPath'
        require("electron-reload")(__dirname, {
            electron: path.join(__dirname, "..", "..", "node_modules", ".bin", "electron" + (process.platform === "win32" ? ".cmd" : "")),
            forceHardReset: true,
            hardResetMethod: "exit",
        });
    }
}
function createChildWindow(route) {
    var applicationSettingItem = applicationSettings.findApplicationSettingItemByRoute(route);
    if (!applicationSettingItem)
        throw new Error("Invalid route");
    var childWin = new electron_1.BrowserWindow({
        width: applicationSettingItem.windowSize.width,
        height: applicationSettingItem.windowSize.height,
        title: applicationSettingItem.title,
        alwaysOnTop: true,
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
            nodeIntegration: true,
            contextIsolation: false,
        },
    });
    if (electron_1.app.isPackaged) {
        childWin.loadURL("file://".concat(__dirname, "/../index.html#/").concat(route));
    }
    else {
        childWin.loadURL("http://localhost:3000/#/".concat(route));
        childWin.webContents.openDevTools();
    }
}
electron_1.app.whenReady().then(function () {
    // installExtension(REACT_DEVELOPER_TOOLS)
    //   .then((name) => console.log(`Added Extension:  ${name}`))
    //   .catch((err) => console.log("An error occurred: ", err));
    createWindow();
    electron_1.ipcMain.on("open-new-window", function (event, route) {
        createChildWindow(route);
    });
    electron_1.ipcMain.on("get-application-settings", function (event) {
        event.returnValue = applicationSettings.applicationSettings;
    });
    electron_1.ipcMain.on("edit-application-setting-item", function (event, applicationSettingItem) {
        applicationSettings.editApplicationSettingItem(applicationSettingItem);
    });
    electron_1.app.on("activate", function () {
        if (electron_1.BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
    electron_1.app.on("window-all-closed", function () {
        if (process.platform !== "darwin") {
            electron_1.app.quit();
        }
    });
});
//# sourceMappingURL=main.js.map