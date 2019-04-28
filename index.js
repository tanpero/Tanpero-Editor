const electron = require("electron");
const {app, BrowserWindow} = electron;

let mainWindow;

app.on("ready", () => {
	mainWindow = new BrowserWindow({
		width: 800,
		height: 400,
	});
	
	mainWindow.loadFile("index.html");
	
	mainWindow.on("close", () => {
		mainWindow = null;
	});
});
