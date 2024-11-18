import{a as K}from"./chunk-EXIJYRZL.js";import{a as q,b as O,c as d,d as M,e as k,g as w,h as T,i as P,j,k as G,l as R,m as $,n as B,o as z,q as L}from"./chunk-HSNBW5DZ.js";import{a as U}from"./chunk-KYKZWJHW.js";import{a as H}from"./chunk-K7W4VTHS.js";import{A as F,B as l,C as p,G as c,I as m,K as i,L as e,M as s,O as _,P as S,R as a,T as x,Y as E,d as J,e as h,ga as A,ha as N,ja as V,la as I,oa as D,q as C}from"./chunk-7GPC4YN3.js";var y=J(K());function Q(r,n){r&1&&(i(0,"div",27),a(1," Nombre es requerido y solo debe contener letras. "),e())}function W(r,n){r&1&&(i(0,"div",27),a(1," DNI es requerido y debe tener 8 caracteres num\xE9ricos. "),e())}function X(r,n){r&1&&(i(0,"div",27),a(1," Edad es requerida y debe estar entre 21 y 65. "),e())}function Y(r,n){r&1&&(i(0,"div",27),a(1," Matr\xEDcula es requerida y debe contener al menos 6 caracteres num\xE9ricos. "),e())}function ee(r,n){if(r&1&&(i(0,"option",28),a(1),e()),r&2){let o=n.$implicit;m("value",o.name.common),l(),x(" ",o.name.common," ")}}function te(r,n){r&1&&(i(0,"div",27),a(1," Nacionalidad es requerida. "),e())}function ie(r,n){if(r&1&&(i(0,"div",29)(1,"h5"),a(2,"Pa\xEDs Seleccionado:"),e(),s(3,"img",30),e()),r&2){let o,t=S();l(3),m("src",t.selectedCountryFlag,F)("alt",((o=t.veterinarioForm.get("nacionalidad"))==null?null:o.value)+" flag")}}var Z=class r{constructor(n,o,t,u){this.fb=n;this.router=o;this.countryService=t;this.firestoreService=u;this.veterinarioForm=this.fb.group({nombre:["",[d.required,d.pattern(/^[a-zA-Z\s]+$/)]],dni:["",[d.required,d.pattern(/^\d{8}$/)]],edad:["",[d.required,d.min(21),d.max(65)]],matricula:["",[d.required,d.minLength(6),d.pattern(/^\d+$/)]],atiendeDomicilio:[!1],nacionalidad:["",d.required]})}veterinarioForm;paises=[];selectedCountryFlag;atras(){this.router.navigate(["/home"])}ngOnInit(){this.countryService.obtenerPaises(["Americas","Asia"]).subscribe(n=>{this.paises=n.slice(0,3)}),this.veterinarioForm.get("nacionalidad")?.valueChanges.subscribe(n=>{let o=this.paises.find(t=>t.name.common===n);this.selectedCountryFlag=o?.flags.svg})}onSubmit(){return h(this,null,function*(){if(this.veterinarioForm.valid){let n={nombre:this.veterinarioForm.get("nombre")?.value,dni:this.veterinarioForm.get("dni")?.value,edad:this.veterinarioForm.get("edad")?.value,matricula:this.veterinarioForm.get("matricula")?.value,atiendeDomicilio:this.veterinarioForm.get("atiendeDomicilio")?.value,nacionalidad:this.veterinarioForm.get("nacionalidad")?.value,bandera:this.selectedCountryFlag};try{let o=yield this.firestoreService.createDocument("veterinarios",n);console.log(`Veterinario creado con \xE9xito, ID: ${o}`),y.default.fire({icon:"success",title:"Veterinario Creado",text:`El veterinario ${n.nombre} ha sido creado exitosamente.`,confirmButtonText:"Aceptar"})}catch(o){console.error("Error al crear el veterinario:",o),y.default.fire({icon:"error",title:"Error",text:"Ocurri\xF3 un error al crear el veterinario. Por favor, intenta nuevamente.",confirmButtonText:"Aceptar"})}}})}static \u0275fac=function(o){return new(o||r)(p(z),p(D),p(U),p(H))};static \u0275cmp=C({type:r,selectors:[["app-alta-veterinario"]],standalone:!0,features:[E],decls:45,vars:9,consts:[[1,"gradient-custom","vh-100","d-flex","align-items-center","justify-content-center"],[1,"container","my-5"],[1,"row","g-5"],[1,"col-md-7","col-lg-8"],[1,"mb-3"],["novalidate","",1,"needs-validation",3,"ngSubmit","formGroup"],[1,"row","g-3"],[1,"col-sm-6"],["for","nombre",1,"form-label"],["type","text","id","nombre","formControlName","nombre","required","",1,"form-control"],["class","text-danger",4,"ngIf"],["for","dni",1,"form-label"],["type","text","id","dni","formControlName","dni","required","",1,"form-control"],[1,"col-12"],["for","edad",1,"form-label"],["type","number","id","edad","formControlName","edad","required","",1,"form-control"],["for","matricula",1,"form-label"],["type","text","id","matricula","formControlName","matricula","required","",1,"form-control"],[1,"form-check"],["type","checkbox","id","atiendeDomicilio","formControlName","atiendeDomicilio",1,"form-check-input"],["for","atiendeDomicilio",1,"form-check-label"],["for","nacionalidad",1,"form-label"],["id","nacionalidad","formControlName","nacionalidad","required","",1,"form-select"],[3,"value",4,"ngFor","ngForOf"],["class","mt-3",4,"ngIf"],["type","submit",1,"w-100","btn","btn-primary","btn-lg","mt-3",3,"disabled"],[1,"w-100","btn","btn-secondary","btn-lg","mt-3",3,"click"],[1,"text-danger"],[3,"value"],[1,"mt-3"],["width","50","height","30",3,"src","alt"]],template:function(o,t){if(o&1&&(i(0,"div",0)(1,"div",1)(2,"main")(3,"div",2)(4,"div",3)(5,"h4",4),a(6,"Alta de Veterinario"),e(),i(7,"form",5),_("ngSubmit",function(){return t.onSubmit()}),i(8,"div",6)(9,"div",7)(10,"label",8),a(11,"Nombre"),e(),s(12,"input",9),c(13,Q,2,0,"div",10),e(),i(14,"div",7)(15,"label",11),a(16,"DNI"),e(),s(17,"input",12),c(18,W,2,0,"div",10),e()(),i(19,"div",13)(20,"label",14),a(21,"Edad"),e(),s(22,"input",15),c(23,X,2,0,"div",10),e(),i(24,"div",13)(25,"label",16),a(26,"Matr\xEDcula"),e(),s(27,"input",17),c(28,Y,2,0,"div",10),e(),i(29,"div",13)(30,"div",18),s(31,"input",19),i(32,"label",20),a(33,"Atiende a domicilio"),e()()(),i(34,"div",13)(35,"label",21),a(36,"Nacionalidad"),e(),i(37,"select",22),c(38,ee,2,2,"option",23),e(),c(39,te,2,0,"div",10),e(),c(40,ie,4,2,"div",24),i(41,"button",25),a(42,"Dar de Alta"),e()(),i(43,"button",26),_("click",function(){return t.atras()}),a(44,"Atr\xE1s"),e()()()()()()),o&2){let u,v,f,g,b;l(7),m("formGroup",t.veterinarioForm),l(6),m("ngIf",((u=t.veterinarioForm.get("nombre"))==null?null:u.invalid)&&((u=t.veterinarioForm.get("nombre"))==null?null:u.touched)),l(5),m("ngIf",((v=t.veterinarioForm.get("dni"))==null?null:v.invalid)&&((v=t.veterinarioForm.get("dni"))==null?null:v.touched)),l(5),m("ngIf",((f=t.veterinarioForm.get("edad"))==null?null:f.invalid)&&((f=t.veterinarioForm.get("edad"))==null?null:f.touched)),l(5),m("ngIf",((g=t.veterinarioForm.get("matricula"))==null?null:g.invalid)&&((g=t.veterinarioForm.get("matricula"))==null?null:g.touched)),l(10),m("ngForOf",t.paises),l(),m("ngIf",((b=t.veterinarioForm.get("nacionalidad"))==null?null:b.invalid)&&((b=t.veterinarioForm.get("nacionalidad"))==null?null:b.touched)),l(),m("ngIf",t.selectedCountryFlag),l(),m("disabled",t.veterinarioForm.invalid)}},dependencies:[L,w,R,$,O,T,q,G,M,k,B,P,j,V,A,N,I],styles:[".gradient-custom[_ngcontent-%COMP%]{background:-webkit-linear-gradient(to right,yellow,grey);background:linear-gradient(to right,#ff0,gray);min-height:100vh;display:flex;align-items:center;justify-content:center}.container[_ngcontent-%COMP%]{max-width:960px;background:#fff;padding:20px;border-radius:8px;box-shadow:0 4px 8px #0000001a}.form-control.ng-invalid.ng-touched[_ngcontent-%COMP%]{border-color:#dc3545}.text-danger[_ngcontent-%COMP%]{font-size:.9rem}.mt-3[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border:1px solid #ddd;padding:2px;border-radius:4px}"]})};export{Z as AltaVeterinarioComponent};
