//  JavaScript is a lot like a shopping centre in a recession
//  There's a lot of closures
(function(doc, win) {

    //  If you don't have QSA, you must hate me
    if(!doc.querySelector) {
        return alert('Your browser sucks. You don\'t have QSA. Sorry.');
    }
    
    var list = doc.querySelector('section'),
        all = list.children,
        i = all.length,
        html = [];
            
    while(i--) {
        html[i] = all[i].innerHTML;
        all[i].innerHTML = '';
    }
        
    var animate = function(i) {
        var me = all[i],
                
            //  C = character delay
            //  D = line delay
            c = 0, d = 0;
            
        //  Censor the page   
        var inty = setInterval(function() {
            me.innerHTML = html[i].substr(0, c) + '<span class="typing">|</span>';
            c++;
            
            if(html[i].length < c) {
                clearInterval(inty);
                i++;
                
                
                if(all[i]) {
                    setTimeout(function() {
                        me.innerHTML = html[i - 1];
                        animate(i);
                    }, 400);
                }
            }
        }, 70);
    };    
animate(0);
})(document, window);