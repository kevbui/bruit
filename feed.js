function previewInMainPanel() {
    let div = document.getElementById('feed-active');
    if (div !== null) {
        div.id = 'feed';
    }
    let url = this.getAttribute('link');
    this.id = 'feed-active';
    console.log(this);
}
