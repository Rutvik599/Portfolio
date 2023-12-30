var typed = new Typed(".auto-type",{
    strings : ["Rutvik Patel","a FullStack Developer","a UI/UX Designer","a AI/ML Engineer","a Android Devloper"],
    typeSpeed:100,
    backSpeed:100,
    loop:true
})

window.onload = function() {
  var isLaptopOrPC = window.innerWidth >= 768; // Adjust the threshold as needed

  if (!isLaptopOrPC) {
      alert("Open Desktop Mode For better Experience !");
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
      window.open("https://drive.google.com/file/d/1WYsBOsto1BWoxZgATojTGQqqAJmTG3eh/view?usp=sharing", "_blank");
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
  else if(str ==='6'){
    window.open("https://www.linkedin.com/in/rutvik-patel-950261277/", "_blank");
  }
}