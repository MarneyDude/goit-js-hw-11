import{a as c,i as _,S as l}from"./assets/vendor-CkcXhjHS.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();c.defaults.baseURL="https://pixabay.com/api/";function b(t){return c.get("",{params:{key:"49255995-7f6d469d944259310339ef533",q:t,image_type:"photo",per_page:200,orientation:"horizontal",safesearch:!0}})}const L=t=>{t.preventDefault();const o=new FormData(t.target).get("input"),r=document.querySelector(".loader");r.classList.remove("loader-hidden"),b(o).then(e=>{const s=document.querySelector(".js-gallery"),a=e.data.hits;a.length===0&&v();const u=a.map(({webformatURL:d,largeImageURL:p,tags:m,likes:g,views:f,comments:y,downloads:h})=>`<li class='gallery__item'>
              <div class='gallery__container '>
                <a href='${p}'>
                 
                    <span class=' loader-position loader '></span>
                    <img
                      class='gallery__image'
                      src='${d}'
                      alt='${m}'
                      onload="this.previousElementSibling.style.visibility = 'hidden';" 
                      onerror="this.previousElementSibling.visibility = 'hidden';" 
                    />
                 
                </a>

                <ul class='gallery_user-stats'>
                  <li class='gallery__user-stats-item'>
                    <p class='gallery__user-stats-text'>
                      Likes:<span>${g}</span>
                    </p>
                  </li>
                  <li class='gallery__user-stats-item'>
                    <p class='gallery__user-stats-text'>
                      Views:<span>${f}</span>
                    </p>
                  </li>
                  <li class='gallery__user-stats-item'>
                    <p class='gallery__user-stats-text'>
                      Comments:<span>${y}</span>
                    </p>
                  </li>
                  <li class='gallery__user-stats-item'>
                    <p class='gallery__user-stats-text'>
                      Downloads:<span>${h}</span>
                    </p>
                  </li>
                </ul>
              </div>
            </li>`).join("");s.innerHTML=u,n()}).catch(e=>{r.classList.remove("loader-hidden"),console.error("Error fetching data:",e)}).finally(()=>{r.classList.add("loader-hidden")}),t.target.reset(),n()};function v(){_.show({title:"Sorry,",titleSize:"21",message:"there are no images matching your search query. Please try again!",position:"topRight",iconUrl:"https://www.svgrepo.com/show/340010/cloud-data-ops.svg",iconColor:"#ffffff",messageSize:"21",messageColor:"black"})}function n(){const t=new l(".gallery__container a");l.defaults={},t.refresh()}const S=document.querySelector(".form");S.addEventListener("submit",L);
//# sourceMappingURL=index.js.map
