const minhaPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => {resolve('OK')}, 2000);
});

// minhaPromise()
// .then(response => {console.log(response);})
// .catch(err => {console.log(err);});

async function executaPromise(){
    const response = await minhaPromise();

    console.log(response);
// o await não pode ser usado fora de uma função asincrona;
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
}

// const executaPromise = async() => {
//     console.log(await minhaPromise());
// }

executaPromise();