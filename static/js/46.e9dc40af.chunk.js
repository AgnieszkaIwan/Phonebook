"use strict";(self.webpackChunkgoit_react_hw_07_phonebook=self.webpackChunkgoit_react_hw_07_phonebook||[]).push([[46],{9449:function(t,e,n){n.r(e),n.d(e,{default:function(){return g}});var r=n(2791),a=n(9434),c=n(1538),o=n(5861),s=n(9439),u=n(7757),i=n.n(u),l=n(5984),d=n(4221),f=(n(1138),"ContactForm_container__qpJ1N"),h="ContactForm_input__Bl93P",p="ContactForm_button__eSwX9",m=n(1694),x=n.n(m),v=n(184),C=function(){var t=(0,r.useState)(""),e=(0,s.Z)(t,2),n=e[0],u=e[1],m=(0,r.useState)(""),C=(0,s.Z)(m,2),b=C[0],_=C[1],j=(0,a.v9)((function(t){return t.contacts.contacts})),w=(0,a.I0)(),g=function(){var t=(0,o.Z)(i().mark((function t(e){var r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.preventDefault(),!k(n)){t.next=4;break}return d.fn.error("Contact already exists!","Error"),t.abrupt("return");case 4:return r={id:(0,l.x0)(),name:n,number:b},t.prev=5,t.next=8,w((0,c.addContact)(r));case 8:u(""),_(""),t.next=14;break;case 12:t.prev=12,t.t0=t.catch(5);case 14:case"end":return t.stop()}}),t,null,[[5,12]])})));return function(e){return t.apply(this,arguments)}}(),k=function(t){return j.some((function(e){return e.name.toLowerCase()===t.toLowerCase()}))};return(0,v.jsxs)("form",{className:f,onSubmit:g,children:[(0,v.jsx)("input",{className:x()(h),type:"text",name:"name",pattern:"^[A-Za-z.'\\- ]+$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:n,onChange:function(t){return u(t.target.value)}}),(0,v.jsx)("input",{className:x()(h),type:"tel",name:"number",pattern:"^\\+?\\d{1,4}?\\s?\\(?\\d{1,4}?\\)?\\s?\\d{1,4}\\s?\\d{1,4}\\s?\\d{1,9}$",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:b,onChange:function(t){return _(t.target.value)}}),(0,v.jsx)("button",{className:x()(p),type:"submit",children:"Add Contact"})]})},b="ContactList_deleteButton__3hT3n",_=function(t){var e=t.contacts,n=(0,a.I0)(),r=function(){var t=(0,o.Z)(i().mark((function t(e){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,n((0,c.deleteContact)(e));case 3:t.next=7;break;case 5:t.prev=5,t.t0=t.catch(0);case 7:case"end":return t.stop()}}),t,null,[[0,5]])})));return function(e){return t.apply(this,arguments)}}();return(0,v.jsx)("ul",{children:e.map((function(t){return(0,v.jsxs)("li",{children:[(0,v.jsxs)("span",{children:[t.name," "]}),(0,v.jsx)("span",{children:t.number}),(0,v.jsx)("button",{className:b,onClick:function(){return r(t.id)},children:"Delete"})]},t.id)}))})},j=function(){var t=(0,a.v9)((function(t){return t.contacts.filter})),e=(0,a.I0)();return(0,v.jsxs)("div",{children:[(0,v.jsx)("label",{htmlFor:"filter",children:"Filter contacts by name:"}),(0,v.jsx)("input",{type:"text",id:"filter",name:"filter",value:t,onChange:function(t){e((0,c.setFilter)(t.target.value))},placeholder:"Enter name"})]})},w=n(4270);function g(){var t=(0,a.v9)((function(t){return t.contacts.contacts})),e=(0,a.v9)((function(t){return t.contacts.filter})),n=(0,a.I0)();(0,r.useEffect)((function(){n((0,c.fetchContacts)())}),[n]);var o=t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}));return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(w.q,{children:(0,v.jsx)("title",{children:"Phonebook"})}),(0,v.jsx)(C,{addContact:function(t){n((0,c.addContact)(t))}}),(0,v.jsx)("h2",{children:"Contacts"}),(0,v.jsx)(j,{filter:e,onFilterChange:function(t){n((0,c.setFilter)(t.target.value))}}),(0,v.jsx)(_,{contacts:o,deleteContact:function(t){n((0,c.deleteContact)(t))}})]})}}}]);
//# sourceMappingURL=46.e9dc40af.chunk.js.map