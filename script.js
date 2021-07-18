async function createdata(){
   let resp = await fetch('https://restcountries.eu/rest/v2/all')
   let data = await resp.json()
   console.log(data)
   cards(data);

}

function cards(data){
   var ctr = document.createElement('div')
      ctr.setAttribute('class','container')
      var row= document.createElement('div')
      row.setAttribute('class','row')
   
   data.forEach(element => {
      
      
      
      var col = document.createElement('div')
      col.setAttribute('class','col-4 mb-3')
      var card = document.createElement('div')
      card.setAttribute('class','card h-100')
      var img = document.createElement('img')
      img.setAttribute('class','card-img-top ')
      img.setAttribute('src',element.flag)
      var cardbody = document.createElement('div')
      cardbody.setAttribute('class','card-body');
      var heading = document.createElement('h5')
      heading.setAttribute('class','card-title')
      heading.innerHTML=`${element.name} `
      var psg = document.createElement('p')
      psg.setAttribute('class','card-text')
      psg.innerHTML =`Capital : ${element.capital} Currencies : ${element.currencies[0].code}` + ` Population : ${element.population} Area : ${element.area}`

      cardbody.append(heading,psg);
      card.append(img,cardbody);
      col.append(card)
      row.append(col)
      
   });
   ctr.append(row)
      document.body.append(ctr)
   

}
 function foo(){
   console.log('welcome')
}