function setCookie(name, value, days) {
  let expires = '';
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = '; expires=' + date.toUTCString();
  }

  document.cookie = name + '=' + (value || '') + expires + '; path=/';
}

function getCookie(name) {
  const cookies = document.cookie.split(';');

  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i];

    while (cookie.charAt(0) === ' ') cookie = cookie.substring(1, cookie.length);
    if (cookie.indexOf(name + '=') === 0) return cookie.substring(name.length + 1, cookie.length);
  }
  return undefined;
}

function deleteCookie(name) {
  document.cookie = name + '=; Max-Age=-99999999;';
}

window.onload = function () {
  if (getCookie('cookie-dismiss')) return;

  document.body.innerHTML += '' +
    '<div class="cookie-container" id="cookie-container">' +
    '<div class="cookie-title">' +
    '<a>Information</a>' +
    '</div>' +
    '<div class="cookie-description">' +
    '<p>Unsere Website nutzt Cookies, um bestmögliche Funktionalität bieten zu können.</p>' +
    '</div>' +
    '<div class="cookie-button">' +
    '<a onclick="setCookie(\'cookie-dismiss\', \'true\', 7);document.getElementById(\'cookie-container\').remove();">Verstanden</a>' +
    '</div>' +
    '</div>';
};
