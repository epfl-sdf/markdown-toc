var toc = require('markdown-toc');

var select_all_on_click = function(textBox) {
  textBox.onfocus = function() {
    textBox.select();

    // Work around Chrome's little problem
    textBox.onmouseup = function() {
        // Prevent further mouseup intervention
        textBox.onmouseup = null;
        return false;
    };
  };
};

select_all_on_click(document.getElementById('md'));
select_all_on_click(document.getElementById('toc'));

window.convert = function(e){

  document.getElementById('toc').value
  =toc(document.getElementById('md').value).content;
};

convert();
