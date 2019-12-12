var append = function (selected, options) {
    
    var selectedCmp = (typeof selected === 'object')?selected:document.querySelector(selected)
    
    let component = document.createElement(options.name)
    
    if(options.id) {
        component.setAttribute('id', options.id)
    }
    
    if(options.attributes){
        Object.keys(options.attributes).forEach(function(key, index){
            component.setAttribute(key, options.attributes[key])
        })
    }
        
    var events = options.on
    
    if(events){
        Object.keys(events).forEach(function(key,index) {
            
            component.addEventListener(key, function(event){
              	events[key](event)  
            })
        });
    }
    
    let styles = options.style;
    
    if(styles) {
        Object.keys(styles).forEach(function(key, index){
            component.style[key] = styles[key]
        })
    }
    
    if(options.innerHTML)
        component.innerHTML = options.innerHTML;
    
    if(options.childs) {
        options.childs.forEach(function(child){
            append(component, child);
        })
    }
    
    selectedCmp.appendChild(component);
    
    return component;
}

export default append;