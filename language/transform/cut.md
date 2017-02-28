# cut

{{'cut' | t}} selects a set of objects and cut them off from the remaining
objects.

In the example below, we create a {{ 'row' | tag }} of two cubes and place a sphere
above them, using {{ 'stack' | tag }} with negative spacing of `-5`.
Then, we simply add `t="cut sphere"` to the `<stack>` tag, which will select
the sphere and cut it off from the remaining objects, which are the
two cubes.

{% craftml %}
<!-- before cut -->
<stack spacing="-5" t="translate x -30">    
  <sphere color="red" t="scale 1.5"/>
  <row>
    <cube color="blue"/>
    <cube color="green"/>
  </row>
</stack>

<!-- after cut -->
<stack spacing="-5" t="cut sphere">    
  <sphere color="red" t="scale 1.5"/>
  <row>
    <cube color="blue"/>
    <cube color="green"/>
  </row>
</stack>
{% endcraftml %}

Selection is done based on CSS selector rules, which means we can use `id`
and `class` to be more specific about what objects we want to select to cut.

In this example, we have two cylinders above a large red cube. Suppose
we only wish to cut the green cylinder, we can assign an
id to each cylinder and use `cylinder#green` as the selector to choose
only the green cylinder to cut.

{% craftml %}
<row spacing="10">

<!-- original, before cut -->
<stack spacing="-5">    
  <row>
    <cylinder color="blue" id="blue"/>
    <cylinder color="green" id="green"/>
  </row>
  <cube color="red" t="scale 1.5"/>
</stack>

<!-- only the green sphere is cut -->
<stack spacing="-5" t="cut cylinder#green">    
  <row>
    <cylinder color="blue" id="blue"/>
    <cylinder color="green" id="green"/>
  </row>
  <cube color="red" t="scale 1.5"/>
</stack>

</row>
{% endcraftml %}
