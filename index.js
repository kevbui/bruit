'use strict';
const electron = require('electron');
const app = electron.app;
const windowStateKeeper = require('electron-window-state');
const storage = require('electron-json-storage');

const rss = require('./rss.js');

// adds debug features like hotkeys for triggering dev tools and reload
require('electron-debug')();

// prevent window being garbage collected
let mainWindow;

function onClosed() {
	// dereference the window
	// for multiple windows store them in an array
	mainWindow = null;
}

function createMainWindow() {
	const mainWindowState = windowStateKeeper({
		defaultWidth: 1200,
		defaultHeight: 800
	});

	let win = new electron.BrowserWindow({
		x: mainWindowState.x,
		y: mainWindowState.y,
		width: mainWindowState.width,
		height: mainWindowState.height,
	});

	// Let us register listeners on the window, so we can update the state
	// automatically (the listeners will be removed when the window is closed)
	// and restore the maximized or full screen state
	mainWindowState.manage(win);

    storage.has('savedFeeds', function(error, hasKey) {
        if(error) {
            storage.set('savedFeeds', {savedFeeds: [] }, writeFeeds);
        }

        if(hasKey) {
            storage.get('savedFeeds', function(error, data) {
                let urls = data;
            })
        } 
    })

	win.setMenu(null);	
	win.loadURL(`file://${__dirname}/index.html`);
	win.on('closed', onClosed);

	return win;
}

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => {
	if (!mainWindow) {
		mainWindow = createMainWindow();
	}
});

app.on('ready', () => {
	mainWindow = createMainWindow();
});
