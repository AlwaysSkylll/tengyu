myLayMsg = function(content,icon){
    icon = icon || 5;
    layer.msg(content, {time: 1800, icon: icon});
}

function createTimeUrl(url)
{
    url = url || window.location.href;
    return updateQueryStringParameter(url,'t',new Date().getTime());
}

function updateQueryStringParameter(uri, key, value) {
    if(!value) {
        return uri;
    }
    var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
    var separator = uri.indexOf('?') !== -1 ? "&" : "?";
    if (uri.match(re)) {
        return uri.replace(re, '$1' + key + "=" + value + '$2');
    }
    else {
        return uri + separator + key + "=" + value;
    }
}


/*通用表单提交*/
fnFormSubmit = function (formname) {
    formname = formname ? formname : 'formf';
    url = createTimeUrl('/feedsubmit');
    $.ajax({
        type: "POST",
        url: url,
        data: $('#' + formname).serialize(),
        dataType: "json",
        success: function (data) {

            if (data.code == 1) {
                document.getElementById(formname).reset();
                layer.msg(data.msg, {
                    icon: 6,
                    time: 2000 //2秒关闭（如果不配置，默认是3秒）
                }, function(){
                    location.reload();
                });
                
                
            } else {
                myLayMsg(data.msg);
                if($('#captcha').length>0){
                    captcha();
                }

            }
        }
    });

    return false;
}


function captcha() {
    var captcha = document.getElementById('captcha');
    captcha.src = createTimeUrl('/verify?');
}

//倒计时
function times() 
{
    var setTime = null;
    var time = 60;
    setTime = setInterval(function () {
        if (time <= 0) {
            clearInterval(setTime);
            //添加事件
            $("#getcode").attr("onclick", "getcode()");
            $("#getcode").text('发送验证码');
            return;
        }
        time--;
        msgs = time + "s";
        $("#getcode").text(msgs);
    }, 1000);
}

//获取验证码
function getcode() 
{
    var mobile = $.trim($("#mobile").val());
    console.log('mobile',mobile)
    if (mobile == '') {
        myLayMsg('手机号码不能为空！');
        return false;
    }
    if (!mobile.match(/^((1[3-9][0-9]{1})+\d{8})$/)) {
        myLayMsg('手机号码格式不正确！');
        return false;
    }
    $.ajax({
        type: 'post',
        url: createTimeUrl('/getcode'),
        data: {mobile: mobile},
        dataType: 'json',
        success: function (res) {
            if (res.code==1) {
                times();
                $("#getcode").removeAttr("onclick");
                // /**测试**/
                // $("#msgcode").val(res.data)
                /**测试**/
                myLayMsg(res.msg,6);

            } else {
                myLayMsg(res.msg);
            }
        }
    });
}

fnJobDelivery = function (formname) {
    formname = formname ? formname : 'formf';
    url = createTimeUrl('/jobs');
    $.ajax({
        type: "POST",
        url: url,
        data: $('#' + formname).serialize(),
        dataType: "json",
        success: function (data) {

            if (data.code == 1) {
                document.getElementById(formname).reset();
                layer.msg(data.msg, {
                    icon: 6,
                    time: 2000 //2秒关闭（如果不配置，默认是3秒）
                }, function(){
                    location.reload();
                });
                
                
            } else {
                myLayMsg(data.msg);
                if($('#captcha').length>0){
                    captcha();
                }

            }
        }
    });

    return false;
}