"use strict";

const FeedParser = require('feedparser');
const request = require('request');

//Undefined Variable
let req = request(url);
let feedPaser = new FeedParser([options]);

req.on('reponse', () => {
    let stream = this;

    if (res.statusCode != 200) {
        return this.emit('error', new Error('Bad status code'));
    }
 });

 req.on('readable', () => {
     let stream = this;
     let meta = this.meta;
     let item = this; //?

     while(item = stream.read()) {
         console.log(item);
     }
 })