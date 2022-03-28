function nolasa(m1,m2,m3){
    const malas=document.getElementsByClassName("mala");
     m1 =parseFloat (mala1.value);
     m2 =parseFloat (mala2.value);
     m3 =parseFloat (mala3.value);

    if(m1>0 &&m2>0&& m3>0){
        console.log({m1,m2,m3});
        return{m1,m2,m3};
 }else{
     console.log(false);
     return false;
 }
}
function perimetrs(m1,m2,m3){
    const m=nolasa();
    m1=m.m1;m2=m.m2;m3=m.m3;
    console.log(m1,m2,m3);
    const p=m1+m2+m3;
    console.log(p);
    return(p);
}
function pusper(m1,m2,m3){
    const pusper = perimetrs(m1,m2,m3)/2;
    console.log(pusper);
    return(pusper);

}
function laukums(m1,m2,m3){
    const pusper=perimetrs(m1,m2,m3)/2;
    let tlaukums=Math.sqrt(pusper*((pusper-m1)*(pusper-m2)*(pusper-m3)));
        console.log(tlaukums);
        return tlaukums;

    
}
function trijsturis(m1,m2,m3){
    if(m1<m2+m3 && m2<m1+m3 && m3<m1+m2){
        return true;
    }else{
        return false;
    
    }
}

function rezultats(){
    const m=nolasa();
    m1=m.m1;m2=m.m2;m3=m.m33;
    console.log(m1,m2,m3);
    if(!nolasa()){
        t="nekorekti ievadīti.trijstura malu vērtībām ir jābūt lielākām par 0";
    }else{
        if (trijsturis(m1,m2,m3)==false){
            t="Trijstūris neeksiste,jo jebkuru 2 malu garumu summai ir jābūt lielākai par trešo malu!";
        }else{
            t="Trijstūris ar malu garumiem"+m1+","+m2+" un "+m3+"eksiste." ;
            if (m1==m2 && m2==m3){
            
                t+="tas ir vienādmalu trijstūris."
            }else{
                if (m1==m2 || m2==m3 || m1==m3){
                    t+="Tas ir vienādsānu trijstūris."
                
            }
            
            }
            const p = perimetrs (m1,m2,m3);
            const s=Math.round(laukums(m1,m2,m3)* 100)/100;
            t+="Perimetrs ir"+p+"un laukums ir"+s+ ".";
        }
        }
        console.log(t);
        return t;
    }
    function izvadaTekstu(){
        const teksts=rezultats();
        console.log(teksts);
        const sakne=document.getElementById("izvade");
        const raksti=document.createElement("p");
        raksti.innerHTML=teksts;
        sakne.appendChild(raksti);
    }

    

    

