function goTo(value){
    Vony({
        urlRoute : value+'.html',
        title    : value+' | Welcome to Vony JS'
    }).route(()=>{
        c1 = Vony({id:'c1'}).set("This is "+value);
        c2 = Vony({id:'c2'}).set("This is Content "+value);
        c3 = Vony({id:'c3'}).set("Lorem Ipsum quis ea in elit ullamco qui mollit ad sit proident commodo.");
    });
}