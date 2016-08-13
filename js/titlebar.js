/* Copyright © 2016 Kevin Bui
	 This code is available under the "MIT License"
	 Please see the file LICENSE
 	 for more details
*/

(function () {

  const remote = require('electron').remote;
  const storage = require('electron-json-storage');

  function init() {
    document.getElementById("min-btn").addEventListener("click", function (e) {
      const window = remote.getCurrentWindow();
      window.minimize();
    });

    document.getElementById("max-btn").addEventListener("click", function (e) {
      const window = remote.getCurrentWindow();
      if (!window.isMaximized()) {
        window.maximize();
      } else {
        window.unmaximize();
      }
    });

    document.getElementById("close-btn").addEventListener("click", function (e) {
      const window = remote.getCurrentWindow();

      storage.set('savedFeeds', links, function(error) {
        if(error) throw error;
      })
      window.close();
    });
  };

  document.onreadystatechange = function () {
    if (document.readyState == "complete") {
      init();
    }
  };

})();

function submitAddDialog() {
  const storage = require('electron-json-storage')

  let data = document.getElementById('feed-input').value;
  feednami.load(data, (result) => {
    if (result.error) {
      document.getElementById('feed-input').value = 'Bad URL';
    }
    else {
      links.push(data);
      let parent = document.getElementById('sidebar');
      let div = document.createElement('div');
      div.className = 'sidebar-feed';
      div.innerText = result.feed.meta.title;
      div.onclick = loadFeed;
      div.setAttribute("link", data);
      parent.appendChild(div);
      document.getElementById('feed-input').value = '';
    }
  })

  storage.set('savedFeeds', links, (error) => {
    if (error) throw error;
  });

  document.getElementById('add-dialog').style.display = none;
  
}

function showAddDialog(id) {
  let div = document.getElementById('add-dialog');
  if (div.style.display !== 'none') {
    div.style.display = 'none';
  }
  else {
    di
  }
}