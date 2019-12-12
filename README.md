##Installing
Using npm:

```
$ npm install axios
```

## Example

```html
<div id="pageContainer"></div>
```

```javascript

<script>
var pageContainer = append('#pageContainer', {
            name: 'div',
            attributes: {
                'class': 'ui segment'
            },
            style: {
                'backgroundColor': 'red',
                'height': '10vh',
                'width': '100%',
                'color': 'white',
                border: 'dotted white 1px'
            },
            on:{
                'click': function() {
                    console.log('clicked');
                },
                'dbclick': function () {
                    console.log('dbclicked');
                },
                'mouseover': function() {
                    console.log('mouse Over');
                }
            },
            childs: [
                {
                    name: 'h2',
                    id: 'mainUiSeg',
                    attributes: {
                        class: 'ui header',
                    },
                    innerHTML: 'Segment Header',
                    style: {
                        color: 'white'
                    }
                },
                {
                    name: 'div',
                    attributes: {
                        class: "content"
                    },
                    childs: [
                        {
                            name: 'home-page-dashbord'
                        }
                    ]
                    
                }
            ]
        });
        
        
        var btn = append(pageContainer, {
            name: 'button',
            attributes: {
                'class': 'ui button'
            },
            on: {
                click: function() {
                    alert('Button clicked');
                }
            },
            innerHTML: 'Click Me'
        });
</script>
```