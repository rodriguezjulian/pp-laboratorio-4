import{a as B}from"./chunk-ZL5ANUAO.js";import{c as L}from"./chunk-NHZQKUB3.js";import"./chunk-KOWSTYMA.js";import{f as j}from"./chunk-UDCWHXKS.js";import{Ea as v,Ga as s,Ia as i,Ja as t,Ka as g,La as O,Ma as b,Na as f,Oa as F,Pa as n,Qa as x,Ra as d,Tb as z,Wa as m,Xa as N,Y as p,Ya as T,_b as R,fa as P,ga as M,ka as V,ob as A,pb as C,qb as k,rb as c,ta as w,va as r,wa as u}from"./chunk-HR6EH2NC.js";function $(o,a){if(o&1){let e=O();i(0,"tr",6),b("click",function(){let I=P(e).$implicit,E=f();return M(E.seleccionarVeterinario(I))}),i(1,"td"),n(2),t(),i(3,"td"),n(4),t(),i(5,"td"),n(6),t(),i(7,"td"),n(8),t(),i(9,"td")(10,"button",7),n(11,"Ver Detalles"),t()()()}if(o&2){let e=a.$implicit;r(2),x(e.nombre),r(2),x(e.dni),r(2),x(e.edad),r(2),x(e.nacionalidad)}}var S=class o{constructor(a){this.firestoreService=a;this.cargarVeterinarios()}veterinarios=[];veterinarioSeleccionado=new V;cargarVeterinarios(){this.firestoreService.getDocuments("veterinarios").then(a=>{this.veterinarios=a.docs.map(e=>e.data())})}seleccionarVeterinario(a){this.veterinarioSeleccionado.emit(a)}static \u0275fac=function(e){return new(e||o)(u(j))};static \u0275cmp=p({type:o,selectors:[["app-tabla-veterinarios"]],outputs:{veterinarioSeleccionado:"veterinarioSeleccionado"},standalone:!0,features:[m],decls:20,vars:1,consts:[[1,"contenedor-tabla"],[1,"p-5","mb-4","bg-light","rounded-3"],[1,"container-fluid","py-5"],[1,"display-5","fw-bold"],[1,"table","table-striped"],[3,"click",4,"ngFor","ngForOf"],[3,"click"],[1,"btn","btn-primary"]],template:function(e,l){e&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1",3),n(4,"Lista de Veterinarios"),t(),i(5,"table",4)(6,"thead")(7,"tr")(8,"th"),n(9,"Nombre"),t(),i(10,"th"),n(11,"DNI"),t(),i(12,"th"),n(13,"Edad"),t(),i(14,"th"),n(15,"Nacionalidad"),t(),i(16,"th"),n(17,"Acciones"),t()()(),i(18,"tbody"),v(19,$,12,4,"tr",5),t()()()()()),e&2&&(r(19),s("ngForOf",l.veterinarios))},dependencies:[c,A],styles:[".contenedor-tabla[_ngcontent-%COMP%]{border:2px solid red;border-radius:8px;padding:10px;box-shadow:0 4px 8px #0000001a}.table[_ngcontent-%COMP%]{margin-top:20px}.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{text-align:center;vertical-align:middle}.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background-color:#f8f9fa;cursor:pointer}"]})};function H(o,a){o&1&&(i(0,"div",3),n(1," A\xFAn no hay informaci\xF3n para mostrar. "),t())}function q(o,a){if(o&1&&(i(0,"div",4)(1,"h2"),n(2,"Detalles del Veterinario"),t(),i(3,"p")(4,"strong"),n(5,"Nombre:"),t(),n(6),t(),i(7,"p")(8,"strong"),n(9,"DNI:"),t(),n(10),t(),i(11,"p")(12,"strong"),n(13,"Edad:"),t(),n(14),t(),i(15,"p")(16,"strong"),n(17,"Matr\xEDcula:"),t(),n(18),t(),i(19,"p")(20,"strong"),n(21,"Atiende a domicilio:"),t(),n(22),t()()),o&2){let e=f();r(6),d(" ",e.veterinario==null?null:e.veterinario.nombre,""),r(4),d(" ",e.veterinario==null?null:e.veterinario.dni,""),r(4),d(" ",e.veterinario==null?null:e.veterinario.edad,""),r(4),d(" ",e.veterinario==null?null:e.veterinario.matricula,""),r(4),d(" ",e.veterinario!=null&&e.veterinario.atiendeDomicilio?"S\xED":"No","")}}var h=class o{veterinario;static \u0275fac=function(e){return new(e||o)};static \u0275cmp=p({type:o,selectors:[["app-detalle-veterinario"]],inputs:{veterinario:"veterinario"},standalone:!0,features:[m],decls:3,vars:2,consts:[[1,"contenedor-detalle-veterinario"],["class","alert alert-warning text-center","role","alert",4,"ngIf"],["class","h-100 p-5 text-white bg-dark rounded-3",4,"ngIf"],["role","alert",1,"alert","alert-warning","text-center"],[1,"h-100","p-5","text-white","bg-dark","rounded-3"]],template:function(e,l){e&1&&(i(0,"div",0),v(1,H,2,0,"div",1)(2,q,23,5,"div",2),t()),e&2&&(r(),s("ngIf",!l.veterinario),r(),s("ngIf",l.veterinario))},dependencies:[c,C],styles:[".contenedor-detalle-veterinario[_ngcontent-%COMP%]{border:2px solid blue;border-radius:10px;padding:20px;box-shadow:0 4px 6px #0000001a;margin-top:20px}p[_ngcontent-%COMP%]{font-size:1.2rem;line-height:1.6}h2[_ngcontent-%COMP%]{font-size:1.8rem;margin-bottom:20px}"]})};function G(o,a){o&1&&(i(0,"div",4),n(1," A\xFAn no hay informaci\xF3n para mostrar. "),t())}function J(o,a){if(o&1&&(i(0,"div")(1,"h2"),n(2,"Detalles del Pa\xEDs"),t(),i(3,"p")(4,"strong"),n(5,"Nombre:"),t(),n(6),t(),i(7,"p")(8,"strong"),n(9,"Regi\xF3n:"),t(),n(10),t(),i(11,"p")(12,"strong"),n(13,"Poblaci\xF3n:"),t(),n(14),N(15,"number"),t(),g(16,"img",5),t()),o&2){let e=f();r(6),d(" ",e.pais==null||e.pais.name==null?null:e.pais.name.common,""),r(4),d(" ",e.pais==null?null:e.pais.region,""),r(4),d(" ",T(15,6,e.pais==null?null:e.pais.population),""),r(2),F("alt","Bandera de ",e.pais==null||e.pais.name==null?null:e.pais.name.common,""),s("src",e.pais==null||e.pais.flags==null?null:e.pais.flags.svg,w)}}var _=class o{pais;static \u0275fac=function(e){return new(e||o)};static \u0275cmp=p({type:o,selectors:[["app-detalle-pais"]],inputs:{pais:"pais"},standalone:!0,features:[m],decls:4,vars:2,consts:[[1,"contenedor-detalle-pais"],[1,"contenedor-detalle-veterinario"],["class","alert alert-warning text-center","role","alert",4,"ngIf"],[4,"ngIf"],["role","alert",1,"alert","alert-warning","text-center"],["width","120",3,"src","alt"]],template:function(e,l){e&1&&(i(0,"div",0)(1,"div",1),v(2,G,2,0,"div",2)(3,J,17,8,"div",3),t()()),e&2&&(r(2),s("ngIf",!l.pais),r(),s("ngIf",l.pais))},dependencies:[c,C,k],styles:[".contenedor-detalle-pais[_ngcontent-%COMP%]{border:2px solid green;border-radius:10px;padding:20px;box-shadow:0 4px 6px #0000001a;background-color:#f8f9fa}p[_ngcontent-%COMP%]{font-size:1.2rem;line-height:1.6}h2[_ngcontent-%COMP%]{font-size:1.8rem;margin-bottom:20px}img[_ngcontent-%COMP%]{margin-top:15px;border:1px solid #ddd;border-radius:8px;box-shadow:0 4px 8px #0003}"]})};var W=class o{constructor(a,e,l){this.auth=a;this.countryService=e;this.router=l}veterinarioSeleccionado;paisSeleccionado;usuarioLogueado=null;ngOnInit(){this.auth.onAuthStateChanged(a=>{this.usuarioLogueado=a})}altavete(){this.router.navigate(["/altaveterinario"])}mostrarDetallesVeterinario(a){this.veterinarioSeleccionado=a,console.log("Veterinario seleccionado:",a),this.cargarPais(a.nacionalidad)}iniciarSesion(){this.router.navigate(["/login"])}cargarPais(a){console.log("Buscando pa\xEDs:",a),this.countryService.obtenerPaises([]).subscribe(e=>{console.log("Paises obtenidos:",e),this.paisSeleccionado=e.find(l=>l.name.common.toLowerCase()===a.toLowerCase()),console.log("Pa\xEDs seleccionado:",this.paisSeleccionado)})}cerrarSesion(){R(this.auth).then(()=>{this.router.navigate(["/login"])})}static \u0275fac=function(e){return new(e||o)(u(z),u(B),u(L))};static \u0275cmp=p({type:o,selectors:[["app-veterinarios"]],standalone:!0,features:[m],decls:10,vars:2,consts:[[1,"container-fluid","mt-4"],[1,"row"],[1,"col-md-6"],[3,"veterinarioSeleccionado"],[1,"col-md-12","mb-4"],[3,"veterinario"],[1,"col-md-12"],[3,"pais"]],template:function(e,l){e&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"app-tabla-veterinarios",3),b("veterinarioSeleccionado",function(E){return l.mostrarDetallesVeterinario(E)}),t()(),i(4,"div",2)(5,"div",1)(6,"div",4),g(7,"app-detalle-veterinario",5),t(),i(8,"div",6),g(9,"app-detalle-pais",7),t()()()()()),e&2&&(r(7),s("veterinario",l.veterinarioSeleccionado),r(2),s("pais",l.paisSeleccionado))},dependencies:[c,S,h,_]})};export{W as VeterinariosComponent};