// Array Spread Operator

let mobile = [
    ['iphone',['v14',['ram:2gb','memory:2gb','price:265161']]],
    ['infinix',['hot10',['ram:2gb','memory:2gb','price:56188']]],
    ['samsung',['A32',['ram:2gb','memory:2gb','price:268561']]],
    ['tecno',['s8',['ram;2gb','memory:2gb','price:2661']]],
                ]
// Using Spread Operator
      var Array = [...mobile]      
      document.write(`<h1 value${Array}> ${Array[3]} </h1>`)

// Object Spread Operator
      
      let mobiles = {
        iphone: {
            v14pro: {
                Ram: '4GB',
                Rom: "64GB",
                Price: "140,000",
    
            },
            v13: {
                Ram: '3GB',
                Rom: "64GB",
                Price: "120,000",
            },
            v12: {
                Ram: '3GB',
                Rom: "32GB",
                Price: "100,000",
            }
        },
        samsung: {
            s14: {
                Ram: '8GB',
                Rom: "64GB",
                Price: "100,000",
            },
            s13: {
                Ram: '6GB',
                Rom: "64GB",
                Price: "90,000",
            },
            s12: {
                Ram: '4GB',
                Rom: "64GB",
                Price: "80,000",
            },
            s11: {
                Ram: '4GB',
                Rom: "32GB",
                Price: "70,000",
            }
        },
        Xiomi: {
            x14: {
                Ram: '6GB',
                Rom: "64GB",
                Price: "70,000",
            },
            x13: {
                Ram: '6GB',
                Rom: "32GB",
                Price: "60,000",
            },
            x12: {
                Ram: '4GB',
                Rom: "32GB",
                Price: "50,000",
            }
        }
    }
    
// Using Spread Operator
    let mobileSpreadOperator = {...mobiles}

    
    let keys = Object.keys(mobileSpreadOperator);
    
    functionToDisplay(keys, "mobileName")
    
    function functionToDisplay(mobileData, idMobileName) {
        let mobileToShow = "";
        for (let i=0; i < mobileData.length; i++) {
        let mobileNametoDiplay = mobileData[2];
        mobileToShow += `<option value="${mobileNametoDiplay}"> ${mobileNametoDiplay} </Option>`;     
    }
       document.getElementById(idMobileName).innerHTML = mobileToShow;
    }
    function functionClickTo() {
        // mobileName.disabled = false;
        mobileModel = document.getElementById("mobileModel");
        let dataToShow = Object.keys(mobiles[mobileName.value]);
        functionToDisplay(dataToShow, "mobileModel");
      }
    function onValue() {
        let resultToDisplayName = Object.keys(mobiles[mobileName.value][mobileModel.value])
        let resultToDisplayModel = Object.values(mobiles[mobileName.value][mobileModel.value])
        document.getElementById("demo").innerHTML = resultToDisplayName[0];
        document.getElementById("demo1").innerHTML = resultToDisplayModel[0];
        document.getElementById("demo2").innerHTML = resultToDisplayName[1];
        document.getElementById("demo3").innerHTML = resultToDisplayModel[1];
        document.getElementById("demo4").innerHTML = resultToDisplayName[2];
        document.getElementById("demo5").innerHTML = resultToDisplayModel[2];
    }
    