// JavaScript Document

$(document).ready(function(){

	

//����������Ļ�������� 

var _defautlTop = $("#rSwt_piao").offset().top - $(window).scrollTop(); 

var _defautlTop2 = $("#right").offset().top - $(window).scrollTop(); 



//����������Ļ������ 

var _defautlLeft = $("#rSwt_piao").offset().left - $(window).scrollLeft(); 

var _defautlLeft2 = $("#rigTop").offset().left - $(window).scrollLeft(); 



//����Ĭ����ʽ��¼����ԭ��ʼ��ʽʱ����Ҫ 

var _position = $("#rSwt_piao").css('position'); 

var _position2 = $("#rigTop").css('position'); 

var _top = $("#rSwt_piao").css('top'); 

var _top2 = $("#rigTop").css('top'); 

var _left = $("#rSwt_piao").css('left');

var _left2 = $("#rigTop").css('left');

var _zIndex = $("#rSwt_piao").css('z-index'); 

var _zIndex2 = $("#rigTop").css('z-index'); 



//����Ĭ����ʽ��¼����ԭ��ʼ��ʽʱ����Ҫ 

var _defautlBot = parseInt($("#left_bar").css('height')) + parseInt($("#left_bar").offset().top) - 350

var _defautlBot2 = parseInt($("#left_bar").css('height')) + parseInt($("#left_bar").offset().top) - 350



//�������¼� 

$(window).scroll(function(){ 

if($(this).scrollTop() > _defautlTop && $(this).scrollTop() <_defautlBot){ 

//IE6����ʶposition:fixed��������position:absoluteģ�� 

if($.browser.msie && $.browser.version=="6.0"){ 

$("#rSwt_piao").css({'position':'absolute','top':eval(document.documentElement.scrollTop),'left':_defautlLeft,'z-index':99999}); 



//��ֹ���ֶ��� 

$("html,body").css({'background-image':'url(about:blank)','background-attachment':'fixed'}); 

}else{ 

$("#rSwt_piao").css({'position':'fixed','top':0,'left':_defautlLeft,'z-index':99999}); 

} 

}else{ 

$("#rSwt_piao").css({'position':_position,'top':_top,'left':_left,'z-index':_zIndex}); 

} 

});

$(window).scroll(function(){ 

if($(this).scrollTop() > _defautlTop2 && $(this).scrollTop() <_defautlBot2){ 

//IE6����ʶposition:fixed��������position:absoluteģ�� 

if($.browser.msie && $.browser.version=="6.0"){ 

$("#rigTop").css({'position':'absolute','top':eval(document.documentElement.scrollTop),'left':_defautlLeft2,'z-index':99999}); 

//��ֹ���ֶ��� 

$("html,body").css({'background-image':'url(about:blank)','background-attachment':'fixed'}); 

}else{ 

$("#rigTop").css({'position':'fixed','top':-12,'left':_defautlLeft2,'z-index':99999}); 

} 

}else{ 

$("#rigTop").css({'position':_position2,'top':_top2,'left':_left2,'z-index':_zIndex2}); 

} 

});

});