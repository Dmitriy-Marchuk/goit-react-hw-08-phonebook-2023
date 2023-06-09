"use strict";(self.webpackChunkgoit_react_hw_08_phonebook_2023=self.webpackChunkgoit_react_hw_08_phonebook_2023||[]).push([[266],{8266:function(n,e,t){t.r(e),t.d(e,{default:function(){return R}});var r,i,o,a,s,d,c,l,u,p,m,x,h=t(168),f=t(6444),b=f.ZP.div(r||(r=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 30px;\n  color: #010101;\n"]))),g=t(2791),j=t(9434),Z=function(n){return n.contacts.items},v=function(n){return n.contacts.isLoading},k=function(n){return n.contacts.error},w=t(3634),y=f.ZP.li(i||(i=(0,h.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n\n  div {\n    display: inherit;\n  }\n  p {\n    :first-child {\n      margin-right: 10px;\n    }\n  }\n"]))),P=f.ZP.button(o||(o=(0,h.Z)(["\n  margin-left: 20px;\n  padding: 5px 10px;\n  border: none;\n  border-radius: 8px;\n  font-size: 15px;\n  color: #fff;\n  background-color: #3182ce;\n  cursor: pointer;\n\n  :hover,\n  :focus {\n    background-color: #f6ad55;\n    transition: ease-in-out 250ms;\n  }\n"]))),C=t(184),_=function(n){var e=n.contact,t=e.name,r=e.number,i=(0,j.I0)();return(0,C.jsxs)(y,{children:[(0,C.jsxs)("div",{children:[(0,C.jsxs)("p",{children:[t,":"]}),(0,C.jsx)("p",{children:r})]}),(0,C.jsx)(P,{onClick:function(){return i((0,w.GK)(e.id))},children:"Delete contact"})]})},F=function(){var n=(0,j.v9)(Z),e=(0,j.v9)((function(n){return n.filter.filter})),t=n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())||n.number.includes(e.toLowerCase())}));return(0,C.jsx)("ul",{children:t.map((function(n){return(0,C.jsx)(_,{contact:n},n.id)}))})},N=t(4808),A=f.ZP.div(a||(a=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin: 25px 20px;\n"]))),L=f.ZP.input(s||(s=(0,h.Z)(["\n  width: 300px;\n  height: 100%;\n  padding: 5px;\n  margin-bottom: 10px;\n  margin-left: auto;\n  margin-right: auto;\n  border: 1px solid black;\n  border-radius: 8px;\n  :hover,\n  :focus {\n    border-color: #f6ad55;\n    outline: none;\n    transition: ease-in-out 250ms;\n  }\n"]))),z=f.ZP.label(d||(d=(0,h.Z)(["\n  margin-left: auto;\n  margin-right: auto;\n  font-weight: 500;\n"]))),q=f.ZP.h2(c||(c=(0,h.Z)(["\n  max-width: 385px;\n  margin-left: auto;\n  margin-right: auto;\n  border-bottom: 1px solid black;\n"]))),I=function(n){var e=n.title,t=(0,j.I0)();return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(q,{children:e}),(0,C.jsxs)(A,{children:[(0,C.jsx)(z,{htmlFor:"filter",children:"Find contacts by name"}),(0,C.jsx)(L,{id:"filter",type:"text",onChange:function(n){t((0,N.T)(n.target.value))}})]})]})},K=f.ZP.form(l||(l=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  border: 1px solid black;\n  border-radius: 15px;\n  padding: 30px 90px;\n  margin-bottom: 30px;\n  max-width: 385px;\n  margin-left: auto;\n  margin-right: auto;\n"]))),D=f.ZP.input(u||(u=(0,h.Z)(["\n  height: 100%;\n  padding: 5px 10px;\n  margin-bottom: 10px;\n  border: 1px solid black;\n  border-radius: 8px;\n\n  :hover,\n  :focus {\n    border-color: #f6ad55;\n    outline: none;\n    transition: ease-in-out 250ms;\n  }\n"]))),B=f.ZP.label(p||(p=(0,h.Z)(["\n  font-weight: 500;\n"]))),E=f.ZP.button(m||(m=(0,h.Z)(["\n  padding: 8px;\n  margin-top: 10px;\n  border: none;\n  border-radius: 8px;\n  color: #fff;\n  background-color: #3182ce;\n  cursor: pointer;\n  :hover,\n  :focus {\n    background-color: #f6ad55;\n    transition: ease-in-out 250ms;\n  }\n"]))),G=f.ZP.h2(x||(x=(0,h.Z)(["\n  max-width: 385px;\n  margin-left: auto;\n  margin-right: auto;\n"]))),J=function(n){var e=n.title,t=(0,j.I0)(),r=(0,j.v9)(Z);return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(G,{children:e}),(0,C.jsxs)(K,{onSubmit:function(n){var e=n.target,i=e.elements.name.value,o=e.elements.number.value,a={name:i,number:o};n.preventDefault(),t((0,w.uK)(a)),r&&(r.find((function(n){return n.name.toLowerCase()===i.toLowerCase()}))?alert(i+"is already in contact book!"):t((0,w.uK)(i,o))),e.reset()},children:[(0,C.jsx)(B,{htmlFor:"inputName",children:"Name"}),(0,C.jsx)(D,{name:"name",id:"inputName",type:"text",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,C.jsx)(B,{htmlFor:"inputNumber",children:"Number"}),(0,C.jsx)(D,{name:"number",id:"inputNumber",type:"tel",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,C.jsx)(E,{type:"submit",children:"Add contact"})]})]})},M=t(4270),R=function(){var n=(0,j.I0)(),e=(0,j.v9)(v),t=(0,j.v9)(k);return(0,g.useEffect)((function(){n((0,w.yF)())}),[n]),(0,C.jsx)(b,{children:(0,C.jsxs)("div",{children:[(0,C.jsx)(M.q,{children:(0,C.jsx)("title",{children:"Contacts"})}),(0,C.jsx)(J,{title:"Phonebook"}),(0,C.jsx)(I,{title:"Contact list"}),e&&!t&&(0,C.jsx)("b",{children:"Request in progress..."}),(0,C.jsx)(F,{})]})})}}}]);
//# sourceMappingURL=266.44fb9b13.chunk.js.map