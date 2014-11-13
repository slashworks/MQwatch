MQwatch
=======

Little Javascript observer for mediaquery event handling.

## Quick start

MQwatch looks up the computedStyle of the body element and scan for body:after { content: "myDefinition" }. This keys are the identifyers to trigger events.

So first we have to define the body:after elements to each media query we like to trigger.

### CSS

```css

        body:after {

            content: 'screen';
            display: none;
        }

        @media only screen
        and (max-width : 1024px)
        {

            body:after {

                content: 'smallScreen';
                display: none;
            }

        }

        @media only screen
        and (max-width : 768px)
        {

            body:after {

                content: 'tablets';
                display: none;
            }

        }

```

### Implement MQwatch

Now we have to implement MQwatch. Insert a script tag at the bottom of the body tag.

```html

<script src="MQwatch.js"></script>
</body>

```

### Define Events

It`s time to implement some events


```html

<script src="MQwatch.js"></script>
<script>
        MQWatch
                .on('smallScreen', function(type) {

                    alert(type);
                    // Your code goes here

                })
                .on('tablets', function(type) {

                    alert(type);
                    // Your code goes here

                })
                .on('screen', function(type) {

                    alert(type);
                    // Your code goes here

                })
</script>
</body>

```
Thats it!

## Multi Events

It is also posible to define multiple events for one MQwatch element:


```javascript

        MQWatch
                .on('smallScreen', function(type) {

                    alert(type);
                    // Your code goes here

                })
                
		MQWatch
                .on('smallScreen', function(type) {

                    alert(type + 'Secound');
                    // Your code goes here

                })
                
       //or
       
		MQWatch
                .on('smallScreen', function(type) {

                    alert(type);
                    // Your code goes here

                })
				.on('smallScreen', function(type) {

                    alert(type + 'Secound');
                    // Your code goes here

                })   

```