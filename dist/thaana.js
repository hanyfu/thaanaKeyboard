!function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:a})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={phonetic:{33:"!",34:'"',35:"#",36:"$",37:"%",38:"&",39:"'",40:")",41:"(",42:"*",43:"+",44:"،",45:"-",46:".",47:"/",58:":",59:"؛",60:">",61:"=",62:"<",63:"؟",64:"@",65:"ާ",66:"ޞ",67:"ޝ",68:"ޑ",69:"ޭ",70:"ﷲ",71:"ޣ",72:"ޙ",73:"ީ",74:"ޛ",75:"ޚ",76:"ޅ",77:"ޟ",78:"ޏ",79:"ޯ",80:"÷",81:"ޤ",82:"ޜ",83:"ށ",84:"ޓ",85:"ޫ",86:"ޥ",87:"ޢ",88:"ޘ",89:"ޠ",90:"ޡ",91:"]",92:"\\",93:"[",94:"^",95:"_",96:"`",97:"ަ",98:"ބ",99:"ޗ",100:"ދ",101:"ެ",102:"ފ",103:"ގ",104:"ހ",105:"ި",106:"ޖ",107:"ކ",108:"ލ",109:"މ",110:"ނ",111:"ޮ",112:"ޕ",113:"ް",114:"ރ",115:"ސ",116:"ތ",117:"ު",118:"ވ",119:"އ",120:"×",121:"ޔ",122:"ޒ",123:"}",124:"|",125:"{",126:"~"},typewriter:{33:"!",34:"؛",35:"#",36:"$",37:"%",38:"&",39:"ﷲ",40:")",41:"(",42:"*",43:"+",44:"ށ",45:"-",46:"ޓ",47:"ޯ",58:"ޡ",59:"ފ",60:"\\",61:"=",62:"ޞ",63:"؟",64:"@",65:"<",66:"ޟ",67:"ޏ",68:".",69:"“",70:"،",71:'"',72:"ޥ",73:"ޣ",74:"ޢ",75:"ޘ",76:"ޚ",77:"ޝ",78:"ޛ",79:"ޠ",80:"ޙ",81:"×",82:"/",83:">",84:":",85:"ޜ",86:"ޗ",87:"’",88:"ޕ",89:"ޤ",90:"ޖ",91:"ލ",92:"]",93:"[",94:"^",95:"_",96:"`",97:"ި",98:"ޅ",99:"ސ",100:"ް",101:"ާ",102:"ަ",103:"ެ",104:"ވ",105:"މ",106:"އ",107:"ނ",108:"ކ",109:"ބ",110:"ދ",111:"ތ",112:"ހ",113:"ޫ",114:"ީ",115:"ު",116:"ޭ",117:"ރ",118:"ޔ",119:"ޮ",120:"ޑ",121:"ގ",122:"ޒ",123:"÷",124:"}",125:"{",126:"~"}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),s=n(0),o=(a=s)&&a.__esModule?a:{default:a};var i={keyboard:"phonetic"},l=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.keymap=o.default,this.settings=t?Object.assign(i,t):i,this.handleKey=this.handleKey.bind(this)}return r(e,[{key:"setHandler",value:function(e){e.oninput=this.handleKey}},{key:"handleLegacyFields",value:function(e){var t,n=null,a=null;if((t=e.target).value.length>0&&(n=t.value.substr(t.selectionStart-1,t.selectionStart)),n&&null!==n&&" "!==n&&this.keymap[this.settings.keyboard][n.charCodeAt(0)]){var r=t.selectionStart;a=this.keymap[this.settings.keyboard][n.charCodeAt(0)],t.value=t.value.substr(0,t.selectionStart-1)+a+t.value.substr(t.selectionStart),t.selectionStart=r,t.selectionEnd=r}}},{key:"handleContentEditable",value:function(e){var t,n,a;if(window.getSelection){if((t=window.getSelection()).getRangeAt&&t.rangeCount){(n=t.getRangeAt(0)).deleteContents();var r=null,s=null;if(null!==n.startContainer.nodeValue&&(r=n.startContainer.nodeValue.substr(n.startOffset-1,n.startOffset)),r&&" "!==e.data&&" "!==r){var o=n.cloneRange();this.keymap[this.settings.keyboard][r.charCodeAt(0)]?(s=this.keymap[this.settings.keyboard][r.charCodeAt(0)],o.setStart(n.startContainer,n.startOffset-1)):o.setStart(n.startContainer,n.startOffset),o.setEnd(n.startContainer,n.startOffset),o.deleteContents()}else e.data&&" "!==e.data&&" "!==r||(s=" ");s?(a=document.createTextNode(s),n.insertNode(a),n.setStart(a,a.length),n.setEnd(a,a.length)):(n.setStart(n.startContainer,n.startOffset),n.setEnd(n.startContainer,n.startOffset)),t.removeAllRanges(),t.addRange(n)}}else document.selection&&document.selection.createRange&&(n=document.selection.createRange()).pasteHTML(text)}},{key:"handleKey",value:function(e){"TEXTAREA"===e.target.tagName||"INPUT"===e.target.tagName?this.handleLegacyFields(e):this.handleContentEditable(e)}},{key:"bindToClass",value:function(e){var t=document.getElementsByClassName(e);if(t.length){var n=!0,a=!1,r=void 0;try{for(var s,o=t[Symbol.iterator]();!(n=(s=o.next()).done);n=!0){var i=s.value;this.setHandler(i)}}catch(e){a=!0,r=e}finally{try{!n&&o.return&&o.return()}finally{if(a)throw r}}}}}]),e}();t.default=l,window.onload=function(){(new l).bindToClass("thaana")}}]);