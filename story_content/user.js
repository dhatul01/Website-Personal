function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5m2UqnI0OPD":
        Script1();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSongku');
audio.src= "bekson.mp3";
audio.load();
audio.play();
audio.volume=0.3;
}

