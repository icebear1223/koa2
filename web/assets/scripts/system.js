$(document).ready(()  => {
    //新增按钮
    $('#sub').click(()  => {
        let bookname = $("#bookname").val();
        let writer = $("#writer").val();
        $.ajax({
            url:'/create',
            type:"POST",
            data:{bookname,writer},
            success(data){
                window.location.href = '/';
            },
            error(err){
                console.log(err);
            }
        })
    });

    //删除按钮
    $(".delete").click(()  => {
        let id = $(this).attr('sid');
        $.ajax({
            url:'/delete/' + id,
            type:"GET",
            success:function(data){
                window.location.href = '/';
            },
            error:function(err){
                console.log(err);
            }
        })
    });

    //更新按钮
    $("#update").click(()  => {
        let bookname = $("#bookname").val();
        let writer = $("#writer").val();
        let id = $('#sid').val();
        $.ajax({
            url:'/update',
            type:"POST",
            data:{bookname,writer,id},
            success(data) {
                window.location.href = '/';
            },
            error(err){
                console.log(err);
            }
        })
    })
})