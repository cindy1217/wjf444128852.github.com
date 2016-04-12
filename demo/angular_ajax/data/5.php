<?php
    /**向客户端以Json格式返回好友动态，员工列表*/
    header('Content-Type:application/json');
    $output=[];
    $output[]=[
        'mno'=>rand(1000,9999),
        'photo'=>'img/5.jpg',
        'ename'=>rand(1000,9999).'Tom',
        'salary'=>66666.121321321,
        'birthday'=>873642356234
    ];
    $output[]=[
         'mno'=>rand(1000,9999),
         'photo'=>'img/6.jpg',
         'ename'=>rand(1000,9999).'Jack',
         'salary'=>55555555555.123132,
         'birthday'=>853642356564
    ];
    $output[]=[
             'mno'=>rand(1000,9999),
             'photo'=>'img/7.jpg',
             'ename'=>rand(1000,9999).'Lucy',
             'salary'=>88888888.123132,
             'birthday'=>903642356254
    ];
    $output[]=[
             'mno'=>rand(1000,9999),
             'photo'=>'img/8.jpg',
             'ename'=>rand(1000,9999).'Rose',
             'salary'=>99999999.123132,
             'birthday'=>883642356234
        ];
    sleep(1);
    //把PHP数组转换为JSON格式
    $jsonString=json_encode($output);
    echo $jsonString;
?>