# col

{{ 'col' | tag}} creates a column structure by arranging all the children objects
into a "column" along the _y_ axis.

The first child remains at the same position. The
rest of the children are re-positioned in such a way that each child is
next to the previous child along the _y_ axis.

{% craftml %}
<row>
  <cube color="black"/>
  <cube/>
  <cube/>
  <cube/>
  <cube/>  
</row>
{% endcraftml %}

In terms of alignment, all objects are aligned to the middle along the _x_ axis
and aligned to the min along the _z_ axis. A `spacing` attribute can be optionally
provided to specify how much space to add between every two objects.

In the example below, three cubes of varying sizes are grouped into a column
along the _y_ axis, automatically aligned along the other two axes, and have
a spacing of 20 between every two cubes.

{% craftml %}
<col spacing="20">
  <cube size="40 10 30" color="black"/>
  <cube size="30 10 20"/>
  <cube size="20 10 10"/>
</col>
{% endcraftml %}
