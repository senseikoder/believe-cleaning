"use strict";

//Alpine JS and plugins import
import Alpine from "alpinejs"
import Iconify from '@iconify/iconify';

window.Alpine = Alpine

// Start Alpine JS
Alpine.start()

import { insertBgImages, insertOverlays, initModals } from "./libs/utils/utils";
import "./libs/components";


document.addEventListener('astro:page-load', () => {
  // console.log('👍🏻');
  //Switch backgrounds
  insertBgImages()
  insertOverlays()
  initModals()
});

