
(function(win,doc){
        //�л�����
       var oBtn=doc.querySelectorAll('header .header-nav li')[0];
        var oCut=doc.querySelectorAll('header .header-content')[0];
        var oClose=doc.querySelectorAll('header .header-content em')[0];
        oBtn.bTrue=true;
        oBtn.addEventListener('click',toggleClass,false);
        oClose.addEventListener('click',toggleClass,false);
        function toggleClass(){
                oBtn.classList.toggle('active');
                oCut.classList.toggle('active');
                if(oBtn.className=='active'){
                    //��ֹ������
                        document.documentElement.style.overflow='hidden';//����
                        document.ontouchmove=function(ev){ev.preventDefault();};//�ֻ�
                }else{
                        //����������
                        document.documentElement.style.overflow='auto';//����
                        document.ontouchmove=null;//�ֻ�
                }
                oBtn.bTrue=!oBtn.bTrue;
        }
        //�ص��߶�
        var oHeader=doc.querySelector('header');
        var oH2=doc.querySelectorAll('header .header-content h2')[0];
        var oDiv=doc.querySelector('#header-content');
        var aDiv=doc.querySelectorAll('#header-content .bd ul div');
        resetH();
        win.addEventListener('resize',resetH,false);
        function resetH(){
                var iHeaderH=oHeader.offsetHeight;
                var iH2H=oH2.offsetHeight;
                var iClientH=doc.documentElement.clientHeight;
                var iResult=iClientH-iH2H-iHeaderH;
                oDiv.style.height=iResult+'px';
                for(var j=0;j<aDiv.length;j++){
                        aDiv[j].style.height=iResult+'px';
                }
                TouchSlide({ slideCell:"#header-content",titCell:'.hd li',mainCell:'.bd ul'});
                new iScroll('header-btn',{hScrollbar:false,vScrollbar:false,vScroll:true,hScroll:false});
                for(var i=0;i<aDiv.length;i++){
                        new iScroll('header-cut'+(i+1),{hScrollbar:false,vScrollbar:false,vScroll:true,hScroll:false});
                }
        }
})(window,document);

(function(win,doc){
	 var night='101';
	var timeday='112';
	var weixin='120';
	var date=new Date();
	var url1=window.location.host;
	var url2=window.location.href;
    $('input[name="source"]').val(url2);
	updata();
	setInterval(updata,600000)
	function updata(){
		var time=date.getHours();
		if(url1=="http://weixin.skinjc.com/"){
			$('input[name="focus_depart_id"]').val(weixin);
		}
		else if(time>=4 && time<9){//����
			$('input[name="focus_depart_id"]').val(night);
		} 
		else if(time>=9 && time<10){
			//$('input[name="focus_depart_id"]').val(night);
		} else if(time>=10 && time<11){
		//	$('input[name="focus_depart_id"]').val(night);
		} else if(time>=11&& time<12){
			//$('input[name="focus_depart_id"]').val(night);
		} else if(time>=12 && time<13){
			//$('input[name="focus_depart_id"]').val(night);
		} else if(time>=13 && time<14){
			//$('input[name="focus_depart_id"]').val(night);
		} else if(time>=14 && time<15){
			//$('input[name="focus_depart_id"]').val(night);
		} else if(time>=15 && time<16){
			//$('input[name="focus_depart_id"]').val(night);
		} else if(time>=16 && time<17){
			//$('input[name="focus_depart_id"]').val(night);
		} 
		 else if(time>=17 && time<18){
			//$('input[name="focus_depart_id"]').val(night);
		}  else if(time>=18 && time<19){
			//$('input[name="focus_depart_id"]').val(night);
		}  else if(time>=19 && time<20){
			//$('input[name="focus_depart_id"]').val(night);
		} else if(time>=20 && time<21){
			//$('input[name="focus_depart_id"]').val(night);
		} else if(time>=21&& time<22){
		  //$('input[name="focus_depart_id"]').val(night);
		} 
		 else if(time>=22 && time<23){
			//$('input[name="focus_depart_id"]').val(night);
		}  
		else{
		   //$('input[name="focus_depart_id"]').val(night);//ҹ��
		}
	} 
        /*����ͨ*/
        var oParent=doc.getElementById('swt');
        var oClose=oParent.getElementsByTagName('article')[0];
        var oI=oParent.getElementsByTagName('i')[0];
        var intervalFirst=15000;//��һ�ζ����ʾ
        var intervalOther=30000;//�����ʾʱ��
        var num=Math.round(Math.random()*(20-10)+40);
        /*����ͨ�������*/
        oI.innerHTML=num;
        /*�ײ��������*/
        var oFooter=doc.getElementsByTagName('footer')[0];
        var oFooterI=oFooter.getElementsByTagName('i')[0];
        oFooterI.innerHTML=num;
        //��ʾ
        function show(){
                oParent.style.display='block';
                setTimeout(function(){
                        oParent.className='active';
                },30);
        }
        //��һ����ʾ
        setTimeout(show,intervalFirst);
        //����
        function hide(){
                oParent.className='';
                setTimeout(function(){
                        oParent.style.display='none';
                },400);
                //��������ʾ
                setTimeout(show,intervalOther);
        }
        oClose.onclick=hide;
        /*���߱�
        var oInput=oParent.getElementsByTagName('input')[0];
        var oBtn=oParent.getElementsByTagName('span')[0];
        oBtn.onclick = function () {
                lxb.call(oInput);
        }*/
})(window,document);
/*����֤*/
function checkForm(){
        if($('#username').val()==''){
                alert('������ô�ƺ�����');
                $('#username').focus();
                return false;
        }
        if($('#username').val().length<2){
                alert('������ֲ���С��2���ַ���');
                $('#username').focus();
                return false;
        }
        if($('#username').val().length>20){
                alert('������ֲ��ô���20���ַ���');
                $('#username').focus();
                return false;
        }
        var isMobile=/^(?:13\d|15\d|18\d)\d{5}(\d{3}|\*{3})$/;
        var isPhone=/^((0\d{2,3})-)?(\d{7,8})(-(\d{3,}))?$/;
        if($('#phone').val()==''){
                alert('����д�绰���룬�Ա���������ȡ����ϵ��');
                $('#phone').focus();
                return false;
        }
        if(!isMobile.test($('#phone').val()) && !isPhone.test($('#phone').val())){
                alert("����ȷ��д�绰���룬����:134xxxx1234��021-4815xxx");
                return false;
        }
        if($('#content').val()==''){
                alert('��������飡');
                $('#content').focus();
                return false;
        }
        if($('#content').val().length>200){
                alert('���ݲ��ô���200���ַ���');
                $('#content').focus();
                return false;
        }
        return true;
}
/*����֤*/
function checkForm1(){

        var isMobile1=/^(?:13\d|15\d|18\d)\d{5}(\d{3}|\*{3})$/;
        var isPhone1=/^((0\d{2,3})-)?(\d{7,8})(-(\d{3,}))?$/;
        if($('#phone1').val()==''){
                alert('����д�绰���룬�Ա���������ȡ����ϵ��');
                $('#phone1').focus();
                return false;
        }
        if(!isMobile1.test($('#phone1').val()) && !isPhone1.test($('#phone1').val())){
                alert("����ȷ��д�绰���룬����:134xxxx1234��021-4815xxx");
                return false;
        }

}


