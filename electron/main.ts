import { app, BrowserWindow, ipcMain } from "electron";
import * as path from "path";
import installExtension, { REACT_DEVELOPER_TOOLS } from "electron-devtools-installer";
import { ApplicationSettings } from "./class/applications_settings";

console.log("Hello from Electron");
const applicationSettings = new ApplicationSettings();

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    alwaysOnTop: true, // Ajoutez cette ligne pour garder la fenêtre en premier plan
    webPreferences: {
      // contextIsolation: false,
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: true,
      contextIsolation: false, // Assurez-vous que contextIsolation est false pour IPC
    },
  });

  if (app.isPackaged) {
    // 'build/index.html'
    win.loadURL(`file://${__dirname}/../index.html`);
  } else {
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
function createChildWindow(route: string) {
  const childWin = new BrowserWindow({
    width: 800,
    height: 600,
    alwaysOnTop: true, // Ajoutez cette ligne pour garder la fenêtre en premier plan
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  if (app.isPackaged) {
    childWin.loadURL(`file://${__dirname}/../index.html#/${route}`);
  } else {
    childWin.loadURL(`http://localhost:3000/#/${route}`);
    childWin.webContents.openDevTools();
  }
}

app.whenReady().then(() => {
  installExtension(REACT_DEVELOPER_TOOLS)
    .then((name) => console.log(`Added Extension:  ${name}`))
    .catch((err) => console.log("An error occurred: ", err));

  createWindow();

  ipcMain.on("open-new-window", (event, route) => {
    createChildWindow(route);
  });

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });

  app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
      app.quit();
    }
  });
});
