# $params

`$params` is an object variable holding the parameters available within the
current scope. `$params` makes it possible to access, modify, and add
these parameters.

### Accessing the value of a parameter

```html
<param name="foo" type="number" value="5"/>
<param name="bar" type="string" value="hello"/>
<script>
  $params.foo
  // => 5
  $params.bar
  // => 'hello'
</script>
```

### Modifying parameters

```html
<param name="foo" type="number" value="5"/>
<param name="bar" type="string" value="hello"/>
<script>
  $params.foo = $params.foo * 2
  $params.bar = $params.bar + ' world'
</script>
<cube t="scale {{ foo }}"/>
<!-- this cube is scaled by 10 -->

<div>{{ bar }}</div>
<!-- the text is 'hello world' -->
```
### Adding parameters

```html
<script>
    $params.tee = 5
    $params.data = {
      name: 'Jane',
      age: 15
    }
</script>
<cube t="scale {{ tee }}"/>
<!-- this cube is scaled by 5 -->

<col>
  <div>{{ data.name }}</div>
  <div>{{ data.age }}</div>
</col>
<!-- two lines of text: 'Jane', '15' -->
```
