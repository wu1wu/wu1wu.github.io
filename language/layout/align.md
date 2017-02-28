# align

{{ 'align' | l}} takes the children of an object and align them to meet
at the _min_ or _max_ side of the first child along selected axes.


In example below, there are three groups of cubes. Each group has three cubes
with varying sizes in _y_; they are aligned along the _y_ axis to
the _min_, _center_, and _max_ respectively. In all cases, the first child
(yellow) did not move.

{% craftml %}
<col spacing="10">

<!-- aligned to min side in y -->
<g l="align y min">
  <cube t="size y 20; position x 0" color="yellow"/>
  <cube t="size y 15; position x 20" color="pink"/>
  <cube t="size y 10; position x 40" color="red"/>
</g>

<!-- aligned to the center in y -->
<g l="align y center">
  <cube t="size y 20; position x 0" color="yellow"/>
  <cube t="size y 15; position x 20" color="lightgreen"/>
  <cube t="size y 10; position x 40" color="green"/>
</g>

<!-- aligned to max in y -->
<g l="align y max">
  <cube t="size y 20; position x 0" color="yellow"/>
  <cube t="size y 15; position x 20" color="skyblue"/>
  <cube t="size y 10; position x 40" color="blue"/>
</g>

</col>
{% endcraftml %}
