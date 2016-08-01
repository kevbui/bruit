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
