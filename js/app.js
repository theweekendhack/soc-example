

//ES6 modules 
import Avatar from "./Avatar.js";
import AvatarScreen from "./AvatarScreen.js";

const main = (()=>{

    const avatars =[
        new Avatar("Thor","img/1.png",5),
        new Avatar("Wonder Woman","img/2.jpeg",5),
        new Avatar("Batman","img/3.jpeg",6),
        new Avatar("Superman","img/4.jpeg",3),
         new Avatar("Iron Man","img/5.jpeg",2.5),
         new Avatar("Thanos","img/6.jpg",4),
    ]


   const  returnSelectAvatar =(name)=>
    {
          return avatars.find(avatar=>avatar.name === name);
    }

    const getAvatarName = (img)=>
    {
        const p = img.previousElementSibling;
        const splitValues = p.innerText.split(":");
        const name = splitValues[1];

        return name;
    }

    AvatarScreen.displayAvatarsUponLoading(avatars);

    AvatarScreen.rootDiv.addEventListener("click",(event)=>{
        
        if(event.target.tagName === "IMG")
        {
            const imgNode = event.target;
            const nameOfAvatar = getAvatarName(imgNode);

            const selectedAvatar = returnSelectAvatar(nameOfAvatar);
            selectedAvatar.chosen=true;

            //Display welcome message
           AvatarScreen.displayMessage(nameOfAvatar);
           AvatarScreen.hideAvatarDivElements(avatars);

        }
        

    })

})();