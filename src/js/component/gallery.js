
import Masonry from 'masonry-layout'
import InfiniteScroll from 'infinite-scroll'
import imagesLoaded from 'imagesloaded'

let msnry = new Masonry( '.grid', {
  itemSelector: '.photo-item',
  columnWidth: '.grid__col-sizer',
  gutter: '.grid__gutter-sizer',
  percentPosition: true,
  stagger: 30,
  // nicer reveal transition
  visibleStyle: { transform: 'translateY(0)', opacity: 1 },
  hiddenStyle: { transform: 'translateY(100px)', opacity: 0 },
});

//------------------//

// Get an API key for your demos at https://unsplash.com/developers
const unsplashID = 'JeUhcvI8Gy1ZCkP8hGd-X3AHHR8KBgohOuxu9yfa4b0';

let infScroll = new InfiniteScroll( '.grid', {
  path: function() {
    return `https://api.unsplash.com/photos?client_id=${unsplashID}&page=${this.pageIndex}`;
  },
  // load response as JSON
  responseBody: 'json',
  outlayer: msnry,
  status: '.page-load-status',
  history: false,
});

// use element to turn HTML string into elements
var proxyElem = document.createElement('div');

infScroll.on( 'load', function( body ) {
  // compile body data into HTML
  var itemsHTML = body.map( getItemHTML ).join('');
  // convert HTML string into elements
  proxyElem.innerHTML = itemsHTML;
  // append item elements
  let items = proxyElem.querySelectorAll('.photo-item');
  imagesLoaded( items, function() {
    infScroll.appendItems( items );
    msnry.appended( items );
  });
});

// load initial page
infScroll.loadNextPage();

//------------------//

function getItemHTML({ user, urls }) {
  return `<div class="photo-item">
    <img class="photo-item__image" src="${urls.regular}" alt="Photo by ${user.name}" />
    <p class="photo-item__caption">
      <a href="${user.links.html}?utm_source=infinite-scroll-demos&utm_medium=referral&utm_campaign=api-credit">${user.name}</a>
    </p>
  </div>`;
}
