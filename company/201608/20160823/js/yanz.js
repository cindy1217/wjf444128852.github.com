// JavaScript Document
function check() {
if (gh_form.name.value==""){alert("��������������");gh_form.name.focus();return false}
if (gh_form.tel.value==""){alert("������������ϵ��ʽ");gh_form.tel.focus();return false}
if (gh_form.date.value=="" || gh_form.date.value=="���ѡ���������"){alert("���������ľ�������");gh_form.date.focus();return false}
return true;
}
//���˿ո�
function ignoreSpaces(string) {
var temp = "";
string = '' + string;
splitstring = string.split(" ");
for(i = 0; i < splitstring.length; i++)
temp += splitstring[i];
return temp;
}
