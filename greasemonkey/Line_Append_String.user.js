// ==UserScript==
// @name        LINE Append String
// @namespace   lineappendstring
// @description Automatic generation of append string for BetterDiscord plugin
// @include     https://store.line.me/stickershop/product/*
// @version     0.3.4
// @grant       none
// ==/UserScript==

var title = $('.mdCMN08Ttl').text();
var firstStickerID = $('.mdCMN09Image').first().css('background-image').slice($('.mdCMN09Image').first().css('background-image').search('/products/') + 10).slice(0, $('.mdCMN09Image').first().css('background-image').slice($('.mdCMN09Image').first().css('background-image').search('/products/') + 10).search('/android/')).slice($('.mdCMN09Image').first().css('background-image').slice($('.mdCMN09Image').first().css('background-image').search('/products/') + 10).slice(0, $('.mdCMN09Image').first().css('background-image').slice($('.mdCMN09Image').first().css('background-image').search('/products/') + 10).search('/android/')).lastIndexOf('/') + 1);
var length = $('.mdCMN09Li').length.toString();
var append_string = 'lineemotes.appendPack(`' + title + '`, ' + firstStickerID + ', ' + length + ')';

var href = window.location.pathname.split('/');
var locale = href[href.length - 1]

var strings = {
  'title' : 'Title',
  'count': 'Sticker count',
  'first_id': 'First sticker ID',
  'append': 'Console command'
}
if (locale === 'ja') {
  strings = {
    'title' : 'タイトル',
    'count': 'スタンプの数',
    'first_id': '最初のスタンプID',
    'append': '追加のコマンド'
  }
}

var inlineCSS = `background: #2e3136;
padding: 1em;
-webkit-border-radius: 3px;
border-radius: 3px;
font-family: Consolas, "Liberation Mono", Menlo, Courier, monospace;
line-height: 16px;
color: rgba(255,255,255,.7);
margin: 10px 0;`;

console.log(
`${strings['title']}: ${title}
${strings['first_id']}: ${firstStickerID}
${strings['count']}: ${length}
${strings['append']}:
${append_string}`);

$('.mdCMN08Txt').append(
`<p style='${inlineCSS}'>
${strings['title']}: ${title}<br>
${strings['first_id']}: ${firstStickerID}<br>
${strings['count']}: ${length}<br>
${strings['append']}: <br>
${append_string}
</p>`
);
