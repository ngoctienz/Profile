AlbumListProject = {
    projectImg: [
        "https://drive.google.com/uc?export=download&id=1_jp4aekIoeYRT0w6O6JflFfgOf0gdYn_",
        "https://drive.google.com/uc?export=download&id=19oza6rbmDVTpGYkBd9FTIwm6HjNbyAAa",
        "https://drive.google.com/uc?export=download&id=1IzLuxU4NxlNDl3jHSlj31-rzbdkbycA0",
        "https://drive.google.com/uc?export=download&id=1VVbQsdKaTHSW9LwKAFWjecZcL_ry_3QV"
    ],
    projectGif: [
        "https://drive.google.com/uc?export=download&id=1-Utmhi104-Hu8hCw29R5eqP5K0AELSFR",
        "https://drive.google.com/uc?export=download&id=1-W89Z3OYhd8AWy6p8rbVxKJkIAlccsSm",
        "https://drive.google.com/uc?export=download&id=1-POFEwHKOOuFkhWde7B6MHfN5Ig7pbXd",
        "https://drive.google.com/uc?export=download&id=1FSStjggfMXRR21A0TJLetnCraggeyxyN"
    ]
}

previewEle = document.querySelectorAll(".preview")

if (screen.width > 500 && document.querySelector("body").clientWidth > 500) {
    document.querySelector(".tips").innerText = "(Di chuột vào các mẫu để xem trước dự án và link source code bên dưới)"
} else {
    document.querySelector(".tips").innerText = "(Link source code bên dưới)"
}
for (let i = 0; i < previewEle.length; i++) {
    if (screen.width > 500 && document.querySelector("body").clientWidth > 500) {
        previewEle[i].onmouseenter = () => { previewEle[i].src = AlbumListProject["projectGif"][i] }
        previewEle[i].onmouseout = () => { previewEle[i].src = AlbumListProject["projectImg"][i] }
    } else {
        previewEle[i].src = AlbumListProject["projectGif"][i]
    }
}