function openTab(tabName) {
    var i;
    var x = document.getElementsByClassName("tab");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    document.getElementById(tabName).style.display = "block";  
  }


  function myFunction() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }





  function jumpToTop(){
    document.getElementById("myNavbar").scrollIntoView({behavior:"smooth"});
  }



  function jumpToAbout(){
    document.getElementById("about").scrollIntoView({behavior:"smooth"});
  }


  function jumpToSkills(){
    document.getElementById("skills").scrollIntoView({behavior:"smooth"});
  }


  function jumpToServices(){
    document.getElementById("services").scrollIntoView({behavior:"smooth"});
  }


  function jumpToProjects(){
    document.getElementById("projects").scrollIntoView({behavior:"smooth"});
  }

  function jumpToContact(){
    document.getElementById("contact").scrollIntoView({behavior:"smooth"});
  }


  