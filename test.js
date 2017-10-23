const torrentSearch = new (require('torrent-search-api'))();

torrentSearch.enableProvider('ThePirateBay');

console.log(torrentSearch.getActiveProviders());
