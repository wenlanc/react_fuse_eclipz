const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const isDev = require("electron-is-dev");
const url = require("url");

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 560,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true,
        },
        icon: path.join(__dirname + './assets/logos/icon_light.png'),
        //frame: false,
    });

    //mainWindow.setMenuBarVisibility(false);
    mainWindow.setMenu(null)
    //mainWindow.setAutoHideMenuBar(true)
    //mainWindow.removeMenu()

    mainWindow.loadURL(isDev ? "http://localhost:3000" :
    url.format({
        pathname: path.join(__dirname, "../build/index.html"),
        protocol: "file:",
        slashes: true,
      }));

    if (isDev) {
        //mainWindow.webContents.openDevTools({ mode: 'detach' });
    }

    mainWindow.on("closed", () => (mainWindow = null));
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    if (mainWindow === null) {
        createWindow();
    }
});

// Mac OS Dock Icon setting ?
// const image = electron.nativeImage.createFromPath(
//     app.getAppPath() + "/public/YOUR_APP_IMAGE_NAME"
//   );
//   app.dock.setIcon(image);