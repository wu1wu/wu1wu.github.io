# Structure

Given a set of 3D primitives or shapes, structural tags are useful for putting
them into a 3D structure.

The basic structural tags are
* {{ 'g' | tag }} groups objects together so that it can be transformed (e.g., scale, rotate) as a unit
* {{ 'row' | tag}} arranges objects along the x axis, as if it is a row in a table on the design plane
* {{ 'col' | tag}} arranges objects along the y axis, as if it is a column in a table on the design plane
* {{ 'stack' | tag}} arranges objects along the z axis, as if it is a vertical stack off the plane plane

{% craftml %}
<!-- a stack of three cubes -->
<stack>
  <cube color="skyblue"/>
  <cube color="blue"/>
  <cube color="darkblue"/>
</stack>

<!-- a column of three cubes -->
<col t="translate x 20">
  <cube color="lightgreen"/>
  <cube color="green"/>
  <cube color="darkgreen"/>
</col>

<!-- a row of three cubes -->
<row color="red" t="translate x 40">
  <cube color="pink"/>
  <cube color="red"/>
  <cube color="darkred"/>
</row>
{% endcraftml %}

{{ 'repeat' | attr}} is a directive to indicate that we want to make several
copies of the same object.

{% craftml %}
<stack spacing="2">
  <col repeat="5" spacing="2">
    <row repeat="5" spacing="2">
      <cube repeat="5"></cube>          
    </row>
  </col>
</stack>
{% endcraftml %}
