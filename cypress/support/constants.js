// cypress/support/constants.js
//home page
export const mainPage = 'https://www.boozt.com/dk/da';
export const buttonCookies = '#onetrust-accept-btn-handler';
export const title = 'Boozt.com | Nye styles hver dag - shop nu';
export const headerElementSelector = '.page-header__container';
export const headerCategoriesDK = ['Kvinder','Mænd','Børn','Sport','Beauty','Home','Jul'];
export const giftCardLinkButton = 'div.react-footer-block__desktop a[href*="/dk/da/gavekort"]';


export const chooseLanguageButton = '[aria-label="Choose your language"]';
export const chooseYourLanguageText = 'span[title*="Choose your language"]';
export const englishLanguageButton = 'a[id="dk-6"]';

//right side header
export const mainHeader = '.page-header__container';
export const globalSearchButton = '.global-search-container button';
export const accountButton = '[aria-label="Konto"]'; // "Konto" for the account button
export const clubButton = '[aria-label="Club"]'; // "Club" button
export const favoritesButton = '[aria-label="Favoritter"]'; // "Favoritter" for the favorites button
export const cartButton = '[aria-label="GÅ TIL INDKØBSKURV"]'; // Cart button

export const accountButtonEN = '[aria-label="Account"]'; // "Club" button
export const favoritesButtonEN = '[aria-label="Favorites"]'; // "Favoritter" for the favorites button
export const cartButtonEN = '[aria-label="GO TO CART"]'; // Cart button

// Login page
export const loginPage = "https://www.boozt.com/dk/da/login";
export const createAccountButton = 'a[href*="customer/create"]';

//create account page
export const createAccountPage = "https://www.boozt.com/dk/da/customer/create";

export const createAccountHeaderTitle = 'h1:contains("Opret konto")';

export const firstNameInput =   'input[data-property="billingFirstname"]';
export const lastNameInput =   'input[data-property="billingLastname"]';

export const emailInput ='input[data-property="username"]';
export const firstPasswordInput =   'input[data-property="plainPassword"]';;
export const confirmedPasswordInput =   'input[data-property="plainPasswordRepeat"]';
export const submitAccountButton =  'button:contains("Opret konto")';

export const profileLinkButton= 'a[href*="customer/profile"]';
export const confirmationEmailButton = 'button:contains("Få bekræftelses-email")';

// search panel

export const searchInput = 'input[placeholder="Søg efter produkter eller mærker"]';
export const productsListSelector = 'div.global-search-product-card';

// gift card page

export const firstGiftCardImageSelector = 'img.cms-image-block__image:eq(0)';
export const firstGiftCardImageSrc = 'https://resources.booztcdn.com/109304-1729763095-w42GiftcardDTArightda.jpg';

export const secondGiftCardImageSelector = 'img.cms-image-block__image:eq(1)';
export const secondGiftCardImageSrc = 'https://resources.booztcdn.com/109268-1729763077-w42GiftcardDTAleftda.jpg';

export const booztGiftCardLink = 'a[href*="gogift.com/boozt-dk"]';
export const emailButton= 'div.delivery-buttons span:contains("E-mail")';

export const optionList = ''
