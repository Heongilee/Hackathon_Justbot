(function() {
    var Message;
    Message = function(arg) {
        this.text = arg.text, this.message_side = arg.message_side;
        this.draw = function(_this) {
            return function() {
                var $message;
                $message = $($('.message_template').clone().html());
                $message.addClass(_this.message_side).find('.text').html(_this.text);
                $('.messages').append($message);
                return setTimeout(function() {
                    return $message.addClass('appeared');
                }, 0);
            };
        }(this);
        return this;
    };
    $(function() {
        var getMessageText, message_side, sendMessage;
        message_side = 'right';
        getMessageText = function() {
            var $message_input;
            $message_input = $('.message_input');
            return $message_input.val();
        };
        sendMessage = function(text) {
            var $messages, message;
            if (text.trim() === '') {
                return;
            }
            $('.message_input').val('');
            $messages = $('.messages');
            message_side = message_side === 'left' ? 'right' : 'left';
            message = new Message({
                text: text,
                message_side: message_side
            });
            message.draw();
            return $messages.animate({ scrollTop: $messages.prop('scrollHeight') }, 300);
        };
        $('.send_message').click(function (e) {

            let msg=$(".message_input").val();
            console.log(msg);
            sendMessage(getMessageText());
            $.ajax({
                type : "GET",
                url : "../../chatbot",
                dataType : "json",
                data : {msg:msg},
                error : function(){
                    alert("통신실패!!!!");
                },
                success : function(Parse_data){
                    console.log("success data : "+Parse_data);
                    //$("#Parse_Area").html(Parse_data); //div에 받아온 값을 넣는다.
                    let dt=JSON.stringify(Parse_data);
                    let dt1=dt.substring(8,dt.length-2);
                    //8부터 split
                    //alert("통신 데이터 값 : " + dt1);
                    return sendMessage(dt1+"<br><img src='./1월.png'></img>");

                }

            });
        });
        
        // 엔터 키를 누르면 메시지를 보냄.
        $('.message_input').keyup(function(e) {
            if (e.which === 13) {
                let msg=$(".message_input").val();
                console.log(msg);
                sendMessage(getMessageText());
                $.ajax({
                    type : "GET",
                    url : "../../chatbot",
                    dataType : "json",
                    data : {msg:msg},
                    error : function(){
                        alert("통신실패!!!!");
                    },
                    success : function(Parse_data){
                        console.log("success data : "+Parse_data);
                        //$("#Parse_Area").html(Parse_data); //div에 받아온 값을 넣는다.
                        let dt=JSON.stringify(Parse_data);
                        let dt1=dt.substring(8,dt.length-2);
                        //8부터 split
                        let path_img=''
                        if(dt1=='1월 학사일정입니다.')
                            path_img='./img/month1.png'
                        else if(dt1=='2월 학사일정입니다.')
                            path_img='./img/month2.png'
                        else if(dt1=='3월 학사일정입니다.')
                            path_img='./img/month3.png'
                        else if(dt1=='4월 학사일정입니다.')
                            path_img='./img/month4.png'
                        else if(dt1=='5월 학사일정입니다.')
                            path_img='./img/month5.png'
                        else if(dt1=='6월 학사일정입니다.')
                            path_img='./img/month6.png'
                        else if(dt1=='7월 학사일정입니다.')
                            path_img='./img/month7.png'
                        else if(dt1=='8월 학사일정입니다.')
                            path_img='./img/month8.png'
                        else if(dt1=='9월 학사일정입니다.')
                            path_img='./img/month9.png'
                        else if(dt1=='10월 학사일정입니다.')
                            path_img='./img/month10.png'
                        else if(dt1=='11월 학사일정입니다.')
                            path_img='./img/month11.png'
                        else if(dt1=='12월 학사일정입니다.')
                            path_img='./img/month12.png'
                        if(path_img=='')
                            return sendMessage(dt1);
                        else
                            return sendMessage(dt1+"<br><img src='"+path_img+"' height='200px' width='500px'></img>");

                    }

                });
            }
        });
        sendMessage('안녕하세오 그저봇이에오');

        // setTimeout(function () {
        //     return sendMessage('Hi Sandy! How are you?');
        // }, 1000);
        // return setTimeout(function () {
        //     return sendMessage('I\'m fine, thank you!');
        // }, 2000);
    });
}.call(this));