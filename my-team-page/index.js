const teamData = [
    {
        name: "Bill Mahoney",
        role: "Product Owner",
        image: "./images/photo1.png",
    },
    {
        name: "Saba Cabrera",
        role: "Art Director",
        image: "./images/photo2.png",
    },
    {
        name: "Shae Le",
        role: "Tech Lead",
        image: "./images/photo3.png",
    },
    {
        name: "Skylah Lu",
        role: "UX Designer",
        image: "./images/photo4.png",
    },
    {
        name: "Griff Richards",
        role: "Developer",
        image: "./images/photo5.png",
    },
    {
        name: "Stan John",
        role: "Developer",
        image: "./images/photo6.png",
    }
]

const memberRows = document.querySelector(".member-row");

teamData.forEach((member) => {


    memberRows.innerHTML += `
    <div class="member">
        <img src=${member.image} alt=${member.name} class="member__img" />
        <h3 class="member__name">${member.name}</h3 >
        <p class="member__role">${member.role}</p>
    </div>
    `
});