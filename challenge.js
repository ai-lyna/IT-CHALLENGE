

async function playerData(){
    const apiKey='b91542ca5639e7729026ce4d0d609643';
    const playerUsername = document.getElementById("username").value;
    const playerPlatform = document.getElementById("platform").value;
    const card = document.getElementById("card-container");
    const errorMessage = document.getElementById("error-message");
    card.style.display = "none"
   
    if(playerUsername && playerPlatform){
        
    try {
        const response = await fetch(`https://api.mozambiquehe.re/bridge?auth=${apiKey}&player=${playerUsername}&platform=${playerPlatform}`)
        if (!response.ok) {
            throw new Error('Player not found or API error');
        }

        let data= await response.json();
        const name = data.global.name;
        const id = data.global.uid;
        const level = data.global.level;
        const rank = data.global.rank.rankScore;
        const image = data.global.avatar;

        const specialName= document.getElementById("special-name");
        const specialId= document.getElementById("special-id");
        const specialLevel= document.getElementById("special-level");
        const specialRank= document.getElementById("special-rank");
        const specialImage = document.getElementById("player-icon")
        
        specialName.textContent=name;
        specialId.textContent=id;
        specialLevel.textContent=level;
        specialRank.textContent=rank;
        specialImage.src=image;

        card.style.display="block";
        errorMessage.style.display="none";

    } catch (error) {
        console.error(error);
    }
    } else {
        errorMessage.textContent="please enter all necessary informations";
    }
}

document.getElementById("search-but").addEventListener("click", playerData);