window.onload = function (e) {
    // initialize and get basic information
    // https://developers.line.me/en/reference/liff/#initialize-liff-app
    liff.init(function (data) {
        initializeApp(data);
    });

    // Send message
    $("#quiz-form").on("submit", function (event) {
        event.preventDefault();
        var $answer = $("#quiz-answer");
        var answer = $answer.val();
        console.log(answer);
        if (answer === "crocodile") {
            $("#result").text("Woweeee! You got it! WOOO PARTY!");
        } else {
            $("#result").text("Try again!");
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

