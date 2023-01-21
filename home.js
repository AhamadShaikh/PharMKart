
let SlideImage = [
  "https://img9.hkrtcdn.com/22823/bnr_2282218_o.jpg",
  "https://img7.hkrtcdn.com/22822/bnr_2282186_o.jpg",
  "https://img1.hkrtcdn.com/22822/bnr_2282190_o.png",
  "https://img9.hkrtcdn.com/22822/bnr_2282198_o.jpg",
  "https://img9.hkrtcdn.com/22824/bnr_2282348_o.jpg",
  "https://img1.hkrtcdn.com/22823/bnr_2282210_o.jpg"
]

    let count = 0;
    function slideshowFun(images){
      image.setAttribute("src",SlideImage[count])
      count++;
      if(count == SlideImage.length){
          count = 0;
      }
    }

    let image = document.getElementById("sliding-win");
    let cont1 = document.querySelector("sliding-win")

    window.addEventListener("load", function () {
    slideshowFun();
    setInterval(function (){
        slideshowFun();
    }, 5000);
    });

let array = JSON.parse(localStorage.getItem("cartItem"))||[];

let arr1=[
    {
      name:"HealthKart HK Vitals Super Strength Fish Oil Purity 84%, 60 softgels",
      brand:"HealthKart",
      rating:3.4,
      mrp:999,
      Price:599,
      Discount:40,
      img:"https://img3.hkrtcdn.com/22586/prd_2258522_o.jpg",   
      id:1
    },
     {
      name: "MuscleBlaze Super Gainer XXL Powder, 5 kg (11 lb), Chocolate",
      brand:"Muscleblaze",
      rating:4.2,
      mrp:6449,
      Price:3599,
      Discount:44,
      img:"https://img4.hkrtcdn.com/12151/prd_1215013-MuscleBlaze-Super-Gainer-XXL-OP-11-lb-Chocolate_o.jpg",
      id:2,
    },
     {
      name:"MuscleBlaze Beginner's Protein Powders, 1 kg (2.2 lb), Cookies and Cream",
      brand:"Muscleblaze",
      rating:4.4,
      mrp:2279,
      Price:1329,
      Discount:41,
      img:"https://img6.hkrtcdn.com/12151/prd_1215005-MuscleBlaze-Beginners-Protein-OP-2.2-lb-Cookies-and-Cream_o.jpg", 
      id:3,
    },
     {
      name:"MB Fuel One Whey Protein Powder Immunity+, 1 kg (2.2 lb), Chocolate",
      brand:"MB Fuel One",
      rating:4.5,
      mrp:2669,
      Price:1749,
      Discount:34,
      img:"https://img2.hkrtcdn.com/13039/prd_1303871-MB-Fuel-One-Whey-Protein-Immunity-OP-2.2-lb-Chocolate_o.jpg",   
      id:4,
     }
];

let proCont = document.getElementById("pro-cont");
Display1(arr1);

function Display1(data){
    data.forEach((ele)=>{

        let divEl = document.createElement("div");

        let img = document.createElement("img");
        img.setAttribute("src",ele.img);

        let rating = document.createElement("p")
        rating.textContent = ele.rating;

        let desc = document.createElement("h4")
        desc.textContent = ele.name;
        
        let price = document.createElement("h2")
        price.textContent = `₹${ele.Price}`;

        let discount = document.createElement("h4")
        discount.textContent = `${ele.Discount}%`;

        let addCart = document.createElement("button")
        addCart.textContent = "Add to Cart";

        addCart.addEventListener("click",()=>{
          if(checkDuplicate(ele)){
            alert("Product Already in Cart")
          }else{
  
            array.push({...ele,quantity:1})
            localStorage.setItem("cartItem",JSON.stringify(array));
            alert("Product Added To Cart")
  
          }
      })

        divEl.append(img,rating,desc,price,discount,addCart);

        proCont.append(divEl);
        
    })
}


let static = document.getElementById("static-img");

  let staticImg = ["https://img7.hkrtcdn.com/22823/bnr_2282266_o.jpg",
          "https://img3.hkrtcdn.com/22852/bnr_2285182_o.jpg",
        "https://img1.hkrtcdn.com/22823/bnr_2282270_o.jpg",
        "https://img9.hkrtcdn.com/22823/bnr_2282268_o.jpg",
]

DisplayImg(staticImg)

function DisplayImg(data){

  data.forEach((ele)=>{
    let divEl = document.createElement("div");

    let img = document.createElement("img");
        img.setAttribute("src",ele);

        divEl.append(img);
    
    static.append(divEl)

  })
}

