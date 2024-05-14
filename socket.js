var stompClient = null;

function setConnected(connected) {
    $("#connect").prop("disabled", connected);
    $("#disconnect").prop("disabled", !connected);
    if (connected) {
        $("#conversation").show();
    }
    else {
        $("#conversation").hide();
    }
    $("#greetings").html("");
}

function connect() {
    var id = $("#userName").val();
    var supplierId = '61efb4894df4eaabe0864a0f';
    var token = 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImEzYjc2MmY4NzFjZGIzYmFlMDA0NGM2NDk2MjJmYzEzOTZlZGEzZTMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI2MDQ4ODg0NjI5NjAtNDY5b3I4OGRxdGNjdmdnMXZyMjE1dDVldmg3aTNvM2QuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI2MDQ4ODg0NjI5NjAtNDY5b3I4OGRxdGNjdmdnMXZyMjE1dDVldmg3aTNvM2QuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDE5MTkwMjI4NjM1MDcxOTcxNjUiLCJoZCI6ImF3YW50dW5haS5jb20iLCJlbWFpbCI6Im1hbmlzaEBhd2FudHVuYWkuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsIm5iZiI6MTcxNTUxOTcwNiwibmFtZSI6Ik1hbmlzaCBLIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0x4SG1PbXQyQS1OSFZ6UUd3WHFDbjN0b1pZcUVhQXZNbUc2cmJqUVI0a0tfZE90YURDPXM5Ni1jIiwiZ2l2ZW5fbmFtZSI6Ik1hbmlzaCIsImZhbWlseV9uYW1lIjoiSyIsImlhdCI6MTcxNTUyMDAwNiwiZXhwIjoxNzE1NTIzNjA2LCJqdGkiOiJlNDhiYmI5YWQ3Y2FiZWFhMjEzMmY2ODU1ODBiMGQ2YWYwNGU1ODI3In0.S0Pcm6Kx8xS45Qx4c8Q9R2Fc-bcxbxFvb6V1ckQzet1J1yt7zfFWFEk14RmyCl__5-Wku1vwJ5bHpVnbdgCLa_sQh7Hn7rZnwK6MQ4vuDQ-lZx6On8OTFEJWWJkQS6QvdKjOiV0qJdOqygEh7TVFAlKP3Xxw4I5-SIQNKHyHFtvhUU86qxFnAh7tByAA8UMeZgh0dMUWCQxNfNa6zn8PYHnziCxySq1Zv49HqcbRIOc3MB3MNsBWWEoYaZGYsNuQ6ppIj0V6CP56rLD9ll3O_bdCFjUgCszxAcjI2MJAUMB1LSZB7puGsRNBqveFeGXR9P6DiHksuKZ4DvCqApf5fA';
    //alert('mani');
    console.log("/connect-socket?deviceId=" + id + "&token=" +token);
    var socket = new SockJS("/connect-socket?deviceId=" + id + "&token=" +token);
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame) {
        setConnected(true);
        console.log('Connected: --------------');
        console.log(frame.toString());
        let arr = frame.toString().split(':');
        console.log(arr);
        console.log('-------------------->>> ' + foundUserName(frame));

        // console.log(' ---- ' + frame.user-name); if username is null then reconnect
        // changing /user/test to /topic/testing
        stompClient.subscribe('/topic/' + id, function (greeting) {
             showGreeting(greeting);
        });
    });
}

function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function foundUserName(frame){
    let found = false;
    frame = frame.toString();
    let arr = frame.split('\n');
    arr.forEach(el => {
        if(el.indexOf('user-name') >= 0){
            found = true;
        }
    });
    return found;
}


function disconnect() {
    if (stompClient !== null) {
    //alert(stompClient)
        stompClient.disconnect();
    }
    setConnected(false);
    console.log("Disconnected");
}

function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function sendName() {
    console.log("starting = " + Date.now());
    stompClient.send("/app/subscribe", {}, JSON.stringify({'username': $("#userName").val(),'group': $("#userId").val(),'msg': $("#name").val(),'deviceId': $("#userto").val(),'supplierId': '61efb4894df4eaabe0864a0f'}));
}

function showGreeting(message) {
    var myObj = JSON.parse(message.body);
    console.log("ending = " + Date.now());
    $("#greetings").append("<tr><td>" + myObj.username + " : " + myObj.msg + "</td></tr>");
}

$(function () {
    $("form").on('submit', function (e) {
        e.preventDefault();
    });
    $( "#connect" ).click(function() { connect(); });
    $( "#disconnect" ).click(function() { disconnect(); });
    $( "#send" ).click(function() { sendName(); });
});