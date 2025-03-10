import{a as n,i as h,S as _}from"./assets/vendor-CkcXhjHS.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();n.defaults.baseURL="https://pixabay.com/api/";function b(t){return n.get("",{params:{key:"49255995-7f6d469d944259310339ef533",q:t,image_type:"photo",per_page:200,orientation:"horizontal",safesearch:!0}})}const w=t=>{t.preventDefault();const o=new FormData(t.target).get("input"),r=document.querySelector(".loader");r.style.display="block",b(o).then(e=>{const s=document.querySelector(".js-gallery"),a=e.data.hits;a.length===0&&L();const c=a.map(({webformatURL:u,largeImageURL:p,tags:g,likes:f,views:m,comments:d,downloads:y})=>`<li class='gallery__item'>
              <div class='gallery__container '>
                <a href='${p}'>
                  <div class='image-wrapper'>
                    <span class='loader'></span>
                    <img
                      class='gallery__image'
                      src='${u}'
                      alt='${g}'
                    />
                  </div>
                </a>

                <ul class='gallery_user-stats'>
                  <li class='gallery__user-stats-item'>
                    <p class='gallery__user-stats-text'>
                      Likes:<span>${f}</span>
                    </p>
                  </li>
                  <li class='gallery__user-stats-item'>
                    <p class='gallery__user-stats-text'>
                      Views:<span>${m}</span>
                    </p>
                  </li>
                  <li class='gallery__user-stats-item'>
                    <p class='gallery__user-stats-text'>
                      Comments:<span>${d}</span>
                    </p>
                  </li>
                  <li class='gallery__user-stats-item'>
                    <p class='gallery__user-stats-text'>
                      Downloads:<span>${y}</span>
                    </p>
                  </li>
                </ul>
              </div>
            </li>`).join("");s.innerHTML=c,i()}).catch(e=>{r.style.display="none",console.error("Error fetching data:",e)}).finally(()=>{r.style.display="none"}),t.target.reset(),i()};function L(){h.show({title:"Sorry,",titleSize:"21",message:"there are no images matching your search query. Please try again!",position:"topRight",iconUrl:"https://www.svgrepo.com/show/340010/cloud-data-ops.svg",iconColor:"#ffffff",messageSize:"21",messageColor:"black"})}function i(){new _(".gallery__container a").refresh()}const x=document.querySelector(".search__form");x.addEventListener("submit",w);
//# sourceMappingURL=index.js.map
