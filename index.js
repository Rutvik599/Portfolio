var typed = new Typed(".auto-type",{
    strings : ["Rutvik Patel","Web Developer","UI/UX Designer","AI/ML Engineer","Android Devloper"],
    typeSpeed:100,
    backSpeed:100,
    loop:true
})

window.onload = function() {
  var isLaptopOrPC = window.innerWidth >= 768; // Adjust the threshold as needed

  if (!isLaptopOrPC) {
      alert("This site is designed for laptops and PCs \nSo that Content Will be not Visible on this Device");
  }
};

function project(str){
    if(str==='2'){
        window.open("https://github.com/Rutvik599/Walkers", "_blank");
    }
    else if(str ==='3'){
        window.open("https://drive.google.com/drive/u/1/folders/1P-9j9h6Z2mEgBCGOo2YHI1ZVz6K0jSo3", "_blank");
    }
    else if (str ==='4'){
        window.open("https://github.com/Rutvik599/Todolist", "_blank");
    }
    else if(str ==='1'){
        window.open("https://github.com/Rutvik599/Snappy1", "_blank");
    }
    else if(str==='5'){
      window.open("https://drive.google.com/file/d/15arBEmNuoJ4ZoG5P3UnhY-Dm2tO0epZ-/view?usp=drive_link", "_blank");
    }
}
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
  function refresh(){
    location.reload(true);
  }

function opensocial(str){
  if(str ==='1'){
    window.open("https://www.instagram.com/rutvikpatel5999/", "_blank");
  }
  else if(str ==='2'){
    window.open("https://twitter.com/rutvikpatel59", "_blank");
  }
  else if(str==='3'){
    window.open("https://discord.com/channels/810098649858048020/810098649858048023/", "_blank");
  }
  else if(str ==='4'){
    window.open("https://github.com/Rutvik599", "_blank");
  }
  else if(str==='5'){
    window.open("mailto:rutvikpatel21@gnu.ac.in", "_blank");
  }
}