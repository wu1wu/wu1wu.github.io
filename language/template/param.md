# param

{{ 'param' | tag }} tags are used to make a model _parametric_, providing parameters
to control and customize various aspects of this model.

The basic form is:

```html
<param name="..." type="..." value="..."></param>
```

It defines a parameter by the given _name_ of the given _type_, which defaults
to the given _value_.

Here are some examples of _defining_ parameters:

```html
<!-- 'headRadius' parameter, which is a number, default value is 15 -->
<param name="headRadius" type="number" value="15"></param>

<!-- 'height' parameter, which is a number, default value is 5 -->
<param name="height" type="number" value="5"></param>

<!-- 'label' parameter, which is a string, default value is "hello" -->
<param name="label" type="string" value="hello"></param>
```

Once defined, parameters can be used within a `{{ ... }}` expression, in a way
similar to a number of popular HTML template engines such as [Mustache](https://mustache.github.io/), [Handlebars](http://handlebarsjs.com/), and [Nunjunks](https://mozilla.github.io/nunjucks/).

Here are some examples of _using_ parameters:

```html
<!-- a cylinder whose radius is controlled by the 'headRadius' parameter -->
<cylinder radius="{{headRadius}}"/>

<!-- a Javascript expression can be written inside {{  }} -->
<cylinder radius="{{headRadius/2 + 2}}"/>

<!-- can be used to compose a transform expression -->
<cylinder t="size xy {{headRadius}} z {{height}}"/>
```

Below is a live example putting these together:

{% craftml %}

<param name="headRadius" type="number" value="15"/>
<param name="height" type="number" value="5"/>
<param name="label" type="string" value="hello"/>

<row spacing="5">

<cylinder radius="{:headRadius:}"
  color="red"/>

<cylinder radius="{:headRadius/2 + 2:}"
  color="blue"/>

<cylinder t="size xy {:headRadius:} z {:height:}"
  color="green"/>

<div color="brown">{:label:}</div>

</row>

{% endcraftml %}
