function tabelaMultiplicacao(n) { 
    let x = [];
    let y = [];
    for (let i = 0; i <= n; i++) 
    {
        x[i] = [];
        for(let l = 0; l <=n; l++)
        {
            x[i][l] = i*l;
        }

    }
    console.table(x);
}

console.log(tabelaMultiplicacao(10));