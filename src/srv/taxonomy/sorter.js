!function(){"use strict";!function e(){if("loading"===document.readyState)return document.addEventListener("DOMContentLoaded",e);jQuery("#col-right ol").nestedSortable({items:"li",handle:"label",tabSize:32,protectRoot:0===document.querySelectorAll("[data-webcomic-terms-hierarchical]").length,toleranceElement:"> label",start:function(e,t){t.placeholder.height(t.helper.outerHeight())},stop:function(){for(var e=document.querySelectorAll("ol li"),t=0;t<e.length;t++){var r=e[t].parentNode.parentNode.id;e[t].querySelector('[name^="webcomic_term_order"]')&&(e[t].querySelector('[name^="webcomic_term_order"]').value=t+1,e[t].querySelector('[name^="webcomic_term_parent"]').value=Number(r.substr(5)))}}})}()}();
