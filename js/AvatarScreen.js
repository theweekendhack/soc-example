const AvatarScreen = {

    rootDiv : document.querySelector("#root"),

    displayAvatarsUponLoading(avatars)
    {

        for(let i=0; i<avatars.length; i++)
        {
          this.rootDiv.innerHTML+=`<div class="avatar">
          <p>Name :${avatars[i].name}</p>
          <img src="${avatars[i].img}">
          <p>Power Level : ${avatars[i].powerLevel}</p></div>`
        }

    },

    displayMessage(avatar)
    {
        alert(`${avatar} has been selected!`)
    },

    hideAvatarDivElements(avatars)
    {
        const avatarNodes = document.querySelectorAll(".avatar");

        for(let i=0; i<avatarNodes.length; i++)
        {
            if(avatars[i].chosen === false)
            {
                avatarNodes[i].classList.add("hide");
            }

        }

    }





}


export default AvatarScreen;
