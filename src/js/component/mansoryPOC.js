import Masonry from 'masonry-layout';
import InfiniteScroll from 'infinite-scroll';
import imagesLoaded from 'imagesloaded';

class MasonryPOC {
  constructor() {
    this.unsplashID = 'JeUhcvI8Gy1ZCkP8hGd-X3AHHR8KBgohOuxu9yfa4b0';
  }

  initialize() {
    this.initMasonry();
    this.initInfiniteScroll();
  }

  initMasonry() {
    this.msnry = new Masonry('.grid', {
      itemSelector: '.photo-item',
      columnWidth: '.grid__col-sizer',
      gutter: '.grid__gutter-sizer',
      percentPosition: true,
      stagger: 30,
      visibleStyle: { transform: 'translateY(0)', opacity: 1 },
      hiddenStyle: { transform: 'translateY(100px)', opacity: 0 },
    });
  }

  initInfiniteScroll() {
    const self = this; // Save the reference to the class instance

    this.infScroll = new InfiniteScroll('.grid', {
      path: function() {
        // Use 'self' to refer to the class instance
        return `https://api.unsplash.com/search/photos?client_id=${self.unsplashID}&page=${this.pageIndex}&per_page=15&query=boda`;
      },
      responseBody: 'json',
      outlayer: this.msnry,
      status: '.page-load-status',
      history: false,
    });

    this.proxyElem = document.createElement('div');

    this.infScroll.on('load', function(body) {
      const itemsHTML = body.results.map(self.getItemHTML).join('');
      self.proxyElem.innerHTML = itemsHTML;
      const items = self.proxyElem.querySelectorAll('.photo-item');
      imagesLoaded(items, function() {
        self.infScroll.appendItems(items);
        self.msnry.appended(items);
      });
    });

    this.infScroll.loadNextPage();
  }

  getItemHTML({ user, urls }) {
    return `<div class="photo-item">
      <img class="photo-item__image" src="${urls.regular}" alt="Photo by ${user.name}" />
      <p class="photo-item__caption">
        <a href="${user.links.html}?utm_source=infinite-scroll-demos&utm_medium=referral&utm_campaign=api-credit">${user.name}</a>
      </p>
    </div>`;
  }
}

export default MasonryPOC;