let arr2 = [
  {
          name:"HealthKart Biotin (10000 mcg) tablets, 90 tablet(s)",
          brand:"Healthkart",
          rating:3.8,
          mrp:1000,
          Price:449,
          Discount:55,
          img:"https://img2.hkrtcdn.com/14613/prd_1461211-HealthKart-Biotin-10000-mcg-OP-90-tablets-Unflavoured_o.jpg",  
          id:"5",
        },
         {
          name:"MuscleBlaze Beginner's Protein Powders, 1 kg (2.2 lb), Magical Mango",
          brand:"Muscleblaze",
          rating:4.4,
          mrp:2279,
          Price:1329,
          Discount:41,
          img:"https://img2.hkrtcdn.com/15126/prd_1512571-MuscleBlaze-Beginners-Protein-OP-2.2-lb-Magical-Mango_o.jpg",   
          id:"6"
        },
         {
          name:"MuscleBlaze Raw Whey Isolate Powder, 1 kg (2.2 lb)",
          brand:"Muscleblaze",
          rating:3.9,
          mrp:3699,
          Price:2199,
          Discount:40,
          img:"https://img8.hkrtcdn.com/12485/prd_1248437_o.jpg",   
          id:"7"
        },
         {
          name:"MuscleBlaze Biozyme Performance Whey Protein, 2 kg (4.4 lb), Rich Chocolate",
          brand:"Muscleblaze",
          rating:4.9,
          mrp:6149,
          Price:4749,
          Discount:22,
          img:"https://img10.hkrtcdn.com/15127/prd_1512659-MuscleBlaze-Biozyme-Performance-Whey-OP-4.4-lb-Rich-Chocolate_o.jpg",   
          id:"8"
       },
];


let proCont2 = document.getElementById("pro-cont2");
Display2(arr2);

function Display2(data){
  data.forEach((ele)=>{

      let divEl = document.createElement("div");

      let img = document.createElement("img");
      img.setAttribute("src",ele.img);

      let rating = document.createElement("p")
      rating.textContent = ele.rating;

      let desc = document.createElement("h4")
      desc.textContent = ele.name;
      
      let price = document.createElement("h2")
      price.textContent = `₹${ele.Price}`;

      let discount = document.createElement("h4")
      discount.textContent = `${ele.Discount}%`;

      let addCart = document.createElement("button")
      addCart.textContent = "Add to Cart";

      addCart.addEventListener("click",()=>{
        if(checkDuplicate(ele)){
          alert("Product Already in Cart")
        }else{

          array.push({...ele,quantity:1})
          localStorage.setItem("cartItem",JSON.stringify(array));
          alert("Product Added To Cart")

        }
    })

      divEl.append(img,rating,desc,price,discount,addCart);

      proCont2.append(divEl);
      
  })
}

