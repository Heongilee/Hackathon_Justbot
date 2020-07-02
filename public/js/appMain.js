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

        // 테스트
        $(".st-actionContainer").click(function(){
            
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
                        /////////////////////////////////////////////////////////
                        // 교과 과정
                        ////////////////////////////////////////////////
                        else if(dt1=='디자인 이노베이션학과 교과과정은 다음과 같습니다.')
                            path_img='./img/디자인이노베이션교과과정.png'
                        else if(dt1=='만화애니메이션학과 교과과정은 다음과 같습니다.')
                            path_img='./img/만화애니메이션교과과정.png'
                        else if(dt1=='정보보호학과 14년도 교과과정은 다음과 같습니다.')
                            path_img='./img/정보보호14.png'
                        else if(dt1=='정보보호학과 15년도 교과과정은 다음과 같습니다.')
                            path_img='./img/정보보호15.png'
                        else if(d1=='정보보호학과 16년도 교과과정은 다음과 같습니다.')
                            path_img='./img/정보보호16.png'
                        else if(dt1=='정보보호학과 17년도 교과과정은 다음과 같습니다.')
                            path_img='./img/정보보호17.png'
                        else if(dt1=='정보보호학과 18년도 교과과정은 다음과 같습니다.')
                            path_img='./img/정보보호18.png'
                        else if(dt1 == '데이터사이언스학과 교과과정은 다음과 같습니다.')
                            path_img='./img/데사교과과정.png'
                        else if(dt1 == '소프트웨어학과 16년도 교과과정은 다음과 같습니다.')
                            path_img='./img/소웨16.png'
                        else if(dt1 == '소프트웨어학과 20년도 교과과정은 다음과 같습니다.')
                            path_img='./img/소웨20.png'
                        else if(dt1 == '지능기전공학과 스마트기기 17년도 교과과정은 다음과 같습니다.')
                            path_img='./img/17스마트.png'
                        else if(dt1 == '지능기전공학과 스마트기기 18년도 교과과정은 다음과 같습니다.')
                            path_img='./img/18스마트.png'
                        else if(dt1 == '지능기전공학과 스마트기기 19년도 교과과정은 다음과 같습니다.')
                            path_img='./img/19스마트.png'
                        else if(dt1 == '지능기전공학과 스마트기기 20년도 교과과정은 다음과 같습니다.')
                            path_img='./img/20스마트.png'
                        else if(dt1 == '지능기전공학과 무선이동체 17년도 교과과정은 다음과 같습니다.')
                            path_img='./img/17무선이동.png'
                        else if(dt1 == '지능기전공학과 무선이동체 18년도 교과과정은 다음과 같습니다.')
                            path_img='./img/18무선이동.png'
                        else if(dt1 == '지능기전공학과 무선이동체 19년도 교과과정은 다음과 같습니다.')
                            path_img='./img/19무선이동.png'
                        else if(dt1 == '지능기전공학과 무선이동체 20년도 교과과정은 다음과 같습니다.')
                            path_img='./img/20무선이동.png'
                        else if(dt1 == '컴퓨터공학과 16년도 교과과정은 다음과 같습니다.')
                            path_img='./img/컴공16.png'
                        else if(dt1 == '컴퓨터공학과 17년도 교과과정은 다음과 같습니다.')
                            path_img='./img/컴공17.png'
                        else if(dt1 == '컴퓨터공학과 18년도 교과과정은 다음과 같습니다.')
                            path_img='./img/컴공18.png'
                        else if(dt1 == '컴퓨터공학과 19년도 교과과정은 다음과 같습니다.')
                            path_img='./img/컴공19.png'
                        /////////////////////////////////////////////////////////
                        // 졸업 요건
                        ////////////////////////////////////////////////
                        else if(dt1=='12학번 학생의 졸업 요건은 다음과 같습니다.')
                            path_img='../asset/gra_req_img/12.jpg'
                        else if(dt1=='13학번 학생의 졸업 요건은 다음과 같습니다.')
                            path_img='../asset/gra_req_img/13.jpg'
                        else if(dt1=='14학번 학생의 졸업 요건은 다음과 같습니다.')
                            path_img='../asset/gra_req_img/14.jpg'
                        else if(dt1=='15학번 학생의 졸업 요건은 다음과 같습니다.')
                            path_img='../asset/gra_req_img/15.jpg'
                        else if(dt1=='16학번 학생의 졸업 요건은 다음과 같습니다.')
                            path_img='../asset/gra_req_img/16.jpg'
                        else if(dt1=='17학번 학생의 졸업 요건은 다음과 같습니다.')
                            path_img='../asset/gra_req_img/17.jpg'
                        else if(dt1=='18학번 학생의 졸업 요건은 다음과 같습니다.')
                            path_img='../asset/gra_req_img/18.jpg'
                        else if(dt1=='19학번 학생의 졸업 요건은 다음과 같습니다.')
                            path_img='../asset/gra_req_img/19.jpg'
                        else if(dt1=='20학번 학생의 졸업 요건은 다음과 같습니다.')
                            path_img='../asset/gra_req_img/20.jpg'
                        if(path_img=='')
                            return sendMessage(dt1);
                        else
                            return sendMessage(dt1+"<br><img src='"+path_img+"' height='auto' width='500px'></img>");

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