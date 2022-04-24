// 
//
const xhr=new XMLHttpRequest();
console.log('fetching');
xhr.open('Get',` https://newsapi.org/v2/everything?q=Apple&from=2022-04-24&sortBy=popularity&apiKey=62c6a3d3505843d7863e8440179f3dee`,true)

xhr.onload=function()
{
    if(this.status==200)
    {
    const res=JSON.parse(this.responseText)
    const articles=res.articles
    console.log(articles);
    let newsHtml=""
    articles.forEach(function(element,index) {
        // let news=`<div class="accordion " id="accordionFlushExample">
        // <div class="accordion-item">
        // <h2 class="accordion-header" id="flush-heading${index}">
        // <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse${index}" aria-expanded="false" aria-controls="flush-collapse${index}">
        // Breaking News ${index+1}:- ${element.title}
        // </button>
        // </h2>
        // <div id="flush-collapse${index}" class="accordion-collapse collapse" aria-labelledby="flush-heading${index}" data-bs-parent="#accordionFlushExample">
        //     <div class="accordion-body">${element.content}.  <a href="${element.url}" target="main">Read more</a></div>
        //   </div>
        //   </div>`
        let news=`
        <div class="card" style="width:18rem;">
        <img src="${element.urlToImage}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${element.title}</h5>
          <p class="card-text">${element.content}</p>
          <a href="${element.url}" target="main" class="btn btn-primary">Read More</a>
       
      </div></div>`
          newsHtml+=news
        });
        let newsBox=document.getElementById('newsBox').innerHTML=newsHtml
    
    }
}

xhr.send()