let SlideImage2 = [
  "https://img5.hkrtcdn.com/22822/bnr_2282134_o.jpg",
  "https://img7.hkrtcdn.com/22849/bnr_2284836_o.jpg",
  "https://img3.hkrtcdn.com/22822/bnr_2282132_o.jpg",
  "https://img7.hkrtcdn.com/22822/bnr_2282136_o.png",
]
    let count1 = 0;
    function slideshowFun2(images){
      image1.setAttribute("src",SlideImage2[count1])
      count1++;
      if(count1 == SlideImage2.length){
          count1 = 0;
      }
    }

    let image1 = document.getElementById("sliding-win2");

    window.addEventListener("load", function () {
    slideshowFun2();
    setInterval(function (){
        slideshowFun2();
    }, 5000);
    });


    let arr=[
      {
        name:"HealthKart HK Vitals Super Strength Fish Oil Purity 84%, 60 softgels",
        brand:"HealthKart",
        rating:3.4,
        mrp:999,
        Price:599,
        Discount:40,
        img:"https://img3.hkrtcdn.com/22586/prd_2258522_o.jpg",   
        id:1
      },
       {
        name: "MuscleBlaze Super Gainer XXL Powder, 5 kg (11 lb), Chocolate",
        brand:"Muscleblaze",
        rating:4.2,
        mrp:6449,
        Price:3599,
        Discount:44,
        img:"https://img4.hkrtcdn.com/12151/prd_1215013-MuscleBlaze-Super-Gainer-XXL-OP-11-lb-Chocolate_o.jpg",
        id:2,
      },
       {
        name:"MuscleBlaze Beginner's Protein Powders, 1 kg (2.2 lb), Cookies and Cream",
        brand:"Muscleblaze",
        rating:4.4,
        mrp:2279,
        Price:1329,
        Discount:41,
        img:"https://img6.hkrtcdn.com/12151/prd_1215005-MuscleBlaze-Beginners-Protein-OP-2.2-lb-Cookies-and-Cream_o.jpg", 
        id:3,
      },
       {
        name:"MB Fuel One Whey Protein Powder Immunity+, 1 kg (2.2 lb), Chocolate",
        brand:"MB Fuel One",
        rating:4.5,
        mrp:2669,
        Price:1749,
        Discount:34,
        img:"https://img2.hkrtcdn.com/13039/prd_1303871-MB-Fuel-One-Whey-Protein-Immunity-OP-2.2-lb-Chocolate_o.jpg",   
        id:4,
      },
       {
        name:"HealthKart Biotin (10000 mcg) tablets, 90 tablet(s)",
        brand:"Healthkart",
        rating:3.8,
        mrp:1000,
        Price:449,
        Discount:55,
        img:"https://img2.hkrtcdn.com/14613/prd_1461211-HealthKart-Biotin-10000-mcg-OP-90-tablets-Unflavoured_o.jpg",  
        id:5,
      },
       {
        name:"MuscleBlaze Beginner's Protein Powders, 1 kg (2.2 lb), Magical Mango",
        brand:"Muscleblaze",
        rating:4.4,
        mrp:2279,
        Price:1329,
        Discount:41,
        img:"https://img2.hkrtcdn.com/15126/prd_1512571-MuscleBlaze-Beginners-Protein-OP-2.2-lb-Magical-Mango_o.jpg",   
        id:6
      },
       {
        name:"MuscleBlaze Raw Whey Isolate Powder, 1 kg (2.2 lb)",
        brand:"Muscleblaze",
        rating:3.9,
        mrp:3699,
        Price:2199,
        Discount:40,
        img:"https://img8.hkrtcdn.com/12485/prd_1248437_o.jpg",   
        id:7
      },
       {
        name:"MuscleBlaze Biozyme Performance Whey Protein, 2 kg (4.4 lb), Rich Chocolate",
        brand:"Muscleblaze",
        rating:4.9,
        mrp:6149,
        Price:4749,
        Discount:22,
        img:"https://img10.hkrtcdn.com/15127/prd_1512659-MuscleBlaze-Biozyme-Performance-Whey-OP-4.4-lb-Rich-Chocolate_o.jpg",   
        id:8
     },
  ];

  let mainDiv = document.getElementById("mainDiv");
  
  let main = document.getElementById("searchCont");
  let deleteEl = document.getElementById("deleteCont")
  let searchForm = document.querySelector("form");
  searchForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    searchData(arr);
  })
  
  function searchData(data){
    let searched = searchForm.search.value;
    // if(searched == ""){
    //   main.innerHTML = "";
    //   deleteEl.innerHTML = "";
    // }
    let filtered = data.filter((element,index)=>{
      if(element.name.toUpperCase().includes(searched.toUpperCase()) === true){
        return true;
      }else{
        return false;
      }
    });
    if(searched == ""){
      mainDiv.style.display = "inline"
    }else{
      Display(filtered)
  }
}
  
  function Display(data){
    deleteEl.innerHTML = "";
    // main.innerHTML = "";
    data.forEach((ele)=>{
  
        let divEl = document.createElement("div");
  
        let img = document.createElement("img");
        img.setAttribute("src",ele.img);
  
        let rating = document.createElement("p")
        rating.textContent = ele.rating;
  
        let desc = document.createElement("h4")
        desc.textContent = ele.name;
        
        let price = document.createElement("h2")
        price.textContent = `₹${ele.Price}`;
  
        let discount = document.createElement("h4")
        discount.textContent = `${ele.Discount}%`;
  
        let addCart = document.createElement("button")
        addCart.textContent = "Add to Cart";
  
        addCart.addEventListener("click",()=>{
          if(checkDuplicate(ele)){
            alert("Product Already in Cart")
          }else{
            array.push({...ele,quantity:1})
            localStorage.setItem("cartItem",JSON.stringify(array));
            alert("Product Added To Cart")
          }
      })
  
        divEl.append(img,rating,desc,price,discount,addCart);
  
        main.append(divEl);
        
    })
  }
  
  function checkDuplicate(product){
    for(let i=0;i<array.length;i++){
      if(array[i].id===product.id){
        return true
      }
    }
    return false
  }

