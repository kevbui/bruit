(function () {

  const remote = require('electron').remote;

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
  let data = document.getElementById('feed-input').value;
  feednami.load(data, (result) => {
    if (result.error) {
      document.getElementById('feed-input').value = 'Bad URL';
    }
    else {
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
}