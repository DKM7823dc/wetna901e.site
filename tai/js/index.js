var s_count = parseInt(localStorage.getItem('count')) || 18365;
// function startFX() {
// 	var texts = $("#stockcode").val().trim();
// 	if (!texts) {
// 		$(".error").css("display", "flex");
// 		setTimeout(function () {
// 			$(".error").css("display", "none");
// 		}, 1500);
// 	} else {
// 		$("#fxq").css("display", "none");
// 		$(".fxbox").css("display", "flex");
// 		setTimeout(function () {
// 			$(".fxbox").css("display", "none");
// 			$("#fxh").css("display", "block");
// 		}, 500);

// 	}
// 	return false;
// };

function startFX() {
    var texts = $("#stockcode").val().trim();
    if (!texts) {
        $(".error").css("display", "flex");
        setTimeout(function () {
            $(".error").css("display", "none");
        }, 1500);
    } else {
        $("#fxq").css("display", "none");
        $("#fxh").css("display", "block");
    }
    return false;
}

function updateNum() {
	let randomIncrement = Math.floor(Math.random() * 8); 
	let randomDelay = Math.floor(Math.random() * 1501) + 500; 

	s_count += randomIncrement;
	$("#people_num").text(s_count);
	localStorage.setItem('count', s_count);

	setTimeout(updateNum, randomDelay); 
}

var init_count = parseInt(localStorage.getItem('count')) || 18365;
 function updateData() {
    const now = new Date();

    const formattedTime = now.toLocaleTimeString('ja-JP', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });

    document.getElementById('current-time-jp').textContent = formattedTime;
	
	let randomIncrement = Math.floor(Math.random() * 8); 
	let randomDelay = Math.floor(Math.random() * 1501) + 500; 

	init_count += randomIncrement;
	localStorage.setItem('count', init_count);
    document.getElementById('people_num').textContent = init_count.toLocaleString();
  }

  function scheduleNextUpdate() {
    const now = new Date();
    const milliseconds = now.getMilliseconds();
    const seconds = now.getSeconds();

    const delay = 5000 - ((seconds % 5) * 1000 + milliseconds);

    setTimeout(() => {
      updateData();            
      setInterval(updateData, 5000);
    }, delay);
  }

  // 启动
  scheduleNextUpdate();