"use strict";

$(document).ready(function () {
    //新增按钮
    $('#sub').click(function () {
        var bookname = $("#bookname").val();
        var writer = $("#writer").val();
        $.ajax({
            url: '/create',
            type: "POST",
            data: { bookname: bookname, writer: writer },
            success: function success(data) {
                console.log(data);
                if(data.code == 0){
                    window.location.href = '/';
                }
            },
            error: function error(err) {
                console.log(err);
            }
        });
    });

    //删除按钮
    $(".delete").click(function () {
        var id = $(this).attr('sid');
        $.ajax({
            url: '/delete/' + id,
            type: "GET",
            success: function success(data) {
                if(data.code == 0){
                    window.location.href = '/';
                }
                
            },
            error: function error(err) {
                console.log(err);
            }
        });
    });

    //更新按钮
    $("#update").click(function () {
        var bookname = $("#bookname").val();
        var writer = $("#writer").val();
        var id = $('#sid').val();
        $.ajax({
            url: '/update',
            type: "POST",
            data: { bookname: bookname, writer: writer, id: id },
            success: function success(data) {
                if(data.code ==0){
                    window.location.href = '/';
                }
               
            },
            error: function error(err) {
                console.log(err);
            }
        });
    });
});