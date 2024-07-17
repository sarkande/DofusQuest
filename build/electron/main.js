"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var path = require("path");
var electron_devtools_installer_1 = require("electron-devtools-installer");
function createWindow() {
    var win = new electron_1.BrowserWindow({
        width: 800,
        height: 600,
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
    var childWin = new electron_1.BrowserWindow({
        width: 800,
        height: 600,
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
    (0, electron_devtools_installer_1.default)(electron_devtools_installer_1.REACT_DEVELOPER_TOOLS)
        .then(function (name) { return console.log("Added Extension:  ".concat(name)); })
        .catch(function (err) { return console.log("An error occurred: ", err); });
    createWindow();
    electron_1.ipcMain.on("open-new-window", function (event, route) {
        createChildWindow(route);
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