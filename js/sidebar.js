/* Copyright © 2016 Kevin Bui
	 This code is available under the "MIT License"
	 Please see the file LICENSE
 	 for more details
*/

function loadSidebar(urls) {
    let sidebar = document.getElementById('sidebar');
    for (var index = 0; index < urls.length; index++) {
        feednami.load(urls[index], (result) => {
            if (result.error) {
                console.log(result.error);
            }
            else {
                let div = document.createElement('ul');
                div.className = 'sidebar-feed';
                div.innerText = result.feed.meta.title;
                div.onclick = loadFeed;
                div.setAttribute("link", result.feed.meta.xmlurl);
                sidebar.appendChild(div);
            }

        });
    }
}
    
function sortSidebar() {
    let toBeSorted = document.getElementById('sidebar').children;
    toBeSorted = Array.prototype.slice(toBeSorted, 0);

    toBeSorted.sort(function (a, b) {
        a = a.textContent.trim();
        b = a.textContent.trim();
        if (a.textContent < b.textContent) return -1;
        if (a.textContent > b.textContent) return 1;
        return 0;
    });

    let parent = document.getElementById('sidebar');
    toBeSorted.forEach(function (div) {
        parent.appendChild(div);
    });
}

(function () {
  const storage = require('electron-json-storage');

  storage.get('savedFeeds', function(error, data) {
      if(error) throw error;
      for (var i = 0; i < data.length; i++) {
          links.push(data[i]);
      }
      loadSidebar(links);
  })
})();
