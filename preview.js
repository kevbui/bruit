let onload = () => {
    const webview = document.getElementById('preview');
    const indicator = document.querySelector('.indicator');

    const loadstart = () => {
        indicator.innerText = 'loading...';
    }

    const loadstop = () => {
        indicator.innerText = '';
    }

    webview.addEventListener('did-start-loading', loadstart);
    webview.addEventListener('did-stop-loading', loadstop);
}