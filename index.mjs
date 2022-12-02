import fetch from 'node-fetch';
import {parse } from 'node-html-parser';

const response = await fetch('https://open.spotify.com/track/7CwnyECw9Nz3hkrmUXGGKh?si=C9zH_JwkQRGYraBnRSqfZw', {
    method: 'GET',
});

const html = await response.text();

const parsedHtml = parse(html);

const audioTag = parsedHtml.querySelector('[property="og:audio"]');
const previewUrl = audioTag.getAttribute('content');

console.log(previewUrl);

