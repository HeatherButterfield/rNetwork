var jqry = document.createElement('script');
jqry.src = "https://code.jquery.com/jquery-3.3.1.min.js";
document.getElementsByTagName('head')[0].appendChild(jqry);

function printEnglish() {
  let toBeTranslatedArray = [];
  document.querySelectorAll('[data-translate="true"]').forEach((item, i) => {
    toBeTranslatedArray.push(item.textContent);
  });
  console.log(JSON.stringify(toBeTranslatedArray));
}

function getTranslations(target) {
  let toBeTranslated = '';
  document.querySelectorAll('[data-translate="true"]').forEach((item, i) => {
    toBeTranslated += item.textContent + '~';
  });

  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://google-translate1.p.rapidapi.com/language/translate/v2",
    "method": "POST",
    "headers": {
      "x-rapidapi-host": "google-translate1.p.rapidapi.com",
  		"x-rapidapi-key": "97a621d563msh086acdf5f8c2825p130acbjsn9b527c1f9c37",
  		"content-type": "application/x-www-form-urlencoded"
    },
    "data": {
      "source": "en",
      "q": toBeTranslated,
      "target": target
    },
  }

  $.ajax(settings).done(function (response) {
    let translatedTextString = response.data.translations[0].translatedText;
    let translatedTextArray = translatedTextString.split(' ~ ');
    console.log(JSON.stringify(translatedTextArray));
  });
}




printEnglish();
getTranslations('zh');
getTranslations('hi');
getTranslations('ko');
getTranslations('es');
getTranslations('fr');
getTranslations('de');
getTranslations('sv');
getTranslations('pt');


let toBeTranslated = [];
document.querySelectorAll('[data-translate="true"]').forEach((item, i) => {
  toBeTranslated.push(item.textContent);
});
console.log(JSON.stringify(toBeTranslated));

function split(text) {
  let textArray = text.split('+');
  console.log(JSON.stringify(textArray));
}
