"use strict";

var feed = require("feed-read");
var http = require("http");

function parseRss(url) {
    return feed("", function(err, articles) {
        return articles;
    });

}

let url = "http://craphound.com/?feed=rss2";
let feeds = parseRss(url);

for (let item in feeds) {
    console.log(item.title);
}
