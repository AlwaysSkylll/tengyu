myLayMsg = function(content,icon){
    icon = icon || 5;
    layer.open({
        content:content,
        time:2,
        end: function(){
            
        }
    });
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
                layer.open({
                    content: data.msg,
                    time:2,
                    end: function(){
                        location.reload();
                    }
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
                layer.open({
                    content: data.msg,
                    time:2,
                    end: function(){
                        location.reload();
                    }
                });
                
                
            } else {
                myLayMsg(data.msg);
                

            }
        }
    });

    return false;
}