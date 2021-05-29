function Encript(str) {
    let alphabet = '~ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghigklmnopqrstuvwxyz0123456789';

    let Item1 = 53;
    let Item2 = 75;

    let lst = [];
    for (let i = 0; i < str.length; i++)
    {
        let t = 1;
        for (let j = 0; j < Item1; j++)
        {
            t %= Item2;
            t *= (alphabet.indexOf(str[i]) % Item2);
        }

        t = t % Item2;
        lst.push(t);
    }

    return lst.join('');;
}

export default Encript;