txt=document.querySelector("input");
console.log(txt.value);
btn=document.querySelector("button");
btn.addEventListener("click",job);
 async function job(){
    try{
    let country=txt.value;
    let w=await axios.get("https://api.weatherapi.com/v1/current.json?key=277178c35b7f4680adf213524262402&q="+country+"&aqi=yes");
    let Capital=document.querySelector("#Capital");
    let Time=document.querySelector("#Time");
    let temp=document.querySelector("#temp");
    let humidity=document.querySelector("#humidity");
    Capital.innerText="Capital : " + w.data.location.name;
    Time.innerText="Time : "+w.data.location.localtime;
    temp.innerText="Current Temperature : "+w.data.current.temp_c+" C";
    humidity.innerText="Humidity : "+w.data.current.humidity+"%";

    }
    catch(err){
        console.log("enter proper country name");
    }
}
