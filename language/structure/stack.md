# stack

{{ 'stack' | tag}} creates a stack structure by arranging all the children objects
into a "stack" along the _z_ axis.

The first child remains at the same position. The
rest of the children are re-positioned in such a way that each child is
_vertically above_ to the previous child along the _z_ axis.

{% craftml %}
<stack>
  <cube color="yellow"/>
  <cube/>
  <cube/>
  <cube/>
  <cube/>  
</stack>
{% endcraftml %}

In terms of alignment, all objects are aligned to the middle along the _x_ and
_y_ axes. A `spacing` attribute can be optionally
provided to specify how much space to add between every two objects.

In the example below, three cubes of varying sizes are grouped into a stack,
automatically aligned to center along the _x_ and _y_ axes, and have
a spacing of 5 between every two cubes. Note that the first child (smallest, black)
is at the top of the stack, while the last child (largest) is at the base
of the stack.

{% craftml %}
<stack spacing="5">
  <cube size="30 30 10" color="yellow"/>
  <cube size="40 40 10"/>
  <cube size="50 50 10"/>
</stack>
{% endcraftml %}
