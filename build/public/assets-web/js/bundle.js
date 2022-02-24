(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var swiper1 = new Swiper('.business-swiper', {
  slidesPerView: 5,
  spaceBetween: 20,
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev'
  }
});
var swiper2 = new Swiper('.cases-swiper', {
  slidesPerView: 2,
  spaceBetween: 20,
  navigation: {
    nextEl: '.cases-button-next',
    prevEl: '.cases-button-prev'
  }
});
var swiper3 = new Swiper('.team-swiper', {
  slidesPerView: 4,
  spaceBetween: 20,
  navigation: {
    nextEl: '.team-button-next',
    prevEl: '.team-button-prev'
  }
});

},{}]},{},[1])

//# sourceMappingURL=bundle.js.map
