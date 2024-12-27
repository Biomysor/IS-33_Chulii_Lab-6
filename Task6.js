console.log("Task 6")
function sales(medicines){
    const newmedicines=[];
    for(let i=0;i<medicines.length;i++){
        const medicines2={...medicines[i]};
        medicines2.id=i+1;
        if(medicines2.price>300){
            medicines2.price=+(medicines2.price*0.7).toFixed(2);
        }
        
        newmedicines.push(medicines2);
    }
    return newmedicines;
}
const medicines = [
    { name: "Noshpa", price: 170 },
    { name: "Analgin", price: 55 },
    { name: "Quanil", price: 310 },
    { name: "Alphacholine", price: 390 },
  ];
  const newmedicines=sales(medicines);
  console.log("Початковий масив:",medicines);
  console.log("Змінений масив:",newmedicines);
