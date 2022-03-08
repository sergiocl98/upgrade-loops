/* **Iteración #2: Condicionales avanzados**

Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados y añade la propiedad ***isApproved*** a true o false en consecuencia. Una vez lo tengas compruébalo con un ***console.log***.

Puedes usar este array para probar tu función: */

const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true},
		{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
		{name: 'Juan Miranda', T1: false, T2: true, T3: true},
		{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
		{name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

alumns.forEach(alumn =>{
    let numApproveds = 0;
    if(alumn.T1) numApproveds++;
    if(alumn.T2) numApproveds++;
    if(alumn.T3) numApproveds++;
    numApproveds >= 2 ? alumn.isApproved= true : alumn.isApproved= false;
})

console.log(alumns);