(this.webpackJsonppasswallet=this.webpackJsonppasswallet||[]).push([[0],{117:function(e,a,t){},124:function(e,a){},151:function(e,a,t){"use strict";t.r(a);var s=t(3),n=t.n(s),c=t(38),r=t.n(c),o=(t(117),t(10)),i=(t(118),t(119),t(21)),l=t(160),d=t(157),j=t(82),u=t(27),b=t(25),m=t(8),p=t(9),h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=Object(s.useState)(e),t=Object(o.a)(a,2),n=t[0],c=t[1],r=function(a){return c(a||e)},i=function(e){var a=e.target;return c(Object(p.a)(Object(p.a)({},n),{},Object(m.a)({},a.name,a.value)))};return[n,i,r]},O=t.p+"static/media/lock.21afe2d1.png",x=t(158),f=t(165),g=t(159),v=t(156),y=t(50),w=t(88),N=t(31),C=t(110),P="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSYUVWXYZ0123456789!#$%&()*+,-./:;<=>?@[]_{}",S=function(){for(var e="",a=0;a<12;a++)e+=P[Math.round(Math.random()*(P.length-1-0)+0)];return e},k=t(63),_=t(2),I=function(){var e=Object(s.useState)({gPass:""}),a=Object(o.a)(e,2),t=a[0].gPass,n=a[1];return Object(_.jsx)(j.a,{sm:{span:4,offset:1},children:Object(_.jsxs)(f.a.Group,{className:"d-flex",children:[Object(_.jsx)(C.a,{type:"text",placeholder:"************",className:"me-2","aria-label":"passGenerate",size:"sm",name:"gPass",value:t,style:{width:"66%"},disabled:!0}),Object(_.jsxs)(v.a,{variant:"outline-success",size:"sm",onClick:function(){return n({gPass:S()})},children:["Generate ",Object(_.jsx)(k.b,{style:{marginTop:"-1px"}})]})]})})},L=function(e){var a=e.props,t=a.signIn,s=a.createAccount,n=a.validated,c=a.input,r=a.setInput,o=a.alert,i=a.wait,l=c.email,u=c.pass;return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(d.a,{className:"justify-content-md-center contenLogo",children:Object(_.jsxs)(j.a,{lg:"1",children:[Object(_.jsx)(x.a,{className:"logoIni",src:O,rounded:!0}),Object(_.jsx)("span",{className:"position-absolute top-0 start-50 translate-middle-x title",children:"Password Wallet"})]})}),Object(_.jsxs)(f.a,{noValidate:!0,validated:n,className:"g-3 FormCreate animate__animated animate__fadeIn",onSubmit:t,children:[Object(_.jsxs)(f.a.Group,{as:d.a,className:"mb-3",controlId:"formHorizontalEmail",children:[Object(_.jsx)(f.a.Label,{column:!0,sm:2,children:"Email"}),Object(_.jsxs)(j.a,{sm:10,children:[Object(_.jsx)(f.a.Control,{size:"sm",type:"email",placeholder:"Email",name:"email",value:l,onChange:function(e){r(e)},required:!0}),Object(_.jsx)(f.a.Control.Feedback,{children:"Looks good!"}),Object(_.jsx)(f.a.Control.Feedback,{type:"invalid",children:"Please choose a email."})]})]}),Object(_.jsxs)(f.a.Group,{as:d.a,className:"mb-3",controlId:"formHorizontalPassword",children:[Object(_.jsx)(f.a.Label,{column:!0,sm:2,children:"Password"}),Object(_.jsxs)(j.a,{sm:10,children:[Object(_.jsx)(f.a.Control,{size:"sm",type:"password",placeholder:"Password",name:"pass",value:u,onChange:function(e){r(e)},required:!0}),Object(_.jsx)(f.a.Control.Feedback,{children:"Looks good!"}),Object(_.jsx)(f.a.Control.Feedback,{type:"invalid",children:"Please choose a password."})]})]}),""!==o&&Object(_.jsx)(f.a.Group,{as:d.a,className:"mb-3",controlId:"RePassword",children:Object(_.jsx)(j.a,{sm:{span:10,offset:2},children:Object(_.jsxs)(g.a,{variant:"danger",children:[" ",o," "]})})}),Object(_.jsxs)(f.a.Group,{as:d.a,className:"mb-3",children:[Object(_.jsx)(j.a,{sm:{span:2,offset:2},children:Object(_.jsxs)(v.a,{size:"sm",type:"submit",children:[Object(_.jsx)(N.g,{style:{marginTop:"-5px"}})," Sign in ",i&&Object(_.jsx)(y.b,{className:"spinner"})," "]})}),Object(_.jsx)(j.a,{sm:{span:3},children:Object(_.jsxs)(v.a,{size:"sm",variant:"link",onClick:function(){s()},children:["Create an Account ",Object(_.jsx)(w.a,{})]})}),Object(_.jsx)(I,{})]})]})]})},T=function(e){var a=e.setstate;localStorage.removeItem("temp");var t=Object(s.useState)(!1),n=Object(o.a)(t,2),c=n[0],r=n[1],i=h({email:"",pass:""}),l=Object(o.a)(i,2),d=l[0],j=l[1],u=d.email,m=d.pass,p=Object(s.useState)(""),O=Object(o.a)(p,2),x=O[0],f=O[1],g=Object(s.useState)(!1),v=Object(o.a)(g,2),y=v[0],w=v[1],N={signIn:function(e){e.preventDefault(),r(!0),w(!0),f(""),!1!==e.currentTarget.checkValidity()?Object(b.g)(Object(b.c)(),b.a).then((function(){Object(b.h)(Object(b.c)(),u,m).then((function(){localStorage.setItem("temp",m),w(!1)})).catch((function(e){switch(e.code){case"auth/wrong-password":f("Wrong password");break;case"auth/user-not-found":f("User not found")}w(!1)}))})).catch((function(){return f("Login configuration error")})):w(!1)},createAccount:function(){return a(!1)},validated:c,input:d,setInput:j,alert:x,wait:y};return Object(_.jsx)(L,{props:N})},A=function(e){var a=e.props,t=a.validated,s=a.create,n=a.signIn,c=a.input,r=a.setInput,o=a.alert,i=a.wait,l=c.email,u=c.pass,b=c.rePass;return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(d.a,{className:"justify-content-md-center contenLogo",children:Object(_.jsxs)(j.a,{lg:"1",children:[Object(_.jsx)(x.a,{className:"logoIni",src:O,rounded:!0}),Object(_.jsx)("span",{className:"position-absolute top-0 start-50 translate-middle-x title",children:"Password Wallet"})]})}),Object(_.jsxs)(f.a,{noValidate:!0,validated:t,className:"g-3 FormCreate animate__animated animate__fadeIn",onSubmit:s,children:[Object(_.jsxs)(f.a.Group,{as:d.a,className:"mb-3",controlId:"Email",children:[Object(_.jsx)(f.a.Label,{column:!0,sm:2,children:"Email"}),Object(_.jsxs)(j.a,{sm:10,children:[Object(_.jsx)(f.a.Control,{size:"sm",type:"email",placeholder:"Email",name:"email",value:l,onChange:function(e){r(e)},required:!0}),Object(_.jsx)(f.a.Control.Feedback,{children:"Looks good!"}),Object(_.jsx)(f.a.Control.Feedback,{type:"invalid",children:"Please choose a email."})]})]}),Object(_.jsxs)(f.a.Group,{as:d.a,className:"mb-3",controlId:"Password",children:[Object(_.jsx)(f.a.Label,{column:!0,sm:2,children:"Password"}),Object(_.jsxs)(j.a,{sm:10,children:[Object(_.jsx)(f.a.Control,{size:"sm",type:"password",placeholder:"Password",name:"pass",value:u,onChange:function(e){r(e)},required:!0}),Object(_.jsx)(f.a.Control.Feedback,{children:"Looks good!"}),Object(_.jsx)(f.a.Control.Feedback,{type:"invalid",children:"Please choose a password."})]})]}),Object(_.jsxs)(f.a.Group,{as:d.a,className:"mb-3",controlId:"RePassword",children:[Object(_.jsx)(f.a.Label,{column:!0,sm:2,children:"Repeat Password"}),Object(_.jsxs)(j.a,{sm:10,children:[Object(_.jsx)(f.a.Control,{size:"sm",type:"password",placeholder:"Password",name:"rePass",value:b,onChange:function(e){r(e)},required:!0}),Object(_.jsx)(f.a.Control.Feedback,{children:"Looks good!"}),Object(_.jsx)(f.a.Control.Feedback,{type:"invalid",children:"Please choose a password."})]})]}),t&&(u!==b||""!==o)&&Object(_.jsx)(f.a.Group,{as:d.a,className:"mb-3",controlId:"RePassword",children:Object(_.jsx)(j.a,{sm:{span:10,offset:2},children:Object(_.jsxs)(g.a,{variant:"danger",children:[" ",o," "]})})}),Object(_.jsxs)(f.a.Group,{as:d.a,className:"mb-3",children:[Object(_.jsx)(j.a,{sm:{span:2,offset:2},children:Object(_.jsxs)(v.a,{size:"sm",type:"submit",children:[Object(_.jsx)(N.a,{style:{marginTop:"-3px"}})," Sign Up ",i&&Object(_.jsx)(y.b,{className:"spinner"})," "]})}),Object(_.jsx)(j.a,{sm:{span:3},children:Object(_.jsxs)(v.a,{size:"sm",variant:"link",onClick:function(){n()},children:["Sign In ",Object(_.jsx)(w.a,{})]})}),Object(_.jsx)(I,{})]})]})]})},z=function(e){var a=e.setstate;localStorage.removeItem("temp");var t=Object(s.useState)(!1),n=Object(o.a)(t,2),c=n[0],r=n[1],i=h({email:"",pass:"",rePass:""}),l=Object(o.a)(i,2),d=l[0],j=l[1],u=d.email,m=d.pass,p=d.rePass,O=Object(s.useState)(""),x=Object(o.a)(O,2),f=x[0],g=x[1],v=Object(s.useState)(!1),y=Object(o.a)(v,2),w=y[0],N=y[1],C={validated:c,create:function(e){if(e.preventDefault(),N(!0),g(""),r(!0),!0===e.currentTarget.checkValidity()&&m===p){var t=Object(b.c)();Object(b.b)(t,u,m).then((function(e){return a(!0)})).catch((function(e){switch(e.code){case"auth/email-already-in-use":g("Email is already in use.");break;case"auth/invalid-email":g("Invalid e-mail.");break;case"auth/weak-password":g("Weak password.")}N(!1)}))}else g("Password does not match."),N(!1)},signIn:function(){return a(!0)},input:d,setInput:j,alert:f,wait:w};return Object(_.jsx)(A,{props:C})},F=t(98),E=t.n(F),G=function(e){return E.a.AES.encrypt(JSON.stringify(e.data),localStorage.getItem("temp"))},D=function(e,a,t,s){e({msg:a,type:t,ani:"animate__animated animate__bounceIn"}),setTimeout((function(){return e((function(e){return Object(p.a)(Object(p.a)({},e),{},{ani:"animate__animated animate__bounceOut"})}))}),2e3),setTimeout((function(){return e({msg:"",type:""})}),3e3),void 0!==s&&s()},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,a=arguments.length>1?arguments[1]:void 0,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,s=arguments.length>3?arguments[3]:void 0,n=arguments.length>4?arguments[4]:void 0,c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:void 0,r=arguments.length>6&&void 0!==arguments[6]?arguments[6]:void 0,o=Object(u.a)(s,n.uid,"data");Object(u.f)(o,{data:a.toString()}).then((function(){void 0!==t&&t(Object(p.a)(Object(p.a)({},e),{},{data:e.data})),void 0!==c&&D(c,"Aggregate Data.","success",r)})).catch((function(){return void 0!==c&&D(c,"An error occurred while adding data.","danger")}))},W=function(){return Object(_.jsxs)("div",{className:"animate__animated animate__fadeInLeft",style:{width:"50%",marginTop:"2rem"},children:[Object(_.jsx)("p",{className:"title_about",children:"PassWallet"}),Object(_.jsx)("p",{className:"p_about",children:"PassWallet is an application created with the purpose of storing in a secure and centralized way the passwords of the online accounts that you can have in different websites and more."}),Object(_.jsx)("p",{className:"p_about",children:"The passwords are stored in Firebase with AES encryption from the client so it cannot be seen by any other user."}),Object(_.jsx)("p",{className:"p_about",children:"The account cannot be recovered and the information cannot be decrypted without the login password."}),Object(_.jsx)("p",{className:"p_about",children:"The password can be changed as long as you have the login password."}),Object(_.jsx)("p",{className:"p_about",children:"All information can be deleted with the login password."}),Object(_.jsx)("p",{className:"p_about",children:"The application includes a 12-digit random password generator that includes both lowercase and uppercase alphanumeric characters, numbers and symbols."}),Object(_.jsx)("p",{className:"p_about",children:"The stored information can be modified and not all fields are mandatory."}),Object(_.jsx)("p",{className:"p_about",children:"Author: Marco Velasquez Figarella"}),Object(_.jsx)("p",{className:"p_about",children:"Github: https://github.com/Marco90v"}),Object(_.jsx)("hr",{}),Object(_.jsx)("p",{className:"title_about",children:"PassWallet"}),Object(_.jsx)("p",{className:"p_about",children:"PassWallet es una aplicaci\xf3n crea con la finalidad de almacenar de manera segura y centralizada las contrase\xf1as de las cuentas online que se pueden tener en diferentes sitios webs y m\xe1s."}),Object(_.jsx)("p",{className:"p_about",children:"Las contrase\xf1as son almacenadas en Firebase con el cifrado AES desde el cliente por lo que no podr\xe1 ser visto por ning\xfan otro usuario."}),Object(_.jsx)("p",{className:"p_about",children:"La cuenta no puede ser recuperada y la informaci\xf3n no puede ser descifrada sin la contrase\xf1a de inicio de sesi\xf3n."}),Object(_.jsx)("p",{className:"p_about",children:"La contrase\xf1a puede ser modificada siempre que se tenga la contrase\xf1a de inicio de sesi\xf3n."}),Object(_.jsx)("p",{className:"p_about",children:"Se puede eliminar toda la informaci\xf3n con la contrase\xf1a de inicio de sesi\xf3n."}),Object(_.jsx)("p",{className:"p_about",children:"La aplicaci\xf3n incluye un generador de contrase\xf1as aleatorias de 12 cifras que incluyen caracteres alfan\xfameros tanto min\xfasculas como may\xfasculas, n\xfameros y s\xedmbolos."}),Object(_.jsx)("p",{className:"p_about",children:"La informaci\xf3n almacenada puede ser modificada y no todos los campos son obligatorios."}),Object(_.jsx)("p",{className:"p_about",children:"Autor: Marco Velasquez Figarella"}),Object(_.jsx)("p",{className:"p_about",children:"Github: https://github.com/Marco90v"})]})},V=t(164),R=t(166),q=function(e){var a=e.changeAction,t=e.generatePass,s=e.gPass,n=e.close;return Object(_.jsx)(V.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",className:"animate__animated animate__fadeInDown",children:Object(_.jsxs)(l.a,{children:[Object(_.jsx)(V.a.Brand,{onClick:function(){return a(0)},style:{cursor:"pointer"},children:"PassWallet"}),Object(_.jsx)(V.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(_.jsxs)(V.a.Collapse,{id:"responsive-navbar-nav",children:[Object(_.jsxs)(R.a,{className:"me-auto",children:[Object(_.jsx)(R.a.Link,{onClick:function(){return a(1)},children:"New"}),Object(_.jsx)(R.a.Link,{onClick:function(){return a(3)},children:"Setting"}),Object(_.jsx)(R.a.Link,{onClick:function(){return a(4)},children:"About"})]}),Object(_.jsxs)(f.a,{className:"d-flex",children:[Object(_.jsx)(C.a,{type:"text",placeholder:"************",className:"me-2","aria-label":"Generate",size:"sm",name:"gPass",value:s,style:{width:"auto"},disabled:!0}),Object(_.jsxs)(v.a,{variant:"outline-success",size:"sm",onClick:t,children:["Generate",Object(_.jsx)(k.b,{style:{marginTop:"-1px",marginLeft:"5px"}})]}),Object(_.jsxs)(v.a,{variant:"danger",size:"sm",style:{marginLeft:"0.5rem"},onClick:n,children:[Object(_.jsx)(N.f,{})," Close "]})]})]})]})})},M=t(161),B=t(163),H=t(162),J=t(167),K=t(168),X=t(103),Y=function(e){var a=e.input,t=e.setInput,n=e.disa,c=e.n_e,r=e.copiar,i=Object(s.useState)(!1),l=Object(o.a)(i,2),u=l[0],b=l[1],m=function(e){switch(e){case"AccNum":return"Account Number";case"CardNum":return"Card Number";case"ExpDate":return"Expiration Date";case"PasswordCard":return"Card Password";case"SecretPhr":return"Secret Phrase";default:return e}},p=function(e){return"Password"===e?u?"text":"password":"text"};return Object(_.jsx)(_.Fragment,{children:function(){var e=[];for(var t in a)e.push(t);return e}().map((function(e,s){return"type"!==e&&Object(_.jsxs)(f.a.Group,{as:d.a,className:"mb-3",controlId:e,children:[Object(_.jsx)(f.a.Label,{md:{span:2,offset:3},column:"sm",sm:2,children:Object(_.jsx)("strong",{children:m(e)})}),Object(_.jsx)(j.a,{sm:4,children:Object(_.jsxs)(K.a,{size:"sm",children:["Password"===e&&Object(_.jsxs)(K.a.Text,{id:"basic-addon2",className:"hideShow",style:{backgroundColor:"white"},onClick:function(){return b((function(e){return!e}))},children:[" ",u?Object(_.jsx)(X.b,{}):Object(_.jsx)(X.a,{})," "]}),Object(_.jsx)(f.a.Control,{size:"sm",type:p(e),placeholder:m(e),name:e,value:a[e],onChange:function(e){t(e)},disabled:n}),c&&Object(_.jsxs)(K.a.Text,{id:"basic-addon2",className:"clipboard",style:{backgroundColor:"purple"},onClick:function(){return r(a[e])},children:[" ",Object(_.jsx)(k.a,{})," "]})]})})]},s)}))})},Q=[{form:"Web Site"},{form:"Bank Accounts"},{form:"Cryptocurrencies"},{form:"Notes"}],Z=function(e,a,t){switch(e){case 0:a(void 0===t?{type:e,Name:"",URL:"",User:"",Email:"",Password:""}:{type:e,Name:t.Name||"",URL:t.URL||"",User:t.User||"",Email:t.Email||"",Password:t.Password||""});break;case 1:a(void 0===t?{type:e,Name:"",URL:"",User:"",Email:"",Password:"",AccNum:"",CardNum:"",ExpDate:"",CVV:"",PasswordCard:""}:{type:e,Name:t.Name||"",URL:t.URL||"",User:t.User||"",Email:t.Email||"",Password:t.Password||"",AccNum:t.AccNum||"",CardNum:t.CardNum||"",ExpDate:t.ExpDate||"",CVV:t.CVV||"",PasswordCard:t.PasswordCard||""});break;case 2:a(void 0===t?{type:e,Name:"",URL:"",User:"",Email:"",Password:"",Wallet:"",SecretPhr:""}:{type:e,Name:t.Name||"",URL:t.URL||"",User:t.User||"",Email:t.Email||"",Password:t.Password||"",Wallet:t.Wallet||"",SecretPhr:t.SecretPhr||""});break;case 3:a(void 0===t?{type:e,Name:"",Notes:""}:{type:e,Name:t.Name||"",Notes:t.Notes||""})}},$=function(e,a){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],s=arguments.length>3?arguments[3]:void 0,n=arguments.length>4?arguments[4]:void 0;return Object(_.jsx)(Y,{input:e,setInput:a,disa:t,n_e:s,copiar:n})},ee=function(e){var a=e.data,t=e.eliminar,s=e.handleClose,n=e.show,c=e.msgModal,r=e.save,o=e.SeeEdit,i=function(e){switch(e){case 0:return"red";case 1:return"blue";case 2:return"purple";case 3:return"green"}};return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsxs)(M.a,{striped:!0,bordered:!0,hover:!0,size:"sm",style:{width:"50%",marginTop:"2rem"},className:"animate__animated animate__fadeInLeft",children:[Object(_.jsx)("thead",{children:Object(_.jsxs)("tr",{children:[Object(_.jsx)("th",{style:{textAlign:"center"},children:Object(_.jsx)(N.d,{})}),Object(_.jsx)("th",{style:{textAlign:"center"},children:"Name"}),Object(_.jsx)("th",{style:{textAlign:"center"},children:"Type"}),Object(_.jsx)("th",{style:{textAlign:"center"},children:Object(_.jsx)(N.h,{})})]})}),Object(_.jsx)("tbody",{children:a.data.map((function(e,a){return Object(_.jsxs)("tr",{children:[Object(_.jsx)("td",{style:{textAlign:"center"},onClick:function(){return t(a,e.Name)},children:Object(_.jsx)(N.d,{})}),Object(_.jsx)("td",{children:e.Name}),Object(_.jsx)(B.a,{placement:"left",overlay:Object(_.jsxs)(H.a,{id:a,children:[" ",Q[e.type].form," "]}),children:Object(_.jsx)("td",{style:{textAlign:"center"},children:Object(_.jsx)("div",{className:"divType",style:{backgroundColor:i(e.type)}})})}),Object(_.jsx)("td",{style:{textAlign:"center"},onClick:function(){return o(a)},children:Object(_.jsx)(N.h,{})})]},a)}))})]}),Object(_.jsxs)(J.a,{show:n,onHide:s,children:[Object(_.jsx)(J.a.Header,{closeButton:!0,children:Object(_.jsx)(J.a.Title,{children:"PassWallet"})}),Object(_.jsx)(J.a.Body,{children:c}),Object(_.jsxs)(J.a.Footer,{children:[Object(_.jsx)(v.a,{variant:"secondary",onClick:s,children:"Close"}),Object(_.jsx)(v.a,{variant:"danger",onClick:r,children:"Save Changes"})]})]})]})},ae=function(e){var a=e.data,t=e.setData,n=e.changeAction,c=e.id,r=e.setId,l=Object(i.e)(),d=Object(i.h)().data,j=Object(s.useState)(""),u=Object(o.a)(j,2),b=u[0],m=u[1],p=Object(s.useState)(!1),h=Object(o.a)(p,2),O=h[0],x=h[1],f=function(){return x(!1)};return Object(_.jsx)(ee,{data:a,eliminar:function(e,a){m("Do you want to delete the element with the name: ".concat(a,"?")),r(e),x(!0)},handleClose:f,show:O,msgModal:b,save:function(){f();var e={data:a.data.filter((function(e,a){return a!==c&&e}))};r(null);var s=G(e);U(a,s,t,l,d)},SeeEdit:function(e){r(e),n(2)}})},te=t(112),se=function(e){var a=e.props,t=a.type,s=void 0===t?0:t,n=a.save,c=a.changeForm,r=a.typeForm,o=a.element,i=a.n_e,l=a.edit,u=a.disa,b=a.alert;return Object(_.jsxs)(f.a,{onSubmit:n,className:"animate__animated animate__fadeInLeft",style:{marginTop:"2rem"},children:[Object(_.jsx)(f.a.Group,{as:d.a,className:"mb-3",controlId:"formHorizontalSelect",children:Object(_.jsx)(j.a,{xs:"auto",md:{span:2,offset:5},className:"my-1",children:Object(_.jsx)(f.a.Select,{size:"sm",md:{span:2,offset:4},defaultValue:s,onChange:function(e){return c(parseInt(e.target.value))},className:"me-sm-2",id:"inlineFormCustomSelect",disabled:u,children:r.map((function(e,a){return Object(_.jsx)("option",{id:a,value:a,children:e.form},a)}))})})}),o(),Object(_.jsxs)(f.a.Group,{as:d.a,className:"mb-3",children:[Object(_.jsx)(j.a,{sm:{span:1,offset:5},children:Object(_.jsxs)(v.a,{variant:"success",type:"submit",size:"sm",disabled:u,children:["Save ",Object(_.jsx)(N.a,{style:{marginTop:"-2px"}})," "]})}),i&&Object(_.jsx)(j.a,{sm:{span:1,offset:0},children:Object(_.jsxs)(v.a,{variant:u?"warning":"danger",size:"sm",onClick:l,children:[!0===u?"Edit":"Cancel"," ",!0===u?Object(_.jsx)(te.a,{style:{marginTop:"-3px"}}):Object(_.jsx)(y.a,{style:{marginTop:"-3px"}})]})})]}),Object(_.jsx)(f.a.Group,{children:Object(_.jsx)(j.a,{sm:{span:4,offset:5},children:Object(_.jsxs)(g.a,{variant:b.type,className:b.ani,children:[" ",b.msg," "]})})})]})},ne=function(e){var a=e.type,t=void 0===a?0:a,n=e.data,c=e.setData,r=Object(i.e)(),l=Object(i.h)().data,d=Object(s.useState)({msg:"",type:""}),j=Object(o.a)(d,2),u=j[0],b=j[1],m=h({type:t,Name:"",URL:"",User:"",Email:"",Password:""}),p=Object(o.a)(m,3),O=p[0],x=p[1],f=p[2],g={type:t,save:function(e){e.preventDefault();var a=[];(a=n.data).push(O);var t=G({data:a});U(a,t,c,r,l,b,f)},changeForm:function(e){return Z(e,f)},typeForm:Q,element:function(){return $(O,x,!1)},n_e:!1,alert:u};return Object(_.jsx)(se,{props:g})},ce=function(e){var a=e.data,t=e.setData,n=e.id,c=a.data.filter((function(e,a){return a===n&&e}))[0],r=h(Object(p.a)({},c)),l=Object(o.a)(r,3),d=l[0],j=l[1],u=l[2],b=Object(s.useState)(!0),m=Object(o.a)(b,2),O=m[0],x=m[1],f=Object(s.useState)({msg:"",type:""}),g=Object(o.a)(f,2),v=g[0],y=g[1],w=Object(i.e)(),N=Object(i.h)().data,C=function(e){return Z(e,u,c)},P=function(e){return navigator.clipboard.writeText(e).then((function(){return D(y,"Copying to clipboard","success")})).catch((function(){return D(y,"Error when copying to clipboard","danger")}))},S={type:d.type,save:function(e){e.preventDefault();var s={data:a.data.map((function(e,a){return a===n?d:e}))},c=G(s);U(s,c,t,w,N,y)},changeForm:C,typeForm:Q,element:function(){return $(d,j,O,!0,P)},n_e:!0,edit:function(){!O&&C(c.type),x(!O)},disa:O,alert:v};return Object(_.jsx)(se,{props:S})},re=function(e){var a=e.props,t=a.input,s=a.setInput,n=a.changePass,c=a.deleteData,r=a.alert,o=a.show,i=a.msgModal,l=a.handleClose,u=a.eliminar,b=a.saveOrder,m=a.typeOrder,p=a.setTypeOrder,h=t.oldPass,O=t.newPass,x=t.currentPass;return Object(_.jsxs)(f.a,{className:"animate__animated animate__fadeInLeft",style:{marginTop:"2rem"},children:[Object(_.jsxs)(f.a.Group,{as:d.a,className:"mb-3",controlId:"oldPassword",children:[Object(_.jsx)(f.a.Label,{md:{span:2,offset:3},column:"sm",sm:2,children:"Sort (name, data type)"}),Object(_.jsx)(j.a,{sm:4,children:Object(_.jsxs)(f.a.Select,{size:"sm",defaultValue:m,onChange:function(e){return p(parseInt(e.target.value))},children:[Object(_.jsx)("option",{value:0,children:"-"}),Object(_.jsx)("option",{value:1,children:"Name"}),Object(_.jsx)("option",{value:2,children:"Data Type"})]})})]}),Object(_.jsx)(f.a.Group,{as:d.a,className:"mb-3",children:Object(_.jsx)(j.a,{sm:{span:2,offset:5},children:Object(_.jsxs)(v.a,{variant:"primary",type:"button",size:"sm",onClick:b,children:["Save ",Object(_.jsx)(N.b,{style:{marginTop:"-3px"}})," "]})})}),Object(_.jsx)("hr",{}),Object(_.jsxs)(f.a.Group,{as:d.a,className:"mb-3",controlId:"oldPassword",children:[Object(_.jsx)(f.a.Label,{md:{span:2,offset:3},column:"sm",sm:2,children:"Old Password"}),Object(_.jsx)(j.a,{sm:4,children:Object(_.jsx)(f.a.Control,{size:"sm",type:"text",placeholder:"Old Password",name:"oldPass",value:h,onChange:function(e){s(e)}})})]}),Object(_.jsxs)(f.a.Group,{as:d.a,className:"mb-3",controlId:"newPassword",children:[Object(_.jsx)(f.a.Label,{md:{span:2,offset:3},column:"sm",sm:2,children:"New Password (minimum of 6 characters)"}),Object(_.jsx)(j.a,{sm:4,children:Object(_.jsx)(f.a.Control,{size:"sm",type:"text",placeholder:"New Password",name:"newPass",value:O,onChange:function(e){s(e)}})})]}),Object(_.jsx)(f.a.Group,{as:d.a,className:"mb-3",children:Object(_.jsx)(j.a,{sm:{span:2,offset:5},children:Object(_.jsxs)(v.a,{variant:"success",type:"button",size:"sm",onClick:n,children:["Change Password ",Object(_.jsx)(N.e,{style:{marginTop:"-3px"}})," "]})})}),Object(_.jsx)("hr",{}),Object(_.jsxs)(f.a.Group,{as:d.a,className:"mb-3",controlId:"currentPassword",children:[Object(_.jsx)(f.a.Label,{md:{span:2,offset:3},column:"sm",sm:2,children:"Current Password"}),Object(_.jsx)(j.a,{sm:4,children:Object(_.jsx)(f.a.Control,{size:"sm",type:"text",placeholder:"Current Password",name:"currentPass",value:x,onChange:function(e){s(e)}})})]}),Object(_.jsx)(f.a.Group,{as:d.a,className:"mb-3",children:Object(_.jsx)(j.a,{sm:{span:1,offset:5},children:Object(_.jsxs)(v.a,{variant:"danger",type:"button",size:"sm",onClick:u,children:["Delete Data ",Object(_.jsx)(N.c,{style:{marginTop:"-3px"}})," "]})})}),Object(_.jsx)(f.a.Group,{children:Object(_.jsx)(j.a,{sm:{span:4,offset:5},children:Object(_.jsxs)(g.a,{variant:r.type,className:r.ani,children:[" ",r.msg," "]})})}),Object(_.jsxs)(J.a,{show:o,onHide:l,children:[Object(_.jsx)(J.a.Header,{closeButton:!0,children:Object(_.jsx)(J.a.Title,{children:"PassWallet"})}),Object(_.jsx)(J.a.Body,{children:i}),Object(_.jsxs)(J.a.Footer,{children:[Object(_.jsx)(v.a,{variant:"secondary",onClick:l,children:"Close"}),Object(_.jsx)(v.a,{variant:"danger",onClick:c,children:"Save Changes"})]})]})]})},oe=function(e){var a=e.data,t=e.setData,n=e.config,c=Object(i.e)(),r=Object(i.h)().data,l=Object(s.useState)({msg:"",type:"",ani:""}),d=Object(o.a)(l,2),j=d[0],m=d[1],p=h({oldPass:"",newPass:"",currentPass:""}),O=Object(o.a)(p,3),x=O[0],f=O[1],g=O[2],v=Object(s.useState)(""),y=Object(o.a)(v,2),w=y[0],N=y[1],C=Object(s.useState)(!1),P=Object(o.a)(C,2),S=P[0],k=P[1],I=Object(s.useState)(void 0===n?0:n.order),L=Object(o.a)(I,2),T=L[0],A=L[1],z={input:x,setInput:f,changePass:function(){x.oldPass===localStorage.getItem("temp")&&""!==x.newPass&&x.newPass.length>=6?function(e,a,t,s,n,c,r){Object(b.j)(e,a).then((function(){localStorage.setItem("temp",a);var e=G({data:t});U(void 0,e,void 0,s,n,c,r)})).catch((function(){return D(c,"An error occurred when changing the password.","danger")}))}(r.auth.currentUser,x.newPass,a.data,c,r,m,g):D(m,"Wrong previous password.","danger")},deleteData:function(){if(k(!1),N(""),x.currentPass===localStorage.getItem("temp")){var e=G({data:[]});U(e,e,t,c,r,m,g)}else D(m,"Incorrect password.","danger")},alert:j,show:S,msgModal:w,handleClose:function(){return k(!1)},eliminar:function(){N("Do you want to delete all data from the database?"),k(!0)},saveOrder:function(){return function(e,a,t){var s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:void 0,n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:void 0,c=Object(u.a)(a,t.uid,"config");Object(u.f)(c,{order:e}).then((function(){return void 0!==s&&D(s,"Saved configuration.","success",n)})).catch((function(){return void 0!==s&&D(s,"Error saving configuration.","danger")}))}(T,c,r,m)},typeOrder:T,setTypeOrder:A};return Object(_.jsx)(re,{props:z})},ie=function(){var e=Object(s.useState)(null),a=Object(o.a)(e,2),t=a[0],n=a[1],c=Object(s.useState)(0),r=Object(o.a)(c,2),l=r[0],d=r[1],j=Object(s.useState)({data:[]}),m=Object(o.a)(j,2),p=m[0],h=m[1],O=Object(s.useState)({gPass:""}),x=Object(o.a)(O,2),f=x[0],g=x[1],v=Object(i.e)(),y=Object(i.d)(),w=Object(b.c)(y),N=Object(i.h)().data,C=Object(u.a)(v,N.uid,"data"),P=Object(i.f)(C).data,k=Object(u.a)(v,N.uid,"config"),I=Object(i.f)(k).data;Object(s.useEffect)((function(){if(void 0!==P){var e=JSON.parse(function(e){return E.a.AES.decrypt(e.data,localStorage.getItem("temp")).toString(E.a.enc.Utf8)}(P));void 0!==I&&0!==I.order&&(1===I.order?e.sort((function(e,a){return e.Name.toLowerCase()>a.Name.toLowerCase()?1:e.Name.toLowerCase()<a.Name.toLowerCase()?-1:0})):e.sort((function(e,a){return e.type-a.type}))),h({data:e})}return function(){}}),[P,I]);var L=function(e){d(e)};return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(q,{changeAction:L,generatePass:function(){return g({gPass:S()})},gPass:f.gPass,close:function(){return Object(b.i)(w).then((function(){return localStorage.removeItem("temp")})).catch((function(e){return console.log(e)}))}}),function(){switch(l){case 0:return Object(_.jsx)(ae,{data:p,setData:h,changeAction:L,id:t,setId:n});case 1:return Object(_.jsx)(ne,{data:p,setData:h});case 2:return Object(_.jsx)(ce,{data:p,setData:h,id:t});case 3:return Object(_.jsx)(oe,{data:p,setData:h,config:I});case 4:return Object(_.jsx)(W,{})}}()]})},le=function(){return Object(_.jsxs)(j.a,{xs:{span:6,offset:5},children:[" ",Object(_.jsx)(y.b,{className:"spinnerIni"})," "]})};var de=function(){var e=Object(u.b)(Object(i.d)()),a=Object(i.g)(),t=a.status,n=a.data,c=Object(s.useState)(!0),r=Object(o.a)(c,2),l=r[0],d=r[1];return"loading"===t?Object(_.jsx)(le,{}):!0===n.signedIn?Object(_.jsxs)(i.c,{sdk:e,children:[" ",Object(_.jsx)(ie,{})," "]}):Object(_.jsxs)(j.a,{xs:!0,lg:"6",children:[" ",l?Object(_.jsx)(T,{setstate:d}):Object(_.jsx)(z,{setstate:d})," "]})},je=function(){var e=Object(i.d)(),a=Object(b.c)(e);return Object(_.jsx)(i.a,{sdk:a,children:Object(_.jsx)(s.Suspense,{fallback:Object(_.jsx)(le,{}),children:Object(_.jsx)(l.a,{fluid:!0,children:Object(_.jsx)(d.a,{className:"justify-content-md-center",children:Object(_.jsx)(de,{})})})})})},ue=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,169)).then((function(a){var t=a.getCLS,s=a.getFID,n=a.getFCP,c=a.getLCP,r=a.getTTFB;t(e),s(e),n(e),c(e),r(e)}))};r.a.render(Object(_.jsx)(n.a.StrictMode,{children:Object(_.jsx)(i.b,{firebaseConfig:{apiKey:"AIzaSyAqiHj0iaHv3a6fTkPFaTJeb_eAtAc_Auw",authDomain:"passwallet-d8c64.firebaseapp.com",projectId:"passwallet-d8c64",storageBucket:"passwallet-d8c64.appspot.com",messagingSenderId:"711833623616",appId:"1:711833623616:web:f27313a19cd9197c8113a5",measurementId:"G-9M47XVG7N8"},suspense:!0,children:Object(_.jsx)(je,{})})}),document.getElementById("root")),ue()}},[[151,1,2]]]);
//# sourceMappingURL=main.9850f8ec.chunk.js.map