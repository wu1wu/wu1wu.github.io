# center

{{ 'center' | l}} centers the children of an object with respect to
the first child along selected dimensions.

In example below, there are three cylinders with varying heights
and radiuses. Initially, they all meet at the origin (0,0,0).

{% craftml %}
<!-- no centering -->
<g>
  <cylinder t="size xy 40 z 2" color="pink"/>
  <cylinder t="size xy 30 z 10" color="red"/>
  <cylinder t="size xy 20 z 50" color="darkred"/>
</g>
{% endcraftml %}

When no axis was given (i.e., `t="center"`), centering is done in all dimensions.
When some axes are specified (i.e., `t="center xy"`), centering is done in those axes.
For instance, `center xy` centers the three
cylinders in _x_ and _y_ axes with respect to the first child, which
is the pink disk.

{% craftml %}
<row>

<!--centering in xyz -->
<g l="center">
  <cylinder t="size xy 40 z 2" color="pink"/>
  <cylinder t="size xy 30 z 10" color="red"/>
  <cylinder t="size xy 20 z 50" color="darkred"/>
</g>

<!-- only centering in xy -->
<g l="center xy">
  <cylinder t="size xy 40 z 2" color="pink"/>
  <cylinder t="size xy 30 z 10" color="red"/>
  <cylinder t="size xy 20 z 50" color="darkred"/>
</g>

<!-- only centering in x -->
<g l="center x">
  <cylinder t="size xy 40 z 2" color="pink"/>
  <cylinder t="size xy 30 z 10" color="red"/>
  <cylinder t="size xy 20 z 50" color="darkred"/>
</g>

</row>
{% endcraftml %}
