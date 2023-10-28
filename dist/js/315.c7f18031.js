"use strict";(self["webpackChunkgo_home_project"]=self["webpackChunkgo_home_project"]||[]).push([[315],{7315:function(t,e,a){a.r(e),a.d(e,{default:function(){return ot}});var r=function(){var t=this,e=t._self._c;return e("SectionSpacer",{staticClass:"apartment-page"},[e("ContainerApp",{staticClass:"apartment-page__container"},[t.isErrorApartment?e("ErrorMessage",{staticClass:"apartment-page__error",attrs:{message:t.isErrorApartment}}):t._e(),t.isLoadingApartment?e("CircleLoader",{staticClass:"apartment-page__loader",attrs:{width:t.STYLE.SIZE.PAGE_LOADER_SIZE,height:t.STYLE.SIZE.PAGE_LOADER_SIZE,color:t.STYLE.COLORS.MAIN_COLOR}}):t._e(),t.isLoadingApartment||t.isErrorApartment?t._e():e("div",{staticClass:"apartment-page-content"},[e("main",{staticClass:"apartment-page"},[e("ApartmentsMainInfo",{staticClass:"apartment-page__main-info",attrs:{apartment:t.apartment}}),e("div",{staticClass:"apartment-page__additional-info"},[e("ApartmentsOwner",{staticClass:"apartment-page__owner",attrs:{owner:t.apartment.owner}}),e("ReviewsApartments",{staticClass:"apartment-page__reviews",attrs:{reviews:t.reviews}})],1)],1)])],1)],1)},n=[],s=a(9754),i=a(4826),o=function(){var t=this,e=t._self._c;return e("article",{staticClass:"apartment-main-info"},[e("div",{staticClass:"apartment-main-info__header"},[e("h1",{staticClass:"apartment-main-info__title"},[t._v(t._s(t.apartment.title))]),e("StarRating",{attrs:{rating:t.apartment.rating}})],1),e("img",{staticClass:"apartment-main-info__photo",attrs:{src:t.apartment.imgUrl,alt:t.apartment.title}}),e("p",{staticClass:"apartment-main-info__description"},[t._v(" "+t._s(t.apartment.descr)+" ")]),e("ResereButton",{staticClass:"apartment-main-info__button",attrs:{loading:t.IsLoading},on:{click:function(e){return t.handleApsrtmentsBooking()}}},[t._v("Забронировать")])],1)},l=[],c=a(7356),u=a(3135),p=a(3230),m={name:"ApartmentsMainInfo",components:{StarRating:c.Z,ResereButton:u.Z},props:{apartment:{type:Object,requred:!0}},data(){return{IsLoading:!1}},methods:{async handleApsrtmentsBooking(){const t={apartmentId:this.$route.params.id,date:Date.now()};try{this.IsLoading=!0;const{data:e}=await(0,p.MQ)(t);console.log("bookData",e),this.$notify({type:"success",title:"Заказ добавлен"})}catch(e){this.$notify({type:"error",title:"Произошла ошибка",text:e.message}),console.error(e.message)}finally{this.IsLoading=!1}}}},d=m,_=a(1001),v=(0,_.Z)(d,o,l,!1,null,"25fb3c8c",null),g=v.exports,h=function(){var t=this,e=t._self._c;return e("section",{staticClass:"owner-info"},[e("h3",{staticClass:"owner-info__header"},[t._v("Информация о владельце:")]),e("div",{staticClass:"owner-info__tab"},[e("p",{staticClass:"owner-info__name"},[t._v("Имя "+t._s(t.owner.name))]),e("a",{staticClass:"owner-info__phone",attrs:{href:`tel:${t.owner.phone}`}},[t._v("tel: "+t._s(t.owner.phone))]),e("a",{staticClass:"owner-info__email",attrs:{href:`mailto:${t.owner.email}`}},[t._v("e-mail: "+t._s(t.owner.email))])])])},f=[],w={name:"ApartmentsOwner",props:{owner:{type:Object,requare:!0}}},C=w,S=(0,_.Z)(C,h,f,!1,null,"383e811c",null),y=S.exports,R=function(){var t=this,e=t._self._c;return e("section",{staticClass:"reviews"},[e("ReviewsHeading",{staticClass:"reviews__header",attrs:{countReviews:t.amountReviews,averageRating:t.averageRating}}),e("ul",t._l(t.currentReviews,(function(t){return e("ReviewsItem",{key:t.id,staticClass:"reviews__item",attrs:{review:t}})})),1),e("ReadMoreBtn",{staticClass:"reviews__button",on:{click:t.toggleRewievs}},[t._v(t._s(t.buttonText))])],1)},A=[],L=function(){var t=this,e=t._self._c;return e("li",{staticClass:"review-item"},[e("ReviewHeader",{attrs:{author:t.review.name,rating:t.review.rating,avatarUrl:t.review.avatarUrl}}),e("p",{staticClass:"review-item__text"},[t._v(t._s(t.textElipses))])],1)},Z=[],b=function(){var t=this,e=t._self._c;return e("div",{staticClass:"review-header"},[e("ReviewAvatar",{staticClass:"review-header__user-avatar",attrs:{avatarUrl:t.avatarUrl}}),e("div",{staticClass:"review-header__title"},[e("p",{staticClass:"review-header__author"},[t._v(t._s(t.author))]),e("StarRating",{attrs:{rating:t.rating}})],1)],1)},x=[],E=function(){var t=this,e=t._self._c;return e("div",{staticClass:"avatar"},[""===t.avatarUrl?e("img",{staticClass:"avatar__user-icon",attrs:{src:a(9815),alt:"user-icon"}}):t._e(),""!==t.avatarUrl?e("img",{staticClass:"avatar__user-photo",attrs:{src:t.avatarUrl,alt:"user-photo"}}):t._e()])},I=[],M={name:"ReviewAvatar",props:{avatarUrl:{type:String,default:""}}},O=M,U=(0,_.Z)(O,E,I,!1,null,"95aee27c",null),k=U.exports,N={name:"ReviewHeader",props:{avatarUrl:{type:String,default:""},author:{type:String,required:!0},rating:{type:Number,default:0}},components:{StarRating:c.Z,ReviewAvatar:k}},B=N,T=(0,_.Z)(B,b,x,!1,null,"49a8385a",null),$=T.exports,j=a(9035),q={name:"ReviewsItem",props:{review:{type:Object,requaired:!0}},components:{ReviewHeader:$},data(){return{maxLength:j.Nj}},computed:{textElipses(){return this.review.text.length<this.maxLength?this.review.text:this.review.text.slice(0,this.maxLength)+"..."}}},D=q,H=(0,_.Z)(D,L,Z,!1,null,"370fbd4a",null),W=H.exports,P=function(){var t=this,e=t._self._c;return e("div",{staticClass:"reviews-heading"},[e("h3",{staticClass:"reviews-heading__title"},[t._v("Суммарный рейтинг")]),e("div",{staticClass:"reviews-heading__rating"},[e("p",{staticClass:"reviews-heading__count"},[t._v(t._s(t.countReviews)+" "+t._s(t.pluralText(t.countReviews)))]),e("StarRating",{attrs:{rating:t.averageRating}})],1)])},Y=[],G={name:"ReviewsHeading",props:{countReviews:{type:Number,requaired:!0},averageRating:{type:Number,requaired:!0}},components:{StarRating:c.Z},methods:{pluralText(t){return 1===t?"отзыв":t<=4?"отзыва":"отзывов"}}},Q=G,V=(0,_.Z)(Q,P,Y,!1,null,"09df96ad",null),z=V.exports,F={name:"ReviewsApartments",components:{ReviewsItem:W,ReviewsHeading:z,ReadMoreBtn:u.Z},props:{reviews:{type:Array,requaired:!0}},data(){return{REVIEWS_LIMIT:j.ye,reviwsLimit:j.ye}},computed:{averageRating(){return this.reviews.reduce(((t,e)=>t+e.rating),0)/this.reviews.length},amountReviews(){return this.reviews.length},currentReviews(){return this.reviews.slice(0,this.reviwsLimit)},buttonText(){return this.reviwsLimit===this.reviews.length?"Свернуть":"Читать еще..."}},methods:{toggleRewievs(){this.reviwsLimit===this.reviews.length?this.reviwsLimit=j.ye:this.reviwsLimit=this.reviews.length}}},J=F,K=(0,_.Z)(J,R,A,!1,null,"ff777c94",null),X=K.exports;const tt=[{id:1,name:"Ирина",avatarUrl:"https://res.cloudinary.com/dcw1yxr6s/image/upload/v1682885813/user_64415fac50c281977c774afc_2101a-140_1682885811177.jpg",rating:4,text:"Особенно понравилось местоположение, в самом центре города, на набережной. Вид с балкона великолепный! Приятный владелец. Рекомендую к аренде"},{id:2,name:"Людмила",avatarUrl:"",rating:4,text:"Понравилось все!!! Начиная с того, как была предоставлна информация о том, как добраться и попасть в апартаменты (часто с этим бывают пробле..."},{id:3,name:"Ярослав",avatarUrl:"",rating:3,text:"Понравилось все!!! Начиная с того, как была предоставлна информация о том, как добраться и попасть в апартаменты (часто с этим бывают пробле..."},{id:4,name:"Ариана",avatarUrl:"",rating:5,text:"Понравилось все!!! Начиная с того, как была предоставлна информация о том, как добраться и попасть в апартаменты (часто с этим бывают пробле..."}];var et=a(3822),at=a(6167),rt=a(2257),nt={name:"ApartmentPage",components:{ApartmentsMainInfo:g,ReviewsApartments:X,ApartmentsOwner:y,SectionSpacer:s.Z,ContainerApp:i.Z,CircleLoader:at.Z,ErrorMessage:rt.Z},data(){return{reviews:tt,STYLE:j.BI}},methods:{...(0,et.nv)("apartments",["getSelectedApartment"])},computed:{...(0,et.Se)("apartments",["getStateSelectedtApartment","getStateIsLoadingSelectedApartment"," getStateErrorSelectedApatrtment"]),apartment(){return this.getStateSelectedtApartment},isLoadingApartment(){return this.getStateIsLoadingSelectedApartment},isErrorApartment(){return this.getStateErrorSelectedApatrtment}},beforeCreate(){},async created(){await this.getSelectedApartment(this.$route.params.id)},beforeMount(){},mounted(){},beforeDestroy(){},destroyed(){}},st=nt,it=(0,_.Z)(st,r,n,!1,null,"6c70b093",null),ot=it.exports},3135:function(t,e,a){a.d(e,{Z:function(){return u}});var r=function(){var t=this,e=t._self._c;return e("button",t._g({class:{btn:!0,"btn--outlined":t.outlined},attrs:{type:t.type,disabled:t.loading}},t.$listeners),[t.loading?e("CircleLoader",{staticClass:"btn__loader",attrs:{width:"38",height:"38"}}):t._e(),e("span",{staticClass:"btn__content",class:t.contrntStyle},[t._t("default")],2)],1)},n=[],s=a(6167),i={name:"ButtonMain",components:{CircleLoader:s.Z},props:{type:{type:String,default:"button"},outlined:{type:Boolean,default:!1},loading:{type:Boolean,default:!1}},computed:{contrntStyle(){return{"btn__content--hiden":this.loading}}}},o=i,l=a(1001),c=(0,l.Z)(o,r,n,!1,null,"1e14b233",null),u=c.exports},6167:function(t,e,a){a.d(e,{Z:function(){return c}});var r=function(){var t=this,e=t._self._c;return e("span",{staticClass:"circle-loader"},[e("svg",{staticClass:"preloader-icon preloader",style:t.style,attrs:{viewBox:"0 0 100 100"}},[e("circle",{attrs:{cx:"50",cy:"50",r:"40","stroke-width":"5",fill:"none"}})])])},n=[],s={name:"CircleLoader",props:{with:{type:[Number,String],default:50},height:{type:[Number,String],default:50},color:{type:String,default:"#ffffff"}},computed:{style(){return{stroke:this.color,width:this.width,height:this.height}}}},i=s,o=a(1001),l=(0,o.Z)(i,r,n,!1,null,"bc3efa0a",null),c=l.exports},2257:function(t,e,a){a.d(e,{Z:function(){return u}});var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"error-message"},[e("MainTitle",{staticClass:"error-message__title"},[t._v(t._s(t.title))]),e("p",{staticClass:"lerror-message__description"},[t._v(t._s(t.message))])],1)},n=[],s=a(5680),i={name:"ErrorMessage",props:{title:{type:String,default:"Произошла Ошибка"},message:{type:String,default:""}},components:{MainTitle:s.Z}},o=i,l=a(1001),c=(0,l.Z)(o,r,n,!1,null,"4f28b3c6",null),u=c.exports},5680:function(t,e,a){a.d(e,{Z:function(){return c}});var r=function(){var t=this,e=t._self._c;return e(t.tagName,{tag:"component",staticClass:"main-title"},[t._t("default")],2)},n=[],s={name:"MainTitle",props:{level:{type:Number,default:1}},computed:{tagName(){return`h${this.level}`}}},i=s,o=a(1001),l=(0,o.Z)(i,r,n,!1,null,"59b2331d",null),c=l.exports},9754:function(t,e,a){a.d(e,{Z:function(){return c}});var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"section-spacer"},[t._t("default")],2)},n=[],s={name:"SectionSpacer"},i=s,o=a(1001),l=(0,o.Z)(i,r,n,!1,null,"8f43a4a8",null),c=l.exports},7356:function(t,e,a){a.d(e,{Z:function(){return c}});var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"star-rating"},[t._l(t.starLimit,(function(t){return e("span",{key:t,staticClass:"star star--outlined"})})),e("div",{staticClass:"star-rating__colored",style:t.ratingWhithStyle},t._l(t.starLimit,(function(t){return e("span",{key:t,staticClass:"star star--colored"})})),0)],2)},n=[],s={name:"StarRating",props:{rating:{type:Number,default:0},starLimit:{type:Number,default:5}},computed:{ratingWidth(){return this.rating/this.starLimit*100},ratingWhithStyle(){return`width: ${this.ratingWidth}%;`}}},i=s,o=a(1001),l=(0,o.Z)(i,r,n,!1,null,"ab2cf22c",null),c=l.exports},3230:function(t,e,a){a.d(e,{AU:function(){return s},MQ:function(){return n}});var r=a(8042);const n=t=>r.Z.post("/orders",t),s=()=>r.Z.get("/orders")},9035:function(t,e,a){a.d(e,{BI:function(){return s},Nj:function(){return r},ye:function(){return n}});const r=140,n=2,s={COLORS:{MAIN_COLOR:"#ff662d"},SIZE:{PAGE_LOADER_SIZE:"200px"}}},9815:function(t,e,a){t.exports=a.p+"img/User.cc83cec5.svg"}}]);
//# sourceMappingURL=315.c7f18031.js.map