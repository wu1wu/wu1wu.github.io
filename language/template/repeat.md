# repeat

{{ 'repeat' | attr }} is a directive that can be added to any tag to repeat
the object represented by that tag multiple times.

For example, to create a row of five cubes, instead of writing `<cube/>` five
times, we write only one `<cube/>` and add `repeat="5"` to the tag.

{% craftml %}
<row>
  <cube repeat="5"/>
</row>
{% endcraftml %}

{{ 'repeat' | attr }} also allows us to iterate through an array using
the expression:

__repeat__="_variable_name_ __in__ _array_"

For example, we add `i in [1,2,3]` to the cube tag and `i` becomes a variable
we will have access to in the rest of the tag. Here, we give `i` as an
argument to the transform command {{ 'scale' | t}} to scale each repeated instance
of the cube by 1, 2, and 3 respectively.
{% craftml %}
<row>
  <cube repeat="i in [1,2,3]" t="scale {:i:}"/>
</row>
{% endcraftml %}

For advanced users, it is possible to create an array in a {{ 'script' | tag}}
tag and make it available as a parameter in the repeat directive, rather
than squeezing everything into the tag. Also, one can write custom
Javascript code to generate the array.

{% craftml %}
<script>
  $params.is = [1,2,3]
</script>
<row>
  <cube repeat="i in is" t="scale {:i:}"/>  
</row>
{% endcraftml %}
