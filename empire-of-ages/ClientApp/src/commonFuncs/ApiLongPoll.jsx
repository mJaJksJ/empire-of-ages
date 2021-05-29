async function Get(url, operation) {
    let response = await fetch(url);
    if (response.status == 502) {
        await Get(url, operation);
    } else if (response.status != 200) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        await Get(url, operation);
    } else {
        let data = await response.json();
        operation(data);
        await new Promise(resolve => setTimeout(resolve, 1000));
        await Get(url, operation);
    }
}

export default Get;