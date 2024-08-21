let data=[{"id":1,"name":"Buiron","gender":"Male"},
    {"id":2,"name":"Cristie","gender":"Female"},
    {"id":3,"name":"Bert","gender":"Male"},
    {"id":4,"name":"Raimund","gender":"Male"},
    {"id":5,"name":"Sheeree","gender":"Female"},
    {"id":6,"name":"Prudence","gender":"Female"},
    {"id":7,"name":"Juditha","gender":"Female"},
    {"id":8,"name":"Angus","gender":"Male"},
    {"id":9,"name":"Shirley","gender":"Female"},
    {"id":10,"name":"Montgomery","gender":"Male"},
    {"id":11,"name":"Boothe","gender":"Male"},
    {"id":12,"name":"Emelda","gender":"Female"},
    {"id":13,"name":"Anallese","gender":"Female"},
    {"id":14,"name":"Salomo","gender":"Non-binary"},
    {"id":15,"name":"Harmonie","gender":"Genderfluid"},
    {"id":16,"name":"Dallon","gender":"Male"},
    {"id":17,"name":"Rossie","gender":"Male"},
    {"id":18,"name":"Frederik","gender":"Male"},
    {"id":19,"name":"Danya","gender":"Male"},
    {"id":20,"name":"Godiva","gender":"Female"},
    {"id":21,"name":"Chrissy","gender":"Male"},
    {"id":22,"name":"Zared","gender":"Male"},
    {"id":23,"name":"Manfred","gender":"Male"},
    {"id":24,"name":"Alberik","gender":"Non-binary"},
    {"id":25,"name":"Simonne","gender":"Female"},
    {"id":26,"name":"Missie","gender":"Genderfluid"},
    {"id":27,"name":"Berget","gender":"Non-binary"},
    {"id":28,"name":"Kiri","gender":"Female"},
    {"id":29,"name":"Baudoin","gender":"Male"},
    {"id":30,"name":"Allison","gender":"Female"},
    {"id":31,"name":"Alexandr","gender":"Male"},
    {"id":32,"name":"Ilaire","gender":"Male"},
    {"id":33,"name":"Jordon","gender":"Male"},
    {"id":34,"name":"Nevile","gender":"Male"},
    {"id":35,"name":"Kari","gender":"Female"},
    {"id":36,"name":"Lisabeth","gender":"Female"},
    {"id":37,"name":"Chev","gender":"Male"},
    {"id":38,"name":"Britni","gender":"Female"},
    {"id":39,"name":"Noreen","gender":"Female"},
    {"id":40,"name":"Milt","gender":"Male"},
    {"id":41,"name":"Susanetta","gender":"Female"},
    {"id":42,"name":"Andrej","gender":"Male"},
    {"id":43,"name":"Lilla","gender":"Female"},
    {"id":44,"name":"Corenda","gender":"Female"},
    {"id":45,"name":"Maura","gender":"Female"},
    {"id":46,"name":"Miranda","gender":"Female"},
    {"id":47,"name":"Arni","gender":"Polygender"},
    {"id":48,"name":"Rahal","gender":"Female"},
    {"id":49,"name":"Vanya","gender":"Female"},
    {"id":50,"name":"Angele","gender":"Female"},
    {"id":51,"name":"Juliann","gender":"Female"},
    {"id":52,"name":"Lotty","gender":"Female"},
    {"id":53,"name":"Jacquetta","gender":"Female"},
    {"id":54,"name":"Loy","gender":"Male"},
    {"id":55,"name":"Giff","gender":"Male"},
    {"id":56,"name":"Laure","gender":"Female"},
    {"id":57,"name":"Hedwig","gender":"Female"},
    {"id":58,"name":"Carter","gender":"Male"},
    {"id":59,"name":"Alexine","gender":"Female"},
    {"id":60,"name":"Eadmund","gender":"Genderfluid"},
    {"id":61,"name":"Lindsey","gender":"Male"},
    {"id":62,"name":"Lyndsey","gender":"Bigender"},
    {"id":63,"name":"Meara","gender":"Female"},
    {"id":64,"name":"Rodolphe","gender":"Male"},
    {"id":65,"name":"Smith","gender":"Male"},
    {"id":66,"name":"Edmund","gender":"Male"},
    {"id":67,"name":"Catrina","gender":"Female"},
    {"id":68,"name":"Violante","gender":"Female"},
    {"id":69,"name":"Johannah","gender":"Female"},
    {"id":70,"name":"Arther","gender":"Male"},
    {"id":71,"name":"Lonee","gender":"Genderfluid"},
    {"id":72,"name":"Gladi","gender":"Female"},
    {"id":73,"name":"Eliot","gender":"Male"},
    {"id":74,"name":"Marius","gender":"Male"},
    {"id":75,"name":"Ellene","gender":"Female"},
    {"id":76,"name":"Martie","gender":"Female"},
    {"id":77,"name":"Berthe","gender":"Female"},
    {"id":78,"name":"Nisse","gender":"Female"},
    {"id":79,"name":"Marketa","gender":"Female"},
    {"id":80,"name":"Adelaide","gender":"Female"},
    {"id":81,"name":"Trent","gender":"Male"},
    {"id":82,"name":"Jo","gender":"Male"},
    {"id":83,"name":"Rutter","gender":"Male"},
    {"id":84,"name":"Hastie","gender":"Male"},
    {"id":85,"name":"Mufi","gender":"Agender"},
    {"id":86,"name":"Pattin","gender":"Male"},
    {"id":87,"name":"Durand","gender":"Male"},
    {"id":88,"name":"Tallie","gender":"Male"},
    {"id":89,"name":"Jerry","gender":"Male"},
    {"id":90,"name":"Corny","gender":"Male"},
    {"id":91,"name":"Roderic","gender":"Genderfluid"},
    {"id":92,"name":"Tandy","gender":"Female"},
    {"id":93,"name":"Midge","gender":"Female"},
    {"id":94,"name":"Paulo","gender":"Male"},
    {"id":95,"name":"Bartel","gender":"Male"},
    {"id":96,"name":"Rabi","gender":"Male"},
    {"id":97,"name":"Scarlett","gender":"Female"},
    {"id":98,"name":"Jaye","gender":"Polygender"},
    {"id":99,"name":"Meryl","gender":"Male"},
    {"id":100,"name":"Emily","gender":"Female"}]

    /*let female_emp=[]
    let Male_emp=[]

    /*for (emp of data){
        if (emp.gender==="Female"){
            female_emp.push(emp)
        }
        if (emp.gender==="Male"){
            Male_emp.push(emp)
        }*/
       


    /*for(i=0;i<=data.length-1;i++){
        if(data[i].gender==="Male"){
            Male_emp.push(data[i])
        }
        if(data[i].gender==="Female"){
            female_emp.push(data[i])
        }*/


    let Male_emp=data.filter((emp)=>{
        return emp.gender==="Male"
    })

    let female_emp=data.filter((emp)=>{
        return emp.gender==="Female"
    })
    
    console.log(female_emp)
    console.log(Male_emp)