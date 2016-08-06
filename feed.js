function previewInMainPanel() {
    let div = document.getElementById('feed-active');
    let preview = document.getElementById('preview');
    if (div !== null) {
        div.id = 'feed';
    }
    let url = this.getAttribute('link');
    this.id = 'feed-active';

    let currentLink = this.getAttribute('link');
    preview.setAttribute('src', currentLink);
    console.log(this);
}

function loadFeed() {
    cleanMainFeedList();
    let link = this.getAttribute('link');
    feednami.load(link, (result) => {
        if (result.error) {
            console.log(result.error);
        } 
        else {
            let entries = result.feed.entries;
            let feeds = document.getElementById('feeds');
            for (let i = 0; i < entries.length; i++) {
                let entry = entries[i];
                let div = document.createElement('div');
                div.className = 'feed';
                div.onclick = previewInMainPanel;
                div.setAttribute("link", entries[i].link);
                div.innerHTML = '<h1>' + entries[i].title;
                feeds.appendChild(div);
            }
        }
    });
}

function cleanMainFeedList() {
    var elements = document.getElementsByClassName('feed');
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}
