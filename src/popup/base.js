export const elements = {
  searchSection: document.getElementsByClassName('section-search')[0],
  inputField: document.getElementById('section-search-input'),
  searchButton: document.getElementById('search-button'),
  filterButton: document.getElementById('filter-button'),
  spinnerPlaceholderGrid: document.getElementById('spinner-placeholder--grid'),
  spinnerPlaceholderPopup: document.getElementById('spinner-placeholder--popup'),
  spinnerPlaceholderBookmarks: document.getElementById('spinner-placeholder--bookmarks'),
  spinnerPlaceholderCollections: document.getElementById('spinner-placeholder--collections'),
  closeFiltersLink: document.getElementById('close-filters-link'),
  useCaseCheckboxesWrapper: document.getElementsByClassName('section-filter__usecase')[0],
  licenseCheckboxesWrapper: document.getElementsByClassName('section-filter__license')[0],
  sourceCheckboxesWrapper: document.getElementsByClassName('section-filter__source')[0],
  fileTypeCheckboxesWrapper: document.getElementsByClassName('section-filter__file-type')[0],
  imageTypeCheckboxesWrapper: document.getElementsByClassName('section-filter__image-type')[0],
  imageSizeCheckboxesWrapper: document.getElementsByClassName('section-filter__image-size')[0],
  aspectRatioCheckboxesWrapper: document.getElementsByClassName('section-filter__aspect-ratio')[0],
  clearFiltersButton: document.getElementById('clear-filters-button'),
  applyFiltersButton: document.getElementById('apply-filters-button'),
  // clearSearchButton: document.getElementsByClassName('clear-search-button'),
  loadMoreSearchButton: document.querySelector('.load-more-search-button'),
  loadMoreSearchButtonWrapper: document.querySelector('.load-more-search-button-wrapper'),
  loadMoreBookmarkButton: document.querySelector('.load-more-bookmark-button'),
  loadMoreBookmarkButtonkWrapper: document.querySelector('.load-more-bookmark-button-wrapper'),
  popup: document.getElementById('popup'),
  popupMain: document.querySelector('.popup__main'),
  downloadImageButton: document.getElementById('download-image'),
  downloadImageAttributionButton: document.getElementById('download-image-attribution'),
  popupCloseButton: document.querySelector('.popup__close-button'),
  gridPrimary: document.querySelector('.grid-primary'),
  gridBookmarks: document.querySelector('.grid-bookmarks'),
  filterSection: document.querySelector('.section-filter'),
  popupTabLinks: document.getElementsByClassName('popup__tab-links'),
  popupTabContent: document.getElementsByClassName('popup__tab-content'),
  facebookShareButton: document.querySelector('#facebook-share'),
  twitterShareButton: document.querySelector('#twitter-share'),
  pinterestShareButton: document.querySelector('#pinterest-share'),
  tumblrShareButton: document.querySelector('#tumblr-share'),
  navBookmarksButton: document.getElementById('nav-bookmarks-button'),
  navSourcesButton: document.getElementById('nav-sources-button'),
  navSettingsButton: document.getElementById('nav-settings-button'),
  navInvertColorsIcon: document.getElementById('nav-invert_colors-icon'),
  headerLogo: document.getElementById('header-logo'),
  primarySection: document.querySelector('.section-primary'),
  bookmarksSection: document.querySelector('.section-bookmarks'),
  bookmarksSectionHead: document.getElementsByClassName('section-bookmarks__head')[0],
  bookmarksSectionFooter: document.getElementsByClassName('section-bookmarks__footer')[0],
  bookmarksSectionContent: document.getElementsByClassName('section-content--bookmarks')[0],
  collectionsSection: document.querySelector('.section-collections'),
  collectionsSectionBody: document.querySelector('.section-collections--body'),
  editBookmarksLink: document.getElementById('edit-bookmarks'),
  buttonBackToTop: document.getElementsByClassName('button-backToTop')[0],
  exportBookmarksButton: document.getElementsByClassName('export-bookmarks-button')[0],
  selectCheckboxes: document.getElementsByClassName('select-checkbox'),
  selectAllBookmarksLink: document.getElementById('select-all-bookmarks'),
  closeEditViewLink: document.getElementById('close-edit-view'),
  modal: document.getElementsByClassName('modal')[0],
  modalClose: document.getElementsByClassName('modal-close')[0],
  modalCancel: document.getElementsByClassName('modal-button--cancel')[0],
  modalConfirm: document.getElementsByClassName('modal-button--confirm')[0],
  modalContent: document.getElementsByClassName('modal-text')[0],
  modalBody: document.getElementsByClassName('modal-content')[0],
};
export const attributionTabLink = elements.popupTabLinks[0];

export const constants = {
  bookmarkContainerSize: 30,
  bookmarkImageIdContainerSize: 80,
  extensionBookmarkLimit: 300,
};
