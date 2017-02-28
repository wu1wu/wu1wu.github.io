# row

{{ 'row' | tag}} creates a row structure by arranging all the children objects
into a "row" along the _x_ axis.

The first child remains at the same position. The
rest of the children are re-positioned in such a way that each child is
next to the previous child along the _x_ axis.

{% craftml %}
<row>
  <cube color="black"/>
  <cube/>
  <cube/>
  <cube/>
  <cube/>  
</row>
{% endcraftml %}

In terms of alignment, all objects are aligned to the middle along the _y_ axis
and aligned to the min along the _z_ axis. A `spacing` attribute can be optionally
provided to specify how much space to add between every two objects.

In the example below, three cubes of varying sizes are grouped into a row
along the _x_ axis, automatically aligned along the other two axes, and have
a spacing of 5 between every two cubes.

{% craftml %}
<row spacing="5">
  <cube color="black"/>
  <cube size="10 20 20"/>
  <cube size="10 30 30"/>
</row>
{% endcraftml %}
