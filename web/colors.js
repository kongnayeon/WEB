var Links = {
  setColor:function(color){
    // var alist = document.querySelectorAll('a');
    //   var i = 0;
    //   while( i < alist.length){
    //     alist[i].style.color = color;
    //     i = i + 1;
    //   }
    $('a').css('color', color);
  }
}

var Body = {
  setColor:function(color){
    //document.querySelector('body').style.color = color;
    $('body').css('color', color);
  },
  setBackgroundColor:function(color){
    //document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor', color);
  }
}


function nightDayHandler(self){
  var target = document.querySelector('body');
    if(self.value === 'night'){
      Body.setBackgroundColor('dimgray');
      Body.setColor('palevioletred');
      self.value = 'day';

      Links.setColor('palevioletred');
    } else{
      Body.setBackgroundColor('white');
      Body.setColor('skyblue');
      self.value = 'night';

      Links.setColor('skyblue');
    }
}
