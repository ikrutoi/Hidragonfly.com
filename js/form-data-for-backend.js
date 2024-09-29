async function postDataToBackend(data) {
    console.log('1111');
    await fetch('http://127.0.0.1:5000', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify(data),
    });

    // let result = await response.json();
    // console.log(result.message);
}

export { postDataToBackend };
