var NewElement = {
    div: function (classname) {
       let div = document.createElement('div');
        if (classname) {
            div.classList.add(classname);
        }
        return div;
    },
    input: function (classname) {
        let input = document.createElement('input');
        if(classname){
            input.classList.add(classname);
        }
        return input;
    },
    button:function(classname) {
        let button = document.createElement('button');
        if(classname){
            button.classList.add(classname);
        }
        return button;
    },
    span:function(classname) {
        let span = document.createElement('span');
        if(classname){
            span.classList.add(classname);
        }
        return span;
    },
    ul:function(classname) {
        let ul = document.createElement('ul');
        if(classname){
            ul.classList.add(classname);
        }
        return ul;
    },
    li:function(classname) {
        let li = document.createElement('li');
        if(classname){
            li.classList.add(classname);
        }
        return li;
    },
    p:function(classname) {
        let p = document.createElement('p');
        if(classname){
            p.classList.add(classname);
        }
        return p;
    },
    a:function(classname) {
        let a = document.createElement('a');
        if(classname){
            a.classList.add(classname);
        }
        return a;
    },
}