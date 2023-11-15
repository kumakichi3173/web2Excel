document.getElementById('data-form').addEventListener('submit', function(e) {
    e.preventDefault(); // フォームのデフォルト送信を阻止

    // フォームのデータを取得
    const data1 = document.getElementById('data1').value;
    const data2 = document.getElementById('data2').value;
    
    // XMLHttpRequestを使用してサーバーサイドにPOSTリクエストを送信
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:3000/update-excel', true);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xhr.onload = function() {
    if (xhr.status === 200) {
        alert('Excel was updated successfully!');
    } else {
        alert('Error: ' + xhr.status);
    }
    };
    xhr.send(JSON.stringify({ data1: data1, data2: data2 }));
});