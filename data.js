var data = [
    {
      title: "Sheen Sheen Abad girls",
      content:
        "Their rural public school was on fire due to the failure of old, non-maintained heating equipment in 2011. 29 students out of 37 suffered severe burns all over their bodies, including their faces. Two of them, Seeran Yeganeh and Sarya Rasul-Zadeh, didn't survive. They received no financial aid for their treatments. The other 29 names were never published.",
      image: "https://media.hamshahrionline.ir/d/2020/12/05/4/4524380.jpg",
      link: "https://media.hamshahrionline.ir/d/2020/12/05/4/4524380.jpg",
    },
    {
      title: "Sheen Sheen2 Abad girls",
      content:
        "Their rural public school was on fire due to the failure of old, non-maintained heating equipment in 2011. 29 students out of 37 suffered severe burns all over their bodies, including their faces. Two of them, Seeran Yeganeh and Sarya Rasul-Zadeh, didn't survive. They received no financial aid for their treatments. The other 29 names were never published.",
      image: "https://media.hamshahrionline.ir/d/2020/12/05/4/4524380.jpg",
      link: "https://media.hamshahrionline.ir/d/2020/12/05/4/4524380.jpg",
    },
    {
      title: "Sheen Sheen4 Abad girls",
      content:
        "Their rural public school was on fire due to the failure of old, non-maintained heating equipment in 2011. 29 students out of 37 suffered severe burns all over their bodies, including their faces. Two of them, Seeran Yeganeh and Sarya Rasul-Zadeh, didn't survive. They received no financial aid for their treatments. The other 29 names were never published.",
      image: "https://media.hamshahrionline.ir/d/2020/12/05/4/4524380.jpg",
      link: "https://media.hamshahrionline.ir/d/2020/12/05/4/4524380.jpg",
    },
  ];

var item = data[Math.floor(Math.random() * data.length)];
document.getElementById("title").innerText = item.title;
document.getElementById("content").innerText = item.content;
document.getElementById("image").setAttribute("src", item.image);
document.getElementById("image").setAttribute("alt", item.title);
document.getElementById("button").setAttribute("href", item.link);
