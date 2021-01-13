window.onload = function (e) {
    // initialize and get basic information
    // https://developers.line.me/en/reference/liff/#initialize-liff-app
    liff.init(function (data) {
        initializeApp(data);
    });
    
    window.alert("0.1");

    // Send message
    document.getElementById('q1').addEventListener('click', function () {  

        let c = 0;

        if (form.catName[2].checked == true){
            c = 1;
            window.alert("ok");
        }

        if (c == 1) {
            liff.sendMessages([{
                type: 'text',
                text: '1번 문제의 정답을 맞추셨습니다!'
            }
            ]).then(function () {
                window.alert("Sent");
            }).catch(function (error) {
                window.alert("Error sending message: " + error);
            });
        }
       
    });
};



function initializeApp(data) {
    document.getElementById('languagefield').textContent = data.language;
    document.getElementById('viewtypefield').textContent = data.context.viewType;
    document.getElementById('useridfield').textContent = data.context.userId;
    document.getElementById('utouidfield').textContent = data.context.utouId;
    document.getElementById('roomidfield').textContent = data.context.roomId;
    document.getElementById('groupidfield').textContent = data.context.groupId;
}

