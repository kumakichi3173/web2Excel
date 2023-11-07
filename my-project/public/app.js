document.getElementById('data-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const data1 = document.getElementById('data1').value;
    const data2 = document.getElementById('data2').value;
    
    // サーバーサイドにPOSTリクエストを送信
    fetch('/update-excel', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data1, data2 }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});
