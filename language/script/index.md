# script

CraftML provides a rich vocabulary of tags and transformation / layout commands
that can meet most of the 3D modeling needs. But there are special situations when
this vocabulary is insufficient. For instance, we may want to layout elements
in a wave pattern or enlarge any element that is smaller than 20mm in _x_. In such
situations, we can use a `script:tag` tag to contain custom code to
achieve what we want.

Inside each `script:tag`, three special variables are exposed to let us
modify various aspects of the model we are designing:

* `$params` a Javascript object whose properties are the parameters available within the scope.
* `$` a query object providing a jQuery-like API for searching and manipulating the _this_ element
and its descendants.
* `this` a reference to the element that contains this script tag.

## `$params`

```html
<param name="foo" type="number" value="5"/>
<param name="bar" type="string" value="hello"/>
<script>
	$params.foo
	// => 5
	$params.bar
	// => 'hello'
	this
</script>
```

## `$`

```html
<cube/>
<script>
	// select cube and scale it by 2
	$('cube').t('scale 2')
</script>

<!-- is equivalent to -->
<cube t="scale 2"/>
```

## `this`

```html
<g>
	<cube/>
	<cube/>
	<script>
		this.children.length
		// => 2
	</script>
	<cube/>
	<cube/>
	<script>
		this.children.length
		// => 4
	</script>
</g>
```

## Live Example

{% craftml %}
<cube/>

<script>
	// add a new parameter 'foo'
	$params.foo = 5

	// select the cube and scale it by 2
	$('cube').t('scale {:foo:}')
</script>

<!-- foo can now be used as a parameter -->
<cylinder t="translate z {:foo * 10:}"/>
{% endcraftml %}
